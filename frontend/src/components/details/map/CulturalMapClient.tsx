'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import {
  Layers,
  Plus,
  Minus,
  Navigation,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import maplibregl from 'maplibre-gl';

import { useMapInit } from '@/hooks/useMapFeatures';
import { fitToBounds, buildSitePopupHTML } from '@/lib/mapHelper';
import {
  LAYER_THUMBNAILS,
  LAYERS,
  POPUP_STYLES,
  SITE_MARKER_COLOR,
  SITE_PIN_PATH,
} from '@/static/mapConstants';
import type { CulturalSite } from '@/types/cultural';
import type { LayerKey, SiteGroupFocus } from '@/types/map';
import { GeoJSONData } from '@/types/map';

type Props = {
  sites: CulturalSite[];
  center: [number, number];
  onSiteClick?: (index: number) => void;
  focus?: SiteGroupFocus | null;
  siteColors?: string[];
  /** Fixed opening zoom, from `CulturalTourDetail.mapOverviewZoom`. When
   *  omitted the map fits the site bounds instead. */
  overviewZoom?: number;
};

/** Cultural tours need a deeper ceiling than the trek/hike default of 16: a
 *  heritage day can be three monuments ~40m apart, which stay a single blob at
 *  zoom 16 (≈2.1 m/px). */
const CULTURAL_MAX_ZOOM = 19;

/** Framing applied when the itinerary panel focuses one day's sites. Tighter
 *  padding and a shorter flight than the initial whole-tour fit.
 *
 *  `maxZoom` is held deliberately shallow (client review, twice: "don't zoom
 *  too much"). A day's sites are often only tens of metres apart — Bandipur
 *  day 01 is two sites ~190 m apart, Lumbini day 01 three within ~50 m — so an
 *  uncapped fit drops to street level. Framing the day in its surroundings
 *  reads better than filling the viewport with the gap between two pins;
 *  CULTURAL_MAX_ZOOM still lets a reader pinch in for detail. */
const DAY_FOCUS_OPTS = {
  padding: 90,
  duration: 900,
  maxZoom: 14,
  essential: true,
} as const;

/** fitToBounds derives its box from features + extraPoints; day focus only
 *  supplies points, so it passes this placeholder collection. */
const EMPTY_FC = {
  type: 'FeatureCollection',
  features: [],
} as unknown as GeoJSONData;

type FocusTarget = { lng: number; lat: number; inner: SVGSVGElement };

function makePinMarkerEl(color: string): {
  wrapper: HTMLElement;
  inner: SVGSVGElement;
} {
  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'width:28px;height:38px;';

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '28');
  svg.setAttribute('height', '38');
  svg.setAttribute('viewBox', '0 0 28 38');
  svg.style.cssText =
    'display:block;filter:drop-shadow(0 2px 5px rgba(0,0,0,0.35));' +
    'transform-origin:bottom center;transition:transform 0.18s ease;cursor:pointer;';

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', SITE_PIN_PATH);
  path.setAttribute('fill', color);
  path.setAttribute('stroke', '#ffffff');
  path.setAttribute('stroke-width', '1.6');
  svg.appendChild(path);

  const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  dot.setAttribute('cx', '14');
  dot.setAttribute('cy', '12.8');
  dot.setAttribute('r', '4.2');
  dot.setAttribute('fill', '#ffffff');
  svg.appendChild(dot);

  wrapper.appendChild(svg);
  return { wrapper, inner: svg };
}

/** Pin geometry, and the scale applied while a pin is hovered. The marker is
 *  `anchor: 'bottom'`, so the pin body occupies this height ABOVE the
 *  coordinate — and the popup is only ever visible while the pin is hovered,
 *  so clearance has to be measured against the SCALED size. */
const PIN_W = 28;
const PIN_H = 38;
const PIN_HOVER_SCALE = 1.2;
const PIN_GAP = 5;

const HOVER_H = PIN_H * PIN_HOVER_SCALE;
const HOVER_HALF_W = (PIN_W / 2) * PIN_HOVER_SCALE;
/** Vertical middle of the hovered pin body, for side-anchored popups. */
const PIN_MID_Y = -HOVER_H / 2;

