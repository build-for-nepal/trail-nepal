import type { TrekTimelineDay } from '@/types/trek';
import type { WeatherLocation } from '@/types/weather';

const MAX_STOPS = 8;

function coordKey(lat: number, lng: number): string {
  return `${lat.toFixed(3)},${lng.toFixed(3)}`;
}

function parseElevationM(elevation?: string): number | undefined {
  if (!elevation) return undefined;
  const match = elevation.replace(/,/g, '').match(/([\d.]+)\s*m/i);
  if (!match) return undefined;
  const value = Number(match[1]);
  return Number.isFinite(value) ? Math.round(value) : undefined;
}

function labelFromTitle(title: string): string {
  const parts = title.split(/\s+to\s+/i);
  const raw = parts.length > 1 ? parts[parts.length - 1]! : title;
  return raw
    .replace(/^(trek|hike|walk)\s+to\s+/i, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function curateStops(
  stops: WeatherLocation[],
  max: number,
): WeatherLocation[] {
  if (stops.length <= max) return stops;

  const first = stops[0]!;
  const last = stops[stops.length - 1]!;
  const highest = stops.reduce((best, stop) => {
    const bestElev = best.elevationM ?? 0;
    const stopElev = stop.elevationM ?? 0;
    return stopElev > bestElev ? stop : best;
  });

  const picked = new Map<string, WeatherLocation>();
  picked.set(first.id, first);
  picked.set(last.id, last);
  picked.set(highest.id, highest);

  const slotsLeft = max - picked.size;
  if (slotsLeft > 0) {
    const middle = stops.filter((stop) => !picked.has(stop.id));
    const step = middle.length / (slotsLeft + 1);

    for (let i = 1; i <= slotsLeft; i++) {
      const index = Math.min(middle.length - 1, Math.max(0, Math.floor(i * step) - 1));
      const stop = middle[index];
      if (stop) picked.set(stop.id, stop);
    }
  }

  return stops.filter((stop) => picked.has(stop.id));
}

export function getTrekWeatherLocations(
  timeline: TrekTimelineDay[],
): WeatherLocation[] {
  const seen = new Set<string>();
  const candidates: WeatherLocation[] = [];

  timeline.forEach((day, index) => {
    if (!day.coordinates) return;

    const [lat, lng] = day.coordinates;
    const id = coordKey(lat, lng);
    if (seen.has(id)) return;

    seen.add(id);
    candidates.push({
      id,
      label: labelFromTitle(day.title),
      lat,
      lng,
      elevationM: parseElevationM(day.stats?.elevation),
      dayIndex: index,
    });
  });

  return curateStops(candidates, MAX_STOPS);
}

export function getDefaultLocationId(locations: WeatherLocation[]): string {
  if (locations.length === 0) return '';

  const withElevation = locations.filter((loc) => loc.elevationM != null);
  if (withElevation.length > 0) {
    return withElevation.reduce((best, loc) =>
      (loc.elevationM ?? 0) > (best.elevationM ?? 0) ? loc : best,
    ).id;
  }

  return locations[locations.length - 1]!.id;
}
