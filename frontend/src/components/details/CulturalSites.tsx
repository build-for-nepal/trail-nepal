'use client';

import { useCallback, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MapPin } from 'lucide-react';

import SectionHeader from '../common/SectionHeader';
import CulturalMap from './map/CulturalMap';
import { cn } from '@/lib/utils';
import { SITE_MARKER_COLOR } from '@/static/mapConstants';
import type { CulturalTourDetail } from '@/types/cultural';
import type { DayFocus } from '@/types/map';
import type { TrekTimelineDay } from '@/types/trek';

// Adapt cultural sites into the map/weather waypoint shape (TrekTimelineDay).
// The season section derives weather locations from `coordinates` and `title`;
// site names come through clean because labelFromTitle strips trek/hike
// prefixes. Cultural popups are built by buildSitePopupHTML, so `variant` is
// only used to keep the waypoint type honest.
export const toSiteWaypoints = (sites: CulturalTourDetail['sites']): TrekTimelineDay[] =>
  sites.map((site) => ({
    day: String(site.order).padStart(2, '0'),
    title: site.name,
    description: site.description,
    coordinates: site.coordinates,
    variant: 'site',
    stats: {
      distance: null,
      duration: null,
    },
  }));

const CulturalSites = ({ tour }: { tour: CulturalTourDetail }) => {
  const { sites, itinerary, name } = tour;

  const siteByName = new Map(sites.map((site) => [site.name, site]));
  const dayById = new Map(itinerary.map((day) => [day.id, day]));
  const siteColors = sites.map((site) => {
    const day = site.dayId ? dayById.get(site.dayId) : undefined;
    return day?.color ?? SITE_MARKER_COLOR;
  });

  const [focus, setFocus] = useState<DayFocus | null>(null);
  const [activePlace, setActivePlace] = useState<number | null>(null);

  const focusSite = useCallback((index: number) => {
    setFocus((prev) => ({ index, nonce: (prev?.nonce ?? 0) + 1 }));
    setActivePlace(index);
  }, []);

  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.cultural-site-item', {
        y: 24,
        opacity: 0,
        duration: 0.5,
        stagger: 0.09,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });
    },
    { scope: sectionRef },
  );

  if (!sites || sites.length === 0) return null;

  return (
    <div ref={sectionRef} className="relative flex flex-col gap-6 bg-[#EBF0F8]">
      <div className="page-wrapper flex flex-col gap-8 py-20">
        <SectionHeader
          title="Sites & Itinerary"
          description="A day-by-day plan of the sites you'll visit, mapped below."
          id="sites"
        />

        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-sm lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
          {/* Day-by-day itinerary */}
          <div className="flex flex-col p-4 sm:p-6 lg:h-[640px]">
            <div className="mb-4 flex shrink-0 items-center justify-between gap-3">
              <h3
                className="text-xl font-bold tracking-tight text-black/90"
                style={{ fontFamily: 'var(--font-poppins), serif' }}
              >
                {name} Itinerary
              </h3>
              <span className="whitespace-nowrap rounded-full border border-[#E2E8F0] px-3 py-1 text-[11px] font-semibold text-gray-600">
                {itinerary.length} Days
              </span>
            </div>

            <div className="flex max-h-[520px] flex-col gap-3 overflow-y-auto pr-1 lg:max-h-none lg:flex-1">
              {itinerary.map((day) => (
                <div key={day.id} className="cultural-site-item">
                  <article className="rounded-2xl border border-[#E2E8F0] bg-white">
                    <header className="flex flex-wrap items-center gap-x-3 gap-y-2 px-5 pt-4">
<span
  className="inline-flex items-center justify-center rounded-full px-3 py-1 text-[11px] font-bold text-white"
  style={{ backgroundColor: day.color }}
>
  {day.day}
</span>
                      <h4 className="min-w-0 flex-1 truncate text-sm font-semibold tracking-tight text-black/80">
                        {day.title}
                      </h4>
                      <span className="whitespace-nowrap text-[10px] font-medium text-gray-500">
                        {day.transport}
                      </span>
                    </header>

                    <p className="px-5 pt-2 text-[13px] leading-relaxed text-gray-600">
                      {day.description}
                    </p>

<ul className="flex flex-wrap gap-2 px-5 py-4">
  {day.highlights.map((highlight) => {
    const site = siteByName.get(highlight);
    const siteIndex = site ? sites.indexOf(site) : -1;
    const isActive = siteIndex >= 0 && activePlace === siteIndex;
    return (
      <li key={highlight}>
        <button
          onClick={() => {
            if (site) focusSite(siteIndex);
          }}
          disabled={!site}
          className={cn(
            'flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium text-black/80 transition-colors',
            site
              ? 'cursor-pointer hover:border-(--day) hover:bg-gray-50'
              : 'cursor-default',
            isActive
              ? 'border-(--day) bg-(--day)/10'
              : 'border-[#E2E8F0] bg-transparent',
          )}
          style={{ '--day': day.color } as React.CSSProperties}
        >
          <MapPin
            size={13}
            strokeWidth={2.2}
            className="shrink-0"
            style={{ color: day.color }}
          />
          {highlight}
        </button>
      </li>
    );
  })}
</ul>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="h-[420px] w-full bg-gray-100 lg:h-[640px]">
            <CulturalMap
  sites={sites}
  onSiteClick={focusSite}
  focus={focus}
  siteColors={siteColors}
/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalSites;