import { TRAILS } from '@/static/trek';

const TRAILS_BY_ID = new Map(TRAILS.map((trail) => [trail.id, trail]));

export const MAX_TRIP_NAME_LENGTH = 80;

/**
 * Name for a trip the traveller hasn't named, built from what it recommends:
 * "7-Day Annapurna Base Camp Trek", "5-Day EBC Trek & Heritage Tour",
 * "5-Day EBC Trek, Heritage Tour & 1 more".
 */
export function defaultTripName(trailIds: string[], totalDays: number): string {
  const titles = trailIds.flatMap((id) => TRAILS_BY_ID.get(id)?.title ?? []);
  const days = `${totalDays}-Day`;

  if (titles.length === 0) return `${days} Trip`;
  if (titles.length === 1) return `${days} ${titles[0]}`;
  if (titles.length === 2) return `${days} ${titles[0]} & ${titles[1]}`;

  const more = titles.length - 2;
  return `${days} ${titles[0]}, ${titles[1]} & ${more} more`;
}
