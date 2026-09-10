import { useMemo } from 'react';
import type { Trek } from '@/types/trek';
import { TRAILS } from '@/static/trek';

// Searches the combined trail set (treks + hikes). Each result carries its
// `type`, so callers can route via trailHref().
export function useTrekSearch(query: string): Trek[] {
  return useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return [];
    const lower = trimmed.toLowerCase();
    return TRAILS.filter(
      (trail) =>
        trail.title.toLowerCase().includes(lower) ||
        trail.keywords.some((keyword) => keyword.includes(lower)),
    ).slice(0, 5);
  }, [query]);
}
