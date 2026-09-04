import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import { TrekTimelineDay, AccessRoute } from '@/types/trek';
import { GeoJSONData, LayerKey, DayFocus } from '@/types/map';
import { LAYERS } from '@/static/mapConstants';
import {
  buildPopupHTML,
  buildGroupedPopupHTML,
  fitToBounds,
} from '@/lib/mapHelper';

const TRAIL_GREEN = '#84b829';
const MARKER_ORANGE = '#f59e0b';

// Great-circle distance in metres between two [lng, lat] positions.
function metersBetween(a: GeoJSON.Position, b: GeoJSON.Position): number {
  const R = 6371000;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b[1] - a[1]);
  const dLng = toRad(b[0] - a[0]);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a[1])) * Math.cos(toRad(b[1])) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

// True when a day's [lat, lng] point lies within `maxM` metres of the route line.
// Used to keep loop-trek transport days (which sit far off the trail) off the map.
function isNearRoute(
  dayCoord: [number, number],
  route: GeoJSON.Position[],
  maxM: number,
): boolean {
  const p: GeoJSON.Position = [dayCoord[1], dayCoord[0]]; // [lat,lng] → [lng,lat]
  for (const v of route) if (metersBetween(p, v) < maxM) return true;
  return false;
}

// Focusing a single itinerary day is mostly a recenter: the point is eased to
// the middle of the map with only a slight zoom nudge (+0.1 zoom level ≈ 7%
// closer) on top of the current zoom — a gentle focus, not a deep zoom. The
// nudge is bounded so repeatedly hopping day-to-day never creeps in too far,
// and it never zooms out (an already-close view just recenters).
const DAY_FOCUS_ZOOM_STEP = 0.1;
const DAY_FOCUS_ZOOM_CEIL = 12.5;

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

function injectDestinationStyles() {
  if (
    typeof document === 'undefined' ||
    document.getElementById('dest-marker-styles')
  )
    return;
  const style = document.createElement('style');
  style.id = 'dest-marker-styles';
  style.textContent = `
    @keyframes dest-flag-wave {
      0%, 100% { transform: skewY(0deg) scaleX(1); }
      35%       { transform: skewY(9deg) scaleX(0.96); }
      70%       { transform: skewY(-5deg) scaleX(1.02); }
    }
    @keyframes dest-pole-shimmer {
      0%, 100% { opacity: 0.82; }
      50%       { opacity: 1; }
    }
    .dest-flag-body {
      transform-origin: 14px 13px;
      animation: dest-flag-wave 2.4s ease-in-out infinite;
    }
    .dest-pole { animation: dest-pole-shimmer 2.4s ease-in-out infinite; }
  `;
  document.head.appendChild(style);
}

