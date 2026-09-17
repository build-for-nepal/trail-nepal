import { TrekIdEnum } from './trek';

export const OG_IMAGES: Record<TrekIdEnum, string> = {
  [TrekIdEnum.ABC_TREK]: 'og-abc-trek.png',
  [TrekIdEnum.EBC_TREK]: 'og-ebc-trek.jpg',
  [TrekIdEnum.GHOREPANI_POON_HILL_TREK]: 'og-ghorepani-poon-hill-trek.webp',
  [TrekIdEnum.GOKYO_VALLEY_TREK]: 'og-gokyo-valley-trek.webp',
  [TrekIdEnum.LANGTANG_VALLEY]: 'og-langtang-valley.webp',
  [TrekIdEnum.MANASLU_CIRCUIT]: 'og-manaslu-circuit.jpg',
  [TrekIdEnum.MARDI_HIMAL_TREK]: 'og-mardi-himal-trek.webp',
};

// Hikes are keyed by their plain string id (not the TrekIdEnum) so adding a hike
// never silently falls back to the site image the way the enum-keyed treks can.
export const HIKE_OG_IMAGES: Record<string, string> = {
  'nagarkot-changunarayan': 'og-nagarkot-changunarayan.jpg',
  'dhulikhel-namobuddha': 'og-dhulikhel-namobuddha.jpg',
  'godawari-phulchoki': 'og-godawari-phulchoki.jpg',
};

// Cultural tours are keyed by their plain string id (like hikes) so a new tour
// never silently falls back to the site image instead of its own OG graphic.
export const CULTURAL_TOUR_OG_IMAGES: Record<string, string> = {
  'lumbini-tour': 'og-lumbini-tour.jpg',
};

export const FALLBACK_OG_IMAGE = 'og-siteimage.png';

export const DEFAULT_SEO_DATA = {
  META_TITLE: 'Trails Nepal',
  META_DESCRIPTION: 'Discover and plan treks in Nepal',
  META_KEYWORDS:
    'Trails Nepal, Nepal trekking, Trekking in Nepal, Nepal hiking guides, Everest Base Camp trek, Annapurna Circuit trek, Langtang Valley trek, Nepal mountain trails, Himalayan trekking, Nepal trekking routes, Best treks in Nepal, Nepal adventure travel, Trekking gear checklist, Nepal trek planner, Altitude sickness Nepal, Nepal trekking safety, Interactive trekking maps, Nepal trekking guide, Solo trekking Nepal, Guided treks Nepal, Nepal hiking website, Visit Nepal, Himalayas Nepal, Nepal trekking itinerary, High altitude trekking, Nepal backpacking, Mountain travel Nepal, Trek preparation Nepal, Nepal expedition planning, Nepal tourism, Trails Nepal official',
};
