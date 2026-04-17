// constants/treks.ts
import { Trek } from "@/types/trek";

// Master list of all treks for cards
export const TREKS: Trek[] = [
  {
    id: "abc-trek",
    title: "ABC Trek",
    region: "Annapurna Region",
    description:
      "A stunning journey through the Annapurna sanctuary with breathtaking views of the Himalayas.",
    difficulty: "Moderate",
    duration: "12-15 Days",
    altitude: "4,130m", // fixed altitude
    season: "Sept-Nov",
    price: 19000,
    imageUrl: "/images/redmaz-pham-yQnfR9N67OQ-unsplash.jpg",
    isPopular: true,
  },
  {
    id: "ebc-trek", // IMPORTANT: Matches detail dictionary key below
    title: "EBC Trek",
    region: "Khumbu Valley",
    description:
      "Trek to the base of the world's highest peak through iconic Sherpa villages and glaciers.",
    difficulty: "Strenuous",
    duration: "14 Days",
    altitude: "5,364m", // fixed altitude
    season: "Sept-Nov",
    price: 30000,
    imageUrl: "/images/rajan-dahal--I64We8WuBs-unsplash.jpg",
    isPopular: true,
  },
  {
    id: "manaslu-circuit",
    title: "Manaslu Circuit Trek",
    region: "Manaslu Region",
    description:
      "A remote and rugged circuit around the world's eighth highest mountain.",
    difficulty: "Difficult",
    duration: "14-18 Days",
    altitude: "5,160m", // fixed altitude
    season: "Sept-Nov",
    price: 20000,
    imageUrl: "/images/erik-OwJ6Cn_DnHM-unsplash.jpg",
    isPopular: true,
  },
  {
    id: "langtang-valley",
    title: "Langtang Valley Trek",
    region: "Langtang Region",
    description: "Worem ipsum dolor sit amet, consectetur adipiscing elit.",
    difficulty: "Easy",
    duration: "7-10 Days",
    altitude: "3,870m",
    season: "Mar-May",
    price: 10000,
    imageUrl: "/images/ebc.jpg",
    isPopular: false,
  },
  {
    id: "gokyo-lakes",
    title: "Gokyo Lakes Trek",
    region: "Khumbu Valley",
    description: "Worem ipsum dolor sit amet, consectetur adipiscing elit.",
    difficulty: "Moderate",
    duration: "12-14 Days",
    altitude: "5,357m",
    season: "Oct-Nov",
    price: 18000,
    imageUrl: "/images/ebc.jpg",
    isPopular: false,
  },
  {
    id: "kanchenjunga",
    title: "Kanchenjunga Trek",
    region: "Other Region",
    description: "Worem ipsum dolor sit amet, consectetur adipiscing elit.",
    difficulty: "Difficult",
    duration: "20-24 Days",
    altitude: "5,143m",
    season: "Apr-May",
    price: 28000,
    imageUrl: "/images/ebc.jpg",
    isPopular: false,
  },
];

export const POPULAR_TREKS = TREKS.filter((trek) => trek.isPopular);
