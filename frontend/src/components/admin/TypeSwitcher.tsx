'use client';

import { cn } from '@/lib/utils';

import type { TripTypeId } from './admin-helper';
import { ACCENT_ACTIVE, EXPERIENCE_TYPES, TYPE_CONFIG } from './admin-helper';

export function TypeSwitcher({
  value,
  onChange,
}: {
  value: TripTypeId;
  onChange: (type: TripTypeId) => void;
}) {
  return (
    <div className="inline-flex rounded-lg border bg-card p-1">
      {EXPERIENCE_TYPES.map((id) => {
        const config = TYPE_CONFIG[id];
        return (
          <button
            key={id}
            type="button"
            aria-pressed={value === id}
            onClick={() => onChange(id)}
            className={cn(
              'h-9 cursor-pointer rounded-md px-4 text-sm font-medium transition-colors',
              value === id
                ? ACCENT_ACTIVE
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
            )}
          >
            {config.label}
          </button>
        );
      })}
    </div>
  );
}
