import { OverallRating, TrailReview } from "@/types/reviews";

export const overallRating: OverallRating = {
  average: 4.4,
  totalReviews: 0,
};

export const trailReviews: TrailReview[] = [
  {
    id: "review_01",
    reviewerName: "Myra Kathew",
    rating: 4,
    date: "2026-04-10",
    tags: ["Great views", "Well marked trail", "Worth the effort"],
    body: "Prep for Annapurna Circuit. Day hike through the jungle from Kathmandu to Prakriti Resort. Stopped for lunch about halfway up with the most delicious thali/dal bat yet! Absolutely stunning views upon emerging from the jungle. Wonderful flora and fauna.",
    images: [
      {
        id: "img_01",
        url: "/images/ebc.jpg",
        alt: "Everest Base Camp and Khumbu Icefall",
        type: "hero",
      },
      {
        id: "img_02",
        url: "/images/ebc/Lukla.png",
        alt: "Namche Bazaar Sherpa Capital",
        type: "landscape",
      },
      {
        id: "img_03",
        url: "/images/ebc/EBC2.png",
        alt: "Tengboche Monastery with Ama Dablam",
        type: "portrait",
      },
      {
        id: "img_04",
        url: "/images/ebc/Peak.png",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_05",
        url: "/images/ebc/Namche.png",
        alt: "Namche Bazaar view",
        type: "landscape",
      },
    ],
  },
  {
    id: "review_02",
    reviewerName: "Myra Kathew",
    rating: 0,
    date: "2026-04-10",
    tags: ["Great views", "Good food", "Challenging terrain"],
    body: "Prep for Annapurna Circuit. Day hike through the jungle from Kathmandu to Prakriti Resort. Stopped for lunch about halfway up with the most delicious thali/dal bat yet! Absolutely stunning views upon emerging from the jungle. Wonderful flora and fauna.\n\nPrep for Annapurna Circuit. Day hike through the jungle from Kathmandu to Prakriti Resort. Stopped for lunch about halfway up with the most delicious thali/dal bat yet! Absolutely stunning views upon emerging from the jungle. Wonderful flora and fauna.\n\nPrep for Annapurna Circuit. Day hike through the jungle from Kathmandu to Prakriti Resort. Stopped for lunch about halfway up with the most delicious thali/dal bat yet! Absolutely stunning views upon emerging from the jungle. Wonderful flora and fauna.",
    images: [
      {
        id: "img_01",
        url: "/images/ebc.jpg",
        alt: "Everest Base Camp",
        type: "hero",
      },
      {
        id: "img_02",
        url: "/images/ebc/Lukla.png",
        alt: "Lukla Airport",
        type: "landscape",
      },
      {
        id: "img_03",
        url: "/images/ebc/EBC2.png",
        alt: "EBC trail",
        type: "portrait",
      },
      {
        id: "img_04",
        url: "/images/ebc/Peak.png",
        alt: "Mountain peak",
        type: "landscape",
      },
      {
        id: "img_05",
        url: "/images/ebc/Namche.png",
        alt: "Namche Bazaar",
        type: "landscape",
      },
      {
        id: "img_06",
        url: "/images/ebc/ABC1.png",
        alt: "Annapurna Base Camp",
        type: "landscape",
      },
    ],
  },
  {
    id: "review_03",
    reviewerName: "Rajan Shrestha",
    rating: 5,
    date: "2026-03-22",
    tags: ["Beautiful flora", "Friendly locals", "Good accommodation"],
    body: "One of the most remarkable treks I have undertaken. The trail from Lukla to Namche Bazaar is breathtaking at every turn. Teahouse owners were incredibly warm and the dal bhat was phenomenal.",
    images: [
      {
        id: "img_05",
        url: "/images/ebc/Namche.png",
        alt: "Namche at sunset",
        type: "landscape",
      },
      {
        id: "img_06",
        url: "/images/ebc/ABC1.png",
        alt: "ABC trail view",
        type: "landscape",
      },
    ],
  },
];
