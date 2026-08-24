'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import {
  Layers,
  Plus,
  Minus,
  Navigation,
  Maximize2,
  Minimize2,
} from 'lucide-react';

import { TREK_DETAILS } from '@/static/trekDetails';
import { GeoJSONData, LayerKey } from '@/types/map';
import { ElevationPoint } from '@/types/trek';
import {
  useMapInit,
  useTrailData,
  useTrekMarkers,
  useTrailEndFlag,
  useHikerMarker,
  useAccessRoute,
} from '@/hooks/useMapFeatures';
import { ACCESS_ROUTES } from '@/static/accessRoutes';
import { LAYER_THUMBNAILS, LAYERS, POPUP_STYLES } from '@/static/mapConstants';
import ElevationProfile from './ElevationProfile';

interface MapClientProps {
  data: GeoJSONData | null;
  center: [number, number];
  trekId?: string;

  onDayClick?: (index: number) => void;
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

export default function MapClient({
  data,
  center,
  trekId,
  onDayClick,
}: MapClientProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { containerRef, map, mapLoaded } = useMapInit(center);

  const trekInfo = trekId ? TREK_DETAILS?.[trekId] : null;
  const timeline = trekInfo?.timeline ?? [];
  const accessRoute = trekId ? ACCESS_ROUTES[trekId] : undefined;

  useTrailData(map, mapLoaded, data);
  useTrekMarkers(map, mapLoaded, timeline, onDayClick);
  useTrailEndFlag(map, mapLoaded, data, trekId === 'mardi-himal-trek');
  useAccessRoute(map, mapLoaded, accessRoute);

  // Load elevation profile for the current trek
  const [elevationPoints, setElevationPoints] = useState<ElevationPoint[]>([]);
  useEffect(() => {
    if (!trekId) return;
    fetch(`/data/elevation/${trekId}-elevation.json`)
      .then((r) => r.json())
      .then(setElevationPoints)
      .catch(() => {});
  }, [trekId]);

  // Map interaction control: keep page scroll smooth until user explicitly enables map zoom.
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

  // Hiker marker on trail on chart hover
  const [hoverCoord, setHoverCoord] = useState<[number, number] | null>(null);
  useHikerMarker(map, mapLoaded, hoverCoord);

  const handleElevHover = useCallback((pt: ElevationPoint | null) => {
    setHoverCoord(pt ? [pt.lng, pt.lat] : null);
  }, []);

  // Layer switcher
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

  // Fullscreen toggle
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

  // 3D toggle
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

      {/* Invisible overlay to close layer picker */}
      {showLayerPicker && (
        <div
          className="absolute inset-0 z-9"
          onClick={() => setShowLayerPicker(false)}
        />
      )}

      {/* Right-side controls — Layers, 3D, Zoom, North, Fullscreen */}
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

        {/* 3D / 2D toggle */}
        <ControlBtn
          onClick={handle3DToggle}
          disabled={!mapLoaded}
          title={is3D ? 'Switch to 2D' : 'Switch to 3D'}
        >
          <span className="text-xs font-bold tracking-wide">
            {is3D ? '3D' : '2D'}
          </span>
        </ControlBtn>

        {/* Zoom in */}
        <ControlBtn
          onClick={() => map?.zoomIn()}
          disabled={!mapLoaded}
          title="Zoom in"
        >
          <Plus className="h-4.5 w-4.5" />
        </ControlBtn>

        {/* Zoom out */}
        <ControlBtn
          onClick={() => map?.zoomOut()}
          disabled={!mapLoaded}
          title="Zoom out"
        >
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

        {/* Fullscreen */}
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

      {elevationPoints.length > 0 && (
        <ElevationProfile points={elevationPoints} onHover={handleElevHover} />
      )}

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
