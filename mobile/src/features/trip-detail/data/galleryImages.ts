import type { GalleryImage } from '../types';

const GALLERY_IMAGES: Readonly<Record<string, readonly GalleryImage[]>> = {
  'ebc-trek': [
    {
      source: require('../../../../assets/images/trips/hero/ebc-trek.webp'),
      alt: 'Everest Base Camp and Khumbu Icefall',
    },
    {
      source: require('../../../../assets/images/trips/gallery/ebc-trek-2.webp'),
      alt: 'Namche Bazaar Sherpa Capital',
    },
    {
      source: require('../../../../assets/images/trips/gallery/ebc-trek-3.webp'),
      alt: 'Tengboche Monastery with Ama Dablam',
    },
    {
      source: require('../../../../assets/images/trips/gallery/ebc-trek-4.webp'),
      alt: 'Trekking over Hillary Suspension Bridge',
    },
    {
      source: require('../../../../assets/images/trips/gallery/ebc-trek-5.webp'),
      alt: 'Trekking over Hillary Suspension Bridge',
    },
    {
      source: require('../../../../assets/images/trips/gallery/ebc-trek-6.webp'),
      alt: 'Trekking over Hillary Suspension Bridge',
    },
  ],
  'manaslu-circuit': [
    {
      source: require('../../../../assets/images/trips/hero/manaslu-circuit.webp'),
      alt: 'Manaslu ',
    },
    {
      source: require('../../../../assets/images/trips/gallery/manaslu-circuit-2.webp'),
      alt: 'En route to Pung Gyen Gompa in Manaslu Circuit Trek.',
    },
    {
      source: require('../../../../assets/images/trips/gallery/manaslu-circuit-3.webp'),
      alt: 'Manaslu, Samagaun, Nepal',
    },
    {
      source: require('../../../../assets/images/trips/gallery/manaslu-circuit-4.webp'),
      alt: 'Trekking over Hillary Suspension Bridge',
    },
    {
      source: require('../../../../assets/images/trips/gallery/manaslu-circuit-5.webp'),
      alt: 'Manaslu',
    },
    {
      source: require('../../../../assets/images/trips/gallery/manaslu-circuit-6.webp'),
      alt: 'Manaslu',
    },
  ],
  'langtang-valley': [
    {
      source: require('../../../../assets/images/trips/hero/langtang-valley.webp'),
      alt: 'Langtang 1',
    },
    {
      source: require('../../../../assets/images/trips/gallery/langtang-valley-2.webp'),
      alt: 'Langtang 2',
    },
    {
      source: require('../../../../assets/images/trips/gallery/langtang-valley-3.webp'),
      alt: 'Langtang 3',
    },
    {
      source: require('../../../../assets/images/trips/gallery/langtang-valley-4.webp'),
      alt: 'Langtang 4',
    },
    {
      source: require('../../../../assets/images/trips/gallery/langtang-valley-5.webp'),
      alt: 'Langtang 5',
    },
    {
      source: require('../../../../assets/images/trips/gallery/langtang-valley-6.webp'),
      alt: 'Langtang 6',
    },
  ],
  'abc-trek': [
    {
      source: require('../../../../assets/images/trips/hero/abc-trek.webp'),
      alt: 'Panoramic view of the Annapurna Sanctuary',
    },
    {
      source: require('../../../../assets/images/trips/gallery/abc-trek-2.webp'),
      alt: 'Machhapuchhre (Fishtail) peak towering over MBC',
    },
    {
      source: require('../../../../assets/images/trips/gallery/abc-trek-3.webp'),
      alt: 'Trekking through a blooming rhododendron forest',
    },
    {
      source: require('../../../../assets/images/trips/gallery/abc-trek-4.webp'),
      alt: 'The stone terraces of Chhomrong village',
    },
    {
      source: require('../../../../assets/images/trips/gallery/abc-trek-5.webp'),
      alt: 'The stone terraces of Chhomrong village',
    },
  ],
  'gokyo-valley-trek': [
    {
      source: require('../../../../assets/images/trips/hero/gokyo-valley-trek.webp'),
      alt: 'Turquoise Gokyo Lakes below the surrounding Himalayan peaks',
    },
    {
      source: require('../../../../assets/images/trips/gallery/gokyo-valley-trek-2.webp'),
      alt: 'High-altitude alpine terrain along the Gokyo valley',
    },
    {
      source: require('../../../../assets/images/trips/gallery/gokyo-valley-trek-3.webp'),
      alt: 'The Gokyo Lakes beside the Ngozumpa Glacier',
    },
    {
      source: require('../../../../assets/images/trips/gallery/gokyo-valley-trek-4.webp'),
      alt: 'Gokyo village beside Dudh Pokhari',
    },
    {
      source: require('../../../../assets/images/trips/gallery/gokyo-valley-trek-5.webp'),
      alt: 'Dudh Koshi valley and suspension bridges below Namche',
    },
    {
      source: require('../../../../assets/images/trips/gallery/gokyo-valley-trek-6.webp'),
      alt: 'Namche Bazaar and the Khumbu approach',
    },
  ],
  'ghorepani-poon-hill-trek': [
    {
      source: require('../../../../assets/images/trips/hero/ghorepani-poon-hill-trek.webp'),
      alt: 'Poon Hill sunrise panorama with Dhaulagiri and Annapurna',
    },
    {
      source: require('../../../../assets/images/trips/gallery/ghorepani-poon-hill-trek-2.webp'),
      alt: 'Poon Hill, Histan Mandali',
    },
    {
      source: require('../../../../assets/images/trips/gallery/ghorepani-poon-hill-trek-3.webp'),
      alt: 'Poonhill nepal',
    },
    {
      source: require('../../../../assets/images/trips/gallery/ghorepani-poon-hill-trek-4.webp'),
      alt: 'Poonhill nepal',
    },
    {
      source: require('../../../../assets/images/trips/gallery/ghorepani-poon-hill-trek-5.webp'),
      alt: 'Ghorepani Poonhill nepal',
    },
  ],
  'mardi-himal-trek': [
    {
      source: require('../../../../assets/images/trips/hero/mardi-himal-trek.webp'),
      alt: 'Mardi Himal Base Camp with Machapuchare',
    },
    {
      source: require('../../../../assets/images/trips/gallery/mardi-himal-trek-2.webp'),
      alt: 'Australian Camp sunset over Annapurna range',
    },
    {
      source: require('../../../../assets/images/trips/gallery/mardi-himal-trek-3.webp'),
      alt: 'Rhododendron forest trail to Forest Camp',
    },
    {
      source: require('../../../../assets/images/trips/gallery/mardi-himal-trek-4.webp'),
      alt: 'Exposed ridge walk between Upper Camp and High Camp',
    },
    {
      source: require('../../../../assets/images/trips/gallery/mardi-himal-trek-5.webp'),
      alt: 'Machapuchare pyramid from High Camp',
    },
    {
      source: require('../../../../assets/images/trips/gallery/mardi-himal-trek-6.webp'),
      alt: 'Sidhing Gurung village in the Modi Khola valley',
    },
  ],
  'shey-phoksundo': [
    {
      source: require('../../../../assets/images/trips/hero/shey-phoksundo.webp'),
      alt: 'Shey Phoksundo trek',
    },
    {
      source: require('../../../../assets/images/trips/gallery/shey-phoksundo-2.webp'),
      alt: 'Shey Phoksundo trek',
    },
    {
      source: require('../../../../assets/images/trips/gallery/shey-phoksundo-3.webp'),
      alt: 'Shey Phoksundo trek',
    },
    {
      source: require('../../../../assets/images/trips/gallery/shey-phoksundo-4.webp'),
      alt: 'Shey Phoksundo trek',
    },
    {
      source: require('../../../../assets/images/trips/gallery/shey-phoksundo-5.webp'),
      alt: 'Shey Phoksundo trek',
    },
    {
      source: require('../../../../assets/images/trips/gallery/shey-phoksundo-6.webp'),
      alt: 'Shey Phoksundo trek',
    },
  ],
  'tilicho-lake-trek': [
    {
      source: require('../../../../assets/images/trips/hero/tilicho-lake-trek.webp'),
      alt: 'Tilicho Lake Nepal',
    },
    {
      source: require('../../../../assets/images/trips/gallery/tilicho-lake-trek-2.webp'),
      alt: 'Manang Valley high altitude landscape',
    },
    {
      source: require('../../../../assets/images/trips/gallery/tilicho-lake-trek-3.webp'),
      alt: 'Trekking through Annapurna range',
    },
    {
      source: require('../../../../assets/images/trips/gallery/tilicho-lake-trek-4.webp'),
      alt: 'Snow-capped peaks near Tilicho',
    },
    {
      source: require('../../../../assets/images/trips/gallery/tilicho-lake-trek-5.webp'),
      alt: 'Exposed mountain trail toward Tilicho Base Camp',
    },
    {
      source: require('../../../../assets/images/trips/gallery/tilicho-lake-trek-6.webp'),
      alt: 'Glacial lake in the Annapurna region',
    },
  ],
  'nagarkot-changunarayan': [
    {
      source: require('../../../../assets/images/trips/hero/nagarkot-changunarayan.webp'),
      alt: 'Sunrise over the Himalaya from the Nagarkot ridge',
    },
    {
      source: require('../../../../assets/images/trips/gallery/nagarkot-changunarayan-2.webp'),
      alt: 'Nagarkot view tower with the Himalayan skyline beyond',
    },
    {
      source: require('../../../../assets/images/trips/gallery/nagarkot-changunarayan-3.webp'),
      alt: 'Pine forest trail descending from Nagarkot',
    },
    {
      source: require('../../../../assets/images/trips/gallery/nagarkot-changunarayan-4.webp'),
      alt: 'Terraced farmland on the descent toward Changunarayan',
    },
    {
      source: require('../../../../assets/images/trips/gallery/nagarkot-changunarayan-5.webp'),
      alt: 'Changunarayan temple complex, a UNESCO World Heritage Site',
    },
    {
      source: require('../../../../assets/images/trips/gallery/nagarkot-changunarayan-6.webp'),
      alt: 'Sunlight breaking through the pine forest along the trail',
    },
  ],
  'dhulikhel-namobuddha': [
    {
      source: require('../../../../assets/images/trips/dhulikhel-namobuddha.jpg'),
      alt: 'Golden dharma wheel and deer on the Namobuddha monastery rooftop',
    },
    {
      source: require('../../../../assets/images/trips/gallery/dhulikhel-namobuddha-2.webp'),
      alt: 'Himalayan skyline seen from the Dhulikhel ridge',
    },
    {
      source: require('../../../../assets/images/trips/gallery/dhulikhel-namobuddha-3.webp'),
      alt: 'Terraced hills and villages around Dhulikhel',
    },
    {
      source: require('../../../../assets/images/trips/gallery/dhulikhel-namobuddha-4.webp'),
      alt: 'Thrangu Tashi Yangtse Monastery at Namobuddha',
    },
    {
      source: require('../../../../assets/images/trips/gallery/dhulikhel-namobuddha-5.webp'),
      alt: 'Butter lamps and prayer flags at the Namobuddha stupa',
    },
    {
      source: require('../../../../assets/images/trips/gallery/dhulikhel-namobuddha-6.webp'),
      alt: 'Morning light filtering through the forest along the trail',
    },
  ],
  'godawari-phulchoki': [
    {
      source: require('../../../../assets/images/trips/hero/godawari-phulchoki.webp'),
      alt: 'Forested ridges falling away to a hillside town, fading into morning haze',
    },
    {
      source: require('../../../../assets/images/trips/gallery/godawari-phulchoki-2.webp'),
      alt: 'Rhododendron in bloom on the slopes of Phulchoki',
    },
    {
      source: require('../../../../assets/images/trips/gallery/godawari-phulchoki-3.webp'),
      alt: 'Phulchoki Mai temple near the summit',
    },
    {
      source: require('../../../../assets/images/trips/gallery/godawari-phulchoki-4.webp'),
      alt: 'Hazy valley views opening between the trees',
    },
    {
      source: require('../../../../assets/images/trips/gallery/godawari-phulchoki-5.webp'),
      alt: 'Forested slopes above Godawari at the trailhead',
    },
    {
      source: require('../../../../assets/images/trips/gallery/godawari-phulchoki-6.webp'),
      alt: 'Naudhara resting point along the forest climb',
    },
  ],
  'lumbini-tour': [
    {
      source: require('../../../../assets/images/trips/lumbini-tour.jpg'),
      alt: 'Lumbini Tour: the heritage landscape of the Buddha\u2019s birthplace',
    },
    {
      source: require('../../../../assets/images/trips/gallery/lumbini-tour-2.webp'),
      alt: 'Lumbini heritage site photo 1',
    },
    {
      source: require('../../../../assets/images/trips/gallery/lumbini-tour-3.webp'),
      alt: 'Lumbini heritage site photo 2',
    },
    {
      source: require('../../../../assets/images/trips/gallery/lumbini-tour-4.webp'),
      alt: 'Lumbini heritage site photo 3',
    },
    {
      source: require('../../../../assets/images/trips/gallery/lumbini-tour-5.webp'),
      alt: 'Lumbini heritage site photo 4',
    },
    {
      source: require('../../../../assets/images/trips/gallery/lumbini-tour-6.webp'),
      alt: 'Lumbini heritage site photo 5',
    },
  ],
  'kathmandu-valley-heritage-tour': [
    {
      source: require('../../../../assets/images/trips/hero/kathmandu-valley-heritage-tour.webp'),
      alt: 'Taleju Temple at sunset above Kathmandu Durbar Square',
    },
    {
      source: require('../../../../assets/images/trips/gallery/kathmandu-valley-heritage-tour-2.webp'),
      alt: 'Carved timber facade and tiered roofs at Kathmandu Durbar Square',
    },
    {
      source: require('../../../../assets/images/trips/gallery/kathmandu-valley-heritage-tour-3.webp'),
      alt: 'The stupa, shrines and prayer flags of Swayambhunath at dusk',
    },
    {
      source: require('../../../../assets/images/trips/gallery/kathmandu-valley-heritage-tour-4.webp'),
      alt: 'Tiered temple roofs and carved struts lit at night',
    },
    {
      source: require('../../../../assets/images/trips/gallery/kathmandu-valley-heritage-tour-5.webp'),
      alt: 'The gilded roofs of the Pashupatinath temple complex',
    },
    {
      source: require('../../../../assets/images/trips/gallery/kathmandu-valley-heritage-tour-6.webp'),
      alt: 'Boudhanath Stupa and prayer flags at blue hour',
    },
  ],
  'bandipur-hill-town': [
    {
      source: require('../../../../assets/images/trips/hero/bandipur-hill-town.webp'),
      alt: 'Bandipur Bazaar, the pedestrian main street of the historic hill town',
    },
    {
      source: require('../../../../assets/images/trips/gallery/bandipur-hill-town-2.webp'),
      alt: 'Residents walking the bazaar between traditional Newar houses',
    },
    {
      source: require('../../../../assets/images/trips/gallery/bandipur-hill-town-3.webp'),
      alt: 'The bazaar square and its temple in the centre of Bandipur',
    },
    {
      source: require('../../../../assets/images/trips/gallery/bandipur-hill-town-4.webp'),
      alt: 'A stone-paved street below the forested ridge above Bandipur',
    },
    {
      source: require('../../../../assets/images/trips/gallery/bandipur-hill-town-5.webp'),
      alt: 'Rooftops of the old town at golden hour',
    },
    {
      source: require('../../../../assets/images/trips/gallery/bandipur-hill-town-6.webp'),
      alt: 'Hazy hills and valleys around the Bandipur ridge',
    },
  ],
};

export function getGalleryImages(
  id: string,
): readonly GalleryImage[] | undefined {
  return Object.prototype.hasOwnProperty.call(GALLERY_IMAGES, id)
    ? GALLERY_IMAGES[id]
    : undefined;
}
