import {
  CULTURAL_MAX_ZOOM,
  MAX_ZOOM,
  PIN_ORANGE,
} from '@/features/trail-map/constants';
import {
  FLAG_AT_START,
  getAccessRoute,
} from '@/features/trail-map/data/accessRoutes';
import { getRoute } from '@/features/trail-map/data/routes';
import { accessLegs } from '@/features/trail-map/logic/arcs';
import {
  flagPosition,
  pinFor,
  pinGroups,
  toLngLat,
} from '@/features/trail-map/logic/markers';
import type { PinGroup } from '@/features/trail-map/logic/markers';
import type {
  MapPin,
  MapStop,
  PinCard,
  TrailMapData,
} from '@/features/trail-map/types';

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

/**
 * A day's or section's popup card, as the web's buildPopupHTML writes it: a trek day has its
 * elevation, distance and time, a hike section its distance and time marks.
 */
function entryCard(detail: TrekDetail | HikeDetail, index: number): PinCard {
  if (detail.type === 'hike') {
    const section = detail.route[index];
    return {
      day: index,
      tab: section.order,
      title: section.title,
      stats: [
        { label: 'Distance', value: section.distanceMark ?? 'N/A' },
        { label: 'Est. Time', value: section.timeMark ?? 'N/A' },
      ],
    };
  }
  const day = detail.itinerary[index];
  return {
    day: index,
    tab: `Day ${day.day ?? ''}`,
    eyebrow: `Day ${day.day ?? ''}`,
    title: day.title,
    stats: [
      { label: 'Elevation', value: day.stats?.elevation ?? 'N/A' },
      { label: 'Distance', value: day.stats?.distance ?? 'N/A' },
      { label: 'Est. Time', value: day.stats?.duration ?? 'N/A', wide: true },
    ],
  };
}

function trailMapData(
  detail: TrekDetail | HikeDetail,
  id: string,
): TrailMapData | undefined {
  const route = getRoute(id);
  if (!route || route.line.length < 2) return undefined;
  const stops = mapStops(detail);
  const groups = pinGroups(stops, route.line);
  const keyOf = (group: PinGroup) => `stop-${group.stops[0]}`;
  const pins: MapPin[] = groups.map((group) => ({
    key: keyOf(group),
    lngLat: group.lngLat,
    label: group.label,
    color: PIN_ORANGE,
    description: pinDescription(detail, stops, group),
    days: group.stops,
    cards: group.stops.map((index) => entryCard(detail, index)),
  }));
  const access = getAccessRoute(id);

  return {
    kind: 'trail',
    line: route.line,
    pins,
    // As on the web, the trail alone: a first day in Kathmandu would zoom the view far out.
    overview: route.line,
    maxZoom: MAX_ZOOM,
    flag: flagPosition(stops, route.line, FLAG_AT_START.has(id)) ?? undefined,
    access: access ? accessLegs(access) : undefined,
    days: stops.map((stop, index) => {
      const group = pinFor(groups, index);
      if (!stop.coordinates || !group) return null;
      return { points: [toLngLat(stop.coordinates)], pins: [keyOf(group)] };
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
      // As the web's buildSitePopupHTML: the site's name over its short line.
      cards: [
        { day: index, tab: site.name, title: site.name, line: site.tooltip },
      ],
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
