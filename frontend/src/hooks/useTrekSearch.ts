import { useMemo } from 'react';
import type { Trek } from '@/types/trek';
import { TREKS } from '@/static/trek';

export function useTrekSearch(query: string): Trek[] {
  return useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return [];
    const lower = trimmed.toLowerCase();
    return TREKS.filter(
      (trek) =>
        trek.title.toLowerCase().includes(lower) ||
        trek.keywords.some((keyword) => keyword.includes(lower)),
    ).slice(0, 5);
  }, [query]);
}
