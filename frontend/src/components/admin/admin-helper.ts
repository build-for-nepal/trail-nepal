import { z } from 'zod';

export type TripTypeId = 'trek' | 'hike' | 'cultural';

export type ExperienceTypeValue = 'TREK' | 'HIKE' | 'CULTURAL';
export type ExperienceStatusValue = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
export type DifficultyValue =
  | 'EASY'
  | 'EASY_MODERATE'
  | 'MODERATE'
  | 'MODERATE_CHALLENGING'
  | 'CHALLENGING';
export type ImageTypeValue = 'HERO' | 'GALLERY' | 'SECTION';

// Mirror of the backend ExperienceRegion enum (prisma). "Khumbu" is intentionally
// mixed-case - it exists verbatim in the enum and in the staged trek data.
export type ExperienceRegionValue =
  | 'EVEREST'
  | 'ANNAPURNA'
  | 'LANGTANG'
  | 'MANASLU'
  | 'KATHMANDU_VALLEY'
  | 'POKHARA'
  | 'LUMBINI'
  | 'Khumbu';

export type AdminDetailRow = {
  key: string;
  title: string;
  description: string;
  imageUrl: string;
  content: string;
  // Structured value edited with DataField; sent to the backend as-is.
  data?: unknown;
};

export type AdminImageRow = {
  url: string;
  storageKey: string;
  alt: string;
  type: ImageTypeValue;
  metadata?: unknown;
};

export type AdminTimelineItem = {
  order: string;
  dayNumber: string;
  title: string;
  data?: unknown;
};

export type AdminRoute = {
  startLng: string;
  startLat: string;
  endLng: string;
  endLat: string;
  distanceKm: string;
  maxElevationM: string;
  ascentM: string;
  descentM: string;
  // '' = leave the stored value alone (the API does not return it).
  routeDifficulty: DifficultyValue | '';
  source: string;
  // Parsed GeoJSON object, set by the GeoJSON file picker.
  geojson?: unknown;
};

// A row of the admin list, mapped from GET /api/experiences.
export type AdminListItem = {
  id: string;
  slug: string;
  name: string;
  type: ExperienceTypeValue;
  status: ExperienceStatusValue;
  region?: ExperienceRegionValue;
};

export type ExperienceTypeConfig = {
  id: TripTypeId;
  label: string;
  typeValue: ExperienceTypeValue;
  regions: ExperienceRegionValue[];
  defaultRegion: ExperienceRegionValue;
  difficultyOptions: DifficultyValue[];
  interestSuggestions: string[];
  activitySuggestions: string[];
  exampleSlug: string;
};

export type ExperienceTypeConfigMap = Record<TripTypeId, ExperienceTypeConfig>;

export const EXPERIENCE_TYPES: TripTypeId[] = ['trek', 'hike', 'cultural'];

// Single admin accent theme. Swap these to re-skin the whole admin panel.
export const ACCENT_BTN = 'bg-emerald-600 text-white hover:bg-emerald-700';
export const ACCENT_ACTIVE =
  'border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700';
export const ACCENT_OUTLINE =
  'border-emerald-600/60 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800';
export const ACCENT_BACK =
  'text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800';
export const ACCENT_SWITCH = 'data-checked:bg-emerald-600 cursor-pointer';

// Status pills — deliberately light so they don't read as near-black.
export const STATUS_BADGE: Record<ExperienceStatusValue, string> = {
  PUBLISHED: 'border-transparent bg-emerald-100 text-emerald-700',
  DRAFT: 'border-transparent bg-neutral-100 text-neutral-600',
  ARCHIVED: 'border-transparent bg-amber-100 text-amber-700',
};

export function typeIdFromValue(value: ExperienceTypeValue): TripTypeId {
  if (value === 'HIKE') return 'hike';
  if (value === 'CULTURAL') return 'cultural';
  return 'trek';
}

export function isTripTypeId(
  value: string | null | undefined,
): value is TripTypeId {
  return value === 'trek' || value === 'hike' || value === 'cultural';
}

// Soft focus ring used by the field components. Overrides the default grayish
// ring the shared inputs ship with. Tracks the admin accent.
export const FIELD_FOCUS =
  'focus-visible:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-600/25 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20';

export const STATUS_OPTIONS: {
  value: ExperienceStatusValue;
  label: string;
}[] = [
  { value: 'DRAFT', label: 'Draft' },
  { value: 'PUBLISHED', label: 'Published' },
  { value: 'ARCHIVED', label: 'Archived' },
];

