import type { GearChecklist, TrekImage } from '@/types/trek';

export interface CulturalSite {
  order: number;
  name: string;
  coordinates: [number, number]; // [lat, lng] stored
  description: string;
  /** One short line for the map hover tooltip. The full `description` is too
   *  long to read on hover; falls back to it when absent. */
  tooltip?: string;
  openHours?: string;
  entryInfo?: string;
  isHighlight?: boolean;
  dayId?: string; // itinerary day that covers this site
}

export interface CulturalTourDay {
  day: string;
  id: string;
  title: string;
  description: string;
  transport: string;
  color: string; // marker/pin color shared with the map
  highlights: string[];
  coordinates?: [number, number]; // [lat, lng] stored
}

/**
 * Trip facts are authored per tour and differ between them: a single-destination
 * tour lists `destination` + `keyAreas`, while a city-hopping tour lists `cities`
 * instead. Only `start`, `tourType`, `transport` and `terrain` are common to
 * every tour, so the location fields are optional and the renderer drops the
 * ones a tour does not supply.
 */
export interface CulturalTripFacts {
  start: string;
  destination?: string;
  cities?: string;
  keyAreas?: string;
  tourType: string;
  transport: string;
  terrain: string;
}

/** One row of a tour's entry fee table. Amounts are pre-formatted strings
 *  ("NPR 1,000") because they are quoted from the operator's published rates
 *  rather than computed. */
export interface CulturalEntryFee {
  site: string;
  foreign: string;
  saarc: string;
}

/**
 * Published entrance fees for the sites on a tour. Optional on the tour: some
 * tours (a hill town with no ticketed monuments) have nothing to list.
 */
export interface CulturalEntryFees {
  intro: string;
  rows: CulturalEntryFee[];
  /** Rates change; this is the "verify before you go" caveat shown in italics. */
  disclaimer: string;
}

export interface CulturalMeta {
  duration: string;
  difficulty: string;
  maxElevation: string;
  bestSeasons: string;
  startingPoint: string;
  tripFacts: CulturalTripFacts;
}

export interface CulturalTourDetail {
  id: string;
  name: string;
  region: string;
  meta: CulturalMeta;
  overview: string;
  summary: string;
  sites: CulturalSite[]; // ordered highlight sites; replaces trek `timeline`/hike `route`
  /** Fixed zoom for the map's opening view, instead of a fit over the site
   *  bounds. Set this only when a tour needs a guaranteed scale: a fit is
   *  viewport-dependent, so the same tour opens at a different zoom (and a
   *  different scale-bar reading) on mobile and desktop. See
   *  `CulturalMapClient`'s initial-framing effect. */
  mapOverviewZoom?: number;
  itinerary: CulturalTourDay[]; // day-by-day plan with transport + highlights
  entryFees?: CulturalEntryFees;
  expectations: { title: string; description: string }[];
  seasonalPlanning: { month: string; condition: string }[];
  beforeYouGo: { title: string; description: string }[];
  gallery: TrekImage[];
  gearChecklist: GearChecklist;
}
