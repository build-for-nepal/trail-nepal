'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import type { UseFormReturn } from 'react-hook-form';
import { ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type { ExperienceTypeConfig } from './admin-helper';
import type { AdminFormValues } from './admin-helper';
import { useAdminToast } from './AdminToast';
import { ApiError } from './api/client';
import { toFormValues } from './api/experiences.mappers';
import {
  useCreateExperience,
  useUpdateExperience,
} from './hooks/useAdminExperiences';

import {
  ACCENT_BACK,
  ACCENT_BTN,
  DIFFICULTY_OPTIONS,
  REGION_OPTIONS,
  STATUS_OPTIONS,
  adminExperienceSchema,
  buildCreatePayload,
  buildDefaultValues,
  buildUpdatePayload,
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
import { TimelineSection } from './sections/TimelineSection';
import { RouteSection } from './sections/RouteSection';

// The API reports route coordinates as [lng, lat] tuples; the form has four
// inputs for them.
const SERVER_FIELD_MAP: Record<string, string> = {
  'route.startCoords.0': 'route.startLng',
  'route.startCoords.1': 'route.startLat',
  'route.endCoords.0': 'route.endLng',
  'route.endCoords.1': 'route.endLat',
};

type Notice = { tone: 'success' | 'error' | 'info'; text: string };

const NOTICE_TONE: Record<Notice['tone'], string> = {
  success: 'text-emerald-700',
  error: 'text-destructive',
  info: 'text-muted-foreground',
};

// Pins backend validation messages to the matching inputs. Returns the ones
// that have no input so they can still be shown.
function applyServerErrors(
  form: UseFormReturn<AdminFormValues>,
  error: ApiError,
): string[] {
  const unmapped: string[] = [];
  for (const item of error.fieldErrors) {
    const path = SERVER_FIELD_MAP[item.field] ?? item.field;
    const known = path
      .split('.')
      .reduce<unknown>(
        (node, part) =>
          node && typeof node === 'object'
            ? (node as Record<string, unknown>)[part]
            : undefined,
        form.getValues(),
      );
    if (known === undefined) {
      unmapped.push(`${item.field}: ${item.message}`);
      continue;
    }
    form.setError(path as 'slug', { type: 'server', message: item.message });
  }
  return unmapped;
}

export function ExperienceForm({
  config,
  initialValues,
  experienceId,
  backHref,
}: {
  config: ExperienceTypeConfig;
  initialValues?: Partial<AdminFormValues>;
  // Present when editing; the form PATCHes this id instead of POSTing.
  experienceId?: string;
  backHref: string;
}) {
  const [notice, setNotice] = React.useState<Notice | null>(null);

  const router = useRouter();
  const { toast } = useAdminToast();

  const isEdit = !!experienceId;
  const createMutation = useCreateExperience();
  const updateMutation = useUpdateExperience(experienceId ?? '');
  const isSaving = createMutation.isPending || updateMutation.isPending;

  // What the server currently has; PATCH only sends the difference.
  const [baseline, setBaseline] = React.useState(() =>
    buildDefaultValues(config, initialValues),
  );

  const form = useForm<AdminFormValues>({
    resolver: zodResolver(adminExperienceSchema),
    defaultValues: baseline,
    mode: 'onChange',
  });

  const onSubmit = async (values: AdminFormValues) => {
    setNotice(null);
    try {
      if (isEdit) {
        const body = buildUpdatePayload(values, baseline);
        if (!body) {
          setNotice({ tone: 'info', text: 'No changes to save.' });
          return;
        }
        const saved = await updateMutation.mutateAsync(body);
        // The response omits status / isActive, so keep what was submitted.
        const next = buildDefaultValues(config, {
          ...toFormValues(saved),
          status: values.status,
          isActive: values.isActive,
        });
        setBaseline(next);
        form.reset(next);
        setNotice({ tone: 'success', text: 'Changes saved.' });
      } else {
        const body = buildCreatePayload(values);
        await createMutation.mutateAsync(body);
        toast({
          tone: 'success',
          title: 'Experience created',
          description:
            values.status === 'PUBLISHED'
              ? `${values.name.trim()} is now live.`
              : `${values.name.trim()} was saved as a draft. Only published experiences appear in the list.`,
        });
        router.push(backHref);
      }
    } catch (error) {
      if (!(error instanceof ApiError)) {
        setNotice({ tone: 'error', text: 'Something went wrong. Try again.' });
        return;
      }
      if (error.status === 409) {
        form.setError('slug', {
          type: 'server',
          message: 'This slug is already in use.',
        });
      }
      const unmapped = applyServerErrors(form, error);
      setNotice({
        tone: 'error',
        text: [error.message, ...unmapped].join(' · '),
      });
    }
  };

  const onInvalid = () =>
    setNotice({
      tone: 'error',
      text: 'Fix the highlighted fields to continue.',
    });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onInvalid)}
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
          <span className="text-sm text-muted-foreground">{config.label}</span>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-heading text-lg">
                {initialValues?.name ?? `New ${config.label} experience`}
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
                  options={DIFFICULTY_OPTIONS.filter(
                    (option) =>
                      config.difficultyOptions.includes(option.value) ||
                      option.value === initialValues?.difficulty,
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
                  options={REGION_OPTIONS.filter(
                    (r) =>
                      config.regions.includes(r.value) ||
                      r.value === initialValues?.region,
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
          <TimelineSection />
          {/* <RouteSection /> */}
        </div>

        {notice && (
          <p
            role={notice.tone === 'error' ? 'alert' : 'status'}
            className={`text-right text-sm ${NOTICE_TONE[notice.tone]}`}
          >
            {notice.text}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-end gap-2">
          {!isEdit && (
            <Button
              type="button"
              variant="outline"
              disabled={isSaving}
              onClick={() => {
                form.reset(baseline);
                setNotice(null);
              }}
            >
              Reset
            </Button>
          )}
          <Button type="submit" className={ACCENT_BTN} disabled={isSaving}>
            {isSaving ? 'Saving…' : isEdit ? 'Save changes' : 'Create'}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
