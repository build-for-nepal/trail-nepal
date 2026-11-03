import { isCultural, isHike } from '@/lib/trail';
import type { Trek } from '@/types/trek';

/**
 * DEMO DATA: used only by the development fallback in recommendations.ts
 * when NEXT_PUBLIC_API_URL is unset.
 */
export const TRIP_OPTIONS: Trek[] = [
  {
    id: 'ebc-trek',
    title: 'EBC Trek',
    region: 'Khumbu Valley',
    description:
      'Trek through the Khumbu region, passing Sherpa villages, monasteries, glaciers, and high Himalayan landscapes on the way to Everest Base Camp.',
    difficulty: 'Challenging',
    duration: '12 Days',
    altitude: '5,545m',
    season: 'Mar-May, Sep-Nov',
    price: 30000,
    imageUrl: '/images/ebc.jpg',
    isPopular: true,
    keywords: ['everest base camp', 'ebc', 'khumbu', 'everest'],
  },
  {
    id: 'abc-trek',
    title: 'Annapurna Base Camp Trek',
    region: 'Annapurna Region',
    description:
      'Trek through the Annapurna Sanctuary, passing traditional villages, bamboo and rhododendron forests, and alpine landscapes on the way to Annapurna Base Camp.',
    difficulty: 'Moderate',
    duration: '7 Days',
    altitude: '4,130m',
    season: 'Mar-May, Sep-Nov',
    price: 12000,
    imageUrl: '/images/abc/annapurna.jpg',
    isPopular: false,
    keywords: [
      'annapurna',
      'annapurna base camp',
      'abc',
      'annapurna sanctuary',
    ],
  },
  {
    id: 'kathmandu-valley-heritage-tour',
    title: 'Kathmandu Valley Heritage Tour',
    region: 'Kathmandu Valley',
    description:
      'Explore the historic cities of Kathmandu, Patan, and Bhaktapur, moving through palace squares, temples, courtyards, traditional streets, and cultural neighbourhoods.',
    difficulty: 'Easy',
    duration: '3 Days',
    altitude: '1,400m',
    season: 'Year-Round',
    imageUrl:
      '/images/kathmandu-valley-heritage-tour/kathmandu-valley-cover.jpg',
    isPopular: false,
    keywords: [
      'kathmandu valley heritage tour',
      'kathmandu durbar square',
      'patan durbar square',
      'bhaktapur durbar square',
      'swayambhunath',
      'pashupatinath',
      'boudhanath',
    ],
    type: 'cultural',
  },
];

export function getCategory(trek: Trek): string {
  if (isCultural(trek)) return 'Cultural';
  if (isHike(trek)) return 'Hiking';
  return 'Trekking';
}
