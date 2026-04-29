'use client';

import dynamic from 'next/dynamic';
import { useTrekkingData } from '@/hooks/useTrekkingData';

// Dynamically import the entire Map Client to entirely disable SSR for Leaflet
// This safely bypasses all hook and compound component TS errors
const MapClient = dynamic(() => import('./MapClient'), { ssr: false });

interface TrekkingMapProps {
  trekId?: string;
}

export default function TrekkingMap({ trekId }: TrekkingMapProps) {
  const { data, isLoading, error } = useTrekkingData(trekId);

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-500">
        Failed to load map data for {trekId}.
      </div>
    );
  }

  // Default to Nepal Center
  let center: [number, number] = [28.3949, 84.124];

  if (data?.features?.[0]?.geometry) {
    const geom = data.features[0].geometry;
    let firstCoord;

    // Handle standard single continuous line (LineString)
    if (geom.type === 'LineString' && geom.coordinates?.length > 0) {
      firstCoord = geom.coordinates[0];
    }
    // Handle broken/segmented lines from Overpass Turbo (MultiLineString)
    else if (
      geom.type === 'MultiLineString' &&
      geom.coordinates?.[0]?.length > 0
    ) {
      firstCoord = geom.coordinates[0][0];
    }

    // Set center if we successfully extracted the coordinate
    if (firstCoord && firstCoord.length >= 2) {
      center = [firstCoord[1] as number, firstCoord[0] as number];
    }
  }

  return (
    <div className="relative h-full w-full bg-gray-100">
      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
          <span className="text-sm font-medium text-gray-600 animate-pulse">
            Loading {trekId} Route...
          </span>
        </div>
      )}

      {/* Render the dynamically imported Map Client */}
      <div className="h-full w-full z-0">
        <MapClient data={data} center={center} trekId={trekId} />
      </div>
    </div>
  );
}
