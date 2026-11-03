'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Plus, Pencil } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import type { TripTypeId } from './admin-helper';
import {
  ACCENT_BTN,
  STATUS_BADGE,
  TYPE_CONFIG,
  isTripTypeId,
} from './admin-helper';
import { useExperienceList } from './hooks/useAdminExperiences';

import { ExperienceDeleteButton } from './ExperienceDeleteButton';
import { TypeSwitcher } from './TypeSwitcher';
import { AdminShell } from './AdminShell';

export function AdminPanelPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const param = searchParams.get('type');
  const type: TripTypeId = isTripTypeId(param) ? param : 'trek';

  const config = TYPE_CONFIG[type];
  const { data, isPending, isError, error, refetch, isFetching } =
    useExperienceList(config.typeValue);
  const typeExperiences = data ?? [];

  const onTypeChange = (next: TripTypeId) => {
    const base = pathname.endsWith('/') ? pathname : `${pathname}/`;
    router.replace(`${base}?type=${next}`, { scroll: false });
  };

  return (
    <AdminShell>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-3xl">Admin panel</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage experiences. Create and update your trip listings.
          </p>
        </div>
        <TypeSwitcher value={type} onChange={onTypeChange} />
      </div>

      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="text-lg">{config.label}s</CardTitle>
            <Button asChild className={ACCENT_BTN}>
              <Link href={`/admin-panel/add/?type=${type}`}>
                <Plus className="size-4" /> Add {config.label}
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {isPending ? (
            <p
              role="status"
              className="px-4 py-14 text-center text-sm text-muted-foreground"
            >
              Loading {config.label.toLowerCase()} experiences…
            </p>
          ) : isError ? (
            <div
              role="alert"
              className="flex flex-col items-center gap-3 px-4 py-14 text-center"
            >
              <p className="text-sm text-destructive">
                {error instanceof Error
                  ? error.message
                  : 'Could not load experiences.'}
              </p>
              <Button
                type="button"
                variant="outline"
                disabled={isFetching}
                onClick={() => refetch()}
              >
                {isFetching ? 'Retrying…' : 'Try again'}
              </Button>
            </div>
          ) : typeExperiences.length === 0 ? (
            <div className="flex flex-col items-center gap-3 px-4 py-14 text-center">
              <p className="text-sm text-muted-foreground">
                No {config.label.toLowerCase()} experiences yet. Add your first
                one to get started.
              </p>
              <Button asChild className={ACCENT_BTN}>
                <Link href={`/admin-panel/add/?type=${type}`}>
                  <Plus className="size-4" /> Add new experience
                </Link>
              </Button>
            </div>
          ) : (
            <ul className="divide-y">
              {typeExperiences.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-2 px-4 py-3 transition-colors hover:bg-muted/60"
                >
                  <Link
                    href={`/admin-panel/edit/?id=${item.id}&type=${type}`}
                    className="flex min-w-0 flex-1 items-center justify-between gap-3 text-left"
                  >
                    <div className="min-w-0">
                      <p className="truncate font-medium">{item.name}</p>
                      <p className="truncate text-sm text-muted-foreground">
                        /{item.slug}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <Badge
                        variant="outline"
                        className={STATUS_BADGE[item.status]}
                      >
                        {item.status.toLowerCase()}
                      </Badge>
                      <span className="inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-sm font-medium">
                        <Pencil className="size-3.5" /> Edit
                      </span>
                    </div>
                  </Link>
                  <ExperienceDeleteButton id={item.id} name={item.name} />
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </AdminShell>
  );
}
