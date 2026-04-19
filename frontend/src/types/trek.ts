import { GearChecklist, TrekDay } from "./details";

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

export interface TrekTimelineEvent {
  day: string;
  title: string;
  description: string;
  stats: { elevation: string; duration: string };
}

export interface TrekImage {
  id: string;
  url: string;
  alt: string;
  type: "hero" | "landscape" | "portrait";
}

export interface TrekDetail {
  id: string;
  name: string;
  meta: {
    duration: string;
    difficulty: string;
    maxElevation: string;
    bestSeasons: string;
    startingPoint: string;
  };
  overview: string;
  // timeline: TrekTimelineEvent[];
  timeline: TrekDay[];
  expectations: { title: string; description: string }[];
  seasonalPlanning: { month: string; condition: string }[];
  gallery: TrekImage[];
  // gearChecklist: { essentials: { item: string; weight: string }[] };
  gearChecklist: GearChecklist;
}
export interface ExploreTrekCardProps extends Trek {
  href: string;
}
