import type { TrekExperience } from './trek/trekTypes.js';
import { TREK_DATA } from './trek/trekData.js';

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

export type { ImageInput } from './trek/trekTypes.js';

// Union of every per-trip-type payload.
export type ExperiencePayload = TrekExperience;

export const EXPERIENCE_DATA: Record<string, ExperiencePayload> = {
  ...TREK_DATA,
};
