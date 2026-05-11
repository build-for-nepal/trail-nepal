'use client';

import { useState, useCallback, useEffect } from 'react';
import { DEFAULT_FILTER_STATE, FilterState } from '@/types/explorepage';
import { FILTER_OPTIONS } from '@/static/explorepageData';

export function useFilters(onFilter: (state: FilterState) => void) {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTER_STATE);

  // Trigger the parent filter callback whenever local filter state changes
  useEffect(() => {
    onFilter(filters);
  }, [filters, onFilter]);

  const getOptionsForKey = (key: 'regions' | 'durations' | 'difficulties') => {
    return FILTER_OPTIONS[key];
  };

  const toggleArrayItem = useCallback(
    (key: 'regions' | 'durations' | 'difficulties', value: string) => {
      setFilters((prev) => {
        const options = getOptionsForKey(key);
        const specificOptions = options.slice(1); // Exclude 'All'

        // If "All" is selected, clear the array
        if (value === 'All') {
          return { ...prev, [key]: [] };
        }

        const current = prev[key];
        const updated = current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value];

        return { ...prev, [key]: updated };
      });
    },
    [],
  );

  const setRange = useCallback(
    (
      field: 'minPrice' | 'maxPrice' | 'maxElevation',
      value: string | number,
    ) => {
      setFilters((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const resetFilters = useCallback(() => setFilters(DEFAULT_FILTER_STATE), []);

  const selectOnly = useCallback(
    (key: 'regions' | 'durations' | 'difficulties', value: string) => {
      setFilters((prev) => ({ ...prev, [key]: [value] }));
    },
    [],
  );

  return { filters, toggleArrayItem, setRange, resetFilters, selectOnly };
}