function makeDestinationMarkerEl(
  label: string,
  isGroup = false,
): { wrapper: HTMLElement; inner: HTMLElement } {
  injectDestinationStyles();

  // wrapper = circle's bounding box only (36×36).
  // MapLibre default 'center' anchor → circle center sits exactly on the coordinate.
  // The flag SVG is absolutely above the wrapper via overflow:visible.
  const wrapper = document.createElement('div');
  // For grouped destinations (multi-day), use auto width so the pill can expand.
  wrapper.style.cssText = isGroup
    ? 'height:28px;display:inline-flex;position:relative;overflow:visible;'
    : 'width:28px;height:28px;position:relative;overflow:visible;';

  // ─── Flag + Pole SVG ─────────────────────────────────────
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('width', '44');
  svg.setAttribute('height', '40');
  svg.setAttribute('viewBox', '0 0 44 40');
  // bottom:50% → SVG bottom sits at the marker's vertical center (pole base at mid-height)
  // Single-day circle: left:0 places the pole (x=14) at the circle's center (28px/2 = 14px)
  // Group pill: left:50% + translateX(-14px) keeps the pole centered on a dynamic-width pill
  svg.style.cssText = isGroup
    ? 'position:absolute;bottom:50%;left:50%;transform:translateX(-14px);overflow:visible;display:block;pointer-events:none;'
    : 'position:absolute;bottom:50%;left:0;overflow:visible;display:block;pointer-events:none;';

  // Defs: gradient + drop-shadow filter
  const defs = document.createElementNS(NS, 'defs');

  const grad = document.createElementNS(NS, 'linearGradient');
  grad.id = 'dest-flag-fill';
  grad.setAttribute('x1', '0%');
  grad.setAttribute('y1', '0%');
  grad.setAttribute('x2', '100%');
  grad.setAttribute('y2', '80%');
  const s1 = document.createElementNS(NS, 'stop');
  s1.setAttribute('offset', '0%');
  s1.setAttribute('style', 'stop-color:#ef4444');
  const s2 = document.createElementNS(NS, 'stop');
  s2.setAttribute('offset', '100%');
  s2.setAttribute('style', 'stop-color:#991b1b');
  grad.appendChild(s1);
  grad.appendChild(s2);
  defs.appendChild(grad);

  const filter = document.createElementNS(NS, 'filter');
  filter.id = 'dest-flag-shadow';
  filter.setAttribute('x', '-30%');
  filter.setAttribute('y', '-30%');
  filter.setAttribute('width', '160%');
  filter.setAttribute('height', '160%');
  const fds = document.createElementNS(NS, 'feDropShadow');
  fds.setAttribute('dx', '0');
  fds.setAttribute('dy', '1.5');
  fds.setAttribute('stdDeviation', '1.8');
  fds.setAttribute('flood-color', 'rgba(0,0,0,0.38)');
  filter.appendChild(fds);
  defs.appendChild(filter);

  svg.appendChild(defs);

  // Pole — centered at x=14, full SVG height (overlaps into circle by 5px)
  const pole = document.createElementNS(NS, 'line');
  pole.setAttribute('class', 'dest-pole');
  pole.setAttribute('x1', '14');
  pole.setAttribute('y1', '0');
  pole.setAttribute('x2', '14');
  pole.setAttribute('y2', '40');
  pole.setAttribute('stroke', MARKER_ORANGE);
  pole.setAttribute('stroke-width', '2');
  pole.setAttribute('stroke-linecap', 'round');
  svg.appendChild(pole);

  // Animated flag group
  const flagG = document.createElementNS(NS, 'g');
  flagG.setAttribute('class', 'dest-flag-body');
  flagG.setAttribute('filter', 'url(#dest-flag-shadow)');

  // Main pennant body — larger, extending from pole at x=14
  const flagBody = document.createElementNS(NS, 'path');
  flagBody.setAttribute('d', 'M 14 2 L 43 12 L 14 24 Z');
  flagBody.setAttribute('fill', 'url(#dest-flag-fill)');
  flagG.appendChild(flagBody);

  // Upper shine triangle
  const shine = document.createElementNS(NS, 'path');
  shine.setAttribute('d', 'M 14 2 L 43 12 L 30 10 Z');
  shine.setAttribute('fill', 'rgba(255,255,255,0.25)');
  flagG.appendChild(shine);

  svg.appendChild(flagG);

  // ─── Circle (or pill for multi-day group destinations) ───
  const inner = document.createElement('div');
  inner.style.cssText = isGroup
    ? `
    height:28px;padding:0 10px;border-radius:14px;background:${MARKER_ORANGE};border:2.5px solid white;
    display:flex;align-items:center;justify-content:center;white-space:nowrap;
    box-shadow:0 2px 8px rgba(0,0,0,0.32);font-size:10px;font-weight:800;color:white;
    font-family:system-ui,sans-serif;cursor:pointer;
    transition:transform 0.18s ease;
  `
    : `
    width:28px;height:28px;border-radius:50%;background:${MARKER_ORANGE};border:2.5px solid white;
    display:flex;align-items:center;justify-content:center;
    box-shadow:0 2px 8px rgba(0,0,0,0.32);font-size:10px;font-weight:800;color:white;
    font-family:system-ui,sans-serif;cursor:pointer;
    transition:transform 0.18s ease;
  `;
  inner.textContent = label;

  wrapper.appendChild(svg);
  wrapper.appendChild(inner);
  return { wrapper, inner };
}

