import type { Href } from 'expo-router';

import type { TripType } from '@/features/explore';

/** A trip's trivia sits under its trip's path, e.g. /treks/ebc-trek/trivia. */
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

/** The picker the Explore card opens, as the web's home-page trivia. */
export const TRIVIA_HUB_HREF: Href = '/trivia';

/** The general test: eight general questions, no trip's own. */
export const GENERAL_TRIVIA_HREF: Href = '/trivia/general';
