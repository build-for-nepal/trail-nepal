import type { CulturalTourDetail } from '@/types/cultural';

export interface CraftLink {
  label: string;
  url: string;
}

/** One session a workshop provider offers. Prices are deliberately left out:
 *  the operator's figures are indicative and change with the provider. */
export interface CraftWorkshopOption {
  name: string;
  duration: string;
}

export interface CraftWorkshopOptions {
  intro: string;
  rows: CraftWorkshopOption[];
  additionalCosts?: { title: string; description: string }[];
}

/** A place card in the "nearby" or "alternatives" lists. */
export interface CraftPlace {
  order: number;
  title: string;
  description: string[];
  /** Short titled aside, e.g. an unverified "Workshop Availability" caveat. */
  note?: { title: string; description: string };
  reference?: CraftLink;
  mapUrl?: string;
}

/** Nearby places, listed under the itinerary beside the map. */
export interface CraftNearby {
  title: string;
  places: CraftPlace[];
}

export interface CraftPlaceSection extends CraftNearby {
  intro: string;
  /** Cards per row on large screens; 1 stacks them full-width. Defaults to 3. */
  columns?: 1 | 2 | 3;
}

// Arts & crafts workshops share the cultural tour shape, so they reuse the
// cultural page sections (header, trip facts, map, calendar, gallery), plus a
// few optional sections of their own.
export interface CraftTourDetail extends CulturalTourDetail {
  workshopOptions?: CraftWorkshopOptions;
  nearby?: CraftNearby;
  alternatives?: CraftPlaceSection;
  /** Shown under the season calendar. */
  bookingNote?: string;
}
