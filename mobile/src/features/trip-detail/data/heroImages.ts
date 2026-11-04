import type { ImageRequireSource } from 'react-native';

// The web's header photos (the gallery's 'hero' image), at most 1920 px. Dhulikhel to
// Namobuddha and Lumbini are missing because the web's photo is their card photo.
const HERO_IMAGES: Readonly<Record<string, ImageRequireSource>> = {
  'ebc-trek': require('../../../../assets/images/trips/hero/ebc-trek.webp'),
  'manaslu-circuit': require('../../../../assets/images/trips/hero/manaslu-circuit.webp'),
  'langtang-valley': require('../../../../assets/images/trips/hero/langtang-valley.webp'),
  'abc-trek': require('../../../../assets/images/trips/hero/abc-trek.webp'),
  'gokyo-valley-trek': require('../../../../assets/images/trips/hero/gokyo-valley-trek.webp'),
  'ghorepani-poon-hill-trek': require('../../../../assets/images/trips/hero/ghorepani-poon-hill-trek.webp'),
  'mardi-himal-trek': require('../../../../assets/images/trips/hero/mardi-himal-trek.webp'),
  'shey-phoksundo': require('../../../../assets/images/trips/hero/shey-phoksundo.webp'),
  'tilicho-lake-trek': require('../../../../assets/images/trips/hero/tilicho-lake-trek.webp'),
  'nagarkot-changunarayan': require('../../../../assets/images/trips/hero/nagarkot-changunarayan.webp'),
  'godawari-phulchoki': require('../../../../assets/images/trips/hero/godawari-phulchoki.webp'),
  'kathmandu-valley-heritage-tour': require('../../../../assets/images/trips/hero/kathmandu-valley-heritage-tour.webp'),
  'bandipur-hill-town': require('../../../../assets/images/trips/hero/bandipur-hill-town.webp'),
};

export function getHeroImage(id: string): ImageRequireSource | undefined {
  return Object.prototype.hasOwnProperty.call(HERO_IMAGES, id)
    ? HERO_IMAGES[id]
    : undefined;
}
