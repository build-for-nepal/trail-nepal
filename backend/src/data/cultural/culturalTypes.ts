import type {
  CreateExperienceInput,
  ImageInput,
} from '../../modules/experience/internal/experience.write.validator.js';

import type { CulturalTripFacts } from '../trek/trekTypes.js';

export type { CreateExperienceInput, ImageInput };
export type { CulturalTripFacts } from '../trek/trekTypes.js';

// Shared by `expectations` and `beforeYouGo`, which have the same shape.
export interface CulturalTextItem {
  title: string;
  description: string;
}

export interface CulturalSeasonalCondition {
  month: string;
  condition: string;
}

export interface CulturalGearItem {
  item: string;
  weight: string;
  quantity?: number;
}

export interface CulturalGearChecklist {
  essentials: CulturalGearItem[];
  optional?: CulturalGearItem[];
}

// Mapped sites carry [longitude, latitude] (GeoJSON order); the frontend stores
// them as [lat, lng].
export interface CulturalSite {
  order: number;
  name: string;
  coordinates: [number, number];
  description: string;
  tooltip?: string;
  openHours?: string;
  entryInfo?: string;
  isHighlight?: boolean;
  dayId?: string;
}

export interface CulturalEntryFee {
  site: string;
  foreign: string;
  saarc: string;
}

export interface CulturalEntryFees {
  intro: string;
  rows: CulturalEntryFee[];
  disclaimer: string;
}

export type CulturalDetailData =
  | CulturalTripFacts
  | CulturalTextItem[]
  | CulturalSeasonalCondition[]
  | CulturalGearChecklist
  | CulturalSite[]
  | CulturalEntryFees;

export interface CulturalDetailRow {
  key: string;
  title?: string;
  description?: string;
  content?: string;
  data?: CulturalDetailData;
}

// The frontend itinerary day maps 1:1 onto a timeline item. Coordinates are
// [longitude, latitude].
export interface CulturalTimelineItemData {
  description: string;
  transport?: string;
  highlights?: string[];
  dayId?: string;
  color?: string;
  coordinates?: [number, number];
}

export interface CulturalTimelineItem {
  order?: number;
  dayNumber?: number;
  title?: string;
  data?: CulturalTimelineItemData;
}

export interface CulturalTimeline {
  title?: string;
  description?: string;
  items: CulturalTimelineItem[];
}

export type CulturalExperience = Omit<
  CreateExperienceInput,
  'details' | 'images' | 'timeline'
> & {
  details: CulturalDetailRow[];
  images: ImageInput[];
  timeline?: CulturalTimeline | null;
};
