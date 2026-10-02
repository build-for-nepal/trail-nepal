import { ChevronDown, SlidersHorizontal, X } from 'lucide-react-native';
import { Pressable, ScrollView, Text } from 'react-native';

import { filterBarColor } from '@/constants/colors';

import { appliedFilterLabel, QUICK_FILTERS } from '../filters';
import type { AppliedFilter, FilterSectionId } from '../types';

type FilterBarProps = {
  applied: readonly AppliedFilter[];
  /** null opens every section; a quick chip passes its own section. */
  onOpen: (section: FilterSectionId | null) => void;
  onRemove: (filter: AppliedFilter) => void;
};

export function FilterBar({ applied, onOpen, onRemove }: FilterBarProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      // Horizontal ScrollViews default to flexGrow: 1 and would stretch to fill the parent.
      className="grow-0"
      contentContainerClassName="gap-[8px] px-[18px]"
    >
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Filters"
        onPress={() => onOpen(null)}
        className="h-[36px] w-[36px] items-center justify-center rounded-[8px] border border-border bg-surface"
      >
        <SlidersHorizontal size={16} color={filterBarColor.icon} />
      </Pressable>

      {applied.map((filter) => {
        const label = appliedFilterLabel(filter);
        return (
          <Pressable
            key={`${filter.section}:${filter.value}`}
            accessibilityRole="button"
            accessibilityLabel={`Remove ${label}`}
            onPress={() => onRemove(filter)}
            className="h-[36px] flex-row items-center gap-[6px] rounded-[8px] border border-primary bg-surface pl-[12px] pr-[9px]"
          >
            <Text className="text-[13px] font-semibold text-primary">
              {label}
            </Text>
            <X size={14} color={filterBarColor.selected} />
          </Pressable>
        );
      })}

      {QUICK_FILTERS.map(({ section, label }) => (
        <Pressable
          key={section}
          accessibilityRole="button"
          onPress={() => onOpen(section)}
          className="h-[36px] flex-row items-center gap-[6px] rounded-[8px] border border-border bg-surface pl-[12px] pr-[9px]"
        >
          <Text className="text-[13px] font-semibold text-ink">{label}</Text>
          <ChevronDown size={14} color={filterBarColor.icon} />
        </Pressable>
      ))}
    </ScrollView>
  );
}