function makeGroupMarkerEl(
  label: string,
  bg: string,
): { wrapper: HTMLElement; inner: HTMLElement } {
  const wrapper = document.createElement('div');
  wrapper.style.cssText = `height:28px;display:inline-flex;`;

  // Keep the multi-day pill close in size to the single-day circles (28px):
  // full height for alignment, but tight padding + a slightly smaller font so
  // it reads as a compact sibling, not an oversized tag.
  const inner = document.createElement('div');
  inner.style.cssText = `
    height:28px;padding:0 6px;border-radius:14px;background:${bg};
    border:2px solid white;display:flex;align-items:center;justify-content:center;
    box-shadow:0 2px 8px rgba(0,0,0,0.32);font-size:8.5px;font-weight:800;color:white;
    font-family:system-ui,sans-serif;cursor:pointer;white-space:nowrap;
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

    m.scrollZoom.disable();
    m.boxZoom.disable();
    m.dragPan.disable();
    m.touchZoomRotate.disable();
    m.doubleClickZoom.disable();
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
  onDayClick?: (index: number) => void,
  focus?: DayFocus | null,
  routeCoords?: GeoJSON.Position[] | null,
) {
  const markersRef = useRef<maplibregl.Marker[]>([]);
  const popupRef = useRef<maplibregl.Popup | null>(null);
  // Timeline index → the marker's map position and its scalable inner element,
  // so a focus request can fly to the point and briefly emphasise its marker.
  const focusTargetsRef = useRef<
    Map<number, { lng: number; lat: number; inner: HTMLElement }>
  >(new Map());

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

    const scheduleHide = (innerEl: HTMLElement) => {
      hideTimer = setTimeout(() => {
        innerEl.style.transform = 'scale(1)';
        popupRef.current?.remove();
        hideTimer = null;
      }, 150);
    };

    // A loop trek's trail closes back on its trailhead (first node ≈ last node).
    const isLoop =
      !!routeCoords &&
      routeCoords.length >= 2 &&
      metersBetween(routeCoords[0], routeCoords[routeCoords.length - 1]) < 200;

    // Which days get a marker:
    //  - Normal (out-and-back / point-to-point) treks: outbound days only, up
    //    to and including isDestination. The return retraces the same villages
    //    (so a second marker would just overlap) and the drive-home day sits
    //    far off the trail. Return days stay in the sidebar only.
    //  - Loop treks: the return leg is a *different* path with its own villages
    //    (e.g. Ghandruk on Ghorepani Poon Hill), so show every day whose point
    //    lies on the trail; off-trail transport days are dropped.
    const destIdx = timeline.findIndex((d) => d.isDestination);
    const candidates: TrekTimelineDay[] =
      isLoop && routeCoords
        ? timeline.filter(
            (d) => d.coordinates && isNearRoute(d.coordinates, routeCoords, 500),
          )
        : destIdx >= 0
          ? timeline.slice(0, destIdx + 1)
          : timeline;

    // Cluster days that share a point so a revisited spot renders once.
    //  - Loops: proximity clustering (a revisit a few metres off still merges).
    //  - Normal: exact 4-dp key (unchanged behaviour).
    type DayGroup = { lat: number; lng: number; days: TrekTimelineDay[] };
    const groups: DayGroup[] = [];
    if (isLoop) {
      for (const d of candidates) {
        if (!d.coordinates) continue;
        const [lat, lng] = d.coordinates;
        const g = groups.find(
          (gr) => metersBetween([gr.lng, gr.lat], [lng, lat]) < 150,
        );
        if (g) g.days.push(d);
        else groups.push({ lat, lng, days: [d] });
      }
    } else {
      const byKey = new Map<string, DayGroup>();
      for (const d of candidates) {
        if (!d.coordinates) continue;
        const [lat, lng] = d.coordinates;
        const key = `${lat.toFixed(4)},${lng.toFixed(4)}`;
        let g = byKey.get(key);
        if (!g) {
          g = { lat, lng, days: [] };
          byKey.set(key, g);
          groups.push(g);
        }
        g.days.push(d);
      }
    }

    groups.forEach(({ lat, lng, days }) => {
      const isGroup = days.length > 1;
      const label = isGroup
        ? `${days[0].day}–${days[days.length - 1].day}`
        : (days[0].day ?? '');

      const { wrapper, inner } = isGroup
        ? makeGroupMarkerEl(label, MARKER_ORANGE)
        : makeCircleMarkerEl(label, MARKER_ORANGE, true);

      const popupHTML = isGroup
        ? buildGroupedPopupHTML(days)
        : buildPopupHTML(days[0]);

      // Timeline index of each day at this coordinate.
      const dayIndices = days.map((d) => timeline.indexOf(d));

      // Register every day at this coordinate as a focus target so opening it
      // from the itinerary (or clicking this marker) can fly here.
      dayIndices.forEach((di) => {
        focusTargetsRef.current.set(di, { lng, lat, inner });
      });

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

          // Grouped popup: each day tab opens its own itinerary day.
          popupEl
            .querySelectorAll<HTMLElement>('.trek-day-tab')
            .forEach((tab) => {
              const pos = Number(tab.dataset.dayPos);
              tab.addEventListener('click', () => onDayClick?.(dayIndices[pos]));
            });
        }
      });

      wrapper.addEventListener('mouseleave', () => scheduleHide(inner));

      // Open this marker's itinerary day; the parent routes that back as a focus
      // request, so the map also gently recenters on this point.
      // A grouped marker opens its first day; the popup tabs open the rest.
      wrapper.addEventListener('click', () => onDayClick?.(dayIndices[0]));

      const marker = new maplibregl.Marker({ element: wrapper })
        .setLngLat([lng, lat])
        .addTo(map);

      markersRef.current.push(marker);
    });
  }, [mapLoaded, timeline, map, onDayClick, routeCoords]);

  // React to focus requests: gently recenter the map on the day's point with a
  // slight zoom nudge, and pulse its marker so it's clear which point is meant.
  useEffect(() => {
    if (!map || !mapLoaded || !focus) return;

    const target = focusTargetsRef.current.get(focus.index);
    if (!target) return; // day has no marker (e.g. a return-journey day)

    const { lng, lat, inner } = target;

    // Center the point with only a small zoom nudge; never zoom out.
    const current = map.getZoom();
    const zoom = Math.max(
      current,
      Math.min(current + DAY_FOCUS_ZOOM_STEP, DAY_FOCUS_ZOOM_CEIL),
    );

    map.easeTo({
      center: [lng, lat],
      zoom,
      duration: 800,
      essential: true,
    });

    // A brief pulse makes it clear which point the focused day maps to — this
    // carries the "show the point" cue now that the zoom change is subtle.
    inner.style.transform = 'scale(1.45)';
    const resetTimer = setTimeout(() => {
      inner.style.transform = 'scale(1)';
    }, 1000);

    return () => clearTimeout(resetTimer);
  }, [map, mapLoaded, focus]);
}

// ─── Hook 4: Animated hiker on the trail ─────────────────────────────────────

function injectHikerStyles() {
  if (
    typeof document === 'undefined' ||
    document.getElementById('hiker-marker-styles')
  )
    return;
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

  // outer: passed to MapLibre — MapLibre owns its `style.transform` for geo-positioning.
  // inner: we own its `style.transform` for zoom scaling only.
  // Keeping them separate prevents our scale() from overwriting MapLibre's translate().
  const outer = document.createElement('div');
  outer.style.cssText =
    'width:48px;height:64px;overflow:visible;pointer-events:none;';

  const inner = document.createElement('div');
  inner.style.cssText =
    'position:relative;width:48px;height:64px;pointer-events:none;transform-origin:bottom center;';

  // Pulsing ring — centered on the anchor point
  const ring = document.createElement('div');
  ring.className = 'hiker-ring-anim';
  ring.style.cssText = `
    position:absolute;bottom:0;left:50%;
    width:20px;height:20px;border-radius:50%;
    background:#8dc63f;opacity:0.7;
  `;

  // Solid anchor dot — sits exactly on the trail coordinate
  const dot = document.createElement('div');
  dot.style.cssText = `
    position:absolute;bottom:-5px;left:50%;
    transform:translateX(-50%);
    width:12px;height:12px;border-radius:50%;
    background:#5a8f20;border:2px solid white;
    box-shadow:0 1px 4px rgba(0,0,0,0.5);
    z-index:2;
  `;

  // Ground shadow
  const shadow = document.createElement('div');
  shadow.className = 'hiker-shadow-anim';
  shadow.style.cssText = `
    position:absolute;bottom:6px;left:50%;
    width:22px;height:6px;border-radius:50%;
    background:rgba(0,0,0,0.2);
  `;

  // Hiker figure — 36×48 display size
  const figure = document.createElement('div');
  figure.className = 'hiker-figure hiker-body';
  figure.style.cssText = `
    position:absolute;bottom:11px;left:50%;
    transform:translateX(-50%);
    filter:drop-shadow(0 1px 4px rgba(0,0,0,0.4));
    transform-origin:bottom center;
  `;
  figure.innerHTML = `
    <svg width="36" height="48" viewBox="0 0 34 46" fill="none" xmlns="http://www.w3.org/2000/svg">
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

  inner.appendChild(ring);
  inner.appendChild(shadow);
  inner.appendChild(dot);
  inner.appendChild(figure);
  outer.appendChild(inner);
  return outer;
}

