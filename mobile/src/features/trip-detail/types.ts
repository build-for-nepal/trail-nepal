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

type DetailBase = {
  name: string;
  region: string;
  meta: DetailMeta;
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

/** One itinerary day, with only the fields the trip facts are worked out from. */
export type TrekDay = {
  title: string;
  /** e.g. '3-4 hours', '8-10 hrs drive' or '35-min flight'. */
  duration?: string;
};

export type TrekDetail = DetailBase & {
  type: 'trek';
  tripFacts: TrekTripFacts;
  itinerary: TrekDay[];
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

export type HikeDetail = DetailBase & {
  type: 'hike';
  tripFacts: HikeTripFacts;
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

export type CulturalTourDetail = DetailBase & {
  type: 'cultural';
  tripFacts: CulturalTripFacts;
};

export type TripDetail = TrekDetail | HikeDetail | CulturalTourDetail;