/**
 * Per-anchor popup offsets. A scalar offset is measured from the coordinate,
 * which put the popup inside the 38px pin whenever MapLibre anchored it
 * `bottom` (popup above the marker). Each entry shifts the popup clear of the
 * pin instead: up past its full height when above, down from the tip when
 * below, and sideways past its half-width when beside.
 */
const SITE_POPUP_OFFSET: maplibregl.Offset = {
  bottom: [0, -(HOVER_H + PIN_GAP)],
  'bottom-left': [0, -(HOVER_H + PIN_GAP)],
  'bottom-right': [0, -(HOVER_H + PIN_GAP)],
  // The pin sits entirely above the coordinate, so a popup below it only has
  // to clear the point itself.
  top: [0, PIN_GAP],
  'top-left': [0, PIN_GAP],
  'top-right': [0, PIN_GAP],
  left: [HOVER_HALF_W + PIN_GAP, PIN_MID_Y],
  right: [-(HOVER_HALF_W + PIN_GAP), PIN_MID_Y],
  center: [0, PIN_MID_Y],
};

function ControlBtn({
  onClick,
  disabled,
  active,
  title,
  children,
}: {
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-colors duration-150 disabled:opacity-40 focus:outline-none
        ${active ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
    >
      {children}
    </button>
  );
}

export default function CulturalMapClient({
  sites,
  center,
  onSiteClick,
  focus,
  siteColors,
  overviewZoom,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { containerRef, map, mapLoaded } = useMapInit(
    center,
    CULTURAL_MAX_ZOOM,
  );

  const markersRef = useRef<maplibregl.Marker[]>([]);
  const popupRef = useRef<maplibregl.Popup | null>(null);
  const focusTargetsRef = useRef<Map<number, FocusTarget>>(new Map());

  // Minimal Point feature collection driving the initial fit-to-bounds.
  const pointFC = useMemo(() => {
    const features = sites
      .filter((site) => site.coordinates?.length === 2)
      .map((site) => ({
        type: 'Feature' as const,
        geometry: {
          type: 'Point' as const,
          coordinates: [site.coordinates[1], site.coordinates[0]] as [
            number,
            number,
          ],
        },
        properties: {},
      }));

    return {
      type: 'FeatureCollection',
      features,
    } as unknown as GeoJSONData;
  }, [sites]);

  /** Centre of the site bounding box, as MapLibre `[lng, lat]`. Only used by
   *  the fixed-zoom opening view. Deliberately NOT the `center` prop, which is
   *  the arithmetic mean of the site coordinates and so gets pulled toward
   *  whichever cluster has the most pins; the bounds centre frames the outliers
   *  evenly. `null` when no site has usable coordinates. */
  const boundsCenter = useMemo<[number, number] | null>(() => {
    const coords = sites.filter((site) => site.coordinates?.length === 2);
    if (coords.length === 0) return null;

    const lats = coords.map((site) => site.coordinates[0]);
    const lngs = coords.map((site) => site.coordinates[1]);

    return [
      (Math.min(...lngs) + Math.max(...lngs)) / 2,
      (Math.min(...lats) + Math.max(...lats)) / 2,
    ];
  }, [sites]);

  // One marker per site; hover shows the site popup, click opens it in the list.
  useEffect(() => {
    if (!mapLoaded || !map) return;

    if (!popupRef.current) {
      popupRef.current = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
        // Plain `trail-popup` only: the site tooltip now uses the same branded
        // green-header card as treks and hikes, so the base tip colouring
        // applies and the old dark `--site` override is gone.
        className: 'trail-popup',
        offset: SITE_POPUP_OFFSET,
        maxWidth: 'none',
      });
    }

    markersRef.current.forEach((mk) => mk.remove());
    markersRef.current = [];
    focusTargetsRef.current = new Map();

    let hideTimer: ReturnType<typeof setTimeout> | null = null;

    const clearHideTimer = () => {
      if (hideTimer !== null) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
    };

    const scheduleHide = (innerEl: SVGSVGElement) => {
      hideTimer = setTimeout(() => {
        innerEl.style.transform = 'scale(1)';
        popupRef.current?.remove();
        hideTimer = null;
      }, 150);
    };

    sites.forEach((site, index) => {
      if (!site.coordinates) return;

      const [lat, lng] = site.coordinates;
      const color = siteColors?.[index] ?? SITE_MARKER_COLOR;
      const { wrapper, inner } = makePinMarkerEl(color);

      focusTargetsRef.current.set(index, {
        lng,
        lat,
        inner,
      });

      const popupHTML = buildSitePopupHTML(site);

      wrapper.addEventListener('mouseenter', () => {
        clearHideTimer();
        inner.style.transform = 'scale(1.2)';
        const popup = popupRef.current;
        if (!popup) return;
        popup.setHTML(popupHTML).setLngLat([lng, lat]).addTo(map);
        const popupEl = popup.getElement();
        if (popupEl) {
          popupEl.onmouseenter = clearHideTimer;
          popupEl.onmouseleave = () => scheduleHide(inner);
        }
      });

      wrapper.addEventListener('mouseleave', () => scheduleHide(inner));
      wrapper.addEventListener('click', () => onSiteClick?.(index));

      const marker = new maplibregl.Marker({
        element: wrapper,
        anchor: 'bottom',
      })
        .setLngLat([lng, lat])
        .addTo(map);

      markersRef.current.push(marker);
    });

    return () => {
      clearHideTimer();
      markersRef.current.forEach((mk) => mk.remove());
      markersRef.current = [];
      // Focus targets are keyed by site index, so a tour with fewer sites would
      // otherwise inherit the previous tour's trailing entries and focus a day
      // onto pins that no longer exist.
      focusTargetsRef.current.clear();
    };
  }, [mapLoaded, map, sites, onSiteClick, siteColors]);

  // Initial framing. Two modes:
  //
  //  - `overviewZoom` set (currently Bandipur): open at exactly that zoom,
  //    centred on the site bounds. A FIXED zoom is what pins the scale-bar
  //    reading, because a fit is viewport-dependent — Bandipur's four sites fit
  //    at ~14.4 on a wide canvas but ~13.3 on a narrow one, which reads "200 m"
  //    and "500 m" respectively. Pick the value by MEASURING in a browser, not
  //    by computing it: terrain is applied even at pitch 0 and magnifies the
  //    effective scale by a canvas-dependent 1.1-1.3x.
  //  - otherwise: fit the site bounds, capped shallow so a compact tour opens
  //    as a town-level overview rather than at street level.
  useEffect(() => {
    if (!mapLoaded || !map) return;

    if (overviewZoom !== undefined && boundsCenter) {
      map.easeTo({ center: boundsCenter, zoom: overviewZoom, duration: 2000 });
      return;
    }

    fitToBounds(map, pointFC, undefined, { maxZoom: 14 });
  }, [mapLoaded, map, pointFC, overviewZoom, boundsCenter]);

  // Frame every site belonging to the day the itinerary panel just opened.
  // Markers are registered by the effect above, which runs first, so
  // `focusTargetsRef` is already populated for the current `sites`.
  useEffect(() => {
    if (!map || !mapLoaded || !focus || focus.indices.length === 0) return;

    const targets = focus.indices
      .map((index) => focusTargetsRef.current.get(index))
      .filter((target): target is FocusTarget => Boolean(target));

    if (targets.length === 0) return;

    fitToBounds(
      map,
      EMPTY_FC,
      targets.map(({ lng, lat }) => [lng, lat] as [number, number]),
      DAY_FOCUS_OPTS,
    );

    targets.forEach(({ inner }) => {
      inner.style.transform = 'scale(1.35)';
    });
    const resetTimer = setTimeout(() => {
      targets.forEach(({ inner }) => {
        inner.style.transform = 'scale(1)';
      });
    }, 1200);

    return () => clearTimeout(resetTimer);
  }, [map, mapLoaded, focus]);

  // Keep page scroll smooth until the user explicitly engages with the map.
  const [mapInteractionEnabled, setMapInteractionEnabled] = useState(false);
  useEffect(() => {
    if (!map) return;
    if (mapInteractionEnabled) {
      map.scrollZoom.enable();
      map.boxZoom.enable();
      map.dragPan.enable();
      map.touchZoomRotate.enable();
      map.doubleClickZoom.enable();
    } else {
      map.scrollZoom.disable();
      map.boxZoom.disable();
      map.dragPan.disable();
      map.touchZoomRotate.disable();
      map.doubleClickZoom.disable();
    }
  }, [map, mapInteractionEnabled]);

  const [activeLayer, setActiveLayer] = useState<LayerKey>('satellite');
  const [showLayerPicker, setShowLayerPicker] = useState(false);

  const handleLayerChange = useCallback(
    (key: LayerKey) => {
      if (!map) return;
      setActiveLayer(key);
      setShowLayerPicker(false);
      (Object.keys(LAYERS) as LayerKey[]).forEach((k) => {
        map.setLayoutProperty(
          `${k}-layer`,
          'visibility',
          k === key ? 'visible' : 'none',
        );
      });
    },
    [map],
  );

  const [isFullscreen, setIsFullscreen] = useState(false);
  const handleFullscreen = useCallback(() => {
    const el = wrapperRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(() => {});
    } else {
      document
        .exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(() => {});
    }
  }, []);
  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  const [is3D, setIs3D] = useState(false);
  const handle3DToggle = useCallback(() => {
    if (!map) return;
    if (is3D) {
      map.easeTo({ pitch: 0, bearing: 0, duration: 600 });
    } else {
      map.easeTo({ pitch: 62, bearing: -15, duration: 600 });
    }
    setIs3D((prev) => !prev);
  }, [map, is3D]);

  return (
    <div ref={wrapperRef} className="relative h-full w-full">
      <style>{POPUP_STYLES}</style>

      {showLayerPicker && (
        <div
          className="absolute inset-0 z-9"
          onClick={() => setShowLayerPicker(false)}
        />
      )}

      {/* Right-side controls — Layers, 3D, Zoom, North, Fullscreen */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
        <div className="relative">
          <ControlBtn
            onClick={() => setShowLayerPicker((p) => !p)}
            disabled={!mapLoaded}
            active={showLayerPicker}
            title="Change map style"
          >
            <Layers className="h-4.5 w-4.5" />
          </ControlBtn>

          {showLayerPicker && (
            <div className="absolute right-12 top-0 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden w-40 py-1">
              {(
                Object.entries(LAYERS) as [
                  LayerKey,
                  (typeof LAYERS)[LayerKey],
                ][]
              ).map(([key, cfg]) => (
                <button
                  key={key}
                  onClick={() => handleLayerChange(key)}
                  className={`w-full px-3 py-2 flex items-center gap-2.5 text-left text-xs hover:bg-gray-50 transition-colors ${
                    activeLayer === key
                      ? 'bg-green-50 text-green-700 font-semibold'
                      : 'text-gray-700'
                  }`}
                >
                  <img
                    src={LAYER_THUMBNAILS[key]}
                    alt={cfg.label}
                    className="w-8 h-8 rounded-md object-cover shrink-0 border border-gray-100"
                  />
                  {cfg.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <ControlBtn
          onClick={handle3DToggle}
          disabled={!mapLoaded}
          title={is3D ? 'Switch to 2D' : 'Switch to 3D'}
        >
          <span className="text-xs font-bold tracking-wide">
            {is3D ? '3D' : '2D'}
          </span>
        </ControlBtn>

        <ControlBtn
          onClick={() => map?.zoomIn()}
          disabled={!mapLoaded}
          title="Zoom in"
        >
          <Plus className="h-4.5 w-4.5" />
        </ControlBtn>

        <ControlBtn
          onClick={() => map?.zoomOut()}
          disabled={!mapLoaded}
          title="Zoom out"
        >
          <Minus className="h-4.5 w-4.5" />
        </ControlBtn>

        <ControlBtn
          onClick={() => map?.easeTo({ bearing: 0, pitch: 0, duration: 500 })}
          disabled={!mapLoaded}
          title="Reset to north"
        >
          <Navigation className="h-4.25 w-4.25" />
        </ControlBtn>

        <ControlBtn
          onClick={handleFullscreen}
          title={isFullscreen ? 'Exit full view' : 'Full view'}
        >
          {isFullscreen ? (
            <Minimize2 className="h-4 w-4" />
          ) : (
            <Maximize2 className="h-4 w-4" />
          )}
        </ControlBtn>
      </div>

      <div
        className="relative h-full w-full"
        onPointerDown={() => setMapInteractionEnabled(true)}
        onPointerLeave={() => setMapInteractionEnabled(false)}
      >
        <div ref={containerRef} className="h-full w-full" />
      </div>
    </div>
  );
}
