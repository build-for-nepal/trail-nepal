import { CulturalTourDetail } from '@/types/cultural';

// Same shape as the cultural tours, so these reuse the cultural page sections.
export const NATURE_TOUR_DETAILS: Record<string, CulturalTourDetail> = {
  'chitwan-national-park': {
    id: 'chitwan-national-park',
    name: 'Chitwan National Park',
    summary:
      "Explore Nepal's lowland wilderness through jungle safaris, canoe rides, nature walks, and birdwatching, with opportunities to encounter one-horned rhinoceros, crocodiles, and a wide variety of birds and other wildlife.",
    region: 'Chitwan, Terai',
    meta: {
      duration: '3 Days',
      difficulty: 'Easy',
      // Not in the PDF; DEM elevation at the Sauraha pin (Open-Meteo).
      maxElevation: '~186m',
      bestSeasons: 'October–March',
      startingPoint: 'Kathmandu',
      tripFacts: {
        start: 'Kathmandu',
        destination: 'Chitwan',
        tourType: 'Multi-day · Wildlife & Nature',
        transport: 'Road transport · safari vehicle · canoe',
        terrain: 'Forest trails · grassland · riverbanks · paved roads',
      },
    },
    overview:
      "Chitwan National Park offers a lowland wildlife experience across forests, grasslands, wetlands, and the floodplains of the Narayani, Rapti, and Riu rivers.\n\nThe three-day experience combines different ways of exploring the park and its surroundings. The first day introduces Chitwan through Sauraha and a Tharu cultural experience. The second day focuses on wildlife through a jungle safari and nature walk, while the final day explores the river and wetland environment before returning to Kathmandu.\n\nThe experience is not limited to wildlife viewing. The surrounding communities, particularly the Tharu people, form an important part of the cultural landscape of Chitwan. Sauraha also provides a convenient base for accessing the park and experiencing the surrounding visitor areas.\n\nTogether, the three days offer an introduction to Chitwan's wildlife, landscapes, river systems, and local culture.",
    // Kathmandu is the starting city, not a site, so it has no pin.
    sites: [
      {
        order: 1,
        name: 'Sauraha',
        // OSM node/12969605791 (place=suburb)
        coordinates: [27.5801633, 84.5023058],
        description:
          'A major visitor base for exploring Chitwan National Park, with accommodation, restaurants, visitor services, and access to wildlife and cultural activities.',
        tooltip: 'A major visitor base for exploring the park.',
        dayId: 'day-01',
      },
      {
        order: 2,
        name: 'Chitwan National Park',
        // OSM node/567142502, the park info office in Sauraha. The park's own
        // boundary point is ~9 km inside, nowhere near the itinerary.
        coordinates: [27.5741111, 84.4937879],
        description:
          "Chitwan's landscape combines Sal forests, tall grasslands, wetlands, riverine areas, and floodplains that support a wide range of wildlife.",
        tooltip: 'Sal forests, tall grasslands and wetlands.',
        isHighlight: true,
        dayId: 'day-02',
      },
      {
        order: 3,
        name: 'Rapti River',
        // OSM node/11397080162, the Sauraha canoe launch on the river.
        coordinates: [27.5750639, 84.4924386],
        description:
          'A river landscape around Sauraha where canoeing and birdwatching provide opportunities to observe crocodiles, gharials, and water birds.',
        tooltip: 'River canoeing past crocodiles, gharials and water birds.',
        isHighlight: true,
        dayId: 'day-03',
      },
      {
        order: 4,
        name: 'Elephant Breeding Centre',
        // OSM way/44696492 (amenity=animal_breeding)
        coordinates: [27.5820636, 84.4630446],
        description:
          'A visitor attraction in Khorsar, Sauraha, where visitors can learn about elephant breeding and conservation.',
        tooltip: 'A centre for elephant breeding and conservation.',
        dayId: 'day-03',
      },
    ],
    itinerary: [
      {
        day: 'Day 01',
        id: 'day-01',
        title: 'Kathmandu → Chitwan · Sauraha & Tharu Culture',
        color: '#F59E0B',
        description:
          'Travel from Kathmandu to Chitwan and continue to Sauraha, one of the main visitor bases for exploring Chitwan National Park. After arrival, settle in and explore Sauraha and the surrounding area.\n\nThe main experience of the day is an introduction to Tharu culture and community life. Depending on the experience, this may include a village visit, traditional homes, local food, music, dance, or a cultural performance.',
        transport: 'Road transport · walking',
        highlights: ['Tharu culture'],
        coordinates: [27.5801633, 84.5023058],
      },
      {
        day: 'Day 02',
        id: 'day-02',
        title: 'Chitwan · Jungle Safari & Nature Walk',
        color: '#376BB6',
        description:
          "The second day focuses on Chitwan's wildlife and forest landscape.\n\nSpend the day exploring Chitwan's forests and grasslands through a combination of safari and walking.\n\nA guided nature walk offers a slower way to experience the forest, with opportunities to observe vegetation, birds, animal tracks, and other signs of wildlife.",
        transport: 'Safari vehicle + walking',
        highlights: [
          'Jungle safari',
          'one-horned rhinoceros',
          'birdlife',
          'nature walk',
        ],
        coordinates: [27.5741111, 84.4937879],
      },
      {
        day: 'Day 03',
        id: 'day-03',
        title:
          'Chitwan → Kathmandu · Canoe, Birdwatching & Elephant Conservation',
        color: '#8DC63F',
        description:
          'Start the day with a canoe ride along the river, with opportunities to observe crocodiles, gharials, and water birds along the riverbanks.\n\nContinue with birdwatching around the river and wetland areas before visiting the Elephant Breeding Centre in Sauraha. Depart Chitwan afterwards and travel back to Kathmandu.',
        transport: 'Canoe + road transport + walking',
        highlights: ['Canoe ride', 'birdwatching', 'elephant conservation'],
        coordinates: [27.5750639, 84.4924386],
      },
    ],
    expectations: [
      {
        title: 'Tropical Forests & Grasslands',
        description:
          "Chitwan's landscape combines Sal forests, tall grasslands, wetlands, oxbow lakes, and river floodplains. These different habitats support a diverse range of wildlife.",
      },
      {
        title: 'One-Horned Rhinoceros',
        description:
          "The greater one-horned rhinoceros is one of Chitwan's most recognizable species. The park provides protected habitat for this vulnerable species. Wildlife sightings are never guaranteed.",
      },
      {
        title: 'Rivers & Wetlands',
        description:
          "The Narayani, Rapti, and Reu rivers shape the park's landscape. Wetlands and oxbow lakes provide habitat for crocodiles, gharials, water birds, and other wildlife.",
      },
      {
        title: 'Royal Bengal Tiger',
        description:
          'Chitwan provides protected habitat for the Royal Bengal tiger. Tigers are elusive, and sightings are unpredictable, so a safari should be approached as a wildlife-viewing experience rather than a guaranteed tiger encounter.',
      },
      {
        title: 'Birdlife',
        description:
          'Chitwan supports 525 recorded bird species, including resident and migratory species that vary through the year. Winter brings waterfowl and migratory birds, while summer brings species such as paradise flycatchers, Indian pittas, and parakeets.',
      },
      {
        title: 'Tharu Culture',
        description:
          'The communities surrounding the park provide an opportunity to experience Tharu culture and everyday life. Cultural activities can include traditional music, dance, food, and village experiences.',
      },
    ],
    seasonalPlanning: [
      // Must start at January; the calendar maps array position to month.
      // `status` follows the PDF's month table (BEST/GOOD = peak).
      {
        month: 'Jan',
        condition: 'Cool & Dry / Cooler Mornings & Evenings',
        status: 'peak',
      },
      {
        month: 'Feb',
        condition: 'Cool & Dry / Gradually Warmer Days',
        status: 'peak',
      },
      {
        month: 'Mar',
        condition: 'Warm & Dry / Hotter Afternoons',
        status: 'peak',
      },
      {
        month: 'Apr',
        condition: 'Hot & Dry / Noticeable Midday Heat',
        status: 'caution',
      },
      {
        month: 'May',
        condition: 'Very Hot / Increasingly Humid Afternoons',
        status: 'caution',
      },
      {
        month: 'Jun',
        condition: 'Hot & Humid / Increasingly Frequent Rain',
        status: 'caution',
      },
      {
        month: 'Jul',
        condition: 'Peak Monsoon / Frequent Rain & High Humidity',
        status: 'caution',
      },
      {
        month: 'Aug',
        condition: 'Peak Monsoon / Frequent Rain & Wet Ground',
        status: 'caution',
      },
      {
        month: 'Sep',
        condition: 'Late Monsoon / Easing Rain & Lingering Humidity',
        status: 'caution',
      },
      {
        month: 'Oct',
        condition: 'Clear & Pleasant / Drier, More Comfortable Days',
        status: 'peak',
      },
      {
        month: 'Nov',
        condition: 'Cool & Clear / Dry, Comfortable Outdoor Conditions',
        status: 'peak',
      },
      {
        month: 'Dec',
        condition: 'Cool & Dry / Comfortable Days & Cooler Mornings',
        status: 'peak',
      },
    ],
    beforeYouGo: [
      {
        title: 'Wildlife Experience',
        description:
          "Wildlife activities take place in natural habitats where animals can be encountered unexpectedly. Follow your guide's instructions and maintain a safe distance from wildlife.\n\nWatch for: heat · insects · uneven ground · wildlife encounters · changing weather",
      },
      {
        title: 'Food & Water',
        description:
          'Restaurants, cafés, hotels, and lodges are available around Sauraha and other visitor areas. Carry water during safari and walking activities, particularly during the hotter months. Sauraha has restaurants and accommodation along the Rapti River.',
      },
      {
        title: 'Getting Around',
        description:
          'Travel between Kathmandu/Bharatpur and Chitwan is by road or air to Bharatpur followed by road transport. Within the destination, activities use a combination of safari vehicles, canoes, and walking. The park headquarters at Kasara is approximately 21 km from Bharatpur.',
      },
      {
        title: 'Guide',
        description:
          'A guide is recommended for jungle walks and wildlife activities. Local guides can help interpret animal tracks, vegetation, birdlife, and wildlife behaviour while keeping visitors within appropriate safety practices.',
      },
      {
        title: 'Photography',
        description:
          'Wildlife photography requires patience and distance. Avoid using flash where it could disturb animals, and follow any restrictions at conservation centres or cultural sites.',
      },
    ],
    // Portrait kept at index 5 so the gallery gives it a tall tile.
    gallery: [
      {
        id: 'img_01',
        url: '/images/chitwan-national-park/chitwan-cover.jpg',
        alt: 'A greater one-horned rhinoceros grazing in the grasslands of Chitwan National Park',
        type: 'hero',
      },
      {
        id: 'img_02',
        url: '/images/chitwan-national-park/chitwan-1.jpg',
        alt: 'Sunset over the grasslands and river at Chitwan',
        type: 'landscape',
      },
      {
        id: 'img_03',
        url: '/images/chitwan-national-park/chitwan-2.jpg',
        alt: 'Visitors on elephant back crossing a river in Chitwan at sunrise',
        type: 'landscape',
      },
      {
        id: 'img_04',
        url: '/images/chitwan-national-park/chitwan-3.jpg',
        alt: 'An egret taking off over a wetland in Chitwan',
        type: 'landscape',
      },
      {
        id: 'img_05',
        url: '/images/chitwan-national-park/chitwan-4.jpg',
        alt: 'A Tharu festival procession in Sauraha',
        type: 'landscape',
      },
      {
        id: 'img_06',
        url: '/images/chitwan-national-park/chitwan-5.jpg',
        alt: 'A boatman poling a dugout canoe along the river',
        type: 'portrait',
      },
      {
        id: 'img_07',
        url: '/images/chitwan-national-park/chitwan-6.jpg',
        alt: 'Boatmen guiding a dugout canoe past a sandbank on the river',
        type: 'landscape',
      },
    ],
  },
};
