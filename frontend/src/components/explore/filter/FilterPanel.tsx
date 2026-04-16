import { useState, useEffect } from "react";
import { Mountain } from "lucide-react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { FILTER_OPTIONS } from "@/static/explorepageData";
import { FilterPanelProps } from "@/types/explorepage";
import { FilterGroup } from "./FilterGroup";

const ELEVATION_MAX = 4848;

export const FilterPanel = ({
  filters,
  onToggle,
  onRangeChange,
  onReset,
}: FilterPanelProps) => {
  // --- Local State for Budget Inputs to prevent lag while typing ---
  const [localMin, setLocalMin] = useState(filters.minPrice);
  const [localMax, setLocalMax] = useState(filters.maxPrice);

  // Sync local inputs if parent resets the filters
  useEffect(() => {
    setLocalMin(filters.minPrice);
    setLocalMax(filters.maxPrice);
  }, [filters.minPrice, filters.maxPrice]);

  // Wait 500ms after the user stops typing to apply Min price
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (localMin !== filters.minPrice) {
        onRangeChange("minPrice", localMin);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [localMin, filters.minPrice, onRangeChange]);

  // Wait 500ms after the user stops typing to apply Max price
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (localMax !== filters.maxPrice) {
        onRangeChange("maxPrice", localMax);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [localMax, filters.maxPrice, onRangeChange]);

  return (
    <div className="flex flex-col gap-6 p-0 pb-10">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Filters</h2>
        <button
          onClick={onReset}
          className="text-xs text-gray-500 hover:text-black transition-colors px-2 py-1"
        >
          Reset
        </button>
      </div>

      <FilterGroup
        title="Region"
        options={FILTER_OPTIONS.regions}
        selected={filters.regions}
        onToggle={(v) => onToggle("regions", v)}
      />
      <FilterGroup
        title="Duration"
        options={FILTER_OPTIONS.durations}
        selected={filters.durations}
        onToggle={(v) => onToggle("durations", v)}
      />
      <FilterGroup
        title="Difficulty"
        options={FILTER_OPTIONS.difficulties}
        selected={filters.difficulties}
        onToggle={(v) => onToggle("difficulties", v)}
      />

      {/* Budget */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[14px] font-bold text-gray-800">Budget Range</h3>
        <div className="flex items-center gap-3">
          <input
            type="number"
            value={localMin}
            onChange={(e) => setLocalMin(e.target.value)}
            placeholder="Min"
            className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#376BB6]"
          />
          <span className="text-gray-400 font-medium">-</span>
          <input
            type="number"
            value={localMax}
            onChange={(e) => setLocalMax(e.target.value)}
            placeholder="Max"
            className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#376BB6]"
          />
        </div>
      </div>

      {/* Custom Elevation Slider (Using Shadcn/Radix Primitives) */}
      <div className="flex flex-col gap-5 pt-3 mt-2 border-t border-gray-100">
        <h3 className="text-[15px] font-bold text-gray-800">Elevation</h3>

        <div className="relative w-full mb-8 pt-2">
          <SliderPrimitive.Root
            className="relative flex w-full touch-none select-none items-center cursor-pointer"
            min={0}
            max={ELEVATION_MAX}
            step={1}
            value={[filters.maxElevation]}
            onValueChange={(val) => onRangeChange("maxElevation", val[0])}
          >
            {/* Track Background */}
            <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-gray-200">
              {/* Active Track Fill */}
              <SliderPrimitive.Range className="absolute h-full bg-[#376BB6]" />
            </SliderPrimitive.Track>

            {/* Custom Mountain Thumb */}
            <SliderPrimitive.Thumb className="flex size-8 items-center justify-center rounded-full bg-[#ECF1F9] shadow-sm hover:shadow-md focus:outline-none">
              <Mountain className="size-[18px] text-[#376BB6] fill-[#376BB6]" />
            </SliderPrimitive.Thumb>
          </SliderPrimitive.Root>

          {/* Static Labels Row (Min, Selected Value rigidly in Middle, Max) */}
          <div className="absolute top-10 w-full flex justify-between items-center px-1">
            <span className="text-[13px] text-[#292D32]/80">0m</span>
            <span className="text-[14px] font-medium text-[#376BB6]">
              {filters.maxElevation.toLocaleString()}m
            </span>
            <span className="text-[13px] text-[#292D32]/80">
              {ELEVATION_MAX.toLocaleString()}m
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
