"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { FilterState } from "@/types/explorepage";
import { useFilters } from "@/hooks/useFilters";
import { FilterPanel } from "./FilterPanel";

export default function FilterSidebar({
  mobile,
  onFilter,
  headerHeight = 88,
}: {
  mobile?: boolean;
  onFilter: (s: FilterState) => void;
  headerHeight?: number;
}) {
  const { filters, toggleArrayItem, setRange, resetFilters } =
    useFilters(onFilter);

  const panelProps = {
    filters,
    onToggle: toggleArrayItem,
    onRangeChange: setRange,
    onReset: resetFilters,
    mobile,
    headerHeight,
  };

  const Content = () => <FilterPanel {...panelProps} />;

  if (mobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm font-medium">
            <SlidersHorizontal size={16} /> Filters
          </button>
        </SheetTrigger>
        {/* Changed: Removed h-fit, added h-full, and updated width/rounded logic */}
        <SheetContent
          side="left"
          className="w-[85vw] max-w-[320px] p-0 h-full border-none"
        >
          <VisuallyHidden>
            <DialogTitle>Filters</DialogTitle>
            <DialogDescription>
              Filter products by category, price, and other attributes.
            </DialogDescription>
          </VisuallyHidden>
          <Content />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className="sticky z-10 w-72 self-start flex-shrink-0 overflow-visible"
      style={{ top: `calc(${headerHeight}px + 24px)` }}
    >
      <Content />
    </div>
  );
}
