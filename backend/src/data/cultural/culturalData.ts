import type { CulturalExperience } from './culturalTypes.js';

export const CULTURAL_DATA: Record<string, CulturalExperience> = {
  'lumbini-tour': {
    slug: 'lumbini-tour',
    name: 'Lumbini Tour',
    type: 'CULTURAL',
    status: 'PUBLISHED',
    shortDescription:
      'Explore Lumbini, the birthplace of Siddhartha Gautama Buddha, through the Sacred Garden, Maya Devi Temple, ancient archaeological remains, international monasteries, and pilgrimage sites connected to Buddhist heritage.',
    durationDays: 3,
    difficulty: 'EASY',
    thumbnail: '/images/lumbini-tour/lumbini-cover.jpg',
    maxElevationM: 150,
    peakSeason: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    region: 'LUMBINI',
    startPoint: 'Kathmandu',
    interest: ['culture', 'heritage', 'monasteries', 'history'],
    activity: ['sightseeing', 'heritage', 'monastery-visit'],
    isActive: true,
    isPopular: false,
    details: [
      {
        key: 'overview',
        title: 'Overview',
        content:
          'The Lumbini Tour explores the birthplace of Siddhartha Gautama Buddha and one of the world’s important Buddhist pilgrimage sites. The journey centres on the Sacred Garden, where the Maya Devi Temple, Ashoka Pillar, Puskarini Pond, and surrounding archaeological remains connect the site with its ancient history.\n\nBeyond the birthplace, monasteries and meditation spaces reflect the different Buddhist traditions represented across Lumbini. The second day explores Lumbini’s wider monastic and cultural landscape, with monasteries, temples, and garden spaces spread across the area.\n\nThe final day extends beyond Lumbini to Tilaurakot and Kudan, archaeological sites associated with Siddhartha Gautama’s early life and his connection to the region. Together, the journey connects Lumbini’s sacred landscape with the wider history and living traditions of Buddhism.',
      },
      {
        key: 'tripFacts',
        title: 'Trip Facts',
        data: {
          type: 'CULTURAL',
          start: 'Kathmandu',
          destination: 'Lumbini',
          keyAreas: 'Sacred Garden · Monastic Zone · Tilaurakot',
          tourType: 'Multi-day · Pilgrimage & Heritage',
          transport: 'Road transport + walking',
          terrain: 'Paved paths · garden paths · archaeological sites',
        },
      },
      {
        key: 'expectations',
        title: 'What to Expect',
        data: [
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
      {
        key: 'seasonalPlanning',
        title: 'When Should I Go?',
        data: [
          {
            month: 'Jan',
            condition: 'Mild & Dry / Clear Skies / Best Walking Weather',
          },
          {
            month: 'Feb',
            condition: 'Mild & Dry / Crisp Mornings / Comfortable Sightseeing',
          },
          {
            month: 'Mar',
            condition: 'Warm Days / Hot by Midday / Early Starts Advised',
          },
          {
            month: 'Apr',
            condition: 'Hot & Dry / Strong Midday Sun / Early Starts Advised',
          },
          {
            month: 'May',
            condition: 'Hot & Humid / Strong Midday Sun / Pre-Monsoon Build-Up',
          },
          {
            month: 'Jun',
            condition: 'Monsoon Begins / Frequent Rain / Humid Conditions',
          },
          {
            month: 'Jul',
            condition: 'Full Monsoon / Frequent Downpours / Wet Grounds',
          },
          {
            month: 'Aug',
            condition: 'Full Monsoon / Humid & Wet / Muddy Paths',
          },
          {
            month: 'Sep',
            condition:
              'Monsoon Eases / Fresh Green Surroundings / Occasional Rain',
          },
          {
            month: 'Oct',
            condition: 'Dry & Clear / Prime Sightseeing / Festival Season',
          },
          {
            month: 'Nov',
            condition: 'Dry & Comfortable / Clear Skies / Peak Visitor Season',
          },
          {
            month: 'Dec',
            condition: 'Dry & Mild / Morning Fog / Comfortable Afternoons',
          },
        ],
      },
      {
        key: 'beforeYouGo',
        title: 'Before You Go',
        data: [
          {
            title: 'Food & Water',
            description:
              'Restaurants and cafés are available around Lumbini and the main visitor areas. Carry water during longer walking sections, particularly during warmer months.',
          },
          {
            title: 'Getting Around',
            description:
              'The Sacred Garden and monastery areas are primarily explored on foot, while sites outside Lumbini are reached by road.',
          },
          {
            title: 'Guide',
            description:
              'A guide is optional. Local knowledge can add historical context to the archaeological remains and explain the significance of Buddhist sites and traditions.',
          },
          {
            title: 'Site Etiquette',
            description:
              'Dress respectfully when visiting temples and monasteries. Follow local instructions regarding footwear, photography, and access to religious spaces.',
          },
          {
            title: 'Photography',
            description:
              'Follow site-specific photography rules and avoid photographing people during prayer or ceremonies without permission.',
          },
        ],
      },
      {
        key: 'sites',
        title: 'Sites & Landmarks',
        data: [
          {
            order: 1,
            name: 'Maya Devi Temple',
            coordinates: [83.2758312, 27.4696086],
            description:
              'The temple at the heart of the Sacred Garden that marks the traditional birthplace of Siddhartha Gautama.',
            tooltip: 'Marks the traditional birthplace of the Buddha.',
            isHighlight: true,
            dayId: 'day-01',
          },
          {
            order: 2,
            name: 'Ashoka Pillar',
            coordinates: [83.2756678, 27.469681],
            description:
              'An inscribed pillar within the Sacred Garden, part of the archaeological remains that connect the site with its ancient history.',
            tooltip:
              'An inscribed pillar recording the site’s ancient history.',
            dayId: 'day-01',
          },
          {
            order: 3,
            name: 'Puskarini Pond',
            coordinates: [83.275627, 27.4693056],
            description:
              'The pond within the Sacred Garden, part of the traditional landscape around the Buddha’s birthplace.',
            tooltip: 'The sacred pond beside the Buddha’s birthplace.',
            dayId: 'day-01',
          },
          {
            order: 4,
            name: 'Monastic Zone',
            coordinates: [83.2758587, 27.4785789],
            description:
              'Monasteries and temples built by Buddhist communities from across Asia, with distinct architectural styles, religious spaces, sculptures and landscaped gardens across the eastern and western zones.',
            tooltip:
              'Explore monasteries representing Buddhist traditions from around the world.',
            dayId: 'day-02',
          },
          {
            order: 5,
            name: 'World Peace Pagoda',
            coordinates: [83.2762616, 27.4989068],
            description: 'A landmark within the wider Lumbini landscape.',
            tooltip: 'A white stupa landmark on the edge of Lumbini.',
            dayId: 'day-02',
          },
          {
            order: 6,
            name: 'Tilaurakot',
            coordinates: [83.0548105, 27.5758757],
            description:
              'An archaeological site identified with the ancient city of Kapilavastu, associated with the Shakya kingdom and the period of Siddhartha Gautama’s life before his departure from the royal household. Excavated remains reveal the foundations and layout of the ancient settlement.',
            tooltip: 'Excavated remains of the ancient city of Kapilavastu.',
            isHighlight: true,
            dayId: 'day-03',
          },
          {
            order: 7,
            name: 'Kudan',
            coordinates: [83.0405605, 27.5279937],
            description:
              'An archaeological site associated with the Buddha’s life and his return to the region after enlightenment.',
            tooltip:
              'Where the Buddha is said to have returned after enlightenment.',
            dayId: 'day-03',
          },
        ],
      },
      {
        key: 'gearChecklist',
        title: 'Gear Checklist',
        data: {
          essentials: [
            {
              item: 'Daypack (15-25L)',
              weight: '0.6kg',
            },
            {
              item: 'Comfortable Walking Shoes',
              weight: '0.8kg',
            },
            {
              item: 'Light Layer / Modest Clothing for Temples',
              weight: '0.3kg',
            },
            {
              item: 'Sun Cap',
              weight: '0.06kg',
            },
            {
              item: 'Sunglasses (UV 400 Protection)',
              weight: '0.033kg',
            },
            {
              item: 'Sunscreen + Lip Balm',
              weight: '0.1kg',
            },
            {
              item: 'Water Bottle (1L)',
              weight: '0.125kg',
            },
            {
              item: 'Snacks / Energy Bars',
              weight: '0.15kg',
              quantity: 2,
            },
            {
              item: 'Small First Aid Kit',
              weight: '0.15kg',
            },
            {
              item: 'Cash (small notes)',
              weight: '0.05kg',
            },
          ],
          optional: [
            {
              item: 'Light Rain Shell',
              weight: '0.25kg',
            },
            {
              item: 'Insect Repellent',
              weight: '0.04kg',
            },
            {
              item: 'Power Bank (10,000 mAh)',
              weight: '0.2kg',
            },
            {
              item: 'Shawl / Sarong for Temple Visits',
              weight: '0.2kg',
            },
          ],
        },
      },
    ],
    images: [
      {
        url: '/images/lumbini-tour/lumbini-cover.jpg',
        alt: 'Lumbini Tour: the heritage landscape of the Buddha’s birthplace',
        type: 'HERO',
        metadata: {
          frontendId: 'img_01',
          order: 1,
        },
      },
      {
        url: '/images/lumbini-tour/lumbini-1.jpg',
        alt: 'Lumbini heritage site photo 1',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_02',
          order: null,
        },
      },
      {
        url: '/images/lumbini-tour/lumbini-2.jpg',
        alt: 'Lumbini heritage site photo 2',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_03',
          order: null,
        },
      },
      {
        url: '/images/lumbini-tour/lumbini-3.jpg',
        alt: 'Lumbini heritage site photo 3',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_04',
          order: null,
        },
      },
      {
        url: '/images/lumbini-tour/lumbini-4.jpg',
        alt: 'Lumbini heritage site photo 4',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_05',
          order: null,
        },
      },
      {
        url: '/images/lumbini-tour/lumbini-5.jpg',
        alt: 'Lumbini heritage site photo 5',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_06',
          order: null,
        },
      },
      {
        url: '/images/lumbini-tour/lumbini-6.jpg',
        alt: 'Lumbini heritage site photo 6',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_07',
          order: null,
        },
      },
      {
        url: '/images/lumbini-tour/lumbini-7.jpg',
        alt: 'Lumbini heritage site photo 7',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_08',
          order: null,
        },
      },
      {
        url: '/images/lumbini-tour/lumbini-8.jpg',
        alt: 'Lumbini heritage site photo 8',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_09',
          order: null,
        },
      },
    ],
    timeline: {
      title: 'Tour Itinerary',
      description: 'Day-by-day breakdown of the tour',
      items: [
        {
          order: 1,
          dayNumber: 1,
          title: 'Kathmandu → Lumbini',
          data: {
            description:
              'The journey begins in Kathmandu and heads west toward Lumbini, leaving the hills of the Kathmandu Valley behind as the landscape gradually opens into the plains of southern Nepal. After arriving, the first exploration focuses on the Sacred Garden, the centre of the pilgrimage site, where the Maya Devi Temple marks the traditional birthplace and nearby remains connect the sacred landscape with Lumbini’s ancient history.',
            transport: 'Road transport + walking',
            highlights: [
              'Kathmandu → Lumbini',
              'Maya Devi Temple',
              'Ashoka Pillar',
              'Puskarini Pond',
              'Sacred Garden',
            ],
            dayId: 'day-01',
            color: '#F59E0B',
            coordinates: [83.2758312, 27.4696086],
          },
        },
        {
          order: 2,
          dayNumber: 2,
          title: 'Lumbini',
          data: {
            description:
              'The second day explores the wider monastic area of Lumbini, where monasteries and temples built by Buddhist communities from across Asia reflect the international character of the pilgrimage site. The eastern and western monastic zones feature distinct architectural styles, religious spaces, sculptures and landscaped gardens, with the World Peace Pagoda adding another landmark within the wider landscape.',
            transport: 'Walking',
            highlights: [
              'Monastic Zone',
              'International monasteries',
              'Meditation spaces',
              'World Peace Pagoda',
            ],
            dayId: 'day-02',
            color: '#376BB6',
            coordinates: [83.2758587, 27.4785789],
          },
        },
        {
          order: 3,
          dayNumber: 3,
          title: 'Lumbini → Tilaurakot → Kathmandu',
          data: {
            description:
              'The final day follows the wider archaeological landscape associated with Siddhartha Gautama’s early life. Tilaurakot, identified with the ancient city of Kapilavastu, is associated with the Shakya kingdom and the period before his departure from the royal household. The journey continues to Kudan before heading back toward Kathmandu.',
            transport: 'Road transport + walking',
            highlights: ['Tilaurakot', 'Kudan', 'Archaeological sites'],
            dayId: 'day-03',
            color: '#8DC63F',
            coordinates: [83.0548105, 27.5758757],
          },
        },
      ],
    },
  },
  'kathmandu-valley-heritage-tour': {
    slug: 'kathmandu-valley-heritage-tour',
    name: 'Kathmandu Valley Heritage Tour',
    type: 'CULTURAL',
    status: 'PUBLISHED',
    shortDescription:
      'Explore the historic cities of Kathmandu, Patan, and Bhaktapur, moving through palace squares, temples, courtyards, traditional streets, and living cultural neighbourhoods across the Kathmandu Valley.',
    durationDays: 3,
    difficulty: 'EASY',
    thumbnail:
      '/images/kathmandu-valley-heritage-tour/kathmandu-valley-cover.jpg',
    maxElevationM: 1400,
    peakSeason: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    region: 'KATHMANDU_VALLEY',
    startPoint: 'Kathmandu',
    interest: ['culture', 'heritage', 'history', 'local-life'],
    activity: ['sightseeing', 'heritage'],
    isActive: true,
    isPopular: false,
    details: [
      {
        key: 'overview',
        title: 'Overview',
        content:
          'The Kathmandu Valley Heritage Tour connects three historic cities, Kathmandu, Patan, and Bhaktapur, each shaped by Newari architecture, craftsmanship, and Hindu and Buddhist traditions.\n\nThe journey begins in Kathmandu, exploring the historic centre around Kathmandu Durbar Square before continuing to Swayambhunath, Pashupatinath, and Boudhanath. The day brings together palace courtyards, temples, stupas, and traditional neighbourhoods that remain part of everyday life in the city.\n\nThe second day moves south to Patan, where Durbar Square and the surrounding bahals, courtyards, temples, and craft traditions reveal the city’s distinctive architectural character. The final day reaches Bhaktapur, known for its traditional streets, brick-built architecture, historic squares, and long-standing craft traditions.\n\nTogether, the three days offer a closer look at the architectural heritage and living culture of the Kathmandu Valley.',
      },
      {
        key: 'tripFacts',
        title: 'Trip Facts',
        data: {
          type: 'CULTURAL',
          start: 'Kathmandu',
          cities: 'Kathmandu · Patan · Bhaktapur',
          tourType: 'Multi-day · City-based',
          transport: 'Road transport + walking',
          terrain: 'Paved streets · temple courtyards · stone stairways',
        },
      },
      {
        key: 'expectations',
        title: 'What to Expect',
        data: [
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
      {
        key: 'seasonalPlanning',
        title: 'When Should I Go?',
        data: [
          {
            month: 'Jan',
            condition: 'Dry & Mild / Clear Mountain Views / Easy Sightseeing',
          },
          {
            month: 'Feb',
            condition: 'Dry & Mild / Crisp Mornings / Comfortable Walking',
          },
          {
            month: 'Mar',
            condition:
              'Dry & Warming / Clear Skies / Spring Colour in Courtyards',
          },
          {
            month: 'Apr',
            condition: 'Warm & Dry / Long Daylight / Festival Season',
          },
          {
            month: 'May',
            condition: 'Warm & Humid / Pre-Monsoon Showers / Hazier Views',
          },
          {
            month: 'Jun',
            condition: 'Monsoon Begins / Humid / Afternoon Rain',
          },
          {
            month: 'Jul',
            condition:
              'Full Monsoon / Frequent Rain / Wet Streets Slow the Pace',
          },
          {
            month: 'Aug',
            condition: 'Full Monsoon / Cloud Cover / Sites Still Accessible',
          },
          {
            month: 'Sep',
            condition:
              'Monsoon Eases / Clearing Skies / Festival Season Begins',
          },
          {
            month: 'Oct',
            condition:
              'Dry & Clear / Best Mountain Views / Peak Visitor Season',
          },
          {
            month: 'Nov',
            condition: 'Dry & Settled / Clear Skies / Ideal Walking Weather',
          },
          {
            month: 'Dec',
            condition: 'Dry & Crisp / Clear Afternoons / Quieter Courtyards',
          },
        ],
      },
      {
        key: 'beforeYouGo',
        title: 'Before You Go',
        data: [
          {
            title: 'Food & Water',
            description:
              'Cafés and restaurants are readily available around the main heritage areas. Carry water for walking between sites, especially during warmer months.',
          },
          {
            title: 'Getting Around',
            description:
              'Travel between the cities is by road, while the heritage areas are primarily explored on foot. Traffic can affect travel times within the valley.',
          },
          {
            title: 'Guide',
            description:
              'A guide is optional. Local knowledge can add historical and cultural context, particularly when exploring temple architecture, religious symbolism, and traditional neighbourhoods.',
          },
          {
            title: 'Site Etiquette',
            description:
              'Dress modestly when visiting religious sites. Footwear may need to be removed before entering temples or certain shrine areas. Some Hindu temples restrict entry to non-Hindus; follow posted signs and local guidance.',
          },
          {
            title: 'Photography',
            description:
              'Follow site-specific photography rules, particularly inside temples and during religious rituals.',
          },
        ],
      },
      {
        key: 'entryFees',
        title: 'Entry Fees',
        data: {
          intro:
            'Entrance fees vary by site and visitor category. The main sites included in the itinerary have different entry requirements and fees.',
          rows: [
            {
              site: 'Kathmandu Durbar Square',
              foreign: 'NPR 1,000',
              saarc: 'NPR 500',
            },
            {
              site: 'Swayambhunath',
              foreign: 'NPR 200',
              saarc: 'NPR 50',
            },
            {
              site: 'Pashupatinath Temple',
              foreign: 'NPR 1,000',
              saarc: 'NPR 1,000',
            },
            {
              site: 'Boudhanath',
              foreign: 'NPR 400',
              saarc: 'NPR 100',
            },
            {
              site: 'Patan Durbar Square incl. Patan Museum',
              foreign: 'NPR 1,000',
              saarc: 'NPR 500',
            },
            {
              site: 'Bhaktapur Durbar Square',
              foreign: 'NPR 1,800',
              saarc: 'NPR 500',
            },
          ],
          disclaimer:
            'Entry fees may change. Check the relevant site or official tourism authority for the latest rates before visiting.',
        },
      },
      {
        key: 'sites',
        title: 'Sites & Landmarks',
        data: [
          {
            order: 1,
            name: 'Kathmandu Durbar Square',
            coordinates: [85.3065551, 27.7042916],
            description:
              'Palace courtyards, temples, shrines and carved timber architecture reflecting the city’s royal history. The surrounding old city extends into narrow streets and traditional neighbourhoods where temples and courtyards remain part of everyday life.',
            tooltip:
              'Royal palace courtyards, temples and carved timber architecture.',
            isHighlight: true,
            dayId: 'day-01',
          },
          {
            order: 2,
            name: 'Swayambhunath',
            coordinates: [85.2903913, 27.7149389],
            description:
              'A hilltop Buddhist stupa reached by stone stairways above the city, and one of the valley’s most important religious sites.',
            tooltip: 'A hilltop Buddhist stupa reached by stone stairways.',
            dayId: 'day-01',
          },
          {
            order: 3,
            name: 'Pashupatinath Temple',
            coordinates: [85.3486653, 27.7104647],
            description:
              'A major Hindu temple complex on the banks of the Bagmati and an active site of daily ritual and worship.',
            tooltip: 'A major Hindu temple complex on the Bagmati river.',
            entryInfo:
              'Some areas of the complex are restricted to Hindus. Follow posted signs and local guidance.',
            dayId: 'day-01',
          },
          {
            order: 4,
            name: 'Boudhanath',
            coordinates: [85.3620399, 27.7213911],
            description:
              'One of the valley’s largest Buddhist stupas, ringed by monasteries, shops and cafés, and an active site of daily worship.',
            tooltip:
              'One of the valley’s largest stupas, ringed by monasteries.',
            isHighlight: true,
            dayId: 'day-01',
          },
          {
            order: 5,
            name: 'Patan Durbar Square',
            coordinates: [85.325035, 27.6734454],
            description:
              'The centre of the day’s exploration in Patan, with palace courtyards, temples, stone sculptures and traditional architectural details. Entry includes the Patan Museum.',
            tooltip: 'Palace courtyards, temples and stone sculpture in Patan.',
            isHighlight: true,
            dayId: 'day-02',
          },
          {
            order: 6,
            name: 'Golden Temple',
            coordinates: [85.3247105, 27.6752237],
            description:
              'A Buddhist bahal in the streets behind the main square, known for its metalwork and ornamented shrine — one of the clearest examples of Patan’s Buddhist architecture and craftsmanship.',
            tooltip:
              'A Buddhist bahal known for its ornamented metalwork shrine.',
            dayId: 'day-02',
          },
          {
            order: 7,
            name: 'Mahaboudha',
            coordinates: [85.3271415, 27.6689984],
            description:
              'A brick and terracotta temple set among Patan’s residential streets, adding a further example of the Buddhist architecture and craftsmanship for which the city is known.',
            tooltip:
              'A brick and terracotta temple among Patan’s back streets.',
            dayId: 'day-02',
          },
          {
            order: 8,
            name: 'Bhaktapur Durbar Square',
            coordinates: [85.4281306, 27.672078],
            description:
              'The main focus of the final day, where the palace complex and surrounding temples form one of the valley’s major historic centres.',
            tooltip:
              'A palace complex and temple square at the heart of Bhaktapur.',
            isHighlight: true,
            dayId: 'day-03',
          },
          {
            order: 9,
            name: 'Nyatapola',
            coordinates: [85.4293725, 27.6714098],
            description:
              'A five-storey temple rising above Taumadhi Square, among the tallest traditional temples in the valley.',
            tooltip: 'A five-storey temple rising above Taumadhi Square.',
            dayId: 'day-03',
          },
          {
            order: 10,
            name: 'Pottery Square',
            coordinates: [85.427743, 27.669897],
            description:
              'A working potters’ square offering a closer look at one of Bhaktapur’s traditional craft practices.',
            tooltip: 'A working potters’ square and a living Bhaktapur craft.',
            dayId: 'day-03',
          },
          {
            order: 11,
            name: 'Dattatreya Square',
            coordinates: [85.4353586, 27.6735387],
            description:
              'A historic square east of the main monument area, where a temple and the adjoining neighbourhoods extend the exploration beyond the main squares.',
            tooltip: 'A historic temple square east of the main monument area.',
            dayId: 'day-03',
          },
        ],
      },
      {
        key: 'gearChecklist',
        title: 'Gear Checklist',
        data: {
          essentials: [
            {
              item: 'Daypack (15-25L)',
              weight: '0.6kg',
            },
            {
              item: 'Comfortable Walking Shoes',
              weight: '0.8kg',
            },
            {
              item: 'Light Layer / Modest Clothing for Temples',
              weight: '0.3kg',
            },
            {
              item: 'Sun Cap',
              weight: '0.06kg',
            },
            {
              item: 'Sunglasses (UV 400 Protection)',
              weight: '0.033kg',
            },
            {
              item: 'Sunscreen + Lip Balm',
              weight: '0.1kg',
            },
            {
              item: 'Water Bottle (1L)',
              weight: '0.125kg',
            },
            {
              item: 'Snacks / Energy Bars',
              weight: '0.15kg',
              quantity: 2,
            },
            {
              item: 'Small First Aid Kit',
              weight: '0.15kg',
            },
            {
              item: 'Cash for Entry Fees (small notes)',
              weight: '0.05kg',
            },
          ],
          optional: [
            {
              item: 'Light Rain Shell',
              weight: '0.25kg',
            },
            {
              item: 'Power Bank (10,000 mAh)',
              weight: '0.2kg',
            },
            {
              item: 'Shawl / Sarong for Temple Visits',
              weight: '0.2kg',
            },
            {
              item: 'Hand Sanitiser',
              weight: '0.05kg',
            },
          ],
        },
      },
    ],
    images: [
      {
        url: '/images/kathmandu-valley-heritage-tour/kathmandu-valley-cover.jpg',
        alt: 'Taleju Temple at sunset above Kathmandu Durbar Square',
        type: 'HERO',
        metadata: {
          frontendId: 'img_01',
          order: 1,
        },
      },
      {
        url: '/images/kathmandu-valley-heritage-tour/kathmandu-valley-1.jpg',
        alt: 'Carved timber facade and tiered roofs at Kathmandu Durbar Square',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_02',
          order: null,
        },
      },
      {
        url: '/images/kathmandu-valley-heritage-tour/kathmandu-valley-2.jpg',
        alt: 'The stupa, shrines and prayer flags of Swayambhunath at dusk',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_03',
          order: null,
        },
      },
      {
        url: '/images/kathmandu-valley-heritage-tour/kathmandu-valley-3.jpg',
        alt: 'Tiered temple roofs and carved struts lit at night',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_04',
          order: null,
        },
      },
      {
        url: '/images/kathmandu-valley-heritage-tour/kathmandu-valley-4.jpg',
        alt: 'The gilded roofs of the Pashupatinath temple complex',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_05',
          order: null,
        },
      },
      {
        url: '/images/kathmandu-valley-heritage-tour/kathmandu-valley-5.jpg',
        alt: 'Boudhanath Stupa and prayer flags at blue hour',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_06',
          order: null,
        },
      },
      {
        url: '/images/kathmandu-valley-heritage-tour/kathmandu-valley-6.jpg',
        alt: 'Temples and palace buildings along Patan Durbar Square',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_07',
          order: null,
        },
      },
      {
        url: '/images/kathmandu-valley-heritage-tour/kathmandu-valley-7.jpg',
        alt: 'The brick-paved expanse of Bhaktapur Durbar Square',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_08',
          order: null,
        },
      },
      {
        url: '/images/kathmandu-valley-heritage-tour/kathmandu-valley-8.jpg',
        alt: 'Bhairavnath Temple on Taumadhi Square, Bhaktapur',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_09',
          order: null,
        },
      },
    ],
    timeline: {
      title: 'Tour Itinerary',
      description: 'Day-by-day breakdown of the tour',
      items: [
        {
          order: 1,
          dayNumber: 1,
          title: 'Kathmandu',
          data: {
            description:
              'The first day introduces Kathmandu through its historic centre and major Hindu and Buddhist landmarks. Begin at Kathmandu Durbar Square, where palace courtyards, temples, shrines, and carved timber architecture reflect the city’s royal history. The surrounding old city extends into narrow streets and traditional neighbourhoods, where temples and courtyards remain part of everyday life.\n\nFrom the historic centre, continue to Swayambhunath, Pashupatinath, and Boudhanath, moving between some of the valley’s most important religious sites.',
            transport: 'Road transport + walking',
            highlights: [
              'Kathmandu Durbar Square',
              'Swayambhunath',
              'Pashupatinath',
              'Boudhanath',
            ],
            dayId: 'day-01',
            color: '#F59E0B',
            coordinates: [85.3065551, 27.7042916],
          },
        },
        {
          order: 2,
          dayNumber: 2,
          title: 'Patan',
          data: {
            description:
              'The journey continues south to Patan in Lalitpur district, known for its architecture, metalwork, woodcarving, and Buddhist and Hindu heritage. Patan Durbar Square forms the centre of the day’s exploration, with its palace courtyards, temples, stone sculptures, and traditional architectural details.\n\nBeyond the main square, the surrounding neighbourhoods reveal another side of Patan’s heritage. Buddhist bahals, temples, traditional courtyards, and craft workshops are woven into the city’s residential streets. The Golden Temple and Mahaboudha add further examples of the Buddhist architecture and craftsmanship for which Patan is known.',
            transport: 'Kathmandu → Patan → Kathmandu',
            highlights: ['Patan Durbar Square', 'Golden Temple', 'Mahaboudha'],
            dayId: 'day-02',
            color: '#376BB6',
            coordinates: [85.325035, 27.6734454],
          },
        },
        {
          order: 3,
          dayNumber: 3,
          title: 'Bhaktapur',
          data: {
            description:
              'The final day heads east to Bhaktapur, where traditional brick-paved streets, courtyards, temples, and historic houses give the city a distinct urban character. Bhaktapur Durbar Square provides the main focus, with the palace complex and surrounding temples forming one of the valley’s major historic centres.\n\nContinue through Taumadhi Square toward Nyatapola Temple and into the surrounding streets. Pottery Square offers a closer look at one of Bhaktapur’s traditional craft practices, while Dattatreya Square and the adjoining neighbourhoods extend the exploration beyond the main monument area.',
            transport: 'Kathmandu → Bhaktapur → Kathmandu',
            highlights: [
              'Bhaktapur Durbar Square',
              'Nyatapola',
              'Pottery Square',
              'Dattatreya Square',
            ],
            dayId: 'day-03',
            color: '#8DC63F',
            coordinates: [85.4281306, 27.672078],
          },
        },
      ],
    },
  },
  'bandipur-hill-town': {
    slug: 'bandipur-hill-town',
    name: 'Bandipur Hill Town',
    type: 'CULTURAL',
    status: 'PUBLISHED',
    shortDescription:
      'Explore the historic hill town of Bandipur, walking through its preserved Newar streets, traditional houses, temples, viewpoints, and surrounding hills.',
    durationDays: 2,
    difficulty: 'EASY',
    thumbnail: '/images/bandipur-hill-town/bandipur-cover.jpg',
    maxElevationM: 1030,
    peakSeason: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    region: 'POKHARA',
    startPoint: 'Kathmandu',
    interest: ['culture', 'heritage', 'local-life', 'villages'],
    activity: ['sightseeing', 'heritage'],
    isActive: true,
    isPopular: false,
    details: [
      {
        key: 'overview',
        title: 'Overview',
        content:
          'The Bandipur Tour travels from Kathmandu to the historic hill town of Bandipur in Tanahun, known for its preserved Newar architecture, traditional streets, and views across the surrounding hills. The journey begins with a walk through Bandipur Bazaar, where timber-framed houses, carved windows, temples, and old trading buildings reflect the town’s history as a Newar trading centre along the route between the Kathmandu Valley and western Nepal.\n\nThe second day explores the cultural and natural surroundings beyond the main bazaar. Traditional villages, temples, caves, and hilltop viewpoints extend the experience beyond Bandipur’s historic centre into the surrounding landscape. Together, the journey combines the town’s architectural heritage with its surrounding hills and everyday local life.',
      },
      {
        key: 'tripFacts',
        title: 'Trip Facts',
        data: {
          type: 'CULTURAL',
          start: 'Kathmandu',
          destination: 'Bandipur',
          tourType: 'Multi-day · Cultural & Heritage',
          transport: 'Road transport + walking',
          terrain: 'Paved streets · stone paths · village trails',
        },
      },
      {
        key: 'expectations',
        title: 'What to Expect',
        data: [
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
      {
        key: 'seasonalPlanning',
        title: 'When Should I Go?',
        data: [
          {
            month: 'Jan',
            condition: 'Clear Skies / Crisp Hill Air / Sharp Mountain Views',
          },
          {
            month: 'Feb',
            condition: 'Clear Skies / Comfortable Walking / Quiet Bazaar',
          },
          {
            month: 'Mar',
            condition: 'Warming Days / Spring Vegetation / Clear Ridge Views',
          },
          {
            month: 'Apr',
            condition:
              'Warm & Clear / Spring Colour on the Hills / Long Daylight',
          },
          {
            month: 'May',
            condition: 'Warm Days / Pre-Monsoon Haze / Afternoon Cloud',
          },
          {
            month: 'Jun',
            condition: 'Monsoon Begins / Frequent Rain / Slippery Stone Paths',
          },
          {
            month: 'Jul',
            condition: 'Full Monsoon / Cloud Cover / Mountain Views Unreliable',
          },
          {
            month: 'Aug',
            condition:
              'Full Monsoon / Wet & Humid / Slippery Paths to Siddha Gufa',
          },
          {
            month: 'Sep',
            condition: 'Monsoon Eases / Lush Green Hills / Clearing Views',
          },
          {
            month: 'Oct',
            condition: 'Clear Skies / Best Mountain Panoramas / Prime Season',
          },
          {
            month: 'Nov',
            condition:
              'Clear & Dry / Excellent Visibility / Comfortable Walking',
          },
          {
            month: 'Dec',
            condition: 'Clear & Dry / Fresh Mornings / Bright Afternoons',
          },
        ],
      },
      {
        key: 'beforeYouGo',
        title: 'Before You Go',
        data: [
          {
            title: 'Food & Water',
            description:
              'Restaurants, cafés, and local eateries are available around Bandipur Bazaar. Carry water during longer walks outside the town centre.',
          },
          {
            title: 'Getting Around',
            description:
              'Travel to Bandipur is by road, while the historic centre and nearby attractions are primarily explored on foot.',
          },
          {
            title: 'Trail Conditions',
            description:
              'The path to Siddha Gufa includes stone steps and natural surfaces that can become slippery when wet.',
          },
          {
            title: 'Guide',
            description:
              'A guide is optional. Local knowledge can add context to Bandipur’s Newar architecture, trading history, temples, and surrounding villages.',
          },
        ],
      },
      {
        key: 'sites',
        title: 'Sites & Landmarks',
        data: [
          {
            order: 1,
            name: 'Bandipur Bazaar',
            coordinates: [84.405208, 27.9372428],
            description:
              'The pedestrian heart of the historic town, lined with timber-framed Newar houses, carved wooden windows, temples and old trading buildings.',
            tooltip: 'A pedestrian street of timber-framed Newar town houses.',
            isHighlight: true,
            dayId: 'day-01',
          },
          {
            order: 2,
            name: 'Bindhyabasini Temple',
            coordinates: [84.4070803, 27.9378027],
            description:
              'A temple along the bazaar walk and part of the town’s religious and community life.',
            tooltip: 'A working temple on the bazaar walk.',
            dayId: 'day-01',
          },
          {
            order: 3,
            name: 'Siddha Gufa',
            coordinates: [84.4185018, 27.9484399],
            description:
              'An optional longer excursion from town and one of the area’s notable natural attractions, reached by a path of stone steps and natural surfaces.',
            tooltip: 'A large limestone cave reached by a steep stone path.',
            entryInfo:
              'The path includes stone steps and natural surfaces that can become slippery when wet. Carry a torch for the cave.',
            isHighlight: true,
            dayId: 'day-02',
          },
          {
            order: 4,
            name: 'Tundikhel',
            coordinates: [84.4039104, 27.943828],
            description:
              'A viewpoint on the ridge above town, with wider views across the valleys and mountains when weather and visibility allow.',
            tooltip: 'A ridge viewpoint over the valleys and mountains.',
            dayId: 'day-02',
          },
        ],
      },
      {
        key: 'gearChecklist',
        title: 'Gear Checklist',
        data: {
          essentials: [
            {
              item: 'Daypack (15-25L)',
              weight: '0.6kg',
            },
            {
              item: 'Comfortable Walking Shoes with Grip',
              weight: '0.8kg',
            },
            {
              item: 'Light Layers (cooler evenings on the ridge)',
              weight: '0.4kg',
            },
            {
              item: 'Sun Cap',
              weight: '0.06kg',
            },
            {
              item: 'Sunglasses (UV 400 Protection)',
              weight: '0.033kg',
            },
            {
              item: 'Sunscreen + Lip Balm',
              weight: '0.1kg',
            },
            {
              item: 'Water Bottle (1L)',
              weight: '0.125kg',
            },
            {
              item: 'Snacks / Energy Bars',
              weight: '0.15kg',
              quantity: 2,
            },
            {
              item: 'Headtorch (for Siddha Gufa)',
              weight: '0.09kg',
            },
            {
              item: 'Small First Aid Kit',
              weight: '0.15kg',
            },
            {
              item: 'Cash (small notes)',
              weight: '0.05kg',
            },
          ],
          optional: [
            {
              item: 'Light Rain Shell',
              weight: '0.25kg',
            },
            {
              item: 'Insect Repellent',
              weight: '0.04kg',
            },
            {
              item: 'Power Bank (10,000 mAh)',
              weight: '0.2kg',
            },
            {
              item: 'Trekking Poles',
              weight: '0.5kg',
            },
          ],
        },
      },
    ],
    images: [
      {
        url: '/images/bandipur-hill-town/bandipur-cover.jpg',
        alt: 'Bandipur Bazaar, the pedestrian main street of the historic hill town',
        type: 'HERO',
        metadata: {
          frontendId: 'img_01',
          order: 1,
        },
      },
      {
        url: '/images/bandipur-hill-town/bandipur-1.jpg',
        alt: 'Residents walking the bazaar between traditional Newar houses',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_02',
          order: null,
        },
      },
      {
        url: '/images/bandipur-hill-town/bandipur-2.jpg',
        alt: 'The bazaar square and its temple in the centre of Bandipur',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_03',
          order: null,
        },
      },
      {
        url: '/images/bandipur-hill-town/bandipur-3.jpg',
        alt: 'A stone-paved street below the forested ridge above Bandipur',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_04',
          order: null,
        },
      },
      {
        url: '/images/bandipur-hill-town/bandipur-4.jpg',
        alt: 'Rooftops of the old town at golden hour',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_05',
          order: null,
        },
      },
      {
        url: '/images/bandipur-hill-town/bandipur-5.jpg',
        alt: 'Hazy hills and valleys around the Bandipur ridge',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_06',
          order: null,
        },
      },
    ],
    timeline: {
      title: 'Tour Itinerary',
      description: 'Day-by-day breakdown of the tour',
      items: [
        {
          order: 1,
          dayNumber: 1,
          title: 'Kathmandu → Bandipur',
          data: {
            description:
              'The journey begins in Kathmandu and heads west toward Bandipur, with the road gradually leaving the Kathmandu Valley and entering the hills of central Nepal. After arriving in Bandipur, the day focuses on the historic bazaar and surrounding streets, where traditional Newar houses, carved wooden windows, temples, and courtyards give the town its distinctive character.\n\nA walk through Bandipur Bazaar leads past Bindhyabasini Temple, traditional houses, and old trading buildings. The town’s position along a historic trade route helped shape its architecture and commercial character, while the pedestrian-friendly centre makes it easy to explore on foot.',
            transport: 'Road transport + walking',
            highlights: [
              'Kathmandu',
              'Bandipur Bazaar',
              'Bindhyabasini Temple',
              'Historic streets',
            ],
            dayId: 'day-01',
            color: '#F59E0B',
            coordinates: [84.405208, 27.9372428],
          },
        },
        {
          order: 2,
          dayNumber: 2,
          title: 'Bandipur',
          data: {
            description:
              'The second day explores Bandipur beyond the main bazaar, with options to discover its cultural landmarks, surrounding villages, and hillside landscape. For those looking for a longer walk, Siddha Gufa offers an optional excursion into one of the area’s notable natural attractions. Alternatively, the day can be spent exploring nearby villages, temples, and hill trails at a more relaxed pace. Viewpoints along the surrounding hills offer wider views of the valleys and mountains when weather and visibility allow.\n\nBack in town, there is time to explore the quieter streets, local shops, temples, and traditional houses. The contrast between Bandipur’s compact historic centre and its open hillside surroundings gives the town much of its character.',
            transport: 'Walking + local transport',
            highlights: [
              'Siddha Gufa',
              'Hill viewpoints',
              'Local villages',
              'Bandipur Bazaar',
            ],
            dayId: 'day-02',
            color: '#376BB6',
            coordinates: [84.4185018, 27.9484399],
          },
        },
      ],
    },
  },
};
