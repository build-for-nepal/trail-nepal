import type { ElevationPoint, LngLat } from '../types';
import { metersBetween } from './markers';

export type ElevationStats = {
  km: number;
  minM: number;
  maxM: number;
  /** Every climb added up, in metres. */
  ascentM: number;
  /** Every descent added up, in metres. */
  descentM: number;
};

/**
 * The elevation panel's numbers, worked out as the web's ElevationProfile does: distance is
 * the last point's, and ascent and descent add up every rise and fall in the full series.
 */
export function elevationStats(
  points: ElevationPoint[],
): ElevationStats | null {
  if (points.length === 0) return null;
  let minM = Infinity;
  let maxM = -Infinity;
  let ascent = 0;
  let descent = 0;
  points.forEach((point, i) => {
    minM = Math.min(minM, point.e);
    maxM = Math.max(maxM, point.e);
    if (i === 0) return;
    const change = point.e - points[i - 1].e;
    if (change > 0) ascent += change;
    else descent -= change;
  });
  return {
    km: points[points.length - 1].d,
    minM,
    maxM,
    ascentM: Math.round(ascent),
    descentM: Math.round(descent),
  };
}

/** The position in the series closest to a point, e.g. where a day's stop falls on the chart. */
export function nearestPointIndex(
  points: ElevationPoint[],
  lngLat: LngLat,
): number | null {
  let best: number | null = null;
  let bestM = Infinity;
  for (let i = 0; i < points.length; i++) {
    const m = metersBetween([points[i].lng, points[i].lat], lngLat);
    if (m < bestM) {
      bestM = m;
      best = i;
    }
  }
  return best;
}
