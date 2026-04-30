import { Trek } from '@/types/trek';

export const TREKS: Trek[] = [
  {
    id: 'ebc-trek',
    title: 'EBC Trek',
    region: 'Khumbu Valley',
    description:
      "Trek to the base of the world's highest peak through iconic Sherpa villages and glaciers.",
    difficulty: 'Difficult',
    duration: '14 Days',
    altitude: '5,364m',
    season: 'Sept-Nov',
    price: 30000,
    imageUrl: '/images/ebc.jpg',
    isPopular: true,
    keywords: ['everest base camp', 'ebc', 'khumbu', 'everest'],
  },
  {
    id: 'manaslu-circuit',
    title: 'Manaslu Circuit Trek',
    region: 'Manaslu Region',
    description:
      "A remote and rugged circuit around the world's eighth highest mountain.",
    difficulty: 'Difficult',
    duration: '14-18 Days',
    altitude: '5,160m',
    season: 'Sept-Nov',
    price: 20000,
    imageUrl: '/images/erik-OwJ6Cn_DnHM-unsplash.jpg',
    isPopular: true,
    keywords: ['manaslu', 'circuit', 'manaslu circuit'],
  },
  {
    id: 'langtang-valley',
    title: 'Langtang Valley Trek',
    region: 'Langtang Region',
    description:
      'A culturally rich trek through lush forests and Tamang villages with stunning views of glaciers and snow-covered peaks.',
    difficulty: 'Easy',
    duration: '7-10 Days',
    altitude: '3,870m',
    season: 'Mar-May',
    price: 10000,
    imageUrl: '/images/redmaz-pham-yQnfR9N67OQ-unsplash.jpg',
    isPopular: true,
    keywords: ['langtang', 'langtang valley'],
  },
  {
    id: 'abc-trek',
    title: 'Annapurna Base Camp Trek',
    region: 'Annapurna Region',
    description:
      'A breathtaking trek through terraced fields, rhododendron forests, and Gurung villages, leading to the heart of the Annapurna Sanctuary surrounded by towering Himalayan peaks.',
    difficulty: 'Moderate',
    duration: '7-12 Days',
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
    id: 'gokyo-valley-trek',
    title: 'Gokyo Valley Trek',
    region: 'Khumbu Region',
    description:
      "The quieter alternative glacial lakes, Nepal's longest glacier, and four 8,000m peaks from a single summit.",
    difficulty: 'Difficult',
    duration: '13-14 Days',
    altitude: '5,357m',
    season: 'Mar - May, Sep - Nov',
    price: 12000,
    imageUrl: '/images/gokyo/gokyo.webp',
    isPopular: false,
    keywords: [
      'gokyo valley',
      'gokyo',
      'gok',
      'valley',
    ],
  },
  {
    id: 'ghorepani-poon-hill-trek',
    title: 'Ghorepani Poon Hill Trek',
    region: 'Annapurna Region',
    description:
      'Beginner-friendly on paper, genuinely jaw-dropping in practice."',
    difficulty: 'Difficult',
    duration: '13-14 Days',
    altitude: '5,357m',
    season: 'Mar - May, Sep - Nov',
    price: 12000,
    imageUrl: '/images/poonhill/poonhill.webp',
    isPopular: false,
    keywords: [
      'ghorepani poon hill trek',
      'poonhill',
      'ghorepani',
      'poon',
    ],
  },
  {
    id: 'mardi-himal-trek',
    title: 'Mardi Himal Trek',
    region: 'Annapurna Region',
    description:
      "Intimate, uncrowded, and closer to Machapuchare's perfect pyramid than any other trail in the Annapurna region.",
    difficulty: 'Moderate',
    duration: '6-7 Days',
    altitude: '5,357m',
    season: 'Mar - May, Sep - Dec',
    price: 12000,
    imageUrl: '/images/mardi/mardi.webp',
    isPopular: false,
    keywords: [
      'mardi himal trek',
      'mardi',
      
    ],
  },
  
];

export const POPULAR_TREKS = TREKS.filter((trek) => trek.isPopular);
