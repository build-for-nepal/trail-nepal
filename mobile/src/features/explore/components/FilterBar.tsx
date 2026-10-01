import { ChevronDown, SlidersHorizontal } from 'lucide-react-native';
import { Pressable, ScrollView, Text } from 'react-native';

import { filterBarColor } from '@/constants/colors';

const QUICK_FILTERS = [
  'Difficulty',
  'Duration',
  'Region',
  'Elevation',
] as const;

export function FilterBar() {
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
        className="h-[36px] w-[36px] items-center justify-center rounded-[8px] border border-border bg-surface"
      >
        <SlidersHorizontal size={16} color={filterBarColor.icon} />
      </Pressable>

      {QUICK_FILTERS.map((label) => (
        <Pressable
          key={label}
          accessibilityRole="button"
          className="h-[36px] flex-row items-center gap-[6px] rounded-[8px] border border-border bg-surface pl-[12px] pr-[9px]"
        >
          <Text className="text-[13px] font-semibold text-ink">{label}</Text>
          <ChevronDown size={14} color={filterBarColor.icon} />
        </Pressable>
      ))}
    </ScrollView>
  );
}
