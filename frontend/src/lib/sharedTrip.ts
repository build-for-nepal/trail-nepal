import { TRAILS } from '@/static/trek';
import type { Trek } from '@/types/trek';
import { MAX_DAYS, MIN_DAYS } from '@/lib/tripPreferences';

export const SHARED_TRIP_PATH = '/shared-trip/';

const MAX_SHARED_TRAILS = 12;
const TRAIL_ID_PATTERN = /^[a-z0-9-]+$/;

const TRAILS_BY_ID = new Map(TRAILS.map((trail) => [trail.id, trail]));

export interface SharedTrip {
  totalDays: number;
  trails: Trek[];
}

/**
 * Outcome of opening a share link. `revoked` is part of the contract for when
 * the backend can retire a link; nothing on the client produces it yet.
 */
export type SharedTripResult =
  | { status: 'ok'; trip: SharedTrip }
  | { status: 'invalid' | 'unavailable' | 'revoked' };

/** Stable identity for a trip: the same trails and days are the same trip. */
export function tripKey(trailIds: string[], totalDays: number): string {
  return `${totalDays}:${trailIds.join(',')}`;
}

/**
 * The shared trip travels in the URL (the site is a static export, so there is
 * no server to look a trip up on): `/shared-trip/?trails=a,b&days=5`.
 */
export function buildShareUrl(
  origin: string,
  trailIds: string[],
  totalDays: number,
): string {
  const params = new URLSearchParams({
    trails: trailIds.join(','),
    days: String(totalDays),
  });
  return `${origin}${SHARED_TRIP_PATH}?${params.toString()}`;
}

export function resolveSharedTrip(params: URLSearchParams): SharedTripResult {
  const trails = params.get('trails');
  const days = Number(params.get('days'));

  if (
    !trails ||
    !Number.isInteger(days) ||
    days < MIN_DAYS ||
    days > MAX_DAYS
  ) {
    return { status: 'invalid' };
  }

  const ids = trails.split(',');
  if (
    ids.length > MAX_SHARED_TRAILS ||
    ids.some((id) => !TRAIL_ID_PATTERN.test(id))
  ) {
    return { status: 'invalid' };
  }

  const resolved = ids.flatMap((id) => TRAILS_BY_ID.get(id) ?? []);
  if (resolved.length === 0) return { status: 'unavailable' };

  return { status: 'ok', trip: { totalDays: days, trails: resolved } };
}
