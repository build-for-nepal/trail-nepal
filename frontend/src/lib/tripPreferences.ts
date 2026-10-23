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

export const EXPERIENCE_KEYS = [
  'trekking',
  'hiking',
  'culture',
  'mountains',
  'quiet',
  'mix',
] as const;

export const DIFFICULTIES = ['Easy', 'Moderate', 'Challenging'] as const;

export const MIN_DAYS = 1;
export const MAX_DAYS = 30;

export type TripMonth = (typeof MONTHS)[number];
export type TripExperience = (typeof EXPERIENCE_KEYS)[number];
export type TripDifficulty = (typeof DIFFICULTIES)[number];

/** What the form holds while the traveller is still filling it in. */
export interface TripPreferences {
  month: TripMonth;
  days: number | null;
  experience: TripExperience | null;
  difficulty: TripDifficulty | null;
}

export const DEFAULT_PREFERENCES: TripPreferences = {
  month: 'October',
  days: 3,
  experience: null,
  difficulty: null,
};

/**
 * Validates the form and, on success, produces the recommendation request body
 * (month as 1-12, lowercase difficulty).
 */
export const tripPreferencesSchema = z.object({
  month: z.enum(MONTHS, { error: 'Choose a travel month.' }),
  days: z
    .number({ error: 'Enter how many days you have.' })
    .int('Days must be a whole number.')
    .min(MIN_DAYS, `Choose at least ${MIN_DAYS} day.`)
    .max(MAX_DAYS, `Trips can be up to ${MAX_DAYS} days.`),
  experience: z.enum(EXPERIENCE_KEYS, {
    error: 'Choose the kind of experience you want.',
  }),
  difficulty: z.enum(DIFFICULTIES, {
    error: 'Choose how challenging the trip should feel.',
  }),
});

export const recommendationRequestSchema = tripPreferencesSchema.transform(
  (value) => ({
    month: MONTHS.indexOf(value.month) + 1,
    days: value.days,
    experience: value.experience,
    difficulty: value.difficulty.toLowerCase() as Lowercase<TripDifficulty>,
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