export const DIFFICULTY_OPTIONS: {
  value: DifficultyValue;
  label: string;
}[] = [
  { value: 'EASY', label: 'Easy' },
  { value: 'EASY_MODERATE', label: 'Easy – Moderate' },
  { value: 'MODERATE', label: 'Moderate' },
  { value: 'MODERATE_CHALLENGING', label: 'Moderate – Challenging' },
  { value: 'CHALLENGING', label: 'Challenging' },
];

export const REGION_LABELS: Record<ExperienceRegionValue, string> = {
  EVEREST: 'Everest',
  ANNAPURNA: 'Annapurna',
  LANGTANG: 'Langtang',
  MANASLU: 'Manaslu',
  KATHMANDU_VALLEY: 'Kathmandu Valley',
  POKHARA: 'Pokhara',
  LUMBINI: 'Lumbini',
  Khumbu: 'Khumbu',
};

export const REGION_OPTIONS = (
  Object.keys(REGION_LABELS) as ExperienceRegionValue[]
).map((value) => ({ value, label: REGION_LABELS[value] }));

export const IMAGE_TYPE_LABELS: Record<ImageTypeValue, string> = {
  HERO: 'Hero',
  GALLERY: 'Gallery',
  SECTION: 'Section',
};

export const IMAGE_TYPE_OPTIONS = (
  Object.keys(IMAGE_TYPE_LABELS) as ImageTypeValue[]
).map((value) => ({ value, label: IMAGE_TYPE_LABELS[value] }));

export const MONTH_LABELS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const DEFAULT_DIFFICULTY: DifficultyValue = 'MODERATE';

export const DEFAULT_STATUS: ExperienceStatusValue = 'PUBLISHED';

export const TYPE_CONFIG: ExperienceTypeConfigMap = {
  trek: {
    id: 'trek',
    label: 'Trek',
    typeValue: 'TREK',
    regions: ['EVEREST', 'ANNAPURNA', 'LANGTANG', 'MANASLU', 'Khumbu'],
    defaultRegion: 'EVEREST',
    difficultyOptions: DIFFICULTY_OPTIONS.map((d) => d.value),
    interestSuggestions: [
      'nature',
      'mountains',
      'culture',
      'photography',
      'wildlife',
      'local-life',
    ],
    activitySuggestions: ['trekking', 'hiking', 'sightseeing', 'camping'],
    exampleSlug: 'everest-base-camp',
  },
  hike: {
    id: 'hike',
    label: 'Hike',
    typeValue: 'HIKE',
    regions: ['ANNAPURNA', 'POKHARA', 'KATHMANDU_VALLEY'],
    defaultRegion: 'POKHARA',
    difficultyOptions: ['EASY', 'EASY_MODERATE', 'MODERATE'],
    interestSuggestions: [
      'nature',
      'photography',
      'villages',
      'local-life',
      'sunrise',
    ],
    activitySuggestions: ['hiking', 'sightseeing', 'photography'],
    exampleSlug: 'pam-phunam',
  },
  cultural: {
    id: 'cultural',
    label: 'Cultural',
    typeValue: 'CULTURAL',
    regions: ['KATHMANDU_VALLEY', 'POKHARA', 'LUMBINI', 'LANGTANG'],
    defaultRegion: 'KATHMANDU_VALLEY',
    difficultyOptions: ['EASY', 'EASY_MODERATE'],
    interestSuggestions: [
      'culture',
      'heritage',
      'monasteries',
      'history',
      'local-life',
    ],
    activitySuggestions: ['sightseeing', 'heritage', 'monastery-visit'],
    exampleSlug: 'kathmandu-heritage',
  },
};

// ---------------------------------------------------------------------------
// Form schema + payload builder
// ---------------------------------------------------------------------------

// Numeric fields live in the form as strings (input[type=number] values).
// The schema validates them as strings; the payload builders coerce.

const numericString = (meta: {
  integer?: boolean;
  min?: number;
  max?: number;
  required?: boolean;
}) => {
  if (meta.required) {
    return z.string().superRefine((v, ctx) => {
      if (v.trim() === '') {
        ctx.addIssue({ code: 'custom', message: 'This field is required' });
        return;
      }
      if (!isValidNumber(v, meta)) {
        ctx.addIssue({ code: 'custom', message: mismatchMessage(meta) });
      }
    });
  }
  return z
    .string()
    .refine((v) => v.trim() === '' || isValidNumber(v, meta), {
      message: mismatchMessage(meta),
    })
    .optional();
};

