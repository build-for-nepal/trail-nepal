'use client';

import { useCallback, useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';

import { TREK_DETAILS } from '@/static/trekDetails';
import LayerSwitcher from './LayerSwitcher';
import { GeoJSONData, LayerKey } from '@/types/map';
import {
  useMapInit,
  useTrailData,
  useTrekMarkers,
} from '@/hooks/useMapFeatures';
import { LAYERS, POPUP_STYLES } from '@/static/mapConstants';

interface MapClientProps {
  data: GeoJSONData | null;
  center: [number, number];
  trekId?: string;
}

export default function MapClient({ data, center, trekId }: MapClientProps) {
  // 1. Initialize Map
  const { containerRef, map, mapLoaded } = useMapInit(center);

  // 2. Fetch Trek Timeline
  const trekInfo = trekId ? TREK_DETAILS?.[trekId] : null;
  const timeline = trekInfo?.timeline ?? [];

  // 3. Attach Map Features (Hooks)
  useTrailData(map, mapLoaded, data);
  useTrekMarkers(map, mapLoaded, timeline);

  // 4. Layer Switcher Logic
  const [activeLayer, setActiveLayer] = useState<LayerKey>('satellite');

  const handleLayerChange = useCallback(
    (key: LayerKey) => {
      if (!map) return;
      setActiveLayer(key);
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

  return (
    <div className="relative h-full w-full">
      <style>{POPUP_STYLES}</style>

      <LayerSwitcher activeLayer={activeLayer} onChange={handleLayerChange} />

      <div ref={containerRef} className="h-full w-full" />
    </div>
  );
}
