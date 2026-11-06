'use client';

import * as React from 'react';
import { Plus, Trash2 } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';

import { ACCENT_OUTLINE, FIELD_FOCUS } from '../admin-helper';
import { AnimatedFormMessage } from './FormFields';

// Form-based editor for the backend's free-form JSON columns (detail data and
// timeline item data). Admins add key/value rows instead of writing JSON; the
// value is stored as a flat JSON object.

type DataRecord = Record<string, unknown>;

function asRecord(value: unknown): DataRecord {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value as DataRecord;
  }
  return {};
}

// Existing records can hold numbers, booleans or nested values. Show them as
// text; editing a row stores the typed string.
function displayValue(value: unknown): string {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }
  return JSON.stringify(value);
}

function uniqueName(existing: string[]): string {
  if (!existing.includes('field')) return 'field';
  let n = 2;
  while (existing.includes(`field ${n}`)) n++;
  return `field ${n}`;
}

const rowInput = cn('h-8', FIELD_FOCUS);

function RemoveButton({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      onClick={onClick}
      aria-label={label}
    >
      <Trash2 className="size-4 text-destructive" />
    </Button>
  );
}

function AddButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className={ACCENT_OUTLINE}
      onClick={onClick}
    >
      <Plus className="size-4" /> {children}
    </Button>
  );
}

export function DataEditor({
  value,
  onChange,
}: {
  value: unknown;
  onChange: (value: unknown) => void;
}) {
  const entries = Object.entries(asRecord(value));
  const names = entries.map(([name]) => name);
  const rebuild = (next: [string, unknown][]) =>
    onChange(Object.fromEntries(next));

  return (
    <div className="space-y-2 rounded-lg border p-3">
      {entries.length === 0 && (
        <p className="text-xs text-muted-foreground">No fields yet.</p>
      )}
      {entries.map(([name, inner], index) => (
        <div key={index} className="flex items-start gap-2">
          <Input
            className={cn('w-40', rowInput)}
            placeholder="Key"
            aria-label="Field key"
            value={name}
            onChange={(event) => {
              const nextName = event.target.value;
              // Two fields cannot share a name; ignore the keystroke.
              if (names.some((n, i) => i !== index && n === nextName)) return;
              rebuild(
                entries.map((entry, i) =>
                  i === index ? [nextName, inner] : entry,
                ),
              );
            }}
          />
          <Input
            className={cn('min-w-0 flex-1', rowInput)}
            placeholder="Value"
            aria-label="Field value"
            value={displayValue(inner)}
            onChange={(event) =>
              rebuild(
                entries.map((entry, i) =>
                  i === index ? [name, event.target.value] : entry,
                ),
              )
            }
          />
          <RemoveButton
            onClick={() => rebuild(entries.filter((_, i) => i !== index))}
            label={`Remove field ${name || index + 1}`}
          />
        </div>
      ))}
      <div className="flex items-center justify-between gap-2">
        <AddButton
          onClick={() => rebuild([...entries, [uniqueName(names), '']])}
        >
          Add field
        </AddButton>
        {entries.length > 1 && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onChange(undefined)}
          >
            <Trash2 className="size-4 text-destructive" /> Clear all
          </Button>
        )}
      </div>
    </div>
  );
}

// Drop-in replacement for JsonField.
export function DataField({
  name,
  label,
  description,
  className,
}: {
  name: string;
  label: string;
  description?: string;
  className?: string;
}) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div>
              <DataEditor value={field.value} onChange={field.onChange} />
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <AnimatedFormMessage />
        </FormItem>
      )}
    />
  );
}
