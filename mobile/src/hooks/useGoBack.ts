import { useRouter } from 'expo-router';
import { useCallback } from 'react';

/** Back to the previous screen, or to Explore when there is none, e.g. after a deep link. */
export function useGoBack() {
  const router = useRouter();
  return useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/');
    }
  }, [router]);
}
