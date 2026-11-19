// Lays a backend experience over the matching static record.
//
// The static record is the base: it carries everything the backend does not
// own (gallery, region label, food menu, entry fees, map zoom) and is what the
// page was prerendered with. Text and trip facts come from the backend. Any
// backend value with an unexpected shape is ignored in favour of the static
// one, so a bad row can degrade a field but never break a page.

import type {
  ApiExperience,
  ApiTimelineItem,
} from '@/components/admin/api/experiences.types';
import type {
  CulturalSite,
  CulturalTourDay,
  CulturalTourDetail,
} from '@/types/cultural';
import type {
  HikeDetail,
  HikeRouteRole,
  HikeRouteSection,
  HikeRouteType,
} from '@/types/hike';
import type {
  GearChecklist,
  GearItem,
  SeasonStatus,
  TrekDetail,
  TrekTimelineDay,
} from '@/types/trek';

import {
  asString,
  asStringArray,
  difficultyLabel,
  formatDuration,
  formatElevation,
  formatSeasons,
  isRecord,
  optionalBoolean,
  optionalString,
  padTwo,
  shareEqual,
  swapCoords,
} from './format';

// Pin colour for an itinerary day the backend sends without one.
const DEFAULT_DAY_COLOR = '#376BB6';

// --- reading the backend payload --------------------------------------------

function detailContent(api: ApiExperience, key: string): string | undefined {
  const content = api.details.find((row) => row.key === key)?.content;
  return content ? content : undefined;
}

function detailData(api: ApiExperience, key: string): unknown {
  return api.details.find((row) => row.key === key)?.data;
}

// `timeline` is a relation list holding at most one timeline.
function timelineItems(api: ApiExperience): ApiTimelineItem[] {
  return api.timeline[0]?.items ?? [];
}

function itemData(item: ApiTimelineItem): Record<string, unknown> {
  return isRecord(item.data) ? item.data : {};
}

// --- parsers for the JSON detail rows ---------------------------------------

type TextItem = { title: string; description: string };

function parseTextItems(value: unknown): TextItem[] | undefined {
  if (!Array.isArray(value)) return undefined;

  const items: TextItem[] = [];
  for (const entry of value) {
    if (!isRecord(entry)) return undefined;
    const title = asString(entry.title);
    const description = asString(entry.description);
    if (title === undefined || description === undefined) return undefined;
    items.push({ title, description });
  }
  return items;
}

type SeasonItem = { month: string; condition: string; status?: SeasonStatus };

function isSeasonStatus(value: unknown): value is SeasonStatus {
  return value === 'peak' || value === 'danger' || value === 'caution';
}

function parseSeasonalPlanning(value: unknown): SeasonItem[] | undefined {
  if (!Array.isArray(value)) return undefined;

  const items: SeasonItem[] = [];
  for (const entry of value) {
    if (!isRecord(entry)) return undefined;
    const month = asString(entry.month);
    const condition = asString(entry.condition);
    if (month === undefined || condition === undefined) return undefined;
    items.push(
      isSeasonStatus(entry.status)
        ? { month, condition, status: entry.status }
        : { month, condition },
    );
  }
  return items;
}

function parseGearItems(value: unknown): GearItem[] | undefined {
  if (!Array.isArray(value)) return undefined;

  const items: GearItem[] = [];
  for (const entry of value) {
    if (!isRecord(entry)) return undefined;
    const item = asString(entry.item);
    const weight = asString(entry.weight);
    if (item === undefined || weight === undefined) return undefined;
    items.push(
      typeof entry.quantity === 'number'
        ? { item, weight, quantity: entry.quantity }
        : { item, weight },
    );
  }
  return items;
}

function parseGearChecklist(
  value: unknown,
  base: GearChecklist | undefined,
): GearChecklist | undefined {
  if (!isRecord(value)) return undefined;

  const essentials = parseGearItems(value.essentials);
  if (!essentials) return undefined;

  const checklist: GearChecklist = { essentials };

  if (value.optional !== undefined && value.optional !== null) {
    const optional = parseGearItems(value.optional);
    if (!optional) return undefined;
    checklist.optional = optional;
  }

  // The backend has no "good to have" list, so the static one is kept.
  if (base?.Good_to_have) checklist.Good_to_have = base.Good_to_have;

  return checklist;
}

