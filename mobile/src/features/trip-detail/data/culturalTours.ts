import type { CulturalTourDetail } from '../types';

// Copied from frontend/src/static/culturalTours.ts, word for word. The summary is not here: it
// is the card's description, in features/explore/trips.ts.
export const CULTURAL_TOUR_DETAILS: Readonly<
  Record<string, CulturalTourDetail>
> = {
  'lumbini-tour': {
    type: 'cultural',
    name: 'Lumbini Tour',
    region: 'Lumbini, Rupandehi',
    meta: {
      duration: '3 Days',
      difficulty: 'Easy',
      maxElevation: '~150m',
      bestSeasons: 'Year-Round',
      startingPoint: 'Kathmandu',
    },
    tripFacts: {
      start: 'Kathmandu',
      destination: 'Lumbini',
      keyAreas: 'Sacred Garden · Monastic Zone · Tilaurakot',
      tourType: 'Multi-day · Pilgrimage & Heritage',
      transport: 'Road transport + walking',
      terrain: 'Paved paths · garden paths · archaeological sites',
    },
    overview:
      'The Lumbini Tour explores the birthplace of Siddhartha Gautama Buddha and one of the world’s important Buddhist pilgrimage sites. The journey centres on the Sacred Garden, where the Maya Devi Temple, Ashoka Pillar, Puskarini Pond, and surrounding archaeological remains connect the site with its ancient history.\n\nBeyond the birthplace, monasteries and meditation spaces reflect the different Buddhist traditions represented across Lumbini. The second day explores Lumbini’s wider monastic and cultural landscape, with monasteries, temples, and garden spaces spread across the area.\n\nThe final day extends beyond Lumbini to Tilaurakot and Kudan, archaeological sites associated with Siddhartha Gautama’s early life and his connection to the region. Together, the journey connects Lumbini’s sacred landscape with the wider history and living traditions of Buddhism.',
    expectations: [
      {
        title: 'Sacred & Archaeological Sites',
        description:
          'Lumbini combines active pilgrimage with ancient archaeological remains. The Maya Devi Temple, Ashoka Pillar, and surrounding sites are places of both historical and religious significance.',
      },
      {
        title: 'Buddhist Traditions',
        description:
          'The monasteries represent different Buddhist communities and architectural traditions from across Asia. You may encounter prayer, meditation, and religious activities during your visit.',
      },
      {
        title: 'Walking & Open Spaces',
        description:
          'The main Lumbini complex is spread across a large landscaped area connected by paths. Expect regular walking between the Sacred Garden, monasteries, and other sites.',
      },
      {
        title: 'Pilgrims & Visitors',
        description:
          'Lumbini is an active pilgrimage destination as well as a heritage site. The atmosphere can change during religious events, with some areas becoming busier than others.',
      },
      {
        title: 'Heat & Weather',
        description:
          'The Terai can be considerably warmer than Kathmandu, particularly from spring through summer. Midday walking can feel demanding during the hotter months.',
      },
    ],
  },
  'kathmandu-valley-heritage-tour': {
    type: 'cultural',
    name: 'Kathmandu Valley Heritage Tour',
    region: 'Kathmandu Valley',
    meta: {
      duration: '3 Days',
      difficulty: 'Easy',
      maxElevation: '~1400m',
      bestSeasons: 'Year-Round',
      startingPoint: 'Kathmandu',
    },
    tripFacts: {
      start: 'Kathmandu',
      cities: 'Kathmandu · Patan · Bhaktapur',
      tourType: 'Multi-day · City-based',
      transport: 'Road transport + walking',
      terrain: 'Paved streets · temple courtyards · stone stairways',
    },
    overview:
      'The Kathmandu Valley Heritage Tour connects three historic cities, Kathmandu, Patan, and Bhaktapur, each shaped by Newari architecture, craftsmanship, and Hindu and Buddhist traditions.\n\nThe journey begins in Kathmandu, exploring the historic centre around Kathmandu Durbar Square before continuing to Swayambhunath, Pashupatinath, and Boudhanath. The day brings together palace courtyards, temples, stupas, and traditional neighbourhoods that remain part of everyday life in the city.\n\nThe second day moves south to Patan, where Durbar Square and the surrounding bahals, courtyards, temples, and craft traditions reveal the city’s distinctive architectural character. The final day reaches Bhaktapur, known for its traditional streets, brick-built architecture, historic squares, and long-standing craft traditions.\n\nTogether, the three days offer a closer look at the architectural heritage and living culture of the Kathmandu Valley.',
    expectations: [
      {
        title: 'Three Historic Cities',
        description:
          'Kathmandu, Patan, and Bhaktapur each have their own palace squares, temples, courtyards, and distinctive traditions of Newar architecture and craftsmanship.',
      },
      {
        title: 'Living Culture & Daily Life',
        description:
          'These heritage areas remain lived-in neighbourhoods, not open-air museums. Expect daily rituals, local markets, and residents going about ordinary life alongside the monuments.',
      },
      {
        title: 'Walking & Streets',
        description:
          'The heritage areas are explored primarily on foot through paved streets, courtyards, narrow lanes, and occasional stone steps. Surfaces can be uneven in some historic areas.',
      },
      {
        title: 'Crowds & Photography',
        description:
          'Major heritage sites can become busy around midday, particularly during peak travel periods and festivals. Photography is permitted in many public areas, while some religious sites or interiors may have restrictions.',
      },
      {
        title: 'Buddhist & Hindu Sacred Sites',
        description:
          'Boudhanath, Swayambhunath, and Pashupatinath are active religious sites. Visitors should expect ongoing rituals and worship and follow local rules when entering or photographing sacred spaces.',
      },
    ],
  },
  'bandipur-hill-town': {
    type: 'cultural',
    name: 'Bandipur Hill Town',
    region: 'Tanahun District',
    meta: {
      duration: '2 Days',
      difficulty: 'Easy',
      maxElevation: '~1030m',
      bestSeasons: 'Year-Round',
      startingPoint: 'Kathmandu',
    },
    tripFacts: {
      start: 'Kathmandu',
      destination: 'Bandipur',
      tourType: 'Multi-day · Cultural & Heritage',
      transport: 'Road transport + walking',
      terrain: 'Paved streets · stone paths · village trails',
    },
    overview:
      'The Bandipur Tour travels from Kathmandu to the historic hill town of Bandipur in Tanahun, known for its preserved Newar architecture, traditional streets, and views across the surrounding hills. The journey begins with a walk through Bandipur Bazaar, where timber-framed houses, carved windows, temples, and old trading buildings reflect the town’s history as a Newar trading centre along the route between the Kathmandu Valley and western Nepal.\n\nThe second day explores the cultural and natural surroundings beyond the main bazaar. Traditional villages, temples, caves, and hilltop viewpoints extend the experience beyond Bandipur’s historic centre into the surrounding landscape. Together, the journey combines the town’s architectural heritage with its surrounding hills and everyday local life.',
    expectations: [
      {
        title: 'Historic Newar Town',
        description:
          'Bandipur’s centre retains traditional Newar houses, carved wooden details, temples, courtyards, and a compact historic street layout.',
      },
      {
        title: 'Hill Town & Landscape',
        description:
          'The town sits on a ridge surrounded by forested hills and valleys. Viewpoints can offer wide mountain and hill views when weather and visibility are favourable.',
      },
      {
        title: 'Walking & Streets',
        description:
          'The historic centre is primarily explored on foot. Expect paved streets, stone paths, steps, and some uphill and downhill sections when exploring beyond the bazaar.',
      },
      {
        title: 'Local Life',
        description:
          'Bandipur remains a functioning hill town rather than an open-air museum. Local shops, homes, cafés, temples, and community spaces sit alongside its historic buildings.',
      },
      {
        title: 'Weather & Visibility',
        description:
          'Conditions can change with the season. Cloud, rain, and haze may limit views from the surrounding viewpoints.',
      },
    ],
  },
};
