import type { AccessLeg, AccessRoute, LngLat } from '../types';

// The web's shapes, from frontend/src/hooks/useMapFeatures.ts (useAccessRoute). Points come
// in as trip data's [lat, lng] and go out as [lng, lat].

/** A flight: a curve whose middle is pushed north, so it reads as an arc. */
export function flightArc(
  from: [number, number],
  to: [number, number],
  steps = 50,
): LngLat[] {
  const [lat1, lng1] = from;
  const [lat2, lng2] = to;
  const length = Math.sqrt((lat2 - lat1) ** 2 + (lng2 - lng1) ** 2);
  const controlLat = (lat1 + lat2) / 2 + length * 0.28;
  const controlLng = (lng1 + lng2) / 2;
  return quadratic([lng1, lat1], [controlLng, controlLat], [lng2, lat2], steps);
}

/** A road: a gentle sideways bend, so it is not drawn as a straight line. */
export function roadCurve(
  from: [number, number],
  to: [number, number],
  steps = 40,
): LngLat[] {
  const [lat1, lng1] = from;
  const [lat2, lng2] = to;
  const dLat = lat2 - lat1;
  const dLng = lng2 - lng1;
  const length = Math.sqrt(dLat ** 2 + dLng ** 2);
  const offset = length * 0.14;
  const controlLat = (lat1 + lat2) / 2 + (dLng / length) * offset;
  const controlLng = (lng1 + lng2) / 2 + (-dLat / length) * offset;
  return quadratic([lng1, lat1], [controlLng, controlLat], [lng2, lat2], steps);
}

function quadratic(
  start: LngLat,
  control: LngLat,
  end: LngLat,
  steps: number,
): LngLat[] {
  const points: LngLat[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const u = 1 - t;
    points.push([
      u * u * start[0] + 2 * u * t * control[0] + t * t * end[0],
      u * u * start[1] + 2 * u * t * control[1] + t * t * end[1],
    ]);
  }
  return points;
}

/** Compass bearing from one [lat, lng] point to another, 0 to 360 degrees. */
export function bearing(from: [number, number], to: [number, number]): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const lat1 = toRad(from[0]);
  const lat2 = toRad(to[0]);
  const dLng = toRad(to[1] - from[1]);
  const y = Math.sin(dLng) * Math.cos(lat2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
  return ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
}

/** The journey to the trailhead, one leg per stretch, as the web draws it. */
export function accessLegs(route: AccessRoute): AccessLeg[] {
  const legs = route.continuation ? [route, route.continuation] : [route];
  return legs.map(({ mode, from, to }) => {
    const path =
      mode === 'flight'
        ? flightArc(from.coordinates, to.coordinates)
        : roadCurve(from.coordinates, to.coordinates);
    return {
      mode,
      path,
      middle: path[Math.floor(path.length / 2)],
      bearing: bearing(from.coordinates, to.coordinates),
    };
  });
}
