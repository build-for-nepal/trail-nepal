'use client';

import { useState, useCallback } from 'react';
import { FilterState } from '@/types/explorepage';
import FilterSidebar from '../filter/FilterSidebar';
import TrekCard from './TrekCard';
import { TRAILS } from '@/static/trek';
import { TREK_DETAILS } from 'src/static/trekDetails';
import { isHike, trailHref } from '@/lib/trail';

// Maps a trail card to the label used by the "Type" filter group.
const typeLabel = (t: (typeof TRAILS)[number]) =>
  isHike(t) ? 'Day Hike' : 'Trek';

export default function ExploreLayout() {
  const [filtered, setFiltered] = useState(TRAILS);

  const handleFilter = useCallback((f: FilterState) => {
    let result = TRAILS;

    // 0. Type (Trek / Day Hike)
    if (f.types.length > 0) {
      result = result.filter((t) => f.types.includes(typeLabel(t)));
    }

    // 1. Region
    if (f.regions.length > 0) {
      result = result.filter((t) => f.regions.includes(t.region));
    }

    // 2. Difficulty
    if (f.difficulties.length > 0) {
      result = result.filter((t) => f.difficulties.includes(t.difficulty));
    }

    // 3. Duration
    if (f.durations.length > 0) {
      result = result.filter((t) => {
        const daysMatch = t.duration.match(/\d+/);
        const days = daysMatch ? parseInt(daysMatch[0], 10) : 0;

        return f.durations.some((bucket) => {
          if (bucket === '0-3 days') return days >= 0 && days <= 3;
          if (bucket === '3-5 days') return days >= 3 && days <= 5;
          if (bucket === '5-10 days') return days >= 5 && days <= 10;
          if (bucket === '10-15 days') return days >= 10 && days <= 15;
          if (bucket === '15+ days') return days >= 15;
          return false;
        });
      });
    }

    // 4. Budget (price is optional now — hikes omit it; treat absent as 0)
    if (f.minPrice)
      result = result.filter((t) => (t.price ?? 0) >= Number(f.minPrice));
    if (f.maxPrice)
      result = result.filter((t) => (t.price ?? 0) <= Number(f.maxPrice));

    // 5. Elevation
    result = result.filter((t) => {
      const alt = Number(t.altitude.replace(/[^0-9]/g, ''));
      return isNaN(alt) || alt <= f.maxElevation;
    });

    setFiltered(result);
  }, []);

  return (
    <section className="relative min-h-screen w-full pb-2">
      <div className="mx-auto flex w-full max-w-[1920px] gap-8 px-4 pt-8 md:px-[80px] md:pt-[60px] items-start">
        {/* Desktop Sidebar — self-contained, never stretches */}
        <aside className="sticky top-[112px] hidden lg:block flex-shrink-0 self-start">
          <FilterSidebar onFilter={handleFilter} />
        </aside>

        {/* Content Wrapper — holds min height to prevent collapse */}
        <div className="flex flex-1 flex-col min-h-[calc(100vh-200px)]">
          {/* Mobile Filter Trigger */}
          <div className="mb-6 flex justify-end lg:hidden">
            <FilterSidebar mobile onFilter={handleFilter} />
          </div>

          {/* Grid Area */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 items-stretch">
            {filtered.length > 0 ? (
              filtered.map((trek) => {
                // Hikes carry their own card summary; only treks look up the
                // richer summary from the trek detail model.
                const description = isHike(trek)
                  ? trek.description
                  : (TREK_DETAILS[trek.id]?.summary ?? trek.description);

                return (
                  <TrekCard
                    key={trek.id}
                    {...trek}
                    description={description}
                    href={trailHref(trek)}
                    isHike={isHike(trek)}
                  />
                );
              })
            ) : (
              <div className="col-span-full py-32 text-center text-lg font-medium text-text-secondary">
                No trails found matching your filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
