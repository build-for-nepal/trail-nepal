import { z } from 'zod';
import {
  Difficulty,
  ExperienceRegion,
  ExperienceStatus,
  ExperienceType,
  ImageType,
} from '../../../generated/prisma/enums.js';

type Declared<T> = { [K in keyof T]: Exclude<T[K], undefined> };

const tagsSchema = z
  .array(z.string().min(1).max(50))
  .max(50)
  .transform((values) => values.map((value) => value.trim().toLowerCase()))
  .refine((values) => values.every((value) => value.length > 0), {
    message: 'Tags cannot be empty',
  });

// Months 1-12, deduped and sorted so the array has one canonical form.
const peakSeasonSchema = z
  .array(z.number().int().min(1).max(12))
  .max(12)
  .transform((months) => Array.from(new Set(months)).sort((a, b) => a - b));

// Section rows. `key` identifies the section the frontend renders it as.
const detailInputSchema = z.object({
  key: z.string().min(1).max(100),
  title: z.string().max(300).nullish(),
  description: z.string().max(5000).nullish(),
  imageUrl: z.string().max(2048).nullish(),
  content: z.string().max(200_000).nullish(),
  // Json column: `null` clears it, anything else is stored as-is.
  data: z.any().optional(),
});

const detailsSchema = z
  .array(detailInputSchema)
  .max(50)
  .refine(
    (items) => new Set(items.map((item) => item.key)).size === items.length,
    { message: 'Detail keys must be unique' },
  );

const timelineItemInputSchema = z.object({
  order: z.number().int().nullish(),
  dayNumber: z.number().int().min(1).nullish(),
  title: z.string().max(300).nullish(),
  data: z.any().optional(),
});

const timelineInputSchema = z.object({
  title: z.string().max(300).nullish(),
  description: z.string().max(5000).nullish(),
  information: z.any().optional(),
  items: z.array(timelineItemInputSchema).max(400).default([]),
});

const imageInputSchema = z.object({
  url: z.string().max(2048).nullish(),
  storageKey: z.string().max(512).nullish(),
  alt: z.string().max(300).nullish(),
  type: z.enum(ImageType).default('GALLERY'),
  metadata: z.any().optional(),
});

// [longitude, latitude] - GeoJSON order, not lat/lng.
const coordsSchema = z.tuple([
  z.number().min(-180).max(180),
  z.number().min(-90).max(90),
]);

const routeInputSchema = z.object({
  geojson: z.any().optional(),
  startCoords: coordsSchema,
  endCoords: coordsSchema,
  distanceKm: z.number().min(0).max(99_999.99).nullish(),
  maxElevationM: z.number().int().min(0).nullish(),
  ascentM: z.number().int().min(0).nullish(),
  descentM: z.number().int().min(0).nullish(),
  routeDifficulty: z.enum(Difficulty).nullish(),
  source: z.string().max(200).nullish(),
});

// Every scalar on Experience. Create fills in the missing defaults; PATCH runs
// the same shape through .partial() so an omitted key means "leave it alone".
const experienceScalarShape = {
  slug: z
    .string()
    .min(1)
    .max(160)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message: 'Slug must be lowercase words separated by single hyphens',
    }),
  name: z.string().min(1).max(200),
  type: z.enum(ExperienceType),

  status: z.enum(ExperienceStatus).default('PUBLISHED'),

  shortDescription: z.string().min(1).max(2000),

  durationDays: z.number().int().min(1).max(365),
  minDays: z.number().int().min(1).max(365).nullish(),
  maxDays: z.number().int().min(1).max(365).nullish(),

  difficulty: z.enum(Difficulty),
  difficultyScore: z.number().int().min(0).max(10).nullish(),
  thumbnail: z.string().max(2048).nullish(),

  maxElevationM: z.number().int().min(0).nullish(),
  peakSeason: peakSeasonSchema,
  priceNpr: z.number().int().min(0).nullish(),

  region: z.enum(ExperienceRegion),
  startPoint: z.string().max(300).nullish(),

  interest: tagsSchema,
  activity: tagsSchema,

  isPopular: z.boolean(),
  ratingAvg: z.number().min(0).max(5).nullish(),
  isActive: z.boolean(),
};

export const createExperienceSchema = z.object({
  ...experienceScalarShape,
  peakSeason: experienceScalarShape.peakSeason.default([]),
  interest: experienceScalarShape.interest.default([]),
  activity: experienceScalarShape.activity.default([]),
  isPopular: experienceScalarShape.isPopular.default(false),
  isActive: experienceScalarShape.isActive.default(true),

  details: detailsSchema.default([]),
  images: z.array(imageInputSchema).max(200).default([]),
  timeline: timelineInputSchema.nullish(),
  route: routeInputSchema.nullish(),
});

export const updateExperienceSchema = z
  .object({
    ...experienceScalarShape,
    details: detailsSchema.optional(),
    images: z.array(imageInputSchema).max(200).optional(),
    timeline: timelineInputSchema.nullish(),
    route: routeInputSchema.nullish(),
  })
  .partial()
  .refine((body) => Object.keys(body).length > 0, {
    message: 'Provide at least one field to update',
  });

export type DetailInput = Declared<z.infer<typeof detailInputSchema>>;
export type TimelineItemInput = Declared<
  z.infer<typeof timelineItemInputSchema>
>;
export type ImageInput = Declared<z.infer<typeof imageInputSchema>>;
export type RouteInput = Declared<z.infer<typeof routeInputSchema>>;
export type TimelineInput = Declared<
  Omit<z.infer<typeof timelineInputSchema>, 'items'>
> & { items: TimelineItemInput[] };

type ChildKeys = 'details' | 'images' | 'timeline' | 'route';

export type CreateExperienceInput = Omit<
  Declared<z.infer<typeof createExperienceSchema>>,
  ChildKeys
> & {
  details: DetailInput[];
  images: ImageInput[];
  timeline?: TimelineInput | null;
  route?: RouteInput | null;
};

export type UpdateExperienceInput = Omit<
  Declared<z.infer<typeof updateExperienceSchema>>,
  ChildKeys
> & {
  details?: DetailInput[];
  images?: ImageInput[];
  timeline?: TimelineInput | null;
  route?: RouteInput | null;
};
