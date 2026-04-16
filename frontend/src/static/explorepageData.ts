import { Trek } from "@/types/explorepage";

export const FILTER_OPTIONS = {
  regions: [
    "All",
    "Khumbu Valley",
    "Annapurna Region",
    "Langtang Region",
    "Manaslu Region",
  ],
  durations: ["0-3 days", "3-5 days", "5-10 days", "10-15 days", "15+ days"],
  difficulties: ["All", "Easy", "Moderate", "Challenging", "Difficult"],
};

export const TREKS: Trek[] = [
  {
    id: "1",
    imageUrl: "/images/ebc.jpg",
    title: "ABC Trek",
    region: "Annapurna Region",
    description:
      "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class apt.",
    difficulty: "Moderate",
    duration: "12-15 Days",
    altitude: "5,345m",
    season: "Sept-Nov",
    price: 15000,
    href: "/treks/abc-trek",
  },
  {
    id: "2",
    imageUrl: "/images/ebc.jpg",
    title: "EBC Trek",
    region: "Khumbu Valley",
    description:
      "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class apt.",
    difficulty: "Moderate",
    duration: "12-15 Days",
    altitude: "5,345m",
    season: "Sept-Nov",
    price: 15000,
    href: "/treks/ebc-trek",
  },
  {
    id: "3",
    imageUrl: "/images/ebc.jpg",
    title: "Manaslu Circuit Trek",
    region: "Manaslu Region",
    description:
      "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class apt.",
    difficulty: "Challenging",
    duration: "14-18 Days",
    altitude: "5,160m",
    season: "Sept-Nov",
    price: 20000,
    href: "/treks/manaslu-circuit",
  },
  {
    id: "4",
    imageUrl: "/images/ebc.jpg",
    title: "Langtang Valley Trek",
    region: "Langtang Region",
    description:
      "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class apt.",
    difficulty: "Easy",
    duration: "7-10 Days",
    altitude: "3,870m",
    season: "Mar-May",
    price: 10000,
    href: "/treks/langtang-valley",
  },
  {
    id: "5",
    imageUrl: "/images/ebc.jpg",
    title: "Gokyo Lakes Trek",
    region: "Khumbu Valley",
    description:
      "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class apt.",
    difficulty: "Moderate",
    duration: "12-14 Days",
    altitude: "5,357m",
    season: "Oct-Nov",
    price: 18000,
    href: "/treks/gokyo-lakes",
  },
  {
    id: "6",
    imageUrl: "/images/ebc.jpg",
    title: "Kanchenjunga Trek",
    region: "Other Region",
    description:
      "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class apt.",
    difficulty: "Difficult",
    duration: "20-24 Days",
    altitude: "5,143m",
    season: "Apr-May",
    price: 28000,
    href: "/treks/kanchenjunga",
  },
];

export const DEFAULT_FILTERS = {
  region: "All",
  duration: "All",
  difficulty: "All",
  budgetMin: "0",
  budgetMax: "50000",
  elevation: 6000,
};
export type Props = {
  title: string;
  options: readonly string[];
  selected: string[];
  onToggle: (val: string) => void;
};
