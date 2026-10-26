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
  | 'Khumbu';

export type AdminDetailRow = {
  key: string;
  title: string;
  description: string;
  imageUrl: string;
  content: string;
  data: string;
};

export type AdminImageRow = {
  url: string;
  storageKey: string;
  alt: string;
  type: ImageTypeValue;
  metadata: string;
};

export type AdminTimelineItem = {
  order: string;
  dayNumber: string;
  title: string;
  data: string;
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
  routeDifficulty: DifficultyValue;
  source: string;
  geojson: string;
};

// A row from the (not-yet-wired) list API. Enough to render the list and
// pre-fill the edit form until pagination/integration lands.
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
export const ACCENT_BTN =
  'bg-emerald-600 text-white hover:bg-emerald-700';
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

export const DEFAULT_STATUS: ExperienceStatusValue = 'DRAFT';

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
    regions: ['KATHMANDU_VALLEY', 'POKHARA', 'LANGTANG'],
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

// Placeholder rows for the admin list until the list API is wired
// (integration ticket with TanStack Query). Delete once live.
export const DEMO_EXPERIENCES: AdminListItem[] = [
  {
    id: 'demo-ebc',
    slug: 'everest-base-camp',
    name: 'Everest Base Camp Trek',
    type: 'TREK',
    status: 'PUBLISHED',
    region: 'Khumbu',
  },
  {
    id: 'demo-langtang',
    slug: 'langtang-valley',
    name: 'Langtang Valley Trek',
    type: 'TREK',
    status: 'DRAFT',
    region: 'LANGTANG',
  },
  {
    id: 'demo-pam',
    slug: 'pam-phunam',
    name: 'Pam Phunam Hike',
    type: 'HIKE',
    status: 'PUBLISHED',
    region: 'POKHARA',
  },
  {
    id: 'demo-heritage',
    slug: 'kathmandu-heritage',
    name: 'Kathmandu Heritage Tour',
    type: 'CULTURAL',
    status: 'DRAFT',
    region: 'KATHMANDU_VALLEY',
  },
];

// ---------------------------------------------------------------------------
// Form schema + payload builder
// ---------------------------------------------------------------------------

// Numeric fields live in the form as strings (input[type=number] values).
// The schema validates them as strings; buildCreatePayload() coerces.

