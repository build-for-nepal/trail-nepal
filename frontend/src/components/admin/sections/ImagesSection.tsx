'use client';

import { Plus, Trash2 } from 'lucide-react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { Button } from '@/components/ui/button';

import type { AdminImageRow, ImageTypeValue } from '../admin-helper';
import type { AdminFormValues } from '../admin-helper';

import { TextField, SelectField, JsonField } from '../fields/FormFields';
import { AdminSection } from '../AdminSection';

import { IMAGE_TYPE_LABELS, ACCENT_OUTLINE } from '../admin-helper';

const IMAGE_TYPE_OPTIONS = (
  Object.keys(IMAGE_TYPE_LABELS) as ImageTypeValue[]
).map((value) => ({ value, label: IMAGE_TYPE_LABELS[value] }));

const emptyImage = (): AdminImageRow => ({
  url: '',
  storageKey: '',
  alt: '',
  type: 'GALLERY',
  metadata: '',
});

export function ImagesSection() {
  const { control } = useFormContext<AdminFormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'images',
  });

  return (
    <AdminSection
      title="Images"
      description="Hero / gallery / section images with optional metadata."
      action={
        <Button
          type="button"
          variant="outline"
          size="sm"
          className={ACCENT_OUTLINE}
          onClick={() => append(emptyImage())}
        >
          <Plus className="size-4" /> Add image
        </Button>
      }
    >
      <div className="space-y-4">
        {fields.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No images yet. Click <strong>Add image</strong> to upload one.
          </p>
        )}
        {fields.map((field, index) => (
          <div key={field.id} className="rounded-lg border border-dashed p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                Image {index + 1}
              </span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => remove(index)}
                aria-label={`Remove image ${index + 1}`}
              >
                <Trash2 className="size-4 text-destructive" />
              </Button>
            </div>
            <div className="grid items-start gap-4 sm:grid-cols-2">
              <TextField<AdminFormValues>
                name={`images.${index}.url`}
                label="URL"
                placeholder="https://cdn/hero.jpg"
              />
              <TextField<AdminFormValues>
                name={`images.${index}.storageKey`}
                label="Storage key"
                placeholder="exp/abc-2.jpg"
              />
              <SelectField<AdminFormValues>
                name={`images.${index}.type`}
                label="Type"
                options={IMAGE_TYPE_OPTIONS}
              />
              <TextField<AdminFormValues>
                name={`images.${index}.alt`}
                label="Alt text"
                placeholder="ABC at sunrise"
              />
              <JsonField<AdminFormValues>
                name={`images.${index}.metadata`}
                label="Metadata (JSON)"
                placeholder='{ "width": 1600 }'
                rows={2}
                className="sm:col-span-2"
              />
            </div>
          </div>
        ))}
      </div>
    </AdminSection>
  );
}
