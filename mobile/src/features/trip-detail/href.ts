import type { Href } from 'expo-router';

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
