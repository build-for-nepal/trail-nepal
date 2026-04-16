"use client";

import { useState, useCallback, useEffect } from "react";
import { DEFAULT_FILTER_STATE, FilterState } from "@/types/explorepage";

export function useFilters(onFilter: (state: FilterState) => void) {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTER_STATE);

  // Trigger the parent filter callback whenever local filter state changes
  useEffect(() => {
    onFilter(filters);
  }, [filters, onFilter]);

  const toggleArrayItem = useCallback(
    (key: "regions" | "durations" | "difficulties", value: string) => {
      setFilters((prev) => {
        // If "All" is selected, clear the array
        if (value === "All") return { ...prev, [key]: [] };

        const current = prev[key];
        const updated =
          current.includes(value) ?
            current.filter((v) => v !== value)
          : [...current, value];

        return { ...prev, [key]: updated };
      });
    },
    [],
  );

  const setRange = useCallback(
    (
      field: "minPrice" | "maxPrice" | "maxElevation",
      value: string | number,
    ) => {
      setFilters((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const resetFilters = useCallback(() => setFilters(DEFAULT_FILTER_STATE), []);

  return { filters, toggleArrayItem, setRange, resetFilters };
}
