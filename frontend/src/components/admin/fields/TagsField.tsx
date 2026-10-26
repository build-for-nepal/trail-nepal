'use client';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { ACCENT_ACTIVE } from '../admin-helper';
import { AnimatedFormMessage } from './FormFields';

type Props = {
  name: string;
  label: string;
  description?: string;
  suggestions?: string[];
  className?: string;
};

// Chip-only picker: click a suggestion to add it, click an active chip to
// remove it. Free-text tagging arrives with later integration.
export function TagsField({
  name,
  label,
  description,
  suggestions,
  className,
}: Props) {
  const render = ({
    field,
  }: {
    field: {
      value: string[];
      onChange: (value: string[]) => void;
    };
  }) => {
    const values = (field.value ?? []).map((v) => v.toLowerCase());

    const toggle = (raw: string) => {
      const tag = raw.trim().toLowerCase();
      if (!tag) return;
      field.onChange(
        values.includes(tag)
          ? values.filter((v) => v !== tag)
          : [...values, tag],
      );
    };

    return (
      <FormItem className={className}>
        <FormLabel>{label}</FormLabel>
        {description && <FormDescription>{description}</FormDescription>}
        {suggestions && suggestions.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {suggestions.map((s) => {
              const active = values.includes(s);
              return (
                <Badge
                  key={s}
                  variant={active ? 'default' : 'outline'}
                  className={cn(
                    'cursor-pointer normal-case',
                    active && ACCENT_ACTIVE,
                  )}
                  onClick={() => toggle(s)}
                >
                  {s}
                </Badge>
              );
            })}
          </div>
        )}
        <AnimatedFormMessage />
      </FormItem>
    );
  };

  return <FormField name={name} render={render} />;
}
