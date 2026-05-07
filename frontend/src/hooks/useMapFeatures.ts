import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import { TrekTimelineDay } from '@/types/trek';
import { GeoJSONData, LayerKey } from '@/types/map';
import { LAYERS } from '@/static/mapConstants';
import { buildPopupHTML, fitToBounds } from '@/lib/mapHelper';

const TRAIL_GREEN = '#84b829';
const MARKER_ORANGE = '#f59e0b';

/**
 * Returns a wrapper element (given to MapLibre) containing an inner visual circle.
 * MapLibre owns the wrapper's `transform` for geo-positioning.
 * We only ever touch `inner.style.transform` for hover scaling — never the wrapper.
 */
function makeCircleMarkerEl(
  label: string,
  bg: string,
  clickable = false,
): { wrapper: HTMLElement; inner: HTMLElement } {
  const wrapper = document.createElement('div');
  wrapper.style.cssText = `width:28px;height:28px;`;

  const inner = document.createElement('div');
  inner.style.cssText = `
    width:28px;height:28px;border-radius:50%;background:${bg};border:2.5px solid white;
    display:flex;align-items:center;justify-content:center;
    box-shadow:0 2px 8px rgba(0,0,0,0.32);font-size:10px;font-weight:800;color:white;
    font-family:system-ui,sans-serif;cursor:${clickable ? 'pointer' : 'default'};
    transition:transform 0.18s ease;
  `;
  inner.textContent = label;
  wrapper.appendChild(inner);
  return { wrapper, inner };
}

// ─── Hook 1: Map initialisation ──────────────────────────────────────────────

export function useMapInit(center: [number, number]) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<maplibregl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current || map) return;

    const sources: Record<string, maplibregl.SourceSpecification> = {};
    const layerSpecs: maplibregl.LayerSpecification[] = [];

    (Object.entries(LAYERS) as [LayerKey, (typeof LAYERS)[LayerKey]][]).forEach(
      ([key, cfg], i) => {
        sources[key] = {
          type: 'raster',
          tiles: cfg.tiles,
          tileSize: 256,
          attribution: cfg.attribution,
        };
        layerSpecs.push({
          id: `${key}-layer`,
          type: 'raster',
          source: key,
          layout: { visibility: i === 0 ? 'visible' : 'none' },
        });
      },
    );

    sources['terrain-dem'] = {
      type: 'raster-dem',
      tiles: [
        'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png',
      ],
      encoding: 'terrarium',
    };

    const m = new maplibregl.Map({
      container: containerRef.current,
      style: { version: 8, sources, layers: layerSpecs },
      center: [center[1], center[0]],
      zoom: 10,
      pitch: 0,
      bearing: 0,
      minZoom: 6,
      maxZoom: 16,
      fadeDuration: 0,
      attributionControl: { compact: false },
    });

    m.addControl(new maplibregl.ScaleControl({ unit: 'metric' }), 'top-left');

    m.on('load', () => {
      // Always keep terrain loaded — invisible at pitch=0 but required for
      // queryTerrainElevation() to work regardless of 2D/3D mode.
      m.setTerrain({ source: 'terrain-dem', exaggeration: 1.0 });

      m.addSource('trail', {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: [] },
      });

      m.addLayer({
        id: 'trail-casing',
        type: 'line',
        source: 'trail',
        paint: {
          'line-color': '#ffffff',
          'line-width': 7,
          'line-opacity': 0.85,
        },
        layout: { 'line-cap': 'round', 'line-join': 'round' },
      });

      m.addLayer({
        id: 'trail-fg',
        type: 'line',
        source: 'trail',
        paint: { 'line-color': TRAIL_GREEN, 'line-width': 4.5 },
        layout: { 'line-cap': 'round', 'line-join': 'round' },
      });

      // Direction arrows — pass ImageData to avoid MapLibre canvas size mismatch
      const arrowSize = 14;
      const arrowCanvas = document.createElement('canvas');
      arrowCanvas.width = arrowSize;
      arrowCanvas.height = arrowSize;
      const ctx = arrowCanvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'rgba(255,255,255,0.92)';
        ctx.beginPath();
        ctx.moveTo(arrowSize / 2, 1);
        ctx.lineTo(arrowSize - 1, arrowSize - 1);
        ctx.lineTo(arrowSize / 2, arrowSize * 0.56);
        ctx.lineTo(1, arrowSize - 1);
        ctx.closePath();
        ctx.fill();
        m.addImage('trail-arrow', ctx.getImageData(0, 0, arrowSize, arrowSize));
      }

      setMapLoaded(true);
    });

    setMap(m);
    return () => m.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { containerRef, map, mapLoaded };
}

