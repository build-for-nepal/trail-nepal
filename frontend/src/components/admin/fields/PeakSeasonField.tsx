'use client';

import { cn } from '@/lib/utils';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';

import { ACCENT_ACTIVE, MONTH_LABELS } from '../admin-helper';
import { AnimatedFormMessage } from './FormFields';

type Props = {
  name: string;
  label?: string;
  description?: string;
  className?: string;
};

export function PeakSeasonField({
  name,
  label = 'Peak season',
  description,
  className,
}: Props) {
  return (
    <FormField
      name={name}
      render={({ field }) => {
        const months: number[] = field.value ?? [];
        const set = (month: number, checked: boolean) => {
          field.onChange(
            checked ? [...months, month] : months.filter((m) => m !== month),
          );
        };
        return (
          <FormItem className={className}>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <div className="flex flex-wrap gap-1.5">
                {MONTH_LABELS.map((monthLabel, index) => {
                  const month = index + 1;
                  const active = months.includes(month);
                  return (
                    <button
                      key={monthLabel}
                      type="button"
                      aria-pressed={active}
                      onClick={() => set(month, !active)}
                      className={cn(
                        'h-8 cursor-pointer rounded-md border px-2.5 text-sm transition-colors',
                        active
                          ? ACCENT_ACTIVE
                          : 'border-input bg-transparent hover:bg-accent',
                      )}
                    >
                      {monthLabel}
                    </button>
                  );
                })}
              </div>
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <AnimatedFormMessage />
          </FormItem>
        );
      }}
    />
  );
}