function parseSites(value: unknown): CulturalSite[] | undefined {
  if (!Array.isArray(value)) return undefined;

  const sites: CulturalSite[] = [];
  for (const entry of value) {
    if (!isRecord(entry)) return undefined;
    const name = asString(entry.name);
    const description = asString(entry.description);
    const coordinates = swapCoords(entry.coordinates);
    if (
      typeof entry.order !== 'number' ||
      name === undefined ||
      description === undefined ||
      !coordinates
    ) {
      return undefined;
    }

    const site: CulturalSite = {
      order: entry.order,
      name,
      coordinates,
      description,
    };

    const tooltip = optionalString(entry.tooltip, undefined);
    const openHours = optionalString(entry.openHours, undefined);
    const entryInfo = optionalString(entry.entryInfo, undefined);
    const dayId = optionalString(entry.dayId, undefined);
    if (tooltip !== undefined) site.tooltip = tooltip;
    if (openHours !== undefined) site.openHours = openHours;
    if (entryInfo !== undefined) site.entryInfo = entryInfo;
    if (dayId !== undefined) site.dayId = dayId;
    if (typeof entry.isHighlight === 'boolean') {
      site.isHighlight = entry.isHighlight;
    }

    sites.push(site);
  }
  return sites;
}

// --- shared pieces ----------------------------------------------------------

type CommonMeta = {
  duration: string;
  difficulty: string;
  maxElevation: string;
  bestSeasons: string;
  startingPoint: string;
};

function mergeMeta<T extends CommonMeta>(base: T, api: ApiExperience): T {
  return {
    ...base,
    duration: formatDuration(api.durationDays, base.duration),
    difficulty: difficultyLabel(api.difficulty) ?? base.difficulty,
    maxElevation: formatElevation(api.maxElevationM, base.maxElevation),
    bestSeasons: formatSeasons(api.peakSeason, 'long') ?? base.bestSeasons,
    startingPoint: api.startPoint || base.startingPoint,
  };
}

// Keys of T whose value may be any string (so not a narrower string union).
type StringKeys<T> = {
  [K in keyof T]-?: string extends T[K] ? K : never;
}[keyof T];

// Overrides the listed string fields of a trip-facts object with the backend's.
function overlayStrings<T extends object>(
  base: T,
  data: unknown,
  keys: readonly StringKeys<T>[],
): T {
  if (!isRecord(data)) return base;

  const patch: Partial<Record<StringKeys<T>, string>> = {};
  for (const key of keys) {
    const value = data[String(key)];
    if (typeof value === 'string' && value !== '') patch[key] = value;
  }
  return { ...base, ...patch };
}

function isHikeRouteType(value: unknown): value is HikeRouteType {
  return (
    value === 'Point-to-point' || value === 'Out-and-back' || value === 'Loop'
  );
}

function isHikeRouteRole(value: unknown): value is HikeRouteRole {
  return value === 'start' || value === 'turnaround' || value === 'finish';
}

// --- trek -------------------------------------------------------------------

function mergeTrekTimeline(
  base: TrekTimelineDay[],
  items: ApiTimelineItem[],
): TrekTimelineDay[] {
  if (items.length === 0) return base;

  // Items are merged by position onto the static day, so fields only the static
  // data has (accommodations, stats.walk, variant) survive.
  return items.map((item, index) => {
    const previous = base[index];
    const data = itemData(item);

    const stats = {
      ...previous?.stats,
      elevation: optionalString(data.altitude, previous?.stats?.elevation),
      duration: optionalString(data.duration, previous?.stats?.duration),
      distance: optionalString(data.distance, previous?.stats?.distance),
      note: optionalString(data.note, previous?.stats?.note),
    };
    const hasStats = Object.values(stats).some(
      (value) => value !== undefined && value !== null,
    );

    return {
      ...previous,
      day: padTwo(item.dayNumber ?? item.order ?? index + 1),
      title: item.title ?? previous?.title ?? '',
      description: optionalString(data.description, previous?.description),
      stats: hasStats || previous?.stats ? stats : undefined,
      coordinates: swapCoords(data.coordinates) ?? previous?.coordinates,
      price: optionalString(data.price, previous?.price),
      isDestination: optionalBoolean(
        data.isDestination,
        previous?.isDestination,
      ),
    };
  });
}

export function mergeTrekDetail(
  base: TrekDetail,
  api: ApiExperience,
): TrekDetail {
  const merged: TrekDetail = {
    ...base,
    name: api.name || base.name,
    summary: api.shortDescription || base.summary,
    overview: detailContent(api, 'overview') ?? base.overview,
    meta: {
      ...mergeMeta(base.meta, api),
      tripFacts: overlayStrings(
        base.meta.tripFacts,
        detailData(api, 'tripFacts'),
        ['flights', 'accommodation', 'routeType', 'permits'],
      ),
    },
    timeline: mergeTrekTimeline(base.timeline, timelineItems(api)),
    expectations:
      parseTextItems(detailData(api, 'expectations')) ?? base.expectations,
    seasonalPlanning:
      parseSeasonalPlanning(detailData(api, 'seasonalPlanning')) ??
      base.seasonalPlanning,
    gearChecklist:
      parseGearChecklist(
        detailData(api, 'gearChecklist'),
        base.gearChecklist,
      ) ?? base.gearChecklist,
  };

  return shareEqual(base, merged);
}

