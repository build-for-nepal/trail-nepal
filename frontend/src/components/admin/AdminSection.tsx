'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AdminSection({
  title,
  description,
  children,
  defaultOpen = true,
  action,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  action?: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b py-3">
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="flex min-w-0 flex-1 cursor-pointer items-center gap-2 text-left"
          >
            <ChevronDown
              className={cn(
                'size-4 shrink-0 text-muted-foreground transition-transform',
                open && 'rotate-180',
              )}
              aria-hidden
            />
            <span>
              <CardTitle className="text-sm">{title}</CardTitle>
              {description && (
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  {description}
                </span>
              )}
            </span>
          </button>
          {action}
        </div>
      </CardHeader>
      {open && <CardContent className="p-4">{children}</CardContent>}
    </Card>
  );
}