function isValidNumber(
  v: string,
  meta: { integer?: boolean; min?: number; max?: number },
): boolean {
  const n = Number(v);
  if (!Number.isFinite(n)) return false;
  if (meta.integer && !Number.isInteger(n)) return false;
  if (meta.min != null && n < meta.min) return false;
  if (meta.max != null && n > meta.max) return false;
  return true;
}

function mismatchMessage(meta: {
  integer?: boolean;
  min?: number;
  max?: number;
}): string {
  const parts: string[] = [];
  if (meta.integer) parts.push('whole number');
  if (meta.min != null) parts.push(`min ${meta.min}`);
  if (meta.max != null) parts.push(`max ${meta.max}`);
  return parts.length ? `Must be a ${parts.join(', ')}` : 'Must be a number';
}

// Structured `data` values are edited with DataField, so JSON is never typed.
// The only thing left to guard is a field with no name.
function hasBlankFieldName(value: unknown): boolean {
  if (Array.isArray(value)) return value.some(hasBlankFieldName);
  if (value && typeof value === 'object') {
    return Object.entries(value).some(
      ([key, inner]) => key.trim() === '' || hasBlankFieldName(inner),
    );
  }
  return false;
}

const dataSchema = z
  .unknown()
  .refine((value) => !hasBlankFieldName(value), {
    message: 'Every field needs a name',
  })
  .optional();

const DIFFICULTY_VALUES = [
  'EASY',
  'EASY_MODERATE',
  'MODERATE',
  'MODERATE_CHALLENGING',
  'CHALLENGING',
] as const;

export const routeDefault: AdminRoute = {
  startLng: '',
  startLat: '',
  endLng: '',
  endLat: '',
  distanceKm: '',
  maxElevationM: '',
  ascentM: '',
  descentM: '',
  routeDifficulty: 'MODERATE',
  source: '',
  geojson: undefined,
};

const detailRowSchema = z.object({
  key: z.string().trim().min(1, 'Key is required').max(100),
  title: z.string().max(300).optional(),
  description: z.string().max(5000).optional(),
  imageUrl: z.string().max(2048).optional(),
  content: z.string().max(200_000).optional(),
  data: dataSchema,
});

const imageRowSchema = z.object({
  url: z.string().max(2048).optional(),
  storageKey: z.string().max(512).optional(),
  alt: z.string().max(300).optional(),
  type: z.enum(['HERO', 'GALLERY', 'SECTION']),
  metadata: dataSchema,
});

const timelineItemSchema = z.object({
  order: numericString({ integer: true }),
  dayNumber: numericString({ integer: true, min: 1 }),
  title: z.string().max(300).optional(),
  data: dataSchema,
});

const timelineSchema = z.object({
  title: z.string().max(300).optional(),
  description: z.string().max(5000).optional(),
  items: z.array(timelineItemSchema).max(400),
});

// Start and end are required by the API as soon as a route exists.
const routeSchema = z.object({
  startLng: numericString({ min: -180, max: 180, required: true }),
  startLat: numericString({ min: -90, max: 90, required: true }),
  endLng: numericString({ min: -180, max: 180, required: true }),
  endLat: numericString({ min: -90, max: 90, required: true }),
  distanceKm: numericString({ min: 0, max: 99_999.99 }),
  maxElevationM: numericString({ integer: true, min: 0 }),
  ascentM: numericString({ integer: true, min: 0 }),
  descentM: numericString({ integer: true, min: 0 }),
  routeDifficulty: z.union([z.enum(DIFFICULTY_VALUES), z.literal('')]),
  source: z.string().max(200).optional(),
  geojson: z
    .unknown()
    .optional()
    .superRefine((value, ctx) => {
      if (
        value !== undefined &&
        !(typeof value === 'object' && value !== null && 'type' in value)
      ) {
        ctx.addIssue({ code: 'custom', message: 'Must be a GeoJSON object' });
      }
    }),
});

