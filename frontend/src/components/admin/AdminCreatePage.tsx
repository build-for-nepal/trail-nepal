'use client';

import * as React from 'react';

import type { TripTypeId } from './admin-helper';
import { TYPE_CONFIG } from './admin-helper';

import { TypeSwitcher } from './TypeSwitcher';
import { ExperienceForm } from './ExperienceForm';
import { AdminShell } from './AdminShell';

export function AdminCreatePage() {
  const [type, setType] = React.useState<TripTypeId>('trek');
  const config = TYPE_CONFIG[type];

  return (
    <AdminShell>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-3xl">Admin panel</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Create a new experience. Preview the payload before saving.
          </p>
        </div>
        <TypeSwitcher value={type} onChange={setType} />
      </div>

      <ExperienceForm
        key={`new-${config.id}`}
        config={config}
        backHref="/admin-panel/"
      />
    </AdminShell>
  );
}
