import type { ImageRequireSource } from 'react-native';

/** One of the hub's treks: its photo in a circle, its short label under it. */
export type TriviaPick = {
  id: string;
  /** Under the photo, e.g. 'EBC'. */
  label: string;
  /** What the trivia is called, for screen readers: 'Play Everest trivia'. */
  name: string;
  /** The trek's header photo, as the web's hub shows. */
  cover: ImageRequireSource;
};

// The web's choice and order, from frontend/src/components/home/trivia/HomeTrivia.tsx. The
// names are what triviaName() makes of these treks, so each opens its trek's own trivia.
export const TRIVIA_PICKS: readonly TriviaPick[] = [
  {
    id: 'ebc-trek',
    label: 'EBC',
    name: 'Everest',
    cover: require('../../../../assets/images/trips/hero/ebc-trek.webp'),
  },
  {
    id: 'langtang-valley',
    label: 'Langtang',
    name: 'Langtang Valley',
    cover: require('../../../../assets/images/trips/hero/langtang-valley.webp'),
  },
  {
    id: 'abc-trek',
    label: 'ABC',
    name: 'Annapurna Base Camp',
    cover: require('../../../../assets/images/trips/hero/abc-trek.webp'),
  },
  {
    id: 'manaslu-circuit',
    label: 'Manaslu',
    name: 'Manaslu Circuit',
    cover: require('../../../../assets/images/trips/hero/manaslu-circuit.webp'),
  },
];
