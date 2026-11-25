import { Redirect, Stack } from 'expo-router';

import { useAuth } from '@/features/auth';

export default function AuthLayout() {
  const { status } = useAuth();

  // Nothing forces a visitor in here: browsing is anonymous, and signing in is
  // only prompted when an action needs an account. So the single guard needed
  // is the reverse one — someone already signed in has no business on login or
  // signup. This mirrors the web's useRedirectIfAuthenticated.
  if (status === 'authenticated') {
    return <Redirect href="/" />;
  }

  // Render nothing until the stored session has been read, otherwise a signed-in
  // user sees the login screen for a frame before being bounced out of it.
  if (status === 'loading') {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
