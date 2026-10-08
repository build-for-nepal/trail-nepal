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
    route: [
      {
        order: '01',
        title: 'Nagarkot',
        distanceMark: '0 km',
        role: 'start',
        description:
          'The hike begins around the Nagarkot View Tower area. The trail follows the ridge before gradually descending into the surrounding countryside. The opening stretch is relatively open, with views across the Kathmandu Valley and, on clear days, toward the Himalayan ranges.',
        terrain: 'Ridge path · open hillside · farmland',
      },
      {
        order: '02',
        title: 'Tusal',
        distanceMark: '~3 km',
        timeMark: '~45 min',
        description:
          'Leaving the open hills of Nagarkot, the trail descends through cultivated hillsides and village paths. Terraced farmland becomes more prominent as you approach Tusal, giving this section a distinctly rural feel.',
        terrain: 'Farmland · village paths · hillside trail',
      },
      {
        order: '03',
        title: 'Telkot',
        distanceMark: '~6 km',
        timeMark: '~1.5–2 hrs',
        description:
          'The trail reaches Telkot, a more settled section of the route and a natural place to pause. Beyond the settlement the surroundings gradually become quieter, shifting between farmland, smaller rural communities and woodland.',
        terrain: 'Village paths · farmland · mixed trail',
      },
      {
        order: '04',
        title: 'Forest & Rural Settlements',
        distanceMark: '~9 km',
        timeMark: '~2.5–3 hrs',
        description:
          'Beyond Telkot, the trail becomes quieter and more shaded. Forest paths weave between smaller rural areas as you get closer to Changunarayan. Natural surfaces can become uneven and slippery after rain.',
        terrain: 'Forest trail · natural paths · uneven surfaces',
      },
      {
        order: '05',
        title: 'Changunarayan',
        distanceMark: '~12 km',
        timeMark: '~3–4 hrs',
        role: 'finish',
        description:
          'The final stretch includes a short uphill approach to Changunarayan. The trail ends at the historic temple complex and surrounding Newari settlement, bringing the hike from open hilltop landscapes to a cultural finish.',
        terrain: 'Stone paths · paved sections · temple approach',
      },
    ],
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
    route: [
      {
        order: '01',
        title: 'Dhulikhel',
        distanceMark: '0 km',
        role: 'start',
        description:
          'The hike begins around Dhulikhel, where the historic town and surrounding ridge provide an introduction to the cultural landscape of the route. Leaving the town, the trail heads toward Kali Temple, with the early section combining village paths, hillside terrain and views across the surrounding hills.',
        terrain: 'Village paths · hillside trail · farmland',
      },
      {
        order: '02',
        title: 'Kali Temple',
        distanceMark: '~2 km',
        timeMark: '~45–60 min',
        description:
          "The trail climbs toward Kali Temple, one of the notable landmarks on the route. The approach includes a long flight of steps from Dhulikhel before continuing toward the ridge. From the temple area, the route begins to transition from the town's surroundings into quieter rural landscapes.",
        terrain: 'Steps · hillside path · forest edge',
      },
      {
        order: '03',
        title: 'Kavre Bhanjyang',
        distanceMark: '~4 km',
        timeMark: '~1.5–2 hrs',
        description:
          'From Kali Temple, the trail descends briefly toward Kavre Bhanjyang before continuing along the ridge. After crossing the main road, the route moves back onto quieter trails through farmland, villages and forest.',
        terrain: 'Village paths · farmland · road crossing · forest trail',
      },
      {
        order: '04',
        title: 'Phulbari & Rural Villages',
        distanceMark: '~7–8 km',
        timeMark: '~2.5–3.5 hrs',
        description:
          'Beyond Kavre Bhanjyang, the route continues through farmland and rural settlements, with quieter trail sections becoming more prominent as you move toward Namobuddha. The landscape gradually shifts between cultivated hillsides, village paths and forest.',
        terrain: 'Farmland · village paths · forest trail · natural surfaces',
      },
      {
        order: '05',
        title: 'Namobuddha',
        distanceMark: '~10 km',
        timeMark: '~4–5 hrs',
        role: 'finish',
        description:
          'The final section climbs gradually toward Namobuddha, where the trail reaches the sacred hilltop pilgrimage site. The complex includes the Namobuddha stupa and Thrangu Tashi Yangtse Monastery.',
        terrain: 'Forest trail · stone paths · monastery approach',
      },
    ],
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
    route: [
      {
        order: '01',
        title: 'Godawari',
        distanceMark: '0 km',
        role: 'start',
        description:
          'The hike begins at Godawari on the southeastern edge of the Kathmandu Valley. After leaving the more developed area around the Botanical Garden, the trail gradually enters the forest and begins the long ascent toward Phulchoki.',
        terrain: 'Paved path · forest edge · gradual uphill',
      },
      {
        order: '02',
        title: 'Godawari Forest',
        distanceMark: '~2 km',
        timeMark: '~1 hr',
        description:
          'The trail moves deeper into the forest, alternating between natural paths and stone steps. The surroundings become quieter as the route gains elevation, with dense woodland providing shade for much of the climb.',
        terrain: 'Forest paths · stone steps · shaded trail',
      },
      {
        order: '03',
        title: 'Naudhara',
        distanceMark: '~4 km',
        timeMark: '~2–2.5 hrs',
        description:
          'Naudhara is a notable religious landmark and resting point along the route. From here, the trail continues uphill through increasingly cooler and denser forest. Rhododendron begins to become more prominent as the elevation increases.',
        terrain: 'Forest trail · stone steps · gradual to moderate ascent',
      },
      {
        order: '04',
        title: 'Latta Bhanjyang',
        distanceMark: '~5–6 km',
        timeMark: '~3 hrs',
        description:
          'The trail reaches Latta Bhanjyang, a higher section where the climb becomes more demanding. The forest changes with elevation, and the route continues through broadleaf and rhododendron woodland toward the upper slopes.',
        terrain: 'Steeper forest trail · stone steps · woodland',
      },
      {
        order: '05',
        title: 'Jhanda Sthal',
        distanceMark: '~6–7 km',
        timeMark: '~3.5–4 hrs',
        description:
          'Prayer flags mark this higher section of the route before the final approach to the summit. The forest begins to open in places, and the changing landscape signals that the summit is getting closer.',
        terrain: 'Upper forest · natural paths · uphill trail',
      },
      {
        order: '06',
        title: 'Phulchoki Summit',
        distanceMark: '~7–8 km',
        timeMark: '~3–4 hrs',
        role: 'turnaround',
        description:
          'The final section reaches Phulchoki Summit, the highest point on the Kathmandu Valley rim. The summit area includes Phulchoki Mai Temple and prayer flags, with wider views possible when visibility is clear. The return follows the same general trail back to Godawari.',
        terrain: 'Summit trail · stone paths · exposed sections',
      },
    ],
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
