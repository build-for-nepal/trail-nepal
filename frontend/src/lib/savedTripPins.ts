import { CULTURAL_TOUR_DETAILS } from '@/static/culturalTours';
import { HIKE_DETAILS } from '@/static/hikeDetails';
import { TRAILS } from '@/static/trek';
import { TREK_DETAILS } from '@/static/trekDetails';

/** `[lat, lng]`, as stored in the static data. */
export type TrailPins = Record<string, [number, number]>;

/**
 * One representative `[lat, lng]` per trail id: the first itinerary point that
 * has coordinates. Read from the detail records, which are large, so this runs
 * on the server (at build time) and only the resulting pins reach the client.
 */
export function buildTrailPins(): TrailPins {
  const pins: TrailPins = {};

  for (const { id } of TRAILS) {
    const coordinates =
      TREK_DETAILS[id]?.timeline.find((day) => day.coordinates)?.coordinates ??
      HIKE_DETAILS[id]?.route.find((section) => section.coordinates)
        ?.coordinates ??
      CULTURAL_TOUR_DETAILS[id]?.sites.find((site) => site.coordinates)
        ?.coordinates;

    if (coordinates) pins[id] = coordinates;
  }

  return pins;
}
