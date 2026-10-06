import { z } from 'zod';
import { Prisma } from '../../../generated/prisma/client.js';
import {
  Difficulty,
  ExperienceRegion,
  ExperienceType,
} from '../../../generated/prisma/enums.js';

const SORTABLE_COLUMNS = [
  'createdAt',
  'durationDays',
  'difficultyScore',
  'maxElevationM',
  'priceNpr',
  'ratingAvg',
] as const satisfies readonly (keyof Prisma.ExperienceOrderByWithRelationInput)[];

// Defaults rather than optional: the service needs real numbers for skip/totalPages.
const paginationShape = {
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
};

// `?isPopular=false` arrives as the truthy string "false", so a plain boolean
// schema would reject it. Anything but true/false is a 422, not a silent false.
const booleanParam = z
  .enum(['true', 'false'])
  .transform((value) => value === 'true');

export const listExperienceQuerySchema = z.object({
  ...paginationShape,

  // Prisma enum objects go into z.enum directly so a new member widens this
  // schema with no edit here.
  type: z.enum(ExperienceType).optional(),
  region: z.enum(ExperienceRegion).optional(),
  difficulty: z.enum(Difficulty).optional(),

  isPopular: booleanParam.optional(),

  maxDurationDays: z.coerce.number().int().min(1).optional(),
  maxElevationM: z.coerce.number().int().min(0).optional(),

  search: z.string().trim().min(2).max(100).optional(),

  sortBy: z.enum(SORTABLE_COLUMNS).default('createdAt'),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
});

export const getExperienceParamsSchema = z.object({
  slug: z
    .string()
    .min(2)
    .max(120)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message: 'Slug must be lowercase words separated by single hyphens',
    }),
});

export type ListExperienceQuery = z.infer<typeof listExperienceQuerySchema>;
export type GetExperienceParams = z.infer<typeof getExperienceParamsSchema>;
