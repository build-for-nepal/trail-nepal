'use client';

import * as React from 'react';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import { Eye, Clipboard, ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import type { ExperienceTypeConfig } from './admin-helper';
import type { AdminFormValues } from './admin-helper';

import {
  ACCENT_BACK,
  ACCENT_BTN,
  DIFFICULTY_OPTIONS,
  REGION_OPTIONS,
  STATUS_OPTIONS,
  adminExperienceSchema,
  buildCreatePayload,
  buildDefaultValues,
} from './admin-helper';

import {
  NumberField,
  SwitchField,
  SelectField,
  TextField,
  TextareaField,
} from './fields/FormFields';
import { TagsField } from './fields/TagsField';
import { PeakSeasonField } from './fields/PeakSeasonField';
import { DetailsSection } from './sections/DetailsSection';
import { ImagesSection } from './sections/ImagesSection';
import { TimelineSection } from './sections/TimelineSection';
import { RouteSection } from './sections/RouteSection';

export function ExperienceForm({
  config,
  initialValues,
  backHref,
}: {
  config: ExperienceTypeConfig;
  initialValues?: Partial<AdminFormValues>;
  backHref: string;
}) {
  const [payload, setPayload] = React.useState<string>('');

  const form = useForm<AdminFormValues>({
    resolver: zodResolver(adminExperienceSchema),
    defaultValues: buildDefaultValues(config, initialValues),
    mode: 'onChange',
  });

  const onSubmit = (values: AdminFormValues) => {
    try {
      const body = buildCreatePayload(values);
      setPayload(JSON.stringify(body, null, 2));
    } catch {
      // Field-level errors are shown by the resolver; this is a safety net.
    }
  };

  const copyPayload = async () => {
    if (!payload) return;
    await navigator.clipboard.writeText(payload);
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
        noValidate
      >
        <div className="flex items-center justify-between gap-2">
          <Button
            asChild
            type="button"
            variant="ghost"
            size="sm"
            className={ACCENT_BACK}
          >
            <Link href={backHref}>
              <ArrowLeft className="size-4" /> Back to list
            </Link>
          </Button>
          <span className="text-sm text-muted-foreground">
            {initialValues?.name ?? `New ${config.label} Experience`}
          </span>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-heading text-lg">
                {initialValues ? `Edit — ${config.label}` : config.label}{' '}
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <TextField<AdminFormValues>
                name="name"
                label="Name"
                required
                placeholder={
                  config.label === 'Trek' ? 'Everest Base Camp' : config.label
                }
              />
              <div className="grid items-start gap-4 sm:grid-cols-2">
                <TextField<AdminFormValues>
                  name="slug"
                  label="Slug"
                  required
                  placeholder={config.exampleSlug}
                  description="Lowercase words separated by single hyphens."
                />
                <SelectField<AdminFormValues>
                  name="status"
                  label="Status"
                  options={STATUS_OPTIONS}
                />
              </div>
              <SelectField<AdminFormValues>
                name="type"
                label="Type"
                required
                options={[{ value: config.typeValue, label: config.label }]}
              />
              <TextareaField<AdminFormValues>
                name="shortDescription"
                label="Short description"
                required
                placeholder="A classic teahouse trek into the Annapurna sanctuary."
                rows={2}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-lg">
                Quick flags
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <SwitchField<AdminFormValues>
                name="isActive"
                label="Active"
                description="Show on the public site."
              />
              <SwitchField<AdminFormValues>
                name="isPopular"
                label="Popular"
                description="Featured on the homepage."
              />
              <NumberField<AdminFormValues>
                name="ratingAvg"
                label="Average rating (0–5)"
                placeholder="4.5"
                min={0}
                max={5}
                step={0.1}
              />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-heading text-lg">Planning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid items-start gap-4 sm:grid-cols-3">
                <NumberField<AdminFormValues>
                  name="durationDays"
                  label="Duration (days)"
                  required
                  placeholder="12"
                  min={1}
                  max={365}
                />
                <NumberField<AdminFormValues>
                  name="minDays"
                  label="Min days"
                  placeholder="10"
                  min={1}
                  max={365}
                />
                <NumberField<AdminFormValues>
                  name="maxDays"
                  label="Max days"
                  placeholder="14"
                  min={1}
                  max={365}
                />
                <NumberField<AdminFormValues>
                  name="maxElevationM"
                  label="Max elevation (m)"
                  required
                  placeholder="4130"
                  min={0}
                />
                <NumberField<AdminFormValues>
                  name="priceNpr"
                  label="Price (NPR)"
                  placeholder="120000"
                  min={0}
                />
                <NumberField<AdminFormValues>
                  name="difficultyScore"
                  label="Difficulty score (0–10)"
                  placeholder="6"
                  min={0}
                  max={10}
                />
              </div>
              <div className="grid items-start gap-4 sm:grid-cols-2">
                <SelectField<AdminFormValues>
                  name="difficulty"
                  label="Difficulty"
                  required
                  options={DIFFICULTY_OPTIONS.filter((option) =>
                    config.difficultyOptions.includes(option.value),
                  )}
                />
                <TextField<AdminFormValues>
                  name="thumbnail"
                  label="Thumbnail URL"
                  placeholder="https://cdn/thumb.jpg"
                />
                <SelectField<AdminFormValues>
                  name="region"
                  label="Region"
                  required
                  options={REGION_OPTIONS.filter((r) =>
                    config.regions.includes(r.value),
                  )}
                />
                <TextField<AdminFormValues>
                  name="startPoint"
                  label="Start point"
                  placeholder="Pokhara"
                />
              </div>
              <PeakSeasonField
                name="peakSeason"
                label="Peak season (months)"
                description="Best months to travel; used for season filters."
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-lg">Tags</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <TagsField
                name="interest"
                label="Interests"
                description="Tap to toggle. Free-text tagging comes later."
                suggestions={config.interestSuggestions}
              />
              <TagsField
                name="activity"
                label="Activities"
                description="Tap to toggle. Free-text tagging comes later."
                suggestions={config.activitySuggestions}
              />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <DetailsSection />
          <ImagesSection />
          <TimelineSection />
          <RouteSection />
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() =>
              form.reset(buildDefaultValues(config, initialValues))
            }
          >
            Reset
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button type="button" variant="secondary">
                <Eye className="size-4" /> Preview
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Payload preview</DialogTitle>
              </DialogHeader>
              <pre className="max-h-[60vh] overflow-auto rounded-lg border bg-muted p-4 text-xs">
                {payload || 'Submit the form to build the payload.'}
              </pre>
              <Button
                type="button"
                className={ACCENT_BTN}
                onClick={copyPayload}
                disabled={!payload}
              >
                <Clipboard className="size-4" /> Copy payload
              </Button>
            </DialogContent>
          </Dialog>
          <Button
            type="submit"
            className={ACCENT_BTN}
            onClick={() => form.handleSubmit(onSubmit)()}
          >
            {initialValues ? 'Save changes' : 'Create'}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
