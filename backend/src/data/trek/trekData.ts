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
              'The journey begins with a mountain flight to Tenzing-Hillary Airport in Lukla. Depending on the season and current flight operations, flights may depart from Kathmandu or Ramechhap. The flight from Kathmandu takes around 30–35 minutes, while the Ramechhap–Lukla sector is shorter. On clear days, the flight offers changing views of the Himalayan foothills, valleys, and mountain landscape. Flight schedules and operations can vary depending on weather and airport conditions.\n\nAfter landing in Lukla, the trail descends gradually through surrounding Sherpa settlements, passing Chheplung and Ghat before joining the Dudh Koshi valley. Pine and rhododendron forests, stone-built villages, mani walls, and the first suspension bridges introduce the landscapes of the Khumbu. The trail continues alongside the river to Phakding at approximately 2,610 m, where the first night is spent in a local tea house.',
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
    isPopular: true,
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
    isPopular: true,
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

  'abc-trek': {
    slug: 'abc-trek',
    name: 'Annapurna Base Camp Trek',
    type: 'TREK',
    status: 'PUBLISHED',
    shortDescription:
      'Trek through the Annapurna Sanctuary, passing Gurung villages, bamboo and rhododendron forests, the Modi Khola valley, and alpine terrain on the way to Annapurna Base Camp.',
    durationDays: 7,
    difficulty: 'MODERATE',
    maxElevationM: 4130,
    peakSeason: [3, 4, 5, 9, 10, 11],
    region: 'ANNAPURNA',
    startPoint: 'Pokhara',
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
          'The Annapurna Base Camp trek follows the Modi Khola valley into the Annapurna Sanctuary, beginning with a drive from Pokhara toward the lower trailhead near Jhinu Danda. From there, the route climbs through Chhomrong and Sinuwa before entering a narrower section of the valley surrounded by bamboo, oak, and rhododendron forest. The trail continues through Dovan and Deurali toward Machhapuchhre Base Camp, where the landscape becomes increasingly open and alpine. As the route gains elevation, the forest gradually gives way to rocky slopes, glacial terrain, and the high mountain environment of the Annapurna Sanctuary.\n\nThe trail reaches Annapurna Base Camp at 4,130 m, surrounded by peaks including Annapurna I, Annapurna South, Hiunchuli, and Machhapuchhre. After reaching the highest point of the trek, the route retraces its path toward the lower valleys before descending to Jhinu Danda and returning to Pokhara.',
      },
      {
        key: 'tripFacts',
        title: 'Trip Facts',
        data: {
          type: 'TREK',
          flights: 'None',
          accommodation: 'Tea House / Trekking Lodges',
          routeType: 'Out & Back',
          permits: 'Annapurna Conservation Area Permit, TIMS',
        },
      },
      {
        key: 'expectations',
        title: 'What to Expect',
        description: 'Understand rhythms before you go',
        data: [
          {
            title: 'The Annapurna Sanctuary',
            description:
              'Step into a natural glacial amphitheater surrounded by 7,000m to 8,000m peaks, offering one of the most awe-inspiring 360-degree mountain panoramas on earth.',
          },
          {
            title: 'The Modi Khola Gorge',
            description:
              'Experience the dramatic shift in landscape as you trek up a single, deep river gorge that transforms from humid bamboo forests into an icy alpine basin.',
          },
          {
            title: 'Rich Gurung Heritage',
            description:
              'Walk through pristine stone-paved villages like Chhomrong, experiencing the legendary hospitality and culture of the local Gurung communities.',
          },
          {
            title: 'Intense Vertical Gains',
            description:
              "Be prepared for the famous 'Nepali flat': thousands of steep stone staircases that test your leg endurance on the way up to the sanctuary.",
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
            condition: 'Deep Winter / Heavy Snow / Very Cold at ABC',
          },
          {
            month: 'Feb',
            condition: 'Late Winter / Cold but Clear / Avalanche Risk High',
          },
          {
            month: 'Mar',
            condition: 'Excellent / Spring Begins / Rhododendrons Blooming',
          },
          {
            month: 'Apr',
            condition: 'Peak Season / Warm / Vibrant Forests / Clear Views',
          },
          {
            month: 'May',
            condition: 'Very Warm / Pre-Monsoon Haze / Beautiful Blooms',
          },
          {
            month: 'Jun',
            condition: 'Monsoon Starts / Wet / Obscured Views / Leeches',
          },
          {
            month: 'Jul',
            condition: 'Peak Monsoon / Muddy Trails / Flight Delays',
          },
          {
            month: 'Aug',
            condition: 'Heavy Rain / Lush Valleys but Poor Mountain Views',
          },
          {
            month: 'Sep',
            condition: 'Late-Monsoon / Washing Away Dust / Crystal Clear',
          },
          {
            month: 'Oct',
            condition: 'Perfect / Ideal Weather / Most Popular Time',
          },
          {
            month: 'Nov',
            condition: 'Excellent / Cooler Temperatures / Stunning Visibility',
          },
          {
            month: 'Dec',
            condition: 'Start of Winter / Cold Nights / Quiet Trails',
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
        url: '/images/abc/image.png',
        alt: 'Panoramic view of the Annapurna Sanctuary',
        type: 'HERO',
        metadata: {
          frontendId: 'abc_img_01',
          order: null,
        },
      },
      {
        url: '/images/abc/annapurna.jpg',
        alt: 'Machhapuchhre (Fishtail) peak towering over MBC',
        type: 'GALLERY',
        metadata: {
          frontendId: 'abc_img_02',
          order: null,
        },
      },
      {
        url: '/images/abc/annapurna1.jpg',
        alt: 'Trekking through a blooming rhododendron forest',
        type: 'GALLERY',
        metadata: {
          frontendId: 'abc_img_03',
          order: null,
        },
      },
      {
        url: '/images/abc/image0.png',
        alt: 'The stone terraces of Chhomrong village',
        type: 'GALLERY',
        metadata: {
          frontendId: 'abc_img_04',
          order: null,
        },
      },
      {
        url: '/images/abc/image1.png',
        alt: 'The stone terraces of Chhomrong village',
        type: 'GALLERY',
        metadata: {
          frontendId: 'abc_img_05',
          order: null,
        },
      },
      {
        url: '/images/abc/image3.png',
        alt: 'The stone terraces of Chhomrong village',
        type: 'GALLERY',
        metadata: {
          frontendId: 'abc_img_06',
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
          title: 'Pokhara → Chhomrong',
          data: {
            altitude: '2,170m',
            duration: '3 hrs',
            distance: '5km',
            description:
              'The journey begins with a drive from Pokhara toward the roadhead near Jhinu Danda. From the trailhead, the route crosses the Modi Khola and climbs through forest toward Chhomrong. The first section includes a substantial series of stone steps, making this one of the more physically demanding climbs of the lower route. The trail continues upward through forest and scattered settlements before reaching Chhomrong at approximately 2,170 m.\n\nSet on a steep hillside above the Modi Khola valley, Chhomrong is one of the major Gurung settlements on the route and serves as the gateway toward the Annapurna Sanctuary.',
            price:
              'NPR 4,300 (Transport: 2,000, Accommodation: 800, Meals: 1,500)',
            coordinates: [83.8176077, 28.4200417],
          },
        },
        {
          order: 2,
          dayNumber: 2,
          title: 'Chhomrong → Dovan',
          data: {
            altitude: '2,600m',
            duration: '5-6 hrs',
            distance: '9-12km',
            description:
              'The trail descends from Chhomrong on a long series of stone steps toward the Chhomrong Khola before crossing the river and climbing again toward Sinuwa. From Sinuwa, the route enters the forested Modi Khola valley, passing through Bamboo before continuing toward Dovan. The vegetation becomes increasingly dense and humid along this section, with bamboo, oak, and rhododendron forest covering much of the trail.\n\nThe valley gradually narrows as the route continues toward Dovan at approximately 2,600 m, where the surrounding terrain begins to feel more enclosed and mountainous.',
            price: 'NPR 2,100 (Accommodation: 600, Meals: 1,500)',
            coordinates: [83.8694284, 28.4697078],
          },
        },
        {
          order: 3,
          dayNumber: 3,
          title: 'Dovan → Deurali',
          data: {
            altitude: '3,200m',
            duration: '3-4 hrs',
            distance: '6km',
            description:
              'The trail continues uphill from Dovan through the narrowing Modi Khola valley. Sections of dense bamboo and rhododendron forest give way to steeper and rockier terrain as the route passes Himalaya and continues toward the Hinku Cave area. The landscape becomes more open as the trail approaches Deurali at approximately 3,200 m, marking the transition toward the higher alpine environment of the Annapurna Sanctuary.\n\nThis is a relatively short trekking day compared with the longer lower-valley sections, but the increasing elevation makes a steady pace important.',
            price: 'NPR 2,200 (Accommodation: 600, Meals: 1,600)',
            coordinates: [83.893, 28.4933],
          },
        },
        {
          order: 4,
          dayNumber: 4,
          title: 'Deurali → Machhapuchhre Base Camp (MBC)',
          data: {
            altitude: '3,700m',
            duration: '3-4 hrs',
            distance: '5km',
            description:
              'Above Deurali, the forest gradually thins as the route enters more exposed alpine terrain. The valley opens toward the upper Modi Khola, with rocky slopes and glacial features replacing much of the vegetation found at lower elevations. The trail continues toward the entrance of the Annapurna Sanctuary.\n\nThe route reaches Machhapuchhre Base Camp at approximately 3,700 m, positioned beneath the distinctive fluted face of Machhapuchhre (Fishtail). From here, the surrounding peaks become increasingly prominent and the landscape takes on a distinctly high-altitude character.',
            price: 'NPR 2,400 (Accommodation: 800, Meals: 1,600)',
            coordinates: [83.9060408, 28.5132035],
          },
        },
        {
          order: 5,
          dayNumber: 5,
          title: 'MBC → Annapurna Base Camp (ABC)',
          data: {
            altitude: '4,130m',
            duration: '2-3 hrs',
            distance: '3-4km',
            description:
              'The trail continues gently upward from Machhapuchhre Base Camp into the heart of the Annapurna Sanctuary. With the forest now completely behind you, the route crosses open alpine and glacial terrain while the surrounding peaks become increasingly dominant.\n\nThe trail reaches Annapurna Base Camp at 4,130 m, where the valley opens into a natural amphitheatre surrounded by the Annapurna massif. Depending on weather and visibility, views can include Annapurna I, Annapurna South, Hiunchuli, Machhapuchhre, and other surrounding peaks.',
            price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
            isDestination: true,
            coordinates: [83.8777275, 28.5308115],
          },
        },
        {
          order: 6,
          dayNumber: 6,
          title: 'ABC → Bamboo (Descent)',
          data: {
            altitude: '2,310m',
            duration: '6-7 hrs',
            distance: '13-16km',
            description:
              'The route retraces the trail from Annapurna Base Camp through Machhapuchhre Base Camp, Deurali, Himalaya, and Dovan before continuing toward Bamboo. The long descent brings a rapid change in elevation and landscape, with the open alpine environment gradually giving way to forest.\n\nAlthough the route is descending, the uneven trail and repeated stone steps can make this one of the more physically demanding days. By the time you reach Bamboo at approximately 2,310 m, the warmer and greener forest environment provides a noticeable contrast to the high Sanctuary.',
            price: 'NPR 2,600 (Accommodation: 800, Meals: 1,800)',
            coordinates: [83.8569, 28.457],
          },
        },
        {
          order: 7,
          dayNumber: 7,
          title: 'Bamboo → Jhinu Danda & Drive → Pokhara',
          data: {
            altitude: '1,780m',
            duration: '5-6 hrs trek + 2-3 hrs drive',
            distance: '10-11km',
            description:
              'The final trekking section continues through the forest toward Sinuwa before climbing back toward Chhomrong. From Chhomrong, the trail follows a long staircase down toward Jhinu Danda, where the trekking route leaves the higher valley. The natural hot springs below Jhinu Danda provide an optional stop before the final drive to Pokhara.\n\nFrom the forested lower valley, the route returns to the roadhead and continues by vehicle toward Pokhara, bringing the seven-day journey into the Annapurna Sanctuary to an end.',
            price: 'NPR 3,000 (Transport: 2,000, Meals: 1,000)',
            coordinates: [83.8241, 28.4096],
          },
        },
      ],
    },
  },

  'gokyo-valley-trek': {
    slug: 'gokyo-valley-trek',
    name: 'Gokyo Valley Trek',
    type: 'TREK',
    status: 'PUBLISHED',
    shortDescription:
      'Trek through the Gokyo Valley to a series of high-altitude glacial lakes, alongside the Ngozumpa Glacier, and climb Gokyo Ri at 5,357 m for expansive Himalayan views.',
    durationDays: 11,
    difficulty: 'CHALLENGING',
    maxElevationM: 5357,
    peakSeason: [3, 4, 5, 9, 10, 11],
    region: 'Khumbu',
    startPoint: 'Kathmandu',
    interest: ['nature', 'mountains'],
    activity: ['trekking'],
    isActive: true,
    isPopular: false,
    details: [
      {
        key: 'overview',
        title: 'Overview',
        description: 'A quick look at what awaits on the trail.',
        content:
          "The Gokyo Valley Trek takes you from Kathmandu into the Khumbu through Lukla, Namche Bazaar and the Dudh Koshi valley before turning toward the Gokyo Valley. As you climb higher, forest gives way to alpine terrain, glacial landscapes and the turquoise Gokyo Lakes.\n\nGokyo village sits beside Dudh Pokhari, the third and largest of the main Gokyo Lakes. From here, the trail climbs to Gokyo Ri, a high viewpoint at approximately 5,357 m. On a clear day, you can look across the Gokyo Lakes and surrounding glaciers toward some of the world's highest peaks. Nepal Tourism Board specifically identifies Gokyo Ri as a viewpoint for the surrounding peaks and lakes.\n\nThe Gokyo Lakes also have religious significance for Hindu and Buddhist communities and form part of the Gokyo and associated lakes Ramsar site.",
      },
      {
        key: 'tripFacts',
        title: 'Trip Facts',
        data: {
          type: 'TREK',
          flights: 'Kathmandu ⇄ Lukla',
          accommodation: 'Tea houses / lodges',
          routeType: 'Out and Back',
          permits:
            'Sagarmatha National Park Entry Permit · Khumbu Pasang Lhamu Rural Municipality Trek-Card',
        },
      },
      {
        key: 'expectations',
        title: 'What to Expect',
        description: 'Understand rhythms before you go',
        data: [
          {
            title: 'Four 8,000m Peaks from One Summit',
            description:
              'Gokyo Ri at 5,357m is the only viewpoint in Nepal from which Everest, Lhotse, Makalu, and Cho Oyu are all visible simultaneously, a four-peak panorama that the more famous Kala Patthar viewpoint on the EBC route cannot match.',
          },
          {
            title: 'The Gokyo Lakes',
            description:
              'Six glacial lakes ranging from 4,700m to 5,000m, designated a Ramsar Wetland Site in 2007 and considered sacred by Sherpa communities. The Third Lake (Dudh Pokhari) reflects Cho Oyu and the surrounding peaks in conditions that make photography feel almost unfair. The Fifth Lake, tucked in a remote bowl near Cho Oyu Base Camp, offers high-altitude solitude that is increasingly rare in the Khumbu.',
          },
          {
            title: 'The Ngozumpa Glacier',
            description:
              "Nepal's longest glacier at over 36km, visible from the valley floor as a vast grey river of ice and rock debris stretching from Cho Oyu toward Gokyo. Walking alongside the terminal moraine on the approach to Gokyo is one of the most dramatic pieces of trail in the Khumbu region and a visceral illustration of how quickly this glacier is retreating.",
          },
          {
            title: 'The Khumbu Without the Crowds',
            description:
              "Above Dole the Gokyo trail sees roughly 35% of EBC's trekker numbers. Above Machhermo that thins further. The lakes, the glacier, and the summit of Gokyo Ri carry the same mountain pedigree as anything on the EBC route without the queue.",
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
              'Heavy Snow Above 4,000m / Trail to Gokyo Ri May Be Closed',
          },
          {
            month: 'Feb',
            condition: 'Cold & Icy / Experienced High-Altitude Trekkers Only',
          },
          {
            month: 'Mar',
            condition: 'Spring Begins / Rhododendrons Below Namche in Bloom',
          },
          {
            month: 'Apr',
            condition: 'Stable Weather / Long Daylight / Peak Spring Season',
          },
          {
            month: 'May',
            condition:
              'Warm & Clear / Pre-Monsoon Views / Expedition Season on Cho Oyu',
          },
          {
            month: 'Jun',
            condition:
              'Monsoon Builds / Views Blocked / Trail Below Namche Slippery',
          },
          {
            month: 'Jul',
            condition:
              'Full Monsoon / Not Recommended / Landslide Risk Below 3,000m',
          },
          {
            month: 'Aug',
            condition: 'Peak Monsoon / High Risk / Avoid',
          },
          {
            month: 'Sep',
            condition:
              'Late-Monsoon / Fresh Air / Some Cloud Lingering / Quieter',
          },
          {
            month: 'Oct',
            condition: 'Crystal Clarity / Best Gokyo Ri Views / Peak Season',
          },
          {
            month: 'Nov',
            condition:
              'Excellent Visibility / Cold at Night / Fewer Trekkers than October',
          },
          {
            month: 'Dec',
            condition:
              'Very Cold Above 4,000m / Clear Skies / Almost Empty Trail',
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
        url: '/images/gokyo/gokyo.webp',
        alt: 'Turquoise Gokyo Lakes below the surrounding Himalayan peaks',
        type: 'HERO',
        metadata: {
          frontendId: 'img_01',
          order: null,
        },
      },
      {
        url: '/images/gokyo/gokyo1.webp',
        alt: 'High-altitude alpine terrain along the Gokyo valley',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_02',
          order: null,
        },
      },
      {
        url: '/images/gokyo/gokyo6.jpg',
        alt: 'The Gokyo Lakes beside the Ngozumpa Glacier',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_03',
          order: null,
        },
      },
      {
        url: '/images/gokyo/gokyo3.webp',
        alt: 'Gokyo village beside Dudh Pokhari',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_04',
          order: null,
        },
      },
      {
        url: '/images/gokyo/gokyo4.webp',
        alt: 'Dudh Koshi valley and suspension bridges below Namche',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_05',
          order: null,
        },
      },
      {
        url: '/images/gokyo/gokyo5.jpg',
        alt: 'Namche Bazaar and the Khumbu approach',
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
          title: 'Kathmandu to Lukla to Phakding',
          data: {
            altitude: '2,610m',
            duration: 'Flight + 3-4 hours trek',
            distance: '8km',
            description:
              'The journey begins with a flight toward Lukla, the main gateway for this route. Depending on current flight operations, departures may be arranged from Kathmandu or Ramechhap. Flight schedules can change with weather and operational conditions, so your departure airport and timing should be confirmed before the trek.\n\nAfter landing at Lukla, you begin walking through the lower Khumbu, passing Chheplung and Ghat before following the Dudh Koshi toward Phakding. The relatively short first walking day gives you time to settle into the trail and adjust your pace.',
            price: 'NPR 2,500 (Accommodation: 1,000, Meals: 1,500)',
            coordinates: [86.71228, 27.73926],
          },
        },
        {
          order: 2,
          dayNumber: 2,
          title: 'Phakding to Namche Bazaar',
          data: {
            altitude: '3,440m',
            duration: '6-7 hours',
            distance: '11km',
            description:
              'From Phakding, you follow the Dudh Koshi River toward Monjo, crossing suspension bridges and passing through small settlements along the valley. The route enters Sagarmatha National Park at the Monjo checkpoint.\n\nThe character of the day changes after the river crossing below Namche. A sustained climb through pine and rhododendron forest leads toward Namche Bazaar at approximately 3,440 m. Take this ascent steadily; it is one of the first substantial elevation gains of the trek.',
            price: 'NPR 3,700 (Accommodation: 1,200, Meals: 2,500)',
            coordinates: [86.71119, 27.80231],
          },
        },
        {
          order: 3,
          dayNumber: 3,
          title: 'Acclimatization Day: Namche Bazaar',
          data: {
            altitude: '3,440m',
            duration: '3-4 hours',
            distance: '6km',
            note: 'Acclimatization Day',
            description:
              'A second night at Namche Bazaar (3,440 m) gives you time to adjust before the route climbs higher. A short daytime hike is useful for staying active while returning to Namche to sleep at the same elevation.\n\nRather than treating the day as complete rest, a short hike to a higher elevation followed by a return to Namche can help you stay active while keeping your sleeping elevation unchanged. One popular option is the viewpoint area around the Everest View Hotel at approximately 3,880 m.',
            price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
            coordinates: [86.71119, 27.80231],
          },
        },
        {
          order: 4,
          dayNumber: 4,
          title: 'Namche Bazaar to Dole',
          data: {
            altitude: '4,038m',
            duration: '5-6 hours',
            distance: '10km',
            description:
              'The route toward Gokyo separates from the main Everest Base Camp corridor around Kyanjuma. From there, the path climbs toward Mong La, then descends toward Phortse Tenga before climbing again through rhododendron and birch forest.\n\nAt around 4,038 m, Dole is a small high-altitude settlement surrounded by open mountain terrain. You are now sleeping considerably higher than at Namche, so a steady pace becomes increasingly important.',
            price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
            coordinates: [86.74148, 27.86848],
          },
        },
        {
          order: 5,
          dayNumber: 5,
          title: 'Dole to Machhermo',
          data: {
            altitude: '4,470m',
            duration: '3-4 hours',
            distance: '7km',
            note: 'Short day by design, critical acclimatization gain',
            description:
              'The vegetation becomes increasingly sparse as you climb out of Dole. Juniper and alpine pasture replace the denser forests lower in the valley, while the surrounding peaks become more prominent.\n\nThe walk to Machhermo at approximately 4,470 m is shorter than the previous day, but the continued elevation gain makes pacing important. Once you arrive, the afternoon is best kept easy so your body can adjust before the climb toward Gokyo.',
            price: 'NPR 3,700 (Accommodation: 1,200, Meals: 2,500)',
            coordinates: [86.7215, 27.90763],
          },
        },
        {
          order: 6,
          dayNumber: 6,
          title: 'Machhermo to Gokyo',
          data: {
            altitude: '4,750m',
            duration: '4-5 hours',
            distance: '7km',
            description:
              'From Machhermo, the landscape opens toward the glacial terrain around the Ngozumpa Glacier. The route passes through Pangka before approaching the Gokyo lake system.\n\nThe first lakes appear as you continue north, followed by the second and third lakes. Gokyo village sits beside Dudh Pokhari, the third lake, at approximately 4,750 m. After reaching the village, the afternoon is best spent resting and taking in the high-altitude surroundings.',
            price: 'NPR 5,000 (Accommodation: 2,000, Meals: 3,000)',
            coordinates: [86.69459, 27.95409],
          },
        },
        {
          order: 7,
          dayNumber: 7,
          title: 'Gokyo Ri · Fourth & Fifth Lakes',
          data: {
            altitude: '5,357m',
            duration: '5-6 hours',
            distance: '10km',
            note: 'Gokyo Ri is the highest point of the trek. Start early and keep your pace controlled.',
            description:
              "An early start takes you toward Gokyo Ri at 5,357 m, the highest point of the trek. The climb is steep and demanding at this elevation, so allow plenty of time and keep your pace controlled.\n\nFrom the viewpoint, clear conditions can reveal Everest, Lhotse, Makalu and Cho Oyu among the surrounding Himalayan peaks, with the Gokyo Lakes and Ngozumpa Glacier spread below. After returning to Gokyo, you can continue toward the Fourth and Fifth Lakes if conditions, energy and your guide's assessment make the extension appropriate.",
            price: 'NPR 4,000 (Accommodation: 1,500, Meals: 2,500)',
            isDestination: true,
            coordinates: [86.69459, 27.95409],
          },
        },
        {
          order: 8,
          dayNumber: 8,
          title: 'Gokyo to Dole',
          data: {
            altitude: '4,038m',
            duration: '5-6 hours',
            distance: '11km',
            description:
              'After the Gokyo Ri excursion, you begin the descent through the valley. The Gokyo Lakes and Ngozumpa Glacier gradually fall behind as the trail retraces the route toward Machhermo and Dole.\n\nThe drop in elevation makes the air feel noticeably easier, although the descent itself can be demanding on tired legs. Take care on rocky sections and allow yourself time to reach Dole at around 4,038 m.',
            price: 'NPR 4,000 (Accommodation: 1,500, Meals: 2,500)',
            coordinates: [86.74148, 27.86848],
          },
        },
        {
          order: 9,
          dayNumber: 9,
          title: 'Dole to Namche Bazaar',
          data: {
            altitude: '3,440m',
            duration: '6-7 hours',
            distance: '12km',
            description:
              'The return to Namche takes you back through Phortse Tenga and Mong La, with a mixture of descents and shorter climbs along the hillside. The forest becomes denser again as you lose altitude.\n\nEventually, the route reconnects with the familiar approach to Namche Bazaar at approximately 3,440 m. After several nights in the high valley, the lower elevation and more developed services in Namche provide a noticeable change.',
            price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
            coordinates: [86.71119, 27.80231],
          },
        },
        {
          order: 10,
          dayNumber: 10,
          title: 'Namche Bazaar to Lukla',
          data: {
            altitude: '2,860m',
            duration: '7-8 hours',
            distance: '18km',
            description:
              "Your final trekking day retraces the Dudh Koshi valley toward Lukla. You pass through Monjo and Phakding, crossing suspension bridges and moving through increasingly green forest as the elevation drops.\n\nThe walk is still substantial despite the lower altitude. After reaching Lukla at approximately 2,860 m, you can use the evening to rest and confirm the following day's flight arrangements.",
            price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
            coordinates: [86.7314, 27.6868],
          },
        },
        {
          order: 11,
          dayNumber: 11,
          title: 'Lukla to Kathmandu',
          data: {
            altitude: '1,400m',
            duration: '35-min flight + transfer',
            description:
              'Your trek ends with the flight from Lukla to Kathmandu. Flight operations depend on weather and operational conditions in the region, so departure times can change.\n\nAllow flexibility in your wider travel plans, particularly if you have an international flight or other fixed connection after returning to Kathmandu.',
            price: 'NPR 1,500 (Meals: 1,500)',
            coordinates: [85.324, 27.7172],
          },
        },
      ],
    },
  },

  'ghorepani-poon-hill-trek': {
    slug: 'ghorepani-poon-hill-trek',
    name: 'Ghorepani Poon Hill Trek',
    type: 'TREK',
    status: 'PUBLISHED',
    shortDescription:
      'Trek through the lower Annapurna region, passing Gurung and Magar villages, rhododendron forests, and terraced fields on the way to Poon Hill.',
    durationDays: 5,
    difficulty: 'MODERATE',
    maxElevationM: 3210,
    peakSeason: [3, 4, 5, 9, 10, 11],
    region: 'ANNAPURNA',
    startPoint: 'Pokhara',
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
          'The Ghorepani Poon Hill trek follows the classic trail through the lower foothills of the Annapurna region, beginning with a drive from Pokhara toward the trailhead at Birethanti or Nayapul. From there, the route ascends through terraced farmland, traditional Magar settlements, and dense oak and rhododendron forests toward Ulleri and Ghorepani. The trail steadily climbs through the Modi and Bhurungdi Khola valleys, where the landscape transitions from cultivated lower hills to rich temperate forest.\n\nAs the route reaches Ghorepani, the surrounding forest gives way to panoramic views of the Annapurna and Dhaulagiri mountain ranges. An early morning ascent leads to the summit of Poon Hill at 3,210 m, providing panoramic mountain views before the route descends through Tadapani and the historic Gurung village of Ghandruk. After traversing dense forests and scenic terraced hillsides, the trek descends back toward Birethanti before returning to Pokhara.',
      },
      {
        key: 'tripFacts',
        title: 'Trip Facts',
        data: {
          type: 'TREK',
          flights: 'None',
          accommodation: 'Tea House',
          routeType: 'Circuit',
          permits: 'Annapurna Conservation Area Permit, TIMS',
        },
      },
      {
        key: 'expectations',
        title: 'What to Expect',
        description: 'Understand rhythms before you go',
        data: [
          {
            title: 'The Poon Hill Panorama',
            description:
              'One of the most celebrated sunrise viewpoints in the Himalayas: Dhaulagiri, Annapurna I, Annapurna South, Nilgiri, and Machhapuchhre all visible across 180 degrees of horizon as first light turns the snowfields gold.',
          },
          {
            title: 'Rhododendron Forests',
            description:
              'The ancient forest between Banthanti and Ghorepani is one of the densest rhododendron forests in Nepal, in March and April the canopy turns a deep crimson and pink, blooming in near-silence above the trail.',
          },
          {
            title: 'Magar and Gurung Villages',
            description:
              'Trek through traditional hill communities with a proud Gurkha military heritage stone-flagged lanes, prayer wheels, and the Gurung Museum in Ghandruk offer a genuine window into Himalayan culture.',
          },
          {
            title: 'Accessible Himalayan Adventure',
            description:
              'At 3,210m maximum elevation with well-maintained stone-paved trails, this trek is achievable for reasonably fit beginners while delivering mountain views that rival anything Nepal has to offer.',
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
              'Cold at Ghorepani / Possible Snow / Manageable with Good Gear',
          },
          {
            month: 'Feb',
            condition: 'Cold & Quiet / No Rhododendron Bloom Yet',
          },
          {
            month: 'Mar',
            condition: 'Rhododendron Season Begins / Stunning Forest Colour',
          },
          {
            month: 'Apr',
            condition: 'Peak Bloom / Best Forest Colour / Busy but Worth It',
          },
          {
            month: 'May',
            condition: 'Warm & Clear / Pre-Monsoon / Late Bloom at Altitude',
          },
          {
            month: 'Jun',
            condition: 'Monsoon Begins / Slippery Trails / Leeches',
          },
          {
            month: 'Jul',
            condition: 'Heavy Rain / Views Blocked / Not Recommended',
          },
          {
            month: 'Aug',
            condition: 'Peak Monsoon / Wet & Muddy / Not Recommended',
          },
          {
            month: 'Sep',
            condition: 'Late-Monsoon Green / Quieter / Some Residual Cloud',
          },
          {
            month: 'Oct',
            condition:
              'Sharpest Visibility / Most Reliable Sunrise / Peak Season',
          },
          {
            month: 'Nov',
            condition: 'Crystal Clear Skies / Cool & Stable / Excellent Views',
          },
          {
            month: 'Dec',
            condition:
              'Cold & Quiet / Light Snow at Ghorepani / Beautiful & Uncrowded',
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
        url: '/images/poonhill/poonhill5.webp',
        alt: 'Poon Hill sunrise panorama with Dhaulagiri and Annapurna',
        type: 'HERO',
        metadata: {
          frontendId: 'img_01',
          order: null,
        },
      },
      {
        url: '/images/poonhill/poonhill.webp',
        alt: 'Poon Hill, Histan Mandali',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_02',
          order: null,
        },
      },
      {
        url: '/images/poonhill/poonhill1.webp',
        alt: 'Poonhill nepal',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_03',
          order: null,
        },
      },
      {
        url: '/images/poonhill/poonhill1.webp',
        alt: 'Poonhill nepal',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_04',
          order: null,
        },
      },
      {
        url: '/images/poonhill/poonhill3.webp',
        alt: 'Poonhill nepal',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_05',
          order: null,
        },
      },
      {
        url: '/images/poonhill/poonhill4.webp',
        alt: 'Ghorepani Poonhill nepal',
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
          title: 'Pokhara → Birethanti → Tikhedhunga / Ulleri',
          data: {
            altitude: '1,960m',
            duration: '4-5 hrs',
            distance: '10km',
            description:
              'A morning drive from Pokhara takes you toward Nayapul and Birethanti, where the trekking route follows the Bhurungdi Khola through terraced farmland and small settlements. From Tikhedhunga, the trail becomes steeper as you climb a long series of stone steps toward Ulleri. The sustained ascent gains significant elevation, with occasional openings offering views toward Annapurna South and Hiunchuli on clear days.\n\nThe day ends in Ulleri at approximately 1,960 m, a traditional Magar settlement and common overnight stop on the Poon Hill route.',
            price:
              'NPR 3,500 (Transport: 1,500, Accommodation: 500, Meals: 1,500)',
            coordinates: [83.7164, 28.3766],
          },
        },
        {
          order: 2,
          dayNumber: 2,
          title: 'Ulleri → Banthanti → Ghorepani',
          data: {
            altitude: '2,860m',
            duration: '5-6 hrs',
            distance: '8km',
            description:
              'The trail leaves Ulleri and enters a dense forest of oak, magnolia, and rhododendron. The route continues on a steady incline, passing small teahouses and streams around Banthanti and Nangethanti as you move deeper into the forest. The forest canopy becomes thicker and the air cooler with elevation.\n\nThe final section climbs through the upper woodland before emerging at Ghorepani, approximately 2,860 m, where openings along the ridge can offer views toward Dhaulagiri and the Annapurna range.',
            price: 'NPR 2,500 (Accommodation: 700, Meals: 1,800)',
            coordinates: [83.6997, 28.4006],
          },
        },
        {
          order: 3,
          dayNumber: 3,
          title: 'Ghorepani → Poon Hill → Tadapani',
          data: {
            altitude: '3,210m',
            duration: '6-7 hrs',
            distance: '12km',
            description:
              'The day begins before dawn with a steep climb up the stone trail to Poon Hill at 3,210 m, the highest point of the trek. As morning light reaches the mountains, the summit ridge opens to wide views across Dhaulagiri I, Annapurna I, Annapurna South, Machhapuchhre, and Nilgiri.\n\nAfter descending to Ghorepani for breakfast, the route follows a high ridge through pine and rhododendron forest toward Deurali Pass. The trail then descends through a narrow forested section before a short climb brings you to Tadapani at approximately 2,630 m.',
            price: 'NPR 2,500 (Accommodation: 700, Meals: 1,800)',
            isDestination: true,
            coordinates: [83.76527, 28.39652],
          },
        },
        {
          order: 4,
          dayNumber: 4,
          title: 'Tadapani → Ghandruk',
          data: {
            altitude: '1,940m',
            duration: '3-4 hrs',
            distance: '7km',
            description:
              'From Tadapani, the route descends through rhododendron and oak forest. The trail gradually loses elevation as the woodland gives way to more open slopes, terraces, and scattered settlements.\n\nThe route eventually reaches Ghandruk at approximately 1,940 m, a traditional Gurung village in Kaski. Stone-paved lanes, traditional houses, and the Gurung Museum provide a cultural contrast to the forest sections of the previous days, while clear openings can offer views toward Annapurna South, Hiunchuli, and Machhapuchhre.',
            price: 'NPR 2,500 (Accommodation: 800, Meals: 1,700)',
            coordinates: [83.80779, 28.37686],
          },
        },
        {
          order: 5,
          dayNumber: 5,
          title: 'Ghandruk → Birethanti → Pokhara',
          data: {
            altitude: '1,940m',
            duration: '4-5 hrs',
            distance: '10km',
            description:
              'The final day descends from Ghandruk through terraced fields and small stone hamlets toward the Modi Khola valley. The trail follows stone stairways down the hillside, passing local farms and rural homesteads along the way. After reaching the valley floor, the route follows the river toward Birethanti, where the trekking section concludes.\n\nFrom Birethanti, a short drive returns you to Pokhara, completing the five-day Ghorepani–Poon Hill circuit.',
            price: 'NPR 2,000 (Transport: 1,000, Meals: 1,000)',
            coordinates: [83.7484, 28.2826],
          },
        },
      ],
    },
  },

  'mardi-himal-trek': {
    slug: 'mardi-himal-trek',
    name: 'Mardi Himal Trek',
    type: 'TREK',
    status: 'PUBLISHED',
    shortDescription:
      'Trek along high ridges and through rhododendron forests in the Annapurna region, leading to the base of Mardi Himal directly below Machhapuchhre.',
    durationDays: 5,
    difficulty: 'MODERATE',
    maxElevationM: 4500,
    peakSeason: [3, 4, 5, 9, 10, 11],
    region: 'ANNAPURNA',
    startPoint: 'Pokhara',
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
          'The Mardi Himal trek follows a ridge trail through the eastern reaches of the Annapurna region, starting with a drive from Pokhara to the trailhead at Kande or Simrung. From the trailhead, the route ascends through forests of oak, maple, and rhododendron toward Australian Camp and Pothana before continuing along the forested ridgelines to Forest Camp. The trail steadily gains elevation while moving away from the busier main routes of the region.\n\nAs the route continues beyond Low Camp and Badal Danda, the tree line drops away to reveal open ridge walking with views of Annapurna South, Hiunchuli, and Machhapuchhre. The trail reaches High Camp before making the final early morning ascent along the narrow ridge to Mardi Himal Base Camp at 4,500 m. After taking in close views of the surrounding peaks and glaciers, the route descends back through Middle Camp and Sidhing before driving back to Pokhara.',
      },
      {
        key: 'tripFacts',
        title: 'Trip Facts',
        data: {
          type: 'TREK',
          flights: 'None',
          accommodation: 'Tea houses / mountain lodges',
          routeType: 'Teardrop ridge trek',
          permits: 'Annapurna Conservation Area Permit, TIMS',
        },
      },
      {
        key: 'expectations',
        title: 'What to Expect',
        description: 'Understand rhythms before you go',
        data: [
          {
            title: 'Iconic Machapuchare Views',
            description:
              "Witness Machapuchare's perfect pyramid filling the sky at close range alongside the full Annapurna massif, a perspective most Annapurna trekkers never see.",
          },
          {
            title: 'Gurung Village Culture',
            description:
              'Pass through traditional Gurung settlements like Dhampus and Sidhing, experiencing authentic Himalayan hospitality far from the main trekking crowds.',
          },
          {
            title: 'The Ridge Experience',
            description:
              'Walk an exposed alpine spine with the Modi Khola valley dropping away to the south and the Annapurna Sanctuary walls rising to the north, one of the finest ridge walks in Nepal.',
          },
          {
            title: 'Uncrowded Solitude',
            description:
              'Above Forest Camp the trail grows quiet, and at High Camp and Base Camp you may find yourself nearly alone with a panorama that rivals anything on the busier Annapurna routes.',
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
            condition: 'Snowbound at High Camp / Experienced Trekkers Only',
          },
          {
            month: 'Feb',
            condition: 'Cold & Icy Above 3,500m / Very Quiet Trails',
          },
          {
            month: 'Mar',
            condition: 'Rhododendrons in Bloom / Best Forest Colour',
          },
          {
            month: 'Apr',
            condition: 'Stable Mornings / Peak Season / Ideal Conditions',
          },
          {
            month: 'May',
            condition: 'Warm & Clear / Pre-Monsoon Views',
          },
          {
            month: 'Jun',
            condition: 'Monsoon Begins / Slippery Trails / Leeches',
          },
          {
            month: 'Jul',
            condition: 'Heavy Rain / Views Blocked / Not Recommended',
          },
          {
            month: 'Aug',
            condition: 'Peak Monsoon / Dangerous Trail Conditions',
          },
          {
            month: 'Sep',
            condition: 'Late-Monsoon Green / Quieter / Some Cloud',
          },
          {
            month: 'Oct',
            condition: 'Crystal Clear Skies / Sharpest Mountain Views',
          },
          {
            month: 'Nov',
            condition: 'Cool & Stable / Excellent Visibility / Fewer Crowds',
          },
          {
            month: 'Dec',
            condition:
              'Cold but Clear / Very Few Trekkers / Light Snow at High Camp',
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
        url: '/images/mardi/mardi.webp',
        alt: 'Mardi Himal Base Camp with Machapuchare',
        type: 'HERO',
        metadata: {
          frontendId: 'img_01',
          order: null,
        },
      },
      {
        url: '/images/mardi/mardi1.webp',
        alt: 'Australian Camp sunset over Annapurna range',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_02',
          order: null,
        },
      },
      {
        url: '/images/mardi/mardi2.webp',
        alt: 'Rhododendron forest trail to Forest Camp',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_03',
          order: null,
        },
      },
      {
        url: '/images/mardi/mardi4.jpg',
        alt: 'Exposed ridge walk between Upper Camp and High Camp',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_04',
          order: null,
        },
      },
      {
        url: '/images/mardi/mardi6.jpg',
        alt: 'Machapuchare pyramid from High Camp',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_05',
          order: null,
        },
      },
      {
        url: '/images/mardi/mardi5.jpg',
        alt: 'Sidhing Gurung village in the Modi Khola valley',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_06',
          order: null,
        },
      },
      {
        url: '/images/mardi/mardi7.jpeg',
        alt: 'Sidhing Gurung village in the Modi Khola valley',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_07',
          order: null,
        },
      },
      {
        url: '/images/mardi/mardi8.jpeg',
        alt: 'Sidhing Gurung village in the Modi Khola valley',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_08',
          order: null,
        },
      },
      {
        url: '/images/mardi/mardi9.jpeg',
        alt: 'Sidhing Gurung village in the Modi Khola valley',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_09',
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
          title: 'Pokhara → Kande → Forest Camp',
          data: {
            altitude: '2,550m',
            duration: '5-6 hrs',
            distance: '11km',
            description:
              'The journey begins with a drive from Pokhara toward the trailhead at Kande. From Kande, the trail starts with an uphill climb through stone paths and terraced fields toward Australian Camp, opening to initial views across the Pokhara valley and Annapurna range. The route continues along a gentle forested trail through Pothana, where park permits are checked.\n\nBeyond Pothana, the trail leaves the main trekking route and enters a quieter, denser section of forest, winding gradually upward through oak and rhododendron trees until reaching Forest Camp (Kokar) at approximately 2,550 m.',
            price:
              'NPR 2,700 (Accommodation: 600, Meals: 1,600, Transport: 500)',
            coordinates: [83.8449, 28.3593],
          },
        },
        {
          order: 2,
          dayNumber: 2,
          title: 'Forest Camp → Badal Danda',
          data: {
            altitude: '3,210m',
            duration: '4-5 hrs',
            distance: '8km',
            description:
              'The trail leaves Forest Camp and continues its steady climb through dense moss-covered forest. As the elevation increases, the vegetation begins to shift, with rhododendron and birch trees dominating the higher forest section toward Low Camp.\n\nBeyond Low Camp, the trail emerges above the tree line onto an open ridgeline. The landscape changes rapidly from dense woodland to sub-alpine ridge walking, offering unobstructed views of Machhapuchhre and Annapurna South. The day ends at Badal Danda at approximately 3,210 m, set high on the ridge above the clouds.',
            price: 'NPR 2,500 (Accommodation: 700, Meals: 1,800)',
            coordinates: [83.8545, 28.415],
          },
        },
        {
          order: 3,
          dayNumber: 3,
          title: 'Badal Danda → High Camp',
          data: {
            altitude: '3,580m',
            duration: '3-4 hrs',
            distance: '4.5km',
            description:
              'The route leaves Badal Danda and follows the narrow grassy ridge toward High Camp. Walking along the exposed spine of the ridge, clear openings on either side offer sweeping views of the Modi Khola valley to the west and the Mardi Khola valley to the east. As you gain elevation, the terrain becomes rockier and more alpine, with low shrubs replacing the alpine grasses.\n\nThe short walking day allows time for acclimatization and rest upon reaching High Camp at approximately 3,580 m, preparing for the early morning ascent to the base camp.',
            price: 'NPR 2,800 (Accommodation: 800, Meals: 2,000)',
            coordinates: [83.8668, 28.4329],
          },
        },
        {
          order: 4,
          dayNumber: 4,
          title: 'High Camp → Mardi Himal Base Camp → Badal Danda / Low Camp',
          data: {
            altitude: '4,500m',
            duration: '7-8 hrs',
            distance: '12km',
            description:
              'The day begins before dawn with a steep climb along the narrow, rocky ridgeline toward Mardi Himal Upper Viewpoint and Base Camp. As the morning light hits the surrounding sanctuary, the trail passes rocky outcrops before reaching Mardi Himal Base Camp at 4,500 m, sitting directly beneath the towering face of Machhapuchhre.\n\nAfter spending time at the base camp taking in views of Annapurna I, Annapurna South, and Hiunchuli, the route retraces its path down the ridge back to High Camp for breakfast. The trail then continues descending along the familiar ridge to spend the night at Badal Danda or Low Camp at approximately 2,970 m.',
            price: 'NPR 2,500 (Accommodation: 700, Meals: 1,800)',
            coordinates: [83.895, 28.46],
          },
        },
        {
          order: 5,
          dayNumber: 5,
          title: 'Low Camp → Sidhing → Pokhara',
          data: {
            altitude: '2,970m',
            duration: '4-5 hrs',
            distance: '9km',
            description:
              'The final day leaves the high ridge trail and takes a steep descent through dense rhododendron and oak forest toward the valley floor. The trail drops rapidly through shaded woodland before emerging into the terraced fields and traditional hamlets surrounding Sidhing village.\n\nUpon reaching Sidhing at approximately 1,700 m, the trekking portion concludes. From Sidhing, a local jeep drive follows the river valley back toward Lumre and connects to the main highway returning to Pokhara.',
            price: 'NPR 2,000 (Meals: 1,000, Transport: 1,000)',
            coordinates: [83.8747, 28.3848],
          },
        },
      ],
    },
  },

  'shey-phoksundo': {
    slug: 'shey-phoksundo',
    name: 'Shey Phoksundo Trek',
    type: 'TREK',
    status: 'PUBLISHED',
    shortDescription:
      'Journey into the remote Lower Dolpo region to the turquoise waters of Lake Phoksundo, ancient Bon monasteries, and dramatic alpine landscapes.',
    durationDays: 8,
    difficulty: 'MODERATE_CHALLENGING',
    maxElevationM: 3660,
    peakSeason: [3, 4, 5, 9, 10, 11],
    region: 'DOLPO',
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
          "The Shey Phoksundo Trek leads into the remote wilderness of Lower Dolpo, beginning with a mountain flight from Nepalgunj to Juphal. From Juphal, the route descends toward the Thuli Bheri River before turning into the Suligad Valley and entering Shey-Phoksundo National Park. The trail follows the river through pine, cedar, and bamboo forests, crossing suspension bridges and passing through dramatic gorges and small mountain settlements as it climbs toward Chhepka and Jharana.\n\nBeyond Jharana, the landscape becomes more rugged as the route enters the Phoksundo Valley. The trail reaches Ringmo, a traditional settlement beside Phoksundo Lake, where the deep-blue waters lie at approximately 3,611 m beneath steep cliffs and mountain slopes. A day around Ringmo allows time to explore the lake and experience the area's distinctive Bon cultural heritage, including Thashung Gompa, a historic monastery associated with the Bon tradition and said to be around 900 years old. After exploring the lake and surrounding village, the route retraces the valley through the forests and river gorges toward Juphal.",
      },
      {
        key: 'tripFacts',
        title: 'Trip Facts',
        data: {
          type: 'TREK',
          flights: 'Kathmandu ⇄ Nepalgunj ⇄ Juphal',
          accommodation: 'Tea houses / Homestays / Tents',
          routeType: 'Out and Back',
          permits:
            'Shey Phoksundo National Park Permit, Lower Dolpo Restricted Area Permit, TIMS',
        },
      },
      {
        key: 'expectations',
        title: 'What to Expect',
        description: 'Understand rhythms before you go',
        data: [
          {
            title: 'Turquoise Phoksundo Lake',
            description:
              'Reach the deep-blue waters of Phoksundo Lake at approximately 3,611 m, a distinctive Y-shaped alpine freshwater lake within Shey-Phoksundo National Park, framed by steep cliffs and mountain slopes.',
          },
          {
            title: 'Bon Cultural Heritage',
            description:
              'Experience Lower Dolpo’s distinctive Bon tradition, including Thashung Gompa, a historic monastery said to be around 900 years old, in the traditional settlement of Ringmo beside the lake.',
          },
          {
            title: 'Remote Lower Dolpo Wilderness',
            description:
              'Trek into the remote valleys of Lower Dolpo, following river gorges through pine, cedar, and bamboo forests while passing dramatic gorges and small mountain settlements.',
          },
          {
            title: 'Suligad Waterfall',
            description:
              'Witness the Suligad Waterfall, where water from the lake drops approximately 167 m through the gorge below, and enjoy views across the Phoksundo Valley.',
          },
          {
            title: 'Shey-Phoksundo National Park',
            description:
              'Travel through Shey-Phoksundo National Park, home to blue sheep, Himalayan tahr, musk deer, and rare wildlife including the elusive snow leopard, though sightings are uncommon.',
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
              'Heavy snow / Closed teahouses / Freezing at Lake Phoksundo',
          },
          {
            month: 'Feb',
            condition: 'Winter cold / Snowbound trails / Very quiet',
          },
          {
            month: 'Mar',
            condition: 'Late winter / Cold trails / Trekkable with gear',
          },
          {
            month: 'Apr',
            condition: 'Winter easing / Clear skies / Shoulder season',
          },
          {
            month: 'May',
            condition:
              'Pleasant temps / Wildflowers along the Suligad / Clear lake views',
          },
          {
            month: 'Jun',
            condition:
              'Pleasant temps / Wildflowers along the Suligad / Clear lake views',
          },
          {
            month: 'Jul',
            condition:
              'Rain-shadow monsoon / Lush & green / Possible flight delays',
          },
          {
            month: 'Aug',
            condition:
              'Rain-shadow monsoon / Possible flight delays / Plan buffer',
          },
          {
            month: 'Sep',
            condition: 'Crystal clear skies / Vibrant foliage / Stable weather',
          },
          {
            month: 'Oct',
            condition:
              'Crystal clear skies / Sharper lake views / Stable weather',
          },
          {
            month: 'Nov',
            condition:
              'Cool & stable / Good visibility / Teahouses closing around Ringmo',
          },
          {
            month: 'Dec',
            condition:
              'Heavy snow / Closed teahouses / Freezing at Lake Phoksundo',
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
        url: '/images/shey/shey.webp',
        alt: 'Shey Phoksundo trek',
        type: 'HERO',
        metadata: {
          frontendId: 'img_01',
          order: null,
        },
      },
      {
        url: '/images/shey/shey1.webp',
        alt: 'Shey Phoksundo trek',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_02',
          order: null,
        },
      },
      {
        url: '/images/shey/shey2.webp',
        alt: 'Shey Phoksundo trek',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_03',
          order: null,
        },
      },
      {
        url: '/images/shey/shey3.webp',
        alt: 'Shey Phoksundo trek',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_04',
          order: null,
        },
      },
      {
        url: '/images/shey/shey4.webp',
        alt: 'Shey Phoksundo trek',
        type: 'GALLERY',
        metadata: {
          frontendId: 'img_05',
          order: null,
        },
      },
      {
        url: '/images/shey/shey5.webp',
        alt: 'Shey Phoksundo trek',
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
          title: 'Kathmandu → Nepalgunj → Juphal → Dunai',
          data: {
            altitude: '2,140 m · Dunai',
            duration: '3-4 hrs',
            distance: '10 km',
            description:
              'The journey begins with a flight from Kathmandu to Nepalgunj, followed by a mountain flight to Juphal in Dolpo. After arriving at the airstrip, the trek begins through cultivated hillsides and local settlements before descending toward the Thuli Bheri River. Following the river valley, the route reaches Dunai, the administrative headquarters of Dolpa District.\n\nAt around 2,140 m, Dunai provides a relatively low-elevation overnight stop before the trail climbs deeper into Lower Dolpo.',
            price:
              'NPR 20,500 - 29,500 (Accommodation: 700, Meals: 1,800, Transport: 18,000 - 27,000)',
            coordinates: [82.81999, 28.9799],
          },
        },
        {
          order: 2,
          dayNumber: 2,
          title: 'Dunai → Suligad → Chhepka',
          data: {
            altitude: '2,670 m · Chhepka',
            duration: '5-6 hrs',
            distance: '14 km',
            description:
              'From Dunai, the route follows the river valley toward Suligad, where the trail enters Shey-Phoksundo National Park. From here, the path turns into the Suligad Valley and begins climbing through increasingly forested terrain. The trail passes through pine, walnut, maple, and other vegetation, with river crossings, suspension bridges, and rocky sections adding variety to the day.\n\nThe route eventually reaches Chhepka, where the night is spent at approximately 2,670 m.',
            price: 'NPR 2,800 (Accommodation: 800, Meals: 2,000)',
            coordinates: [82.91257, 29.00037],
          },
        },
        {
          order: 3,
          dayNumber: 3,
          title: 'Chhepka → Rechi → Jharana Hotel',
          data: {
            altitude: '3,110 m · Jharana',
            duration: '5-6 hrs',
            distance: '12 km',
            description:
              'The route continues deeper into the valley, following the river through pine and birch forests and past rocky cliffs and small settlements. Sections of the trail cross or run close to the river before gradually gaining elevation.\n\nPassing through Rechi, the trail continues toward the Jharana area at approximately 3,110 m. The landscape becomes more open here, with views toward the Suligad Waterfall emerging as the route approaches the lake valley.',
            price: 'NPR 3,000 (Accommodation: 800, Meals: 2,200)',
            coordinates: [82.88615, 29.07787],
          },
        },
        {
          order: 4,
          dayNumber: 4,
          title: 'Jharana Hotel → Ringmo Village / Phoksundo Lake',
          data: {
            altitude: '3,660 m · Ringmo Village',
            duration: '4-5 hrs',
            distance: '9 km',
            description:
              'The trail descends briefly before climbing through birch and mountain forests toward the Phoksundo Valley. As the route gains the ridge, views open toward Suligad Waterfall, where water from the lake drops approximately 167 m through the gorge below.\n\nAfter crossing the Phoksundo River, the trail reaches Ringmo, a traditional settlement beside the lake. At approximately 3,611 m, Phoksundo Lake becomes the defining feature of the landscape, with its deep-blue waters surrounded by steep cliffs and mountain slopes.',
            price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
            isDestination: true,
            coordinates: [82.91075, 29.14148],
          },
        },
        {
          order: 5,
          dayNumber: 5,
          title: 'Exploration Day at Phoksundo Lake & Thashung Gompa',
          data: {
            altitude: '3,660 m · Ringmo Village',
            duration: '3-4 hrs (exploration)',
            distance: '6 km',
            description:
              'A full day around Ringmo and Phoksundo Lake provides time to experience the landscape at a slower pace. Lakeside walks and nearby viewpoints offer different perspectives of the distinctive Y-shaped lake and surrounding cliffs. NTB describes Phoksundo as a Y-shaped alpine freshwater lake within Shey-Phoksundo National Park. The day can also include a visit to Thashung Gompa, a historic monastery associated with the Bon tradition.\n\nVisitors should be respectful around religious sites and ask permission before taking photographs inside.',
            price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
            coordinates: [82.91075, 29.14148],
          },
        },
        {
          order: 6,
          dayNumber: 6,
          title: 'Ringmo Village → Chhepka',
          data: {
            altitude: '2,670 m · Chhepka',
            duration: '6-7 hrs',
            distance: '18 km',
            description:
              'After time around the lake, the return journey follows the same route back through the Phoksundo Valley. The trail descends through birch and conifer forests, passing the waterfall viewpoint before continuing along the river toward the lower valley.\n\nWith approximately 18-19 km to cover, this is one of the longer walking days. The substantial descent brings the route back toward the lower elevation of Chhepka, around 2,670 m.',
            price: 'NPR 2,800 (Accommodation: 800, Meals: 2,000)',
            coordinates: [82.91257, 29.00037],
          },
        },
        {
          order: 7,
          dayNumber: 7,
          title: 'Chhepka → Suligad → Juphal',
          data: {
            altitude: '2,475 m · Juphal',
            duration: '5-6 hrs',
            distance: '16 km',
            description:
              'The final trekking day retraces the route toward Suligad and the lower sections of Shey-Phoksundo National Park. The trail follows the river through forested terrain before continuing toward Dunai and then Juphal. The final stretch includes uphill sections as the route approaches Juphal, so despite the overall descent from Phoksundo, the day still involves sustained walking.\n\nAn overnight stay in Juphal provides some flexibility before the return flight.',
            price: 'NPR 2,600 (Accommodation: 800, Meals: 1,800)',
            coordinates: [82.819138, 28.985337],
          },
        },
        {
          order: 8,
          dayNumber: 8,
          title: 'Juphal → Nepalgunj → Kathmandu',
          data: {
            altitude: '1,400 m',
            description:
              'Board an early morning flight from Juphal airstrip to Nepalgunj, offering final aerial views over the rugged valleys of Dolpo. Connect in Nepalgunj for the flight back to Kathmandu, concluding the Shey Phoksundo journey.',
            price:
              'NPR 18,800 - 27,800 (Meals: 800, Transport: 18,000 - 27,000)',
            coordinates: [85.323961, 27.717245],
          },
        },
      ],
    },
  },

  'tilicho-lake-trek': {
    slug: 'tilicho-lake-trek',
    name: 'Tilicho Lake Trek',
    type: 'TREK',
    status: 'PUBLISHED',
    shortDescription:
      'Follow the Marsyangdi Valley into the high Manang region, then branch toward Tilicho Lake through dry alpine terrain, traditional mountain villages, and exposed trails. Reach Tilicho Lake at 4,919 m.',
    durationDays: 11,
    difficulty: 'CHALLENGING',
    maxElevationM: 4919,
    peakSeason: [3, 4, 5, 9, 10, 11],
    region: 'ANNAPURNA',
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
          'The Tilicho Lake Trek follows the Marsyangdi Valley from Kathmandu toward the high Manang region, passing through Besisahar, Chame, and Upper Pisang before reaching Manang. From here, the route leaves the main Annapurna Circuit corridor and heads toward Khangsar and Shree Kharka, where the landscape becomes drier and more exposed. Traditional stone-built villages, Buddhist cultural features, pine forests, and increasingly open mountain terrain mark the transition into the high Himalaya.\n\nAfter an acclimatization day in Manang, the route climbs above 4,000 m to Tilicho Base Camp before the final ascent to Tilicho Lake at 4,919 m. The lake excursion involves steep, rocky and exposed terrain, so an early start and careful pacing are important. The journey then retraces the approach through Shree Kharka and Manang before descending along the Marsyangdi Valley toward Kathmandu. This standalone route does not cross Thorong La; itineraries that continue over Thorong La are a different Annapurna Circuit-with-Tilicho variation.',
      },
      {
        key: 'tripFacts',
        title: 'Trip Facts',
        data: {
          type: 'TREK',
          flights: 'None',
          accommodation: 'Tea houses / lodges',
          routeType: 'Out and back',
          permits: 'Annapurna Conservation Area Permit, TIMS',
        },
      },
      {
        key: 'expectations',
        title: 'What to Expect',
        description: 'Understand rhythms before you go',
        data: [
          {
            title: 'Tilicho Lake at 4,919 m',
            description:
              'Stand beside one of the world’s highest alpine lakes, the highest point of the trek, reached through steep, rocky and exposed high-altitude terrain that demands an early start and careful pacing.',
          },
          {
            title: 'High Manang & the Marsyangdi Valley',
            description:
              'Follow the Marsyangdi Valley from Kathmandu into the high Manang region, passing traditional stone-built villages, Buddhist features, and pine forests before the landscape turns dry and exposed.',
          },
          {
            title: 'Khangsar & Shree Kharka',
            description:
              'Leave the main Annapurna Circuit corridor and climb through the drier Tilicho side valley, with open mountain terrain around Khangsar and Shree Kharka above 4,000 m.',
          },
          {
            title: 'A Standalone Route',
            description:
              'This itinerary does not cross Thorong La; it retraces the approach through Shree Kharka and Manang, then descends the Marsyangdi Valley back toward Kathmandu.',
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
              'Very cold / Possible snow or ice around the Tilicho route',
          },
          {
            month: 'Feb',
            condition: 'Very cold / Snow or ice around the Tilicho route',
          },
          {
            month: 'Mar',
            condition:
              'Warming conditions / Snow may remain on high Tilicho sections',
          },
          {
            month: 'Apr',
            condition:
              'Warming conditions / Generally favourable trekking weather',
          },
          {
            month: 'May',
            condition: 'Spring / Generally favourable trekking weather',
          },
          {
            month: 'Jun',
            condition:
              'Monsoon / Rain, cloud, tricky road & trail conditions on approach',
          },
          {
            month: 'Jul',
            condition:
              'Monsoon / Rain, cloud, difficult road & trail conditions',
          },
          {
            month: 'Aug',
            condition:
              'Monsoon / Manang drier but access can be affected by weather',
          },
          {
            month: 'Sep',
            condition:
              'Post-monsoon / Clearer skies and good mountain visibility',
          },
          {
            month: 'Oct',
            condition: 'Post-monsoon / Favourable for high-altitude sections',
          },
          {
            month: 'Nov',
            condition: 'Post-monsoon / Clear skies and good visibility',
          },
          {
            month: 'Dec',
            condition:
              'Winter / Very cold, possible snow or ice around the Tilicho route',
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
              weight: '0.45kg',
            },
            {
              item: 'Waterproof Shell Jacket',
              weight: '0.35kg',
            },
            {
              item: 'Fleece / Mid Layer',
              weight: '0.34kg',
            },
            {
              item: 'Thermal Base Layer Top',
              weight: '0.2kg',
              quantity: 1,
            },
            {
              item: 'Thermal Base Layer Bottom',
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
              weight: '0.32kg',
              quantity: 2,
            },
            {
              item: 'Trekking Boots (pair)',
              weight: '1.15kg',
            },
            {
              item: 'Trekking Socks (per pair)',
              weight: '0.06kg',
              quantity: 4,
            },
            {
              item: 'Warm Hat / Beanie',
              weight: '0.08kg',
            },
            {
              item: 'Warm Gloves',
              weight: '0.1kg',
            },
            {
              item: 'Trekking Poles',
              weight: '0.48kg',
            },
            {
              item: 'Headlamp',
              weight: '0.1kg',
            },
            {
              item: 'Water Bottle (1L)',
              weight: '0.125kg',
            },
            {
              item: 'Sunglasses (UV Protection)',
              weight: '0.03kg',
            },
            {
              item: 'Sunscreen + Lip Balm',
              weight: '0.1kg',
            },
            {
              item: 'Personal First Aid Kit',
              weight: '0.28kg',
            },
            {
              item: 'Passport, Permits, Cash, Insurance Copy',
              weight: '0.15kg',
            },
          ],
          optional: [
            {
              item: 'Sleeping Bag (-15C comfort)',
              weight: '1.5kg',
            },
            {
              item: 'Waterproof Rain Pants',
              weight: '0.22kg',
            },
            {
              item: 'Camp Shoes / Sandals',
              weight: '0.33kg',
            },
            {
              item: 'Buff / Neck Gaiter',
              weight: '0.04kg',
            },
            {
              item: 'Water Purification Tablets',
              weight: '0.07kg',
            },
            {
              item: 'Quick-Dry Towel',
              weight: '0.12kg',
            },
            {
              item: 'Power Bank',
              weight: '0.27kg',
            },
            {
              item: 'Charging Cable / Adapter',
              weight: '0.09kg',
            },
            {
              item: 'Energy Bars / Snacks',
              weight: '0.45kg',
              quantity: 3,
            },
            {
              item: 'Microspikes (Spring/Winter)',
              weight: '0.38kg',
            },
          ],
        },
      },
    ],
    images: [
      {
        url: '/images/tilicho/tilicho.webp',
        alt: 'Tilicho Lake Nepal',
        type: 'HERO',
        metadata: {
          frontendId: 'tilicho_img_01',
          order: null,
        },
      },
      {
        url: '/images/tilicho/tilicho2.webp',
        alt: 'Manang Valley high altitude landscape',
        type: 'GALLERY',
        metadata: {
          frontendId: 'tilicho_img_02',
          order: null,
        },
      },
      {
        url: '/images/tilicho/tilicho3.webp',
        alt: 'Trekking through Annapurna range',
        type: 'GALLERY',
        metadata: {
          frontendId: 'tilicho_img_03',
          order: null,
        },
      },
      {
        url: '/images/tilicho/tilicho4.webp',
        alt: 'Snow-capped peaks near Tilicho',
        type: 'GALLERY',
        metadata: {
          frontendId: 'tilicho_img_04',
          order: null,
        },
      },
      {
        url: '/images/tilicho/tilicho5.webp',
        alt: 'Exposed mountain trail toward Tilicho Base Camp',
        type: 'GALLERY',
        metadata: {
          frontendId: 'tilicho_img_05',
          order: null,
        },
      },
      {
        url: '/images/tilicho/tilicho6.webp',
        alt: 'Glacial lake in the Annapurna region',
        type: 'GALLERY',
        metadata: {
          frontendId: 'tilicho_img_06',
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
          title: 'Kathmandu → Besisahar',
          data: {
            altitude: '760 m · Besisahar',
            duration: '6-8 hrs drive',
            distance: '175 km',
            description:
              "The journey begins with a road trip west from Kathmandu toward Besisahar, following the Prithvi Highway before turning north toward the Marsyangdi Valley. Terraced hills, river valleys, roadside settlements, and changing landscapes provide the first introduction to the Annapurna region. Besisahar is the traditional gateway to the Annapurna trekking corridor.\n\nDepending on traffic, road conditions, and the transport used, the drive can take most of the day. The night in Besisahar keeps the first day's elevation gain modest before the road climbs deeper into the mountains.",
            price:
              'NPR 3,700 (Accommodation: 600, Meals: 1,600, Transport: 1,500)',
            coordinates: [84.3773, 28.2342],
          },
        },
        {
          order: 2,
          dayNumber: 2,
          title: 'Besisahar → Chame',
          data: {
            altitude: '2,670 m · Chame',
            duration: '5-8 hrs',
            distance: '65 km',
            description:
              'From Besisahar, the road leaves the main highway and follows the Marsyangdi Valley deeper into the mountains. The journey passes through steep-sided valleys, waterfalls, forested slopes, and mountain settlements as the road climbs toward Manang District. Chame, the district headquarters of Manang, sits at approximately 2,670 m. The surrounding landscape is noticeably more mountainous here, with pine forests and increasingly prominent Himalayan peaks.\n\nRoad conditions can be rough in places, and travel time varies with weather and surface conditions.',
            price: 'NPR 2,300 (Accommodation: 800, Meals: 1,500)',
            coordinates: [84.24236, 28.55048],
          },
        },
        {
          order: 3,
          dayNumber: 3,
          title: 'Chame → Upper Pisang',
          data: {
            altitude: '3,300 m · Upper Pisang',
            duration: '5-6 hrs',
            distance: '14 km',
            description:
              'The first full trekking day follows the Marsyangdi River through pine and fir forests, with the valley narrowing around dramatic rock formations. Small settlements and cultivated areas gradually give way to drier mountain terrain as the route climbs.\n\nAround Bhratang and Dhukur Pokhari, the landscape opens and views toward Annapurna II and Pisang Peak become more prominent. A final climb brings you to Upper Pisang, positioned above the valley at approximately 3,300 m.',
            price: 'NPR 2,300 (Accommodation: 800, Meals: 1,500)',
            coordinates: [84.11001, 28.63394],
          },
        },
        {
          order: 4,
          dayNumber: 4,
          title: 'Upper Pisang → Manang',
          data: {
            altitude: '3,540 m · Manang',
            duration: '5-6 hrs',
            distance: '17 km',
            description:
              'A higher route from Upper Pisang climbs toward Ghyaru and Ngawal, with wider views across the Marsyangdi Valley and surrounding mountains. The ascent is more demanding than the lower valley alternative, but it also provides a gradual introduction to the increasingly dry landscape of upper Manang.\n\nAfter Ngawal, the trail descends through Mungji and Braga before reaching Manang at approximately 3,540 m. This is the main settlement and acclimatization base for the higher section of the trek.',
            price: 'NPR 2,500 (Accommodation: 700, Meals: 1,800)',
            coordinates: [84.01975, 28.66668],
          },
        },
        {
          order: 5,
          dayNumber: 5,
          title: 'Acclimatization Day · Manang',
          data: {
            altitude: '3,540 m · Manang',
            duration: '3-5 hrs',
            distance: '5 km',
            note: 'Acclimatization day · optional hike',
            description:
              'Manang is the planned acclimatization stop before the trek moves above 4,000 m. Keep the day active but easy, with a short optional hike rather than another demanding trekking stage. You return to Manang to sleep at the same elevation.',
            price: 'NPR 2,600 (Accommodation: 800, Meals: 1,800)',
            coordinates: [84.01975, 28.66668],
          },
        },
        {
          order: 6,
          dayNumber: 6,
          title: 'Manang → Shree Kharka',
          data: {
            altitude: '4,050 m · Shree Kharka',
            duration: '4-5 hrs',
            distance: '10 km',
            description:
              'Leaving Manang, the route turns toward Khangsar and enters the Tilicho side valley. The settlement and surrounding slopes have a distinctly drier character than the lower Marsyangdi Valley, with sparse vegetation and open mountain terrain.\n\nFrom Khangsar, the trail climbs toward Shree Kharka, where the overnight elevation reaches approximately 4,050 m. The higher altitude makes this a noticeably more demanding stage than the approach through the lower valley.',
            price: 'NPR 2,800 (Accommodation: 1,000, Meals: 1,800)',
            coordinates: [83.97698, 28.6684],
          },
        },
        {
          order: 7,
          dayNumber: 7,
          title: 'Shree Kharka → Tilicho Base Camp',
          data: {
            altitude: '4,150 m · Tilicho Base Camp',
            duration: '4-5 hrs',
            distance: '8 km',
            description:
              'The trail climbs farther into the high mountain environment toward Tilicho Base Camp. Rocky slopes and exposed sections make the route more physically demanding, particularly at this elevation.\n\nAt approximately 4,150 m, Tilicho Base Camp is the final overnight stop before the lake. Facilities here are more basic than those in Manang, and conditions can be affected by season and weather.',
            price: 'NPR 2,800 (Accommodation: 1,000, Meals: 1,800)',
            coordinates: [83.95835, 28.67842],
          },
        },
        {
          order: 8,
          dayNumber: 8,
          title: 'Tilicho Base Camp → Tilicho Lake → Shree Kharka',
          data: {
            altitude: '4,919 m · Tilicho Lake',
            duration: '7-8 hrs',
            distance: '18 km',
            description:
              'An early start takes you from Tilicho Base Camp toward the lake through steep, rocky high-altitude terrain. The final approach is exposed in places, so conditions underfoot and weather should be assessed before continuing. At 4,919 m, Tilicho Lake is the highest point of the trek.\n\nAfter spending time at the lake, descend through the same high-altitude section and continue toward Shree Kharka for the night. This makes Day 08 the longest and most demanding trekking day of the itinerary.',
            price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
            isDestination: true,
            coordinates: [83.86579, 28.68471],
          },
        },
        {
          order: 9,
          dayNumber: 9,
          title: 'Shree Kharka → Manang',
          data: {
            altitude: '3,540 m · Manang',
            duration: '4-5 hrs',
            distance: '12 km',
            description:
              "After the high-altitude lake day, the return descends through the Tilicho side valley toward Khangsar. The landscape gradually becomes less exposed as the route loses elevation.\n\nFrom Khangsar, the trail continues to Manang, where the lower sleeping elevation provides a useful recovery point after the previous day's climb to 4,919 m.",
            price: 'NPR 2,300 (Accommodation: 800, Meals: 1,500)',
            coordinates: [84.01975, 28.66668],
          },
        },
        {
          order: 10,
          dayNumber: 10,
          title: 'Manang → Upper Pisang',
          data: {
            altitude: '3,300 m · Upper Pisang',
            duration: '6-7 hrs',
            distance: '17 km',
            description:
              'The journey retraces the Marsyangdi Valley toward Upper Pisang. If the higher route is used again, you pass through the ridges around Ngawal and Ghyaru before descending toward Pisang. The landscape becomes greener as elevation decreases, with forests returning around the Marsyangdi Valley.\n\nUpper Pisang provides the final trekking overnight before the road journey back toward Kathmandu.',
            price: 'NPR 2,300 (Accommodation: 800, Meals: 1,500)',
            coordinates: [84.11001, 28.63394],
          },
        },
        {
          order: 11,
          dayNumber: 11,
          title: 'Upper Pisang → Chame → Kathmandu',
          data: {
            altitude: '760 m',
            duration: '4-5 hrs trek',
            distance: '14 km',
            description:
              'The final trekking section descends from Upper Pisang toward Chame through the Marsyangdi Valley. You leave the high alpine environment behind as forest and lower-elevation vegetation become more prominent. At Chame, the trekking section ends and the return continues by road toward Besisahar and Kathmandu.\n\nThe road journey can take much of the day, with actual travel time depending on road conditions, traffic, weather, and the vehicle used.',
            price: 'NPR 3,000 (Meals: 1,000, Transport: 2,000)',
            coordinates: [84.24236, 28.55048],
          },
        },
      ],
    },
  },
};
