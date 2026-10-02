import { useState } from 'react';
import { Text } from 'react-native';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';

const TYPES = [
  { value: 'trek', label: 'Treks' },
  { value: 'day-hike', label: 'Day hikes' },
  { value: 'cultural-tour', label: 'Cultural tours' },
] as const;

export function TypeToggle() {
  const [type, setType] = useState<string>('trek');

  return (
    <ToggleGroup
      type="single"
      value={type}
      // Tapping the selected option clears it in the primitive; one type always stays selected.
      onValueChange={(next) => {
        if (next) setType(next);
      }}
      className="h-[36px] flex-row rounded-[8px] bg-field"
    >
      {TYPES.map(({ value, label }) => {
        const selected = value === type;

        return (
          <ToggleGroupItem
            key={value}
            value={value}
            className={cn('flex-1 rounded-[8px]', selected && 'bg-surface')}
          >
            <Text
              numberOfLines={1}
              className={cn(
                'text-[13px] font-semibold',
                selected ? 'text-ink' : 'text-muted',
              )}
            >
              {label}
            </Text>
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
}