export const adminExperienceSchema = z
  .object({
    slug: z
      .string()
      .min(1, 'Slug is required')
      .max(160)
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'Slug must be lowercase words separated by single hyphens',
      }),
    name: z.string().trim().min(1, 'Name is required').max(200),
    type: z.enum(['TREK', 'HIKE', 'CULTURAL']),
    status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']),
    shortDescription: z
      .string()
      .trim()
      .min(1, 'Short description is required')
      .max(2000),

    durationDays: numericString({
      integer: true,
      min: 1,
      max: 365,
      required: true,
    }),
    minDays: numericString({ integer: true, min: 1, max: 365 }),
    maxDays: numericString({ integer: true, min: 1, max: 365 }),

    difficulty: z.enum(DIFFICULTY_VALUES),
    difficultyScore: numericString({ integer: true, min: 0, max: 10 }),
    thumbnail: z.string().max(2048).optional(),

    maxElevationM: numericString({ integer: true, min: 0 }),
    peakSeason: z.array(z.number().int().min(1).max(12)).max(12),
    priceNpr: numericString({ integer: true, min: 0 }),

    region: z.enum([
      'EVEREST',
      'ANNAPURNA',
      'LANGTANG',
      'MANASLU',
      'KATHMANDU_VALLEY',
      'POKHARA',
      'LUMBINI',
      'Khumbu',
    ]),
    startPoint: z.string().max(300).optional(),

    interest: z.array(z.string().min(1).max(50)).max(50),
    activity: z.array(z.string().min(1).max(50)).max(50),

    isPopular: z.boolean(),
    isActive: z.boolean(),

    details: z.array(detailRowSchema).max(50),
    images: z.array(imageRowSchema).max(200),
    timeline: timelineSchema,
    route: routeSchema.nullable(),
  })
  .superRefine((values, ctx) => {
    // The API stores one row per key, so a repeated key would overwrite.
    const seen = new Set<string>();
    values.details.forEach((row, index) => {
      const key = row.key.trim();
      if (key && seen.has(key)) {
        ctx.addIssue({
          code: 'custom',
          path: ['details', index, 'key'],
          message: 'Detail keys must be unique',
        });
      }
      seen.add(key);
    });
  });

export type AdminFormValues = z.infer<typeof adminExperienceSchema>;

export function buildDefaultValues(
  config: ExperienceTypeConfig,
  initial?: Partial<AdminFormValues>,
): AdminFormValues {
  const base: AdminFormValues = {
    slug: '',
    name: '',
    type: config.typeValue,
    status: DEFAULT_STATUS,
    shortDescription: '',

    durationDays: '',
    minDays: '',
    maxDays: '',

    difficulty: DEFAULT_DIFFICULTY,
    difficultyScore: '',
    thumbnail: '',

    maxElevationM: '',
    peakSeason: [],
    priceNpr: '',

    region: config.defaultRegion,
    startPoint: '',

    interest: [],
    activity: [],

    isPopular: false,
    isActive: true,

    details: [],
    images: [],
    timeline: {
      title: '',
      description: '',
      items: [],
    },
    route: null,
  };
  if (!initial) return base;
  return {
    ...base,
    ...initial,
    timeline: { ...base.timeline, ...(initial.timeline ?? {}) },
    route: initial.route ?? base.route,
  };
}

// ---------------------------------------------------------------------------
// Payload builders (form values -> POST / PATCH body)
// ---------------------------------------------------------------------------

function toNumber(value: string | undefined): number | undefined {
  if (value == null || value.trim() === '') return undefined;
  const n = Number(value);
  return Number.isFinite(n) ? n : undefined;
}

// '' / undefined -> omit on create, null on update (so a cleared input clears
// the stored value instead of being ignored).
function blank<T>(value: T | undefined, mode: 'create' | 'update') {
  return value === undefined ? (mode === 'update' ? null : undefined) : value;
}

function toText(value: string | undefined): string | undefined {
  return value == null || value.trim() === '' ? undefined : value.trim();
}

function toRoutePayload(route: z.infer<typeof routeSchema>) {
  const coords = (lng?: string, lat?: string): [number, number] => [
    Number(lng),
    Number(lat),
  ];
  return {
    startCoords: coords(route.startLng, route.startLat),
    endCoords: coords(route.endLng, route.endLat),
    distanceKm: toNumber(route.distanceKm),
    maxElevationM: toNumber(route.maxElevationM),
    ascentM: toNumber(route.ascentM),
    descentM: toNumber(route.descentM),
    routeDifficulty: route.routeDifficulty || undefined,
    source: toText(route.source),
    geojson: route.geojson ?? undefined,
  };
}

