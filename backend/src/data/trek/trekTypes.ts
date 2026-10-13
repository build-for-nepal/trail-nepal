import type {
  CreateExperienceInput,
  ImageInput,
} from '../../modules/experience/internal/experience.write.validator.js';

export type { CreateExperienceInput, ImageInput };

export interface TrekTripFacts {
  type: 'TREK';
  flights?: string;
  accommodation?: string;
  routeType?: string;
  permits?: string;
}

export interface TrekExpectation {
  title: string;
  description: string;
}

export interface TrekSeasonalCondition {
  month: string;
  condition: string;
}

export interface TrekGearItem {
  item: string;
  weight: string;
  quantity?: number;
}

export interface TrekGearChecklist {
  essentials: TrekGearItem[];
  optional?: TrekGearItem[];
}

export type TrekDetailData =
  | TrekTripFacts
  | TrekExpectation[]
  | TrekSeasonalCondition[]
  | TrekGearChecklist;

export interface TrekDetailRow {
  key: string;
  title?: string;
  description?: string;
  content?: string;
  data?: TrekDetailData;
}

export interface TrekTimelineItemData {
  altitude?: string;
  duration?: string;
  distance?: string;
  note?: string;
  description: string;
  price?: string;
  isDestination?: boolean;
  coordinates?: [number, number];
}

export interface TrekTimelineItem {
  order?: number;
  dayNumber?: number;
  title?: string;
  data?: TrekTimelineItemData;
}

export interface TrekTimeline {
  title?: string;
  description?: string;
  items: TrekTimelineItem[];
}

export type TrekExperience = Omit<
  CreateExperienceInput,
  'details' | 'images' | 'timeline'
> & {
  details: TrekDetailRow[];
  images: ImageInput[];
  timeline?: TrekTimeline | null;
};

export interface HikeTripFacts {
  type: 'HIKE';
  start?: string;
  finish?: string;
  distance?: string;
  walkingTime?: string;
  routeType?: string;
  elevationChange?: string;
  direction?: string;
  terrain?: string;
}

export interface CulturalTripFacts {
  type: 'CULTURAL';
  start?: string;
  destination?: string;
  cities?: string;
  keyAreas?: string;
  tourType?: string;
  transport?: string;
  terrain?: string;
}

export type TripFacts = TrekTripFacts | HikeTripFacts | CulturalTripFacts;
