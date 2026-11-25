'use client';

import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useAuthStore } from '@/store/authStore';
import { Toaster } from '@/components/common/Toaster';
import { EMAIL_AUTH_ENABLED, fetchCurrentUser } from '@/lib/auth';
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

/**
 * Keeps the store in step with the server session (HttpOnly cookie, GET
 * /api/me): on load, and again when the tab regains focus so an expired or
 * revoked session is noticed. Dev only for now; see EMAIL_AUTH_ENABLED.
 */
function HydrateSession() {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (!EMAIL_AUTH_ENABLED) {
      setUser(null);
      return;
    }
    let cancelled = false;
    const sync = async () => {
      const user = await fetchCurrentUser();
      if (cancelled) return;
      if (user !== undefined) setUser(user);
      // Unknown result: keep what we have, but never stay "loading".
      else if (useAuthStore.getState().status === 'loading') setUser(null);
    };
    void sync();
    const onVisible = () => {
      if (document.visibilityState === 'visible') void sync();
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      cancelled = true;
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [setUser]);

  return null;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <HydrateSession />
      <ResumePendingSave />
      {children}
      <Toaster />
    </>
  );
}
