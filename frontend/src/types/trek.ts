//EXPLORE PAGE TYPES
export interface Trek {
  id: string;
  title: string;
  region: string;
  duration: string;
  altitude: string;
  season: string;
  price: number;
  difficulty: "Easy" | "Moderate" | "Challenging" | "Difficult" | "Strenuous";
  imageUrl: string;
  description: string;
  isPopular: boolean;
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
  price?: string;
}

export interface TrekImage {
  id: string;
  url: string;
  alt: string;
  type: "hero" | "landscape" | "portrait";
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
