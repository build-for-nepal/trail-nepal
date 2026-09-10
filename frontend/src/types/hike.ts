import type { GearChecklist, TrekImage } from '@/types/trek';

// Single-day hikes reuse the trek leaf types (TrekImage, GearChecklist,
// {title,description}, {month,condition}) but diverge on the route model and
// trip facts. A hike route is a set of ordered sections (01→05), not days:
// no accommodation, no per-section price.

export type HikeRouteRole = 'start' | 'turnaround' | 'finish';

export type HikeRouteType = 'Point-to-point' | 'Out-and-back' | 'Loop';

export interface HikeRouteSection {
  order: string; // "01"
  title: string; // "Nagarkot"
  distanceMark?: string; // "~3 km"
  timeMark?: string; // "~45 min"
  role?: HikeRouteRole;
  description?: string;
  terrain?: string; // "Ridge path → open hillside → farmland"
  coordinates?: [number, number]; // [lat, lng] stored / [lng, lat] rendered
  isDestination?: boolean; // turnaround/summit for out-and-back
}

export interface HikeTripFacts {
  start: string;
  finish: string;
  distance: string;
  walkingTime: string;
  routeType: HikeRouteType;
  elevationChange: string;
  direction: string;
  terrain: string;
}

export interface HikeMeta {
  duration: string;
  difficulty: string;
  maxElevation: string;
  bestSeasons: string;
  startingPoint: string;
  tripFacts: HikeTripFacts;
}

export interface HikeDetail {
  id: string;
  name: string;
  region: string;
  meta: HikeMeta;
  overview: string;
  summary: string;
  route: HikeRouteSection[]; // replaces trek `timeline`
  expectations: { title: string; description: string }[];
  seasonalPlanning: { month: string; condition: string }[];
  gallery: TrekImage[];
  gearChecklist: GearChecklist;
}
