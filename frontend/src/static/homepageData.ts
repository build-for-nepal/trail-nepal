import type { Route } from "next";
import { POPULAR_TREKS } from "../static/trek";
import {
  Collaborator,
  CostData,
  Slide,
  SocialLink,
  TierKey,
  TrekInfoData,
} from "../types/homepage";

export const SLIDES: Slide[] = [
  {
    id: "everest-base-camp",
    title: "Everest Base Camp Trek",
    imageAlt: "The iconic Everest Base Camp rock marker at 5364 meters",
    imageSrc: "/images/Carousel/ebc.jpg",
    description:
      "Stand at the foot of the world's highest peak. Journey through the Khumbu Valley to witness the legendary 5,364m marker and the moving spirit of global explorers.",
  },
  {
    id: "annapurna-base-camp",
    title: "Annapurna Base Camp Trek",
    imageAlt:
      "Majestic snow-capped Himalayan peaks piercing through a sea of clouds",
    imageSrc: "/images/Carousel/annapurna.jpg",
    description:
      "A breathtaking journey into a natural amphitheater of towering peaks deep in the heart of the Annapurna Himalaya.",
  },
  {
    id: "langtang-trek",
    title: "Langtang Valley Trek",
    imageAlt:
      "A serene high-altitude turquoise lake nestled between rugged mountain ridges",
    imageSrc: "/images/Carousel/langtang.jpg",
    description:
      "A culturally rich trek through lush forests and Tamang villages with stunning views of glaciers and snow-covered peaks.",
  },
  {
    id: "manaslu-circuit",
    title: "Manaslu Circuit Trek",
    imageAlt:
      "A massive mountain face glowing with brilliant orange light during sunset",
    imageSrc: "/images/Carousel/manaslu.jpg",
    description:
      "A remote Himalayan adventure circling one of the world’s highest mountains through Tibetan influenced villages and high mountain passes.",
  },
  {
    id: "mardi-himal",
    title: "Mardi Himal Trek",
    imageAlt:
      "The striking pyramid peak of Ama Dablam soaring above the clouds",
    imageSrc: "/images/Carousel/mardihimal.jpg",
    description:
      "A short yet spectacular ridge trek offering close-up views of Machapuchare and the Annapurna range.",
  },
];

export const TIERS: { key: TierKey; label: string }[] = [
  { key: "budget", label: "Budget" },
  { key: "mid-range", label: "Mid-range" },
  { key: "comfort", label: "Comfort" },
];

export const COST_DATA: CostData = {
  budget: {
    pillLabel: "Budget",
    items: [
      { label: "Accommodation", amount: 8000 },
      { label: "Food", amount: 8000 },
      { label: "Permits", amount: 8000 },
      { label: "Transport", amount: 8000 },
      { label: "Guide", amount: 8000 },
    ],
    total: 18000,
  },
  "mid-range": {
    pillLabel: "Mid-range",
    items: [
      { label: "Accommodation", amount: 15000 },
      { label: "Food", amount: 12000 },
      { label: "Permits", amount: 8000 },
      { label: "Transport", amount: 10000 },
      { label: "Guide", amount: 12000 },
    ],
    total: 57000,
  },
  comfort: {
    pillLabel: "Comfort",
    items: [
      { label: "Accommodation", amount: 25000 },
      { label: "Food", amount: 18000 },
      { label: "Permits", amount: 8000 },
      { label: "Transport", amount: 15000 },
      { label: "Guide", amount: 18000 },
    ],
    total: 84000,
  },
};

const manasluTrek = POPULAR_TREKS.find((t) => t.id === "manaslu-circuit")!;

export const TREK_INFO: TrekInfoData = {
  title: manasluTrek.title,
  description: manasluTrek.description ?? "",
  exploreHref: `/treks/${manasluTrek.id}`, // FIX: dynamically generate href
  tier: "budget",
};
export const FOOTER_COLLABORATORS: Collaborator[] = [
  {
    name: "Build for Nepal",
    logoSrc: "/images/collaborators/build-for-nepal.png",
    href: "https://buildfornepal.com",
    width: 110,
    height: 40,
  },
  {
    name: "Techgaun",
    logoSrc: "/images/collaborators/techgaun.png",
    href: "https://techgaun.com",
    width: 100,
    height: 40,
  },
];
export const FOOTER_SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "facebook",
    href: "https://facebook.com/trailnepal",
    ariaLabel: "Follow Trail Nepal on Facebook",
  },
  {
    platform: "instagram",
    href: "https://instagram.com/trailnepal",
    ariaLabel: "Follow Trail Nepal on Instagram",
  },
  {
    platform: "youtube",
    href: "https://youtube.com/trailnepal",
    ariaLabel: "Subscribe to Trail Nepal on YouTube",
  },
];

export interface FooterLink {
  label: string;
  href: Route;
}

export const FOOTER_QUICK_LINKS: FooterLink[] = [
  { label: "Explore", href: "/explore" },
  { label: "Compare Treks", href: "/compare" },
  { label: "Planning Tools", href: "/plan" },
];
