import { useEffect } from "react";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  LayersControl,
  useMap,
  ZoomControl,
  ScaleControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

// 1. SMART AUTO-FRAMING UPDATER
// This calculates the size of the whole trail and perfectly fits it on the screen
function MapUpdater({ data }: { data: any }) {
  const map = useMap();

  useEffect(() => {
    if (data && data.features && data.features.length > 0) {
      try {
        // Create a temporary Leaflet GeoJSON layer to calculate the bounding box
        const geoJsonLayer = L.geoJSON(data);
        const bounds = geoJsonLayer.getBounds();

        if (bounds.isValid()) {
          // Fly to fit the entire route with a nice 50px padding from the edges
          map.flyToBounds(bounds, { padding: [50, 50], duration: 1.5 });
        }
      } catch (e) {
        console.error("Error calculating route bounds", e);
      }
    }
  }, [data, map]);

  return null;
}

interface MapClientProps {
  data: any;
  center: [number, number];
  trekId?: string;
}

export default function MapClient({ data, center, trekId }: MapClientProps) {
  // 2. RESTRICT MAP PANNING TO HIMALAYAN REGION
  // This prevents users from getting lost in the ocean
  const nepalBounds = L.latLngBounds(
    [26.34, 80.05], // South-West corner (India border)
    [30.45, 88.2], // North-East corner (Tibet border)
  );

  // 3. INTERACTIVE TOOLTIPS
  // Adds a tooltip when hovering over the trail
  const onEachFeature = (feature: any, layer: L.Layer) => {
    if (feature.properties && feature.properties.name) {
      const popupContent = `
        <div class="text-center font-sans">
          <strong class="block text-gray-800 text-sm">${feature.properties.name}</strong>
          ${feature.properties.maxElevationM ? `<span class="text-xs text-gray-500">Max Elev: ${feature.properties.maxElevationM}m</span>` : ""}
        </div>
      `;
      layer.bindTooltip(popupContent, {
        sticky: true,
        className:
          "bg-white/90 backdrop-blur-sm border-none shadow-lg rounded-md px-3 py-2",
      });
    }
  };

  return (
    <MapContainer
      center={center}
      zoom={10}
      minZoom={6}
      maxZoom={16}
      maxBounds={nepalBounds} // Lock panning
      maxBoundsViscosity={0.8} // Add a rubber-band bounce effect at edges
      scrollWheelZoom={true}
      zoomControl={false} // We disable default zoom to place it nicely at the bottom
      style={{ height: "100%", width: "100%", zIndex: 0 }}
    >
      {/* Auto-framer */}
      <MapUpdater data={data} />

      {/* Modern UI Controls */}
      <ZoomControl position="bottomright" />
      <ScaleControl position="bottomleft" imperial={false} />

      {/* Layer Toggle Control (Top Right) */}
      <LayersControl position="topright">
        {/* Clean Natural Terrain (Default) */}
        <LayersControl.BaseLayer checked name="Natural Terrain">
          <TileLayer
            attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
          />
        </LayersControl.BaseLayer>

        {/* Contour Map (Crucial for Trekking!) */}
        <LayersControl.BaseLayer name="Topographical (Contours)">
          <TileLayer
            attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>

        {/* High-Res Satellite View */}
        <LayersControl.BaseLayer name="Satellite Imagery">
          <TileLayer
            attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        </LayersControl.BaseLayer>
      </LayersControl>

      {/* Render Route Data */}
      {data && (
        <>
          {/* Outer Glow / Drop Shadow Effect */}
          <GeoJSON
            key={`${trekId}-bg`}
            data={data}
            style={{
              color: "#000000",
              weight: 10,
              opacity: 0.25,
              lineCap: "round",
              lineJoin: "round",
            }}
          />
          {/* Outer White Casing */}
          <GeoJSON
            key={`${trekId}-casing`}
            data={data}
            style={{
              color: "#ffffff",
              weight: 7,
              opacity: 0.9,
              lineCap: "round",
              lineJoin: "round",
            }}
          />
          {/* Main Brand-Green Trail */}
          <GeoJSON
            key={`${trekId}-fg`}
            data={data}
            onEachFeature={onEachFeature}
            style={{
              color: "#84b829",
              weight: 4,
              lineCap: "round",
              lineJoin: "round",
              className:
                "hover:brightness-110 cursor-pointer transition-all duration-300",
            }}
          />
        </>
      )}
    </MapContainer>
  );
}
