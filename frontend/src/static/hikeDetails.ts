import { HikeDetail } from '@/types/hike';

export const HIKE_DETAILS: Record<string, HikeDetail> = {
  'nagarkot-changunarayan': {
    id: 'nagarkot-changunarayan',
    name: 'Nagarkot to Changunarayan Hike',
    summary:
      'A gentle, mostly downhill day hike from the Nagarkot ridge to the ancient Changunarayan temple, through forest, open hillsides, and terraced farmland.',
    region: 'Kathmandu Valley',
    meta: {
      duration: '1 Day',
      difficulty: 'Easy',
      maxElevation: '2,175m',
      bestSeasons: 'October-December, February-April',
      startingPoint: 'Nagarkot',
      tripFacts: {
        start: 'Nagarkot (2,175 m)',
        finish: 'Changunarayan (1,541 m)',
        distance: '~8 km',
        walkingTime: '3–4 hours',
        routeType: 'Point-to-point',
        elevationChange: '≈ 634 m net descent',
        direction: 'Nagarkot → Changunarayan (westbound, mostly downhill)',
        terrain: 'Ridge path, pine forest, open hillside, terraced farmland',
      },
    },
    overview:
      'The Nagarkot to Changunarayan hike is one of the most accessible day walks in the Kathmandu Valley, linking the popular hill-station ridge of Nagarkot with the UNESCO-listed Changunarayan temple. The route begins on the Nagarkot ridge at around 2,175 m and descends gradually westward, following a mix of quiet back roads, pine forest paths, and open hillsides.\n\nAs the trail loses elevation, the surroundings shift from cool ridge-top forest to terraced farmland and small Newar and Tamang settlements. On clear mornings the early sections open to a wide Himalayan skyline stretching from Langtang toward the Everest range. The walk ends at Changunarayan, the oldest Hindu temple in the valley, a short drive from Bhaktapur and Kathmandu.',
    route: [
      {
        order: '01',
        title: 'Nagarkot',
        distanceMark: '0 km',
        timeMark: 'Start',
        role: 'start',
        description:
          'The hike starts on the Nagarkot ridge, a well-known sunrise viewpoint above the eastern rim of the Kathmandu Valley. On clear mornings the ridge offers a broad Himalayan panorama before the trail turns downhill toward the west.',
        terrain: 'Ridge road → forest edge',
        coordinates: [27.7172, 85.5205],
      },
      {
        order: '02',
        title: 'Chhap',
        distanceMark: '~2 km',
        timeMark: '~45 min',
        description:
          'The trail leaves the ridge and drops through pine and rhododendron forest toward the small settlement of Chhap, with occasional breaks in the trees opening back toward the mountains.',
        terrain: 'Pine forest descent',
        coordinates: [27.718, 85.49],
      },
      {
        order: '03',
        title: 'Telkot Hillside',
        distanceMark: '~4 km',
        timeMark: '~1 hr 30 min',
        description:
          'Beyond Chhap the path opens onto grassy hillsides and back roads near Telkot, passing scattered farms and grazing land with wide views across the valley.',
        terrain: 'Open hillside → farm track',
        coordinates: [27.7175, 85.46],
      },
      {
        order: '04',
        title: 'Terraced Farmland',
        distanceMark: '~6 km',
        timeMark: '~2 hr 30 min',
        description:
          'The route continues through terraced fields and small Newar villages, following irrigation paths and field edges as it approaches the Changunarayan hill.',
        terrain: 'Terraced farmland',
        coordinates: [27.717, 85.44],
      },
      {
        order: '05',
        title: 'Changunarayan',
        distanceMark: '~8 km',
        timeMark: '~3 hr 30 min',
        role: 'finish',
        description:
          'A short final climb reaches Changunarayan, the oldest Hindu temple in the Kathmandu Valley and a UNESCO World Heritage Site, where the hike ends. Bhaktapur and Kathmandu are a short drive away.',
        terrain: 'Cobbled village lane → temple courtyard',
        coordinates: [27.7168, 85.4279],
      },
    ],
    expectations: [
      {
        title: 'Himalayan Sunrise Views',
        description:
          'On clear mornings the Nagarkot ridge opens to a wide mountain skyline, from the Langtang range toward the far eastern Himalaya, before the descent begins.',
      },
      {
        title: 'Forest and Farmland',
        description:
          'The trail moves through pine forest, open hillsides, and terraced fields, offering a quiet, varied walk within easy reach of the city.',
      },
      {
        title: 'Living Newar Heritage',
        description:
          'The route passes small Newar and Tamang settlements and ends at Changunarayan, a centuries-old temple rich in stone and woodcarving.',
      },
    ],
    seasonalPlanning: [
      {
        month: 'Jan',
        condition: 'Cold Mornings / Clear Skies / Crisp Ridge Views',
      },
      {
        month: 'Feb',
        condition: 'Cool & Clear / Good Visibility / Pleasant Walking',
      },
      {
        month: 'Mar',
        condition: 'Warming Up / Spring Blooms / Occasional Haze',
      },
      {
        month: 'Apr',
        condition: 'Warm / Longer Days / Afternoon Haze Builds',
      },
      {
        month: 'May',
        condition: 'Hot & Hazy / Pre-Monsoon Humidity / Early Starts Advised',
      },
      {
        month: 'Jun',
        condition: 'Monsoon Begins / Muddy Paths / Views Often Clouded',
      },
      {
        month: 'Jul',
        condition: 'Full Monsoon / Slippery Trails / Leeches Possible',
      },
      {
        month: 'Aug',
        condition: 'Peak Monsoon / Wet & Green / Limited Mountain Views',
      },
      {
        month: 'Sep',
        condition: 'Late Monsoon / Fresh Air / Clouds Beginning to Clear',
      },
      {
        month: 'Oct',
        condition: 'Crystal Clear Skies / Best Mountain Views / Peak Season',
      },
      {
        month: 'Nov',
        condition: 'Excellent Visibility / Cool & Dry / Ideal Hiking',
      },
      {
        month: 'Dec',
        condition: 'Cold Mornings / Clear Skies / Quiet Trails',
      },
    ],
    gallery: [
      {
        id: 'img_01',
        url: '/images/nagarkot-changunarayan/nagarkot-changunarayan.jpg',
        alt: 'Sunrise over the Himalaya from the Nagarkot ridge',
        type: 'hero',
      },
      {
        id: 'img_02',
        url: '/images/nagarkot-changunarayan/forest-trail.jpg',
        alt: 'Pine forest trail descending from Nagarkot',
        type: 'landscape',
      },
      {
        id: 'img_03',
        url: '/images/nagarkot-changunarayan/terraced-fields.jpg',
        alt: 'Terraced farmland on the approach to Changunarayan',
        type: 'landscape',
      },
      {
        id: 'img_04',
        url: '/images/nagarkot-changunarayan/changunarayan-temple.jpg',
        alt: 'Changunarayan temple courtyard and carved struts',
        type: 'portrait',
      },
    ],
    gearChecklist: {
      essentials: [
        { item: 'Daypack (15-25L)', weight: '0.6kg' },
        { item: 'Trail Shoes / Light Hiking Boots (pair)', weight: '0.8kg' },
        { item: 'Trekking T-Shirt', weight: '0.14kg', quantity: 1 },
        { item: 'Light Fleece / Wind Layer', weight: '0.3kg' },
        { item: 'Sun Cap', weight: '0.06kg' },
        { item: 'Sunglasses (UV 400 Protection)', weight: '0.033kg' },
        { item: 'Sunscreen + Lip Balm', weight: '0.1kg' },
        { item: 'Water Bottle (1L, empty)', weight: '0.125kg' },
        { item: 'Snacks / Energy Bars', weight: '0.15kg', quantity: 2 },
        { item: 'Small First Aid Kit', weight: '0.15kg' },
        { item: 'Cash (small notes)', weight: '0.05kg' },
      ],
      optional: [
        { item: 'Light Rain Shell', weight: '0.25kg' },
        { item: 'Trekking Poles (pair)', weight: '0.475kg' },
        { item: 'Power Bank (10,000 mAh)', weight: '0.2kg' },
      ],
    },
  },
};
