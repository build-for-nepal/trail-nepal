'use client';

import { SessionProvider, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useAuthStore } from '@/store/authStore';
import { Toaster } from '@/components/common/Toaster';
import { takePendingSave } from '@/lib/pendingSave';
import { saveTripWithFeedback } from '@/lib/trips';

function AuthSync() {
  const { data: session, status } = useSession();
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (status === 'authenticated') {
      setUser({
        name: session.user?.name ?? null,
        email: session.user?.email ?? null,
        image: session.user?.image ?? null,
      });
    } else if (status === 'unauthenticated') {
      setUser(null);
    }
  }, [status, session, setUser]);

  return null;
}

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
    <SessionProvider>
      <AuthSync />
      <ResumePendingSave />
      {children}
      <Toaster />
    </SessionProvider>
  );
}
