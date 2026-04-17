"use client";

import { useState, useCallback } from "react";
import { FilterState } from "@/types/explorepage";
import FilterSidebar from "../filter/FilterSidebar";
import TrekCard from "./TrekCard";
import { TREKS } from "@/static/explorepageData";

export default function ExploreLayout() {
  const [filtered, setFiltered] = useState(TREKS);

  const handleFilter = useCallback((f: FilterState) => {
    let result = TREKS;

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
          if (bucket === "0-3 days") return days >= 0 && days <= 3;
          if (bucket === "3-5 days") return days >= 3 && days <= 5;
          if (bucket === "5-10 days") return days >= 5 && days <= 10;
          if (bucket === "10-15 days") return days >= 10 && days <= 15;
          if (bucket === "15+ days") return days >= 15;
          return false;
        });
      });
    }

    // 4. Budget
    if (f.minPrice)
      result = result.filter((t) => t.price >= Number(f.minPrice));
    if (f.maxPrice)
      result = result.filter((t) => t.price <= Number(f.maxPrice));

    // 5. Elevation
    result = result.filter((t) => {
      const alt = Number(t.altitude.replace(/[^0-9]/g, ""));
      return isNaN(alt) || alt <= f.maxElevation;
    });

    setFiltered(result);
  }, []);

  return (
    <section className="relative min-h-screen w-full pb-[80px]">
      <div className="mx-auto flex w-full max-w-[1920px] gap-8 px-4 pt-8 md:px-[80px] md:pt-[60px] items-start">
        {/* Desktop Sidebar — self-contained, never stretches */}
        <aside className="hidden lg:block flex-shrink-0">
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
            {filtered.length > 0 ?
              filtered.map((trek) => <TrekCard key={trek.id} {...trek} />)
            : <div className="col-span-full py-32 text-center text-lg font-medium text-text-secondary">
                No treks found matching your filters.
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
}
