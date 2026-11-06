import type { HikeExperience } from './hikeTypes.js';

export const HIKE_DATA: Record<string, HikeExperience> = {
  'nagarkot-changunarayan': {
    slug: 'nagarkot-changunarayan',
    name: 'Nagarkot to Changunarayan Hike',
    type: 'HIKE',
    status: 'PUBLISHED',
    shortDescription:
      'Hike from Nagarkot through traditional villages, terraced farmland and pine forest to Changunarayan, a historic temple complex and UNESCO World Heritage monument zone.',
    durationDays: 1,
    difficulty: 'EASY_MODERATE',
    thumbnail: '/images/nagarkot-changunarayan/nagarkot-changunarayan.jpg',
    maxElevationM: 2175,
    peakSeason: [1, 2, 3, 4, 10, 11, 12],
    region: 'KATHMANDU_VALLEY',
    startPoint: 'Nagarkot',
    interest: ['nature', 'villages', 'sunrise', 'photography'],
    activity: ['hiking', 'sightseeing'],
    isActive: true,
    isPopular: false,
    details: [
      {
        key: 'overview',
        title: 'Overview',
        content:
          'Start high in Nagarkot and make your way down through the quieter side of the Kathmandu Valley. The trail moves through terraced farmland, rural settlements and forest before reaching Changunarayan. Mostly downhill, the hike combines open hilltop views with quieter village and forest paths, followed by a short climb toward the historic temple complex.\n\nThe day ends at Changunarayan, where a traditional Newari settlement and centuries-old architecture add a cultural finish to the walk. From here, Bhaktapur and Kathmandu are only a short drive away.',
      },
      {
        key: 'tripFacts',
        title: 'Trip Facts',
        data: {
          type: 'HIKE',
          start: 'Nagarkot (~2,175)',
          finish: 'Changunarayan (~1,541)',
          distance: '~12 km',
          walkingTime: '~3–4 hrs',
          routeType: 'Point-to-point',
          elevationChange: '~625 m descent',
          direction: 'Mostly downhill',
          terrain:
            'Village paths · terraced farmland · forest · stone and paved sections',
        },
      },
      {
        key: 'expectations',
        title: 'What to Expect',
        data: [
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
      {
        key: 'seasonalPlanning',
        title: 'When Should I Go?',
        data: [
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
            condition:
              'Hot & Hazy / Pre-Monsoon Humidity / Early Starts Advised',
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
            condition:
              'Crystal Clear Skies / Best Mountain Views / Peak Season',
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
              item: 'Trail Shoes / Light Hiking Boots (pair)',
              weight: '0.8kg',
            },
            {
              item: 'Trekking T-Shirt',
              weight: '0.14kg',
              quantity: 1,
            },
            {
              item: 'Light Fleece / Wind Layer',
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
              item: 'Water Bottle (1L, empty)',
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
              item: 'Trekking Poles (pair)',
              weight: '0.475kg',
            },
            {
              item: 'Power Bank (10,000 mAh)',
              weight: '0.2kg',
            },
          ],
        },
      },
    ],
    images: [
      {
        url: '/images/nagarkot-changunarayan/nagarkot-changunarayan.jpg',
        alt: 'Sunrise over the Himalaya from the Nagarkot ridge',
        type: 'HERO',
        metadata: {
          frontendId: 'img_01',
          order: 1,
        },
      },
      {
        url: '/images/nagarkot-changunarayan/nagarkot-view-tower.jpg',
        alt: 'Nagarkot view tower with the Himalayan skyline beyond',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_02',
          order: null,
        },
      },
      {
        url: '/images/nagarkot-changunarayan/pine-forest-trail.jpg',
        alt: 'Pine forest trail descending from Nagarkot',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_03',
          order: null,
        },
      },
      {
        url: '/images/nagarkot-changunarayan/terraced-fields.jpg',
        alt: 'Terraced farmland on the descent toward Changunarayan',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_04',
          order: null,
        },
      },
      {
        url: '/images/nagarkot-changunarayan/changunarayan-temple.jpg',
        alt: 'Changunarayan temple complex, a UNESCO World Heritage Site',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_05',
          order: null,
        },
      },
      {
        url: '/images/nagarkot-changunarayan/forest-sunbeams.jpg',
        alt: 'Sunlight breaking through the pine forest along the trail',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_06',
          order: null,
        },
      },
    ],
    timeline: {
      title: 'Hike Route',
      description: 'Section-by-section breakdown of the route',
      items: [
        {
          order: 1,
          title: 'Nagarkot',
          data: {
            distance: '0 km',
            terrain: 'Ridge path · open hillside · farmland',
            role: 'start',
            description:
              'The hike begins around the Nagarkot View Tower area. The trail follows the ridge before gradually descending into the surrounding countryside. The opening stretch is relatively open, with views across the Kathmandu Valley and, on clear days, toward the Himalayan ranges.',
            coordinates: [85.51927, 27.71579],
          },
        },
        {
          order: 2,
          title: 'Tusal',
          data: {
            distance: '~3 km',
            duration: '~45 min',
            terrain: 'Farmland · village paths · hillside trail',
            description:
              'Leaving the open hills of Nagarkot, the trail descends through cultivated hillsides and village paths. Terraced farmland becomes more prominent as you approach Tusal, giving this section a distinctly rural feel.',
            coordinates: [85.49841, 27.71105],
          },
        },
        {
          order: 3,
          title: 'Telkot',
          data: {
            distance: '~6 km',
            duration: '~1.5–2 hrs',
            terrain: 'Village paths · farmland · mixed trail',
            description:
              'The trail reaches Telkot, a more settled section of the route and a natural place to pause. Beyond the settlement the surroundings gradually become quieter, shifting between farmland, smaller rural communities and woodland.',
            coordinates: [85.47421, 27.71195],
          },
        },
        {
          order: 4,
          title: 'Forest & Rural Settlements',
          data: {
            distance: '~9 km',
            duration: '~2.5–3 hrs',
            terrain: 'Forest trail · natural paths · uneven surfaces',
            description:
              'Beyond Telkot, the trail becomes quieter and more shaded. Forest paths weave between smaller rural areas as you get closer to Changunarayan. Natural surfaces can become uneven and slippery after rain.',
            coordinates: [85.4497, 27.71168],
          },
        },
        {
          order: 5,
          title: 'Changunarayan',
          data: {
            distance: '~12 km',
            duration: '~3–4 hrs',
            terrain: 'Stone paths · paved sections · temple approach',
            role: 'finish',
            description:
              'The final stretch includes a short uphill approach to Changunarayan. The trail ends at the historic temple complex and surrounding Newari settlement, bringing the hike from open hilltop landscapes to a cultural finish.',
            coordinates: [85.42798, 27.71625],
          },
        },
      ],
    },
  },
  'dhulikhel-namobuddha': {
    slug: 'dhulikhel-namobuddha',
    name: 'Dhulikhel to Namobuddha Hike',
    type: 'HIKE',
    status: 'PUBLISHED',
    shortDescription:
      'Hike from the historic hill town of Dhulikhel through terraced farmland, villages and forest to Namobuddha, a major Buddhist pilgrimage site.',
    durationDays: 1,
    difficulty: 'EASY_MODERATE',
    thumbnail: '/images/dhulikhel-namobuddha/dhulikhel-namobuddha.jpg',
    maxElevationM: 1750,
    peakSeason: [1, 2, 3, 4, 10, 11, 12],
    region: 'KATHMANDU_VALLEY',
    startPoint: 'Dhulikhel',
    interest: ['nature', 'villages', 'culture', 'photography'],
    activity: ['hiking', 'sightseeing'],
    isActive: true,
    isPopular: false,
    details: [
      {
        key: 'overview',
        title: 'Overview',
        content:
          'The hike begins in Dhulikhel, a historic hill town known for its Newari character and mountain views. From Dhulikhel, the trail climbs through terraced farmland, village paths and forest before reaching Namobuddha. The route is undulating overall, with an early climb toward Kali Temple, a brief descent toward Kavre Bhanjyang, and a longer gradual ascent toward Namobuddha.\n\nThe hike ends at Namobuddha, a major Buddhist pilgrimage site associated with the story of Prince Mahasattva offering his body to a starving tigress and her cubs. The hilltop is also home to the Thrangu Tashi Yangtse Monastery and a sacred stupa.',
      },
      {
        key: 'tripFacts',
        title: 'Trip Facts',
        data: {
          type: 'HIKE',
          start: 'Dhulikhel (~1,550)',
          finish: 'Namobuddha (~1,750)',
          distance: '~10 km',
          walkingTime: '~4–5 hrs',
          routeType: 'Point-to-point',
          elevationChange: '~200 m net gain',
          direction: 'Undulating · gradual ascent',
          terrain:
            'Village paths · terraced farmland · forest · stone and paved sections',
        },
      },
      {
        key: 'expectations',
        title: 'What to Expect',
        data: [
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
      {
        key: 'seasonalPlanning',
        title: 'When Should I Go?',
        data: [
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
            condition: 'Warming Up / Spring Greenery / Occasional Haze',
          },
          {
            month: 'Apr',
            condition: 'Warm / Longer Days / Afternoon Haze Builds',
          },
          {
            month: 'May',
            condition:
              'Hot & Hazy / Pre-Monsoon Humidity / Early Starts Advised',
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
            condition:
              'Crystal Clear Skies / Best Mountain Views / Peak Season',
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
              item: 'Trail Shoes / Light Hiking Boots (pair)',
              weight: '0.8kg',
            },
            {
              item: 'Trekking T-Shirt',
              weight: '0.14kg',
              quantity: 1,
            },
            {
              item: 'Light Fleece / Wind Layer',
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
              item: 'Water Bottle (1L, empty)',
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
              item: 'Trekking Poles (pair)',
              weight: '0.475kg',
            },
            {
              item: 'Power Bank (10,000 mAh)',
              weight: '0.2kg',
            },
          ],
        },
      },
    ],
    images: [
      {
        url: '/images/dhulikhel-namobuddha/dhulikhel-namobuddha.jpg',
        alt: 'Golden dharma wheel and deer on the Namobuddha monastery rooftop',
        type: 'HERO',
        metadata: {
          frontendId: 'img_01',
          order: 1,
        },
      },
      {
        url: '/images/dhulikhel-namobuddha/himalaya-view.jpg',
        alt: 'Himalayan skyline seen from the Dhulikhel ridge',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_02',
          order: null,
        },
      },
      {
        url: '/images/dhulikhel-namobuddha/dhulikhel-hills.jpg',
        alt: 'Terraced hills and villages around Dhulikhel',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_03',
          order: null,
        },
      },
      {
        url: '/images/dhulikhel-namobuddha/thrangu-monastery.jpg',
        alt: 'Thrangu Tashi Yangtse Monastery at Namobuddha',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_04',
          order: null,
        },
      },
      {
        url: '/images/dhulikhel-namobuddha/namobuddha-stupa.jpg',
        alt: 'Butter lamps and prayer flags at the Namobuddha stupa',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_05',
          order: null,
        },
      },
      {
        url: '/images/dhulikhel-namobuddha/forest-light.jpg',
        alt: 'Morning light filtering through the forest along the trail',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_06',
          order: null,
        },
      },
    ],
    timeline: {
      title: 'Hike Route',
      description: 'Section-by-section breakdown of the route',
      items: [
        {
          order: 1,
          title: 'Dhulikhel',
          data: {
            distance: '0 km',
            terrain: 'Village paths · hillside trail · farmland',
            role: 'start',
            description:
              'The hike begins around Dhulikhel, where the historic town and surrounding ridge provide an introduction to the cultural landscape of the route. Leaving the town, the trail heads toward Kali Temple, with the early section combining village paths, hillside terrain and views across the surrounding hills.',
            coordinates: [85.55279, 27.61877],
          },
        },
        {
          order: 2,
          title: 'Kali Temple',
          data: {
            distance: '~2 km',
            duration: '~45–60 min',
            terrain: 'Steps · hillside path · forest edge',
            description:
              'The trail climbs toward Kali Temple, one of the notable landmarks on the route. The approach includes a long flight of steps from Dhulikhel before continuing toward the ridge. From the temple area, the route begins to transition from the town’s surroundings into quieter rural landscapes.',
            coordinates: [85.56722, 27.61071],
          },
        },
        {
          order: 3,
          title: 'Kavre Bhanjyang',
          data: {
            distance: '~4 km',
            duration: '~1.5–2 hrs',
            terrain: 'Village paths · farmland · road crossing · forest trail',
            description:
              'From Kali Temple, the trail descends briefly toward Kavre Bhanjyang before continuing along the ridge. After crossing the main road, the route moves back onto quieter trails through farmland, villages and forest.',
            coordinates: [85.57674, 27.59909],
          },
        },
        {
          order: 4,
          title: 'Phulbari & Rural Villages',
          data: {
            distance: '~7–8 km',
            duration: '~2.5–3.5 hrs',
            terrain:
              'Farmland · village paths · forest trail · natural surfaces',
            description:
              'Beyond Kavre Bhanjyang, the route continues through farmland and rural settlements, with quieter trail sections becoming more prominent as you move toward Namobuddha. The landscape gradually shifts between cultivated hillsides, village paths and forest.',
            coordinates: [85.58944, 27.58392],
          },
        },
        {
          order: 5,
          title: 'Namobuddha',
          data: {
            distance: '~10 km',
            duration: '~4–5 hrs',
            terrain: 'Forest trail · stone paths · monastery approach',
            role: 'finish',
            description:
              'The final section climbs gradually toward Namobuddha, where the trail reaches the sacred hilltop pilgrimage site. The complex includes the Namobuddha stupa and Thrangu Tashi Yangtse Monastery.',
            coordinates: [85.58585, 27.57292],
          },
        },
      ],
    },
  },
  'godawari-phulchoki': {
    slug: 'godawari-phulchoki',
    name: 'Godawari to Phulchoki Hike',
    type: 'HIKE',
    status: 'PUBLISHED',
    shortDescription:
      'A full-day forest hike from Godawari to Phulchoki, the highest hill on the Kathmandu Valley rim, passing through dense forest, rhododendron and oak woodland before reaching the summit.',
    durationDays: 1,
    difficulty: 'MODERATE',
    thumbnail: '/images/godawari-phulchoki/godawari-phulchoki.jpg',
    maxElevationM: 2765,
    peakSeason: [3, 4, 5, 10, 11],
    region: 'KATHMANDU_VALLEY',
    startPoint: 'Godawari',
    interest: ['nature', 'photography', 'local-life'],
    activity: ['hiking'],
    isActive: true,
    isPopular: false,
    details: [
      {
        key: 'overview',
        title: 'Overview',
        content:
          'The hike begins in Godawari, where the trail enters the forested slopes of Phulchoki. The route climbs steadily through community forest, oak and rhododendron woodland, with occasional clearings and viewpoints along the way. It is a sustained uphill climb to the summit, followed by a return along the same general route. As the elevation increases, the forest becomes cooler and changes in character, with rhododendron and other high-elevation vegetation becoming more prominent.\n\nAt the summit, Phulchoki Mai Temple, prayer flags and the surrounding ridge provide a clear sense of arrival. On clear days, the summit offers views across the Kathmandu Valley and toward the Himalayan ranges.',
      },
      {
        key: 'tripFacts',
        title: 'Trip Facts',
        data: {
          type: 'HIKE',
          start: 'Godawari (~1,500)',
          finish: 'Phulchoki (~2,765)',
          distance: '~14–16 km round trip',
          walkingTime: '~6–8 hrs',
          routeType: 'Out-and-back',
          elevationChange: '~1,250 m gain',
          direction: 'Steady uphill to summit · downhill return',
          terrain:
            'Forest paths · stone steps · dirt tracks · paved/road sections',
        },
      },
      {
        key: 'expectations',
        title: 'What to Expect',
        data: [
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
      {
        key: 'seasonalPlanning',
        title: 'When Should I Go?',
        data: [
          {
            month: 'Jan',
            condition: 'Cold & Crisp / Clear Skies / Quiet Forest',
          },
          {
            month: 'Feb',
            condition:
              'Cool & Clear / Good Visibility / Early Rhododendron Buds',
          },
          {
            month: 'Mar',
            condition:
              'Rhododendron Season Begins / Greener Forest / Prime Hiking',
          },
          {
            month: 'Apr',
            condition:
              'Peak Rhododendron Bloom / Lush Forest / Best for Nature',
          },
          {
            month: 'May',
            condition: 'Warm & Green / Late Blooms / Building Humidity',
          },
          {
            month: 'Jun',
            condition:
              'Monsoon Begins / Muddy Forest Trail / Reduced Visibility',
          },
          {
            month: 'Jul',
            condition: 'Full Monsoon / Slippery Steps / Leeches Likely',
          },
          {
            month: 'Aug',
            condition: 'Peak Monsoon / Wet & Lush / Limited Views',
          },
          {
            month: 'Sep',
            condition: 'Late Monsoon / Fresh Growth / Clouds Clearing',
          },
          {
            month: 'Oct',
            condition: 'Clear Autumn Skies / Best Valley Views / Peak Season',
          },
          {
            month: 'Nov',
            condition: 'Excellent Visibility / Cool & Dry / Ideal Summit Views',
          },
          {
            month: 'Dec',
            condition: 'Cold Mornings / Clear Skies / Crisp Summit Air',
          },
        ],
      },
      {
        key: 'gearChecklist',
        title: 'Gear Checklist',
        data: {
          essentials: [
            {
              item: 'Daypack (20-30L)',
              weight: '0.7kg',
            },
            {
              item: 'Hiking Boots (pair)',
              weight: '0.9kg',
            },
            {
              item: 'Trekking T-Shirt',
              weight: '0.14kg',
              quantity: 1,
            },
            {
              item: 'Fleece / Warm Mid-Layer',
              weight: '0.4kg',
            },
            {
              item: 'Light Rain Shell',
              weight: '0.25kg',
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
              item: 'Water (2L)',
              weight: '2kg',
            },
            {
              item: 'Packed Lunch + Snacks',
              weight: '0.4kg',
            },
            {
              item: 'Small First Aid Kit',
              weight: '0.15kg',
            },
            {
              item: 'Headlamp',
              weight: '0.08kg',
            },
            {
              item: 'Cash (small notes)',
              weight: '0.05kg',
            },
          ],
          optional: [
            {
              item: 'Trekking Poles (pair)',
              weight: '0.475kg',
            },
            {
              item: 'Binoculars (birdwatching)',
              weight: '0.3kg',
            },
            {
              item: 'Power Bank (10,000 mAh)',
              weight: '0.2kg',
            },
            {
              item: 'Insect Repellent',
              weight: '0.1kg',
            },
          ],
        },
      },
    ],
    images: [
      {
        url: '/images/godawari-phulchoki/godawari-phulchoki.jpg',
        alt: 'Forested ridges falling away to a hillside town, fading into morning haze',
        type: 'HERO',
        metadata: {
          frontendId: 'img_01',
          order: 1,
        },
      },
      {
        url: '/images/godawari-phulchoki/rhododendron-bloom.jpg',
        alt: 'Rhododendron in bloom on the slopes of Phulchoki',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_02',
          order: null,
        },
      },
      {
        url: '/images/godawari-phulchoki/phulchoki-mai-temple.jpg',
        alt: 'Phulchoki Mai temple near the summit',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_03',
          order: null,
        },
      },
      {
        url: '/images/godawari-phulchoki/valley-view.jpg',
        alt: 'Hazy valley views opening between the trees',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_04',
          order: null,
        },
      },
      {
        url: '/images/godawari-phulchoki/godawari-garden.jpg',
        alt: 'Forested slopes above Godawari at the trailhead',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_05',
          order: null,
        },
      },
      {
        url: '/images/godawari-phulchoki/naudhara.jpg',
        alt: 'Naudhara resting point along the forest climb',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_06',
          order: null,
        },
      },
      {
        url: '/images/godawari-phulchoki/forest-trail-climb.jpg',
        alt: 'A walker heading up a shaded forest trail towards a break of light in the canopy',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_07',
          order: null,
        },
      },
    ],
    timeline: {
      title: 'Hike Route',
      description: 'Section-by-section breakdown of the route',
      items: [
        {
          order: 1,
          title: 'Godawari',
          data: {
            distance: '0 km',
            terrain: 'Paved path · forest edge · gradual uphill',
            role: 'start',
            description:
              'The hike begins at Godawari on the southeastern edge of the Kathmandu Valley. After leaving the more developed area around the Botanical Garden, the trail gradually enters the forest and begins the long ascent toward Phulchoki.',
            coordinates: [85.38212, 27.59391],
          },
        },
        {
          order: 2,
          title: 'Godawari Forest',
          data: {
            distance: '~2 km',
            duration: '~1 hr',
            terrain: 'Forest paths · stone steps · shaded trail',
            description:
              'The trail moves deeper into the forest, alternating between natural paths and stone steps. The surroundings become quieter as the route gains elevation, with dense woodland providing shade for much of the climb.',
            coordinates: [85.38109, 27.58683],
          },
        },
        {
          order: 3,
          title: 'Naudhara',
          data: {
            distance: '~4 km',
            duration: '~2–2.5 hrs',
            terrain: 'Forest trail · stone steps · gradual to moderate ascent',
            description:
              'Naudhara is a notable religious landmark and resting point along the route. From here, the trail continues uphill through increasingly cooler and denser forest. Rhododendron begins to become more prominent as the elevation increases.',
            coordinates: [85.38994, 27.58017],
          },
        },
        {
          order: 4,
          title: 'Latta Bhanjyang',
          data: {
            distance: '~5–6 km',
            duration: '~3 hrs',
            terrain: 'Steeper forest trail · stone steps · woodland',
            description:
              'The trail reaches Latta Bhanjyang, a higher section where the climb becomes more demanding. The forest changes with elevation, and the route continues through broadleaf and rhododendron woodland toward the upper slopes.',
            coordinates: [85.39802, 27.57784],
          },
        },
        {
          order: 5,
          title: 'Jhanda Sthal',
          data: {
            distance: '~6–7 km',
            duration: '~3.5–4 hrs',
            terrain: 'Upper forest · natural paths · uphill trail',
            description:
              'Prayer flags mark this higher section of the route before the final approach to the summit. The forest begins to open in places, and the changing landscape signals that the summit is getting closer.',
            coordinates: [85.39889, 27.57348],
          },
        },
        {
          order: 6,
          title: 'Phulchoki Summit',
          data: {
            distance: '~7–8 km',
            duration: '~3–4 hrs',
            terrain: 'Summit trail · stone paths · exposed sections',
            role: 'turnaround',
            description:
              'The final section reaches Phulchoki Summit, the highest point on the Kathmandu Valley rim. The summit area includes Phulchoki Mai Temple and prayer flags, with wider views possible when visibility is clear. The return follows the same general trail back to Godawari.',
            isDestination: true,
            coordinates: [85.40657, 27.57128],
          },
        },
      ],
    },
  },
};