// --- hike -------------------------------------------------------------------

function mergeHikeRoute(
  base: HikeRouteSection[],
  items: ApiTimelineItem[],
): HikeRouteSection[] {
  if (items.length === 0) return base;

  return items.map((item, index) => {
    const previous = base[index];
    const data = itemData(item);

    let role = previous?.role;
    if (data.role === undefined || data.role === null) role = undefined;
    else if (isHikeRouteRole(data.role)) role = data.role;

    return {
      ...previous,
      order: padTwo(item.order ?? index + 1),
      title: item.title ?? previous?.title ?? '',
      distanceMark: optionalString(data.distance, previous?.distanceMark),
      timeMark: optionalString(data.duration, previous?.timeMark),
      role,
      description: optionalString(data.description, previous?.description),
      terrain: optionalString(data.terrain, previous?.terrain),
      coordinates: swapCoords(data.coordinates) ?? previous?.coordinates,
      isDestination: optionalBoolean(
        data.isDestination,
        previous?.isDestination,
      ),
    };
  });
}

export function mergeHikeDetail(
  base: HikeDetail,
  api: ApiExperience,
): HikeDetail {
  const facts = detailData(api, 'tripFacts');
  const routeType = isRecord(facts) ? facts.routeType : undefined;

  const merged: HikeDetail = {
    ...base,
    name: api.name || base.name,
    summary: api.shortDescription || base.summary,
    overview: detailContent(api, 'overview') ?? base.overview,
    meta: {
      ...mergeMeta(base.meta, api),
      tripFacts: {
        ...overlayStrings(base.meta.tripFacts, facts, [
          'start',
          'finish',
          'distance',
          'walkingTime',
          'elevationChange',
          'direction',
          'terrain',
        ]),
        routeType: isHikeRouteType(routeType)
          ? routeType
          : base.meta.tripFacts.routeType,
      },
    },
    route: mergeHikeRoute(base.route, timelineItems(api)),
    expectations:
      parseTextItems(detailData(api, 'expectations')) ?? base.expectations,
    seasonalPlanning:
      parseSeasonalPlanning(detailData(api, 'seasonalPlanning')) ??
      base.seasonalPlanning,
    gearChecklist:
      parseGearChecklist(
        detailData(api, 'gearChecklist'),
        base.gearChecklist,
      ) ?? base.gearChecklist,
  };

  return shareEqual(base, merged);
}

// --- cultural tour ----------------------------------------------------------

function mergeItinerary(
  base: CulturalTourDay[],
  items: ApiTimelineItem[],
): CulturalTourDay[] {
  if (items.length === 0) return base;

  return items.map((item, index) => {
    const previous = base[index];
    const data = itemData(item);
    const dayNumber = padTwo(item.dayNumber ?? item.order ?? index + 1);

    return {
      ...previous,
      day: `Day ${dayNumber}`,
      id: asString(data.dayId) || previous?.id || `day-${dayNumber}`,
      title: item.title ?? previous?.title ?? '',
      description: asString(data.description) ?? previous?.description ?? '',
      transport: asString(data.transport) ?? previous?.transport ?? '',
      color: asString(data.color) || previous?.color || DEFAULT_DAY_COLOR,
      highlights: asStringArray(data.highlights) ?? previous?.highlights ?? [],
      coordinates: swapCoords(data.coordinates) ?? previous?.coordinates,
    };
  });
}

export function mergeCulturalDetail(
  base: CulturalTourDetail,
  api: ApiExperience,
): CulturalTourDetail {
  const merged: CulturalTourDetail = {
    ...base,
    name: api.name || base.name,
    summary: api.shortDescription || base.summary,
    overview: detailContent(api, 'overview') ?? base.overview,
    meta: {
      ...mergeMeta(base.meta, api),
      tripFacts: overlayStrings(
        base.meta.tripFacts,
        detailData(api, 'tripFacts'),
        [
          'start',
          'destination',
          'cities',
          'keyAreas',
          'tourType',
          'transport',
          'terrain',
        ],
      ),
    },
    sites: parseSites(detailData(api, 'sites')) ?? base.sites,
    itinerary: mergeItinerary(base.itinerary, timelineItems(api)),
    expectations:
      parseTextItems(detailData(api, 'expectations')) ?? base.expectations,
    seasonalPlanning:
      parseSeasonalPlanning(detailData(api, 'seasonalPlanning')) ??
      base.seasonalPlanning,
    beforeYouGo:
      parseTextItems(detailData(api, 'beforeYouGo')) ?? base.beforeYouGo,
    gearChecklist:
      parseGearChecklist(
        detailData(api, 'gearChecklist'),
        base.gearChecklist,
      ) ?? base.gearChecklist,
  };

  return shareEqual(base, merged);
}
