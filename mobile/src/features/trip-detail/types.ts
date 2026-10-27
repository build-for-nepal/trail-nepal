import type { ImageRequireSource } from 'react-native';

export type SeasonMonth = {
  month: string;
  condition: string;
};

export type GalleryImage = {
  source: ImageRequireSource;
  alt: string;
};

/** The header stats, as the web writes them. */
export type DetailMeta = {
  duration: string;
  difficulty: string;
  maxElevation: string;
  /** e.g. 'March-May, September-November' or 'Year-Round'. */
  bestSeasons: string;
  startingPoint: string;
};

export type Expectation = {
  title: string;
  description: string;
};

export type GearItem = {
  name: string;
  /** The weight of one, so a row weighs grams × quantity. */
  grams: number;
  /** Only items with a quantity get a stepper. */
  quantity?: number;
};

/** The web's `essentials` and `optional`; the web shows `optional` as "Good to have". */
export type GearChecklist = {
  essential: GearItem[];
  goodToHave: GearItem[];
};

type DetailBase = {
  name: string;
  region: string;
  meta: DetailMeta;
  /** 12 entries, Jan–Dec, copied from the web's seasonalPlanning. */
  seasonalPlanning: SeasonMonth[];
  /** Paragraphs separated by a blank line. */
  overview: string;
  expectations: Expectation[];
};

export type TrekTripFacts = {
  /** 'None' when the trek has no flights. */
  flights: string;
  accommodation: string;
  routeType: string;
  permits: string;
};

export type TrekDayStats = {
  elevation?: string;
  duration?: string;
  distance?: string;
  note?: string;
};

export type TrekDay = {
  day?: string;
  title: string;
  /** e.g. '3-4 hours', '8-10 hrs drive' or '35-min flight'. Used by dailyWalkingHours(). */
  duration?: string;
  description?: string;
  stats?: TrekDayStats;
  price?: string;
  isDestination?: boolean;
  /** [lat, lng], the web's order: where the day's map pin goes. */
  coordinates?: [number, number];
};

export type TrekDetail = DetailBase & {
  type: 'trek';
  tripFacts: TrekTripFacts;
  itinerary: TrekDay[];
  gear: GearChecklist;
};

export type HikeTripFacts = {
  start: string;
  finish: string;
  distance: string;
  walkingTime: string;
  routeType: string;
  /** e.g. '~625 m descent' or '~1,250 m gain'. */
  elevationChange: string;
};

export type HikeRouteSection = {
  order: string;
  title: string;
  distanceMark?: string;
  timeMark?: string;
  role?: 'start' | 'turnaround' | 'finish';
  description?: string;
  terrain?: string;
  /** [lat, lng], the web's order: where the section's map pin goes. */
  coordinates?: [number, number];
};

export type HikeDetail = DetailBase & {
  type: 'hike';
  tripFacts: HikeTripFacts;
  route: HikeRouteSection[];
  gear: GearChecklist;
};

/** A single-destination tour has `destination` and `keyAreas`; a city-hopping one has `cities`. */
export type CulturalTripFacts = {
  start: string;
  destination?: string;
  cities?: string;
  keyAreas?: string;
  tourType: string;
  transport: string;
  terrain: string;
};

export type CulturalDay = {
  /** e.g. 'day-01'. Sites point at their day with it. */
  id: string;
  day: string;
  title: string;
  description: string;
  transport?: string;
  highlights: string[];
  /** The day's pin colour on the map. */
  color: string;
};

/** A place the tour visits, pinned on the map in its day's colour. */
export type CulturalSite = {
  order: number;
  name: string;
  /** [lat, lng], the web's order. */
  coordinates: [number, number];
  /** One short line for the site's map card. */
  tooltip: string;
  /** The `id` of the itinerary day that covers it. */
  dayId: string;
};

export type CulturalTourDetail = DetailBase & {
  type: 'cultural';
  tripFacts: CulturalTripFacts;
  itinerary: CulturalDay[];
  sites: CulturalSite[];
  /** The map's opening zoom, where fitting every site would zoom in too far. */
  mapOverviewZoom?: number;
};

export type TripDetail = TrekDetail | HikeDetail | CulturalTourDetail;

/** A place the 10-day forecast can be shown for. */
export type ForecastLocation = {
  label: string;
  /** [lat, lng], the web's order. */
  coordinates: [number, number];
  /** The place's own height. Without it, Open-Meteo uses its terrain model's. */
  elevationM?: number;
  /** The one shown first: a trek's highest stop, a hike's high point, a tour's main town. */
  isDefault?: true;
};

export type ForecastDay = {
  /** 'YYYY-MM-DD', Nepal time. */
  date: string;
  /** A WMO weather code. */
  weatherCode: number;
  maxC: number;
  minC: number;
  precipMm: number;
};

export type Forecast = {
  /** When the response arrived, in ms since the epoch. */
  fetchedAt: number;
  current: { tempC: number; weatherCode: number };
  /** Today first. */
  days: ForecastDay[];
};
