'use client';

import { Plus, Trash2, GripVertical } from 'lucide-react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import type { AdminDetailRow } from '../admin-helper';
import type { AdminFormValues } from '../admin-helper';

import { TextField, TextareaField, JsonField } from '../fields/FormFields';
import { AdminSection } from '../AdminSection';

import { ACCENT_OUTLINE } from '../admin-helper';

const emptyRow = (): AdminDetailRow => ({
  key: '',
  title: '',
  description: '',
  imageUrl: '',
  content: '',
  data: '',
});

export function DetailsSection() {
  const { control } = useFormContext<AdminFormValues>();
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: 'details',
  });

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
          onClick={() => append(emptyRow())}
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
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="relative rounded-lg border border-dashed p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GripVertical className="size-4 cursor-grab text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground">
                  Section {index + 1}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => index > 0 && move(index, index - 1)}
                  disabled={index === 0}
                >
                  Up
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    index < fields.length - 1 && move(index, index + 1)
                  }
                  disabled={index === fields.length - 1}
                >
                  Down
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => remove(index)}
                  aria-label={`Remove section ${index + 1}`}
                >
                  <Trash2 className="size-4 text-destructive" />
                </Button>
              </div>
            </div>

            <div className="grid items-start gap-4 sm:grid-cols-2">
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
              <JsonField<AdminFormValues>
                name={`details.${index}.data`}
                label="Data (JSON)"
                description="Optional structured facts, e.g. duration, distance, elevation."
                placeholder='{ "duration": "3-4 hrs", "distance": "4 km", "elevation": 1080 }'
                rows={2}
                className="sm:col-span-2"
              />
            </div>
          </div>
        ))}
      </div>
      <Separator className="my-4" />
    </AdminSection>
  );
}
