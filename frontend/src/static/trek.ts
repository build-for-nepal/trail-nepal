import { Trek } from "@/types/trek";

export const TREKS: Trek[] = [
  {
    id: "ebc-trek",
    title: "EBC Trek",
    region: "Khumbu Valley",
    description:
      "Trek to the base of the world's highest peak through iconic Sherpa villages and glaciers.",
    difficulty: "Difficult",
    duration: "14 Days",
    altitude: "5,364m",
    season: "Sept-Nov",
    price: 30000,
    imageUrl: "/images/ebc.jpg",
    isPopular: true,
    keywords: ["everest base camp", "ebc", "khumbu", "everest"],
  },
  {
    id: "manaslu-circuit",
    title: "Manaslu Circuit Trek",
    region: "Manaslu Region",
    description:
      "A remote and rugged circuit around the world's eighth highest mountain.",
    difficulty: "Difficult",
    duration: "14-18 Days",
    altitude: "5,160m",
    season: "Sept-Nov",
    price: 20000,
    imageUrl: "/images/erik-OwJ6Cn_DnHM-unsplash.jpg",
    isPopular: true,
    keywords: ["manaslu", "circuit", "manaslu circuit"],
  },
  {
    id: "langtang-valley",
    title: "Langtang Valley Trek",
    region: "Langtang Region",
    description:
      "A culturally rich trek through lush forests and Tamang villages with stunning views of glaciers and snow-covered peaks.",
    difficulty: "Easy",
    duration: "7-10 Days",
    altitude: "3,870m",
    season: "Mar-May",
    price: 10000,
    imageUrl: "/images/redmaz-pham-yQnfR9N67OQ-unsplash.jpg",
    isPopular: true,
    keywords: ["langtang", "langtang valley"],
  },
];

export const POPULAR_TREKS = TREKS.filter((trek) => trek.isPopular);
