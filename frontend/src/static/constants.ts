import type { StackSlot, CardOffset } from "../types/homepage";

export const TRANSITION_DURATION_MS = 2000;
export const GAP_REM = 2.75;

export const STACK_SLOTS = [
  { widthRem: 24, heightRem: 26, topCalc: "calc(50% - 13rem)", zIndex: 30 },
  { widthRem: 16, heightRem: 20, topCalc: "calc(50% - 7rem)", zIndex: 20 },
  { widthRem: 12, heightRem: 16, topCalc: "calc(50% - 3rem)", zIndex: 10 },
] as const satisfies readonly StackSlot[];

export const SHADOW_MAP: Record<CardOffset, string> = {
  0: "shadow-[0_32px_64px_rgba(0,0,0,0.5)]",
  1: "shadow-[0_20px_40px_rgba(0,0,0,0.4)]",
  2: "shadow-[0_12px_28px_rgba(0,0,0,0.35)]",
};
export const SIZES_MAP: Record<CardOffset, string> = {
  0: "384px",
  1: "256px",
  2: "192px",
};
export const PILL_COLOR_MAP: Record<string, string> = {
  red: "#B11F12",
  green: "#3B6D11",
  yellow: "#854F0B",
  blue: "#185FA5",
};
export const DIFFICULTY_COLORS: Record<string, string> = {
  moderate: "#3B6D11",
  challenging: "#B11F12",
  difficult: "#854F0B",
};
export const WHY_NEPAL_FEATURES = [
  {
    id: "mountains",
    icon: "/icons/mount.svg",
    title: "Highest Mountains",
    description: "8 of the 14 highest peaks including Mount Everest",
  },
  {
    id: "culture",
    icon: "/icons/team-line.svg",
    title: "Rich Culture & Villages",
    description: "Experience traditional Sherpa and Tamang communities",
  },
  {
    id: "landscapes",
    icon: "/icons/team-line.svg",
    title: "Diverse Landscapes",
    description: "From subtropical forests to alpine deserts",
  },
  {
    id: "trails",
    icon: "/icons/map.svg",
    title: "World Famous Trails",
    description: "Some of the most renowned trekking routes on Earth",
  },
];

export const SOCIAL_ICONS = [
  { src: "/icons/facebook.svg", alt: "Facebook", href: "https://facebook.com" },
  {
    src: "/icons/instagram.svg",
    alt: "Instagram",
    href: "https://instagram.com",
  },
  { src: "/icons/youtube.svg", alt: "Youtube", href: "https://youtube.com" },
];
