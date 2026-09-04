import { LucideIcon } from 'lucide-react';

import type { FeatureCollection, LineString, MultiLineString } from 'geojson';

export interface ElevationPoint {
  d: number; // cumulative km
  e: number; // elevation metres
  lat: number;
  lng: number;
}

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
  elevation?: string | null;
  duration?: string | null;
  distance?: string | null;
  walk?: string | null;
  note?: string | null;
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
  isDestination?: boolean;
}

export interface TrekImage {
  id: string;
  url: string;
  alt: string;
  type: 'hero' | 'landscape' | 'portrait';
  order?: number;
}

export interface GearItem {
  item: string;
  weight: string;
  quantity?: number;
}

export interface GearChecklist {
  essentials: GearItem[];
  optional?: GearItem[];
  Good_to_have?: GearItem[];
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
    tripFacts: {
      flights: string;
      accommodation: string;
      routeType: string;
      permits: string;
    };
  };
  overview: string;
  summary: string;
  timeline: TrekTimelineDay[];
  expectations: { title: string; description: string }[];
  seasonalPlanning: { month: string; condition: string }[];
  gallery: TrekImage[];
  gearChecklist: GearChecklist;
  foodMenu?: FoodMenu;
}

export interface Props {
  trekId: string;
}

export interface CheckItemData {
  id: string;
  name: string;
  weight: number;
  checked: boolean;
  quantity?: number;
}
export type GearCategoryKey = 'essential' | 'optional' | 'Good_to_have';
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

export type FoodServingType = 'single' | 'pot' | 'momo' | 'friedrice';

export interface FoodMenuItem {
  item: string;
  price?: number;
  cup?: number;
  smallPot?: number;
  mediumPot?: number;
  bigPot?: number;
  fried?: number;
  steam?: number;
  withCheese?: number;
}

export interface FoodMenuCategory {
  key: string;
  label: string;
  servingType: FoodServingType;
  items: FoodMenuItem[];
}

export interface FoodMenu {
  categories: FoodMenuCategory[];
}

export type SeasonStatus = 'peak' | 'danger' | 'caution';

export type AccessMode = 'flight' | 'jeep' | 'bus';

export interface AccessRoute {
  mode: AccessMode;
  from: { name: string; coordinates: [number, number] }; // [lat, lng]
  to: { name: string; coordinates: [number, number] };
  continuation?: AccessRoute; // second leg of a multi-leg journey
}

export interface MonthData {
  title: string;
  value: string;
  fullDescription: string;
  status: SeasonStatus;
  icon: LucideIcon;
}
