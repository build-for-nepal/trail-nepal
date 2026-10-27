/** [lng, lat]: the order GeoJSON and MapLibre use. Trip data stores [lat, lng]. */
export type LngLat = [number, number];

/** One point of a route's elevation series, as the web's elevation files store it. */
export type ElevationPoint = {
  /** Distance along the route, in km. */
  d: number;
  /** Height, in metres. */
  e: number;
  lat: number;
  lng: number;
};

export type RouteData = {
  /** The trail from its first point to its last. */
  line: LngLat[];
  /** The same trail with heights, for the elevation chart. */
  profile: ElevationPoint[];
};

/** An itinerary entry as the map sees it: a trek day or a hike section. */
export type MapStop = {
  /** Shown on its pin, e.g. '01'. */
  label: string;
  title: string;
  /** [lat, lng], as trip data stores it. */
  coordinates?: [number, number];
  isDestination?: boolean;
};

/** A pin: a trek day or hike section, or several at one spot, or one of a tour's sites. */
export type MapPin = {
  key: string;
  lngLat: LngLat;
  /** On a day pin, e.g. '04' or '02–03'. Site pins show none, as on the web. */
  label: string;
  color: string;
  /** What TalkBack reads, e.g. 'Day 04, Trek to Namche Bazaar'. */
  description: string;
  /** The itinerary entries it marks, by position. */
  days: number[];
};

/** One itinerary entry on the map. */
export type MapDay = {
  /** What the map frames to show it. */
  points: LngLat[];
  /** The keys of the pins that light up for it. */
  pins: string[];
  /** For an entry no pin marks, like a day on the way back: a pin drawn while it is shown. */
  pin?: MapPin;
};

/** Everything one trip's map shows. */
export type TrailMapData = {
  /** A trek or hike follows a trail; a tour visits sites. They frame a day differently. */
  kind: 'trail' | 'sites';
  /** Empty for a tour. */
  line: LngLat[];
  pins: MapPin[];
  /** What the opening view frames. */
  overview: LngLat[];
  /** A fixed opening zoom, for a tour that a fitted view would show too close. */
  overviewZoom?: number;
  maxZoom: number;
  /** In itinerary order. Null for an entry with no place on the map. */
  days: (MapDay | null)[];
  /** Where the destination flag stands. A tour has none. */
  flag?: LngLat;
  /** The journey to the trailhead, drawn as dashed arcs with a plane or vehicle on each. */
  access?: AccessLeg[];
};

/**
 * Which itinerary entry the map shows, as the web's DayFocus. `nonce` changes with every
 * request, so asking for the same entry again still moves the map.
 */
export type DayFocus = { index: number; nonce: number };

/** How much of the map's top and bottom other views cover, in points. */
export type MapInsets = { top: number; bottom: number };

export type AccessMode = 'flight' | 'jeep' | 'bus';

/** How a trek reaches its trailhead, drawn as an arc (flight) or a curve (road). */
export type AccessRoute = {
  mode: AccessMode;
  /** coordinates are [lat, lng]. */
  from: { name: string; coordinates: [number, number] };
  to: { name: string; coordinates: [number, number] };
  /** The second leg of a two-leg journey. */
  continuation?: AccessRoute;
};

/** One stretch of the journey to the trailhead, ready to draw. */
export type AccessLeg = {
  mode: AccessMode;
  /** [lng, lat] along the arc or curve. */
  path: LngLat[];
  /** Where the plane or vehicle icon goes: the middle of the path. */
  middle: LngLat;
  /** Which way the icon faces, in compass degrees. */
  bearing: number;
};
