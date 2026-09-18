import { CulturalTourDetail } from '@/types/cultural';

export const CULTURAL_TOUR_DETAILS: Record<string, CulturalTourDetail> = {
  'lumbini-tour': {
    id: 'lumbini-tour',
    // Title, region and summary are the PDF's "Trip Highlights" Title / Region /
    // Description verbatim — the hero renders these three directly.
    name: 'Lumbini Tour',
    summary:
      'Explore Lumbini, the birthplace of Siddhartha Gautama Buddha, through the Sacred Garden, Maya Devi Temple, ancient archaeological remains, international monasteries, and pilgrimage sites connected to Buddhist heritage.',
    region: 'Lumbini, Rupandehi',
    meta: {
      duration: '3 Days',
      difficulty: 'Easy',
      maxElevation: '~150m',
      bestSeasons: 'Year-Round',
      startingPoint: 'Kathmandu',
      tripFacts: {
        start: 'Kathmandu',
        destination: 'Lumbini',
        keyAreas: 'Sacred Garden · Monastic Zone · Tilaurakot',
        tourType: 'Multi-day · Pilgrimage & Heritage',
        transport: 'Road transport + walking',
        terrain: 'Paved paths · garden paths · archaeological sites',
      },
    },
    overview:
      'The Lumbini Tour explores the birthplace of Siddhartha Gautama Buddha and one of the world\u2019s important Buddhist pilgrimage sites. The journey centres on the Sacred Garden, where the Maya Devi Temple, Ashoka Pillar, Puskarini Pond, and surrounding archaeological remains connect the site with its ancient history.\n\nBeyond the birthplace, monasteries and meditation spaces reflect the different Buddhist traditions represented across Lumbini. The second day explores Lumbini\u2019s wider monastic and cultural landscape, with monasteries, temples, and garden spaces spread across the area.\n\nThe final day extends beyond Lumbini to Tilaurakot and Kudan, archaeological sites associated with Siddhartha Gautama\u2019s early life and his connection to the region. Together, the journey connects Lumbini\u2019s sacred landscape with the wider history and living traditions of Buddhism.',
    // Coordinates below are OpenStreetMap values (lat, lng), captured via
    // Nominatim/Overpass. The OSM ref is noted per site so they can be
    // re-verified. "Sacred Garden" is intentionally not a pin: it is the
    // enclosing World Heritage area (way/481349199) whose centroid sits
    // 50–90m from the three sites it contains, so pinning it would stack a
    // fourth marker on the same spot. It stays named in the Day 01 highlights.
    sites: [
      {
        order: 1,
        name: 'Maya Devi Temple',
        // OSM way/343151593 (Mayadevi Temple)
        coordinates: [27.4696086, 83.2758312],
        description:
          'The temple at the heart of the Sacred Garden that marks the traditional birthplace of Siddhartha Gautama.',
        isHighlight: true,
        dayId: 'day-01',
      },
      {
        order: 2,
        name: 'Ashoka Pillar',
        // OSM node/4285950089
        coordinates: [27.469681, 83.2756678],
        description:
          'An inscribed pillar within the Sacred Garden, part of the archaeological remains that connect the site with its ancient history.',
        dayId: 'day-01',
      },
      {
        order: 3,
        name: 'Puskarini Pond',
        // OSM way/655895296 (mapped as "Sacred Pond of Pushkarni")
        coordinates: [27.4693056, 83.275627],
        description:
          'The pond within the Sacred Garden, part of the traditional landscape around the Buddha\u2019s birthplace.',
        dayId: 'day-01',
      },
      {
        order: 4,
        name: 'Monastic Zone',
        // OSM way/456385566 (Lumbini monastic zone)
        coordinates: [27.4785789, 83.2758587],
        description:
          'Monasteries and temples built by Buddhist communities from across Asia, with distinct architectural styles, religious spaces, sculptures and landscaped gardens across the eastern and western zones.',
        dayId: 'day-02',
      },
      {
        order: 5,
        name: 'World Peace Pagoda',
        // OSM way/844764523 (Shanti Stupa / World Peace Pagoda)
        coordinates: [27.4989068, 83.2762616],
        description: 'A landmark within the wider Lumbini landscape.',
        dayId: 'day-02',
      },
      {
        order: 6,
        name: 'Tilaurakot',
        // OSM relation/19990298 (Kapilavastu (I) Tilaurakot)
        coordinates: [27.5758757, 83.0548105],
        description:
          'An archaeological site identified with the ancient city of Kapilavastu, associated with the Shakya kingdom and the period of Siddhartha Gautama\u2019s life before his departure from the royal household. Excavated remains reveal the foundations and layout of the ancient settlement.',
        isHighlight: true,
        dayId: 'day-03',
      },
      {
        order: 7,
        name: 'Kudan',
        // OSM relation/19980399
        coordinates: [27.5279937, 83.0405605],
        description:
          'An archaeological site associated with the Buddha\u2019s life and his return to the region after enlightenment.',
        dayId: 'day-03',
      },
    ],
    itinerary: [
      {
        day: 'Day 01',
        id: 'day-01',
        title: 'Kathmandu → Lumbini',
        color: '#F59E0B',
        description:
          'The journey begins in Kathmandu and heads west toward Lumbini, leaving the hills of the Kathmandu Valley behind as the landscape gradually opens into the plains of southern Nepal. After arriving, the first exploration focuses on the Sacred Garden, the centre of the pilgrimage site, where the Maya Devi Temple marks the traditional birthplace and nearby remains connect the sacred landscape with Lumbini\u2019s ancient history.',
        transport: 'Road transport + walking',
        highlights: [
          'Kathmandu → Lumbini',
          'Maya Devi Temple',
          'Ashoka Pillar',
          'Puskarini Pond',
          'Sacred Garden',
        ],
        coordinates: [27.4696086, 83.2758312],
      },
      {
        day: 'Day 02',
        id: 'day-02',
        title: 'Lumbini',
        color: '#376BB6',
        description:
          'The second day explores the wider monastic area of Lumbini, where monasteries and temples built by Buddhist communities from across Asia reflect the international character of the pilgrimage site. The eastern and western monastic zones feature distinct architectural styles, religious spaces, sculptures and landscaped gardens, with the World Peace Pagoda adding another landmark within the wider landscape.',
        transport: 'Walking',
        highlights: [
          'Monastic Zone',
          'International monasteries',
          'Meditation spaces',
          'World Peace Pagoda',
        ],
        coordinates: [27.4785789, 83.2758587],
      },
      {
        day: 'Day 03',
        id: 'day-03',
        title: 'Lumbini → Tilaurakot → Kathmandu',
        color: '#8DC63F',
        description:
          'The final day follows the wider archaeological landscape associated with Siddhartha Gautama\u2019s early life. Tilaurakot, identified with the ancient city of Kapilavastu, is associated with the Shakya kingdom and the period before his departure from the royal household. The journey continues to Kudan before heading back toward Kathmandu.',
        transport: 'Road transport + walking',
        highlights: ['Tilaurakot', 'Kudan', 'Archaeological sites'],
        coordinates: [27.5758757, 83.0548105],
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
    seasonalPlanning: [
      // Same shape as the trek and hike month tables: three-letter month, and a
      // condition of short ` / `-separated fragments. The calendar shows only the
      // first fragment on the month tile, so it carries the headline.
      //
      // Order matters and must start at January: TreksSeasonCalendar maps array
      // position onto the calendar month, so an October-first list would label
      // October's entry "January" in the detail panel and put the "Current Month"
      // badge on the wrong tile.
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
      { month: 'Aug', condition: 'Full Monsoon / Humid & Wet / Muddy Paths' },
      {
        month: 'Sep',
        condition: 'Monsoon Eases / Fresh Green Surroundings / Occasional Rain',
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
    beforeYouGo: [
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
    gallery: [
      {
        id: 'img_01',
        url: '/images/lumbini-tour/lumbini-cover.jpg',
        alt: 'Lumbini Tour: the heritage landscape of the Buddha\u2019s birthplace',
        type: 'hero',
      },
      {
        id: 'img_02',
        url: '/images/lumbini-tour/lumbini-1.jpg',
        alt: 'Lumbini heritage site photo 1',
        type: 'landscape',
      },
      {
        id: 'img_03',
        url: '/images/lumbini-tour/lumbini-2.jpg',
        alt: 'Lumbini heritage site photo 2',
        type: 'landscape',
      },
      {
        id: 'img_04',
        url: '/images/lumbini-tour/lumbini-3.jpg',
        alt: 'Lumbini heritage site photo 3',
        type: 'portrait',
      },
      {
        id: 'img_05',
        url: '/images/lumbini-tour/lumbini-4.jpg',
        alt: 'Lumbini heritage site photo 4',
        type: 'landscape',
      },
      {
        id: 'img_06',
        url: '/images/lumbini-tour/lumbini-5.jpg',
        alt: 'Lumbini heritage site photo 5',
        type: 'landscape',
      },
      {
        id: 'img_07',
        url: '/images/lumbini-tour/lumbini-6.jpg',
        alt: 'Lumbini heritage site photo 6',
        type: 'landscape',
      },
      {
        id: 'img_08',
        url: '/images/lumbini-tour/lumbini-7.jpg',
        alt: 'Lumbini heritage site photo 7',
        type: 'landscape',
      },
      {
        id: 'img_09',
        url: '/images/lumbini-tour/lumbini-8.jpg',
        alt: 'Lumbini heritage site photo 8',
        type: 'landscape',
      },
    ],
    gearChecklist: {
      essentials: [
        { item: 'Daypack (15-25L)', weight: '0.6kg' },
        { item: 'Comfortable Walking Shoes', weight: '0.8kg' },
        { item: 'Light Layer / Modest Clothing for Temples', weight: '0.3kg' },
        { item: 'Sun Cap', weight: '0.06kg' },
        { item: 'Sunglasses (UV 400 Protection)', weight: '0.033kg' },
        { item: 'Sunscreen + Lip Balm', weight: '0.1kg' },
        { item: 'Water Bottle (1L)', weight: '0.125kg' },
        { item: 'Snacks / Energy Bars', weight: '0.15kg', quantity: 2 },
        { item: 'Small First Aid Kit', weight: '0.15kg' },
        { item: 'Cash (small notes)', weight: '0.05kg' },
      ],
      optional: [
        { item: 'Light Rain Shell', weight: '0.25kg' },
        { item: 'Insect Repellent', weight: '0.04kg' },
        { item: 'Power Bank (10,000 mAh)', weight: '0.2kg' },
        { item: 'Shawl / Sarong for Temple Visits', weight: '0.2kg' },
      ],
    },
  },
  'kathmandu-valley-heritage-tour': {
    id: 'kathmandu-valley-heritage-tour',
    // "Trip Highlights" Title / Region / Description, verbatim from the PDF.
    name: 'Kathmandu Valley Heritage Tour',
    summary:
      'Explore the historic cities of Kathmandu, Patan, and Bhaktapur, moving through palace squares, temples, courtyards, traditional streets, and living cultural neighbourhoods across the Kathmandu Valley.',
    region: 'Kathmandu Valley',
    meta: {
      duration: '3 Days',
      difficulty: 'Easy',
      maxElevation: '~1400m',
      bestSeasons: 'Year-Round',
      startingPoint: 'Kathmandu',
      tripFacts: {
        start: 'Kathmandu',
        // This tour is city-hopping rather than single-destination, so it lists
        // `cities` where Lumbini lists `destination` + `keyAreas`.
        cities: 'Kathmandu · Patan · Bhaktapur',
        tourType: 'Multi-day · City-based',
        transport: 'Road transport + walking',
        terrain: 'Paved streets · temple courtyards · stone stairways',
      },
    },
    overview:
      'The Kathmandu Valley Heritage Tour connects three historic cities, Kathmandu, Patan, and Bhaktapur, each shaped by Newari architecture, craftsmanship, and Hindu and Buddhist traditions.\n\nThe journey begins in Kathmandu, exploring the historic centre around Kathmandu Durbar Square before continuing to Swayambhunath, Pashupatinath, and Boudhanath. The day brings together palace courtyards, temples, stupas, and traditional neighbourhoods that remain part of everyday life in the city.\n\nThe second day moves south to Patan, where Durbar Square and the surrounding bahals, courtyards, temples, and craft traditions reveal the city\u2019s distinctive architectural character. The final day reaches Bhaktapur, known for its traditional streets, brick-built architecture, historic squares, and long-standing craft traditions.\n\nTogether, the three days offer a closer look at the architectural heritage and living culture of the Kathmandu Valley.',
    // Coordinates below are OpenStreetMap values (lat, lng), resolved via
    // Nominatim. The OSM ref is noted per site so they can be re-verified.
    // "Taumadhi Square" is intentionally not a pin: Nyatapola stands inside it,
    // so a square marker would stack on the temple marker (same reasoning as
    // Lumbini's Sacred Garden). It stays named in the Day 03 description.
    sites: [
      {
        order: 1,
        name: 'Kathmandu Durbar Square',
        // OSM relation/21291455 (highway=pedestrian, "वसन्तपुर दरबार क्षेत्र")
        coordinates: [27.7042916, 85.3065551],
        description:
          'Palace courtyards, temples, shrines and carved timber architecture reflecting the city\u2019s royal history. The surrounding old city extends into narrow streets and traditional neighbourhoods where temples and courtyards remain part of everyday life.',
        isHighlight: true,
        dayId: 'day-01',
      },
      {
        order: 2,
        name: 'Swayambhunath',
        // OSM way/201223707 (amenity=place_of_worship)
        coordinates: [27.7149389, 85.2903913],
        description:
          'A hilltop Buddhist stupa reached by stone stairways above the city, and one of the valley\u2019s most important religious sites.',
        dayId: 'day-01',
      },
      {
        order: 3,
        name: 'Pashupatinath Temple',
        // OSM way/913170315 (tourism=attraction, "पशुपतीनाथ")
        coordinates: [27.7104647, 85.3486653],
        description:
          'A major Hindu temple complex on the banks of the Bagmati and an active site of daily ritual and worship.',
        entryInfo:
          'Some areas of the complex are restricted to Hindus. Follow posted signs and local guidance.',
        dayId: 'day-01',
      },
      {
        order: 4,
        name: 'Boudhanath',
        // OSM way/56688296 (amenity=place_of_worship, "Boudhanāth Stupa")
        coordinates: [27.7213911, 85.3620399],
        description:
          'One of the valley\u2019s largest Buddhist stupas, ringed by monasteries, shops and cafés, and an active site of daily worship.',
        isHighlight: true,
        dayId: 'day-01',
      },
      {
        order: 5,
        name: 'Patan Durbar Square',
        // OSM relation/4557971 (highway=pedestrian)
        coordinates: [27.6734454, 85.325035],
        description:
          'The centre of the day\u2019s exploration in Patan, with palace courtyards, temples, stone sculptures and traditional architectural details. Entry includes the Patan Museum.',
        isHighlight: true,
        dayId: 'day-02',
      },
      {
        order: 6,
        name: 'Golden Temple',
        // OSM relation/4624856 (Hiranya Varna Mahavihar, amenity=place_of_worship)
        coordinates: [27.6752237, 85.3247105],
        description:
          'A Buddhist bahal in the streets behind the main square, known for its metalwork and ornamented shrine \u2014 one of the clearest examples of Patan\u2019s Buddhist architecture and craftsmanship.',
        dayId: 'day-02',
      },
      {
        order: 7,
        name: 'Mahaboudha',
        // OSM node/564129617 (amenity=place_of_worship, "महाबुद्ध मन्दिर")
        coordinates: [27.6689984, 85.3271415],
        description:
          'A brick and terracotta temple set among Patan\u2019s residential streets, adding a further example of the Buddhist architecture and craftsmanship for which the city is known.',
        dayId: 'day-02',
      },
      {
        order: 8,
        name: 'Bhaktapur Durbar Square',
        // OSM way/1192827651 (place=square)
        coordinates: [27.672078, 85.4281306],
        description:
          'The main focus of the final day, where the palace complex and surrounding temples form one of the valley\u2019s major historic centres.',
        isHighlight: true,
        dayId: 'day-03',
      },
      {
        order: 9,
        name: 'Nyatapola',
        // OSM way/85470341 (amenity=place_of_worship)
        coordinates: [27.6714098, 85.4293725],
        description:
          'A five-storey temple rising above Taumadhi Square, among the tallest traditional temples in the valley.',
        dayId: 'day-03',
      },
      {
        order: 10,
        name: 'Pottery Square',
        // OSM node/12287948902 (tourism=attraction, "Pottery Square (Talako Tole)")
        coordinates: [27.669897, 85.427743],
        description:
          'A working potters\u2019 square offering a closer look at one of Bhaktapur\u2019s traditional craft practices.',
        dayId: 'day-03',
      },
      {
        order: 11,
        name: 'Dattatreya Square',
        // OSM node/11365112169 (amenity=place_of_worship, "Dattatraya Temple")
        coordinates: [27.6735387, 85.4353586],
        description:
          'A historic square east of the main monument area, where a temple and the adjoining neighbourhoods extend the exploration beyond the main squares.',
        dayId: 'day-03',
      },
    ],
    itinerary: [
      {
        day: 'Day 01',
        id: 'day-01',
        title: 'Kathmandu',
        color: '#F59E0B',
        description:
          'The first day introduces Kathmandu through its historic centre and major Hindu and Buddhist landmarks. Begin at Kathmandu Durbar Square, where palace courtyards, temples, shrines, and carved timber architecture reflect the city\u2019s royal history. The surrounding old city extends into narrow streets and traditional neighbourhoods, where temples and courtyards remain part of everyday life.\n\nFrom the historic centre, continue to Swayambhunath, Pashupatinath, and Boudhanath, moving between some of the valley\u2019s most important religious sites.',
        transport: 'Road transport + walking',
        highlights: [
          'Kathmandu Durbar Square',
          'Swayambhunath',
          'Pashupatinath',
          'Boudhanath',
        ],
        coordinates: [27.7042916, 85.3065551],
      },
      {
        day: 'Day 02',
        id: 'day-02',
        title: 'Patan',
        color: '#376BB6',
        description:
          'The journey continues south to Patan in Lalitpur district, known for its architecture, metalwork, woodcarving, and Buddhist and Hindu heritage. Patan Durbar Square forms the centre of the day\u2019s exploration, with its palace courtyards, temples, stone sculptures, and traditional architectural details.\n\nBeyond the main square, the surrounding neighbourhoods reveal another side of Patan\u2019s heritage. Buddhist bahals, temples, traditional courtyards, and craft workshops are woven into the city\u2019s residential streets. The Golden Temple and Mahaboudha add further examples of the Buddhist architecture and craftsmanship for which Patan is known.',
        transport: 'Kathmandu → Patan → Kathmandu',
        highlights: ['Patan Durbar Square', 'Golden Temple', 'Mahaboudha'],
        coordinates: [27.6734454, 85.325035],
      },
      {
        day: 'Day 03',
        id: 'day-03',
        title: 'Bhaktapur',
        color: '#8DC63F',
        description:
          'The final day heads east to Bhaktapur, where traditional brick-paved streets, courtyards, temples, and historic houses give the city a distinct urban character. Bhaktapur Durbar Square provides the main focus, with the palace complex and surrounding temples forming one of the valley\u2019s major historic centres.\n\nContinue through Taumadhi Square toward Nyatapola Temple and into the surrounding streets. Pottery Square offers a closer look at one of Bhaktapur\u2019s traditional craft practices, while Dattatreya Square and the adjoining neighbourhoods extend the exploration beyond the main monument area.',
        transport: 'Kathmandu → Bhaktapur → Kathmandu',
        highlights: [
          'Bhaktapur Durbar Square',
          'Nyatapola',
          'Pottery Square',
          'Dattatreya Square',
        ],
        coordinates: [27.672078, 85.4281306],
      },
    ],
    entryFees: {
      intro:
        'Entrance fees vary by site and visitor category. The main sites included in the itinerary have different entry requirements and fees.',
      rows: [
        {
          site: 'Kathmandu Durbar Square',
          foreign: 'NPR 1,000',
          saarc: 'NPR 500',
        },
        { site: 'Swayambhunath', foreign: 'NPR 200', saarc: 'NPR 50' },
        {
          site: 'Pashupatinath Temple',
          foreign: 'NPR 1,000',
          saarc: 'NPR 1,000',
        },
        { site: 'Boudhanath', foreign: 'NPR 400', saarc: 'NPR 100' },
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
    seasonalPlanning: [
      // January-first, three-letter months, short ` / `-separated fragments — see
      // the note on the Lumbini table above for why the order is load-bearing.
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
        condition: 'Dry & Warming / Clear Skies / Spring Colour in Courtyards',
      },
      {
        month: 'Apr',
        condition: 'Warm & Dry / Long Daylight / Festival Season',
      },
      {
        month: 'May',
        condition: 'Warm & Humid / Pre-Monsoon Showers / Hazier Views',
      },
      { month: 'Jun', condition: 'Monsoon Begins / Humid / Afternoon Rain' },
      {
        month: 'Jul',
        condition: 'Full Monsoon / Frequent Rain / Wet Streets Slow the Pace',
      },
      {
        month: 'Aug',
        condition: 'Full Monsoon / Cloud Cover / Sites Still Accessible',
      },
      {
        month: 'Sep',
        condition: 'Monsoon Eases / Clearing Skies / Festival Season Begins',
      },
      {
        month: 'Oct',
        condition: 'Dry & Clear / Best Mountain Views / Peak Visitor Season',
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
    beforeYouGo: [
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
    gallery: [
      {
        id: 'img_01',
        url: '/images/kathmandu-valley-heritage-tour/kathmandu-valley-cover.jpg',
        alt: 'Taleju Temple at sunset above Kathmandu Durbar Square',
        type: 'hero',
      },
      {
        id: 'img_02',
        url: '/images/kathmandu-valley-heritage-tour/kathmandu-valley-1.jpg',
        alt: 'Carved timber facade and tiered roofs at Kathmandu Durbar Square',
        type: 'landscape',
      },
      {
        id: 'img_03',
        url: '/images/kathmandu-valley-heritage-tour/kathmandu-valley-2.jpg',
        alt: 'The stupa, shrines and prayer flags of Swayambhunath at dusk',
        type: 'landscape',
      },
      {
        id: 'img_04',
        url: '/images/kathmandu-valley-heritage-tour/kathmandu-valley-3.jpg',
        alt: 'Tiered temple roofs and carved struts lit at night',
        type: 'portrait',
      },
      {
        id: 'img_05',
        url: '/images/kathmandu-valley-heritage-tour/kathmandu-valley-4.jpg',
        alt: 'The gilded roofs of the Pashupatinath temple complex',
        type: 'landscape',
      },
      {
        id: 'img_06',
        url: '/images/kathmandu-valley-heritage-tour/kathmandu-valley-5.jpg',
        alt: 'Boudhanath Stupa and prayer flags at blue hour',
        type: 'landscape',
      },
      {
        id: 'img_07',
        url: '/images/kathmandu-valley-heritage-tour/kathmandu-valley-6.jpg',
        alt: 'Temples and palace buildings along Patan Durbar Square',
        type: 'landscape',
      },
      {
        id: 'img_08',
        url: '/images/kathmandu-valley-heritage-tour/kathmandu-valley-7.jpg',
        alt: 'The brick-paved expanse of Bhaktapur Durbar Square',
        type: 'landscape',
      },
      {
        id: 'img_09',
        url: '/images/kathmandu-valley-heritage-tour/kathmandu-valley-8.jpg',
        alt: 'Bhairavnath Temple on Taumadhi Square, Bhaktapur',
        type: 'landscape',
      },
    ],
    gearChecklist: {
      essentials: [
        { item: 'Daypack (15-25L)', weight: '0.6kg' },
        { item: 'Comfortable Walking Shoes', weight: '0.8kg' },
        { item: 'Light Layer / Modest Clothing for Temples', weight: '0.3kg' },
        { item: 'Sun Cap', weight: '0.06kg' },
        { item: 'Sunglasses (UV 400 Protection)', weight: '0.033kg' },
        { item: 'Sunscreen + Lip Balm', weight: '0.1kg' },
        { item: 'Water Bottle (1L)', weight: '0.125kg' },
        { item: 'Snacks / Energy Bars', weight: '0.15kg', quantity: 2 },
        { item: 'Small First Aid Kit', weight: '0.15kg' },
        { item: 'Cash for Entry Fees (small notes)', weight: '0.05kg' },
      ],
      optional: [
        { item: 'Light Rain Shell', weight: '0.25kg' },
        { item: 'Power Bank (10,000 mAh)', weight: '0.2kg' },
        { item: 'Shawl / Sarong for Temple Visits', weight: '0.2kg' },
        { item: 'Hand Sanitiser', weight: '0.05kg' },
      ],
    },
  },
  'bandipur-hill-town': {
    id: 'bandipur-hill-town',
    // "Trip Highlights" Title / Region / Description, verbatim from the PDF.
    name: 'Bandipur Hill Town',
    summary:
      'Explore the historic hill town of Bandipur, walking through its preserved Newar streets, traditional houses, temples, viewpoints, and surrounding hills.',
    region: 'Tanahun District',
    meta: {
      duration: '2 Days',
      difficulty: 'Easy',
      maxElevation: '~1030m',
      bestSeasons: 'Year-Round',
      startingPoint: 'Kathmandu',
      tripFacts: {
        start: 'Kathmandu',
        destination: 'Bandipur',
        // No `keyAreas`: the operator's trip facts for this tour list only a
        // destination, and the optional field is dropped by the renderer.
        tourType: 'Multi-day · Cultural & Heritage',
        transport: 'Road transport + walking',
        terrain: 'Paved streets · stone paths · village trails',
      },
    },
    overview:
      'The Bandipur Tour travels from Kathmandu to the historic hill town of Bandipur in Tanahun, known for its preserved Newar architecture, traditional streets, and views across the surrounding hills. The journey begins with a walk through Bandipur Bazaar, where timber-framed houses, carved windows, temples, and old trading buildings reflect the town\u2019s history as a Newar trading centre along the route between the Kathmandu Valley and western Nepal.\n\nThe second day explores the cultural and natural surroundings beyond the main bazaar. Traditional villages, temples, caves, and hilltop viewpoints extend the experience beyond Bandipur\u2019s historic centre into the surrounding landscape. Together, the journey combines the town\u2019s architectural heritage with its surrounding hills and everyday local life.',
    // Coordinates below are OpenStreetMap values (lat, lng), resolved via
    // Nominatim. The OSM ref is noted per site so they can be re-verified.
    // Kathmandu is not a pin: it is the origin city rather than a site on the
    // tour, so it stays in the Day 01 highlights only (same as Lumbini's
    // "Kathmandu → Lumbini"). "Hill viewpoints" and "Local villages" are
    // generic highlights with no single mappable feature; Tundikhel is the
    // named OSM viewpoint that stands in for the ridge-top views.
    sites: [
      {
        order: 1,
        name: 'Bandipur Bazaar',
        // OSM way/404328703 (highway=pedestrian, the main bazaar street)
        coordinates: [27.9372428, 84.405208],
        description:
          'The pedestrian heart of the historic town, lined with timber-framed Newar houses, carved wooden windows, temples and old trading buildings.',
        isHighlight: true,
        dayId: 'day-01',
      },
      {
        order: 2,
        name: 'Bindhyabasini Temple',
        // OSM way/341126519 (amenity=place_of_worship, mapped as "Bindebasini Temple")
        coordinates: [27.9378027, 84.4070803],
        description:
          'A temple along the bazaar walk and part of the town\u2019s religious and community life.',
        dayId: 'day-01',
      },
      {
        order: 3,
        name: 'Siddha Gufa',
        // OSM node/1329319684 (natural=cave_entrance, "Siddha Cave")
        coordinates: [27.9484399, 84.4185018],
        description:
          'An optional longer excursion from town and one of the area\u2019s notable natural attractions, reached by a path of stone steps and natural surfaces.',
        entryInfo:
          'The path includes stone steps and natural surfaces that can become slippery when wet. Carry a torch for the cave.',
        isHighlight: true,
        dayId: 'day-02',
      },
      {
        order: 4,
        name: 'Tundikhel',
        // OSM node/1329317035 (tourism=viewpoint, name:en=Tundikhel)
        coordinates: [27.943828, 84.4039104],
        description:
          'A viewpoint on the ridge above town, with wider views across the valleys and mountains when weather and visibility allow.',
        dayId: 'day-02',
      },
    ],
    itinerary: [
      {
        day: 'Day 01',
        id: 'day-01',
        title: 'Kathmandu → Bandipur',
        color: '#F59E0B',
        description:
          'The journey begins in Kathmandu and heads west toward Bandipur, with the road gradually leaving the Kathmandu Valley and entering the hills of central Nepal. After arriving in Bandipur, the day focuses on the historic bazaar and surrounding streets, where traditional Newar houses, carved wooden windows, temples, and courtyards give the town its distinctive character.\n\nA walk through Bandipur Bazaar leads past Bindhyabasini Temple, traditional houses, and old trading buildings. The town\u2019s position along a historic trade route helped shape its architecture and commercial character, while the pedestrian-friendly centre makes it easy to explore on foot.',
        transport: 'Road transport + walking',
        highlights: [
          'Kathmandu',
          'Bandipur Bazaar',
          'Bindhyabasini Temple',
          'Historic streets',
        ],
        coordinates: [27.9372428, 84.405208],
      },
      {
        day: 'Day 02',
        id: 'day-02',
        title: 'Bandipur',
        color: '#376BB6',
        description:
          'The second day explores Bandipur beyond the main bazaar, with options to discover its cultural landmarks, surrounding villages, and hillside landscape. For those looking for a longer walk, Siddha Gufa offers an optional excursion into one of the area\u2019s notable natural attractions. Alternatively, the day can be spent exploring nearby villages, temples, and hill trails at a more relaxed pace. Viewpoints along the surrounding hills offer wider views of the valleys and mountains when weather and visibility allow.\n\nBack in town, there is time to explore the quieter streets, local shops, temples, and traditional houses. The contrast between Bandipur\u2019s compact historic centre and its open hillside surroundings gives the town much of its character.',
        transport: 'Walking + local transport',
        highlights: [
          'Siddha Gufa',
          'Hill viewpoints',
          'Local villages',
          'Bandipur Bazaar',
        ],
        coordinates: [27.9484399, 84.4185018],
      },
    ],
    expectations: [
      {
        title: 'Historic Newar Town',
        description:
          'Bandipur\u2019s centre retains traditional Newar houses, carved wooden details, temples, courtyards, and a compact historic street layout.',
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
    // October–April and March–May overlap in the operator's guidance, so March
    // and April carry both notes rather than arbitrarily dropping one.
    seasonalPlanning: [
      // January-first, three-letter months, short ` / `-separated fragments — see
      // the note on the Lumbini table above for why the order is load-bearing.
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
        condition: 'Warm & Clear / Spring Colour on the Hills / Long Daylight',
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
        condition: 'Full Monsoon / Wet & Humid / Slippery Paths to Siddha Gufa',
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
        condition: 'Clear & Dry / Excellent Visibility / Comfortable Walking',
      },
      {
        month: 'Dec',
        condition: 'Clear & Dry / Fresh Mornings / Bright Afternoons',
      },
    ],
    beforeYouGo: [
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
          'A guide is optional. Local knowledge can add context to Bandipur\u2019s Newar architecture, trading history, temples, and surrounding villages.',
      },
    ],
    gallery: [
      {
        id: 'img_01',
        url: '/images/bandipur-hill-town/bandipur-cover.jpg',
        alt: 'Bandipur Bazaar, the pedestrian main street of the historic hill town',
        type: 'hero',
      },
      {
        id: 'img_02',
        url: '/images/bandipur-hill-town/bandipur-1.jpg',
        alt: 'Residents walking the bazaar between traditional Newar houses',
        type: 'landscape',
      },
      {
        id: 'img_03',
        url: '/images/bandipur-hill-town/bandipur-2.jpg',
        alt: 'The bazaar square and its temple in the centre of Bandipur',
        type: 'landscape',
      },
      {
        id: 'img_04',
        url: '/images/bandipur-hill-town/bandipur-3.jpg',
        alt: 'A stone-paved street below the forested ridge above Bandipur',
        type: 'portrait',
      },
      {
        id: 'img_05',
        url: '/images/bandipur-hill-town/bandipur-4.jpg',
        alt: 'Rooftops of the old town at golden hour',
        type: 'landscape',
      },
      {
        id: 'img_06',
        url: '/images/bandipur-hill-town/bandipur-5.jpg',
        alt: 'Hazy hills and valleys around the Bandipur ridge',
        type: 'landscape',
      },
    ],
    gearChecklist: {
      essentials: [
        { item: 'Daypack (15-25L)', weight: '0.6kg' },
        { item: 'Comfortable Walking Shoes with Grip', weight: '0.8kg' },
        {
          item: 'Light Layers (cooler evenings on the ridge)',
          weight: '0.4kg',
        },
        { item: 'Sun Cap', weight: '0.06kg' },
        { item: 'Sunglasses (UV 400 Protection)', weight: '0.033kg' },
        { item: 'Sunscreen + Lip Balm', weight: '0.1kg' },
        { item: 'Water Bottle (1L)', weight: '0.125kg' },
        { item: 'Snacks / Energy Bars', weight: '0.15kg', quantity: 2 },
        { item: 'Headtorch (for Siddha Gufa)', weight: '0.09kg' },
        { item: 'Small First Aid Kit', weight: '0.15kg' },
        { item: 'Cash (small notes)', weight: '0.05kg' },
      ],
      optional: [
        { item: 'Light Rain Shell', weight: '0.25kg' },
        { item: 'Insect Repellent', weight: '0.04kg' },
        { item: 'Power Bank (10,000 mAh)', weight: '0.2kg' },
        { item: 'Trekking Poles', weight: '0.5kg' },
      ],
    },
  },
};
