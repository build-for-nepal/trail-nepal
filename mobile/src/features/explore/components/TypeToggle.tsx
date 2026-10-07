import { Text } from 'react-native';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';

import type { TripType } from '../types';

const TYPES: readonly { value: TripType; label: string }[] = [
  { value: 'trek', label: 'Treks' },
  { value: 'hike', label: 'Day hikes' },
  { value: 'cultural', label: 'Cultural tours' },
];

const TYPE_VALUES: readonly string[] = TYPES.map((o) => o.value);

function isTripType(value: string): value is TripType {
  return TYPE_VALUES.includes(value);
}

type TypeToggleProps = {
  value: TripType;
  onValueChange: (value: TripType) => void;
};

export function TypeToggle({ value, onValueChange }: TypeToggleProps) {
  return (
    <ToggleGroup
      type="single"
      value={value}
      // Tapping the selected option clears it in the primitive; one type always stays selected.
      onValueChange={(next) => {
        if (next && isTripType(next)) onValueChange(next);
      }}
      className="h-[36px] flex-row rounded-[8px] bg-field"
    >
      {TYPES.map((option) => {
        const selected = option.value === value;

        return (
          <ToggleGroupItem
            key={option.value}
            value={option.value}
            className={cn('flex-1 rounded-[8px]', selected && 'bg-surface')}
          >
            <Text
              numberOfLines={1}
              className={cn(
                'text-[13px] font-semibold',
                selected ? 'text-ink' : 'text-muted',
              )}
            >
              {option.label}
            </Text>
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
}