// Red flag placed at the physical end of the geojson trail (last coordinate).
function makeTrailEndFlagEl(): HTMLElement {
  injectDestinationStyles();

  // Wrapper is a 10×10 dot; anchor:'bottom' → coordinate at wrapper bottom.
  const wrapper = document.createElement('div');
  wrapper.style.cssText =
    'width:10px;height:10px;position:relative;overflow:visible;pointer-events:none;';

  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('width', '44');
  svg.setAttribute('height', '40');
  svg.setAttribute('viewBox', '0 0 44 40');
  // bottom:100% → SVG sits entirely above the wrapper dot
  svg.style.cssText =
    'position:absolute;bottom:100%;left:50%;transform:translateX(-14px);overflow:visible;display:block;pointer-events:none;';

  const defs = document.createElementNS(NS, 'defs');

  const grad = document.createElementNS(NS, 'linearGradient');
  grad.id = 'trail-end-flag-fill';
  grad.setAttribute('x1', '0%');
  grad.setAttribute('y1', '0%');
  grad.setAttribute('x2', '100%');
  grad.setAttribute('y2', '80%');
  const s1 = document.createElementNS(NS, 'stop');
  s1.setAttribute('offset', '0%');
  s1.setAttribute('style', 'stop-color:#ef4444');
  const s2 = document.createElementNS(NS, 'stop');
  s2.setAttribute('offset', '100%');
  s2.setAttribute('style', 'stop-color:#991b1b');
  grad.appendChild(s1);
  grad.appendChild(s2);
  defs.appendChild(grad);

  const filter = document.createElementNS(NS, 'filter');
  filter.id = 'trail-end-flag-shadow';
  filter.setAttribute('x', '-30%');
  filter.setAttribute('y', '-30%');
  filter.setAttribute('width', '160%');
  filter.setAttribute('height', '160%');
  const fds = document.createElementNS(NS, 'feDropShadow');
  fds.setAttribute('dx', '0');
  fds.setAttribute('dy', '1.5');
  fds.setAttribute('stdDeviation', '1.8');
  fds.setAttribute('flood-color', 'rgba(0,0,0,0.38)');
  filter.appendChild(fds);
  defs.appendChild(filter);
  svg.appendChild(defs);

  const pole = document.createElementNS(NS, 'line');
  pole.setAttribute('class', 'dest-pole');
  pole.setAttribute('x1', '14');
  pole.setAttribute('y1', '0');
  pole.setAttribute('x2', '14');
  pole.setAttribute('y2', '40');
  pole.setAttribute('stroke', MARKER_ORANGE);
  pole.setAttribute('stroke-width', '2');
  pole.setAttribute('stroke-linecap', 'round');
  svg.appendChild(pole);

  const flagG = document.createElementNS(NS, 'g');
  flagG.setAttribute('class', 'dest-flag-body');
  flagG.setAttribute('filter', 'url(#trail-end-flag-shadow)');
  const flagBody = document.createElementNS(NS, 'path');
  flagBody.setAttribute('d', 'M 14 2 L 43 12 L 14 24 Z');
  flagBody.setAttribute('fill', 'url(#trail-end-flag-fill)');
  flagG.appendChild(flagBody);
  const shine = document.createElementNS(NS, 'path');
  shine.setAttribute('d', 'M 14 2 L 43 12 L 30 10 Z');
  shine.setAttribute('fill', 'rgba(255,255,255,0.25)');
  flagG.appendChild(shine);
  svg.appendChild(flagG);

  wrapper.appendChild(svg);
  return wrapper;
}

