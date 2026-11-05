import type { AdminFormValues, AdminListItem } from '../admin-helper';
import { routeDefault } from '../admin-helper';
import type { ApiExperience, ApiListItem } from './experiences.types';

const text = (value: string | null | undefined) => value ?? '';
const num = (value: number | string | null | undefined) =>
  value === null || value === undefined ? '' : String(value);
// Drop the trailing zeros Postgres adds to decimals ("4.50" -> "4.5").
const decimal = (value: string | null | undefined) =>
  value === null || value === undefined ? '' : String(Number(value));

// The list endpoint only ever returns PUBLISHED rows and does not include the
// status column, so every row is shown as published.
export function toAdminListItem(item: ApiListItem): AdminListItem {
  return {
    id: item.id,
    slug: item.slug,
    name: item.name,
    type: item.type,
    status: 'PUBLISHED',
    region: item.region,
  };
}

// GET /:id only serves PUBLISHED + active rows, so status and isActive are
// known by construction even though the payload omits them.
export function toFormValues(experience: ApiExperience): AdminFormValues {
  const route = experience.route;
  const timeline = experience.timeline[0];
  return {
    slug: experience.slug,
    name: experience.name,
    type: experience.type as AdminFormValues['type'],
    status: 'PUBLISHED',
    shortDescription: experience.shortDescription,

    durationDays: num(experience.durationDays),
    minDays: num(experience.minDays),
    maxDays: num(experience.maxDays),

    difficulty: experience.difficulty,
    difficultyScore: num(experience.difficultyScore),
    thumbnail: text(experience.thumbnail),

    maxElevationM: num(experience.maxElevationM),
    peakSeason: experience.peakSeason,
    priceNpr: num(experience.priceNpr),

    region: experience.region,
    startPoint: text(experience.startPoint),

    interest: experience.interest,
    activity: experience.activity,

    isPopular: experience.isPopular,
    isActive: true,

    details: experience.details.map((row) => ({
      key: row.key,
      title: text(row.title),
      description: text(row.description),
      imageUrl: text(row.imageUrl),
      content: text(row.content),
      data: row.data ?? undefined,
    })),
    images: experience.images.map((image) => ({
      url: text(image.url),
      storageKey: '',
      alt: text(image.alt),
      type: image.type,
      metadata: undefined,
    })),
    timeline: {
      title: text(timeline?.title),
      description: text(timeline?.description),
      items: (timeline?.items ?? []).map((item) => ({
        order: num(item.order),
        dayNumber: num(item.dayNumber),
        title: text(item.title),
        data: item.data ?? undefined,
      })),
    },
    route: route
      ? {
          ...routeDefault,
          startLng: num(route.startCoords[0]),
          startLat: num(route.startCoords[1]),
          endLng: num(route.endCoords[0]),
          endLat: num(route.endCoords[1]),
          distanceKm: decimal(route.distanceKm),
          maxElevationM: num(route.maxElevationM),
          ascentM: num(route.ascentM),
          descentM: num(route.descentM),
          // Not returned by the API: leave unset so a save keeps the stored value.
          routeDifficulty: '',
          source: '',
          geojson: route.geojson ?? undefined,
        }
      : null,
  };
}
