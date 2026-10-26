import * as React from 'react';

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-200 text-neutral-700 [--card-foreground:var(--color-neutral-700)]">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-10 sm:px-6">
        {children}
      </div>
    </div>
  );
}
