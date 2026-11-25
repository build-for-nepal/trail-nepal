'use client';

// The Explore card list: the static cards first, with the backend's copy laid
// over the trips it knows once the list arrives. Cards the backend does not
// have, and every card when it is unset or unreachable, stay as authored.

import { useEffect, useSyncExternalStore } from 'react';

import {
  listAllExperiences,
  type ApiExperienceListItem,
} from '@/features/trip-details/api';
import {
  formatDuration,
  formatElevation,
  formatSeasons,
  shareEqual,
} from '@/features/trip-details/format';
import { isCultural, isHike, isNature } from '@/lib/trail';
import { TRAILS } from '@/static/trek';
import { TREK_DETAILS } from '@/static/trekDetails';
import type { Trek } from '@/types/trek';

// A trek card shows the summary from its detail record; every other type
// carries its own description.
const STATIC_TRAILS: Trek[] = TRAILS.map((trail) => {
  if (isHike(trail) || isCultural(trail) || isNature(trail)) return trail;

  const summary = TREK_DETAILS[trail.id]?.summary;
  return summary && summary !== trail.description
    ? { ...trail, description: summary }
    : trail;
});

// Region, difficulty, keywords and type stay static: the backend's region enum
// is coarser than the filter labels and its difficulty scale does not match
// the card's. Image and price are only taken when the backend has a value.
function overlayCard(card: Trek, item: ApiExperienceListItem): Trek {
  return {
    ...card,
    title: item.name || card.title,
    description: item.shortDescription || card.description,
    duration: formatDuration(item.durationDays, card.duration),
    altitude: formatElevation(item.maxElevationM, card.altitude),
    season: formatSeasons(item.peakSeason, 'short') ?? card.season,
    isPopular: item.isPopular,
    imageUrl: item.thumbnail || card.imageUrl,
    price: item.priceNpr ?? card.price,
  };
}

let trails = STATIC_TRAILS;
let requested = false;
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function load() {
  if (requested) return;
  requested = true;

  listAllExperiences()
    .then((items) => {
      const bySlug = new Map(items.map((item) => [item.slug, item]));
      trails = shareEqual(
        STATIC_TRAILS,
        STATIC_TRAILS.map((card) => {
          const item = bySlug.get(card.id);
          return item ? overlayCard(card, item) : card;
        }),
      );
      listeners.forEach((listener) => listener());
    })
    // No backend configured, or it is unreachable: the static cards stand.
    .catch(() => undefined);
}

export function useExploreTrails(): Trek[] {
  useEffect(() => {
    load();
  }, []);

  return useSyncExternalStore(
    subscribe,
    () => trails,
    () => STATIC_TRAILS,
  );
}
