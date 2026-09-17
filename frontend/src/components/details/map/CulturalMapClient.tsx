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
import { LAYER_THUMBNAILS, LAYERS, POPUP_STYLES, SITE_MARKER_COLOR } from '@/static/mapConstants';
import type { CulturalSite } from '@/types/cultural';
import type { DayFocus, LayerKey } from '@/types/map';
import { GeoJSONData } from '@/types/map';

type Props = {
  sites: CulturalSite[];
  center: [number, number];
  onSiteClick?: (index: number) => void;
  focus?: DayFocus | null;
  siteColors?: string[];
};

const FOCUS_ZOOM_STEP = 0.1;
const FOCUS_ZOOM_CEIL = 15;

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
  path.setAttribute(
    'd',
    'M14 2 C8.2 2 3.5 6.8 3.5 12.6 C3.5 19.8 14 36 14 36 C14 36 24.5 19.8 24.5 12.6 C24.5 6.8 19.8 2 14 2 Z',
  );
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
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { containerRef, map, mapLoaded } = useMapInit(center);

  const markersRef = useRef<maplibregl.Marker[]>([]);
  const popupRef = useRef<maplibregl.Popup | null>(null);
  const focusTargetsRef = useRef<
    Map<number, { lng: number; lat: number; inner: { style: CSSStyleDeclaration } }>
  >(new Map());

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

  // One marker per site; hover shows the site popup, click opens it in the list.
  useEffect(() => {
    if (!mapLoaded || !map) return;

    if (!popupRef.current) {
      popupRef.current = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
        className: 'trail-popup',
        offset: 18,
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

    const scheduleHide = (innerEl: { style: CSSStyleDeclaration }) => {
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
    };
  }, [mapLoaded, map, sites, onSiteClick, siteColors]);

  // Initial framing over the site points.
  useEffect(() => {
    if (!mapLoaded || !map) return;
    fitToBounds(map, pointFC);
  }, [mapLoaded, map, pointFC]);

  // React to focus requests from the site list.
  useEffect(() => {
    if (!map || !mapLoaded || !focus) return;

    const target = focusTargetsRef.current.get(focus.index);
    if (!target) return;

    const { lng, lat, inner } = target;

    const current = map.getZoom();
    const zoom = Math.max(
      current,
      Math.min(current + FOCUS_ZOOM_STEP, FOCUS_ZOOM_CEIL),
    );

    map.easeTo({
      center: [lng, lat],
      zoom,
      duration: 800,
      essential: true,
    });

    inner.style.transform = 'scale(1.45)';
    const resetTimer = setTimeout(() => {
      inner.style.transform = 'scale(1)';
    }, 1000);

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