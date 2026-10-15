'use client';

import * as React from 'react';
import { Plus, Trash2, ChevronDown } from 'lucide-react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import type { AdminTimelineItem } from '../admin-helper';
import type { AdminFormValues } from '../admin-helper';

import { TextField, TextareaField, JsonField } from '../fields/FormFields';
import { AdminSection } from '../AdminSection';

import { ACCENT_OUTLINE } from '../admin-helper';

const emptyItem = (): AdminTimelineItem => ({
  order: '',
  dayNumber: '',
  title: '',
  data: '',
});

export function TimelineSection() {
  const { control } = useFormContext<AdminFormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'timeline.items',
  });
  const [collapsed, setCollapsed] = React.useState<Record<number, boolean>>({});

  const toggle = (index: number) =>
    setCollapsed((prev) => ({ ...prev, [index]: !prev[index] }));

  return (
    <AdminSection
      title="Timeline"
      description="Day-by-day itinerary shown on the detail page."
      action={
        <Button
          type="button"
          variant="outline"
          size="sm"
          className={ACCENT_OUTLINE}
          onClick={() => append(emptyItem())}
        >
          <Plus className="size-4" /> Add day
        </Button>
      }
    >
      <div className="space-y-4">
        <TextareaField<AdminFormValues>
          name="timeline.description"
          label="Timeline description"
          placeholder="How the trip unfolds"
          rows={2}
        />

        <Separator />

        {fields.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No itinerary days yet. Click <strong>Add day</strong> to create one.
          </p>
        )}
        {fields.map((field, index) => {
          const isCollapsed = collapsed[index] ?? false;
          return (
            <div key={field.id} className="rounded-lg border border-dashed">
              <div className="flex items-center justify-between gap-2 p-3">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={!isCollapsed}
                  className="flex min-w-0 cursor-pointer items-center gap-2 text-left"
                >
                  <ChevronDown
                    className={cn(
                      'size-4 shrink-0 text-muted-foreground transition-transform',
                      isCollapsed && '-rotate-90',
                    )}
                    aria-hidden
                  />
                  <span className="text-xs font-medium text-muted-foreground">
                    Day {index + 1}
                  </span>
                  {isCollapsed && field.title && (
                    <span className="truncate text-sm">{field.title}</span>
                  )}
                </button>
                {fields.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => remove(index)}
                    aria-label={`Remove day ${index + 1}`}
                  >
                    <Trash2 className="size-4 text-destructive" />
                  </Button>
                )}
              </div>
              {!isCollapsed && (
                <div className="grid items-start gap-4 border-t border-dashed p-3 sm:grid-cols-3">
                  <TextField<AdminFormValues>
                    name={`timeline.items.${index}.title`}
                    label="Title"
                    placeholder="Drive to Nayapul"
                    className="sm:col-span-3"
                  />
                  <TextField<AdminFormValues>
                    name={`timeline.items.${index}.order`}
                    label="Order"
                    placeholder="1"
                  />
                  <TextField<AdminFormValues>
                    name={`timeline.items.${index}.dayNumber`}
                    label="Day number"
                    placeholder="1"
                  />
                  <JsonField<AdminFormValues>
                    name={`timeline.items.${index}.data`}
                    label="Data (JSON)"
                    description="Optional — day-specific facts or lat/lng."
                    placeholder='{ "altitude": 1070, "lat": 28.21, "lng": 83.71 }'
                    rows={2}
                    className="sm:col-span-3"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </AdminSection>
  );
}
