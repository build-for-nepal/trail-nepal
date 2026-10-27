import {
  CULTURAL_MAX_ZOOM,
  MAX_ZOOM,
  PIN_ORANGE,
} from '@/features/trail-map/constants';
import { getRoute } from '@/features/trail-map/data/routes';
import {
  pinFor,
  pinGroups,
  toLngLat,
} from '@/features/trail-map/logic/markers';
import type { PinGroup } from '@/features/trail-map/logic/markers';
import type { MapPin, MapStop, TrailMapData } from '@/features/trail-map/types';

import type {
  CulturalTourDetail,
  HikeDetail,
  TrekDetail,
  TripDetail,
} from './types';

/** A trek's days or a hike's sections, as the trail map's stops. */
function mapStops(detail: TrekDetail | HikeDetail): MapStop[] {
  if (detail.type === 'trek') {
    return detail.itinerary.map((day) => ({
      label: day.day ?? '',
      title: day.title,
      coordinates: day.coordinates,
      isDestination: day.isDestination,
    }));
  }
  // The web marks a hike's turnaround as its destination; here it is the section's role.
  return detail.route.map((section) => ({
    label: section.order,
    title: section.title,
    coordinates: section.coordinates,
    isDestination: section.role === 'turnaround',
  }));
}

/** What TalkBack reads for a pin, e.g. 'Day 04, Trek to Namche Bazaar'. */
function pinDescription(
  detail: TrekDetail | HikeDetail,
  stops: MapStop[],
  group: PinGroup,
): string {
  const titles = group.stops.map((index) => stops[index].title).join('; ');
  if (detail.type === 'hike') return `Section ${group.label}, ${titles}`;
  return `${group.stops.length > 1 ? 'Days' : 'Day'} ${group.label}, ${titles}`;
}

function trailMapData(
  detail: TrekDetail | HikeDetail,
  id: string,
): TrailMapData | undefined {
  const route = getRoute(id);
  if (!route || route.line.length < 2) return undefined;
  const stops = mapStops(detail);
  const groups = pinGroups(stops, route.line);
  const toPin = (group: PinGroup, key: string): MapPin => ({
    key,
    lngLat: group.lngLat,
    label: group.label,
    color: PIN_ORANGE,
    description: pinDescription(detail, stops, group),
    days: group.stops,
  });
  const keyOf = (group: PinGroup) => `stop-${group.stops[0]}`;

  return {
    kind: 'trail',
    line: route.line,
    pins: groups.map((group) => toPin(group, keyOf(group))),
    // As on the web, the trail alone: a first day in Kathmandu would zoom the view far out.
    overview: route.line,
    maxZoom: MAX_ZOOM,
    days: stops.map((stop, index) => {
      if (!stop.coordinates) return null;
      const point = toLngLat(stop.coordinates);
      const group = pinFor(groups, index, point);
      if (group) return { points: [point], pins: [keyOf(group)] };
      // The web pins a trail only up to its destination, so most of the way back has no pin.
      const own = { lngLat: point, label: stop.label, stops: [index] };
      return { points: [point], pins: [], pin: toPin(own, `day-${index}`) };
    }),
  };
}

function tourMapData(detail: CulturalTourDetail): TrailMapData | undefined {
  const dayIndex = new Map(detail.itinerary.map((day, i) => [day.id, i]));
  const pins: MapPin[] = [];
  for (const site of detail.sites) {
    const index = dayIndex.get(site.dayId);
    if (index === undefined) continue;
    const day = detail.itinerary[index];
    pins.push({
      key: `site-${site.order}`,
      lngLat: toLngLat(site.coordinates),
      label: String(site.order),
      color: day.color,
      description: `${site.name}, ${day.day}`,
      days: [index],
    });
  }
  if (pins.length === 0) return undefined;

  return {
    kind: 'sites',
    line: [],
    pins,
    overview: pins.map((pin) => pin.lngLat),
    overviewZoom: detail.mapOverviewZoom,
    maxZoom: CULTURAL_MAX_ZOOM,
    days: detail.itinerary.map((_, index) => {
      const own = pins.filter((pin) => pin.days[0] === index);
      if (own.length === 0) return null;
      return {
        points: own.map((pin) => pin.lngLat),
        pins: own.map((pin) => pin.key),
      };
    }),
  };
}

/**
 * Everything the trip's map shows: a trek's or hike's route and day pins, or a tour's sites
 * in their days' colours. Undefined for a trip with nothing to map.
 */
export function tripMapData(
  detail: TripDetail,
  id: string,
): TrailMapData | undefined {
  return detail.type === 'cultural'
    ? tourMapData(detail)
    : trailMapData(detail, id);
}
