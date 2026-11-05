'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';

import {
  ACCENT_BACK,
  TYPE_CONFIG,
  typeIdFromValue,
  isTripTypeId,
} from './admin-helper';
import { AdminShell } from './AdminShell';
import { ApiError } from './api/client';
import { toFormValues } from './api/experiences.mappers';
import { ExperienceForm } from './ExperienceForm';
import { useExperience } from './hooks/useAdminExperiences';

function EditMessage({
  backHref,
  tone = 'muted',
  children,
  action,
}: {
  backHref: string;
  tone?: 'muted' | 'error';
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start gap-3">
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
      <p
        role={tone === 'error' ? 'alert' : 'status'}
        className={
          tone === 'error'
            ? 'text-sm text-destructive'
            : 'text-sm text-muted-foreground'
        }
      >
        {children}
      </p>
      {action}
    </div>
  );
}

export function AdminEditPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const typeParam = searchParams.get('type');

  const { data, isPending, isError, error, refetch, isFetching } =
    useExperience(id);

  const type = isTripTypeId(typeParam)
    ? typeParam
    : data
      ? typeIdFromValue(data.type)
      : 'trek';
  const backHref = `/admin-panel/?type=${type}`;

  return (
    <AdminShell>
      {!id ? (
        <EditMessage backHref={backHref} tone="error">
          No experience selected. Pick one from the list.
        </EditMessage>
      ) : isPending ? (
        <EditMessage backHref={backHref}>Loading experience…</EditMessage>
      ) : isError ? (
        <EditMessage
          backHref={backHref}
          tone="error"
          action={
            error instanceof ApiError && error.status === 404 ? undefined : (
              <Button
                type="button"
                variant="outline"
                disabled={isFetching}
                onClick={() => refetch()}
              >
                {isFetching ? 'Retrying…' : 'Try again'}
              </Button>
            )
          }
        >
          {error instanceof ApiError && error.status === 404
            ? 'Experience not found. It may have been removed, or it is not published (the API only serves published experiences).'
            : error instanceof Error
              ? error.message
              : 'Could not load the experience.'}
        </EditMessage>
      ) : (
        <ExperienceForm
          config={TYPE_CONFIG[typeIdFromValue(data.type)]}
          initialValues={toFormValues(data)}
          experienceId={data.id}
          backHref={backHref}
        />
      )}
    </AdminShell>
  );
}
