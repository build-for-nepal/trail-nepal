import type { TripType } from '@/features/explore';

import type { TripDetail } from '../types';
import { CULTURAL_TOUR_DETAILS } from './culturalTours';
import { HIKE_DETAILS } from './hikes';
import { TREK_DETAILS } from './treks';

export { getForecastLocations } from './forecastLocations';
export { getGalleryImages } from './galleryImages';
export { getHeroImage } from './heroImages';

const DETAILS: Record<TripType, Readonly<Record<string, TripDetail>>> = {
  trek: TREK_DETAILS,
  hike: HIKE_DETAILS,
  cultural: CULTURAL_TOUR_DETAILS,
};

/** Own keys only, so an id like 'constructor' finds nothing. */
export function getTripDetail(
  type: TripType,
  id: string,
): TripDetail | undefined {
  const details = DETAILS[type];
  return Object.prototype.hasOwnProperty.call(details, id)
    ? details[id]
    : undefined;
}
