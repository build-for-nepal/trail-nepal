import type { Href } from 'expo-router';

import type { Trip } from './types';

/** The web's paths (frontend/src/lib/trail.ts), so a web link can open the same screen. */
export function tripHref(trip: Trip): Href {
  switch (trip.type) {
    case 'trek':
      return { pathname: '/treks/[id]', params: { id: trip.id } };
    case 'hike':
      return { pathname: '/hikes/[id]', params: { id: trip.id } };
    case 'cultural':
      return { pathname: '/cultural-tours/[id]', params: { id: trip.id } };
  }
}
