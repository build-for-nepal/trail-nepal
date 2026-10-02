import { Text } from 'react-native';

import { ToggleGroupItem } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';

type FilterOptionProps = {
  value: string;
  label: string;
  selected: boolean;
};

// All white with ink text; selected only recolours the border and text, per the mockup.
export function FilterOption({ value, label, selected }: FilterOptionProps) {
  return (
    <ToggleGroupItem
      value={value}
      aria-label={label}
      className={cn(
        'h-[36px] rounded-[8px] border bg-surface px-[14px]',
        selected ? 'border-primary' : 'border-border',
      )}
    >
      <Text
        numberOfLines={1}
        className={cn(
          'text-[13px] font-semibold',
          selected ? 'text-primary' : 'text-ink',
        )}
      >
        {label}
      </Text>
    </ToggleGroupItem>
  );
}
