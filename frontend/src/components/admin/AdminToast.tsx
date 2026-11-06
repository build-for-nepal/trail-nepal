'use client';

import * as React from 'react';
import { CircleAlert, CircleCheck, Info, X } from 'lucide-react';

import { cn } from '@/lib/utils';

type ToastTone = 'success' | 'error' | 'info';

type ToastInput = {
  title: string;
  description?: string;
  tone?: ToastTone;
  duration?: number;
};

type ToastItem = ToastInput & {
  id: number;
  tone: ToastTone;
};

const TONE_ICON: Record<ToastTone, React.ComponentType<{ className?: string }>> =
  {
    success: CircleCheck,
    error: CircleAlert,
    info: Info,
  };

const TONE_BORDER: Record<ToastTone, string> = {
  success: 'border-l-emerald-600',
  error: 'border-l-destructive',
  info: 'border-l-muted-foreground',
};

const TONE_ICON_COLOR: Record<ToastTone, string> = {
  success: 'text-emerald-600',
  error: 'text-destructive',
  info: 'text-muted-foreground',
};

const ToastContext = React.createContext<{
  toast: (input: ToastInput) => void;
  dismiss: (id: number) => void;
} | null>(null);

export function AdminToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);
  const nextId = React.useRef(0);
  const timers = React.useRef(
    new Map<number, ReturnType<typeof setTimeout>>(),
  );

  const dismiss = React.useCallback((id: number) => {
    setToasts((current) => current.filter((item) => item.id !== id));
    const timer = timers.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timers.current.delete(id);
    }
  }, []);

  const toast = React.useCallback(
    ({ tone = 'success', duration = 4000, ...input }: ToastInput) => {
      const id = ++nextId.current;
      setToasts((current) => [...current, { id, tone, ...input }]);

      const timer = setTimeout(() => {
        setToasts((current) => current.filter((item) => item.id !== id));
        timers.current.delete(id);
      }, duration);
      timers.current.set(id, timer);
    },
    [],
  );

  React.useEffect(() => {
    const activeTimers = timers.current;
    return () => {
      activeTimers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed top-4 right-4 z-[60] flex w-[calc(100vw-2rem)] max-w-sm flex-col gap-2"
      >
        {toasts.map((item) => {
          const Icon = TONE_ICON[item.tone];
          return (
            <div
              key={item.id}
              role={item.tone === 'error' ? 'alert' : 'status'}
              className={cn(
                'pointer-events-auto flex items-start gap-3 rounded-xl border border-l-4 bg-popover p-3 text-popover-foreground shadow-lg',
                TONE_BORDER[item.tone],
              )}
            >
              <Icon
                className={cn(
                  'mt-0.5 size-4 shrink-0',
                  TONE_ICON_COLOR[item.tone],
                )}
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{item.title}</p>
                {item.description && (
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => dismiss(item.id)}
                className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="size-4" />
                <span className="sr-only">Dismiss</span>
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useAdminToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useAdminToast must be used inside AdminToastProvider');
  }
  return context;
}
