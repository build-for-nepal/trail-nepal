import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import { TrekTimelineDay } from '@/types/trek';
import { GeoJSONData, LayerKey } from '@/types/map';
import { LAYERS } from '@/static/mapConstants';
import { buildPopupHTML, fitToBounds } from '@/lib/mapHelper';

// Hook 1: Initializes the empty map
export function useMapInit(center: [number, number]) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<maplibregl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current || map) return;

    const sources: any = {};
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
      pitch: 62,
      bearing: -15,
      minZoom: 6,
      maxZoom: 16,
      fadeDuration: 0,
    });

    m.addControl(
      new maplibregl.NavigationControl({
        showCompass: true,
        visualizePitch: true,
      }),
      'bottom-right',
    );
    m.addControl(
      new maplibregl.ScaleControl({ unit: 'metric' }),
      'bottom-left',
    );

    m.on('load', () => {
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
          'line-width': 8,
          'line-opacity': 0.9,
        },
        layout: { 'line-cap': 'round', 'line-join': 'round' },
      });

      m.addLayer({
        id: 'trail-fg',
        type: 'line',
        source: 'trail',
        paint: { 'line-color': '#84b829', 'line-width': 6 },
        layout: { 'line-cap': 'round', 'line-join': 'round' },
      });

      setMapLoaded(true);
    });

    setMap(m);
    return () => m.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { containerRef, map, mapLoaded };
}

// Hook 2: Handles drawing and updating the Red/Green trail lines
export function useTrailData(
  map: maplibregl.Map | null,
  mapLoaded: boolean,
  data: GeoJSONData | null,
) {
  const fittedDataRef = useRef<GeoJSONData | null>(null);

  useEffect(() => {
    if (!mapLoaded || !map || !data || fittedDataRef.current === data) return;

    const source = map.getSource('trail') as
      | maplibregl.GeoJSONSource
      | undefined;
    source?.setData(data);
    fitToBounds(map, data);
    fittedDataRef.current = data;
  }, [data, mapLoaded, map]);
}

// Hook 3: Handles the 3D markers and Popups
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

    timeline.forEach((dayObj) => {
      if (!dayObj.coordinates) return;
      const [lat, lng] = dayObj.coordinates;

      const el = document.createElement('div');
      el.className =
        'flex items-center justify-center w-7 h-7 rounded-full shadow-lg border-2 border-white bg-[#376bb6] text-white cursor-pointer transition-all duration-300';
      el.innerHTML = `<span class="text-xs font-bold">${dayObj.day}</span>`;

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat([lng, lat])
        .addTo(map);

      el.addEventListener('mouseenter', () =>
        popupRef.current
          ?.setHTML(buildPopupHTML(dayObj))
          .setLngLat([lng, lat])
          .addTo(map),
      );
      el.addEventListener('mouseleave', () => popupRef.current?.remove());
      el.addEventListener('click', () =>
        map.flyTo({ center: [lng, lat], zoom: 14, duration: 1200 }),
      );

      markersRef.current.push(marker);
    });
  }, [mapLoaded, timeline, map]);
}
