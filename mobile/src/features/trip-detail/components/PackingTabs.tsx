import { Text } from 'react-native';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';

import { PACKING_TABS } from '../packing';
import type { PackingTab } from '../packing';

function isPackingTab(value: string): value is PackingTab {
  return PACKING_TABS.some((tab) => tab.value === value);
}

type PackingTabsProps = {
  value: PackingTab;
  onValueChange: (value: PackingTab) => void;
};

/** The Explore type toggle's look. min-h rather than h, so large text still fits. */
export function PackingTabs({ value, onValueChange }: PackingTabsProps) {
  return (
    <ToggleGroup
      type="single"
      value={value}
      // Tapping the selected tab clears it in the primitive; one tab always stays selected.
      onValueChange={(next) => {
        if (next && isPackingTab(next)) onValueChange(next);
      }}
      className="min-h-[36px] flex-row rounded-[8px] bg-field"
    >
      {PACKING_TABS.map((tab) => {
        const selected = tab.value === value;

        return (
          <ToggleGroupItem
            key={tab.value}
            value={tab.value}
            className={cn(
              'flex-1 rounded-[8px] px-[8px] py-[8px]',
              selected && 'bg-surface',
            )}
          >
            <Text
              className={cn(
                'text-center font-poppins-semibold text-[13px] leading-[18px]',
                selected ? 'text-ink' : 'text-muted',
              )}
            >
              {tab.label}
            </Text>
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
}
