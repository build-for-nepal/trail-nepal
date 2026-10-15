'use client';

import * as React from 'react';
import type { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  useFormField,
} from '@/components/ui/form';
import { FIELD_FOCUS, ACCENT_SWITCH } from '../admin-helper';

// Expands smoothly from 0fr -> 1fr instead of popping in, so a row-level error
// nudges the section below down rather than blinking.
export function AnimatedFormMessage({ className }: { className?: string }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? '') : '';
  return (
    <div
      data-slot="form-message"
      id={formMessageId}
      aria-live="polite"
      className={cn(
        'grid transition-all duration-200 ease-out',
        body ? 'grid-rows-[1fr]' : '-mt-2 grid-rows-[0fr]',
      )}
    >
      <p
        className={cn(
          'overflow-hidden text-sm text-destructive',
          className,
        )}
      >
        {body}
      </p>
    </div>
  );
}

function RequiredMark() {
  return (
    <span className="text-destructive" aria-hidden>
      *
    </span>
  );
}

function label({ text, required }: { text: string; required?: boolean }) {
  return (
    <span className="inline-flex items-baseline gap-0.5">
      {text}
      {required && <RequiredMark />}
    </span>
  );
}

type FieldRenderProps<T extends FieldValues> = {
  field: ControllerRenderProps<T, Path<T>>;
};

export function TextField<T extends FieldValues>({
  name,
  label: labelText,
  description,
  placeholder,
  required,
  className,
}: {
  name: Path<T>;
  label: string;
  description?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <FormField
      name={name}
      render={({ field }: FieldRenderProps<T>) => (
        <FormItem className={className}>
          <FormLabel>{label({ text: labelText, required })}</FormLabel>
          <FormControl>
            <Input
              className={FIELD_FOCUS}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <AnimatedFormMessage />
        </FormItem>
      )}
    />
  );
}

export function NumberField<T extends FieldValues>({
  name,
  label: labelText,
  description,
  placeholder,
  min,
  max,
  step,
  required,
  className,
}: {
  name: Path<T>;
  label: string;
  description?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
  className?: string;
}) {
  return (
    <FormField
      name={name}
      render={({ field }: FieldRenderProps<T>) => (
        <FormItem className={className}>
          <FormLabel>{label({ text: labelText, required })}</FormLabel>
          <FormControl>
            <Input
              type="number"
              inputMode="decimal"
              min={min}
              max={max}
              step={step}
              className={FIELD_FOCUS}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <AnimatedFormMessage />
        </FormItem>
      )}
    />
  );
}

export function TextareaField<T extends FieldValues>({
  name,
  label: labelText,
  description,
  placeholder,
  rows = 3,
  required,
  className,
}: {
  name: Path<T>;
  label: string;
  description?: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  className?: string;
}) {
  return (
    <FormField
      name={name}
      render={({ field }: FieldRenderProps<T>) => (
        <FormItem className={className}>
          <FormLabel>{label({ text: labelText, required })}</FormLabel>
          <FormControl>
            <Textarea
              rows={rows}
              placeholder={placeholder}
              className={cn('resize-y', FIELD_FOCUS)}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <AnimatedFormMessage />
        </FormItem>
      )}
    />
  );
}

export function SelectField<T extends FieldValues>({
  name,
  label: labelText,
  options,
  placeholder = 'Select…',
  description,
  required,
  className,
}: {
  name: Path<T>;
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  description?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <FormField
      name={name}
      render={({ field }: FieldRenderProps<T>) => (
        <FormItem className={className}>
          <FormLabel>{label({ text: labelText, required })}</FormLabel>
          <FormControl>
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className={cn('w-full', FIELD_FOCUS)}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <AnimatedFormMessage />
        </FormItem>
      )}
    />
  );
}

export function SwitchField<T extends FieldValues>({
  name,
  label: labelText,
  description,
  className,
}: {
  name: Path<T>;
  label: string;
  description?: string;
  className?: string;
}) {
  return (
    <FormField
      name={name}
      render={({ field }: FieldRenderProps<T>) => (
        <FormItem
          className={cn(
            'flex flex-row items-center justify-between gap-4 rounded-lg border p-4',
            className,
          )}
        >
          <div className="space-y-1">
            <FormLabel>{labelText}</FormLabel>
            {description && <FormDescription>{description}</FormDescription>}
          </div>
          <FormControl>
            <Switch
              checked={field.value as boolean}
              onCheckedChange={field.onChange}
              className={ACCENT_SWITCH}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}

export function JsonField<T extends FieldValues>({
  name,
  label: labelText,
  description,
  placeholder = '{}',
  rows = 3,
  mono = false,
  className,
}: {
  name: Path<T>;
  label: string;
  description?: string;
  placeholder?: string;
  rows?: number;
  mono?: boolean;
  className?: string;
}) {
  return (
    <FormField
      name={name}
      render={({ field }: FieldRenderProps<T>) => (
        <FormItem className={className}>
          <FormLabel>{labelText}</FormLabel>
          <FormControl>
            <Textarea
              rows={rows}
              placeholder={placeholder}
              className={cn(
                'resize-y',
                mono
                  ? 'font-mono text-xs leading-relaxed'
                  : 'font-mono text-xs',
                FIELD_FOCUS,
              )}
              spellCheck={false}
              {...field}
            />
          </FormControl>
          {description ? (
            <FormDescription>{description}</FormDescription>
          ) : (
            <FormDescription>Raw JSON — leave empty to unset</FormDescription>
          )}
          <AnimatedFormMessage />
        </FormItem>
      )}
    />
  );
}
