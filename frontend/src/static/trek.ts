import { Trek } from '@/types/trek';

export enum TrekIdEnum {
  ABC_TREK = 'abc-trek',
  EBC_TREK = 'ebc-trek',
  GHOREPANI_POON_HILL_TREK = 'ghorepani-poon-hill-trek',
  GOKYO_VALLEY_TREK = 'gokyo-valley-trek',
  LANGTANG_VALLEY = 'langtang-valley',
  MANASLU_CIRCUIT = 'manaslu-circuit',
  MARDI_HIMAL_TREK = 'mardi-himal-trek',
}

export const TREKS: Trek[] = [
  // The `description` on each trek MUST match TREK_DETAILS[id].summary in
  // static/trekDetails.ts exactly. The card and the detail page show the same
  // copy on purpose (client review); do not trim it here to fit the card, change
  // the card layout instead. The description block in TrekCard is a min-height,
  // not a clamp, so it grows.
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
    id: 'manaslu-circuit',
    title: 'Manaslu Circuit Trek',
    region: 'Manaslu Region',
    description:
      "Circle the world's eighth-highest mountain through the Budhi Gandaki Valley, upper Nubri settlements, and high alpine terrain before crossing the 5,106 m Larkya La Pass.",
    difficulty: 'Challenging',
    duration: '13 Days',
    altitude: '5,106m',
    season: 'Mar-May, Sep-Nov',
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
      'Follow the Langtang Khola from forested valleys and Tamang villages into the alpine landscape of Kyanjin Gompa, with a climb to Kyanjin Ri at 4,773 m.',
    difficulty: 'Moderate',
    duration: '7 Days',
    altitude: '4,773m',
    season: 'Mar-May, Oct-Nov',
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
      'Trek through the Annapurna Sanctuary, passing Gurung villages, bamboo and rhododendron forests, the Modi Khola valley, and alpine terrain on the way to Annapurna Base Camp.',
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
    id: 'gokyo-valley-trek',
    title: 'Gokyo Valley Trek',
    region: 'Khumbu Region',
    description:
      'Trek through the Gokyo Valley to a series of high-altitude glacial lakes, alongside the Ngozumpa Glacier, and climb Gokyo Ri at 5,357 m for expansive Himalayan views.',
    difficulty: 'Challenging',
    duration: '11 Days',
    altitude: '5,357m',
    season: 'Mar-May, Sep-Nov',
    price: 12000,
    imageUrl: '/images/gokyo/gokyo.webp',
    isPopular: false,
    keywords: ['gokyo valley', 'gokyo', 'gok', 'valley'],
  },
  {
    id: 'ghorepani-poon-hill-trek',
    title: 'Ghorepani Poon Hill Trek',
    region: 'Annapurna Region',
    description:
      'Trek through the lower Annapurna region, passing Gurung and Magar villages, rhododendron forests, and terraced fields on the way to Poon Hill.',
    difficulty: 'Moderate',
    duration: '5 Days',
    altitude: '3,210m',
    season: 'Mar-May, Sep-Nov',
    price: 12000,
    imageUrl: '/images/poonhill/poonhill.webp',
    isPopular: false,
    keywords: ['ghorepani poon hill trek', 'poonhill', 'ghorepani', 'poon'],
  },
  {
    id: 'mardi-himal-trek',
    title: 'Mardi Himal Trek',
    region: 'Annapurna Region',
    description:
      'Trek along high ridges and through rhododendron forests in the Annapurna region, leading to the base of Mardi Himal directly below Machhapuchhre.',
    difficulty: 'Moderate',
    duration: '5 Days',
    altitude: '4,500m',
    season: 'Mar-May, Sep-Nov',
    price: 12000,
    imageUrl: '/images/mardi/mardi.webp',
    isPopular: false,
    keywords: ['mardi himal trek', 'mardi'],
  },
  {
    id: 'shey-phoksundo',
    title: 'Shey Phoksundo Trek',
    region: 'Dolpo Region',
    description:
      'Journey into the remote Lower Dolpo region to the turquoise waters of Lake Phoksundo, ancient Bon monasteries, and dramatic alpine landscapes.',
    difficulty: 'Moderate',
    duration: '8 Days',
    altitude: '3,660m',
    season: 'March-May, Sep-Nov',
    price: 18000,
    imageUrl: '/images/shey/shey.webp',
    isPopular: false,
    keywords: ['shey phoksundo trek', 'dolpo trek', 'phoksundo lake trek'],
  },
  {
    id: 'tilicho-lake-trek',
    title: 'Tilicho Lake Trek',
    region: 'Annapurna Region',
    description:
      'Follow the Marsyangdi Valley into the high Manang region, then branch toward Tilicho Lake through dry alpine terrain, traditional mountain villages, and exposed trails. Reach Tilicho Lake at 4,919 m.',
    difficulty: 'Challenging',
    duration: '11 Days',
    altitude: '4,919m',
    season: 'Mar-May, Sep-Nov',
    price: 22000,
    imageUrl: '/images/tilicho/tilicho.webp',
    isPopular: false,
    keywords: [
      'tilicho lake trek',
      'thorong la pass trek',
      'annapurna circuit tilicho',
      'tilicho trek',
      'manang trek',
    ],
  },
];

