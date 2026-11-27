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

  // `loading` deliberately falls through to the screens rather than rendering
  // null. Returning null here reads as the tidier option — it avoids a signed-in
  // user glimpsing the login form before the redirect — but it fails badly: if
  // the app launches straight onto this route and the session never resolves,
  // say because the API is unreachable, there is nothing on screen and no way
  // out, since these routes sit outside the tab bar. A brief flash of a form is
  // a far cheaper failure than a dead end.
  return <Stack screenOptions={{ headerShown: false }} />;
}
