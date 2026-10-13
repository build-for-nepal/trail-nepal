import type { TrekExperience } from './trekTypes.js';

export const TREK_DATA: Record<string, TrekExperience> = {
  'ebc-trek': {
    slug: 'ebc-trek',
    name: 'EBC Trek',
    type: 'TREK',
    status: 'PUBLISHED',
    shortDescription:
      'Trek through the Khumbu region, passing Sherpa villages, monasteries, glaciers, and high Himalayan landscapes on the way to Everest Base Camp.',
    durationDays: 12,
    difficulty: 'CHALLENGING',
    // difficultyScore: 8,
    // thumbnail: '/images/ebc.jpg',
    maxElevationM: 5545,
    peakSeason: [3, 4, 5, 9, 10, 11],
    region: 'Khumbu',
    startPoint: 'Kathmandu',
    interest: ['nature', 'culture', 'mountains'],
    activity: ['trekking'],
    isActive: true,
    isPopular: true,
    details: [
      {
        key: 'overview',
        title: 'Overview',
        description: 'A quick look at what awaits on the trail.',
        content:
          'The Everest Base Camp trek follows the classic route through the Khumbu region of Nepal, beginning with a flight to Lukla and continuing through Sherpa settlements, Buddhist monasteries, forests, glacial valleys, and high-altitude terrain. The trail passes through Namche Bazaar, Tengboche, Dingboche, Lobuche, and Gorakshep before reaching Everest Base Camp at 5,364 m.\n\nAs the trail climbs deeper into the Himalayas, the landscape gradually changes from green valleys and rhododendron forests to open alpine terrain, rocky moraines, and snow-covered peaks. Two acclimatization days in Namche Bazaar and Dingboche allow for gradual adjustment to the increasing elevation. The journey reaches its highest point at Kala Patthar, 5,545 m, before descending through Pheriche and Namche Bazaar and returning to Lukla for the flight back to Kathmandu.',
      },
      {
        key: 'tripFacts',
        title: 'Trip Facts',
        data: {
          type: 'TREK',
          flights: 'Kathmandu ⇄ Lukla',
          accommodation: 'Tea houses',
          routeType: 'Out and Back',
          permits:
            'Sagarmatha National Park Entry Permit, Khumbu Pasang Lhamu Rural Municipality Trek-Card',
        },
      },
      {
        key: 'expectations',
        title: 'What to Expect',
        description: 'Understand rhythms before you go',
        data: [
          {
            title: 'Iconic Mountain Panoramas',
            description:
              "Witness the sheer scale of the world's highest peaks, including the jagged summit of Everest, the wall of Nuptse, and the aesthetic beauty of Ama Dablam.",
          },
          {
            title: 'Vibrant Sherpa Culture',
            description:
              'Walk through ancient villages, visit hilltop monasteries, and experience the unique spiritual heritage and hospitality of the Himalayan people.',
          },
          {
            title: 'The Khumbu Icefall',
            description:
              "Stand at the edge of the world's most famous glacier and watch the sun rise over the cascading towers of ice that mark the start of the climb to the summit.",
          },
          {
            title: 'High Altitude Resilience',
            description:
              'Test your physical and mental limits as you navigate rugged terrain and thin air, supported by professional guides and local expertise.',
          },
        ],
      },
      {
        key: 'seasonalPlanning',
        title: 'When Should I go?',
        description: 'Climbing windows for Trek regions.',
        data: [
          {
            month: 'Jan',
            condition:
              'Very Cold / Heavy Snow Above 4,000m / Experienced Trekkers Only',
          },
          {
            month: 'Feb',
            condition: 'Freezing Temperatures / Quiet Trails / Icy at Night',
          },
          {
            month: 'Mar',
            condition:
              'Spring Begins / Rhododendrons in Bloom / Warming Temperatures',
          },
          {
            month: 'Apr',
            condition:
              'Stable Weather / Long Daylight / Peak Spring Season / Excellent Visibility',
          },
          {
            month: 'May',
            condition: 'Warm & Clear / Pre-Monsoon Views / Expedition Season',
          },
          {
            month: 'Jun',
            condition:
              'Monsoon Builds / Views Blocked / Trails Slippery / Not Recommended',
          },
          {
            month: 'Jul',
            condition: 'Full Monsoon / Heavy Rain / Landslide Risk / Avoid',
          },
          {
            month: 'Aug',
            condition: 'Peak Monsoon / Wet & Muddy Trails / High Risk / Avoid',
          },
          {
            month: 'Sep',
            condition:
              'Late-Monsoon / Fresh Air / Some Cloud Lingering / Quieter',
          },
          {
            month: 'Oct',
            condition:
              'Crystal Clear Skies / Best Mountain Views / Peak Season / Most Popular Month',
          },
          {
            month: 'Nov',
            condition:
              'Excellent Visibility / Cold at Night / Fewer Trekkers than October',
          },
          {
            month: 'Dec',
            condition:
              'Very Cold Above 4,000m / Clear Skies / Almost Empty Trail / Winter Chill',
          },
        ],
      },
      {
        key: 'gearChecklist',
        title: 'Gear Checklist',
        description: 'Make sure you have everything you need',
        data: {
          essentials: [
            {
              item: 'Backpack (45-60L)',
              weight: '1.5kg',
            },
            {
              item: 'Rain Cover for Backpack',
              weight: '0.08kg',
            },
            {
              item: 'Down Jacket',
              weight: '0.425kg',
            },
            {
              item: 'Raincoat / Waterproof Shell Jacket',
              weight: '0.34kg',
            },
            {
              item: 'Fleece / Insulated Mid Layer',
              weight: '0.34kg',
            },
            {
              item: 'Thermal Base Layer Top',
              weight: '0.2kg',
              quantity: 1,
            },
            {
              item: 'Trekking T-Shirt',
              weight: '0.14kg',
              quantity: 3,
            },
            {
              item: 'Trekking Pants',
              weight: '0.315kg',
              quantity: 2,
            },
            {
              item: 'Trekking Boots (pair)',
              weight: '1.1kg',
            },
            {
              item: 'Trekking Socks (per pair)',
              weight: '0.06kg',
              quantity: 3,
            },
            {
              item: 'Warm Hat / Beanie',
              weight: '0.075kg',
            },
            {
              item: 'Sun Cap',
              weight: '0.06kg',
            },
            {
              item: 'Light Gloves',
              weight: '0.065kg',
            },
            {
              item: 'Trekking Poles (pair)',
              weight: '0.475kg',
            },
            {
              item: 'Headlamp',
              weight: '0.1kg',
            },
            {
              item: 'Water Bottle (1L, empty)',
              weight: '0.125kg',
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
              item: 'Personal First Aid Kit',
              weight: '0.275kg',
            },
            {
              item: 'Passport, Permits, Cash, Insurance Copy',
              weight: '0.15kg',
            },
          ],
          optional: [
            {
              item: 'Sleeping Bag (-10°C to -15°C comfort)',
              weight: '1.4kg',
            },
            {
              item: 'Waterproof Rain Pants',
              weight: '0.215kg',
            },
            {
              item: 'Thermal Base Layer Bottom',
              weight: '0.2kg',
              quantity: 1,
            },
            {
              item: 'Warm Trekking Trousers / Softshell Pants',
              weight: '0.37kg',
              quantity: 2,
            },
            {
              item: 'Camp Shoes / Sandals',
              weight: '0.325kg',
            },
            {
              item: 'Warm Outer Gloves',
              weight: '0.11kg',
            },
            {
              item: 'Buff / Neck Gaiter',
              weight: '0.043kg',
            },
            {
              item: 'Water Purification Tablets / Filter',
              weight: '0.075kg',
            },
            {
              item: 'Toiletries & Quick-Dry Towel',
              weight: '0.325kg',
            },
            {
              item: 'Power Bank (10,000-20,000 mAh)',
              weight: '0.265kg',
            },
            {
              item: 'Charging Cable / Adapter',
              weight: '0.09kg',
            },
            {
              item: 'Snacks / Energy Bars',
              weight: '0.45kg',
              quantity: 3,
            },
          ],
        },
      },
    ],
    images: [
      {
        url: '/images/ebc.jpg',
        alt: 'Everest Base Camp and Khumbu Icefall',
        type: 'HERO',
        metadata: {
          frontendId: 'img_01',
          order: 1,
        },
      },
      {
        url: '/images/ebc/Lukla.png',
        alt: 'Lukla Airport, gateway to the Khumbu',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_02',
          order: null,
        },
      },
      {
        url: '/images/ebc/EBC2.png',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_03',
          order: null,
        },
      },
      {
        url: '/images/ebc/Peak.png',
        alt: 'Ama Dablam rising above the Khumbu valley',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_04',
          order: null,
        },
      },
      {
        url: '/images/ebc/Namche.png',
        alt: 'Namche Bazaar, sherpa capital of the Khumbu',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_05',
          order: null,
        },
      },
      {
        url: '/images/ebc/ABC1.png',
        alt: 'Mountains of the Everest region',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_06',
          order: null,
        },
      },
    ],
    timeline: {
      title: 'Trek Timeline',
      description: 'Day-by-day breakdown of your journey',
      items: [
        {
          order: 1,
          dayNumber: 1,
          title: 'Kathmandu → Lukla → Phakding',
          data: {
            altitude: '2,610m',
            duration: '3-4 hours',
            distance: '8km',
            description:
              'The journey begins with a mountain flight to Tenzing-Hillary Airport in Lukla. Depending on the season and current flight operations, flights may depart from Kathmandu or Ramechhap. The flight from Kathmandu takes around 30-35 minutes, while the Ramechhap-Lukla sector is shorter. On clear days, the flight offers changing views of the Himalayan foothills, valleys, and mountain landscape. Flight schedules and operations can vary depending on weather and airport conditions.\n\nAfter landing in Lukla, the trail descends gradually through surrounding Sherpa settlements, passing Chheplung and Ghat before joining the Dudh Koshi valley. Pine and rhododendron forests, stone-built villages, mani walls, and the first suspension bridges introduce the landscapes of the Khumbu. The trail continues alongside the river to Phakding at approximately 2,610 m, where the first night is spent in a local tea house.',
            price: 'NPR 2,500 (Accommodation: 1,000, Meals: 1,500)',
            coordinates: [86.712, 27.737],
          },
        },
        {
          order: 2,
          dayNumber: 2,
          title: 'Phakding → Namche Bazaar',
          data: {
            altitude: '3,440m',
            duration: '6-7 hours',
            distance: '11km',
            description:
              'From Phakding, the route follows the Dudh Koshi River north, crossing suspension bridges and passing small Sherpa settlements toward Monjo. Just beyond Monjo, the trail enters Sagarmatha National Park at Jorsale, where your park entry permit is checked at the checkpoint.\n\nBeyond Jorsale, the trail follows the river through forest before the main climb toward Namche Bazaar begins. The Dudh Koshi is crossed again on a suspension bridge, followed by a series of uphill sections through pine and rhododendron forest. Along the climb, a clear break in the trees can offer the first distant glimpse of Mount Everest. As you gain elevation, the valley gradually opens toward the mountains before reaching Namche Bazaar at approximately 3,440 m, a major Sherpa trading centre and an important acclimatization stop on the route.',
            price: 'NPR 2,800 (Accommodation: 800, Meals: 2,000)',
            coordinates: [86.7105936, 27.805068],
          },
        },
        {
          order: 3,
          dayNumber: 3,
          title: 'Acclimatization Day · Namche Bazaar',
          data: {
            altitude: '3,440m',
            duration: '3-4 hours',
            distance: '4km',
            note: 'Acclimatization Day',
            description:
              "Namche Bazaar is the first major acclimatization stop of the trek, with a second night at approximately 3,440 m before the route continues toward higher elevations. Rather than gaining more overnight elevation, the day allows your body to adjust to the thinner air while you explore the hills and viewpoints around Namche before returning to the same elevation for the night.\n\nA popular acclimatization hike follows the trail toward Everest View Hotel, where the higher viewpoint opens to panoramic views of Everest, Lhotse, Ama Dablam, and the surrounding Himalayan peaks on clear days. The route then returns toward Namche, with options to visit the Sherpa Culture Museum and Everest Photo Gallery. Later, you can explore the town's bakeries, cafés, and gear shops, or simply take in the mountain atmosphere before the trek continues deeper into the Khumbu.",
            price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
            coordinates: [86.7105936, 27.805068],
          },
        },
        {
          order: 4,
          dayNumber: 4,
          title: 'Namche Bazaar → Tengboche',
          data: {
            altitude: '3,860m',
            duration: '5-6 hours',
            distance: '10km',
            description:
              'The trail leaves Namche along the mountainside, with open views across the Khumbu and Himalayan peaks rising beyond the valley. The route follows a relatively gentle section toward Kyangjuma before descending through forest toward Phunki Tenga, where the Dudh Koshi is crossed and the main climb toward Tengboche begins.\n\nFrom Phunki Tenga, you follow a steady uphill trail through rhododendron and conifer forests. As the trees thin near the ridge, Ama Dablam and the surrounding Himalayan peaks come into view before you reach Tengboche at approximately 3,860 m. The village is home to Tengboche Monastery, a leading Buddhist centre in the Khumbu region, set against a backdrop of Himalayan peaks.',
            price: 'NPR 3,350 (Accommodation: 1,000, Meals: 2,350)',
            coordinates: [86.7641614, 27.8352264],
          },
        },
        {
          order: 5,
          dayNumber: 5,
          title: 'Tengboche → Dingboche',
          data: {
            altitude: '4,410m',
            duration: '5-6 hours',
            distance: '11km',
            description:
              'The trail leaves Tengboche and descends through birch, conifer, and rhododendron forests, passing stone-built villages and mani walls carved with Buddhist prayers. The route continues toward Pangboche, with views of Ama Dablam and the surrounding mountains along the valley. As you move higher, the forest gradually thins and the landscape becomes more open, dry, and alpine.\n\nAfter crossing the Imja Khola, the trail continues through Pangboche and Shomare, following the Imja Valley toward Dingboche. The vegetation becomes increasingly sparse as the elevation rises, while the surrounding peaks become more prominent across the valley. The day ends in Dingboche at approximately 4,410 m, an important stop before the route moves into the higher reaches of the Khumbu.',
            price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
            coordinates: [86.8259632, 27.8873288],
          },
        },
        {
          order: 6,
          dayNumber: 6,
          title: 'Acclimatization Day · Dingboche',
          data: {
            altitude: '4,410m',
            duration: '4-5 hours',
            distance: '5km',
            note: 'Acclimatization Day',
            description:
              'The second acclimatization day in Dingboche prepares you for the higher elevations ahead. The route follows the principle of "hike high, sleep low", with a climb into the surrounding hills before returning to Dingboche at approximately 4,410 m for the night.\n\nA popular option is the climb toward Nangkartshang Peak, which rises above Dingboche. From higher ground, you can take in wide views across the Imja Valley and surrounding Himalayan peaks before returning to the village. The rest of the day provides time to rest, hydrate, and prepare for the increasingly high-altitude terrain ahead.',
            price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
            coordinates: [86.8259632, 27.8873288],
          },
        },
        {
          order: 7,
          dayNumber: 7,
          title: 'Dingboche → Lobuche',
          data: {
            altitude: '4,940m',
            duration: '5-6 hours',
            distance: '8km',
            description:
              'The trail leaves Dingboche and climbs steadily through a wide, glacier-carved valley toward Thukla. As you gain elevation, the landscape becomes increasingly barren, with low vegetation giving way to rocky slopes and the surrounding peaks appearing closer across the valley.\n\nBeyond Thukla, you face a steeper climb toward the Thukla Pass, ascending the terminal moraine of the Khumbu Glacier. Along the ridge, a collection of memorials commemorates climbers and mountaineers who lost their lives in the Everest region. From here, the trail becomes gentler as you continue across the high valley toward Lobuche at approximately 4,940 m, one of the last settlements before Gorakshep.',
            price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
            coordinates: [86.8105368, 27.9477818],
          },
        },
        {
          order: 8,
          dayNumber: 8,
          title: 'Lobuche → Gorakshep → Everest Base Camp',
          data: {
            altitude: '5,364m',
            duration: '8-9 hours',
            distance: '15km',
            note: 'EBC elevation is 5,364m, sleeping at Gorakshep 5,164m',
            description:
              'The trail leaves Lobuche early and continues across the rugged, high-altitude terrain toward Gorakshep. The route follows rocky paths and glacial moraine as you move deeper into the upper Khumbu, with Pumori, Nuptse, and other high peaks surrounding the valley.\n\nAfter reaching Gorakshep, the trail continues toward Everest Base Camp, following the moraine beside the Khumbu Glacier. The terrain becomes increasingly rocky and uneven, and the route can change with the movement of the glacier and seasonal conditions. At 5,364 m, Everest Base Camp marks the highest destination of the trek before you retrace the route to Gorakshep at approximately 5,164 m for the night.',
            price: 'NPR 5,500 (Accommodation: 1,000, Meals: 4,500)',
            isDestination: true,
            coordinates: [86.855732, 28.0029111],
          },
        },
        {
          order: 9,
          dayNumber: 9,
          title: 'Gorakshep → Kala Patthar → Pheriche',
          data: {
            altitude: '5,545m',
            duration: '7-8 hours',
            distance: '13km',
            note: 'Kala Patthar is the highest point of the trek. Sleeping elevation Pheriche 4,371m.',
            description:
              "The day begins early with the climb toward Kala Patthar, reaching 5,545 m, the highest point of the trek. The ascent is demanding at this elevation, particularly in the cold early hours, but the ridge opens to one of the most expansive mountain views of the journey. As the light reaches the surrounding peaks, you can look across the upper Khumbu toward Everest, Nuptse, Pumori, and the surrounding Himalayan landscape.\n\nThe trail descends back to Gorakshep before continuing down the valley toward Pheriche. With each drop in elevation, the landscape gradually becomes less stark, with more vegetation returning to the valley. The day ends in Pheriche at approximately 4,371 m, providing a significant drop from the previous night's sleeping elevation.",
            price: 'NPR 4,500 (Accommodation: 1,000, Meals: 3,500)',
            coordinates: [86.818, 27.893],
          },
        },
        {
          order: 10,
          dayNumber: 10,
          title: 'Pheriche → Namche Bazaar',
          data: {
            altitude: '3,440m',
            duration: '6-7 hours',
            distance: '14km',
            description:
              'The trail continues its long descent from Pheriche through the Khumbu Valley, retracing the route toward Tengboche. As you lose elevation, the landscape gradually changes from the sparse alpine terrain around Pheriche to greener surroundings and forested sections.\n\nFrom Tengboche, the trail descends toward the Dudh Koshi before climbing again toward the mountainside route leading to Namche. The return through familiar forests and villages offers a noticeable contrast to the high-altitude landscape of the previous days. The trail eventually reaches Namche Bazaar at approximately 3,440 m, where the lower elevation brings more oxygen and a more lively mountain atmosphere.',
            price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
            coordinates: [86.714, 27.806],
          },
        },
        {
          order: 11,
          dayNumber: 11,
          title: 'Namche Bazaar → Lukla',
          data: {
            altitude: '2,860m',
            duration: '7-8 hours',
            distance: '18km',
            description:
              'The trail retraces the route from Namche Bazaar toward Lukla, descending through the Dudh Koshi valley and passing familiar settlements along the way. You follow the trail through Monjo and Phakding, crossing suspension bridges and moving through increasingly green forest as the elevation decreases.\n\nBeyond Phakding, the route continues toward Lukla with a mixture of gradual descents and short uphill sections. The final approach climbs gently back toward Lukla at approximately 2,860 m, where the trekking portion of the journey comes to an end and you spend the final night in the Khumbu.',
            price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
            coordinates: [86.73, 27.686],
          },
        },
        {
          order: 12,
          dayNumber: 12,
          title: 'Lukla → Kathmandu',
          data: {
            duration: '35-min flight',
            description:
              'The final morning begins with a return flight from Tenzing-Hillary Airport in Lukla. Depending on the season and current flight operations, the flight may arrive in Kathmandu or connect through the operational departure arrangements in use at the time. The short mountain flight offers another perspective of the hills and valleys that surrounded the trek, with changing views depending on weather and visibility.\n\nAfter landing in Kathmandu, the 12-day Everest Base Camp journey comes to an end, bringing the route from the high valleys of the Khumbu back to the capital.',
            coordinates: [85.324, 27.7172],
          },
        },
      ],
    },
  },
  'manaslu-circuit': {
    slug: 'manaslu-circuit',
    name: 'Manaslu Circuit Trek',
    type: 'TREK',
    status: 'PUBLISHED',
    shortDescription:
      "Circle the world's eighth-highest mountain through the Budhi Gandaki Valley, upper Nubri settlements, and high alpine terrain before crossing the 5,106 m Larkya La Pass.",
    durationDays: 13,
    difficulty: 'CHALLENGING',
    // difficultyScore: 8,
    // thumbnail: '/images/manaslu/manaslu.jpg',
    maxElevationM: 5106,
    peakSeason: [3, 4, 5, 9, 10, 11],
    region: 'MANASLU',
    startPoint: 'Kathmandu',
    interest: ['nature', 'culture', 'mountains'],
    activity: ['trekking'],
    isActive: true,
    isPopular: false,
    details: [
      {
        key: 'overview',
        title: 'Overview',
        description: 'A quick look at what awaits on the trail.',
        content:
          "The Manaslu Circuit is a challenging Himalayan trek that circles Manaslu, the world's eighth-highest mountain at 8,163 m. The route follows the Budhi Gandaki Valley from Machha Khola through forests, waterfalls, suspension bridges, and traditional mountain villages. As the elevation rises, the landscape changes from subtropical valleys to pine and rhododendron forests and eventually open alpine terrain. The upper valley also reflects strong Gurung and Tibetan Buddhist traditions, with monasteries, mani walls, chortens, and prayer flags becoming more prominent. The route passes through Namrung, Lho, Samagaon, and Samdo before reaching Dharamsala and the high-altitude crossing of Larkya La. At approximately 5,106 m, the pass is the highest point of the trek and its main physical challenge.\n\nFrom Larkya La, the route descends to Bimthang, then continues through greener landscapes to Tilije and Dharapani before the road journey to Besisahar and Kathmandu.",
      },
      {
        key: 'tripFacts',
        title: 'Trip Facts',
        data: {
          type: 'TREK',
          flights: 'None',
          accommodation: 'Tea houses / lodges',
          routeType: 'Circuit',
          permits: 'Manaslu Restricted Area Permit, MCAP, ACAP',
        },
      },
      {
        key: 'expectations',
        title: 'What to Expect',
        description: 'Understand rhythms before you go',
        data: [
          {
            title: 'Changing Landscapes',
            description:
              'The Manaslu Circuit moves through several distinct environments, from warm river valleys and cultivated hillsides to forests, mountain villages, and high alpine terrain.',
          },
          {
            title: 'Nubri Valley Culture',
            description:
              'The upper route passes through the Nubri Valley, where Tibetan Buddhist traditions are reflected in monasteries, mani walls, prayer flags, and traditional village architecture.',
          },
          {
            title: 'Larkya La Crossing',
            description:
              'The route reaches 5,106 m at Larkya La. The crossing combines high elevation with a long walking day and is the most demanding section of the standard itinerary.',
          },
          {
            title: 'Tea-House Trekking',
            description:
              'Tea houses and lodges provide accommodation along the established route. Facilities generally become simpler at higher elevations, and electricity, hot water, connectivity, and other services can vary by location.',
          },
        ],
      },
      {
        key: 'seasonalPlanning',
        title: 'When Should I go?',
        description: 'Climbing windows for Trek regions.',
        data: [
          {
            month: 'Jan',
            condition: 'Closed / Heavy Snow on Larkya La',
          },
          {
            month: 'Feb',
            condition: 'Closed / Extreme Cold / Pass Blocked',
          },
          {
            month: 'Mar',
            condition: 'Good / Spring Blooms / Moderate Temperatures',
          },
          {
            month: 'Apr',
            condition: 'Peak Season / Clear Skies / Stable Weather',
          },
          {
            month: 'May',
            condition: 'Warm / Rhododendron Forests / Clear Mornings',
          },
          {
            month: 'Jun',
            condition: 'Beginning of Monsoon / Cloudy / Leeches',
          },
          {
            month: 'Jul',
            condition: 'Danger / Heavy Rain / Landslide Risk',
          },
          {
            month: 'Aug',
            condition: 'Peak Monsoon / Wet & Muddy Trails',
          },
          {
            month: 'Sep',
            condition: 'Late-Monsoon / Crisp Air / Fresh Landscapes',
          },
          {
            month: 'Oct',
            condition: 'Perfect / Best Visibility / Most Popular',
          },
          {
            month: 'Nov',
            condition: 'Excellent / Cool & Stable / Golden Peaks',
          },
          {
            month: 'Dec',
            condition: 'Closing / Winter Chill / High Pass Snow',
          },
        ],
      },
      {
        key: 'gearChecklist',
        title: 'Gear Checklist',
        description: 'Make sure you have everything you need',
        data: {
          essentials: [
            {
              item: 'Backpack (45-60L)',
              weight: '1.5kg',
            },
            {
              item: 'Rain Cover for Backpack',
              weight: '0.08kg',
            },
            {
              item: 'Down Jacket',
              weight: '0.425kg',
            },
            {
              item: 'Raincoat / Waterproof Shell Jacket',
              weight: '0.34kg',
            },
            {
              item: 'Fleece / Insulated Mid Layer',
              weight: '0.34kg',
            },
            {
              item: 'Thermal Base Layer Top',
              weight: '0.2kg',
              quantity: 1,
            },
            {
              item: 'Trekking T-Shirt',
              weight: '0.14kg',
              quantity: 3,
            },
            {
              item: 'Trekking Pants',
              weight: '0.315kg',
              quantity: 2,
            },
            {
              item: 'Trekking Boots (pair)',
              weight: '1.1kg',
            },
            {
              item: 'Trekking Socks (per pair)',
              weight: '0.06kg',
              quantity: 3,
            },
            {
              item: 'Warm Hat / Beanie',
              weight: '0.075kg',
            },
            {
              item: 'Sun Cap',
              weight: '0.06kg',
            },
            {
              item: 'Light Gloves',
              weight: '0.065kg',
            },
            {
              item: 'Trekking Poles (pair)',
              weight: '0.475kg',
            },
            {
              item: 'Headlamp',
              weight: '0.1kg',
            },
            {
              item: 'Water Bottle (1L, empty)',
              weight: '0.125kg',
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
              item: 'Personal First Aid Kit',
              weight: '0.275kg',
            },
            {
              item: 'Passport, Permits, Cash, Insurance Copy',
              weight: '0.15kg',
            },
          ],
          optional: [
            {
              item: 'Sleeping Bag (-10°C to -15°C comfort)',
              weight: '1.4kg',
            },
            {
              item: 'Waterproof Rain Pants',
              weight: '0.215kg',
            },
            {
              item: 'Thermal Base Layer Bottom',
              weight: '0.2kg',
              quantity: 1,
            },
            {
              item: 'Warm Trekking Trousers / Softshell Pants',
              weight: '0.37kg',
              quantity: 2,
            },
            {
              item: 'Camp Shoes / Sandals',
              weight: '0.325kg',
            },
            {
              item: 'Warm Outer Gloves',
              weight: '0.11kg',
            },
            {
              item: 'Buff / Neck Gaiter',
              weight: '0.043kg',
            },
            {
              item: 'Water Purification Tablets / Filter',
              weight: '0.075kg',
            },
            {
              item: 'Toiletries & Quick-Dry Towel',
              weight: '0.325kg',
            },
            {
              item: 'Power Bank (10,000-20,000 mAh)',
              weight: '0.265kg',
            },
            {
              item: 'Charging Cable / Adapter',
              weight: '0.09kg',
            },
            {
              item: 'Snacks / Energy Bars',
              weight: '0.45kg',
              quantity: 3,
            },
          ],
        },
      },
    ],
    images: [
      {
        url: '/images/manaslu/manaslu.jpg',
        alt: 'Manaslu ',
        type: 'HERO',
        metadata: {
          frontendId: 'img_01',
          order: null,
        },
      },
      {
        url: '/images/manaslu/manaslu2.jpg',
        alt: 'En route to Pung Gyen Gompa in Manaslu Circuit Trek.',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_02',
          order: null,
        },
      },
      {
        url: '/images/manaslu/manaslu3.jpg',
        alt: 'Manaslu, Samagaun, Nepal',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_03',
          order: null,
        },
      },
      {
        url: '/images/erik-OwJ6Cn_DnHM-unsplash.jpg',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_04',
          order: null,
        },
      },
      {
        url: '/images/manaslu/manaslu4.jpg',
        alt: 'Manaslu',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_05',
          order: null,
        },
      },
      {
        url: '/images/manaslu/manaslu5.jpg',
        alt: 'Manaslu',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_06',
          order: null,
        },
      },
    ],
    timeline: {
      title: 'Trek Timeline',
      description: 'Day-by-day breakdown of your journey',
      items: [
        {
          order: 1,
          dayNumber: 1,
          title: 'Kathmandu → Machha Khola',
          data: {
            altitude: '930m',
            duration: '8-10 hrs drive',
            distance: '160km',
            description:
              'An early road departure takes you from Kathmandu through Dhading and Arughat before entering the Budhi Gandaki valley. The drive follows the river corridor, with road conditions varying along the route.\n\nRather than stopping at Soti Khola, this itinerary continues farther along the valley to Machha Khola, allowing the trekking section to begin the following morning. Keep water, snacks, and warm layers accessible during the long journey.',
            price:
              'NPR 4,200 (Transport: 2,500, Accommodation: 700, Meals: 1,000)',
            coordinates: [84.87377, 28.22931],
          },
        },
        {
          order: 2,
          dayNumber: 2,
          title: 'Machha Khola → Jagat',
          data: {
            altitude: '1,340m',
            duration: '6-7 hrs',
            distance: '20-22km',
            description:
              'The first walking day follows the Budhi Gandaki River through a warm, forested section of the valley. The trail passes through Khorlabesi and continues toward Tatopani, known for its natural hot spring.\n\nFrom there, the valley narrows as the route crosses suspension bridges, climbs along the hillsides, and gradually enters more rugged terrain. The trail eventually reaches Jagat, a traditional stone-paved village and an important checkpoint on the route into the restricted Manaslu area.',
            price: 'NPR 1,900 (Accommodation: 700, Meals: 1,200)',
            coordinates: [84.89586, 28.35141],
          },
        },
        {
          order: 3,
          dayNumber: 3,
          title: 'Jagat → Deng',
          data: {
            altitude: '1,804m',
            duration: '5-7 hrs',
            distance: '19km',
            description:
              'From Jagat, the trail follows the Budhi Gandaki River through forests, cultivated hillsides, stone stairways, and suspension bridges. As you move deeper into the valley, the terrain becomes steeper and more rugged.\n\nThe route passes through Philim, one of the larger settlements along the lower Manaslu trail, before continuing toward Deng. With the gradual gain in elevation, the landscape and villages begin to take on the distinct character of the upper Budhi Gandaki valley, with Tibetan-influenced architecture and Buddhist cultural features becoming more visible.',
            price: 'NPR 1,900 (Accommodation: 700, Meals: 1,200)',
            coordinates: [84.86704, 28.47907],
          },
        },
        {
          order: 4,
          dayNumber: 4,
          title: 'Deng → Namrung',
          data: {
            altitude: '2,630m',
            duration: '5-7 hrs',
            distance: '18km',
            description:
              'The route climbs steadily through increasingly mountainous terrain as you leave the lower Budhi Gandaki valley behind. The trail passes through Rana and Bihi, with oak and rhododendron forests covering sections of the hillside.\n\nAs you approach the upper Nubri valley, the landscape and culture begin to change. Namrung, at approximately 2,630 m, marks an important transition into the higher Manaslu landscape, with more open views toward the surrounding peaks and increasing signs of Tibetan Buddhist culture.',
            price: 'NPR 2,200 (Accommodation: 700, Meals: 1,500)',
            coordinates: [84.76788, 28.54506],
          },
        },
        {
          order: 5,
          dayNumber: 5,
          title: 'Namrung → Lho',
          data: {
            altitude: '3,180m',
            duration: '4-5 hrs',
            description:
              'Leaving Namrung behind, the trail climbs gradually into a higher and more open landscape. Forests and traditional villages line the route toward Lho, where the valley begins to open beneath the towering peaks of the Manaslu range.\n\nAt Lho, you can explore the traditional village and Ribung Gompa, an important Buddhist monastery above the settlement. The shorter walking day also gives your body more time to adjust before continuing toward Samagaon.',
            price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
            coordinates: [84.70199, 28.57405],
          },
        },
        {
          order: 6,
          dayNumber: 6,
          title: 'Lho → Samagaon',
          data: {
            altitude: '3,530m',
            duration: '3-5 hrs',
            distance: '15km',
            description:
              'The trail continues through the upper Nubri valley, passing Shyala, where the surrounding mountains become increasingly prominent. The forest gradually gives way to more open alpine terrain as you approach Samagaon.\n\nThe walk is relatively short compared with some earlier days, but the elevation gain is significant. At approximately 3,530 m, Samagaon becomes your base for acclimatization before the route climbs toward Samdo and the Larkya La.',
            price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
            coordinates: [84.64404, 28.58467],
          },
        },
        {
          order: 7,
          dayNumber: 7,
          title: 'Acclimatization Day · Samagaon',
          data: {
            altitude: '4,050m',
            duration: '3-5 hrs optional hike',
            note: 'Acclimatization Day',
            description:
              'This dedicated acclimatization day provides time to adjust to the altitude before the route climbs higher. A moderate hike above Samagaon is preferable to remaining completely inactive, followed by a return to sleep at approximately 3,530 m.\n\nA popular option is the hike toward Pungyen Gompa, which sits at around 4,050 m and provides views toward Manaslu. You can also hike toward Manaslu Base Camp, depending on conditions, fitness, and your guide’s assessment.',
            price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
            coordinates: [84.64404, 28.58467],
          },
        },
        {
          order: 8,
          dayNumber: 8,
          title: 'Samagaon → Samdo',
          data: {
            altitude: '3,860m',
            duration: '3-4 hrs',
            distance: '9km',
            description:
              'The trail leaves Samagaon and enters the high, open landscape of the upper Budhi Gandaki valley. The walking is shorter today, but the elevation continues to increase as you approach Samdo. The route crosses open terrain with broad views of the surrounding mountains and follows the valley toward this remote settlement near the Tibetan border.\n\nAt approximately 3,860 m, Samdo is an important stopping point before the final approach to Dharamsala and Larkya La. Take the afternoon to rest and prepare for another high-altitude day.',
            price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
            coordinates: [84.63414, 28.65087],
          },
        },
        {
          order: 9,
          dayNumber: 9,
          title: 'Samdo → Dharamsala',
          data: {
            altitude: '4,460m',
            duration: '3-4 hrs',
            distance: '7km',
            description:
              'As you climb toward Dharamsala, the landscape changes noticeably, with sparse vegetation and increasingly rugged mountain terrain. The trail crosses increasingly barren alpine terrain as vegetation becomes sparse and the mountains feel closer.\n\nDharamsala sits at approximately 4,460 m and is the final overnight stop before the Larkya La crossing. Because tomorrow is the trek’s most demanding day, arrive early, eat well, hydrate, and give yourself plenty of time to rest.',
            price: 'NPR 2,500 (Accommodation: 1,000, Meals: 2,500)',
            coordinates: [84.58443, 28.65892],
          },
        },
        {
          order: 10,
          dayNumber: 10,
          title: 'Dharamsala → Larkya La → Bimthang',
          data: {
            altitude: '5,106m',
            duration: '8-10 hrs',
            description:
              'This is the most demanding day of the trek. An early morning start allows you to make the ascent toward Larkya La before conditions become more challenging later in the day. The trail climbs gradually across rocky and sometimes snowy terrain toward the pass at approximately 5,106 m, the highest point of the Manaslu Circuit. From the top, expansive Himalayan views can open up before the long descent toward Bimthang.\n\nThe descent is demanding in its own way, with tired legs and changing terrain requiring careful footing. As elevation decreases, the landscape gradually becomes greener toward Bimthang.',
            price: 'NPR 4,000 (Accommodation: 1,000, Meals: 3,000)',
            isDestination: true,
            coordinates: [84.47129, 28.63384],
          },
        },
        {
          order: 11,
          dayNumber: 11,
          title: 'Bimthang → Tilije',
          data: {
            altitude: '2,300m',
            duration: '5-7 hrs',
            distance: '20km',
            description:
              'After crossing Larkya La, the trail descends into a noticeably greener landscape. The barren alpine terrain gradually gives way to rhododendron and pine forests as you lose elevation.\n\nThe route continues through Kharche and toward the lower Marsyangdi valley, with vegetation becoming denser as the altitude drops. By the time you reach Tilije, the landscape has changed considerably from the high mountain terrain around the pass.',
            price: 'NPR 2,800 (Accommodation: 800, Meals: 2,000)',
            coordinates: [84.38119, 28.54519],
          },
        },
        {
          order: 12,
          dayNumber: 12,
          title: 'Tilije → Dharapani → Besisahar',
          data: {
            altitude: '760m',
            duration: '4-5 hrs + drive',
            description:
              'The final walking section follows the valley from Tilije through Thonje toward Dharapani, where the Manaslu Circuit connects with the Annapurna trekking corridor. The route continues through increasingly settled and warmer terrain as the altitude drops.\n\nFrom Dharapani, the journey continues by road toward Besisahar. Travel time depends on road conditions, traffic, weather, and the vehicle available, making this a combined walking and road-transfer day rather than a continuous trekking stage.',
            price: 'NPR 2,800 (Accommodation: 800, Meals: 2,000)',
            coordinates: [84.37614, 28.23132],
          },
        },
        {
          order: 13,
          dayNumber: 13,
          title: 'Besisahar → Kathmandu',
          data: {
            altitude: '1,400m',
            duration: '6-8 hrs drive',
            description:
              'The final day is a road journey from Besisahar to Kathmandu. The route follows the Marsyangdi valley before continuing through the Middle Hills toward the capital. The journey can take much of the day depending on road conditions, traffic, and stops, so keep your schedule flexible.\n\nBy the time you reach Kathmandu, you will have completed the full Manaslu Circuit from the Budhi Gandaki valley to the Larkya La and back through the Marsyangdi side of the circuit.',
            price: 'NPR 3,500 (Transport: 2,500, Meals: 1,000)',
            coordinates: [85.324, 27.7172],
          },
        },
      ],
    },
  },
  'langtang-valley': {
    slug: 'langtang-valley',
    name: 'Langtang Valley Trek',
    type: 'TREK',
    status: 'PUBLISHED',
    shortDescription:
      'Follow the Langtang Khola from forested valleys and Tamang villages into the alpine landscape of Kyanjin Gompa, with a climb to Kyanjin Ri at 4,773 m.',
    durationDays: 7,
    difficulty: 'MODERATE',
    // difficultyScore: 5,
    // thumbnail: '/images/langtang/1.jpg',
    maxElevationM: 4773,
    peakSeason: [3, 4, 5, 10, 11],
    region: 'LANGTANG',
    startPoint: 'Kathmandu',
    interest: ['nature', 'culture', 'wildlife', 'mountains'],
    activity: ['trekking'],
    isActive: true,
    isPopular: false,
    details: [
      {
        key: 'overview',
        title: 'Overview',
        description: 'A quick look at what awaits on the trail.',
        content:
          'The Langtang Valley Trek follows the Langtang Khola through a changing mountain landscape, beginning at Syabrubesi and gradually climbing from forested valleys and Tamang settlements into open alpine terrain. The route passes through Lama Hotel, Langtang Village, and Kyanjin Gompa, with dense forests giving way to wider mountain landscapes as the elevation increases. Much of the trekking route lies within Langtang National Park, a protected area known for its forests, alpine vegetation, mountain scenery, and Tamang cultural heritage.\n\nAt Kyanjin Gompa, the valley opens into a high-mountain landscape surrounded by ridgelines, glaciers, and Himalayan peaks. A day hike to Kyanjin Ri at 4,773 m brings this 7-day itinerary to its highest point. On a clear day, views extend across the upper Langtang Valley and surrounding mountains. From Kyanjin Gompa, the route retraces the valley through Langtang Village and Lama Hotel before descending to Syabrubesi.',
      },
      {
        key: 'tripFacts',
        title: 'Trip Facts',
        data: {
          type: 'TREK',
          flights: 'None',
          accommodation: 'Tea houses / lodges',
          routeType: 'Out & Back',
          permits: 'Langtang National Park Entry Permit, TIMS',
        },
      },
      {
        key: 'expectations',
        title: 'What to Expect',
        description: 'Understand rhythms before you go',
        data: [
          {
            title: 'Forest to Alpine Landscapes',
            description:
              'The route moves through several distinct environments as elevation increases. Lower sections follow the Langtang Khola through dense forest, while higher sections open into alpine meadows, exposed slopes, and glacial mountain terrain. The transition from forest to open high country is one of the defining characteristics of the valley.',
          },
          {
            title: 'Tamang Culture and Buddhist Heritage',
            description:
              'Tamang communities are an important part of the cultural landscape of the Langtang region. Along the trail, you encounter villages, prayer flags, mani walls, chortens, and Buddhist sites that reflect the region’s Himalayan cultural traditions. Nepal Tourism Board specifically identifies Tamang culture as one of the major experiences associated with Langtang National Park.',
          },
          {
            title: 'Kyanjin Gompa and Kyanjin Ri',
            description:
              'Kyanjin Gompa marks the high point of the main valley route and provides access to several surrounding viewpoints and high-altitude trails. The Kyanjin Ri hike climbs to 4,773 m, providing elevated views across the upper Langtang Valley and surrounding mountains. Visibility depends on weather and cloud conditions.',
          },
          {
            title: 'Optional Extension to Tserko Ri',
            description:
              'With an additional day at Kyanjin Gompa, the trek can be extended to Tserko Ri, a higher and more demanding viewpoint in the upper Langtang Valley. It should be treated as an optional extension rather than part of the standard 7-day itinerary. Conditions, route difficulty, and the exact elevation should be checked locally before attempting the climb.',
          },
        ],
      },
      {
        key: 'seasonalPlanning',
        title: 'When Should I go?',
        description: 'Climbing windows for Trek regions.',
        data: [
          {
            month: 'Jan',
            condition: 'Extremely Cold / Heavy Snow on Passes',
          },
          {
            month: 'Feb',
            condition: 'Freezing Temperatures / Quiet Trails',
          },
          {
            month: 'Mar',
            condition: 'Spring Bloom / Vibrant Rhododendrons',
          },
          {
            month: 'Apr',
            condition: 'Perfect Climbing Weather / Peak Season',
          },
          {
            month: 'May',
            condition: 'Warm Temperatures / Pre-Monsoon Views',
          },
          {
            month: 'Jun',
            condition: 'Beginning of Monsoon / Cloudy Skies',
          },
          {
            month: 'Jul',
            condition: 'Heavy Rain / Lush Greenery / Leeches',
          },
          {
            month: 'Aug',
            condition: 'Peak Monsoon / Wet & Muddy Trails',
          },
          {
            month: 'Sep',
            condition: 'Late-Monsoon / Crisp & Fresh Air',
          },
          {
            month: 'Oct',
            condition: 'Crystal Clear Skies / Most Popular Month',
          },
          {
            month: 'Nov',
            condition: 'Cool & Stable / Excellent Visibility',
          },
          {
            month: 'Dec',
            condition: 'Winter Chill / Crystal Clear Blue Skies',
          },
        ],
      },
      {
        key: 'gearChecklist',
        title: 'Gear Checklist',
        description: 'Make sure you have everything you need',
        data: {
          essentials: [
            {
              item: 'Backpack (45-60L)',
              weight: '1.5kg',
            },
            {
              item: 'Rain Cover for Backpack',
              weight: '0.08kg',
            },
            {
              item: 'Down Jacket',
              weight: '0.425kg',
            },
            {
              item: 'Raincoat / Waterproof Shell Jacket',
              weight: '0.34kg',
            },
            {
              item: 'Fleece / Insulated Mid Layer',
              weight: '0.34kg',
            },
            {
              item: 'Thermal Base Layer Top',
              weight: '0.2kg',
              quantity: 1,
            },
            {
              item: 'Trekking T-Shirt',
              weight: '0.14kg',
              quantity: 3,
            },
            {
              item: 'Trekking Pants',
              weight: '0.315kg',
              quantity: 2,
            },
            {
              item: 'Trekking Boots (pair)',
              weight: '1.1kg',
            },
            {
              item: 'Trekking Socks (per pair)',
              weight: '0.06kg',
              quantity: 3,
            },
            {
              item: 'Warm Hat / Beanie',
              weight: '0.075kg',
            },
            {
              item: 'Sun Cap',
              weight: '0.06kg',
            },
            {
              item: 'Light Gloves',
              weight: '0.065kg',
            },
            {
              item: 'Trekking Poles (pair)',
              weight: '0.475kg',
            },
            {
              item: 'Headlamp',
              weight: '0.1kg',
            },
            {
              item: 'Water Bottle (1L, empty)',
              weight: '0.125kg',
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
              item: 'Personal First Aid Kit',
              weight: '0.275kg',
            },
            {
              item: 'Passport, Permits, Cash, Insurance Copy',
              weight: '0.15kg',
            },
          ],
          optional: [
            {
              item: 'Sleeping Bag (-10°C to -15°C comfort)',
              weight: '1.4kg',
            },
            {
              item: 'Waterproof Rain Pants',
              weight: '0.215kg',
            },
            {
              item: 'Thermal Base Layer Bottom',
              weight: '0.2kg',
              quantity: 1,
            },
            {
              item: 'Warm Trekking Trousers / Softshell Pants',
              weight: '0.37kg',
              quantity: 2,
            },
            {
              item: 'Camp Shoes / Sandals',
              weight: '0.325kg',
            },
            {
              item: 'Warm Outer Gloves',
              weight: '0.11kg',
            },
            {
              item: 'Buff / Neck Gaiter',
              weight: '0.043kg',
            },
            {
              item: 'Water Purification Tablets / Filter',
              weight: '0.075kg',
            },
            {
              item: 'Toiletries & Quick-Dry Towel',
              weight: '0.325kg',
            },
            {
              item: 'Power Bank (10,000-20,000 mAh)',
              weight: '0.265kg',
            },
            {
              item: 'Charging Cable / Adapter',
              weight: '0.09kg',
            },
            {
              item: 'Snacks / Energy Bars',
              weight: '0.45kg',
              quantity: 3,
            },
          ],
        },
      },
    ],
    images: [
      {
        url: '/images/langtang/1.jpg',
        alt: 'Langtang 1',
        type: 'HERO',
        metadata: {
          frontendId: 'img_01',
          order: 1,
        },
      },
      {
        url: '/images/langtang/2.webp',
        alt: 'Langtang 2',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_02',
          order: null,
        },
      },
      {
        url: '/images/langtang/3.webp',
        alt: 'Langtang 3',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_03',
          order: null,
        },
      },
      {
        url: '/images/langtang/4.webp',
        alt: 'Langtang 4',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_04',
          order: null,
        },
      },
      {
        url: '/images/langtang/5.webp',
        alt: 'Langtang 5',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_05',
          order: null,
        },
      },
      {
        url: '/images/langtang/6.webp',
        alt: 'Langtang 6',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_06',
          order: null,
        },
      },
      {
        url: '/images/langtang/7.webp',
        alt: 'Langtang 7',
        type: 'HERO',
        metadata: {
          frontendId: 'img_07',
          order: null,
        },
      },
      {
        url: '/images/langtang/8.webp',
        alt: 'Langtang 8',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_08',
          order: null,
        },
      },
      {
        url: '/images/langtang/9.webp',
        alt: 'Langtang 9',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_09',
          order: null,
        },
      },
      {
        url: '/images/langtang/10.webp',
        alt: 'Langtang 10',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_10',
          order: null,
        },
      },
      {
        url: '/images/langtang/11.webp',
        alt: 'Langtang 11',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_11',
          order: null,
        },
      },
      {
        url: '/images/langtang/12.webp',
        alt: 'Langtang 12',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_12',
          order: null,
        },
      },
      {
        url: '/images/langtang/13.webp',
        alt: 'Langtang 13',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_13',
          order: null,
        },
      },
      {
        url: '/images/langtang/14.webp',
        alt: 'Langtang 14',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_14',
          order: null,
        },
      },
      {
        url: '/images/langtang/15.webp',
        alt: 'Langtang 15',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_015',
          order: null,
        },
      },
      {
        url: '/images/langtang/16.webp',
        alt: 'Langtang 16',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_16',
          order: null,
        },
      },
      {
        url: '/images/langtang/17.webp',
        alt: 'Langtang 17',
        type: 'HERO',
        metadata: {
          frontendId: 'img_17',
          order: null,
        },
      },
      {
        url: '/images/langtang/18.webp',
        alt: 'Langtang 18',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_18',
          order: null,
        },
      },
      {
        url: '/images/langtang/19.webp',
        alt: 'Langtang 20',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_20',
          order: null,
        },
      },
      {
        url: '/images/langtang/20.webp',
        alt: 'Langtang 21',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_21',
          order: null,
        },
      },
    ],
    timeline: {
      title: 'Trek Timeline',
      description: 'Day-by-day breakdown of your journey',
      items: [
        {
          order: 1,
          dayNumber: 1,
          title: 'Kathmandu → Syabrubesi',
          data: {
            altitude: '1,500m · Syabrubesi',
            duration: 'Full-day overland journey',
            description:
              'The journey begins with an overland drive from Kathmandu toward Syabrubesi, the usual starting point for the Langtang Valley Trek. The route heads north through the Trishuli Valley, passing through Dhunche before continuing toward Syabrubesi. Travel time can vary with road and traffic conditions, so this is best treated as a full travel day rather than a fixed-duration transfer.\n\nNepal Tourism Board identifies Dhunche, 117 km by road from Kathmandu, as an access point to Langtang National Park. As you leave the lower river valleys behind, the landscape becomes increasingly mountainous, with steeper hills and settlements along the way. At approximately 1,500 m, Syabrubesi provides the overnight base before you begin trekking the following morning.',
            price: 'NPR 1,500 (Accommodation: 500, Meals: 1,000)',
            coordinates: [85.3418267, 28.1657291],
          },
        },
        {
          order: 2,
          dayNumber: 2,
          title: 'Syabrubesi → Lama Hotel',
          data: {
            altitude: '2,470m · Lama Hotel',
            duration: '6-7 hrs',
            distance: '11-12km',
            description:
              'Leaving Syabrubesi behind, you follow the Langtang Khola into the forested landscape of Langtang National Park. The route passes through sections of bamboo, oak, and rhododendron forest, with suspension bridges and riverside stretches adding variety to the gradual climb. The steady ascent takes you deeper into the valley before reaching Lama Hotel.\n\nPublished sources give different elevations for the settlement, so Trails Nepal uses approximately 2,500–2,600 m here rather than presenting a more precise figure as definitive.',
            price: 'NPR 1,700 (Accommodation: 500, Meals: 1,200)',
            coordinates: [85.4296495, 28.1612117],
          },
        },
        {
          order: 3,
          dayNumber: 3,
          title: 'Lama Hotel → Langtang Village',
          data: {
            altitude: '3,430m · Langtang Village',
            duration: '6-7 hrs',
            distance: '10-11km',
            description:
              'The forest gradually opens as you climb higher from Lama Hotel, following the Langtang Khola through Ghodatabela. Mountain views become more prominent as the valley begins to widen and the dense woodland starts to give way to more open slopes.\n\nYou continue toward Langtang Village at approximately 3,430 m, where stone-built homes, chortens, prayer flags, and mani walls reflect the cultural character of the upper valley. The increasing elevation is noticeable here, making a steady pace important.',
            price: 'NPR 1,900 (Accommodation: 700, Meals: 1,200)',
            coordinates: [85.5030007, 28.2157142],
          },
        },
        {
          order: 4,
          dayNumber: 4,
          title: 'Langtang Village → Kyanjin Gompa',
          data: {
            altitude: '3,870m · Kyanjin Gompa',
            duration: '3-4 hrs',
            distance: '6-7km',
            description:
              'Today brings a shorter walking day as you make your way toward Kyanjin Gompa. The landscape becomes increasingly open, with fewer trees and more alpine vegetation, rocky slopes, chortens, prayer flags, and mani walls along the route. The gradual climb brings you to Kyanjin Gompa at approximately 3,870 m, the base for the trek’s high-altitude day hikes.\n\nWith more time after reaching the settlement, you can explore the surrounding area or take a short walk while allowing your body to adjust to the higher elevation.',
            price: 'NPR 2,200 (Accommodation: 700, Meals: 1,500)',
            coordinates: [85.5672161, 28.2124247],
          },
        },
        {
          order: 5,
          dayNumber: 5,
          title: 'Kyanjin Gompa → Kyanjin Ri → Kyanjin Gompa',
          data: {
            altitude: '4,773m · Kyanjin Ri',
            duration: '4-6 hrs round trip',
            distance: '5-6km',
            description:
              'A high-altitude day hike takes you from Kyanjin Gompa toward Kyanjin Ri, the highest point of this itinerary at 4,773 m. The trail becomes steeper as it leaves the settlement and climbs onto the surrounding ridge. The lower viewpoint provides an increasingly elevated perspective over Kyanjin and the upper Langtang Valley. Higher on the ridge, the views open toward Langtang Lirung, surrounding glaciers, ridgelines, and the high peaks of the region. On a clear day, the elevated position provides a broad panorama across the upper valley. The final section toward 4,773 m is steeper and more demanding because of the elevation.\n\nAfter spending time at the viewpoint, the trail descends back to Kyanjin Gompa for the night.',
            price: 'NPR 2,200 (Accommodation: 700, Meals: 1,500)',
            isDestination: true,
            coordinates: [85.5672161, 28.2124247],
          },
        },
        {
          order: 6,
          dayNumber: 6,
          title: 'Kyanjin Gompa → Lama Hotel',
          data: {
            altitude: '3,870m · Kyanjin Gompa',
            duration: '6-7 hrs',
            distance: '14-15km',
            description:
              'Retracing the valley from Kyanjin Gompa, the descent passes through Langtang Village. As you lose elevation, vegetation gradually becomes denser and the landscape shifts from alpine meadows and exposed mountain slopes back toward forest.\n\nThe long descent continues through the familiar trail to Lama Hotel at approximately 2,470 m, providing a substantially lower sleeping elevation after the high-altitude day at Kyanjin Ri.',
            price: 'NPR 1,900 (Accommodation: 700, Meals: 1,200)',
            coordinates: [85.4296495, 28.1612117],
          },
        },
        {
          order: 7,
          dayNumber: 7,
          title: 'Lama Hotel → Syabrubesi → Kathmandu',
          data: {
            duration: '4-5 hrs trek + variable drive',
            distance: '11-12km',
            description:
              'The final morning brings you back along the lower Langtang Khola to Syabrubesi. The route retraces the familiar trail through the lower settlements and suspension bridges before reaching Syabrubesi, where the trekking portion of your journey comes to an end.\n\nFrom Syabrubesi, you continue overland toward Kathmandu. Road and traffic conditions can affect the return journey, so the drive is best treated as a variable travel period rather than assigned a fixed duration.',
            price: 'NPR 1,000 (Meals: 1,000)',
            coordinates: [85.3418267, 28.1657291],
          },
        },
      ],
    },
  },
};
