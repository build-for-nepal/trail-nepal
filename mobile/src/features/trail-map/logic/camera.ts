import {
  DAY_FOCUS_ZOOM_CEIL,
  DAY_FOCUS_ZOOM_STEP,
  MIN_ZOOM,
  SITES_FIT_MAX_ZOOM,
} from '../constants';
import type { LngLat, TrailMapData } from '../types';

// The web frames its maps with MapLibre's fitBounds, which on native can't be told how close
// it may zoom. So the views are worked out here, the way fitBounds works them out.

export type Size = { width: number; height: number };
export type CameraView = { center: LngLat; zoom: number };

/** MapLibre's world is 512 points wide at zoom 0, and twice as wide at each zoom after. */
const WORLD_SIZE = 512;

// Web Mercator, as fractions of the world from its west and north edges.
const mercatorX = (lng: number) => (lng + 180) / 360;
function mercatorY(lat: number) {
  const sin = Math.sin((lat * Math.PI) / 180);
  return 0.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI);
}
const lngAt = (x: number) => x * 360 - 180;
const latAt = (y: number) =>
  (Math.atan(Math.sinh(Math.PI * (1 - 2 * y))) * 180) / Math.PI;

/** [west, south, east, north] around every point. */
export function boundsOf(points: LngLat[]): [number, number, number, number] {
  let west = Infinity;
  let south = Infinity;
  let east = -Infinity;
  let north = -Infinity;
  for (const [lng, lat] of points) {
    west = Math.min(west, lng);
    south = Math.min(south, lat);
    east = Math.max(east, lng);
    north = Math.max(north, lat);
  }
  return [west, south, east, north];
}

/** Room kept around what a view frames, so pins at its edges stay whole. */
export function framePadding({ width, height }: Size): number {
  return Math.max(24, Math.round(Math.min(width, height) * 0.12));
}

/** The view that fits every point, zoomed in no closer than `maxZoom`. `points` can't be empty. */
export function fitView(
  points: LngLat[],
  size: Size,
  maxZoom: number,
): CameraView {
  const [west, south, east, north] = boundsOf(points);
  const left = mercatorX(west);
  const right = mercatorX(east);
  const top = mercatorY(north);
  const bottom = mercatorY(south);
  const padding = framePadding(size);
  // The zoom at which a span of the world fills the room for it. A single point has no span.
  const zoomFor = (room: number, span: number) =>
    span > 0 ? Math.log2(Math.max(room, 1) / (span * WORLD_SIZE)) : Infinity;
  return {
    center: [lngAt((left + right) / 2), latAt((top + bottom) / 2)],
    zoom: Math.max(
      MIN_ZOOM,
      Math.min(
        maxZoom,
        zoomFor(size.width - 2 * padding, right - left),
        zoomFor(size.height - 2 * padding, bottom - top),
      ),
    ),
  };
}

/**
 * The view that shows one itinerary entry, from a map at `zoom`, framed as the web frames
 * it: a trek day is centred with a small zoom nudge, a tour day fits its sites. Null for an
 * entry with no place on the map.
 */
export function dayView(
  data: TrailMapData,
  index: number,
  size: Size,
  zoom: number,
): CameraView | null {
  const day = data.days[index];
  if (!day) return null;
  if (data.kind === 'sites') {
    return fitView(day.points, size, SITES_FIT_MAX_ZOOM);
  }
  return {
    center: fitView(day.points, size, data.maxZoom).center,
    zoom: Math.max(
      zoom,
      Math.min(zoom + DAY_FOCUS_ZOOM_STEP, DAY_FOCUS_ZOOM_CEIL),
    ),
  };
}

/** Where the map opens: on one itinerary entry, or framing the whole trip. */
export function openingView(
  data: TrailMapData,
  size: Size,
  index?: number,
): CameraView {
  const overview: CameraView =
    data.overviewZoom !== undefined
      ? {
          center: fitView(data.overview, size, data.maxZoom).center,
          zoom: data.overviewZoom,
        }
      : fitView(
          data.overview,
          size,
          data.kind === 'sites' ? SITES_FIT_MAX_ZOOM : data.maxZoom,
        );
  const day =
    index === undefined ? null : dayView(data, index, size, overview.zoom);
  return day ?? overview;
}