// ─── Hook 2: Trail GeoJSON + start/end markers ────────────────────────────────

export function useTrailData(
  map: maplibregl.Map | null,
  mapLoaded: boolean,
  data: GeoJSONData | null,
) {
  const fittedDataRef = useRef<GeoJSONData | null>(null);
  const startMarkerRef = useRef<maplibregl.Marker | null>(null);
  const endMarkerRef = useRef<maplibregl.Marker | null>(null);

  useEffect(() => {
    if (!mapLoaded || !map || !data || fittedDataRef.current === data) return;

    const source = map.getSource('trail') as
      | maplibregl.GeoJSONSource
      | undefined;
    source?.setData(data);
    fitToBounds(map, data);
    fittedDataRef.current = data;

    const allCoords: GeoJSON.Position[] = [];
    data.features.forEach((f) => {
      if (f.geometry.type === 'LineString')
        allCoords.push(...f.geometry.coordinates);
      else if (f.geometry.type === 'MultiLineString')
        f.geometry.coordinates.forEach((seg) => allCoords.push(...seg));
    });

    if (allCoords.length >= 2) {
      startMarkerRef.current?.remove();
      endMarkerRef.current?.remove();

      // const [startLng, startLat] = allCoords[0];
      // const { wrapper: startEl } = makeCircleMarkerEl('S', TRAIL_GREEN_DARK);
      // startMarkerRef.current = new maplibregl.Marker({ element: startEl })
      //   .setLngLat([startLng, startLat])
      //   .addTo(map);

      // const [endLng, endLat] = allCoords[allCoords.length - 1];
      // const { wrapper: endEl } = makeCircleMarkerEl('E', '#c0392b');
      // endMarkerRef.current = new maplibregl.Marker({ element: endEl })
      //   .setLngLat([endLng, endLat])
      //   .addTo(map);
    }
  }, [data, mapLoaded, map]);
}

// ─── Hook 3: Day markers and popups ──────────────────────────────────────────

export function useTrekMarkers(
  map: maplibregl.Map | null,
  mapLoaded: boolean,
  timeline: TrekTimelineDay[],
) {
  const markersRef = useRef<maplibregl.Marker[]>([]);
  const popupRef = useRef<maplibregl.Popup | null>(null);

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

    let hideTimer: ReturnType<typeof setTimeout> | null = null;

    const clearHideTimer = () => {
      if (hideTimer !== null) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
    };

    const scheduleHide = (innerEl: HTMLElement) => {
      hideTimer = setTimeout(() => {
        innerEl.style.transform = 'scale(1)';
        popupRef.current?.remove();
        hideTimer = null;
      }, 150);
    };

    timeline.forEach((dayObj) => {
      if (!dayObj.coordinates) return;
      const [lat, lng] = dayObj.coordinates;

      const { wrapper, inner } = makeCircleMarkerEl(
        dayObj.day ?? '',
        MARKER_ORANGE,
        true,
      );

      wrapper.addEventListener('mouseenter', () => {
        clearHideTimer();
        inner.style.transform = 'scale(1.2)';
        const popup = popupRef.current;
        if (!popup) return;
        popup.setHTML(buildPopupHTML(dayObj)).setLngLat([lng, lat]).addTo(map);
        const popupEl = popup.getElement();
        if (popupEl) {
          popupEl.onmouseenter = clearHideTimer;
          popupEl.onmouseleave = () => scheduleHide(inner);
        }
      });

      wrapper.addEventListener('mouseleave', () => scheduleHide(inner));
      wrapper.addEventListener('click', () =>
        map.flyTo({ center: [lng, lat], zoom: 14, duration: 1200 }),
      );

      const marker = new maplibregl.Marker({ element: wrapper })
        .setLngLat([lng, lat])
        .addTo(map);

      markersRef.current.push(marker);
    });
  }, [mapLoaded, timeline, map]);
}

