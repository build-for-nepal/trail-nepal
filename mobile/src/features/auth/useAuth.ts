import { authClient } from './client';

export type Session = typeof authClient.$Infer.Session;

/** Same three states the web's authStore exposes. */
export type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';

/**
 * The signed-in session.
 *
 * The web has to work to avoid signing a user out on a network blip — see the
 * `undefined` vs `null` return in frontend/src/lib/auth.ts. Here the expo
 * plugin already does it: it writes the session to SecureStore after every
 * /get-session, restores it on startup if `session.expiresAt` is still in the
 * future, and clears it on sign-out. So `data` survives a dropped connection,
 * and nothing needs to hold on to a previous value here.
 *
 * One consequence worth knowing: `authenticated` can reflect that cached
 * session before any request has gone out. That is the point, but it means a
 * session revoked server-side still reads as valid until the next check.
 */
export function useAuth(): {
  session: Session | null;
  status: AuthStatus;
  isRefetching: boolean;
  refetch: () => void;
} {
  const { data, isPending, isRefetching, refetch } = authClient.useSession();

  const status: AuthStatus = isPending
    ? 'loading'
    : data
      ? 'authenticated'
      : 'unauthenticated';

  return {
    session: data ?? null,
    status,
    isRefetching,
    refetch: () => {
      void refetch();
    },
  };
}
