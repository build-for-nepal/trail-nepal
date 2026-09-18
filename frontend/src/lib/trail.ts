import type { Trek } from '@/types/trek';

/**
 * A hike card is a {@link Trek}-shaped listing whose `type` is `'hike'`.
 * Kept as a narrowing type guard so callers can branch on the discriminator
 * exhaustively instead of reading `type` as a loose string.
 */
export type HikeCard = Trek & { type: 'hike' };

export type CulturalCard = Trek & { type: 'cultural' };

/** True when the trail card describes a single-day hike (absent `type` = trek). */
export function isHike(card: Trek): card is HikeCard {
  return card.type === 'hike';
}

/** True when the trail card describes a cultural tour (absent `type` = trek). */
export function isCultural(card: Trek): card is CulturalCard {
  return card.type === 'cultural';
}

/** Detail-route href for a trail card: `/hikes/{id}` for hikes, `/cultural-tours/{id}` for cultural tours, `/treks/{id}` otherwise. */
export function trailHref(card: Trek): string {
  if (isHike(card)) return `/hikes/${card.id}`;
  if (isCultural(card)) return `/cultural-tours/${card.id}`;
  return `/treks/${card.id}`;
}