export function useTrailEndFlag(
  map: maplibregl.Map | null,
  mapLoaded: boolean,
  data: GeoJSONData | null,
  flagAtStart = false,
  loopDestCoord: [number, number] | null = null,
) {
  const markerRef = useRef<maplibregl.Marker | null>(null);

  useEffect(() => {
    return () => {
      markerRef.current?.remove();
      markerRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!map || !mapLoaded || !data) return;

    const allCoords: GeoJSON.Position[] = [];
    data.features.forEach((f) => {
      if (f.geometry.type === 'LineString')
        allCoords.push(...f.geometry.coordinates);
      else if (f.geometry.type === 'MultiLineString')
        f.geometry.coordinates.forEach((seg) => allCoords.push(...seg));
    });
    if (allCoords.length < 1) return;

    const first = allCoords[0];
    const last = allCoords[allCoords.length - 1];

    // Loop treks (e.g. Ghorepani Poon Hill) return to their trailhead, so the
    // last node is the start — not the destination. When the trail closes back
    // on itself, plant the flag on the itinerary's destination day instead.
    const isLoop = metersBetween(first, last) < 200;

    let lng: number;
    let lat: number;
    if (isLoop && loopDestCoord) {
      [lng, lat] = loopDestCoord;
    } else if (flagAtStart) {
      [lng, lat] = first as [number, number];
    } else {
      [lng, lat] = last as [number, number];
    }

    markerRef.current?.remove();
    markerRef.current = new maplibregl.Marker({
      element: makeTrailEndFlagEl(),
      anchor: 'bottom',
    })
      .setLngLat([lng, lat])
      .addTo(map);
  }, [map, mapLoaded, data, loopDestCoord]);
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
  const markerRef = useRef<maplibregl.Marker | null>(null);
  const prevCoordRef = useRef<[number, number] | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      markerRef.current?.remove();
      markerRef.current = null;
    };
  }, []);

  // Zoom-based scaling — keep this separate so it doesn't re-run on coord change
  useEffect(() => {
    if (!map || !mapLoaded) return;

    const onZoom = () => {
      const outer = markerRef.current?.getElement();
      const inner = outer?.firstElementChild as HTMLElement | null;
      if (!inner) return;
      const s = hikerScale(map.getZoom());
      inner.style.transform = `scale(${s})`;
    };

    map.on('zoom', onZoom);
    return () => {
      map.off('zoom', onZoom);
    };
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
      const inner = el.firstElementChild as HTMLElement | null;
      if (inner) inner.style.transform = `scale(${hikerScale(map.getZoom())})`;

      markerRef.current = new maplibregl.Marker({
        element: el,
        anchor: 'bottom',
      })
        .setLngLat(coord)
        .addTo(map);
    } else {
      markerRef.current.setLngLat(coord);
    }

    // Flip hiker direction
    const figureEl = markerRef.current
      .getElement()
      .querySelector('.hiker-figure') as HTMLElement | null;
    if (figureEl) {
      figureEl.style.transform = `translateX(-50%) scaleX(${facingRight ? 1 : -1})`;
    }
  }, [map, mapLoaded, coord]);
}

