'use client';

import * as React from 'react';
import { ChevronDown, Plus, Trash2 } from 'lucide-react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import type { AdminDetailRow } from '../admin-helper';
import type { AdminFormValues } from '../admin-helper';

import { TextField, TextareaField } from '../fields/FormFields';
import { DataField } from '../fields/DataField';
import { AdminSection } from '../AdminSection';

import { ACCENT_OUTLINE } from '../admin-helper';

const emptyRow = (): AdminDetailRow => ({
  key: '',
  title: '',
  description: '',
  imageUrl: '',
  content: '',
  data: undefined,
});

export function DetailsSection() {
  const { control } = useFormContext<AdminFormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'details',
  });
  // Sections start collapsed so a long details list stays compact.
  const [collapsed, setCollapsed] = React.useState<Record<number, boolean>>({});

  const toggle = (index: number) =>
    setCollapsed((prev) => ({ ...prev, [index]: !(prev[index] ?? true) }));

  // Collapse every existing section and open the one that was just added.
  const addSection = () => {
    const nextIndex = fields.length;
    append(emptyRow());
    setCollapsed({ [nextIndex]: false });
  };

  // Keep the open/closed state aligned when a section is removed.
  const removeSection = (index: number) => {
    remove(index);
    setCollapsed((prev) => {
      const next: Record<number, boolean> = {};
      for (const [key, value] of Object.entries(prev)) {
        const i = Number(key);
        if (i < index) next[i] = value;
        else if (i > index) next[i - 1] = value;
      }
      return next;
    });
  };

  return (
    <AdminSection
      title="Details"
      description="Overview, highlights, expectations and other keyed sections."
      action={
        <Button
          type="button"
          variant="outline"
          size="sm"
          className={ACCENT_OUTLINE}
          onClick={addSection}
        >
          <Plus className="size-4" /> Add
        </Button>
      }
    >
      <div className="space-y-4">
        {fields.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No detail sections yet. Click <strong>Add</strong> to create one.
          </p>
        )}
        {fields.map((field, index) => {
          const isCollapsed = collapsed[index] ?? true;
          return (
            <div
              key={field.id}
              className="relative rounded-lg border border-dashed"
            >
              <div className="flex items-center justify-between gap-1 pr-2">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={!isCollapsed}
                  className="flex min-w-0 flex-1 cursor-pointer items-center gap-2 rounded-lg p-3 text-left transition-colors hover:bg-muted/50"
                >
                  <ChevronDown
                    className={cn(
                      'size-4 shrink-0 text-muted-foreground transition-transform',
                      isCollapsed && '-rotate-90',
                    )}
                    aria-hidden
                  />
                  <span className="text-xs font-medium text-muted-foreground">
                    Section {index + 1}
                  </span>
                  {isCollapsed && field.title && (
                    <span className="truncate text-sm">{field.title}</span>
                  )}
                </button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeSection(index)}
                  aria-label={`Remove section ${index + 1}`}
                >
                  <Trash2 className="size-4 text-destructive" />
                </Button>
              </div>

              {!isCollapsed && (
                <div className="grid items-start gap-4 border-t border-dashed p-3 sm:grid-cols-2">
                  <TextField<AdminFormValues>
                    name={`details.${index}.key`}
                    label="Key"
                    placeholder="overview, trip-facts, expectations…"
                  />
                  <TextField<AdminFormValues>
                    name={`details.${index}.title`}
                    label="Title"
                    placeholder="Overview"
                  />
                  <TextField<AdminFormValues>
                    name={`details.${index}.imageUrl`}
                    label="Image URL"
                    placeholder="https://cdn/overview.jpg"
                    className="sm:col-span-2"
                  />
                  <div className="sm:col-span-2">
                    <TextareaField<AdminFormValues>
                      name={`details.${index}.description`}
                      label="Description"
                      placeholder="Short summary shown as the card body"
                      rows={2}
                    />
                  </div>
                  <TextareaField<AdminFormValues>
                    name={`details.${index}.content`}
                    label="Content"
                    placeholder="Long HTML / markdown body"
                    rows={4}
                    className="sm:col-span-2"
                  />
                  <DataField
                    name={`details.${index}.data`}
                    label="Data"
                    description="Optional structured facts, e.g. duration, distance, elevation."
                    className="sm:col-span-2"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Separator className="my-4" />
    </AdminSection>
  );
}
