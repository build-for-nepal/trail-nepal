'use client';

import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useAuthStore } from '@/store/authStore';
import { Toaster } from '@/components/common/Toaster';
import { takePendingSave } from '@/lib/pendingSave';
import { saveTripWithFeedback } from '@/lib/trips';

/** Finishes a save the visitor started before signing in. */
function ResumePendingSave() {
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (!user) return;
    const trip = takePendingSave();
    if (trip) void saveTripWithFeedback(trip);
  }, [user]);

  return null;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <ResumePendingSave />
      {children}
      <Toaster />
    </>
  );
}