const numericString = (meta: {
  integer?: boolean;
  min?: number;
  max?: number;
  required?: boolean;
}) => {
  if (meta.required) {
    return z.string().superRefine((v, ctx) => {
      if (v === '') {
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
    .refine((v) => v === '' || isValidNumber(v, meta), {
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

const jsonString = z
  .string()
  .optional()
  .refine((s) => s === undefined || s === '' || isValidJson(s), {
    message: 'Must be valid JSON (or leave empty)',
  });

function isValidJson(raw: string): boolean {
  try {
    JSON.parse(raw);
    return true;
  } catch {
    return false;
  }
}

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
  geojson: '',
};

const detailRowSchema = z.object({
  key: z.string().min(1).max(100),
  title: z.string().max(300).optional(),
  description: z.string().max(5000).optional(),
  imageUrl: z.string().max(2048).optional(),
  content: z.string().max(200_000).optional(),
  data: jsonString,
});

const imageRowSchema = z.object({
  url: z.string().max(2048).optional(),
  storageKey: z.string().max(512).optional(),
  alt: z.string().max(300).optional(),
  type: z.enum(['HERO', 'GALLERY', 'SECTION']),
  metadata: jsonString,
});

const timelineItemSchema = z.object({
  order: z.string().optional(),
  dayNumber: z.string().optional(),
  title: z.string().max(300).optional(),
  data: jsonString,
});

const timelineSchema = z.object({
  title: z.string().max(300).optional(),
  description: z.string().max(5000).optional(),
  items: z.array(timelineItemSchema),
});

const routeSchema = z.object({
  startLng: numericString({ min: -180, max: 180 }),
  startLat: numericString({ min: -90, max: 90 }),
  endLng: numericString({ min: -180, max: 180 }),
  endLat: numericString({ min: -90, max: 90 }),
  distanceKm: numericString({ min: 0, max: 99_999.99 }),
  maxElevationM: numericString({ integer: true, min: 0 }),
  ascentM: numericString({ integer: true, min: 0 }),
  descentM: numericString({ integer: true, min: 0 }),
  routeDifficulty: z.enum([
    'EASY',
    'EASY_MODERATE',
    'MODERATE',
    'MODERATE_CHALLENGING',
    'CHALLENGING',
  ]),
  source: z.string().max(200).optional(),
  geojson: jsonString,
});

export const adminExperienceSchema = z.object({
  slug: z
    .string()
    .min(1)
    .max(160)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message: 'Slug must be lowercase words separated by single hyphens',
    }),
  name: z.string().min(1).max(200),
  type: z.enum(['TREK', 'HIKE', 'CULTURAL']),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']),
  shortDescription: z.string().min(1).max(2000),

  durationDays: numericString({
    integer: true,
    min: 1,
    max: 365,
    required: true,
  }),
  minDays: numericString({ integer: true, min: 1, max: 365 }),
  maxDays: numericString({ integer: true, min: 1, max: 365 }),

  difficulty: z.enum([
    'EASY',
    'EASY_MODERATE',
    'MODERATE',
    'MODERATE_CHALLENGING',
    'CHALLENGING',
  ]),
  difficultyScore: numericString({ integer: true, min: 0, max: 10 }),
  thumbnail: z.string().max(2048).optional(),

  maxElevationM: numericString({ integer: true, min: 0 }),
  peakSeason: z.array(z.number().int().min(1).max(12)),
  priceNpr: numericString({ integer: true, min: 0 }),

  region: z.enum([
    'EVEREST',
    'ANNAPURNA',
    'LANGTANG',
    'MANASLU',
    'KATHMANDU_VALLEY',
    'POKHARA',
    'Khumbu',
  ]),
  startPoint: z.string().max(300).optional(),

  interest: z.array(z.string().min(1).max(50)),
  activity: z.array(z.string().min(1).max(50)),

  isPopular: z.boolean(),
  ratingAvg: numericString({ min: 0, max: 5 }),
  isActive: z.boolean(),

  details: z.array(detailRowSchema),
  images: z.array(imageRowSchema),
  timeline: timelineSchema,
  route: routeSchema.nullable(),
});

export type AdminFormValues = z.infer<typeof adminExperienceSchema>;

export function buildDefaultValues(
  config: ExperienceTypeConfig,
  initial?: Partial<AdminFormValues>,
): AdminFormValues {
  const base = {
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
    peakSeason: [] as number[],
    priceNpr: '',

    region: config.defaultRegion,
    startPoint: '',

    interest: [] as string[],
    activity: [] as string[],

    isPopular: false,
    ratingAvg: '',
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

function toNumber(value: string | undefined): number | undefined {
  if (value === '' || value == null) return undefined;
  const n = Number(value);
  return Number.isFinite(n) ? n : undefined;
}

function toOptionalJson(value: string): unknown {
  if (value === '') return undefined;
  try {
    return JSON.parse(value);
  } catch {
    return undefined;
  }
}

function toRoutePayload(route: z.infer<typeof routeSchema>) {
  const coords = (lng?: string, lat?: string): [number, number] | undefined => {
    const l = toNumber(lng ?? '');
    const t = toNumber(lat ?? '');
    return l !== undefined && t !== undefined ? [l, t] : undefined;
  };
  return {
    startCoords: coords(route.startLng, route.startLat),
    endCoords: coords(route.endLng, route.endLat),
    distanceKm: toNumber(route.distanceKm ?? ''),
    maxElevationM: toNumber(route.maxElevationM ?? ''),
    ascentM: toNumber(route.ascentM ?? ''),
    descentM: toNumber(route.descentM ?? ''),
    routeDifficulty: route.routeDifficulty || 'MODERATE',
    source: route.source || undefined,
    geojson: toOptionalJson(route.geojson ?? ''),
  };
}

export function buildCreatePayload(values: AdminFormValues) {
  const parsed = adminExperienceSchema.parse(values);
  return {
    ...parsed,
    durationDays: toNumber(parsed.durationDays),
    minDays: toNumber(parsed.minDays),
    maxDays: toNumber(parsed.maxDays),
    difficultyScore: toNumber(parsed.difficultyScore),
    maxElevationM: toNumber(parsed.maxElevationM),
    priceNpr: toNumber(parsed.priceNpr),
    ratingAvg: toNumber(parsed.ratingAvg),
    peakSeason: Array.from(new Set(parsed.peakSeason)).sort((a, b) => a - b),
    interest: parsed.interest.map((i) => i.toLowerCase().trim()),
    activity: parsed.activity.map((a) => a.toLowerCase().trim()),
    details: parsed.details
      .filter((d) => d.key)
      .map((d) => ({
        ...d,
        data: toOptionalJson(d.data ?? ''),
      })),
    images: (parsed.images ?? [])
      .filter((img) => img.url || img.storageKey)
      .map((img) => ({
        ...img,
        metadata: toOptionalJson(img.metadata ?? ''),
      })),
    timeline: {
      ...parsed.timeline,
      items: (parsed.timeline?.items ?? [])
        .filter((item) => item.title || item.dayNumber || item.order)
        .map((item, index) => ({
          ...item,
          order: toNumber(item.order ?? '') ?? index + 1,
          dayNumber: toNumber(item.dayNumber ?? ''),
          data: toOptionalJson(item.data ?? ''),
        })),
    },
    route: parsed.route ? toRoutePayload(parsed.route) : undefined,
  };
}
