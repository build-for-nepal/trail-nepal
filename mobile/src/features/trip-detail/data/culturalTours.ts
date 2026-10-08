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
      'The Lumbini Tour explores the birthplace of Siddhartha Gautama Buddha and one of the world\u2019s important Buddhist pilgrimage sites. The journey centres on the Sacred Garden, where the Maya Devi Temple, Ashoka Pillar, Puskarini Pond, and surrounding archaeological remains connect the site with its ancient history.\n\nBeyond the birthplace, monasteries and meditation spaces reflect the different Buddhist traditions represented across Lumbini. The second day explores Lumbini\u2019s wider monastic and cultural landscape, with monasteries, temples, and garden spaces spread across the area.\n\nThe final day extends beyond Lumbini to Tilaurakot and Kudan, archaeological sites associated with Siddhartha Gautama\u2019s early life and his connection to the region. Together, the journey connects Lumbini\u2019s sacred landscape with the wider history and living traditions of Buddhism.',
    itinerary: [
      {
        day: 'Day 01',
        title: 'Kathmandu \u2192 Lumbini',
        description:
          'The journey begins in Kathmandu and heads west toward Lumbini, leaving the hills of the Kathmandu Valley behind as the landscape gradually opens into the plains of southern Nepal. After arriving, the first exploration focuses on the Sacred Garden, the centre of the pilgrimage site, where the Maya Devi Temple marks the traditional birthplace and nearby remains connect the sacred landscape with Lumbini\u2019s ancient history.',
        transport: 'Road transport + walking',
        highlights: [
          'Kathmandu \u2192 Lumbini',
          'Maya Devi Temple',
          'Ashoka Pillar',
          'Puskarini Pond',
          'Sacred Garden',
        ],
      },
      {
        day: 'Day 02',
        title: 'Lumbini',
        description:
          'The second day explores the wider monastic area of Lumbini, where monasteries and temples built by Buddhist communities from across Asia reflect the international character of the pilgrimage site. The eastern and western monastic zones feature distinct architectural styles, religious spaces, sculptures and landscaped gardens, with the World Peace Pagoda adding another landmark within the wider landscape.',
        transport: 'Walking',
        highlights: [
          'Monastic Zone',
          'International monasteries',
          'Meditation spaces',
          'World Peace Pagoda',
        ],
      },
      {
        day: 'Day 03',
        title: 'Lumbini \u2192 Tilaurakot \u2192 Kathmandu',
        description:
          'The final day follows the wider archaeological landscape associated with Siddhartha Gautama\u2019s early life. Tilaurakot, identified with the ancient city of Kapilavastu, is associated with the Shakya kingdom and the period before his departure from the royal household. The journey continues to Kudan before heading back toward Kathmandu.',
        transport: 'Road transport + walking',
        highlights: ['Tilaurakot', 'Kudan', 'Archaeological sites'],
      },
    ],
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
    itinerary: [
      {
        day: 'Day 01',
        title: 'Kathmandu',
        description:
          'The first day introduces Kathmandu through its historic centre and major Hindu and Buddhist landmarks. Begin at Kathmandu Durbar Square, where palace courtyards, temples, shrines, and carved timber architecture reflect the city\u2019s royal history. The surrounding old city extends into narrow streets and traditional neighbourhoods, where temples and courtyards remain part of everyday life.\n\nFrom the historic centre, continue to Swayambhunath, Pashupatinath, and Boudhanath, moving between some of the valley\u2019s most important religious sites.',
        transport: 'Road transport + walking',
        highlights: [
          'Kathmandu Durbar Square',
          'Swayambhunath',
          'Pashupatinath',
          'Boudhanath',
        ],
      },
      {
        day: 'Day 02',
        title: 'Patan',
        description:
          'The journey continues south to Patan in Lalitpur district, known for its architecture, metalwork, woodcarving, and Buddhist and Hindu heritage. Patan Durbar Square forms the centre of the day\u2019s exploration, with its palace courtyards, temples, stone sculptures, and traditional architectural details.\n\nBeyond the main square, the surrounding neighbourhoods reveal another side of Patan\u2019s heritage. Buddhist bahals, temples, traditional courtyards, and craft workshops are woven into the city\u2019s residential streets. The Golden Temple and Mahaboudha add further examples of the Buddhist architecture and craftsmanship for which Patan is known.',
        transport: 'Kathmandu \u2192 Patan \u2192 Kathmandu',
        highlights: ['Patan Durbar Square', 'Golden Temple', 'Mahaboudha'],
      },
      {
        day: 'Day 03',
        title: 'Bhaktapur',
        description:
          'The final day heads east to Bhaktapur, where traditional brick-paved streets, courtyards, temples, and historic houses give the city a distinct urban character. Bhaktapur Durbar Square provides the main focus, with the palace complex and surrounding temples forming one of the valley\u2019s major historic centres.\n\nContinue through Taumadhi Square toward Nyatapola Temple and into the surrounding streets. Pottery Square offers a closer look at one of Bhaktapur\u2019s traditional craft practices, while Dattatreya Square and the adjoining neighbourhoods extend the exploration beyond the main monument area.',
        transport: 'Kathmandu \u2192 Bhaktapur \u2192 Kathmandu',
        highlights: [
          'Bhaktapur Durbar Square',
          'Nyatapola',
          'Pottery Square',
          'Dattatreya Square',
        ],
      },
    ],
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
    itinerary: [
      {
        day: 'Day 01',
        title: 'Kathmandu \u2192 Bandipur',
        description:
          'The journey begins in Kathmandu and heads west toward Bandipur, with the road gradually leaving the Kathmandu Valley and entering the hills of central Nepal. After arriving in Bandipur, the day focuses on the historic bazaar and surrounding streets, where traditional Newar houses, carved wooden windows, temples, and courtyards give the town its distinctive character.\n\nA walk through Bandipur Bazaar leads past Bindhyabasini Temple, traditional houses, and old trading buildings. The town\u2019s position along a historic trade route helped shape its architecture and commercial character, while the pedestrian-friendly centre makes it easy to explore on foot.',
        transport: 'Road transport + walking',
        highlights: [
          'Kathmandu',
          'Bandipur Bazaar',
          'Bindhyabasini Temple',
          'Historic streets',
        ],
      },
      {
        day: 'Day 02',
        title: 'Bandipur',
        description:
          'The second day explores Bandipur beyond the main bazaar, with options to discover its cultural landmarks, surrounding villages, and hillside landscape. For those looking for a longer walk, Siddha Gufa offers an optional excursion into one of the area\u2019s notable natural attractions. Alternatively, the day can be spent exploring nearby villages, temples, and hill trails at a more relaxed pace. Viewpoints along the surrounding hills offer wider views of the valleys and mountains when weather and visibility allow.\n\nBack in town, there is time to explore the quieter streets, local shops, temples, and traditional houses. The contrast between Bandipur\u2019s compact historic centre and its open hillside surroundings gives the town much of its character.',
        transport: 'Walking + local transport',
        highlights: [
          'Siddha Gufa',
          'Hill viewpoints',
          'Local villages',
          'Bandipur Bazaar',
        ],
      },
    ],
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
