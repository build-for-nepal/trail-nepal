'use client';

import { Plus, Trash2 } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import { Button } from '@/components/ui/button';

import type { DifficultyValue } from '../admin-helper';
import type { AdminFormValues } from '../admin-helper';

import {
  NumberField,
  SelectField,
  TextField,
  JsonField,
} from '../fields/FormFields';
import { AdminSection } from '../AdminSection';

import { ACCENT_OUTLINE, DIFFICULTY_OPTIONS, routeDefault } from '../admin-helper';

export function RouteSection() {
  const { watch, setValue } = useFormContext<AdminFormValues>();
  const routeEnabled = watch('route') !== null;

  return (
    <AdminSection
      title="Route"
      description="Optional GPS route; coordinates are [longitude, latitude]."
      action={
        routeEnabled ? (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setValue('route', null)}
          >
            <Trash2 className="size-4" /> Remove
          </Button>
        ) : (
          <Button
            type="button"
            variant="outline"
            size="sm"
            className={ACCENT_OUTLINE}
            onClick={() => setValue('route', routeDefault)}
          >
            <Plus className="size-4" /> Add
          </Button>
        )
      }
    >
      {!routeEnabled ? (
        <p className="text-sm text-muted-foreground">
          No route defined yet. Click <strong>Add</strong> to attach coordinates
          or paste a GeoJSON track.
        </p>
      ) : (
        <div className="space-y-4">
          <JsonField<AdminFormValues>
            name="route.geojson"
            label="GeoJSON (paste here)"
            description="Paste a full GeoJSON object (LineString / FeatureCollection). It is parsed and sent as-is to the backend (@db.JsonB). Optional."
            placeholder='{ "type": "LineString", "coordinates": [[83.7189, 28.2096], [83.8089, 28.5311]] }'
            rows={6}
            mono
          />
          <div className="grid items-start gap-4 sm:grid-cols-2">
            <p className="text-xs text-muted-foreground sm:col-span-2">
              Optional summary fields — leave empty if the GeoJSON covers it.
            </p>
            <NumberField<AdminFormValues>
              name="route.startLng"
              label="Start longitude"
              placeholder="83.7189"
              step={0.0001}
            />
            <NumberField<AdminFormValues>
              name="route.startLat"
              label="Start latitude"
              placeholder="28.2096"
              step={0.0001}
            />
            <NumberField<AdminFormValues>
              name="route.endLng"
              label="End longitude"
              placeholder="83.8089"
              step={0.0001}
            />
            <NumberField<AdminFormValues>
              name="route.endLat"
              label="End latitude"
              placeholder="28.5311"
              step={0.0001}
            />
            <NumberField<AdminFormValues>
              name="route.distanceKm"
              label="Distance (km)"
              placeholder="110.5"
              step={0.1}
            />
            <NumberField<AdminFormValues>
              name="route.maxElevationM"
              label="Max elevation (m)"
              placeholder="4130"
            />
            <NumberField<AdminFormValues>
              name="route.ascentM"
              label="Ascent (m)"
              placeholder="3200"
            />
            <NumberField<AdminFormValues>
              name="route.descentM"
              label="Descent (m)"
              placeholder="3200"
            />
            <SelectField<AdminFormValues>
              name="route.routeDifficulty"
              label="Route difficulty"
              options={
                DIFFICULTY_OPTIONS as unknown as {
                  value: DifficultyValue;
                  label: string;
                }[]
              }
            />
            <TextField<AdminFormValues>
              name="route.source"
              label="Source"
              placeholder="gpx-upload"
            />
          </div>
        </div>
      )}
    </AdminSection>
  );
}
