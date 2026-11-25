'use client';

import { useMemo, useState } from 'react';
import { FilterState } from '@/types/explorepage';
import FilterSidebar from '../filter/FilterSidebar';
import TrekCard from './TrekCard';
import { applyFilters } from '@/features/explore/applyFilters';
import { useExploreTrails } from '@/features/explore/useExploreTrails';
import { isCultural, isHike, isNature, trailHref } from '@/lib/trail';

export default function ExploreLayout() {
  const trails = useExploreTrails();

  // The active filters, as last reported by a sidebar. The visible list is
  // derived from them, so it stays correct when the card data itself updates.
  const [filters, setFilters] = useState<FilterState | null>(null);

  const filtered = useMemo(
    () => (filters ? applyFilters(trails, filters) : trails),
    [trails, filters],
  );

  return (
    <section className="relative min-h-screen w-full pb-2">
      <div className="mx-auto flex w-full max-w-[1920px] gap-8 px-4 pt-8 md:px-[80px] md:pt-[60px] items-start">
        {/* Desktop Sidebar — self-contained, never stretches */}
        <aside className="sticky top-[112px] hidden lg:block flex-shrink-0 self-start">
          <FilterSidebar onFilter={setFilters} />
        </aside>

        {/* Content Wrapper — holds min height to prevent collapse */}
        <div className="flex flex-1 flex-col min-h-[calc(100vh-200px)]">
          {/* Mobile Filter Trigger */}
          <div className="mb-6 flex justify-end lg:hidden">
            <FilterSidebar mobile onFilter={setFilters} />
          </div>

          {/* Grid Area */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 items-stretch">
            {filtered.length > 0 ? (
              filtered.map((trek) => (
                <TrekCard
                  key={trek.id}
                  {...trek}
                  href={trailHref(trek)}
                  isHike={isHike(trek)}
                  isCultural={isCultural(trek)}
                  isNature={isNature(trek)}
                />
              ))
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
