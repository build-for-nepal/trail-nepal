import {
  CalendarDays,
  Clock,
  MapPin,
  Mountain,
  TrendingUp,
} from 'lucide-react-native';
import type { LucideIcon } from 'lucide-react-native';

import { acclimatizationDays, dailyWalkingHours, shortMonths } from './format';
import type {
  CulturalTourDetail,
  HikeDetail,
  TrekDetail,
  TripDetail,
} from './types';

export type DetailStat = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export type FactRow = {
  label: string;
  value: string;
  /** Hikes only: whether the elevation change goes up or down. */
  trend?: 'up' | 'down';
};

// The web's header stats, in its order. Cultural tours stay low, so they skip the elevation.
export function headerStats(detail: TripDetail): DetailStat[] {
  const { meta } = detail;
  const stats: DetailStat[] = [
    { icon: Clock, label: 'Duration', value: meta.duration.trim() },
    { icon: TrendingUp, label: 'Difficulty', value: meta.difficulty },
  ];
  if (detail.type !== 'cultural') {
    stats.push({
      icon: Mountain,
      label: 'Max Elevation',
      value: meta.maxElevation,
    });
  }
  stats.push(
    {
      icon: CalendarDays,
      label: 'Peak Season',
      value: shortMonths(meta.bestSeasons),
    },
    { icon: MapPin, label: 'Starting Point', value: meta.startingPoint },
  );
  return stats;
}

export function tripFactRows(detail: TripDetail): FactRow[] {
  switch (detail.type) {
    case 'trek':
      return trekFacts(detail);
    case 'hike':
      return hikeFacts(detail);
    case 'cultural':
      return culturalFacts(detail);
  }
}

function trekFacts({ tripFacts, itinerary }: TrekDetail): FactRow[] {
  return withValues([
    {
      label: 'Flights',
      value: tripFacts.flights === 'None' ? '' : tripFacts.flights,
    },
    { label: 'Accommodation', value: tripFacts.accommodation },
    { label: 'Daily Walking Hours', value: dailyWalkingHours(itinerary) },
    { label: 'Route Type', value: tripFacts.routeType },
    { label: 'Acclimatization Days', value: acclimatizationDays(itinerary) },
    { label: 'Permits', value: tripFacts.permits },
  ]);
}

function hikeFacts({ tripFacts }: HikeDetail): FactRow[] {
  const change = tripFacts.elevationChange;
  const trend = /descent/i.test(change)
    ? 'down'
    : /gain|ascent|uphill|climb/i.test(change)
      ? 'up'
      : undefined;

  return withValues([
    { label: 'Start', value: tripFacts.start },
    { label: 'Finish', value: tripFacts.finish },
    { label: 'Distance', value: tripFacts.distance },
    { label: 'Walking Time', value: tripFacts.walkingTime },
    { label: 'Route Type', value: tripFacts.routeType },
    { label: 'Elevation Change', value: change, trend },
  ]);
}

function culturalFacts({ tripFacts }: CulturalTourDetail): FactRow[] {
  return withValues([
    { label: 'Start', value: tripFacts.start },
    { label: 'Destination', value: tripFacts.destination ?? '' },
    { label: 'Cities', value: tripFacts.cities ?? '' },
    { label: 'Key Areas', value: tripFacts.keyAreas ?? '' },
    { label: 'Tour Type', value: tripFacts.tourType },
    { label: 'Transport', value: tripFacts.transport },
    { label: 'Terrain', value: tripFacts.terrain },
  ]);
}

function withValues(rows: FactRow[]): FactRow[] {
  return rows.filter((row) => row.value.trim() !== '');
}

export function overviewTitle(detail: TripDetail): string {
  return detail.type === 'trek' ? 'Trek Overview' : 'Overview';
}

export function overviewDescription(detail: TripDetail): string {
  return detail.type === 'cultural'
    ? 'A quick look at what awaits on the tour.'
    : 'A quick look at what awaits on the trail.';
}
