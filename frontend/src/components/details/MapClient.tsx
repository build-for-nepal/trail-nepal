"use client";

import { useEffect, useState } from "react";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  LayersControl,
  useMap,
  ZoomControl,
  ScaleControl,
  Marker,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { TrekTimelineDay } from "@/types/trek";
import { TREK_DETAILS } from "@/static/trekDetails";

function MapUpdater({ data }: { data: any }) {
  const map = useMap();
  useEffect(() => {
    if (data && data.features && data.features.length > 0) {
      try {
        const geoJsonLayer = L.geoJSON(data);
        const bounds = geoJsonLayer.getBounds();
        if (bounds.isValid()) {
          map.flyToBounds(bounds, { padding: [50, 50], duration: 1.5 });
        }
      } catch (e) {
        console.error("Error calculating route bounds", e);
      }
    }
  }, [data, map]);
  return null;
}

// CAMERA PANNER FOR CLICKED MARKERS
function FocusHandler({
  focusTarget,
}: {
  focusTarget: [number, number] | null;
}) {
  const map = useMap();
  useEffect(() => {
    if (focusTarget) {
      // Fly to the clicked point and zoom in for a detailed view
      map.flyTo(focusTarget, 14, { duration: 1.2 });
    }
  }, [focusTarget, map]);
  return null;
}

interface MapClientProps {
  data: any;
  center: [number, number];
  trekId?: string;
}

export default function MapClient({ data, center, trekId }: MapClientProps) {
  // State for camera panning
  const [activeCoords, setActiveCoords] = useState<[number, number] | null>(
    null,
  );

  // Lock map to Himalayan region bounds
  const nepalBounds = L.latLngBounds([26.34, 80.05], [30.45, 88.2]);

  // Extract timeline array using the current Trek ID
  const trekInfo = trekId && TREK_DETAILS ? TREK_DETAILS[trekId] : null;
  const timeline = trekInfo?.timeline || [];

  // Creates the dynamic HTML circle markers for the map
  const createDayIcon = (dayNumber: string) => {
    return L.divIcon({
      className: "bg-transparent! border-none!",
      html: `
        <div class="flex items-center justify-center w-7 h-7 rounded-full shadow-lg border-2 border-white bg-[#84b829] text-white hover:bg-white hover:text-[#84b829] hover:scale-125 transition-all duration-300">
          <span class="text-xs font-bold">${dayNumber}</span>
        </div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 14], // Perfect center alignment
      tooltipAnchor: [0, -16], // Tooltip floats right above the icon
    });
  };

  // Interactive styling for the GeoJSON trail
  const onEachFeature = (feature: any, layer: L.Layer) => {
    if (feature.properties && feature.properties.name) {
      layer.bindTooltip(feature.properties.name, { sticky: true });
    }
    // Optional: Highlight segment on hover if your GeoJSON data supports it
    layer.on({
      mouseover: (e) => {
        const line = e.target;
        line.setStyle({ color: "#a5d848", weight: 6 });
      },
      mouseout: (e) => {
        const line = e.target;
        line.setStyle({ color: "#84b829", weight: 4 });
      },
    });
  };

  return (
    <MapContainer
      center={center}
      zoom={10}
      minZoom={6}
      maxZoom={16}
      maxBounds={nepalBounds}
      maxBoundsViscosity={0.8}
      scrollWheelZoom={true}
      zoomControl={false}
      style={{ height: "100%", width: "100%", zIndex: 0 }}
    >
      <MapUpdater data={data} />
      <FocusHandler focusTarget={activeCoords} />

      <ZoomControl position="bottomright" />
      <ScaleControl position="bottomleft" imperial={false} />

      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Natural Terrain">
          <TileLayer
            attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Topographical (Contours)">
          <TileLayer
            attribution="Map data: &copy; OSM | Style: OpenTopoMap"
            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Satellite Imagery">
          <TileLayer
            attribution="&copy; Esri"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        </LayersControl.BaseLayer>
      </LayersControl>

      {/* Render The Route Trail */}
      {data && (
        <>
          {/* Outer White Casing / Border for Trail */}
          <GeoJSON
            key={`${trekId}-casing`}
            data={data}
            style={{
              color: "#ffffff",
              weight: 7,
              opacity: 0.9,
              lineCap: "round",
            }}
          />
          {/* Main Green Trail */}
          <GeoJSON
            key={`${trekId}-fg`}
            data={data}
            onEachFeature={onEachFeature}
            style={{
              color: "#84b829",
              weight: 4,
              lineCap: "round",
              className: "cursor-pointer transition-all duration-300",
            }}
          />
        </>
      )}

      {/* Render Interactive Daily Waypoints */}
      {timeline.map((dayObj: TrekTimelineDay) => {
        // Skip rendering a marker if coordinates are missing
        if (!dayObj.coordinates) return null;

        return (
          <Marker
            key={dayObj.day}
            position={dayObj.coordinates as [number, number]}
            icon={createDayIcon(dayObj.day as string)}
            eventHandlers={{
              click: () =>
                setActiveCoords(dayObj.coordinates as [number, number]),
            }}
          >
            {/* Rich Hover Card */}
            <Tooltip
              direction="top"
              className="bg-transparent! border-none! shadow-none! p-0!"
            >
              <div className="bg-white rounded-xl shadow-xl overflow-hidden w-56 pointer-events-none">
                <div className="bg-[#84b829] px-3 py-2 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider opacity-90">
                    Day {dayObj.day}
                  </span>
                  <h4 className="text-sm font-semibold leading-tight mt-0.5 whitespace-normal">
                    {dayObj.title}
                  </h4>
                </div>
                <div className="p-3 grid grid-cols-2 gap-y-2 gap-x-4 text-xs whitespace-normal">
                  <div>
                    <span className="block text-gray-500 mb-0.5 text-[10px] uppercase">
                      Elevation
                    </span>
                    <strong className="text-gray-800">
                      {dayObj.stats?.elevation || "N/A"}
                    </strong>
                  </div>
                  <div>
                    <span className="block text-gray-500 mb-0.5 text-[10px] uppercase">
                      Distance
                    </span>
                    <strong className="text-gray-800">
                      {dayObj.stats?.distance || "N/A"}
                    </strong>
                  </div>
                  <div className="col-span-2 pt-1 border-t border-gray-100">
                    <span className="block text-gray-500 mb-0.5 text-[10px] uppercase">
                      Est. Time
                    </span>
                    <strong className="text-gray-800">
                      {dayObj.stats?.duration || "N/A"}
                    </strong>
                  </div>
                </div>
              </div>
            </Tooltip>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
