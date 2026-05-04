import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import { TrekTimelineDay } from '@/types/trek';
import { GeoJSONData, LayerKey } from '@/types/map';
import { LAYERS } from '@/static/mapConstants';
import { buildPopupHTML, fitToBounds } from '@/lib/mapHelper';

const TRAIL_GREEN = '#84b829';
const TRAIL_GREEN_DARK = '#4a7c1f';
const MARKER_ORANGE = '#f59e0b';

function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

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
      tiles: ['https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'],
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
    });

    m.addControl(new maplibregl.ScaleControl({ unit: 'metric' }), 'bottom-left');

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
        paint: { 'line-color': '#ffffff', 'line-width': 7, 'line-opacity': 0.85 },
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

      m.addLayer({
        id: 'trail-arrows',
        type: 'symbol',
        source: 'trail',
        layout: {
          'symbol-placement': 'line',
          'symbol-spacing': 80,
          'icon-image': 'trail-arrow',
          'icon-size': 0.85,
          'icon-rotation-alignment': 'map',
          'icon-allow-overlap': true,
          'icon-ignore-placement': true,
        },
      });

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

    const source = map.getSource('trail') as maplibregl.GeoJSONSource | undefined;
    source?.setData(data);
    fitToBounds(map, data);
    fittedDataRef.current = data;

    const allCoords: GeoJSON.Position[] = [];
    data.features.forEach((f) => {
      if (f.geometry.type === 'LineString') allCoords.push(...f.geometry.coordinates);
      else if (f.geometry.type === 'MultiLineString')
        f.geometry.coordinates.forEach((seg) => allCoords.push(...seg));
    });

    if (allCoords.length >= 2) {
      startMarkerRef.current?.remove();
      endMarkerRef.current?.remove();

      const [startLng, startLat] = allCoords[0];
      const { wrapper: startEl } = makeCircleMarkerEl('S', TRAIL_GREEN_DARK);
      startMarkerRef.current = new maplibregl.Marker({ element: startEl })
        .setLngLat([startLng, startLat])
        .addTo(map);

      const [endLng, endLat] = allCoords[allCoords.length - 1];
      const { wrapper: endEl } = makeCircleMarkerEl('E', '#c0392b');
      endMarkerRef.current = new maplibregl.Marker({ element: endEl })
        .setLngLat([endLng, endLat])
        .addTo(map);
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
      if (hideTimer !== null) { clearTimeout(hideTimer); hideTimer = null; }
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

      const { wrapper, inner } = makeCircleMarkerEl(dayObj.day ?? '', MARKER_ORANGE, true);

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
