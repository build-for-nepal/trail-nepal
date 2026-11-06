import type { TrekExperience } from './trek/trekTypes.js';
import { TREK_DATA } from './trek/trekData.js';

import type { HikeExperience } from './hike/hikeTypes.js';
import { HIKE_DATA } from './hike/hikeData.js';

import type { CulturalExperience } from './cultural/culturalTypes.js';
import { CULTURAL_DATA } from './cultural/culturalData.js';

export type {
  CreateExperienceInput,
  TrekExperience,
  TrekDetailData,
  TrekDetailRow,
  TrekGearChecklist,
  TrekGearItem,
  TrekExpectation,
  TrekSeasonalCondition,
  TrekTimeline,
  TrekTimelineItem,
  TrekTimelineItemData,
  TrekTripFacts,
  HikeTripFacts,
  CulturalTripFacts,
  TripFacts,
} from './trek/trekTypes.js';

export type {
  HikeExperience,
  HikeDetailData,
  HikeDetailRow,
  HikeExpectation,
  HikeSeasonalCondition,
  HikeGearChecklist,
  HikeGearItem,
  HikeRouteItem,
  HikeRouteItemData,
  HikeRouteRole,
  HikeTimeline,
} from './hike/hikeTypes.js';

export type {
  CulturalExperience,
  CulturalDetailData,
  CulturalDetailRow,
  CulturalEntryFee,
  CulturalEntryFees,
  CulturalGearChecklist,
  CulturalGearItem,
  CulturalSeasonalCondition,
  CulturalSite,
  CulturalTextItem,
  CulturalTimeline,
  CulturalTimelineItem,
  CulturalTimelineItemData,
} from './cultural/culturalTypes.js';

export type { ImageInput } from './trek/trekTypes.js';

// Union of every per-trip-type payload.
export type ExperiencePayload =
  TrekExperience | HikeExperience | CulturalExperience;

export const EXPERIENCE_DATA: Record<string, ExperiencePayload> = {
  ...TREK_DATA,
  ...HIKE_DATA,
  ...CULTURAL_DATA,
};