function scalarPayload(
  values: z.infer<typeof adminExperienceSchema>,
  mode: 'create' | 'update',
) {
  return {
    slug: values.slug,
    name: values.name.trim(),
    type: values.type,
    status: values.status,
    shortDescription: values.shortDescription.trim(),
    durationDays: toNumber(values.durationDays),
    minDays: blank(toNumber(values.minDays), mode),
    maxDays: blank(toNumber(values.maxDays), mode),
    difficulty: values.difficulty,
    difficultyScore: blank(toNumber(values.difficultyScore), mode),
    thumbnail: blank(toText(values.thumbnail), mode),
    maxElevationM: blank(toNumber(values.maxElevationM), mode),
    peakSeason: Array.from(new Set(values.peakSeason)).sort((a, b) => a - b),
    priceNpr: blank(toNumber(values.priceNpr), mode),
    region: values.region,
    startPoint: blank(toText(values.startPoint), mode),
    interest: values.interest.map((i) => i.toLowerCase().trim()),
    activity: values.activity.map((a) => a.toLowerCase().trim()),
    isPopular: values.isPopular,
    isActive: values.isActive,
  };
}

function detailsPayload(values: z.infer<typeof adminExperienceSchema>) {
  return values.details.map((d) => ({
    key: d.key.trim(),
    title: toText(d.title),
    description: toText(d.description),
    imageUrl: toText(d.imageUrl),
    content: d.content ? d.content : undefined,
    data: d.data ?? undefined,
  }));
}

function imagesPayload(values: z.infer<typeof adminExperienceSchema>) {
  return values.images
    .filter((img) => toText(img.url) || toText(img.storageKey))
    .map((img) => ({
      url: toText(img.url),
      storageKey: toText(img.storageKey),
      alt: toText(img.alt),
      type: img.type,
      metadata: img.metadata ?? undefined,
    }));
}

function hasTimeline(values: z.infer<typeof adminExperienceSchema>) {
  const t = values.timeline;
  return !!(toText(t.title) || toText(t.description) || t.items.length > 0);
}

function timelinePayload(values: z.infer<typeof adminExperienceSchema>) {
  const t = values.timeline;
  return {
    title: toText(t.title),
    description: toText(t.description),
    items: t.items.map((item, index) => ({
      order: toNumber(item.order) ?? index + 1,
      dayNumber: toNumber(item.dayNumber),
      title: toText(item.title),
      data: item.data ?? undefined,
    })),
  };
}

export function buildCreatePayload(values: AdminFormValues) {
  const parsed = adminExperienceSchema.parse(values);
  return {
    ...scalarPayload(parsed, 'create'),
    details: detailsPayload(parsed),
    images: imagesPayload(parsed),
    timeline: hasTimeline(parsed) ? timelinePayload(parsed) : undefined,
    route: parsed.route ? toRoutePayload(parsed.route) : undefined,
  };
}

function same(a: unknown, b: unknown): boolean {
  return JSON.stringify(a ?? null) === JSON.stringify(b ?? null);
}

// PATCH body: only what changed, because the API treats an omitted key as
// "leave it alone". That also protects fields the GET endpoint does not
// return (image storage key / metadata, route difficulty / source), which
// would otherwise be wiped by re-sending an incomplete copy.
// Returns null when nothing changed.
export function buildUpdatePayload(
  values: AdminFormValues,
  baseline: AdminFormValues,
): Record<string, unknown> | null {
  const next = adminExperienceSchema.parse(values);
  const prev = adminExperienceSchema.parse(baseline);

  const nextScalars = scalarPayload(next, 'update') as Record<string, unknown>;
  const prevScalars = scalarPayload(prev, 'update') as Record<string, unknown>;

  const body: Record<string, unknown> = {};
  for (const key of Object.keys(nextScalars)) {
    if (!same(nextScalars[key], prevScalars[key])) body[key] = nextScalars[key];
  }

  if (!same(next.details, prev.details)) body.details = detailsPayload(next);
  if (!same(next.images, prev.images)) body.images = imagesPayload(next);
  if (!same(next.timeline, prev.timeline)) {
    body.timeline = hasTimeline(next) ? timelinePayload(next) : null;
  }
  if (!same(next.route, prev.route)) {
    body.route = next.route ? toRoutePayload(next.route) : null;
  }

  return Object.keys(body).length > 0 ? body : null;
}
