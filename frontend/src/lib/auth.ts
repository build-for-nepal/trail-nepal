import type { AuthUser } from '@/store/authStore';

export type SignUpPayload = {
  name: string;
  email: string;
  password: string;
};

const AUTH_API_URL = (
  process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '')
).replace(/\/+$/, '');

export async function getGoogleSignInUrl(callbackURL: string): Promise<string> {
  if (!AUTH_API_URL) throw new Error('The API URL is not configured.');
  let response: Response;
  try {
    response = await fetch(`${AUTH_API_URL}/api/auth/sign-in/social`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ provider: 'google', callbackURL }),
    });
  } catch {
    throw new Error(`Could not reach the API at ${AUTH_API_URL}.`);
  }
  const data = (await response.json().catch(() => null)) as {
    url?: string;
    message?: string;
  } | null;
  if (!response.ok || !data?.url) {
    throw new Error(data?.message || 'Google sign-in is not available.');
  }
  return data.url;
}

/**
 * Email/password auth is enabled for local development only
 * (`NODE_ENV === 'development'`). Next inlines NODE_ENV at build time, so in a
 * production/staging build this is `false` and the code paths below are dead.
 */
export const EMAIL_AUTH_ENABLED = process.env.NODE_ENV === 'development';

export class AuthRequestError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
  }
}

async function authRequest(path: string, body?: unknown): Promise<void> {
  if (!AUTH_API_URL) throw new Error('The API URL is not configured.');
  let response: Response;
  try {
    response = await fetch(`${AUTH_API_URL}/api/auth${path}`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body ?? {}),
    });
  } catch {
    throw new Error(`Could not reach the API at ${AUTH_API_URL}.`);
  }
  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as {
      message?: string;
    } | null;
    throw new AuthRequestError(
      data?.message || 'Request failed. Please try again.',
      response.status,
    );
  }
}

export const signInWithEmail = (email: string, password: string) =>
  authRequest('/sign-in/email', { email, password });

export const signUpWithEmail = (email: string, password: string) =>
  authRequest('/sign-up/email', { email, password });

export const signOutSession = () => authRequest('/sign-out');

type MeResponse = {
  data?: {
    user: { email: string };
    profile: {
      firstName: string | null;
      lastName: string | null;
      avatarUrl: string | null;
    } | null;
  };
};

/**
 * Loads the signed-in user from GET /api/me.
 * Resolves `null` when there is no valid session (none, expired, revoked) and
 * `undefined` when the answer is unknown (network error / 5xx), so a blip does
 * not sign the user out.
 */
export async function fetchCurrentUser(): Promise<AuthUser | null | undefined> {
  if (!AUTH_API_URL) return null;
  try {
    const response = await fetch(`${AUTH_API_URL}/api/me`, {
      credentials: 'include',
    });
    if (response.status === 401 || response.status === 403) return null;
    if (!response.ok) return undefined;
    const { data } = (await response.json()) as MeResponse;
    if (!data) return null;
    const fullName = [data.profile?.firstName, data.profile?.lastName]
      .filter(Boolean)
      .join(' ');
    return {
      name: fullName || data.user.email,
      email: data.user.email,
      image: data.profile?.avatarUrl ?? null,
    };
  } catch {
    return undefined;
  }
}

/** Registers via Better Auth (dev only); the backend also starts a session. */
export async function signUp(payload: SignUpPayload): Promise<void> {
  if (!EMAIL_AUTH_ENABLED)
    throw new Error('Registration is not available yet.');
  await signUpWithEmail(payload.email, payload.password);
}