// ─── Hook 4: Animated hiker on the trail ─────────────────────────────────────

function injectHikerStyles() {
  if (typeof document === 'undefined' || document.getElementById('hiker-marker-styles')) return;
  const style = document.createElement('style');
  style.id = 'hiker-marker-styles';
  style.textContent = `
    @keyframes hiker-bob {
      0%, 100% { transform: translateY(0px) rotate(-1deg); }
      30%       { transform: translateY(-4px) rotate(1deg); }
      60%       { transform: translateY(-2px) rotate(0deg); }
    }
    @keyframes hiker-shadow-pulse {
      0%, 100% { transform: translateX(-50%) scaleX(1);   opacity: 0.35; }
      30%       { transform: translateX(-50%) scaleX(0.7); opacity: 0.2;  }
    }
    @keyframes hiker-ring-pulse {
      0%   { transform: translate(-50%, 50%) scale(0.4); opacity: 1;  }
      100% { transform: translate(-50%, 50%) scale(3);   opacity: 0;  }
    }
    .hiker-body        { animation: hiker-bob          0.65s ease-in-out infinite; display:inline-block; }
    .hiker-shadow-anim { animation: hiker-shadow-pulse 0.65s ease-in-out infinite; }
    .hiker-ring-anim   { animation: hiker-ring-pulse   1.5s  ease-out  infinite;  }
  `;
  document.head.appendChild(style);
}

function createHikerEl(): HTMLElement {
  injectHikerStyles();

  // The wrapper's bottom-center is the map anchor point (exactly on the trail).
  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'position:relative;width:32px;height:42px;pointer-events:none;transform-origin:bottom center;';

  // Pulsing ring — centered on the anchor point
  const ring = document.createElement('div');
  ring.className = 'hiker-ring-anim';
  ring.style.cssText = `
    position:absolute;bottom:0;left:50%;
    width:12px;height:12px;border-radius:50%;
    background:#8dc63f;opacity:0.7;
  `;

  // Solid anchor dot — sits exactly on the trail coordinate
  const dot = document.createElement('div');
  dot.style.cssText = `
    position:absolute;bottom:-3px;left:50%;
    transform:translateX(-50%);
    width:6px;height:6px;border-radius:50%;
    background:#5a8f20;border:1.5px solid white;
    box-shadow:0 1px 3px rgba(0,0,0,0.5);
    z-index:2;
  `;

  // Ground shadow
  const shadow = document.createElement('div');
  shadow.className = 'hiker-shadow-anim';
  shadow.style.cssText = `
    position:absolute;bottom:4px;left:50%;
    width:13px;height:4px;border-radius:50%;
    background:rgba(0,0,0,0.2);
  `;

  // Hiker figure — smaller: 22×30 display size
  const figure = document.createElement('div');
  figure.className = 'hiker-figure hiker-body';
  figure.style.cssText = `
    position:absolute;bottom:7px;left:50%;
    transform:translateX(-50%);
    filter:drop-shadow(0 1px 4px rgba(0,0,0,0.4));
    transform-origin:bottom center;
  `;
  figure.innerHTML = `
    <svg width="22" height="30" viewBox="0 0 34 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="5" r="4.5" fill="#f5c07a" stroke="#c8862a" stroke-width="0.8"/>
      <ellipse cx="15" cy="2.5" rx="6" ry="1.8" fill="#5a8f20"/>
      <rect x="11" y="0.5" width="8" height="3.5" rx="1.5" fill="#6fb12e"/>
      <rect x="17" y="9" width="6" height="9" rx="2" fill="#8dc63f" stroke="#5a8f20" stroke-width="0.7"/>
      <rect x="18" y="11" width="4" height="2" rx="0.8" fill="#5a8f20" opacity="0.6"/>
      <line x1="15" y1="9.5" x2="15" y2="22" stroke="#3d6e9e" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="15" y1="12" x2="9" y2="18" stroke="#3d6e9e" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="15" y1="12" x2="21" y2="17" stroke="#3d6e9e" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="21" y1="17" x2="25" y2="42" stroke="#9b6f2f" stroke-width="2" stroke-linecap="round"/>
      <circle cx="25" cy="42" r="1.5" fill="#7a5220"/>
      <line x1="15" y1="22" x2="10" y2="36" stroke="#2d4a6e" stroke-width="3" stroke-linecap="round"/>
      <line x1="10" y1="36" x2="7"  y2="44" stroke="#2d4a6e" stroke-width="2.5" stroke-linecap="round"/>
      <ellipse cx="6.5" cy="44.5" rx="4" ry="2" fill="#4a3728"/>
      <line x1="15" y1="22" x2="19" y2="34" stroke="#2d4a6e" stroke-width="3" stroke-linecap="round"/>
      <line x1="19" y1="34" x2="21" y2="42" stroke="#2d4a6e" stroke-width="2.5" stroke-linecap="round"/>
      <ellipse cx="22" cy="43" rx="4" ry="2" fill="#4a3728"/>
    </svg>
  `;

  wrapper.appendChild(ring);
  wrapper.appendChild(shadow);
  wrapper.appendChild(dot);
  wrapper.appendChild(figure);
  return wrapper;
}

