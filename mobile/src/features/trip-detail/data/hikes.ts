import type { HikeDetail } from '../types';

// Copied from frontend/src/static/hikeDetails.ts, word for word. The summary is not here: it
// is the card's description, in features/explore/trips.ts.
export const HIKE_DETAILS: Readonly<Record<string, HikeDetail>> = {
  'nagarkot-changunarayan': {
    type: 'hike',
    name: 'Nagarkot to Changunarayan Hike',
    region: 'Kathmandu Valley',
    meta: {
      duration: '1 Day',
      difficulty: 'Easy to Moderate',
      maxElevation: '~2,175m',
      bestSeasons: 'October-April',
      startingPoint: 'Nagarkot',
    },
    tripFacts: {
      start: 'Nagarkot (~2,175)',
      finish: 'Changunarayan (~1,541)',
      distance: '~12 km',
      walkingTime: '~3–4 hrs',
      routeType: 'Point-to-point',
      elevationChange: '~625 m descent',
    },
    overview:
      'Start high in Nagarkot and make your way down through the quieter side of the Kathmandu Valley. The trail moves through terraced farmland, rural settlements and forest before reaching Changunarayan. Mostly downhill, the hike combines open hilltop views with quieter village and forest paths, followed by a short climb toward the historic temple complex.\n\nThe day ends at Changunarayan, where a traditional Newari settlement and centuries-old architecture add a cultural finish to the walk. From here, Bhaktapur and Kathmandu are only a short drive away.',
    expectations: [
      {
        title: 'Valley & Himalayan Views',
        description:
          'Open views are one of the highlights at the beginning of the hike, particularly around Nagarkot. On clear days you can see across the Kathmandu Valley and toward the Himalayan ranges.',
      },
      {
        title: 'Rural Kathmandu Valley',
        description:
          'The hike offers a quieter view of the valley, with terraced fields, village paths and traditional settlements along the way.',
      },
      {
        title: 'A Mix of Trail Surfaces',
        description:
          'Expect a combination of natural paths, farmland tracks, stone paths and paved sections. Conditions can change after rain.',
      },
      {
        title: 'Heritage at the Finish',
        description:
          'Changunarayan brings a cultural dimension to the hike, with its historic temple, traditional Newari settlement and surrounding architecture.',
      },
    ],
  },
  'dhulikhel-namobuddha': {
    type: 'hike',
    name: 'Dhulikhel to Namobuddha Hike',
    region: 'Kavrepalanchok',
    meta: {
      duration: '1 Day',
      difficulty: 'Easy to Moderate',
      maxElevation: '~1,750m',
      bestSeasons: 'October-April',
      startingPoint: 'Dhulikhel',
    },
    tripFacts: {
      start: 'Dhulikhel (~1,550)',
      finish: 'Namobuddha (~1,750)',
      distance: '~10 km',
      walkingTime: '~4–5 hrs',
      routeType: 'Point-to-point',
      elevationChange: '~200 m net gain',
    },
    overview:
      'The hike begins in Dhulikhel, a historic hill town known for its Newari character and mountain views. From Dhulikhel, the trail climbs through terraced farmland, village paths and forest before reaching Namobuddha. The route is undulating overall, with an early climb toward Kali Temple, a brief descent toward Kavre Bhanjyang, and a longer gradual ascent toward Namobuddha.\n\nThe hike ends at Namobuddha, a major Buddhist pilgrimage site associated with the story of Prince Mahasattva offering his body to a starving tigress and her cubs. The hilltop is also home to the Thrangu Tashi Yangtse Monastery and a sacred stupa.',
    expectations: [
      {
        title: 'Himalayan Views',
        description:
          'Dhulikhel and the open ridge sections provide views toward the Himalayan ranges when visibility is clear.',
      },
      {
        title: 'Terraced Fields & Rural Villages',
        description:
          'The route passes through cultivated hillsides, terraced fields and rural settlements. The changing landscape gives the hike a strong countryside character and offers glimpses of everyday life around the Kavre hills.',
      },
      {
        title: 'Forested Trail Sections',
        description:
          'Parts of the route pass through pine and other forested sections, providing shade and quieter walking.',
      },
      {
        title: 'Buddhist Heritage at Namobuddha',
        description:
          'The hike finishes at Namobuddha, a significant Buddhist pilgrimage site with its sacred stupa, Thrangu Tashi Yangtse Monastery and surrounding hilltop landscape.',
      },
    ],
  },
  'godawari-phulchoki': {
    type: 'hike',
    name: 'Godawari to Phulchoki Hike',
    region: 'Lalitpur',
    meta: {
      duration: '1 Day',
      difficulty: 'Moderate',
      maxElevation: '~2,765m',
      bestSeasons: 'March-May, October-November',
      startingPoint: 'Godawari',
    },
    tripFacts: {
      start: 'Godawari (~1,500)',
      finish: 'Phulchoki (~2,765)',
      distance: '~14–16 km round trip',
      walkingTime: '~6–8 hrs',
      routeType: 'Out-and-back',
      elevationChange: '~1,250 m gain',
    },
    overview:
      'The hike begins in Godawari, where the trail enters the forested slopes of Phulchoki. The route climbs steadily through community forest, oak and rhododendron woodland, with occasional clearings and viewpoints along the way. It is a sustained uphill climb to the summit, followed by a return along the same general route. As the elevation increases, the forest becomes cooler and changes in character, with rhododendron and other high-elevation vegetation becoming more prominent.\n\nAt the summit, Phulchoki Mai Temple, prayer flags and the surrounding ridge provide a clear sense of arrival. On clear days, the summit offers views across the Kathmandu Valley and toward the Himalayan ranges.',
    expectations: [
      {
        title: 'Dense Forest & Changing Landscapes',
        description:
          'The hike spends much of its time in forest, with vegetation changing as the trail gains elevation. Lower sections are greener and more subtropical, while higher sections include oak and rhododendron woodland.',
      },
      {
        title: 'Rhododendron in Spring',
        description:
          'Phulchoki is known for its rhododendron forests, which become especially noticeable during spring flowering. March and April are particularly attractive for seeing the forest in bloom, although flowering timing varies from year to year.',
      },
      {
        title: 'Birdlife & Forest Nature',
        description:
          'The forest supports a wide variety of birds and other wildlife, making the hike particularly appealing to nature lovers and birdwatchers. Sightings depend on season, weather and luck, so individual species should not be expected.',
      },
      {
        title: 'Summit Views & Phulchoki Mai',
        description:
          'The hike reaches the Phulchoki summit, where the temple, prayer flags and surrounding ridge provide a clear sense of arrival. On clear days, the summit offers views across the Kathmandu Valley and toward Himalayan peaks.',
      },
    ],
  },
};
