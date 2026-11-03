import type { NewTrip } from '@/lib/trips';

/**
 * A save the visitor started while signed out. It lives in sessionStorage so it
 * survives the trip to the login page and back, and is resumed once they are
 * signed in. The plan they were building is kept alongside it.
 */
const PENDING_KEY = 'trails-nepal-pending-save';
const PLAN_KEY = 'trails-nepal-pending-plan';
const MAX_AGE_MS = 30 * 60 * 1000;

type Pending = { trip: NewTrip; returnTo: string; createdAt: number };

function read<T>(key: string): T | null {
  try {
    const raw = window.sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function write(key: string, value: unknown) {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage blocked or full: the save simply won't resume after login.
  }
}

function remove(key: string) {
  try {
    window.sessionStorage.removeItem(key);
  } catch {
    // ignore
  }
}

/** Remembers the trip to save and the page to come back to after login. */
export function stashPendingSave(trip: NewTrip) {
  const { pathname, search } = window.location;
  write(PENDING_KEY, {
    trip,
    returnTo: `${pathname}${search}`,
    createdAt: Date.now(),
  } satisfies Pending);
}

/** Same-site path to return to after login, or null when nothing is pending. */
export function getPendingReturnTo(): string | null {
  const pending = read<Pending>(PENDING_KEY);
  const path = pending?.returnTo;
  return path && path.startsWith('/') && !path.startsWith('//') ? path : null;
}

/** Returns the pending trip once, and forgets it. Stale entries are dropped. */
export function takePendingSave(): NewTrip | null {
  const pending = read<Pending>(PENDING_KEY);
  remove(PENDING_KEY);
  if (!pending || Date.now() - pending.createdAt > MAX_AGE_MS) return null;
  return pending.trip;
}

/** Keeps the in-progress plan (form and results) across the login detour. */
export function stashPlan(plan: unknown) {
  write(PLAN_KEY, plan);
}

/** Returns the stashed plan once, and forgets it. */
export function takePlan<T>(): T | null {
  const plan = read<T>(PLAN_KEY);
  remove(PLAN_KEY);
  return plan;
}
