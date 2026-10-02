export type Difficulty = 'easy' | 'moderate' | 'challenging';

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
