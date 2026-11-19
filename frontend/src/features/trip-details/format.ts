// Turns backend values into the display strings the static records use, and
// guards the untyped JSON columns. Pure functions only: no React, no fetch.

import type { DifficultyValue } from '@/components/admin/admin-helper';

// --- guards for the JSON `data` columns -------------------------------------

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function asString(value: unknown): string | undefined {
  return typeof value === 'string' ? value : undefined;
}

export function asStringArray(value: unknown): string[] | undefined {
  return Array.isArray(value) &&
    value.every((entry) => typeof entry === 'string')
    ? (value as string[])
    : undefined;
}

/**
 * For an optional field the backend owns: a string wins, a missing value means
 * the field was removed, and anything else is a malformed value, so the static
 * one is kept.
 */
export function optionalString(
  value: unknown,
  fallback: string | null | undefined,
): string | undefined {
  if (typeof value === 'string') return value === '' ? undefined : value;
  if (value === undefined || value === null) return undefined;
  return fallback ?? undefined;
}

export function optionalBoolean(
  value: unknown,
  fallback: boolean | undefined,
): boolean | undefined {
  if (typeof value === 'boolean') return value;
  if (value === undefined || value === null) return undefined;
  return fallback;
}

// --- coordinates ------------------------------------------------------------

/**
 * The backend stores `[lng, lat]` (GeoJSON order); the static records and the
 * map code expect `[lat, lng]`. Returns undefined for anything that is not a
 * usable pair, so a bad value can never put a pin in the ocean.
 */
export function swapCoords(value: unknown): [number, number] | undefined {
  if (!Array.isArray(value) || value.length !== 2) return undefined;

  const [lng, lat] = value as unknown[];
  if (typeof lng !== 'number' || typeof lat !== 'number') return undefined;
  if (!Number.isFinite(lng) || !Number.isFinite(lat)) return undefined;
  if (Math.abs(lat) > 90 || Math.abs(lng) > 180) return undefined;

  return [lat, lng];
}

// --- labels -----------------------------------------------------------------

const DIFFICULTY_LABELS: Record<DifficultyValue, string> = {
  EASY: 'Easy',
  EASY_MODERATE: 'Easy to Moderate',
  MODERATE: 'Moderate',
  MODERATE_CHALLENGING: 'Moderate to Challenging',
  CHALLENGING: 'Challenging',
};

export function difficultyLabel(value: string): string | undefined {
  return value in DIFFICULTY_LABELS
    ? DIFFICULTY_LABELS[value as DifficultyValue]
    : undefined;
}

export function padTwo(value: number): string {
  return String(value).padStart(2, '0');
}

// True when the label already shows this number ("~2,175m" for 2175), in which
// case the authored label is kept rather than reformatted.
function showsNumber(label: string, value: number): boolean {
  return label.replace(/\D/g, '') === String(value);
}

export function formatDuration(days: number, staticLabel: string): string {
  if (!Number.isInteger(days) || days < 1) return staticLabel;
  if (showsNumber(staticLabel, days)) return staticLabel;
  return `${days} ${days === 1 ? 'Day' : 'Days'}`;
}

export function formatElevation(
  metres: number | null,
  staticLabel: string,
): string {
  if (metres === null || !Number.isFinite(metres)) return staticLabel;
  if (showsNumber(staticLabel, metres)) return staticLabel;
  return `${metres.toLocaleString('en-US')}m`;
}

const MONTHS_LONG = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const MONTHS_SHORT = MONTHS_LONG.map((month) => month.slice(0, 3));

/**
 * Month numbers (1-12) to the season label the site uses, grouping consecutive
 * months and wrapping over the new year:
 *   [3,4,5,9,10,11]        -> "March-May, September-November"
 *   [1,2,3,4,10,11,12]     -> "October-April"
 *   all twelve             -> "Year-Round"
 * Returns undefined when there is nothing usable, so the caller keeps the
 * static label.
 */
export function formatSeasons(
  months: readonly number[],
  style: 'long' | 'short',
): string | undefined {
  const valid = [...new Set(months)]
    .filter((month) => Number.isInteger(month) && month >= 1 && month <= 12)
    .sort((a, b) => a - b);

  if (valid.length === 0) return undefined;
  if (valid.length === 12) return 'Year-Round';

  const runs: [number, number][] = [];
  for (const month of valid) {
    const last = runs[runs.length - 1];
    if (last && month === last[1] + 1) last[1] = month;
    else runs.push([month, month]);
  }

  // A run ending in December joins a run starting in January: Oct-Dec plus
  // Jan-Apr reads as one Oct-Apr season, and it is listed where it starts.
  const first = runs[0];
  const last = runs[runs.length - 1];
  if (runs.length > 1 && first[0] === 1 && last[1] === 12) {
    runs.shift();
    last[1] = first[1];
  }

  const names = style === 'long' ? MONTHS_LONG : MONTHS_SHORT;
  return runs
    .map(([start, end]) =>
      start === end
        ? names[start - 1]
        : `${names[start - 1]}-${names[end - 1]}`,
    )
    .join(', ');
}

// --- structural sharing -----------------------------------------------------

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return isRecord(value) && Object.getPrototypeOf(value) === Object.prototype;
}

/**
 * Returns `previous` wherever `next` holds the same data, at every depth. A
 * merged record that changes nothing is therefore the static record itself,
 * and one that changes a single field keeps every other branch's identity, so
 * memoised children (map markers in particular) do not rebuild. A key holding
 * `undefined` or `null` counts as absent: the static data writes a missing
 * stat as `null`, the backend simply omits it.
 */
export function shareEqual<T>(previous: T, next: T): T;
export function shareEqual(previous: unknown, next: unknown): unknown {
  if (previous === next) return previous;

  if (Array.isArray(previous) && Array.isArray(next)) {
    const shared = next.map((item, index) => shareEqual(previous[index], item));
    const unchanged =
      previous.length === next.length &&
      shared.every((item, index) => item === previous[index]);
    return unchanged ? previous : shared;
  }

  if (isPlainObject(previous) && isPlainObject(next)) {
    const definedKeys = (record: Record<string, unknown>) =>
      Object.keys(record).filter(
        (key) => record[key] !== undefined && record[key] !== null,
      );

    const nextKeys = definedKeys(next);
    const shared: Record<string, unknown> = {};
    let unchanged = definedKeys(previous).length === nextKeys.length;

    for (const key of nextKeys) {
      shared[key] = shareEqual(previous[key], next[key]);
      if (shared[key] !== previous[key]) unchanged = false;
    }

    return unchanged ? previous : shared;
  }

  return next;
}
