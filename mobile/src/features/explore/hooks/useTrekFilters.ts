import { useCallback, useRef, useState } from 'react';

import type { BottomSheetModal } from '@/components/ui/bottom-sheet';

import { clearSection, EMPTY_FILTERS, removeAppliedFilter } from '../filters';
import type { AppliedFilter, FilterSectionId, TrekFilters } from '../types';

/**
 * Applied filters plus the sheet's working draft. The sheet edits the draft; Show commits
 * it, and dismissing by X, backdrop, or drag throws it away.
 */
export function useTrekFilters() {
  const sheetRef = useRef<BottomSheetModal>(null);
  const [applied, setApplied] = useState<TrekFilters>(EMPTY_FILTERS);
  const [draft, setDraft] = useState<TrekFilters>(EMPTY_FILTERS);
  // null shows every section; a quick chip scopes the sheet to its own section.
  const [section, setSection] = useState<FilterSectionId | null>(null);

  const open = useCallback(
    (next: FilterSectionId | null = null) => {
      setSection(next);
      setDraft(applied);
      sheetRef.current?.present();
    },
    [applied],
  );

  const close = useCallback(() => {
    sheetRef.current?.dismiss();
  }, []);

  const apply = useCallback(() => {
    setApplied(draft);
    sheetRef.current?.dismiss();
  }, [draft]);

  const clear = useCallback(() => {
    setDraft((d) => clearSection(d, section));
  }, [section]);

  const remove = useCallback((filter: AppliedFilter) => {
    setApplied((a) => removeAppliedFilter(a, filter));
  }, []);

  return {
    sheetRef,
    applied,
    draft,
    setDraft,
    section,
    open,
    close,
    apply,
    clear,
    remove,
  };
}

export type TrekFiltersController = ReturnType<typeof useTrekFilters>;
