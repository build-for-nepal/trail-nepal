import { isCultural, isHike, isNature } from '@/lib/trail';
import type { FilterState } from '@/types/explorepage';
import type { Trek } from '@/types/trek';

// Maps a trail card to the label used by the "Type" filter group.
const typeLabel = (t: Trek) => {
  if (isHike(t)) return 'Day Hike';
  if (isCultural(t)) return 'Cultural Tour';
  if (isNature(t)) return 'Nature & Wildlife';
  return 'Trek';
};

// The Explore filters as a pure function of the card list, so the result can
// be derived again whenever the list itself changes.
export function applyFilters(trails: Trek[], f: FilterState): Trek[] {
  let result = trails;

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

  return result;
}
