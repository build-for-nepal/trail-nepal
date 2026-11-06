import type {
  CreateExperienceInput,
  ImageInput,
} from '../../modules/experience/internal/experience.write.validator.js';

import type { HikeTripFacts } from '../trek/trekTypes.js';

export type { CreateExperienceInput, ImageInput };
export type { HikeTripFacts } from '../trek/trekTypes.js';

export interface HikeExpectation {
  title: string;
  description: string;
}

export interface HikeSeasonalCondition {
  month: string;
  condition: string;
}

export interface HikeGearItem {
  item: string;
  weight: string;
  quantity?: number;
}

export interface HikeGearChecklist {
  essentials: HikeGearItem[];
  optional?: HikeGearItem[];
}

export type HikeDetailData =
  | HikeTripFacts
  | HikeExpectation[]
  | HikeSeasonalCondition[]
  | HikeGearChecklist;

export interface HikeDetailRow {
  key: string;
  title?: string;
  description?: string;
  content?: string;
  data?: HikeDetailData;
}

export type HikeRouteRole = 'start' | 'turnaround' | 'finish';

// A hike route is a set of ordered sections rather than days, so the same
// sections are stored as timeline items with the distance/time marks kept in
// `data`. Coordinates are [longitude, latitude] (GeoJSON order).
export interface HikeRouteItemData {
  distance?: string;
  duration?: string;
  terrain?: string;
  role?: HikeRouteRole;
  description: string;
  isDestination?: boolean;
  coordinates?: [number, number];
}

export interface HikeRouteItem {
  order?: number;
  title?: string;
  data?: HikeRouteItemData;
}

export interface HikeTimeline {
  title?: string;
  description?: string;
  items: HikeRouteItem[];
}

export type HikeExperience = Omit<
  CreateExperienceInput,
  'details' | 'images' | 'timeline'
> & {
  details: HikeDetailRow[];
  images: ImageInput[];
  timeline?: HikeTimeline | null;
};