// ─── Hook 5: Access route (flight arc or jeep curved path) ──────────────────

// Parabolic arc for flights — lifts the midpoint northward
function generateArc(
  from: [number, number], // [lat, lng]
  to: [number, number],
  steps = 50,
): [number, number][] {
  const [lat1, lng1] = from;
  const [lat2, lng2] = to;
  const midLat = (lat1 + lat2) / 2;
  const midLng = (lng1 + lng2) / 2;
  const routeLen = Math.sqrt((lat2 - lat1) ** 2 + (lng2 - lng1) ** 2);
  const ctrlLat = midLat + routeLen * 0.28;
  const ctrlLng = midLng;

  const pts: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const u = 1 - t;
    pts.push([
      u * u * lng1 + 2 * u * t * ctrlLng + t * t * lng2,
      u * u * lat1 + 2 * u * t * ctrlLat + t * t * lat2,
    ]);
  }
  return pts;
}

// Gentle perpendicular curve for road routes — not a straight line
function generateRoadCurve(
  from: [number, number], // [lat, lng]
  to: [number, number],
  steps = 40,
): [number, number][] {
  const [lat1, lng1] = from;
  const [lat2, lng2] = to;
  const midLat = (lat1 + lat2) / 2;
  const midLng = (lng1 + lng2) / 2;
  const dLat = lat2 - lat1;
  const dLng = lng2 - lng1;
  const len = Math.sqrt(dLat ** 2 + dLng ** 2);
  // Perpendicular offset (rotated 90° right of travel direction)
  const perpLat = dLng / len;
  const perpLng = -dLat / len;
  const offset = len * 0.14;
  const ctrlLat = midLat + perpLat * offset;
  const ctrlLng = midLng + perpLng * offset;

  const pts: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const u = 1 - t;
    pts.push([
      u * u * lng1 + 2 * u * t * ctrlLng + t * t * lng2,
      u * u * lat1 + 2 * u * t * ctrlLat + t * t * lat2,
    ]);
  }
  return pts;
}

