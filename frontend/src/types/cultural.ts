import type { GearChecklist, TrekImage } from '@/types/trek';

export interface CulturalSite {
  order: number;
  name: string;
  coordinates: [number, number]; // [lat, lng] stored
  description: string;
  openHours?: string;
  entryInfo?: string;
  isHighlight?: boolean;
}

export interface CulturalTourDay {
  day: string;
  id: string;
  title: string;
  description: string;
  transport: string;
  highlights: string[];
  coordinates?: [number, number]; // [lat, lng] stored
}

export interface CulturalTripFacts {
  start: string;
  destination: string;
  keyAreas: string;
  tourType: string;
  transport: string;
  terrain: string;
}

export interface CulturalMeta {
  duration: string;
  difficulty: string;
  maxElevation: string;
  bestSeasons: string;
  startingPoint: string;
  tripFacts: CulturalTripFacts;
}

export interface CulturalTourDetail {
  id: string;
  name: string;
  region: string;
  meta: CulturalMeta;
  overview: string;
  summary: string;
  sites: CulturalSite[]; // ordered highlight sites; replaces trek `timeline`/hike `route`
  itinerary: CulturalTourDay[]; // day-by-day plan with transport + highlights
  expectations: { title: string; description: string }[];
  seasonalPlanning: { month: string; condition: string }[];
  beforeYouGo: { title: string; description: string }[];
  gallery: TrekImage[];
  gearChecklist: GearChecklist;
}