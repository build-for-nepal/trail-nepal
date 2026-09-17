import { CulturalTourDetail } from '@/types/cultural';

export const CULTURAL_TOUR_DETAILS: Record<string, CulturalTourDetail> = {
  'lumbini-tour': {
    id: 'lumbini-tour',
    name: 'Lumbini Tour',
    summary:
      'A three-day pilgrimage to the Buddha\u2019s birthplace, from the Sacred Garden and Maya Devi Temple to the international monastic zone, Tilaurakot and Kudan.',
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
    sites: [
      {
        order: 1,
        name: 'Sacred Garden',
        coordinates: [27.4696, 83.2756],
        description:
          'The centre of the pilgrimage site, where the Maya Devi Temple, Ashoka Pillar, Puskarini Pond and surrounding archaeological remains connect the site with its ancient history.',
        openHours: '06:00–18:00',
        isHighlight: true,
        dayId: 'day-01',
      },
      {
        order: 2,
        name: 'Maya Devi Temple',
        coordinates: [27.4697, 83.2756],
        description:
          'The temple at the heart of the Sacred Garden that marks the traditional birthplace of Siddhartha Gautama.',
        openHours: '06:00–18:00',
        isHighlight: true,
        dayId: 'day-01',
      },
      {
        order: 3,
        name: 'Ashoka Pillar',
        coordinates: [27.4691, 83.2759],
        description:
          'An inscribed pillar within the Sacred Garden, part of the archaeological remains that connect the site with its ancient history.',
        dayId: 'day-01',
      },
      {
        order: 4,
        name: 'Puskarini Pond',
        coordinates: [27.471, 83.277],
        description:
          'The pond within the Sacred Garden, part of the traditional landscape around the Buddha\u2019s birthplace.',
        dayId: 'day-01',
      },
      {
        order: 5,
        name: 'Monastic Zone',
        coordinates: [27.477, 83.281],
        description:
          'Monasteries and temples built by Buddhist communities from across Asia, with distinct architectural styles, religious spaces, sculptures and landscaped gardens across the eastern and western zones.',
        dayId: 'day-02',
      },
      {
        order: 6,
        name: 'World Peace Pagoda',
        coordinates: [27.4796, 83.2765],
        description:
          'A landmark within the wider Lumbini landscape.',
        dayId: 'day-02',
      },
      {
        order: 7,
        name: 'Tilaurakot',
        coordinates: [27.577, 83.058],
        description:
          'An archaeological site identified with the ancient city of Kapilavastu, associated with the Shakya kingdom and the period of Siddhartha Gautama\u2019s life before his departure from the royal household. Excavated remains reveal the foundations and layout of the ancient settlement.',
        isHighlight: true,
        dayId: 'day-03',
      },
      {
        order: 8,
        name: 'Kudan',
        coordinates: [27.464, 83.312],
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
        coordinates: [27.4696, 83.2756],
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
        coordinates: [27.477, 83.281],
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
        coordinates: [27.577, 83.058],
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
      { month: 'October', condition: 'Cooler and more comfortable conditions for walking and exploring the open archaeological areas.' },
      { month: 'November', condition: 'Cooler and more comfortable conditions for walking and exploring the open archaeological areas.' },
      { month: 'December', condition: 'Cooler and more comfortable conditions for walking and exploring the open archaeological areas.' },
      { month: 'January', condition: 'Cooler and more comfortable conditions for walking and exploring the open archaeological areas.' },
      { month: 'February', condition: 'Cooler and more comfortable conditions for walking and exploring the open archaeological areas.' },
      { month: 'March', condition: 'Hot, particularly during the middle of the day. Midday walking can feel demanding.' },
      { month: 'April', condition: 'Hot, particularly during the middle of the day. Midday walking can feel demanding.' },
      { month: 'May', condition: 'Hot, particularly during the middle of the day. Midday walking can feel demanding.' },
      { month: 'June', condition: 'Hotter conditions with more frequent rainfall. Rain can affect outdoor walking and visits to archaeological sites.' },
      { month: 'July', condition: 'Hotter conditions with more frequent rainfall. Rain can affect outdoor walking and visits to archaeological sites.' },
      { month: 'August', condition: 'Hotter conditions with more frequent rainfall. Rain can affect outdoor walking and visits to archaeological sites.' },
      { month: 'September', condition: 'Hotter conditions with more frequent rainfall. Rain can affect outdoor walking and visits to archaeological sites.' },
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
        alt: 'Lumbini Tour — the heritage landscape of the Buddha\u2019s birthplace',
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
};