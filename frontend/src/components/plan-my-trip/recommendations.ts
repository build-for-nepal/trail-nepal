import { z } from 'zod';
import { TRAILS } from '@/static/trek';
import type { Trek } from '@/types/trek';
import { TRIP_OPTIONS } from './tripOptions';
import type { RecommendationRequest } from '@/lib/tripPreferences';
import { logEnv } from '@/lib/envLog';

/**
 * Recommendation response: ranked options, strongest first. Each option lists
 * existing trail ids, which are resolved against the static catalogue.
 */
const recommendationResponseSchema = z.object({
  options: z.array(
    z.object({
      totalDays: z.number().int().positive(),
      trailIds: z.array(z.string()).min(1),
    }),
  ),
});

export interface TripOption {
  totalDays: number;
  trails: Trek[];
}

export class RecommendationError extends Error {}

const TRAILS_BY_ID = new Map(TRAILS.map((trail) => [trail.id, trail]));

function resolveOptions(
  data: z.infer<typeof recommendationResponseSchema>,
): TripOption[] {
  return data.options
    .map(({ totalDays, trailIds }) => ({
      totalDays,
      trails: trailIds.flatMap((id) => TRAILS_BY_ID.get(id) ?? []),
    }))
    .filter((option) => option.trails.length > 0);
}

/**
 * POST `${NEXT_PUBLIC_API_URL}/api/recommendations`. No sign-in required.
 *
 * While no backend is configured (NEXT_PUBLIC_API_URL unset, e.g. local dev
 * and the static staging deploy) this falls back to the demo catalogue so the
 * flow stays usable. Independent of NODE_ENV.
 */
export async function fetchRecommendations(
  request: RecommendationRequest,
  signal?: AbortSignal,
): Promise<TripOption[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  logEnv('fetchRecommendations', {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_API_URL: baseUrl || '(unset)',
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || '(empty)',
  });

  if (!baseUrl) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    signal?.throwIfAborted();
    return [
      { totalDays: request.days, trails: TRIP_OPTIONS.slice(0, 2) },
      { totalDays: request.days, trails: TRIP_OPTIONS },
      { totalDays: request.days, trails: TRIP_OPTIONS.slice(1, 2) },
    ];
  }

  let response: Response;
  try {
    response = await fetch(
      `${baseUrl.replace(/\/$/, '')}/api/recommendations`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
        signal,
      },
    );
  } catch (error) {
    if (signal?.aborted) throw error;
    throw new RecommendationError(
      'We could not reach Trails Nepal. Check your connection and try again.',
    );
  }

  if (!response.ok) {
    throw new RecommendationError(
      'Something went wrong while finding your trip. Please try again.',
    );
  }

  const parsed = recommendationResponseSchema.safeParse(
    await response.json().catch(() => null),
  );
  if (!parsed.success) {
    throw new RecommendationError(
      'We received an unexpected response. Please try again.',
    );
  }

  return resolveOptions(parsed.data);
}