function computeBearing(from: [number, number], to: [number, number]): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const lat1 = toRad(from[0]);
  const lat2 = toRad(to[0]);
  const dLng = toRad(to[1] - from[1]);
  const y = Math.sin(dLng) * Math.cos(lat2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
  return (Math.atan2(y, x) * (180 / Math.PI) + 360) % 360;
}

function createIconMarker(
  mode: AccessRoute['mode'],
  bearing: number,
): HTMLElement {
  const el = document.createElement('div');
  el.style.cssText = 'pointer-events:none;';

  if (mode === 'flight') {
    el.innerHTML = `
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white"
           style="transform:rotate(${bearing}deg);transform-origin:center;
                  filter:drop-shadow(0 1px 3px rgba(0,0,0,0.55));">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2
                 l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
      </svg>`;
  } else {
    el.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white"
           style="filter:drop-shadow(0 1px 3px rgba(0,0,0,0.55));">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3
                 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0
                 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5
                 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5
                 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
      </svg>`;
  }
  return el;
}

function createOriginDot(): HTMLElement {
  const el = document.createElement('div');
  el.style.cssText = 'pointer-events:none;';
  el.innerHTML = `
    <div style="width:6px;height:6px;border-radius:50%;background:white;
      opacity:0.8;box-shadow:0 0 3px rgba(0,0,0,0.45);"></div>`;
  return el;
}

export function useAccessRoute(
  map: maplibregl.Map | null,
  mapLoaded: boolean,
  accessRoute: AccessRoute | undefined,
) {
  const iconMarkersRef = useRef<maplibregl.Marker[]>([]);
  const originDotRef = useRef<maplibregl.Marker | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    return () => {
      iconMarkersRef.current.forEach((m) => m.remove());
      originDotRef.current?.remove();
      try {
        const m = mapRef.current;
        if (m) {
          ['access-route-fg', 'access-route-fg-1'].forEach((id) => {
            if (m.getLayer(id)) m.removeLayer(id);
          });
          ['access-route', 'access-route-1'].forEach((id) => {
            if (m.getSource(id)) m.removeSource(id);
          });
        }
      } catch {
        // map already removed on unmount
      }
    };
  }, []);

  useEffect(() => {
    if (!map || !mapLoaded || !accessRoute) return;
    mapRef.current = map;

    // Flatten legs: main + optional continuation
    const legs: AccessRoute[] = [accessRoute];
    if (accessRoute.continuation) legs.push(accessRoute.continuation);

    // Remove previous icon markers before re-rendering
    iconMarkersRef.current.forEach((m) => m.remove());
    iconMarkersRef.current = [];
    originDotRef.current?.remove();

    const insertBefore = map.getLayer('trail-casing')
      ? 'trail-casing'
      : undefined;

    legs.forEach((leg, i) => {
      const { mode, from, to } = leg;
      const sourceId = i === 0 ? 'access-route' : `access-route-${i}`;
      const layerId = i === 0 ? 'access-route-fg' : `access-route-fg-${i}`;

      const pathCoords =
        mode === 'flight'
          ? generateArc(from.coordinates, to.coordinates)
          : generateRoadCurve(from.coordinates, to.coordinates);

      const geojson: GeoJSON.Feature<GeoJSON.LineString> = {
        type: 'Feature',
        geometry: { type: 'LineString', coordinates: pathCoords },
        properties: {},
      };

      if (!map.getSource(sourceId)) {
        map.addSource(sourceId, { type: 'geojson', data: geojson });
      } else {
        (map.getSource(sourceId) as maplibregl.GeoJSONSource).setData(geojson);
      }

      if (!map.getLayer(layerId)) {
        map.addLayer(
          {
            id: layerId,
            type: 'line',
            source: sourceId,
            paint: {
              'line-color': '#ffffff',
              'line-width': 2,
              'line-opacity': 0.7,
              'line-dasharray': [3, 4],
            },
            layout: { 'line-cap': 'round', 'line-join': 'round' },
          },
          insertBefore,
        );
      }

      // Icon at arc/curve midpoint
      const midIdx = Math.floor(pathCoords.length / 2);
      const [midLng, midLat] = pathCoords[midIdx];
      const bearing = computeBearing(from.coordinates, to.coordinates);
      const icon = new maplibregl.Marker({
        element: createIconMarker(mode, bearing),
        anchor: 'center',
      })
        .setLngLat([midLng, midLat])
        .addTo(map);
      iconMarkersRef.current.push(icon);

      // Origin dot only on the first leg
      if (i === 0) {
        originDotRef.current = new maplibregl.Marker({
          element: createOriginDot(),
          anchor: 'center',
        })
          .setLngLat([from.coordinates[1], from.coordinates[0]])
          .addTo(map);
      }
    });
  }, [map, mapLoaded, accessRoute]);
}
