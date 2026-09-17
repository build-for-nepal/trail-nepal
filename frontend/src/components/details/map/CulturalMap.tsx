'use client';

import dynamic from 'next/dynamic';
import type { CulturalSite } from '@/types/cultural';
import type { DayFocus } from '@/types/map';

const CulturalMapClient = dynamic(() => import('./CulturalMapClient'), {
  ssr: false,
});

export type CulturalMapProps = {
  sites: CulturalSite[];
  onSiteClick?: (index: number) => void;
  focus?: DayFocus | null;
};

const FALLBACK_CENTER: [number, number] = [27.71, 85.32];

function meanCenter(sites: CulturalSite[]): [number, number] {
  if (sites.length === 0) return FALLBACK_CENTER;

  const lat =
    sites.reduce((sum, site) => sum + site.coordinates[0], 0) / sites.length;
  const lng =
    sites.reduce((sum, site) => sum + site.coordinates[1], 0) / sites.length;

  return [lat, lng];
}

export default function CulturalMap({ sites, onSiteClick, focus }: CulturalMapProps) {
  const center = meanCenter(sites);

  if (sites.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-500">
        No sites to display.
      </div>
    );
  }

  return (
    <div className="relative h-full w-full bg-gray-100">
      <CulturalMapClient
        sites={sites}
        center={center}
        onSiteClick={onSiteClick}
        focus={focus}
      />
    </div>
  );
}