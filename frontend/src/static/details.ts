import { TrekDay } from "@/types/details";

export const trekDays: TrekDay[] = [
  {
    id: 1,
    title: "Day 01 : Kathmandu to Lukla to Phakding",
    content:
      "We provide free airport pick-up service on your arrival at the Tribhuvan International Airport. Our team will welcome you at the airport and drop you off at the hotel in Thamel / Kathmandu. If you have any questions, you can ask them. The remaining day is free in the city. Explore the bustling streets of Thamel.",
    accommodations: [
      { name: "Mountain View Lodge", phone: "+977 9841234567" },
      { name: "Lake View Lodge", phone: "+977 9841234567" },
      { name: "Tower View Lodge", phone: "+977 9841234567" },
    ],
    stats: {
      distance: "3,440m",
      walk: "11km",
      elevation: "1,400m",
      note: "Acclimatization Indicated",
    },
    price: "Nrs. 2,200",
  },
  {
    id: 2,
    title: "Day 02 : Phakding to Namche Bazaar",
    content:
      "Today we start our trek with a short walk along the Dudh Koshi River, crossing several suspension bridges. The trail gradually ascends through pine forests. We will reach Monjo for lunch and then continue to Namche Bazaar, the gateway to the Everest region. This day helps with acclimatization as we gain significant altitude.",
    accommodations: [
      { name: "Mountain View Lodge", phone: "+977 9841234567" },
      { name: "Riverside Inn", phone: "+977 9841234567" },
    ],
    stats: {
      distance: "3,440m",
      walk: "11km",
      elevation: "1,400m",
      note: "Acclimatization Indicated",
    },
    price: "Nrs. 2,200",
  },
  {
    id: 3,
    title: "Day 03 : Acclimatization Day at Namche Bazaar",
    content:
      "This is an important acclimatization day. We will hike up to Everest View Hotel or Khumjung village for breathtaking views of Mount Everest, Ama Dablam, and other peaks. In the afternoon, you can explore the vibrant Namche Bazaar, visit the local market, or relax at the lodge.",
    accommodations: [
      { name: "Tower View Lodge", phone: "+977 9841234567" },
      { name: "Everest Inn", phone: "+977 9841234567" },
      { name: "Summit Lodge", phone: "+977 9841234567" },
    ],
    stats: {
      distance: "3,440m",
      walk: "11km",
      elevation: "1,400m",
      note: "Acclimatization Indicated",
    },
    price: "Nrs. 2,200",
  },
  {
    id: 4,
    title: "Day 04 : Namche Bazaar to Tengboche",
    content:
      "We descend to the Dudh Koshi River and then climb steeply to Tengboche. This day offers stunning views of the Himalayas. Upon reaching Tengboche, we visit the famous Tengboche Monastery, one of the largest and most important monasteries in the Khumbu region.",
    accommodations: [{ name: "Himalaya Lodge", phone: "+977 9841234567" }],
    stats: {
      distance: "3,440m",
      walk: "11km",
      elevation: "1,400m",
      note: "Acclimatization Indicated",
    },
    price: "Nrs. 2,200",
  },
  {
    id: 5,
    title: "Day 05 : Tengboche to Dingboche",
    content:
      "The trail continues through rhododendron forests and offers magnificent views of Ama Dablam. We reach Dingboche, a beautiful village surrounded by stone walls and fields. This is another key acclimatization point before heading higher towards Everest Base Camp.",
    accommodations: [
      { name: "Snow Lion Lodge", phone: "+977 9841234567" },
      { name: "Dingboche Inn", phone: "+977 9841234567" },
    ],
    stats: {
      distance: "3,440m",
      walk: "11km",
      elevation: "1,400m",
      note: "Acclimatization Indicated",
    },
    price: "Nrs. 2,200",
  },
];
