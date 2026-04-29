import { LucideIcon } from 'lucide-react';

import type { FeatureCollection, LineString, MultiLineString } from 'geojson';

//Routes types
export interface RouteProperties {
  id: string;
  name: string;
  difficulty: 'easy' | 'moderate' | 'hard' | 'extreme' | null;
  maxElevationM: number | null;
}

// Routes can be a single line or multiple connected lines (from OSM)
export type TrekRouteCollection = FeatureCollection<
  LineString | MultiLineString,
  RouteProperties
>;

//EXPLORE PAGE TYPES
export interface Trek {
  id: string;
  title: string;
  region: string;
  duration: string;
  altitude: string;
  season: string;
  price: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Difficult' | 'Strenuous';
  imageUrl: string;
  description: string;
  isPopular: boolean;
  keywords: string[];
}

export interface ExploreTrekCardProps extends Trek {
  href: string;
}

//TREK DETAIL PAGE TYPES

export interface TrekAccommodation {
  name: string;
  phone?: string;
}

export interface TrekStat {
  elevation?: string;
  duration?: string;
  distance?: string;
  walk?: string;
  note?: string;
}

export interface TrekTimelineDay {
  day?: string;
  id?: string | number;
  title: string;
  description?: string;
  content?: string;
  accommodations?: TrekAccommodation[];
  stats?: TrekStat;
  coordinates?: [number, number];
  price?: string;
}

export interface TrekImage {
  id: string;
  url: string;
  alt: string;
  type: 'hero' | 'landscape' | 'portrait';
}

export interface GearItem {
  item: string;
  weight: string;
}

export interface GearChecklist {
  essentials: GearItem[];
  optional?: GearItem[];
}

export interface TrekDetail {
  id: string;
  name: string;
  region: string;
  meta: {
    duration: string;
    difficulty: string;
    maxElevation: string;
    bestSeasons: string;
    startingPoint: string;
  };
  overview: string;
  timeline: TrekTimelineDay[];
  expectations: { title: string; description: string }[];
  seasonalPlanning: { month: string; condition: string }[];
  gallery: TrekImage[];
  gearChecklist: GearChecklist;
}

export interface Props {
  trekId: string;
}

export interface CheckItemData {
  id: string;
  name: string;
  weight: number;
  checked: boolean;
}
export type GearCategoryKey = 'essential' | 'optional';
export interface GearCategory {
  key: GearCategoryKey;
  label: string;
  items: CheckItemData[];
}

export interface CheckItemProps {
  id: string;
  name: string;
  weight: number;
  checked: boolean;
  onToggle: (id: string) => void;
  showBottomBorder: boolean;
}
export type SeasonStatus = 'peak' | 'danger' | 'caution';

export interface MonthData {
  title: string;
  value: string;
  fullDescription: string;
  status: SeasonStatus;
  icon: LucideIcon;
}
