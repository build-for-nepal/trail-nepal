import type { Prisma } from '../../../generated/prisma/client.js';
import type { ListExperienceQuery } from './experience.validator.js';

// ----------------------------------
// selects

// The list payload for explore, search and the planner's candidate pool. Stays
// flat and cheap; detail content lives behind the other endpoint.
// createdAt/updatedAt are deliberately absent, so they never leave the server.
export const listSelect = {
  id: true,
  slug: true,
  name: true,
  type: true,
  shortDescription: true,
  durationDays: true,
  minDays: true,
  maxDays: true,
  difficulty: true,
  difficultyScore: true,
  thumbnail: true,
  maxElevationM: true,
  peakSeason: true,
  priceNpr: true,
  region: true,
  startPoint: true,
  interest: true,
  activity: true,
  isPopular: true,
  ratingAvg: true,
} satisfies Prisma.ExperienceSelect;

const detailRowSelect = {
  id: true,
  key: true,
  title: true,
  description: true,
  imageUrl: true,
  content: true,
  data: true,
} satisfies Prisma.ExperienceDetailSelect;

// Spreads listSelect so the shared columns are written once.
export const detailSelect = {
  ...listSelect,

  details: { select: detailRowSelect },

  timeline: {
    select: {
      id: true,
      title: true,
      description: true,
      information: true,
      items: {
        select: {
          id: true,
          order: true,
          dayNumber: true,
          title: true,
          data: true,
        },
        orderBy: [{ order: 'asc' }, { dayNumber: 'asc' }],
      },
    },
  },

  images: {
    select: {
      id: true,
      url: true,
      alt: true,
      type: true,
    },
  },

  route: {
    select: {
      geojson: true,
      startCoords: true,
      endCoords: true,
      distanceKm: true,
      maxElevationM: true,
      ascentM: true,
      descentM: true,
    },
  },
} satisfies Prisma.ExperienceSelect;

// A raw row as the list query returns it, before mapping.
export type ExperienceRow = Prisma.ExperienceGetPayload<{
  select: typeof listSelect;
}>;

// A single experience_detail row as the detail query returns it.
export type DetailRow = Prisma.ExperienceDetailGetPayload<{
  select: typeof detailRowSelect;
}>;

// ----------------------------------
// query

export function buildExperienceWhere(
  query: ListExperienceQuery,
): Prisma.ExperienceWhereInput {
  const conditions: Prisma.ExperienceWhereInput[] = [
    // Unconditional: drafts and inactive rows never appear in a public listing.
    { status: 'PUBLISHED' },
    { isActive: true },
  ];

  if (query.type) conditions.push({ type: query.type });

  if (query.region) conditions.push({ region: query.region });

  if (query.difficulty) conditions.push({ difficulty: query.difficulty });

  if (query.isPopular !== undefined) {
    conditions.push({ isPopular: query.isPopular });
  }

  if (query.maxDurationDays !== undefined) {
    // Fits only if its *shortest* length fits. A null minDays means a
    // fixed-length trip, so it falls back to durationDays rather than being excluded.
    conditions.push({
      OR: [
        { minDays: { lte: query.maxDurationDays } },
        { minDays: null, durationDays: { lte: query.maxDurationDays } },
      ],
    });
  }

  if (query.maxElevationM !== undefined) {
    // Nulls are kept: an unknown altitude is not an unacceptable one, and
    // dropping them would hide most hikes and cultural tours from this filter.
    conditions.push({
      OR: [
        { maxElevationM: { lte: query.maxElevationM } },
        { maxElevationM: null },
      ],
    });
  }

  if (query.search) {
    const term = query.search;
    conditions.push({
      OR: [
        { name: { contains: term, mode: 'insensitive' } },
        { shortDescription: { contains: term, mode: 'insensitive' } },
        // interest/activity are exact-match arrays, so `has` needs the same
        // lowercasing the seed data uses. Substring matching needs raw SQL.
        { interest: { has: term.toLowerCase() } },
        { activity: { has: term.toLowerCase() } },
      ],
    });
  }

  return { AND: conditions };
}
