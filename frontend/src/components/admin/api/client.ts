// Single place that knows where the backend lives and how it reports errors.
// NEXT_PUBLIC_API_URL is inlined at build time, so it is public by design.
// The localhost fallback applies to `next dev` only: in a static export a
// localhost URL would be baked in and point at the visitor's own machine.
const API_URL = (
  process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '')
).replace(/\/+$/, '');

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

export async function apiRequest<T>(
  path: string,
  init: { method?: 'GET' | 'POST' | 'PATCH' | 'DELETE'; body?: unknown } = {},
): Promise<T> {
  if (!API_URL) {
    throw new ApiError(
      0,
      'The backend is not available in this environment yet, so this action cannot be completed.',
    );
  }

  let response: Response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      method: init.method ?? 'GET',
      headers: init.body ? { 'Content-Type': 'application/json' } : undefined,
      body: init.body ? JSON.stringify(init.body) : undefined,
    });
  } catch {
    throw new ApiError(0, `Could not reach the API at ${API_URL}. Make sure the backend is running.`);
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

// express.json() defaults to 100kb and the backend does not raise it, so a
// larger body is rejected before validation even runs.
export const API_BODY_LIMIT_BYTES = 100 * 1024;
