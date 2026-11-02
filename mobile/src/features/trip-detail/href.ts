import type { Href } from 'expo-router';

import type { TripType } from '@/features/explore';

import type { PackableType } from './packing';

/** The packing screen sits under its trip's path, e.g. /treks/ebc-trek/packing. */
export function packingHref(type: PackableType, id: string): Href {
  switch (type) {
    case 'trek':
      return { pathname: '/treks/[id]/packing', params: { id } };
    case 'hike':
      return { pathname: '/hikes/[id]/packing', params: { id } };
  }
}

/** The trip's trivia game, e.g. /treks/ebc-trek/trivia. */
export function triviaHref(type: TripType, id: string): Href {
  switch (type) {
    case 'trek':
      return { pathname: '/treks/[id]/trivia', params: { id } };
    case 'hike':
      return { pathname: '/hikes/[id]/trivia', params: { id } };
    case 'cultural':
      return { pathname: '/cultural-tours/[id]/trivia', params: { id } };
  }
}

/**
 * The trip's full-screen map, e.g. /treks/ebc-trek/map. With `day`, a position in the
 * itinerary, it opens on that entry: /treks/ebc-trek/map?day=3 opens on the fourth.
 */
export function mapHref(type: TripType, id: string, day?: number): Href {
  const params = day === undefined ? { id } : { id, day: String(day) };
  switch (type) {
    case 'trek':
      return { pathname: '/treks/[id]/map', params };
    case 'hike':
      return { pathname: '/hikes/[id]/map', params };
    case 'cultural':
      return { pathname: '/cultural-tours/[id]/map', params };
  }
}
