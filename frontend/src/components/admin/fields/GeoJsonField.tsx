'use client';

import * as React from 'react';
import { FileUp, Trash2 } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';

import type { AdminFormValues } from '../admin-helper';
import { ACCENT_OUTLINE } from '../admin-helper';
import { API_BODY_LIMIT_BYTES } from '../api/client';
import { AnimatedFormMessage } from './FormFields';

type Position = [number, number];

// Flattens every [lng, lat] pair in a GeoJSON object, in order.
function collectPositions(node: unknown, out: Position[] = []): Position[] {
  if (!node || typeof node !== 'object') return out;
  const obj = node as Record<string, unknown>;
  if (obj.type === 'FeatureCollection' && Array.isArray(obj.features)) {
    obj.features.forEach((f) => collectPositions(f, out));
  } else if (obj.type === 'Feature') {
    collectPositions(obj.geometry, out);
  } else if (
    obj.type === 'GeometryCollection' &&
    Array.isArray(obj.geometries)
  ) {
    obj.geometries.forEach((g) => collectPositions(g, out));
  } else if (Array.isArray(obj.coordinates)) {
    walk(obj.coordinates, out);
  }
  return out;
}

function walk(coords: unknown, out: Position[]) {
  if (!Array.isArray(coords)) return;
  if (typeof coords[0] === 'number' && typeof coords[1] === 'number') {
    out.push([coords[0], coords[1]]);
    return;
  }
  coords.forEach((c) => walk(c, out));
}

function summarise(geojson: unknown): string {
  const type = (geojson as { type?: string }).type ?? 'GeoJSON';
  const points = collectPositions(geojson).length;
  return `${type} · ${points.toLocaleString()} point${points === 1 ? '' : 's'}`;
}

const isBlank = (v: unknown) => v === undefined || v === '';

// File picker instead of a JSON textarea. Also fills the start / end
// coordinates from the first and last point when they are still empty.
export function GeoJsonField({
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
  const { getValues, setValue, setError, clearErrors } =
    useFormContext<AdminFormValues>();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onFile = async (
    file: File | undefined,
    onChange: (value: unknown) => void,
  ) => {
    if (!file) return;
    const fail = (message: string) =>
      setError('route.geojson', { type: 'custom', message });
    try {
      const parsed: unknown = JSON.parse(await file.text());
      if (
        !parsed ||
        typeof parsed !== 'object' ||
        !('type' in parsed) ||
        collectPositions(parsed).length === 0
      ) {
        return fail('That file is not a GeoJSON with coordinates.');
      }
      if (JSON.stringify(parsed).length > API_BODY_LIMIT_BYTES - 8 * 1024) {
        return fail(
          'This GeoJSON is too large for the API (100 KB request limit). Simplify the track and try again.',
        );
      }
      clearErrors('route.geojson');
      onChange(parsed);

      const positions = collectPositions(parsed);
      const first = positions[0];
      const last = positions[positions.length - 1];
      const route = getValues('route');
      if (route && isBlank(route.startLng) && isBlank(route.startLat)) {
        setValue('route.startLng', String(first[0]), { shouldDirty: true });
        setValue('route.startLat', String(first[1]), { shouldDirty: true });
      }
      if (route && isBlank(route.endLng) && isBlank(route.endLat)) {
        setValue('route.endLng', String(last[0]), { shouldDirty: true });
        setValue('route.endLat', String(last[1]), { shouldDirty: true });
      }
    } catch {
      fail('That file is not valid JSON.');
    } finally {
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="flex flex-wrap items-center gap-2">
              <input
                ref={inputRef}
                type="file"
                accept=".geojson,.json,application/geo+json,application/json"
                className="hidden"
                onChange={(e) => onFile(e.target.files?.[0], field.onChange)}
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                className={ACCENT_OUTLINE}
                onClick={() => inputRef.current?.click()}
              >
                <FileUp className="size-4" />
                {field.value ? 'Replace file' : 'Choose GeoJSON file'}
              </Button>
              {field.value ? (
                <>
                  <span className="text-sm">{summarise(field.value)}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => field.onChange(undefined)}
                  >
                    <Trash2 className="size-4 text-destructive" /> Remove
                  </Button>
                </>
              ) : (
                <span className="text-sm text-muted-foreground">
                  No file chosen
                </span>
              )}
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <AnimatedFormMessage />
        </FormItem>
      )}
    />
  );
}