export const HIKES: Trek[] = [
  // The `description` on each hike MUST match HIKE_DETAILS[id].summary in
  // static/hikeDetails.ts exactly — both carry the operator's authored
  // Description verbatim. Raised twice in client review; do not trim copy here
  // to fit the card, change the card layout instead.
  {
    id: 'nagarkot-changunarayan',
    title: 'Nagarkot to Changunarayan Hike',
    region: 'Kathmandu Valley',
    description:
      'Hike from Nagarkot through traditional villages, terraced farmland and pine forest to Changunarayan, a historic temple complex and UNESCO World Heritage monument zone.',
    difficulty: 'Easy',
    duration: '1 Day',
    altitude: '2,175m',
    season: 'Oct-Apr',
    imageUrl: '/images/nagarkot-changunarayan/nagarkot-changunarayan.jpg',
    isPopular: false,
    keywords: [
      'nagarkot changunarayan hike',
      'nagarkot',
      'changunarayan',
      'kathmandu valley day hike',
      'day hike',
    ],
    type: 'hike',
  },
  {
    id: 'dhulikhel-namobuddha',
    title: 'Dhulikhel to Namobuddha Hike',
    region: 'Kavrepalanchok',
    description:
      'Hike from the historic hill town of Dhulikhel through terraced farmland, villages and forest to Namobuddha, a major Buddhist pilgrimage site.',
    difficulty: 'Moderate',
    duration: '1 Day',
    altitude: '1,750m',
    season: 'Oct-Apr',
    imageUrl: '/images/dhulikhel-namobuddha/dhulikhel-namobuddha.jpg',
    isPopular: false,
    keywords: [
      'dhulikhel namobuddha hike',
      'dhulikhel',
      'namobuddha',
      'buddhist pilgrimage hike',
      'kavre day hike',
      'day hike',
    ],
    type: 'hike',
  },
  {
    id: 'godawari-phulchoki',
    title: 'Godawari to Phulchoki Hike',
    region: 'Lalitpur',
    description:
      'A full-day forest hike from Godawari to Phulchoki, the highest hill on the Kathmandu Valley rim, passing through dense forest, rhododendron and oak woodland before reaching the summit.',
    difficulty: 'Moderate',
    duration: '1 Day',
    altitude: '2,765m',
    season: 'Mar-May, Oct-Nov',
    imageUrl: '/images/godawari-phulchoki/godawari-phulchoki.jpg',
    isPopular: false,
    keywords: [
      'godawari phulchoki hike',
      'phulchoki',
      'phulchowki',
      'godawari',
      'kathmandu valley summit hike',
      'day hike',
    ],
    type: 'hike',
  },
];

