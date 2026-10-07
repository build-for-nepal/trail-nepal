import { Prisma } from '../../../generated/prisma/client.js';
import type {
  DetailInput,
  ImageInput,
  RouteInput,
  TimelineInput,
} from './experience.write.validator.js';

export function jsonValue(
  value: unknown,
): Prisma.InputJsonValue | Prisma.NullableJsonNullValueInput {
  return value === undefined || value === null
    ? Prisma.DbNull
    : (value as Prisma.InputJsonValue);
}

// ----------------------------------
// create

export function toDetailCreate(detail: DetailInput, experienceId: string) {
  const { data, ...rest } = detail;
  return { experienceId, ...rest, data: jsonValue(data) };
}

export function toImageCreate(image: ImageInput, experienceId: string) {
  const { metadata, ...rest } = image;
  return { experienceId, ...rest, metadata: jsonValue(metadata) };
}

export function toTimelineItemCreate(
  item: TimelineInput['items'][number],
  timelineId: string,
  index: number,
) {
  const { data, order, ...rest } = item;
  return {
    timelineId,
    ...rest,
    // GET sorts by order first, so position becomes the order when the client
    // omits it rather than leaving the response to fall back on insertion order.
    order: order ?? index + 1,
    data: jsonValue(data),
  };
}

export function toRouteCreate(route: RouteInput, experienceId: string) {
  const { geojson, ...rest } = route;
  return { experienceId, ...rest, geojson: jsonValue(geojson) };
}

// ----------------------------------
// patch

// Each returns only the keys the payload actually sent, so an omitted scalar
// or Json column stays untouched instead of being reset to null. The unique
// locator is deliberately left in: writing it back is a no-op.

export function toDetailUpdate(detail: DetailInput) {
  const { data, ...rest } = detail;
  return { ...rest, ...(data !== undefined ? { data: jsonValue(data) } : {}) };
}

export function toTimelineUpdate(timeline: Omit<TimelineInput, 'items'>) {
  const { information, ...rest } = timeline;
  return {
    ...rest,
    ...(information !== undefined
      ? { information: jsonValue(information) }
      : {}),
  };
}

export function toRouteUpdate(route: RouteInput) {
  const { geojson, ...rest } = route;
  return {
    ...rest,
    ...(geojson !== undefined ? { geojson: jsonValue(geojson) } : {}),
  };
}
