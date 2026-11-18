import { z } from 'zod';

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

/** Month value for travellers who haven't settled on dates. */
export const FLEXIBLE_MONTH = 'Flexible';

export const EXPERIENCE_KEYS = [
  'trekking',
  'hiking',
  'culture',
  'mountains',
  'quiet',
] as const;

export const EXPERIENCE_LABELS: Record<TripExperience, string> = {
  trekking: 'Trekking',
  hiking: 'Hiking',
  culture: 'Culture',
  mountains: 'Mountains',
  quiet: 'Quiet Places',
};

export const DIFFICULTIES = ['Easy', 'Moderate', 'Challenging'] as const;

export const MIN_DAYS = 1;
export const MAX_DAYS = 30;

export type TripMonth = (typeof MONTHS)[number] | typeof FLEXIBLE_MONTH;
export type TripExperience = (typeof EXPERIENCE_KEYS)[number];
export type TripDifficulty = (typeof DIFFICULTIES)[number];

/**
 * What the form holds while the traveller is still filling it in.
 * An empty `experiences` means all interests; a null `difficulty` means no
 * preference. Both are the defaults, so only `days` can be missing.
 */
export interface TripPreferences {
  month: TripMonth;
  days: number | null;
  experiences: TripExperience[];
  difficulty: TripDifficulty | null;
}

export const DEFAULT_PREFERENCES: TripPreferences = {
  month: 'October',
  days: 3,
  experiences: [],
  difficulty: null,
};

/**
 * Validates the form and, on success, produces the recommendation request body:
 * `month` as 1-12 (null = flexible), `experiences` as a list (empty = all
 * interests) and lowercase `difficulty` (null = no preference).
 */
export const tripPreferencesSchema = z.object({
  month: z.enum([...MONTHS, FLEXIBLE_MONTH], {
    error: 'Choose a travel month.',
  }),
  days: z
    .number({ error: 'Enter how many days you have.' })
    .int('Days must be a whole number.')
    .min(MIN_DAYS, `Choose at least ${MIN_DAYS} day.`)
    .max(MAX_DAYS, `Trips can be up to ${MAX_DAYS} days.`),
  experiences: z.array(z.enum(EXPERIENCE_KEYS)),
  difficulty: z.enum(DIFFICULTIES).nullable(),
});

export const recommendationRequestSchema = tripPreferencesSchema.transform(
  (value) => ({
    month:
      value.month === FLEXIBLE_MONTH
        ? null
        : (MONTHS as readonly string[]).indexOf(value.month) + 1,
    days: value.days,
    experiences: value.experiences,
    difficulty: value.difficulty
      ? (value.difficulty.toLowerCase() as Lowercase<TripDifficulty>)
      : null,
  }),
);

export type RecommendationRequest = z.output<
  typeof recommendationRequestSchema
>;

export type TripFieldErrors = Partial<Record<keyof TripPreferences, string>>;

export type ValidationResult =
  | { success: true; request: RecommendationRequest }
  | { success: false; errors: TripFieldErrors };

export function validatePreferences(
  preferences: TripPreferences,
): ValidationResult {
  const result = recommendationRequestSchema.safeParse(preferences);
  if (result.success) return { success: true, request: result.data };

  const errors: TripFieldErrors = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0] as keyof TripPreferences | undefined;
    if (field && !errors[field]) errors[field] = issue.message;
  }
  return { success: false, errors };
}
