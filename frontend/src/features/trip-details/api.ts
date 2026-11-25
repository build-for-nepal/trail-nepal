// Public, read-only calls to the experiences API. Type-only imports from the
// admin folder are erased at build time, so none of the admin form code (zod,
// react-hook-form) reaches the public bundle.

import type {
  DifficultyValue,
  ExperienceRegionValue,
} from '@/components/admin/admin-helper';
import type {
  ApiExperience,
  ApiPage,
} from '@/components/admin/api/experiences.types';
import { apiRequest } from '@/lib/api/client';

export type { ApiExperience };

// One row of GET /api/experiences: the main table plus the two display labels
// the backend derives. `type` is a plain string because the backend enum also
// holds SIGHTSEEING and ACTIVITY, which the site does not render yet.
export type ApiExperienceListItem = {
  id: string;
  slug: string;
  name: string;
  type: string;
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
  durationLabel: string;
  elevationLabel: string | null;
};

const BASE = '/api/experiences';
// The backend caps `limit` at 100.
const PAGE_SIZE = 100;

// The site addresses trips by slug (it is the route segment), not by id.
export function getExperienceBySlug(slug: string): Promise<ApiExperience> {
  return apiRequest<ApiExperience>(`${BASE}/slug/${encodeURIComponent(slug)}`);
}

// Walks every page so a long list is never silently truncated.
export async function listAllExperiences(): Promise<ApiExperienceListItem[]> {
  const items: ApiExperienceListItem[] = [];
  for (let page = 1; ; page++) {
    const result = await apiRequest<ApiPage<ApiExperienceListItem>>(
      `${BASE}?page=${page}&limit=${PAGE_SIZE}&sortBy=createdAt&sortOrder=desc`,
    );
    items.push(...result.items);
    if (!result.pagination.hasMore) return items;
  }
}
