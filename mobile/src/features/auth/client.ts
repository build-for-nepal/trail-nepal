import { expoClient } from '@better-auth/expo/client';
import { createAuthClient } from 'better-auth/react';
import * as SecureStore from 'expo-secure-store';

import { setSessionCookieSource } from '@/lib/api/client';

const baseURL = (process.env.EXPO_PUBLIC_API_URL ?? '').replace(/\/+$/, '');

// The backend mounts Better Auth at the default /api/auth, so baseURL carries
// the API origin only — adding the path here would double it up.
export const authClient = createAuthClient({
  baseURL,
  plugins: [
    expoClient({
      // Matches expo.scheme in app.json. Passed explicitly rather than letting
      // the plugin read app.json, so a rename cannot silently break OAuth.
      scheme: 'trailsnepal',
      storage: SecureStore,
      storagePrefix: 'trails',
      // The backend sets advanced.cookiePrefix to 'trails'. The plugin's own
      // default is 'better-auth', and it uses this to decide which Set-Cookie
      // headers are its own — leave it unset and the session cookie is ignored.
      cookiePrefix: 'trails',
    }),
  ],
});

// Lets lib/api/client.ts attach the session to its own fetches without
// importing this feature. Registered at module scope so it is in place before
// any screen can fire a request.
setSessionCookieSource(async () => (await authClient.getCookie()) || null);
