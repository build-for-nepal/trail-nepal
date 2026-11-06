import type { LngLat, MapStop } from '../types';

// The web's rules, from frontend/src/hooks/useMapFeatures.ts (useTrekMarkers, useTrailEndFlag).

/** A trail whose ends are this close is a loop that returns to its trailhead. */
const LOOP_GAP_M = 200;
/** On a loop, a stop this close to the trail is on it; farther off, it is a transport day. */
const ON_TRAIL_M = 500;
/** On a loop, stops this close share one pin. */
const SAME_SPOT_M = 150;

/** Great-circle distance between two [lng, lat] points, in metres. */
export function metersBetween(a: LngLat, b: LngLat): number {
  const R = 6371000;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b[1] - a[1]);
  const dLng = toRad(b[0] - a[0]);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a[1])) * Math.cos(toRad(b[1])) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

/** Trip data's [lat, lng] as the map's [lng, lat]. */
export const toLngLat = ([lat, lng]: [number, number]): LngLat => [lng, lat];

export function isLoop(line: LngLat[]): boolean {
  return (
    line.length >= 2 &&
    metersBetween(line[0], line[line.length - 1]) < LOOP_GAP_M
  );
}

function isOnTrail(point: LngLat, line: LngLat[]): boolean {
  return line.some((vertex) => metersBetween(point, vertex) < ON_TRAIL_M);
}

export type PinGroup = {
  lngLat: LngLat;
  /** '04', or '02–03' for days that share the spot. */
  label: string;
  /** Positions in the stops list, in order. */
  stops: number[];
};

/**
 * The pins to draw, one per spot, as the web draws them. Out-and-back and one-way trails
 * pin their outbound days, up to and including the destination: the way back passes the
 * same places, and the drive home sits far off the trail, so those days have no pin. A
 * loop's way back is a different path, so it pins every stop on the trail instead.
 */
export function pinGroups(stops: MapStop[], line: LngLat[]): PinGroup[] {
  const loop = isLoop(line);
  const destination = stops.findIndex((stop) => stop.isDestination);

  const groups: { lngLat: LngLat; stops: number[] }[] = [];
  const byKey = new Map<string, { lngLat: LngLat; stops: number[] }>();

  stops.forEach((stop, index) => {
    if (!stop.coordinates) return;
    const lngLat = toLngLat(stop.coordinates);

    if (loop) {
      if (!isOnTrail(lngLat, line)) return;
      const near = groups.find(
        (group) => metersBetween(group.lngLat, lngLat) < SAME_SPOT_M,
      );
      if (near) near.stops.push(index);
      else groups.push({ lngLat, stops: [index] });
      return;
    }

    if (destination >= 0 && index > destination) return;
    // Same spot to 4 decimal places, about 11 m.
    const [lat, lng] = stop.coordinates;
    const key = `${lat.toFixed(4)},${lng.toFixed(4)}`;
    const group = byKey.get(key);
    if (group) {
      group.stops.push(index);
    } else {
      const created = { lngLat, stops: [index] };
      byKey.set(key, created);
      groups.push(created);
    }
  });

  return groups.map((group) => {
    const first = stops[group.stops[0]].label;
    const last = stops[group.stops[group.stops.length - 1]].label;
    return {
      ...group,
      label: group.stops.length > 1 ? `${first}–${last}` : first,
    };
  });
}

/** The pin that marks a stop. Undefined for a stop the map doesn't pin. */
export function pinFor(groups: PinGroup[], stop: number): PinGroup | undefined {
  return groups.find((group) => group.stops.includes(stop));
}

/**
 * Where the destination flag goes: the trail's last point, its first for a trail traced
 * from the far end, or a loop's destination stop, since a loop's last point is its start.
 */
export function flagPosition(
  stops: MapStop[],
  line: LngLat[],
  flagAtStart = false,
): LngLat | null {
  if (line.length === 0) return null;
  const destination = stops.find((stop) => stop.isDestination)?.coordinates;
  if (isLoop(line) && destination) return toLngLat(destination);
  return flagAtStart ? line[0] : line[line.length - 1];
}
