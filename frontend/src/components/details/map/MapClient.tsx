'use client';

import { useCallback, useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Layers, Plus, Minus, Navigation } from 'lucide-react';

import { TREK_DETAILS } from '@/static/trekDetails';
import { GeoJSONData, LayerKey } from '@/types/map';
import { useMapInit, useTrailData, useTrekMarkers } from '@/hooks/useMapFeatures';
import { LAYER_THUMBNAILS, LAYERS, POPUP_STYLES } from '@/static/mapConstants';

interface MapClientProps {
  data: GeoJSONData | null;
  center: [number, number];
  trekId?: string;
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

export default function MapClient({ data, center, trekId }: MapClientProps) {
  const { containerRef, map, mapLoaded } = useMapInit(center);

  const trekInfo = trekId ? TREK_DETAILS?.[trekId] : null;
  const timeline = trekInfo?.timeline ?? [];

  useTrailData(map, mapLoaded, data);
  useTrekMarkers(map, mapLoaded, timeline);

  // Layer switcher
  const [activeLayer, setActiveLayer] = useState<LayerKey>('satellite');
  const [showLayerPicker, setShowLayerPicker] = useState(false);

  const handleLayerChange = useCallback(
    (key: LayerKey) => {
      if (!map) return;
      setActiveLayer(key);
      setShowLayerPicker(false);
      (Object.keys(LAYERS) as LayerKey[]).forEach((k) => {
        map.setLayoutProperty(`${k}-layer`, 'visibility', k === key ? 'visible' : 'none');
      });
    },
    [map],
  );

  // 3D toggle — terrain stays loaded for elevation queries; only pitch changes
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
    <div className="relative h-full w-full">
      <style>{POPUP_STYLES}</style>

      {/* Invisible overlay to close layer picker on outside click */}
      {showLayerPicker && (
        <div className="absolute inset-0 z-9" onClick={() => setShowLayerPicker(false)} />
      )}

      {/* Right-side controls */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
        {/* Layers button + picker */}
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
              {(Object.entries(LAYERS) as [LayerKey, (typeof LAYERS)[LayerKey]][]).map(
                ([key, cfg]) => (
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
                ),
              )}
            </div>
          )}
        </div>

        {/* 3D / 2D toggle */}
        <ControlBtn
          onClick={handle3DToggle}
          disabled={!mapLoaded}
          title={is3D ? 'Switch to 2D' : 'Switch to 3D'}
        >
          <span className="text-xs font-bold tracking-wide">{is3D ? '3D' : '2D'}</span>
        </ControlBtn>

        {/* Zoom in */}
        <ControlBtn onClick={() => map?.zoomIn()} disabled={!mapLoaded} title="Zoom in">
          <Plus className="h-4.5 w-4.5" />
        </ControlBtn>

        {/* Zoom out */}
        <ControlBtn onClick={() => map?.zoomOut()} disabled={!mapLoaded} title="Zoom out">
          <Minus className="h-4.5 w-4.5" />
        </ControlBtn>

        {/* Reset north */}
        <ControlBtn
          onClick={() => map?.easeTo({ bearing: 0, pitch: 0, duration: 500 })}
          disabled={!mapLoaded}
          title="Reset to north"
        >
          <Navigation className="h-4.25 w-4.25" />
        </ControlBtn>
      </div>

<div ref={containerRef} className="h-full w-full" />
    </div>
  );
}