// Returns a scale factor so the hiker appears consistently sized relative to
// the terrain regardless of zoom level. Calibrated at zoom 12.
function hikerScale(zoom: number): number {
  return Math.max(0.45, Math.min(2.2, Math.pow(2, (zoom - 12) * 0.35)));
}

export function useHikerMarker(
  map: maplibregl.Map | null,
  mapLoaded: boolean,
  coord: [number, number] | null,
) {
  const markerRef   = useRef<maplibregl.Marker | null>(null);
  const prevCoordRef = useRef<[number, number] | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => { markerRef.current?.remove(); markerRef.current = null; };
  }, []);

  // Zoom-based scaling — keep this separate so it doesn't re-run on coord change
  useEffect(() => {
    if (!map || !mapLoaded) return;

    const onZoom = () => {
      const el = markerRef.current?.getElement();
      if (!el) return;
      const s = hikerScale(map.getZoom());
      el.style.transform = `scale(${s})`;
    };

    map.on('zoom', onZoom);
    return () => { map.off('zoom', onZoom); };
  }, [map, mapLoaded]);

  // Position / create / remove the marker
  useEffect(() => {
    if (!map || !mapLoaded) return;

    if (!coord) {
      markerRef.current?.remove();
      markerRef.current = null;
      prevCoordRef.current = null;
      return;
    }

    // Facing direction: longitude increasing → eastward → face right
    let facingRight = true;
    if (prevCoordRef.current) {
      facingRight = coord[0] >= prevCoordRef.current[0];
    }
    prevCoordRef.current = coord;

    if (!markerRef.current) {
      const el = createHikerEl();
      // Apply initial scale
      const s = hikerScale(map.getZoom());
      el.style.transform = `scale(${s})`;

      markerRef.current = new maplibregl.Marker({ element: el, anchor: 'bottom' })
        .setLngLat(coord)
        .addTo(map);
    } else {
      markerRef.current.setLngLat(coord);
    }

    // Flip hiker direction
    const figureEl = markerRef.current.getElement().querySelector('.hiker-figure') as HTMLElement | null;
    if (figureEl) {
      figureEl.style.transform = `translateX(-50%) scaleX(${facingRight ? 1 : -1})`;
    }
  }, [map, mapLoaded, coord]);
}
