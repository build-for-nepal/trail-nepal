'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

/** Sends an already signed-in visitor away from the login/signup pages. */
export function useRedirectIfAuthenticated(to = '/') {
  const router = useRouter();
  const status = useAuthStore((state) => state.status);

  useEffect(() => {
    if (status === 'authenticated') router.replace(to);
  }, [status, router, to]);
}
