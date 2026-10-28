'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import {
  ExternalLink,
  Layers,
  Maximize2,
  Minimize2,
  Minus,
  Plus,
} from 'lucide-react';
import maplibregl from 'maplibre-gl';

import { useMapInit } from '@/hooks/useMapFeatures';
import { fitToBounds } from '@/lib/mapHelper';
import { LAYER_THUMBNAILS, LAYERS, POPUP_STYLES } from '@/static/mapConstants';
import type { GeoJSONData, LayerKey } from '@/types/map';

export type SavedPin = {
  id: string;
  title: string;
  href: string;
  /** `[lat, lng]`, as stored in the static data. */
  coordinates: [number, number];
};

const KATHMANDU: [number, number] = [27.7172, 85.324];
const HEART_PATH =
  'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z';

function makeHeartEl(): HTMLElement {
  const el = document.createElement('div');
  el.style.cssText =
    'width:34px;height:34px;border-radius:9999px;background:#fff;display:flex;' +
    'align-items:center;justify-content:center;cursor:pointer;' +
    'box-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -2px rgba(0,0,0,0.1);';
  el.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="#F0605D" stroke="#F0605D" stroke-width="2" stroke-linejoin="round"><path d="${HEART_PATH}"/></svg>`;
  return el;
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
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      aria-label={title}
      className={`flex size-10 cursor-pointer items-center justify-center rounded-full shadow-md transition-colors duration-150 focus:outline-none disabled:opacity-40 ${
        active
          ? 'bg-gray-800 text-white'
          : 'bg-white text-gray-700 hover:bg-gray-50'
      }`}
    >
      {children}
    </button>
  );
}

export default function SavedTripsMap({ pins }: { pins: SavedPin[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { containerRef, map, mapLoaded } = useMapInit(KATHMANDU);

  // One heart per saved destination; the popup links to its detail page.
  useEffect(() => {
    if (!mapLoaded || !map) return;

    // One shared popup, shown while a heart (or the popup itself) is hovered.
    // Click shows it too, so touch screens without hover can reach the link.
    const popup = new maplibregl.Popup({
      closeButton: false,
      closeOnClick: false,
      offset: 22,
      className: 'trail-popup',
    });
    let hideTimer: ReturnType<typeof setTimeout> | null = null;
    const clearHideTimer = () => {
      if (hideTimer !== null) clearTimeout(hideTimer);
      hideTimer = null;
    };
    const scheduleHide = () => {
      clearHideTimer();
      hideTimer = setTimeout(() => popup.remove(), 150);
    };

    const markers = pins.map((pin) => {
      const [lat, lng] = pin.coordinates;

      const link = document.createElement('a');
      link.href = pin.href;
      link.textContent = pin.title;
      link.style.cssText =
        'display:block;padding:8px 14px;font:600 13px var(--font-poppins),Poppins,sans-serif;color:#292C24;text-decoration:none;';

      const el = makeHeartEl();
      const show = () => {
        clearHideTimer();
        popup.setDOMContent(link).setLngLat([lng, lat]).addTo(map);
        const popupEl = popup.getElement();
        popupEl.onmouseenter = clearHideTimer;
        popupEl.onmouseleave = scheduleHide;
      };
      el.addEventListener('mouseenter', show);
      el.addEventListener('mouseleave', scheduleHide);
      el.addEventListener('click', show);

      return new maplibregl.Marker({ element: el })
        .setLngLat([lng, lat])
        .addTo(map);
    });

    if (pins.length > 0) {
      const points = {
        type: 'FeatureCollection',
        features: pins.map((pin) => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [pin.coordinates[1], pin.coordinates[0]],
          },
          properties: {},
        })),
      } as unknown as GeoJSONData;
      fitToBounds(map, points, undefined, { maxZoom: 11 });
    }

    return () => {
      clearHideTimer();
      popup.remove();
      markers.forEach((marker) => marker.remove());
    };
  }, [map, mapLoaded, pins]);

  // Keep page scroll smooth until the user engages with the map.
  const [interactive, setInteractive] = useState(false);
  useEffect(() => {
    if (!map) return;
    const handlers = [
      map.scrollZoom,
      map.boxZoom,
      map.dragPan,
      map.touchZoomRotate,
      map.doubleClickZoom,
    ];
    handlers.forEach((handler) =>
      interactive ? handler.enable() : handler.disable(),
    );
  }, [map, interactive]);

  const [activeLayer, setActiveLayer] = useState<LayerKey>('satellite');
  const [showLayerPicker, setShowLayerPicker] = useState(false);
  const handleLayerChange = useCallback(
    (key: LayerKey) => {
      if (!map) return;
      setActiveLayer(key);
      setShowLayerPicker(false);
      (Object.keys(LAYERS) as LayerKey[]).forEach((k) =>
        map.setLayoutProperty(
          `${k}-layer`,
          'visibility',
          k === key ? 'visible' : 'none',
        ),
      );
    },
    [map],
  );

  const [is3D, setIs3D] = useState(false);
  const handle3DToggle = useCallback(() => {
    if (!map) return;
    map.easeTo(
      is3D
        ? { pitch: 0, bearing: 0, duration: 600 }
        : { pitch: 62, bearing: -15, duration: 600 },
    );
    setIs3D((prev) => !prev);
  }, [map, is3D]);

  const handleOpenMap = useCallback(() => {
    if (!map) return;
    const { lng, lat } = map.getCenter();
    window.open(
      `https://www.openstreetmap.org/#map=${Math.round(map.getZoom())}/${lat}/${lng}`,
      '_blank',
      'noopener,noreferrer',
    );
  }, [map]);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const handleFullscreen = useCallback(() => {
    const el = wrapperRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      el.requestFullscreen().catch(() => {});
    }
  }, []);
  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  return (
    <div ref={wrapperRef} className="relative h-full w-full bg-gray-100">
      <style>{POPUP_STYLES}</style>

      {showLayerPicker && (
        <div
          className="absolute inset-0 z-9"
          onClick={() => setShowLayerPicker(false)}
        />
      )}

      <div className="absolute right-3 top-3 z-10 flex flex-col gap-2">
        <div className="relative">
          <ControlBtn
            onClick={() => setShowLayerPicker((open) => !open)}
            disabled={!mapLoaded}
            active={showLayerPicker}
            title="Change map style"
          >
            <Layers className="size-4.5" />
          </ControlBtn>

          {showLayerPicker && (
            <div className="absolute right-12 top-0 w-40 overflow-hidden rounded-xl border border-gray-100 bg-white py-1 shadow-xl">
              {(
                Object.entries(LAYERS) as [
                  LayerKey,
                  (typeof LAYERS)[LayerKey],
                ][]
              ).map(([key, cfg]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleLayerChange(key)}
                  className={`flex w-full cursor-pointer items-center gap-2.5 px-3 py-2 text-left text-xs transition-colors hover:bg-gray-50 ${
                    activeLayer === key
                      ? 'bg-green-50 font-semibold text-green-700'
                      : 'text-gray-700'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={LAYER_THUMBNAILS[key]}
                    alt=""
                    className="size-8 shrink-0 rounded-md border border-gray-100 object-cover"
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
          <Plus className="size-4.5" />
        </ControlBtn>
        <ControlBtn
          onClick={() => map?.zoomOut()}
          disabled={!mapLoaded}
          title="Zoom out"
        >
          <Minus className="size-4.5" />
        </ControlBtn>
        <ControlBtn
          onClick={handleOpenMap}
          disabled={!mapLoaded}
          title="Open in OpenStreetMap"
        >
          <ExternalLink className="size-4" />
        </ControlBtn>
        <ControlBtn
          onClick={handleFullscreen}
          title={isFullscreen ? 'Exit full view' : 'Full view'}
        >
          {isFullscreen ? (
            <Minimize2 className="size-4" />
          ) : (
            <Maximize2 className="size-4" />
          )}
        </ControlBtn>
      </div>

      <div
        className="h-full w-full"
        onPointerDown={() => setInteractive(true)}
        onPointerLeave={() => setInteractive(false)}
      >
        <div ref={containerRef} className="h-full w-full" />
      </div>
    </div>
  );
}
