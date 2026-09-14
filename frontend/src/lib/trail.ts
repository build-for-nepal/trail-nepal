import type { Trek } from '@/types/trek';

/**
 * A hike card is a {@link Trek}-shaped listing whose `type` is `'hike'`.
 * Kept as a narrowing type guard so callers can branch on the discriminator
 * exhaustively instead of reading `type` as a loose string.
 */
export type HikeCard = Trek & { type: 'hike' };

/** True when the trail card describes a single-day hike (absent `type` = trek). */
export function isHike(card: Trek): card is HikeCard {
  return card.type === 'hike';
}

/** Detail-route href for a trail card: `/hikes/{id}` for hikes, `/treks/{id}` otherwise. */
export function trailHref(card: Trek): string {
  return isHike(card) ? `/hikes/${card.id}` : `/treks/${card.id}`;
}
