'use client';

import { useEffect } from 'react';
import { Check, TriangleAlert, XIcon } from 'lucide-react';
import { useToastStore } from '@/store/toastStore';

const TOAST_DURATION_MS = 4500;
const ERROR_TOAST_DURATION_MS = 9000;

/** Renders the current toast. Mounted once in `Providers`. */
export function Toaster() {
  const toast = useToastStore((state) => state.toast);
  const dismissToast = useToastStore((state) => state.dismissToast);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(
      dismissToast,
      toast.tone === 'error' ? ERROR_TOAST_DURATION_MS : TOAST_DURATION_MS,
    );
    return () => clearTimeout(timer);
  }, [toast, dismissToast]);

  if (!toast) return null;

  const isError = toast.tone === 'error';

  return (
    <div
      role={isError ? 'alert' : 'status'}
      key={toast.id}
      className="fixed bottom-6 right-4 z-[1000] flex w-[calc(100%-2rem)] max-w-[420px] sm:right-6 items-start gap-3 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-[#D9DCD3] animate-in fade-in slide-in-from-bottom-4 motion-reduce:animate-none"
    >
      <span
        aria-hidden="true"
        className={`flex size-8 shrink-0 items-center justify-center rounded-full text-white ${isError ? 'bg-red-500' : 'bg-[#8cc63f]'}`}
      >
        {isError ? (
          <TriangleAlert className="size-4" />
        ) : (
          <Check className="size-4" strokeWidth={3} />
        )}
      </span>

      <div className="min-w-0 flex-1">
        <p className="font-fraunces text-base font-semibold leading-tight text-[#2D2F27]">
          {toast.title}
        </p>
        {toast.description && (
          <p className="mt-1 font-poppins text-[13px] leading-[1.5] text-[#404337]">
            {toast.description}
          </p>
        )}
        {toast.action && (
          <button
            type="button"
            onClick={() => {
              dismissToast();
              toast.action?.onClick();
            }}
            className="mt-2 cursor-pointer font-poppins text-[13px] font-semibold text-[#5F7C0D] hover:underline"
          >
            {toast.action.label}
          </button>
        )}
      </div>

      <button
        type="button"
        onClick={dismissToast}
        aria-label="Dismiss"
        className="shrink-0 cursor-pointer text-[#2D2F27] transition-opacity hover:opacity-70"
      >
        <XIcon className="size-5" aria-hidden="true" />
      </button>
    </div>
  );
}
