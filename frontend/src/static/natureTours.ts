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
  'bardia-national-park': {
    id: 'bardia-national-park',
    name: 'Bardia National Park',
    summary:
      "Explore Nepal's western lowland wilderness through jungle safaris, nature walks, river experiences, and birdwatching, with opportunities to encounter Royal Bengal tigers, one-horned rhinoceros, wild elephants, swamp deer, and other wildlife.",
    region: 'Bardia, Terai',
    meta: {
      duration: '4 Days · 3 Nights',
      difficulty: 'Easy',
      // Not in the PDF; DEM elevation at the park pin (Open-Meteo).
      maxElevation: '~160m',
      bestSeasons: 'October–March',
      startingPoint: 'Kathmandu',
      tripFacts: {
        start: 'Kathmandu',
        destination: 'Bardiya National Park',
        tourType: 'Multi-day · Wildlife & Nature',
        transport: 'Flight · road transport · safari vehicle',
        terrain: 'Forest trails · grassland · riverbanks · paved roads',
      },
    },
    overview:
      "Bardiya National Park offers a lowland wildlife experience across forests, grasslands, wetlands, and river landscapes in western Nepal. The park is shaped by the Karnali and Babai river systems and provides habitat for a wide range of wildlife, including Royal Bengal tigers, one-horned rhinoceros, wild elephants, swamp deer, blackbuck, gharials, and many bird species.\n\nThe four-day experience begins with travel from Kathmandu through Nepalgunj to Thakurdwara, the main visitor base and park headquarters. The second day focuses on wildlife through a jungle safari and guided nature walk. The third day explores the Karnali River and includes a visit to a gharial conservation facility. The final day is the return journey to Kathmandu.\n\nThe experience also introduces the cultural landscape around the park, including Rana Tharu and Dangora communities. Wildlife sightings are naturally unpredictable, and the experience is primarily about exploring the park's habitats rather than guaranteeing encounters with particular species.",
    // Nepalgunj is the air gateway, not a site, so it has no pin.
    sites: [
      {
        order: 1,
        name: 'Thakurdwara',
        // OSM node/4989712261 (place=village)
        coordinates: [28.449902, 81.2432515],
        description:
          'The main visitor base and park headquarters area, with accommodation and access to wildlife and cultural activities.',
        tooltip: 'The main visitor base and park headquarters area.',
        dayId: 'day-01',
      },
      {
        order: 2,
        name: 'Bardiya National Park',
        // OSM way/294497796 (boundary=national_park), point nearest Thakurdwara.
        coordinates: [28.4516357, 81.2429141],
        description:
          "Nepal's largest lowland national park, with forests, grasslands, wetlands, and river systems supporting diverse wildlife.",
        tooltip: 'Forests, grasslands, wetlands and river systems.',
        isHighlight: true,
        dayId: 'day-02',
      },
      {
        order: 3,
        name: 'Karnali River',
        // OSM way/27031356 (waterway=river), point nearest Thakurdwara.
        coordinates: [28.4613534, 81.2197351],
        description:
          'A major river system near Bardiya, supporting aquatic wildlife, riverine habitats, and birdlife.',
        tooltip: 'A riverine landscape for aquatic wildlife and birds.',
        isHighlight: true,
        dayId: 'day-03',
      },
      {
        order: 4,
        name: 'Crocodile Conservation Center',
        // OSM way/1458492667 (amenity=animal_breeding)
        coordinates: [28.4534946, 81.2416389],
        description:
          'A conservation facility at Thakurdwara established for the captive breeding and conservation of gharials.',
        tooltip: 'A gharial breeding and conservation facility.',
        dayId: 'day-03',
      },
    ],
    itinerary: [
      {
        day: 'Day 01',
        id: 'day-01',
        title: 'Kathmandu → Nepalgunj → Thakurdwara · Tharu Culture',
        color: '#F59E0B',
        description:
          'Travel from Kathmandu to Nepalgunj by air before continuing by road to Thakurdwara, the main visitor base and park headquarters area. After settling in, explore the surrounding community and learn about the local Tharu culture.\n\nDepending on the experience, cultural activities may include visiting local communities, learning about traditional homes and everyday life, tasting local food, or experiencing traditional music and dance.',
        transport: 'Flight · road transport · walking',
        highlights: ['Tharu culture', 'local community experience'],
        coordinates: [28.449902, 81.2432515],
      },
      {
        day: 'Day 02',
        id: 'day-02',
        title: 'Bardiya · Jungle Safari & Nature Walk',
        color: '#376BB6',
        description:
          "Spend the day exploring Bardiya's forests and grasslands through safari and guided walking. Safari activities provide opportunities to observe rhinoceros, deer, wild elephants, swamp deer, blackbuck, monkeys, birds, and other wildlife.\n\nA nature walk offers a slower way to experience the forest, with attention to vegetation, animal tracks, birds, and other signs of wildlife. Bardiya is also an important habitat for the Royal Bengal tiger, although sightings are naturally unpredictable.",
        transport: 'Safari vehicle + walking',
        highlights: ['Jungle safari', 'wildlife viewing', 'nature walk'],
        coordinates: [28.4516357, 81.2429141],
      },
      {
        day: 'Day 03',
        id: 'day-03',
        title: 'Karnali River & Conservation',
        color: '#8DC63F',
        description:
          'The riverine environment supports gharials, marsh muggers, aquatic birds, and Gangetic dolphins, although wildlife sightings are naturally unpredictable.\n\nContinue with a visit to the gharial conservation facility in Thakurdwara to learn about the conservation and breeding of this critically endangered crocodilian species.',
        transport: 'Walking · river activity',
        highlights: [
          'River experience',
          'birdwatching',
          'gharial conservation',
        ],
        coordinates: [28.4613534, 81.2197351],
      },
      {
        day: 'Day 04',
        id: 'day-04',
        title: 'Thakurdwara → Nepalgunj → Kathmandu',
        color: '#EF4444',
        description:
          'Leave Thakurdwara and travel by road to Nepalgunj. From Nepalgunj, continue by air to Kathmandu, completing the Bardiya experience.',
        transport: 'Road transport · flight',
        highlights: [],
        coordinates: [28.449902, 81.2432515],
      },
    ],
    expectations: [
      {
        title: 'Sal Forests & Grasslands',
        description:
          "Explore a mix of forest, grassland, wetlands, and riverine habitats that support Bardiya's diverse wildlife.",
      },
      {
        title: 'Royal Bengal Tiger',
        description:
          'Bardiya provides protected habitat for the Royal Bengal tiger. Sightings are possible but naturally unpredictable.',
      },
      {
        title: 'One-Horned Rhinoceros',
        description:
          "Look for one-horned rhinoceros in the park's forests and grasslands.",
      },
      {
        title: 'Wild Elephants & Swamp Deer',
        description:
          'Bardiya supports wild elephants and swamp deer alongside deer, monkeys, and other mammals.',
      },
      {
        title: 'Rivers & Wetlands',
        description:
          'The Karnali and Babai river systems create important habitats for gharials, marsh muggers, birds, and other aquatic wildlife.',
      },
      {
        title: 'Birdlife',
        description:
          'The park supports a wide variety of resident and migratory birds, with opportunities for birdwatching across forests, grasslands, wetlands, and river areas.',
      },
      {
        title: 'Tharu Culture',
        description:
          'Experience aspects of the cultural landscape around Bardiya through local communities, traditional practices, food, music, and dance.',
      },
    ],
    seasonalPlanning: [
      {
        month: 'Jan',
        condition: 'Cool & Dry / Comfortable Outdoor Conditions',
        status: 'peak',
      },
      {
        month: 'Feb',
        condition: 'Cool & Dry / Comfortable Outdoor Conditions',
        status: 'peak',
      },
      {
        month: 'Mar',
        condition: 'Warm & Dry / Increasingly Warm Days',
        status: 'peak',
      },
      {
        month: 'Apr',
        condition: 'Hot & Dry / Hotter Conditions',
        status: 'caution',
      },
      {
        month: 'May',
        condition: 'Very Hot / High Temperatures',
        status: 'caution',
      },
      {
        month: 'Jun',
        condition: 'Hot & Dry / Very Hot, Rain Building Toward Monsoon',
        status: 'caution',
      },
      {
        month: 'Jul',
        condition: 'Monsoon / Frequent Rain & Wet Conditions',
        status: 'caution',
      },
      {
        month: 'Aug',
        condition: 'Monsoon / Frequent Rain & Wet Conditions',
        status: 'caution',
      },
      {
        month: 'Sep',
        condition: 'Late Monsoon / Rain Gradually Decreases',
        status: 'caution',
      },
      {
        month: 'Oct',
        condition: 'Clear & Pleasant / Cooler, Generally Dry Conditions',
        status: 'peak',
      },
      {
        month: 'Nov',
        condition: 'Cool & Clear / Comfortable & Dry',
        status: 'peak',
      },
      {
        month: 'Dec',
        condition: 'Cool & Dry / Comfortable Outdoor Conditions',
        status: 'peak',
      },
    ],
    beforeYouGo: [
      {
        title: 'Wildlife Experience',
        description:
          'Wildlife activities take place in natural habitats, so encounters are unpredictable. Stay with your guide, maintain a safe distance from animals, and follow instructions when approaching wildlife.',
      },
      {
        title: 'Food & Water',
        description:
          'Carry sufficient drinking water during outdoor activities, particularly during warmer months. Food and accommodation are available around Thakurdwara.',
      },
      {
        title: 'Getting Around',
        description:
          'For this itinerary, travel from Kathmandu involves a flight to Nepalgunj followed by road travel to Thakurdwara. Within Bardiya, activities may involve safari vehicles, walking, and river-based activities.',
      },
      {
        title: 'Guide',
        description:
          'A local guide is recommended for jungle walks and wildlife activities to help with navigation, wildlife interpretation, and safe observation.',
      },
      {
        title: 'Photography',
        description:
          'Keep a safe distance from wildlife and avoid actions that could disturb animals. Follow guide instructions and any park restrictions when photographing wildlife.',
      },
    ],
    gallery: [
      {
        id: 'img_01',
        url: '/images/bardia-national-park/bardia-cover.jpg',
        alt: 'A spotted deer stag standing in golden grassland in Bardiya National Park',
        type: 'hero',
      },
      {
        id: 'img_02',
        url: '/images/bardia-national-park/bardia-1.jpg',
        alt: 'A wild tusker elephant in the forest at Bardiya National Park',
        type: 'landscape',
      },
      {
        id: 'img_03',
        url: '/images/bardia-national-park/bardia-2.jpg',
        alt: 'A Royal Bengal tiger wading through a river in Bardiya National Park',
        type: 'landscape',
      },
      {
        id: 'img_04',
        url: '/images/bardia-national-park/bardia-3.jpg',
        alt: 'A greater one-horned rhinoceros wading in a river at Bardiya National Park',
        type: 'landscape',
      },
      {
        id: 'img_05',
        url: '/images/bardia-national-park/bardia-4.jpg',
        alt: 'Open grassland dotted with trees in Bardiya National Park',
        type: 'landscape',
      },
      {
        id: 'img_06',
        url: '/images/bardia-national-park/bardia-5.jpg',
        alt: 'A vehicle on a dirt road through dense forest',
        type: 'portrait',
      },
      {
        id: 'img_07',
        url: '/images/bardia-national-park/bardia-6.jpg',
        alt: 'A herd of blackbuck crossing open ground in Bardiya',
        type: 'landscape',
      },
      {
        id: 'img_08',
        url: '/images/bardia-national-park/bardia-7.jpg',
        alt: 'A wooden canoe on a calm, forest-lined river in Bardiya National Park',
        type: 'landscape',
      },
    ],
  },
  ilam: {
    id: 'ilam',
    name: 'Ilam',
    summary:
      "Explore eastern Nepal through rolling tea gardens, forested hills, sacred lakes, scenic viewpoints, and local communities, with time to experience Ilam's tea culture and landscapes.",
    region: 'Ilam, Eastern Nepal',
    meta: {
      duration: '5 Days · 4 Nights',
      difficulty: 'Easy',
      // Mai Pokhari (PDF), the route's high point.
      maxElevation: '2,121m',
      bestSeasons: 'October–December · February–April',
      startingPoint: 'Kathmandu',
      tripFacts: {
        start: 'Kathmandu',
        destination: 'Ilam',
        tourType: 'Multi-day · Nature & Culture',
        transport: 'Road transport · walking',
        terrain: 'Tea gardens · forest trails · hill roads · gentle slopes',
      },
    },
    overview:
      "Ilam is a hill destination in eastern Nepal known for its tea gardens, forested landscapes, mountain views, and cultural diversity. The district has sloping tea gardens, natural forests, mountain streams, and a range of agricultural landscapes, with tea being its most important commercial crop.\n\nThis five-day road trip begins with the long journey from Kathmandu to Ilam Bazaar. The second day explores Ilam's tea-growing landscape and nearby Kanyam and Fikkal. The third day visits Mai Pokhari, a sacred nine-cornered lake surrounded by forest. The fourth day travels to Shree Antu for tea gardens, local experiences, and sunrise from Antu Danda. The final day is the return journey to Kathmandu.\n\nThe experience combines Ilam's tea-growing landscape with short walks, viewpoints, forest environments, and cultural experiences. Kanyam and Fikkal are located along the route to Ilam, with Kanyam known for its tea estates and Fikkal serving as a commercial centre in eastern Ilam.",
    sites: [
      {
        order: 1,
        name: 'Kanyam Tea Estate',
        // OSM way/482975094 (Kanyam Tea Estate)
        coordinates: [26.8677963, 88.0787199],
        description:
          'A major tea-growing area known for its large tea gardens and scenic hill landscape.',
        tooltip: 'Large tea gardens in a scenic hill landscape.',
        isHighlight: true,
        dayId: 'day-02',
      },
      {
        order: 2,
        name: 'Fikkal',
        // OSM node/5193532022 (place=village)
        coordinates: [26.8952118, 88.0661527],
        description:
          'A commercial centre in eastern Ilam and an important stop on the route to Ilam, surrounded by tea-growing areas',
        tooltip: 'A commercial centre surrounded by tea gardens.',
        dayId: 'day-02',
      },
      {
        order: 3,
        name: 'Mai Pokhari',
        // OSM node/4457983089 (tourism=attraction)
        coordinates: [27.0066304, 87.9296273],
        description:
          'A sacred nine-cornered lake at 2,121 m, surrounded by forest and considered the sacred abode of Goddess Bhagawati.',
        tooltip: 'A sacred forest lake at 2,121 m.',
        isHighlight: true,
        dayId: 'day-03',
      },
      {
        order: 4,
        name: 'Shree Antu',
        // OSM node/4892317924 (place=village, "Shri Antu")
        coordinates: [26.8809868, 88.1307377],
        description:
          'A scenic hill area in eastern Ilam known for sunrise and sunset views, tea gardens, and homestays.',
        tooltip: 'Tea gardens, homestays, and sunrise views.',
        dayId: 'day-04',
      },
      {
        order: 5,
        name: 'Antu Danda',
        // OSM node/8421778518 (tourism=viewpoint, "Antu Hill")
        coordinates: [26.8729293, 88.1403969],
        description:
          'A viewpoint known for sunrise and views across the eastern hills and plains on clear days.',
        tooltip: 'A sunrise viewpoint over the eastern hills.',
        isHighlight: true,
        dayId: 'day-04',
      },
    ],
    itinerary: [
      {
        day: 'Day 01',
        id: 'day-01',
        title: 'Kathmandu → Bhadrapur → Ilam · Tea Gardens',
        color: '#F59E0B',
        description:
          'Travel from Kathmandu to Ilam by road. This is a long travel day as the route crosses from the Kathmandu Valley toward the eastern hills.\n\nThe journey gradually changes from urban and valley landscapes to hill roads, cultivated slopes, forests, and tea-growing areas as you approach Ilam.',
        transport: 'Road transport · walking',
        highlights: ['Road Journey'],
      },
      {
        day: 'Day 02',
        id: 'day-02',
        title: 'Ilam · Tea Gardens & Kanyam',
        color: '#376BB6',
        description:
          "Explore Ilam's tea-growing landscape, with visits to Kanyam and Fikkal. The tea gardens around Kanyam and Fikkal are among the area's best-known attractions and are used for sightseeing, photography, and leisure.",
        transport: 'Road transport · walking',
        highlights: ['Tea gardens', 'tea culture'],
        coordinates: [26.8677963, 88.0787199],
      },
      {
        day: 'Day 03',
        id: 'day-03',
        title: 'Ilam · Mai Pokhari & Forests',
        color: '#8DC63F',
        description:
          'Travel from Ilam Bazaar to Mai Pokhari, a sacred nine-cornered lake surrounded by dense forest. Spend time exploring the lake and its surroundings before returning to Ilam Bazaar.\n\nMai Pokhari lies about 13 km north of Ilam Bazaar and is surrounded by forests containing fir, juniper, birch, pine, and medicinal plants. The area is also known for migratory birds and other wildlife.',
        transport: 'Road transport · walking',
        highlights: ['Mai Pokhari', 'forest walk'],
        coordinates: [27.0066304, 87.9296273],
      },
      {
        day: 'Day 04',
        id: 'day-04',
        title: 'Ilam → Shree Antu · Sunrise & Tea Gardens',
        color: '#EF4444',
        description:
          'Travel from Ilam Bazaar to Shree Antu and explore the surrounding tea gardens and hills. Visit Antu Danda for sunrise and views across the eastern landscape.\n\nThe area also offers opportunities to interact with local communities and experience homestay-based hospitality. Antu Danda is about 35 km southeast of Ilam Bazaar.',
        transport: 'Road transport · walking',
        highlights: ['Sunrise', 'tea gardens', 'local community'],
        coordinates: [26.8809868, 88.1307377],
      },
      {
        day: 'Day 05',
        id: 'day-05',
        title: 'Shree Antu → Kathmandu',
        color: '#D4622A',
        description:
          'After the morning around Shree Antu, begin the return journey to Kathmandu by road.',
        transport: 'Road transport',
        highlights: [],
        coordinates: [26.8809868, 88.1307377],
      },
    ],
    expectations: [
      {
        title: 'Tea Gardens',
        description:
          "Ilam's hills are strongly associated with tea cultivation, with extensive tea gardens forming much of the landscape around Kanyam, Fikkal, Ilam, and other parts of the district.",
      },
      {
        title: 'Rolling Hills & Forests',
        description:
          'Expect green hills, forested areas, streams, and cultivated slopes rather than high-altitude trekking terrain.',
      },
      {
        title: 'Mountain Views',
        description:
          'Clear days around Shree Antu and other viewpoints can offer views toward Kanchenjunga and the eastern Himalayan range.',
      },
      {
        title: 'Mai Pokhari',
        description:
          'Explore a sacred nine-cornered lake surrounded by forest and diverse plant and animal life.',
      },
      {
        title: 'Sunrise & Sunset',
        description:
          'Shree Antu and Antu Danda are known for sunrise and sunset views across the eastern landscape.',
      },
      {
        title: 'Tea Culture',
        description:
          "Experience the landscape and everyday agricultural character of one of Nepal's major tea-producing districts.",
      },
      {
        title: 'Local Communities',
        description:
          'Ilam has a diverse cultural landscape including Lepcha, Rai, Limbu, Brahmin, Chhetri, Magar, Gurung, and Sherpa communities.',
      },
    ],
    seasonalPlanning: [
      {
        month: 'Jan',
        condition: 'Cool & Dry / Generally Suitable for Sightseeing',
        status: 'peak',
      },
      {
        month: 'Feb',
        condition: 'Mild & Clear / Comfortable Outdoor Conditions',
        status: 'peak',
      },
      {
        month: 'Mar',
        condition: 'Mild & Clear / Comfortable for Walking & Sightseeing',
        status: 'peak',
      },
      {
        month: 'Apr',
        condition: 'Warm & Clear / Generally Suitable for Outdoor Activities',
        status: 'peak',
      },
      {
        month: 'May',
        condition: 'Warm & Increasingly Wet / Rainfall Begins to Increase',
        status: 'caution',
      },
      {
        month: 'Jun',
        condition: 'Warm & Wet / Monsoon Conditions Begin',
        status: 'caution',
      },
      {
        month: 'Jul',
        condition: 'Monsoon / Frequent Rain & Wet Conditions',
        status: 'caution',
      },
      {
        month: 'Aug',
        condition: 'Monsoon / Frequent Rain & Wet Conditions',
        status: 'caution',
      },
      {
        month: 'Sep',
        condition: 'Late Monsoon / Rain Gradually Decreases',
        status: 'caution',
      },
      {
        month: 'Oct',
        condition: 'Clear & Pleasant / Comfortable Conditions & Clearer Views',
        status: 'peak',
      },
      {
        month: 'Nov',
        condition: 'Cool & Clear / Comfortable for Sightseeing & Views',
        status: 'peak',
      },
      {
        month: 'Dec',
        condition:
          'Cool & Dry / Cooler Conditions with Generally Clear Weather',
        status: 'peak',
      },
    ],
    beforeYouGo: [
      {
        title: 'Weather',
        description:
          'Weather and visibility can change quickly in the hills. Mountain views, particularly from Shree Antu and Antu Danda, depend on conditions.',
      },
      {
        title: 'Getting Around',
        description:
          'For this itinerary, travel from Kathmandu involves a flight to Bhadrapur followed by road travel to Ilam. Travel between Ilam, Mai Pokhari, and Shree Antu is by road, with walking at individual sites.',
      },
      {
        title: 'Photography',
        description:
          'Tea gardens, viewpoints, forests, and local communities offer photography opportunities. Ask before photographing people, homes, or private activities.',
      },
    ],
    gallery: [
      {
        id: 'img_01',
        url: '/images/ilam/ilam-cover.jpg',
        alt: 'Rows of tea bushes on a hillside at an Ilam tea estate',
        type: 'hero',
      },
      {
        id: 'img_02',
        url: '/images/ilam/ilam-1.jpg',
        alt: 'Mai Pokhari lake reflecting the surrounding forest',
        type: 'landscape',
      },
      {
        id: 'img_03',
        url: '/images/ilam/ilam-2.jpg',
        alt: 'The Kanyam tea garden spread across the hills, with a winding road',
        type: 'landscape',
      },
      {
        id: 'img_04',
        url: '/images/ilam/ilam-3.jpg',
        alt: 'An aerial view of two tea pickers with baskets among tea bushes in Ilam',
        type: 'landscape',
      },
      {
        id: 'img_05',
        url: '/images/ilam/ilam-4.jpg',
        alt: 'Sunrise over the hills from the Shree Antu hilltop',
        type: 'landscape',
      },
      {
        id: 'img_06',
        url: '/images/ilam/ilam-5.jpg',
        alt: 'Hands plucking fresh tea leaves',
        type: 'portrait',
      },
      {
        id: 'img_07',
        url: '/images/ilam/ilam-6.jpg',
        alt: 'Red rhododendron flowers in bloom at Antu Danda',
        type: 'landscape',
      },
    ],
  },
};
