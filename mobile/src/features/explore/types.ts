import type { ImageRequireSource } from 'react-native';

export type Difficulty = 'easy' | 'moderate' | 'challenging';

/** The web's TrailType values. */
export type TripType = 'trek' | 'hike' | 'cultural';

/** One trek, day hike or cultural tour, with the fields its card shows. */
export type Trip = {
  id: string;
  title: string;
  type: TripType;
  region: string;
  days: number;
  /** Metres, at the trip's highest point. */
  maxAltitudeM: number;
  difficulty: Difficulty;
  description: string;
  /** e.g. 'Mar-May, Sep-Nov' or 'Year-Round'. */
  season: string;
  /** A photo bundled with require(). */
  image: ImageRequireSource;
};

export type DurationBucket = '0-3' | '3-5' | '5-10' | '10-15' | '15+';

export type FilterSectionId =
  'difficulty' | 'duration' | 'region' | 'elevation';

export type TrekFilters = {
  difficulty: Difficulty[];
  duration: DurationBucket[];
  regions: string[];
  /** Metres. Equal to ELEVATION_MAX means no elevation limit. */
  maxElevation: number;
};

/** One applied value, shown as a removable chip in FilterBar. */
export type AppliedFilter =
  | { section: 'difficulty'; value: Difficulty }
  | { section: 'duration'; value: DurationBucket }
  | { section: 'region'; value: string }
  | { section: 'elevation'; value: number };
