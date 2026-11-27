// Single place that knows where the backend lives and how it reports errors.
// Ported from frontend/src/lib/api/client.ts so both apps read the same
// envelope; keep the two in step when the backend's error shape changes.
//
// EXPO_PUBLIC_API_URL is inlined at build time and is public by design.
const API_URL = (process.env.EXPO_PUBLIC_API_URL ?? '').replace(/\/+$/, '');

// Mirrors the backend's validate() output: { source, field, message }.
export type ApiFieldError = { source: string; field: string; message: string };

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public fieldErrors: ApiFieldError[] = [],
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

type ApiEnvelope<T> = { success: true; message?: string; data: T };

// React Native has no durable cookie jar, so authenticated requests cannot
// rely on the browser resending the session cookie. The auth feature registers
// its cookie source here at startup rather than this module importing it, which
// would point lib/ at a feature and invert the dependency.
// Async because the cookie lives in expo-secure-store, which is async.
type CookieSource = () => Promise<string | null>;
let cookieSource: CookieSource | null = null;

export function setSessionCookieSource(source: CookieSource): void {
  cookieSource = source;
}

export async function apiRequest<T>(
  path: string,
  init: {
    method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
    body?: unknown;
    /** Send the stored session cookie. Required by anything behind requireAuth. */
    authenticated?: boolean;
  } = {},
): Promise<T> {
  if (!API_URL) {
    throw new ApiError(
      0,
      'EXPO_PUBLIC_API_URL is not set, so the app cannot reach the API.',
    );
  }

  const headers: Record<string, string> = {};
  if (init.body) headers['Content-Type'] = 'application/json';
  if (init.authenticated) {
    const cookie = await cookieSource?.();
    if (cookie) headers['Cookie'] = cookie;
  }

  let response: Response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      method: init.method ?? 'GET',
      headers,
      body: init.body ? JSON.stringify(init.body) : undefined,
    });
  } catch {
    throw new ApiError(
      0,
      `Could not reach the API at ${API_URL}. Check that the backend is running and, on a device, that the URL is your machine's LAN address.`,
    );
  }

  const json = (await response.json().catch(() => null)) as
    | (ApiEnvelope<T> & { errors?: unknown })
    | { success: false; message?: string; errors?: unknown }
    | null;

  if (!response.ok || !json || json.success !== true) {
    const message =
      (json && 'message' in json && json.message) ||
      `Request failed (${response.status})`;
    const errors = json && 'errors' in json ? json.errors : undefined;
    throw new ApiError(
      response.status,
      message,
      Array.isArray(errors) ? (errors as ApiFieldError[]) : [],
    );
  }

  return json.data;
}
