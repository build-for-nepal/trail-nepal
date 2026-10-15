'use client';

import * as React from 'react';
import Link from 'next/link';
import { Plus, Pencil, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import type { AdminListItem, TripTypeId } from './admin-helper';
import {
  ACCENT_BTN,
  DEMO_EXPERIENCES,
  STATUS_BADGE,
  TYPE_CONFIG,
} from './admin-helper';

import { TypeSwitcher } from './TypeSwitcher';
import { AdminShell } from './AdminShell';

export function AdminPanelPage({
  experiences = DEMO_EXPERIENCES,
}: {
  experiences?: AdminListItem[];
}) {
  const [type, setType] = React.useState<TripTypeId>('trek');

  const config = TYPE_CONFIG[type];
  const typeExperiences = experiences.filter(
    (item) => item.type === config.typeValue,
  );

  return (
    <AdminShell>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-3xl">Admin panel</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage experiences. Create, update, preview the payload.
          </p>
        </div>
        <TypeSwitcher value={type} onChange={setType} />
      </div>

      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="text-lg">{config.label}s</CardTitle>
            <Button asChild className={ACCENT_BTN}>
              <Link href="/admin-panel/add/">
                <Plus className="size-4" /> Add {config.label}
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {typeExperiences.length === 0 ? (
            <div className="flex flex-col items-center gap-3 px-4 py-14 text-center">
              <p className="text-sm text-muted-foreground">
                No {config.label.toLowerCase()} experiences yet. Add your first
                one to get started.
              </p>
              <Button asChild className={ACCENT_BTN}>
                <Link href="/admin-panel/add/">
                  <Plus className="size-4" /> Add new experience
                </Link>
              </Button>
            </div>
          ) : (
            <ul className="divide-y">
              {typeExperiences.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/admin-panel/${item.slug}/edit/`}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/60"
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
                      <ChevronRight className="hidden size-4 text-muted-foreground sm:block" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </AdminShell>
  );
}
