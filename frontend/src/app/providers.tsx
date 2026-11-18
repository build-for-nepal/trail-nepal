'use client';

import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { Toaster } from '@/components/common/Toaster';
import { restoreSession } from '@/lib/auth';

export function Providers({ children }: { children: ReactNode }) {
  // Bring back the signed-in session after a reload.
  useEffect(() => {
    restoreSession();
  }, []);

  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
