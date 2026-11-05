'use client';

import { useSearchParams } from 'next/navigation';

import { TYPE_CONFIG, isTripTypeId } from './admin-helper';

import { ExperienceForm } from './ExperienceForm';
import { AdminShell } from './AdminShell';

export function AdminCreatePage() {
  const param = useSearchParams().get('type');
  const type = isTripTypeId(param) ? param : 'trek';
  const config = TYPE_CONFIG[type];

  return (
    <AdminShell>
      <div>
        <h1 className="font-heading text-3xl">Admin panel</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Create a new {config.label.toLowerCase()} experience.
        </p>
      </div>

      <ExperienceForm
        key={`new-${config.id}`}
        config={config}
        backHref={`/admin-panel/?type=${type}`}
      />
    </AdminShell>
  );
}
