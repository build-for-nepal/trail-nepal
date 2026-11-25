'use client';

import * as React from 'react';
import { ChevronDown, Plus, Trash2 } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';

import { ACCENT_OUTLINE, ACCENT_SWITCH, FIELD_FOCUS } from '../admin-helper';
import { AnimatedFormMessage } from './FormFields';

// Form-based editor for the backend's free-form JSON columns (detail data,
// timeline item data, image metadata). Admins edit rows instead of writing
// JSON. Every value keeps its type — text, number, yes/no, list or group —
// because the website only reads a value that has the shape it expects: a
// coordinate saved as text, or a list saved as one string, is ignored.

type DataRecord = Record<string, unknown>;
type Container = DataRecord | unknown[];

function isRecord(value: unknown): value is DataRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isContainer(value: unknown): value is Container {
  return Array.isArray(value) || isRecord(value);
}

// The value types an admin can add.
const NEW_VALUES: { label: string; create: () => unknown }[] = [
  { label: 'Text', create: () => '' },
  { label: 'Number', create: () => 0 },
  { label: 'Yes / No', create: () => false },
  { label: 'List', create: () => [] },
  { label: 'Group of fields', create: () => ({}) },
];

// An empty copy of a value, used so a new list item starts with the same
// fields as the one before it. Number-only lists keep their length because
// they are pairs such as coordinates.
function blankLike(value: unknown): unknown {
  if (typeof value === 'number') return 0;
  if (typeof value === 'boolean') return false;
  if (Array.isArray(value)) {
    return value.every((item) => typeof item === 'number')
      ? value.map(() => 0)
      : [];
  }
  if (isRecord(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, inner]) => [key, blankLike(inner)]),
    );
  }
  return '';
}

function countLabel(value: Container): string {
  if (Array.isArray(value)) {
    return `List · ${value.length} ${value.length === 1 ? 'item' : 'items'}`;
  }
  const count = Object.keys(value).length;
  return `Group · ${count} ${count === 1 ? 'field' : 'fields'}`;
}