export const CULTURAL_TOURS: Trek[] = [
  // The `description` on each tour MUST match
  // CULTURAL_TOUR_DETAILS[id].summary in static/culturalTours.ts exactly — both
  // carry the operator's authored Description verbatim. These were previously
  // hand-trimmed "to fit the card"; that was reversed in client review, because
  // the card's description block is a min-height rather than a clamp.
  {
    id: 'lumbini-tour',
    title: 'Lumbini Tour',
    region: 'Lumbini, Rupandehi',
    description:
      'Explore Lumbini, the birthplace of Siddhartha Gautama Buddha, through the Sacred Garden, Maya Devi Temple, ancient archaeological remains, international monasteries, and pilgrimage sites connected to Buddhist heritage.',
    difficulty: 'Easy',
    duration: '3 Days',
    altitude: '150m',
    season: 'Year-Round',
    imageUrl: '/images/lumbini-tour/lumbini-cover.jpg',
    // Left off the homepage grid on purpose: POPULAR_TREKS filters TRAILS, and
    // PopularTrekSection maps the whole list into a 3-column grid with no slice,
    // so a fourth popular trail leaves an orphaned card on a second row.
    isPopular: false,
    keywords: [
      'lumbini tour',
      'lumbini',
      'buddha birthplace',
      'maya devi temple',
      'sacred garden',
      'tilaurakot',
      'kudan',
      'buddhist pilgrimage',
      'kapilavastu',
      'world peace pagoda',
      'cultural tour',
    ],
    type: 'cultural',
  },
  {
    id: 'kathmandu-valley-heritage-tour',
    title: 'Kathmandu Valley Heritage Tour',
    region: 'Kathmandu Valley',
    description:
      'Explore the historic cities of Kathmandu, Patan, and Bhaktapur, moving through palace squares, temples, courtyards, traditional streets, and living cultural neighbourhoods across the Kathmandu Valley.',
    difficulty: 'Easy',
    duration: '3 Days',
    altitude: '1400m',
    season: 'Year-Round',
    imageUrl:
      '/images/kathmandu-valley-heritage-tour/kathmandu-valley-cover.jpg',
    // Left off the homepage grid on purpose: POPULAR_TREKS filters TRAILS, so a
    // popular cultural tour competes with the treks for the 3-column section.
    isPopular: false,
    keywords: [
      'kathmandu valley heritage tour',
      'kathmandu durbar square',
      'patan durbar square',
      'bhaktapur durbar square',
      'swayambhunath',
      'pashupatinath',
      'boudhanath',
      'nyatapola',
      'newar architecture',
      'unesco world heritage kathmandu',
      'cultural tour',
    ],
    type: 'cultural',
  },
  {
    id: 'bandipur-hill-town',
    title: 'Bandipur Hill Town',
    region: 'Tanahun District',
    description:
      'Explore the historic hill town of Bandipur, walking through its preserved Newar streets, traditional houses, temples, viewpoints, and surrounding hills.',
    difficulty: 'Easy',
    duration: '2 Days',
    altitude: '1030m',
    season: 'Year-Round',
    imageUrl: '/images/bandipur-hill-town/bandipur-cover.jpg',
    isPopular: false,
    keywords: [
      'bandipur hill town',
      'bandipur',
      'bandipur bazaar',
      'siddha gufa',
      'siddha cave',
      'bindhyabasini temple',
      'tanahun',
      'newar town',
      'hill station nepal',
      'cultural tour',
    ],
    type: 'cultural',
  },
];

// Shared discovery set: multi-day treks + single-day hikes + cultural tours.
// Explore, search, and the homepage should iterate TRAILS to surface all
// content types.
export const TRAILS: Trek[] = [...TREKS, ...HIKES, ...CULTURAL_TOURS];

export const POPULAR_TREKS = TRAILS.filter((trek) => trek.isPopular);
