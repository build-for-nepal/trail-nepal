import type { AccessRoute, TrekTimelineDay } from '@/types/trek';

export type LayerKey = 'satellite' | 'terrain' | 'topo';

export type GeoJSONData = GeoJSON.FeatureCollection<
  GeoJSON.LineString | GeoJSON.MultiLineString | GeoJSON.Point
>;

/**
 * A request to center/zoom the map onto a specific itinerary day.
 * `nonce` bumps on every request so re-selecting the same day still re-triggers
 * the fly-to (object identity changes even when `index` is unchanged).
 */
export interface DayFocus {
  index: number;
  nonce: number;
}

/**
 * A request to frame the map around every site belonging to one itinerary day.
 * Cultural tours focus a whole day rather than a single waypoint, so the map
 * fits bounds over `indices` (positions into the `sites` array) instead of
 * easing to one point. `nonce` bumps per request for the same reason as
 * {@link DayFocus}. An empty `indices` array is a no-op.
 */
export interface SiteGroupFocus {
  indices: number[];
  nonce: number;
}

export interface MapClientProps {
  data: GeoJSONData | null;
  center: [number, number];
  /** Route id used to fetch the elevation series (`/data/elevation/{id}-elevation.json`). */
  geojsonId?: string;
  /** Marker/day data driving the on-map waypoints (trek days or hike sections). */
  waypoints?: TrekTimelineDay[];
  /** Optional access-route arc/curve (flight or road leg) to draw. */
  accessRoute?: AccessRoute;
  /** Plant the destination flag at the trail's first node (reverse-traced routes). */
  flagAtStart?: boolean;
  onDayClick?: (index: number) => void;
  focus?: DayFocus | null;
}

export interface TrekkingMapProps {
  /** Route id used to fetch geojson + elevation and to apply per-route data fixes. */
  geojsonId?: string;
  /** Marker/day data driving the on-map waypoints (trek days or hike sections). */
  waypoints?: TrekTimelineDay[];
  accessRoute?: AccessRoute;
  flagAtStart?: boolean;
  onDayClick?: (index: number) => void;
  focus?: DayFocus | null;
}

export interface LayerSwitcherProps {
  activeLayer: LayerKey;
  onChange: (key: LayerKey) => void;
  className?: string;
}