// A short name for a collapsed list item: its first piece of text.
function itemTitle(value: Container): string {
  if (Array.isArray(value)) return countLabel(value);
  const first = Object.values(value).find(
    (inner) => typeof inner === 'string' && inner.trim() !== '',
  );
  return typeof first === 'string' ? first : '';
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

// "Add" button that asks which type of value to add.
function AddMenu({
  label,
  onAdd,
}: {
  label: string;
  onAdd: (value: unknown) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className={ACCENT_OUTLINE}
        >
          <Plus className="size-4" /> {label}
          <ChevronDown className="size-3.5" aria-hidden />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {NEW_VALUES.map((option) => (
          <DropdownMenuItem
            key={option.label}
            onSelect={() => onAdd(option.create())}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Keeps what is being typed ("27.", "-") in a local draft and passes a value
// on only once it is a real number, so the stored value is never text.
function NumberInput({
  value,
  onChange,
  label,
}: {
  value: number;
  onChange: (value: number) => void;
  label: string;
}) {
  const [draft, setDraft] = React.useState<string | null>(null);

  return (
    <Input
      className={cn('min-w-0 flex-1', rowInput)}
      inputMode="decimal"
      placeholder="Number"
      aria-label={label}
      value={draft ?? String(value)}
      onChange={(event) => {
        const text = event.target.value;
        setDraft(text);
        const parsed = Number(text);
        if (text.trim() !== '' && Number.isFinite(parsed)) onChange(parsed);
      }}
      onBlur={() => setDraft(null)}
    />
  );
}

// One text, number or yes/no value. The control follows the stored type.
function ScalarInput({
  value,
  onChange,
  label,
}: {
  value: unknown;
  onChange: (value: unknown) => void;
  label: string;
}) {
  if (typeof value === 'boolean') {
    return (
      <div className="flex h-8 min-w-0 flex-1 items-center gap-2 text-sm">
        <Switch
          checked={value}
          onCheckedChange={onChange}
          aria-label={label}
          className={ACCENT_SWITCH}
        />
        <span aria-hidden>{value ? 'Yes' : 'No'}</span>
      </div>
    );
  }

  if (typeof value === 'number') {
    return <NumberInput value={value} onChange={onChange} label={label} />;
  }

  return (
    <Textarea
      className={cn('min-h-8 min-w-0 flex-1 py-1.25', FIELD_FOCUS)}
      rows={1}
      placeholder="Value"
      aria-label={label}
      value={typeof value === 'string' ? value : ''}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

function ContainerEditor({
  value,
  onChange,
}: {
  value: Container;
  onChange: (value: Container) => void;
}) {
  return Array.isArray(value) ? (
    <ListEditor value={value} onChange={onChange} />
  ) : (
    <GroupEditor value={value} onChange={onChange} />
  );
}

// Named fields: a key and its value per row. A list or group value is edited
// in an indented block under its key.
function GroupEditor({
  value,
  onChange,
  footer,
}: {
  value: DataRecord;
  onChange: (value: DataRecord) => void;
  footer?: React.ReactNode;
}) {
  const entries = Object.entries(value);
  const names = entries.map(([name]) => name);
  const rebuild = (next: [string, unknown][]) =>
    onChange(Object.fromEntries(next));
  const setValue = (index: number, inner: unknown) =>
    rebuild(
      entries.map((entry, i) => (i === index ? [entry[0], inner] : entry)),
    );

  return (
    <div className="space-y-2">
      {entries.length === 0 && (
        <p className="text-xs text-muted-foreground">No fields yet.</p>
      )}
      {entries.map(([name, inner], index) => {
        const keyInput = (
          <Input
            className={cn('w-28 shrink-0 sm:w-40', rowInput)}
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
        );
        const removeButton = (
          <RemoveButton
            onClick={() => rebuild(entries.filter((_, i) => i !== index))}
            label={`Remove field ${name || index + 1}`}
          />
        );

        if (!isContainer(inner)) {
          return (
            <div key={index} className="flex items-start gap-2">
              {keyInput}
              <ScalarInput
                value={inner}
                onChange={(next) => setValue(index, next)}
                label={name ? `${name} value` : 'Field value'}
              />
              {removeButton}
            </div>
          );
        }

        return (
          <div key={index} className="space-y-2">
            <div className="flex items-center gap-2">
              {keyInput}
              <span className="min-w-0 flex-1 text-xs text-muted-foreground">
                {countLabel(inner)}
              </span>
              {removeButton}
            </div>
            <div className="ml-1 border-l-2 pl-3">
              <ContainerEditor
                value={inner}
                onChange={(next) => setValue(index, next)}
              />
            </div>
          </div>
        );
      })}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <AddMenu
          label="Add field"
          onAdd={(next) => rebuild([...entries, [uniqueName(names), next]])}
        />
        {footer}
      </div>
    </div>
  );
}

// A list item that is itself a group or a list. Collapsed to one line until
// opened, so a long list stays readable; a new, still empty item starts open.
function ListItemCard({
  index,
  value,
  onChange,
  onRemove,
}: {
  index: number;
  value: Container;
  onChange: (value: Container) => void;
  onRemove: () => void;
}) {
  const title = itemTitle(value);
  const [open, setOpen] = React.useState(title === '');

  return (
    <div className="rounded-lg border">
      <div className="flex items-center gap-1 pr-1">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="flex min-w-0 flex-1 cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-left transition-colors hover:bg-muted/50"
        >
          <ChevronDown
            className={cn(
              'size-4 shrink-0 text-muted-foreground transition-transform',
              !open && '-rotate-90',
            )}
            aria-hidden
          />
          <span className="shrink-0 text-xs font-medium text-muted-foreground">
            Item {index + 1}
          </span>
          {title && <span className="truncate text-sm">{title}</span>}
        </button>
        <RemoveButton onClick={onRemove} label={`Remove item ${index + 1}`} />
      </div>
      {open && (
        <div className="border-t p-2">
          <ContainerEditor value={value} onChange={onChange} />
        </div>
      )}
    </div>
  );
}

// An ordered list. "Add item" copies the fields of the last item, left empty.
function ListEditor({
  value,
  onChange,
  footer,
}: {
  value: unknown[];
  onChange: (value: unknown[]) => void;
  footer?: React.ReactNode;
}) {
  const setItem = (index: number, next: unknown) =>
    onChange(value.map((item, i) => (i === index ? next : item)));
  const removeItem = (index: number) =>
    onChange(value.filter((_, i) => i !== index));

  return (
    <div className="space-y-2">
      {value.length === 0 && (
        <p className="text-xs text-muted-foreground">No items yet.</p>
      )}
      {value.map((item, index) =>
        isContainer(item) ? (
          <ListItemCard
            key={index}
            index={index}
            value={item}
            onChange={(next) => setItem(index, next)}
            onRemove={() => removeItem(index)}
          />
        ) : (
          <div key={index} className="flex items-start gap-2">
            <span className="flex h-8 w-5 shrink-0 items-center justify-end text-xs text-muted-foreground tabular-nums">
              {index + 1}
            </span>
            <ScalarInput
              value={item}
              onChange={(next) => setItem(index, next)}
              label={`Item ${index + 1}`}
            />
            <RemoveButton
              onClick={() => removeItem(index)}
              label={`Remove item ${index + 1}`}
            />
          </div>
        ),
      )}
      <div className="flex flex-wrap items-center justify-between gap-2">
        {value.length > 0 ? (
          <AddButton
            onClick={() =>
              onChange([...value, blankLike(value[value.length - 1])])
            }
          >
            Add item
          </AddButton>
        ) : (
          <AddMenu label="Add item" onAdd={(next) => onChange([next])} />
        )}
        {footer}
      </div>
    </div>
  );
}

export function DataEditor({
  value,
  onChange,
}: {
  value: unknown;
  onChange: (value: unknown) => void;
}) {
  const clearAll = (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={() => onChange(undefined)}
    >
      <Trash2 className="size-4 text-destructive" /> Clear all
    </Button>
  );

  if (Array.isArray(value)) {
    return (
      <div className="rounded-lg border p-3">
        <ListEditor value={value} onChange={onChange} footer={clearAll} />
      </div>
    );
  }

  const group = isRecord(value) ? value : {};
  const count = Object.keys(group).length;

  return (
    <div className="rounded-lg border p-3">
      <GroupEditor
        value={group}
        onChange={onChange}
        footer={
          count === 0 ? (
            // Sections such as "what to expect" are a list at the top level.
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => onChange([])}
            >
              Make this a list
            </Button>
          ) : (
            count > 1 && clearAll
          )
        }
      />
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
