import type {
  DifficultyValue,
  ExperienceRegionValue,
  ExperienceTypeValue,
  ImageTypeValue,
} from '../admin-helper';

// Response shapes of GET /api/experiences and GET /api/experiences/:id.
// Note what the backend does NOT return: status, isActive, image storageKey /
// metadata, route difficulty / source. See experiences.mappers.ts.

export type ApiListItem = {
  id: string;
  slug: string;
  name: string;
  type: ExperienceTypeValue;
  region: ExperienceRegionValue;
};

export type ApiPage<T> = {
  items: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasMore: boolean;
  };
};

export type ApiDetailRow = {
  id: string;
  key: string;
  title: string | null;
  description: string | null;
  imageUrl: string | null;
  content: string | null;
  data: unknown;
};

export type ApiTimelineItem = {
  id: string;
  order: number | null;
  dayNumber: number | null;
  title: string | null;
  data: unknown;
};

export type ApiExperience = {
  id: string;
  slug: string;
  name: string;
  type: ExperienceTypeValue;
  shortDescription: string;
  durationDays: number;
  minDays: number | null;
  maxDays: number | null;
  difficulty: DifficultyValue;
  difficultyScore: number | null;
  thumbnail: string | null;
  maxElevationM: number | null;
  peakSeason: number[];
  priceNpr: number | null;
  region: ExperienceRegionValue;
  startPoint: string | null;
  interest: string[];
  activity: string[];
  isPopular: boolean;
  details: ApiDetailRow[];
  // A relation list on the Prisma model, so it arrives as an array holding at
  // most one timeline.
  timeline: {
    id: string;
    title: string | null;
    description: string | null;
    information: unknown;
    items: ApiTimelineItem[];
  }[];
  images: {
    id: string;
    url: string | null;
    alt: string | null;
    type: ImageTypeValue;
  }[];
  route: {
    geojson: unknown;
    startCoords: number[];
    endCoords: number[];
    distanceKm: string | null;
    maxElevationM: number | null;
    ascentM: number | null;
    descentM: number | null;
  } | null;
};
