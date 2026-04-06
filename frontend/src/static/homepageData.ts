import { CostData, Slide, TierKey, TrekInfoData } from "../types/homepage";
import { Trek } from "@/types/homepage";

export const SLIDES: Slide[] = [
  {
    id: "everest-base-camp",
    title: "EBC Trek",
    imageAlt: "The iconic Everest Base Camp rock marker at 5364 meters",
    imageSrc: "/images/rajan-dahal--I64We8WuBs-unsplash.jpg",
    description:
      "Stand at the foot of the world's highest peak. Journey through the Khumbu Valley to witness the legendary 5,364m marker and the moving spirit of global explorers.",
  },
  {
    id: "annapurna-sanctuary",
    title: "ABC Trek",
    imageAlt:
      "Majestic snow-capped Himalayan peaks piercing through a sea of clouds",
    imageSrc: "/images/redmaz-pham-yQnfR9N67OQ-unsplash.jpg",
    description:
      "Experience the sanctuary of the gods. Watch the sun ignite the Annapurna massif as clouds dance through the deep glacial valleys below.",
  },
  {
    id: "gokyo-lakes",
    title: "Gokyo Trek",
    imageAlt:
      "A serene high-altitude turquoise lake nestled between rugged mountain ridges",
    imageSrc: "/images/erik-OwJ6Cn_DnHM-unsplash.jpg",
    description:
      "Discover the turquoise gems of the Himalayas. Trek beside the world's highest freshwater lakes under the watchful gaze of Cho Oyu.",
  },
  {
    id: "KBC Trek",
    title: "GP Trek",
    imageAlt:
      "A massive mountain face glowing with brilliant orange light during sunset",
    imageSrc: "/images/sounak-mukherjee-X1aOlIRUacM-unsplash.jpg",
    description:
      "Witness the fire of the mountains. Behold the breathtaking 'Golden Hour' where the setting sun paints the towering summits in brilliant shades of amber and gold.",
  },
  {
    id: "ama-dablam",
    title: "AD Trek",
    imageAlt:
      "The striking pyramid peak of Ama Dablam soaring above the clouds",
    imageSrc: "/images/redmaz-pham-yQnfR9N67OQ-unsplash.jpg",
    description:
      "Behold the 'Matterhorn of the Himalayas'. Renowned for its stunning aesthetics and technical climbing routes, towering above the Khumbu region.",
  },
];

export const POPULAR_TREKS: Trek[] = [
  {
    id: "abc-trek",
    title: "ABC Trek",
    duration: "12-15 Days",
    altitude: "5,345m",
    bestTime: "Sept-Nov",
    price: "Nrs. 19,000",
    difficulty: "Moderate",
    imageSrc: "/images/redmaz-pham-yQnfR9N67OQ-unsplash.jpg",
    href: "/treks/abc",
    description:
      "A stunning journey through the Annapurna sanctuary with breathtaking views of the Himalayas.",
  },
  {
    id: "ebc-trek",
    title: "EBC Trek",
    duration: "12-15 Days",
    altitude: "5,345m",
    bestTime: "Sept-Nov",
    price: "Nrs. 30,000",
    difficulty: "Challenging",
    imageSrc: "/images/rajan-dahal--I64We8WuBs-unsplash.jpg",
    href: "/treks/ebc",
    description:
      "Trek to the base of the world's highest peak through iconic Sherpa villages and glaciers.",
  },
  {
    id: "manaslu-trek",
    title: "Manaslu Circuit Trek",
    duration: "12-15 Days",
    altitude: "5,345m",
    bestTime: "Sept-Nov",
    price: "Nrs. 10,000",
    difficulty: "Difficult",
    imageSrc: "/images/erik-OwJ6Cn_DnHM-unsplash.jpg",
    href: "/treks/manaslu",
    description:
      "A remote and rugged circuit around the world's eighth highest mountain.",
  },
];

export const TIERS: { key: TierKey; label: string }[] = [
  { key: "budget", label: "Budget" },
  { key: "mid-range", label: "Mid-range" },
  { key: "comfort", label: "Comfort" },
];

export const COST_DATA: CostData = {
  budget: {
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

export const TREK_INFO: TrekInfoData = {
  title: "Manaslu Circuit Trek",
  description:
    "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  exploreHref: "/treks/manaslu-circuit",
};
