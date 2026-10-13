'use client';

import { SessionProvider, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useAuthStore } from '@/store/authStore';

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

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <AuthSync />
      {children}
    </SessionProvider>
  );
}
