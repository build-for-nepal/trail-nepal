import { TrekDetail } from '@/types/trek';
import { LANGTANG_FOOD_MENU } from '@/static/foodMenuData';

export const TREK_DETAILS: Record<string, TrekDetail> = {
  'ebc-trek': {
    id: 'ebc-trek',
    name: 'EBC Trek',
    summary:
      'Trek through the Khumbu region, passing Sherpa villages, monasteries, glaciers, and high Himalayan landscapes on the way to Everest Base Camp.',
    region: 'Khumbu Region',
    meta: {
      duration: '12 Days',
      difficulty: 'Challenging',
      maxElevation: '5,545m',
      bestSeasons: 'March-May, September-November',
      startingPoint: 'Kathmandu',
      tripFacts: {
        flights: 'Kathmandu ⇄ Lukla',
        accommodation: 'Tea houses',
        routeType: 'Out and Back',
        permits:
          'Sagarmatha National Park Entry Permit, Khumbu Pasang Lhamu Rural Municipality Trek-Card',
      },
    },
    overview:
      'The Everest Base Camp trek follows the classic route through the Khumbu region of Nepal, beginning with a flight to Lukla and continuing through Sherpa settlements, Buddhist monasteries, forests, glacial valleys, and high-altitude terrain. The trail passes through Namche Bazaar, Tengboche, Dingboche, Lobuche, and Gorakshep before reaching Everest Base Camp at 5,364 m.\n\nAs the trail climbs deeper into the Himalayas, the landscape gradually changes from green valleys and rhododendron forests to open alpine terrain, rocky moraines, and snow-covered peaks. Two acclimatization days in Namche Bazaar and Dingboche allow for gradual adjustment to the increasing elevation. The journey reaches its highest point at Kala Patthar, 5,545 m, before descending through Pheriche and Namche Bazaar and returning to Lukla for the flight back to Kathmandu.',
    timeline: [
      {
        day: '01',
        title: 'Kathmandu → Lukla → Phakding',
        description:
          'The journey begins with a mountain flight to Tenzing-Hillary Airport in Lukla. Depending on the season and current flight operations, flights may depart from Kathmandu or Ramechhap. The flight from Kathmandu takes around 30–35 minutes, while the Ramechhap–Lukla sector is shorter. On clear days, the flight offers changing views of the Himalayan foothills, valleys, and mountain landscape. Flight schedules and operations can vary depending on weather and airport conditions.\n\nAfter landing in Lukla, the trail descends gradually through surrounding Sherpa settlements, passing Chheplung and Ghat before joining the Dudh Koshi valley. Pine and rhododendron forests, stone-built villages, mani walls, and the first suspension bridges introduce the landscapes of the Khumbu. The trail continues alongside the river to Phakding at approximately 2,610 m, where the first night is spent in a local tea house.',
        stats: { elevation: '2,610m', duration: '3-4 hours', distance: '8km' },
        coordinates: [27.737, 86.712],
        price: 'NPR 2,500 (Accommodation: 1,000, Meals: 1,500)',
      },
      {
        day: '02',
        title: 'Phakding → Namche Bazaar',
        description:
          'From Phakding, the route follows the Dudh Koshi River north, crossing suspension bridges and passing small Sherpa settlements toward Monjo. Just beyond Monjo, the trail enters Sagarmatha National Park at Jorsale, where your park entry permit is checked at the checkpoint.\n\nBeyond Jorsale, the trail follows the river through forest before the main climb toward Namche Bazaar begins. The Dudh Koshi is crossed again on a suspension bridge, followed by a series of uphill sections through pine and rhododendron forest. Along the climb, a clear break in the trees can offer the first distant glimpse of Mount Everest. As you gain elevation, the valley gradually opens toward the mountains before reaching Namche Bazaar at approximately 3,440 m, a major Sherpa trading centre and an important acclimatization stop on the route.',
        stats: { elevation: '3,440m', duration: '6-7 hours', distance: '11km' },
        coordinates: [27.805068, 86.7105936],
        price: 'NPR 2,800 (Accommodation: 800, Meals: 2,000)',
      },
      {
        day: '03',
        title: 'Acclimatization Day · Namche Bazaar',
        description:
          "Namche Bazaar is the first major acclimatization stop of the trek, with a second night at approximately 3,440 m before the route continues toward higher elevations. Rather than gaining more overnight elevation, the day allows your body to adjust to the thinner air while you explore the hills and viewpoints around Namche before returning to the same elevation for the night.\n\nA popular acclimatization hike follows the trail toward Everest View Hotel, where the higher viewpoint opens to panoramic views of Everest, Lhotse, Ama Dablam, and the surrounding Himalayan peaks on clear days. The route then returns toward Namche, with options to visit the Sherpa Culture Museum and Everest Photo Gallery. Later, you can explore the town's bakeries, cafés, and gear shops, or simply take in the mountain atmosphere before the trek continues deeper into the Khumbu.",
        stats: {
          elevation: '3,440m',
          duration: '3-4 hours',
          distance: '4km',
          note: 'Acclimatization Day',
        },
        coordinates: [27.805068, 86.7105936],
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },
      {
        day: '04',
        title: 'Namche Bazaar → Tengboche',
        description:
          'The trail leaves Namche along the mountainside, with open views across the Khumbu and Himalayan peaks rising beyond the valley. The route follows a relatively gentle section toward Kyangjuma before descending through forest toward Phunki Tenga, where the Dudh Koshi is crossed and the main climb toward Tengboche begins.\n\nFrom Phunki Tenga, you follow a steady uphill trail through rhododendron and conifer forests. As the trees thin near the ridge, Ama Dablam and the surrounding Himalayan peaks come into view before you reach Tengboche at approximately 3,860 m. The village is home to Tengboche Monastery, a leading Buddhist centre in the Khumbu region, set against a backdrop of Himalayan peaks.',
        stats: { elevation: '3,860m', duration: '5-6 hours', distance: '10km' },
        coordinates: [27.8352264, 86.7641614],
        price: 'NPR 3,350 (Accommodation: 1,000, Meals: 2,350)',
      },
      {
        day: '05',
        title: 'Tengboche → Dingboche',
        description:
          'The trail leaves Tengboche and descends through birch, conifer, and rhododendron forests, passing stone-built villages and mani walls carved with Buddhist prayers. The route continues toward Pangboche, with views of Ama Dablam and the surrounding mountains along the valley. As you move higher, the forest gradually thins and the landscape becomes more open, dry, and alpine.\n\nAfter crossing the Imja Khola, the trail continues through Pangboche and Shomare, following the Imja Valley toward Dingboche. The vegetation becomes increasingly sparse as the elevation rises, while the surrounding peaks become more prominent across the valley. The day ends in Dingboche at approximately 4,410 m, an important stop before the route moves into the higher reaches of the Khumbu.',
        stats: { elevation: '4,410m', duration: '5-6 hours', distance: '11km' },
        coordinates: [27.8873288, 86.8259632],
        price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
      },
      {
        day: '06',
        title: 'Acclimatization Day · Dingboche',
        description:
          'The second acclimatization day in Dingboche prepares you for the higher elevations ahead. The route follows the principle of "hike high, sleep low", with a climb into the surrounding hills before returning to Dingboche at approximately 4,410 m for the night.\n\nA popular option is the climb toward Nangkartshang Peak, which rises above Dingboche. From higher ground, you can take in wide views across the Imja Valley and surrounding Himalayan peaks before returning to the village. The rest of the day provides time to rest, hydrate, and prepare for the increasingly high-altitude terrain ahead.',
        stats: {
          elevation: '4,410m',
          duration: '4-5 hours',
          distance: '5km',
          note: 'Acclimatization Day',
        },
        coordinates: [27.8873288, 86.8259632],
        price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
      },
      {
        day: '07',
        title: 'Dingboche → Lobuche',
        description:
          'The trail leaves Dingboche and climbs steadily through a wide, glacier-carved valley toward Thukla. As you gain elevation, the landscape becomes increasingly barren, with low vegetation giving way to rocky slopes and the surrounding peaks appearing closer across the valley.\n\nBeyond Thukla, you face a steeper climb toward the Thukla Pass, ascending the terminal moraine of the Khumbu Glacier. Along the ridge, a collection of memorials commemorates climbers and mountaineers who lost their lives in the Everest region. From here, the trail becomes gentler as you continue across the high valley toward Lobuche at approximately 4,940 m, one of the last settlements before Gorakshep.',
        stats: { elevation: '4,940m', duration: '5-6 hours', distance: '8km' },
        coordinates: [27.9477818, 86.8105368],
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },
      {
        day: '08',
        title: 'Lobuche → Gorakshep → Everest Base Camp',
        description:
          'The trail leaves Lobuche early and continues across the rugged, high-altitude terrain toward Gorakshep. The route follows rocky paths and glacial moraine as you move deeper into the upper Khumbu, with Pumori, Nuptse, and other high peaks surrounding the valley.\n\nAfter reaching Gorakshep, the trail continues toward Everest Base Camp, following the moraine beside the Khumbu Glacier. The terrain becomes increasingly rocky and uneven, and the route can change with the movement of the glacier and seasonal conditions. At 5,364 m, Everest Base Camp marks the highest destination of the trek before you retrace the route to Gorakshep at approximately 5,164 m for the night.',
        stats: {
          elevation: '5,364m',
          duration: '8-9 hours',
          distance: '15km',
          note: 'EBC elevation is 5,364m, sleeping at Gorakshep 5,164m',
        },
        coordinates: [28.0029111, 86.855732],
        isDestination: true,
        price: 'NPR 5,500 (Accommodation: 1,000, Meals: 4,500)',
      },
      {
        day: '09',
        title: 'Gorakshep → Kala Patthar → Pheriche',
        description:
          "The day begins early with the climb toward Kala Patthar, reaching 5,545 m, the highest point of the trek. The ascent is demanding at this elevation, particularly in the cold early hours, but the ridge opens to one of the most expansive mountain views of the journey. As the light reaches the surrounding peaks, you can look across the upper Khumbu toward Everest, Nuptse, Pumori, and the surrounding Himalayan landscape.\n\nThe trail descends back to Gorakshep before continuing down the valley toward Pheriche. With each drop in elevation, the landscape gradually becomes less stark, with more vegetation returning to the valley. The day ends in Pheriche at approximately 4,371 m, providing a significant drop from the previous night's sleeping elevation.",
        stats: {
          elevation: '5,545m',
          duration: '7-8 hours',
          distance: '13km',
          note: 'Kala Patthar is the highest point of the trek. Sleeping elevation Pheriche 4,371m.',
        },
        coordinates: [27.893, 86.818],
        price: 'NPR 4,500 (Accommodation: 1,000, Meals: 3,500)',
      },
      {
        day: '10',
        title: 'Pheriche → Namche Bazaar',
        description:
          'The trail continues its long descent from Pheriche through the Khumbu Valley, retracing the route toward Tengboche. As you lose elevation, the landscape gradually changes from the sparse alpine terrain around Pheriche to greener surroundings and forested sections.\n\nFrom Tengboche, the trail descends toward the Dudh Koshi before climbing again toward the mountainside route leading to Namche. The return through familiar forests and villages offers a noticeable contrast to the high-altitude landscape of the previous days. The trail eventually reaches Namche Bazaar at approximately 3,440 m, where the lower elevation brings more oxygen and a more lively mountain atmosphere.',
        stats: { elevation: '3,440m', duration: '6-7 hours', distance: '14km' },
        coordinates: [27.806, 86.714],
        price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
      },
      {
        day: '11',
        title: 'Namche Bazaar → Lukla',
        description:
          'The trail retraces the route from Namche Bazaar toward Lukla, descending through the Dudh Koshi valley and passing familiar settlements along the way. You follow the trail through Monjo and Phakding, crossing suspension bridges and moving through increasingly green forest as the elevation decreases.\n\nBeyond Phakding, the route continues toward Lukla with a mixture of gradual descents and short uphill sections. The final approach climbs gently back toward Lukla at approximately 2,860 m, where the trekking portion of the journey comes to an end and you spend the final night in the Khumbu.',
        stats: { elevation: '2,860m', duration: '7-8 hours', distance: '18km' },
        coordinates: [27.686, 86.73],
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },
      {
        day: '12',
        title: 'Lukla → Kathmandu',
        description:
          'The final morning begins with a return flight from Tenzing-Hillary Airport in Lukla. Depending on the season and current flight operations, the flight may arrive in Kathmandu or connect through the operational departure arrangements in use at the time. The short mountain flight offers another perspective of the hills and valleys that surrounded the trek, with changing views depending on weather and visibility.\n\nAfter landing in Kathmandu, the 12-day Everest Base Camp journey comes to an end, bringing the route from the high valleys of the Khumbu back to the capital.',
        stats: {
          elevation: null,
          duration: '35-min flight',
          distance: null,
        },
        coordinates: [27.7172, 85.324],
      },
    ],
    expectations: [
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
    seasonalPlanning: [
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
        condition: 'Late-Monsoon / Fresh Air / Some Cloud Lingering / Quieter',
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
    gallery: [
      {
        id: 'img_01',
        url: '/images/ebc.jpg',
        alt: 'Everest Base Camp and Khumbu Icefall',
        type: 'hero',
      },
      {
        id: 'img_02',
        url: '/images/ebc/Lukla.png',
        alt: 'Namche Bazaar Sherpa Capital',
        type: 'landscape',
      },
      {
        id: 'img_03',
        url: '/images/ebc/EBC2.png',
        alt: 'Tengboche Monastery with Ama Dablam',
        type: 'portrait',
      },
      {
        id: 'img_04',
        url: '/images/ebc/Peak.png',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_05',
        url: '/images/ebc/Namche.png',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_06',
        url: '/images/ebc/ABC1.png',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
    ],
    gearChecklist: {
      essentials: [
        { item: 'Backpack (45-60L)', weight: '1.5kg' },
        { item: 'Rain Cover for Backpack', weight: '0.08kg' },
        { item: 'Down Jacket', weight: '0.425kg' },
        { item: 'Raincoat / Waterproof Shell Jacket', weight: '0.34kg' },
        { item: 'Fleece / Insulated Mid Layer', weight: '0.34kg' },
        { item: 'Thermal Base Layer Top', weight: '0.2kg', quantity: 1 },
        // { item: 'Thermal Base Layer Bottom', weight: '0.2kg', quantity: 1 },
        { item: 'Trekking T-Shirt', weight: '0.14kg', quantity: 3 },
        { item: 'Trekking Pants', weight: '0.315kg', quantity: 2 },
        { item: 'Trekking Boots (pair)', weight: '1.1kg' },
        { item: 'Trekking Socks (per pair)', weight: '0.06kg', quantity: 3 },
        { item: 'Warm Hat / Beanie', weight: '0.075kg' },
        { item: 'Sun Cap', weight: '0.06kg' },
        { item: 'Light Gloves', weight: '0.065kg' },
        { item: 'Trekking Poles (pair)', weight: '0.475kg' },
        { item: 'Headlamp', weight: '0.1kg' },
        { item: 'Water Bottle (1L, empty)', weight: '0.125kg' },
        { item: 'Sunglasses (UV 400 Protection)', weight: '0.033kg' },
        { item: 'Sunscreen + Lip Balm', weight: '0.1kg' },
        { item: 'Personal First Aid Kit', weight: '0.275kg' },
        { item: 'Passport, Permits, Cash, Insurance Copy', weight: '0.15kg' },
      ],
      optional: [
        { item: 'Sleeping Bag (-10°C to -15°C comfort)', weight: '1.4kg' },
        { item: 'Waterproof Rain Pants', weight: '0.215kg' },
        { item: 'Thermal Base Layer Bottom', weight: '0.2kg', quantity: 1 },
        {
          item: 'Warm Trekking Trousers / Softshell Pants',
          weight: '0.37kg',
          quantity: 2,
        },
        { item: 'Camp Shoes / Sandals', weight: '0.325kg' },
        { item: 'Warm Outer Gloves', weight: '0.11kg' },
        { item: 'Buff / Neck Gaiter', weight: '0.043kg' },
        { item: 'Water Purification Tablets / Filter', weight: '0.075kg' },
        { item: 'Toiletries & Quick-Dry Towel', weight: '0.325kg' },
        { item: 'Power Bank (10,000-20,000 mAh)', weight: '0.265kg' },
        { item: 'Charging Cable / Adapter', weight: '0.09kg' },
        { item: 'Snacks / Energy Bars', weight: '0.45kg', quantity: 3 },
      ],
    },
  },
  'manaslu-circuit': {
    id: 'manaslu-circuit',
    name: 'Manaslu Circuit Trek',
    summary:
      "Circle the world's eighth-highest mountain through the Budhi Gandaki Valley, upper Nubri settlements, and high alpine terrain before crossing the ~5,106 m Larkya La Pass.",
    region: 'Manaslu Region',

    meta: {
      duration: '13 Days',
      difficulty: 'Challenging',
      maxElevation: '5,106m',
      bestSeasons: 'March-May, September-November',
      startingPoint: 'Kathmandu',
      tripFacts: {
        flights: 'None',
        accommodation: 'Tea houses / lodges',
        routeType: 'Circuit',
        permits: 'Manaslu Restricted Area Permit, MCAP, ACAP',
      },
    },

    overview:
      "The Manaslu Circuit is a challenging Himalayan trek that circles Manaslu, the world's eighth-highest mountain at 8,163 m. The route follows the Budhi Gandaki Valley from Machha Khola through forests, waterfalls, suspension bridges, and traditional mountain villages. As the elevation rises, the landscape changes from subtropical valleys to pine and rhododendron forests and eventually open alpine terrain. The upper valley also reflects strong Gurung and Tibetan Buddhist traditions, with monasteries, mani walls, chortens, and prayer flags becoming more prominent. The route passes through Namrung, Lho, Samagaon, and Samdo before reaching Dharamsala and the high-altitude crossing of Larkya La. At approximately 5,106 m, the pass is the highest point of the trek and its main physical challenge. From Larkya La, the route descends to Bimthang, then continues through greener landscapes to Tilije and Dharapani before the road journey to Besisahar and Kathmandu.",

    timeline: [
      {
        day: '01',
        title: 'Kathmandu → Machha Khola',
        description:
          'An early road departure takes you from Kathmandu through Dhading and Arughat before entering the Budhi Gandaki valley. The drive follows the river corridor, with road conditions varying along the route. Rather than stopping at Soti Khola, this itinerary continues farther along the valley to Machha Khola, allowing the trekking section to begin the following morning. Keep water, snacks, and warm layers accessible during the long journey.',
        stats: {
          elevation: '930m',
          duration: '8-10 hrs drive',
          distance: '160km',
        },
        coordinates: [28.6469, 84.7254],
        price: 'NPR 4,200 (Transport: 2,500, Accommodation: 700, Meals: 1,000)',
      },

      {
        day: '02',
        title: 'Machha Khola → Jagat',
        description:
          'The first walking day follows the Budhi Gandaki River through a warm, forested section of the valley. The trail passes through Khorlabesi and continues toward Tatopani, known for its natural hot spring. From there, the valley narrows as the route crosses suspension bridges, climbs along the hillsides, and gradually enters more rugged terrain. The trail eventually reaches Jagat, a traditional stone-paved village and an important checkpoint on the route into the restricted Manaslu area.',
        stats: {
          elevation: '1,340m',
          duration: '6-7 hrs',
          distance: '20-22km',
        },
        coordinates: [28.6658, 84.7178],
        price: 'NPR 1,900 (Accommodation: 700, Meals: 1,200)',
      },

      {
        day: '03',
        title: 'Jagat → Deng',
        description:
          'From Jagat, the trail follows the Budhi Gandaki River through forests, cultivated hillsides, stone stairways, and suspension bridges. As you move deeper into the valley, the terrain becomes steeper and more rugged. The route passes through Philim, one of the larger settlements along the lower Manaslu trail, before continuing toward Deng. With the gradual gain in elevation, the landscape and villages begin to take on the distinct character of the upper Budhi Gandaki valley, with Tibetan-influenced architecture and Buddhist cultural features becoming more visible.',
        stats: {
          elevation: '1,804m',
          duration: '5-7 hrs',
          distance: '19km',
        },
        coordinates: [28.7547, 84.7542],
        price: 'NPR 1,900 (Accommodation: 700, Meals: 1,200)',
      },

      {
        day: '04',
        title: 'Deng → Namrung',
        description:
          'The route climbs steadily through increasingly mountainous terrain as you leave the lower Budhi Gandaki valley behind. The trail passes through Rana and Bihi, with oak and rhododendron forests covering sections of the hillside. As you approach the upper Nubri valley, the landscape and culture begin to change. Namrung, at approximately 2,630 m, marks an important transition into the higher Manaslu landscape, with more open views toward the surrounding peaks and increasing signs of Tibetan Buddhist culture.',
        stats: {
          elevation: '2,630m',
          duration: '5-7 hrs',
          distance: '18km',
        },
        coordinates: [28.7807, 84.7358],
        price: 'NPR 2,200 (Accommodation: 700, Meals: 1,500)',
      },

      {
        day: '05',
        title: 'Namrung → Lho',
        description:
          'Leaving Namrung behind, the trail climbs gradually into a higher and more open landscape. Forests and traditional villages line the route toward Lho, where the valley begins to open beneath the towering peaks of the Manaslu range. At Lho, you can explore the traditional village and Ribung Gompa, an important Buddhist monastery above the settlement. The shorter walking day also gives your body more time to adjust before continuing toward Samagaon.',
        stats: {
          elevation: '3,180m',
          duration: '4-5 hrs',
        },
        coordinates: [28.7867, 84.6858],
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },

      {
        day: '06',
        title: 'Lho → Samagaon',
        description:
          'The trail continues through the upper Nubri valley, passing Shyala, where the surrounding mountains become increasingly prominent. The forest gradually gives way to more open alpine terrain as you approach Samagaon. The walk is relatively short compared with some earlier days, but the elevation gain is significant. At approximately 3,530 m, Samagaon becomes your base for acclimatization before the route climbs toward Samdo and the Larkya La.',
        stats: {
          elevation: '3,530m',
          duration: '3-5 hrs',
          distance: '15km',
        },
        coordinates: [28.6537, 84.0274],
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },

      {
        day: '07',
        title: 'Acclimatization Day · Samagaon',
        description:
          'This dedicated acclimatization day provides time to adjust to the altitude before the route climbs higher. A moderate hike above Samagaon is preferable to remaining completely inactive, followed by a return to sleep at approximately 3,530 m. A popular option is the hike toward Pungyen Gompa, which sits at around 4,050 m and provides views toward Manaslu. You can also hike toward Manaslu Base Camp, depending on conditions, fitness, and your guide’s assessment.',
        stats: {
          elevation: '4,050m',
          duration: '3-5 hrs optional hike',
          distance: '-',
          note: 'Acclimatization Day',
        },
        coordinates: [28.6537, 84.0274],
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },

      {
        day: '08',
        title: 'Samagaon → Samdo',
        description:
          'The trail leaves Samagaon and enters the high, open landscape of the upper Budhi Gandaki valley. The walking is shorter today, but the elevation continues to increase as you approach Samdo. The route crosses open terrain with broad views of the surrounding mountains and follows the valley toward this remote settlement near the Tibetan border. At approximately 3,860 m, Samdo is an important stopping point before the final approach to Dharamsala and Larkya La. Take the afternoon to rest and prepare for another high-altitude day.',
        stats: {
          elevation: '3,860m',
          duration: '3-4 hrs',
          distance: '9km',
        },
        coordinates: [28.6382, 84.0318],
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },

      {
        day: '09',
        title: 'Samdo → Dharamsala',
        description:
          'As you climb toward Dharamsala, the landscape changes noticeably, with sparse vegetation and increasingly rugged mountain terrain. The trail crosses increasingly barren alpine terrain as vegetation becomes sparse and the mountains feel closer. Dharamsala sits at approximately 4,460 m and is the final overnight stop before the Larkya La crossing. Because tomorrow is the trek’s most demanding day, arrive early, eat well, hydrate, and give yourself plenty of time to rest.',
        stats: {
          elevation: '4,460m',
          duration: '3-4 hrs',
          distance: '7km',
        },
        coordinates: [28.6617, 84.0394],
        price: 'NPR 2,500 (Accommodation: 1,000, Meals: 2,500)',
      },

      {
        day: '10',
        title: 'Dharamsala → Larkya La → Bimthang',
        description:
          'This is the most demanding day of the trek. An early morning start allows you to make the ascent toward Larkya La before conditions become more challenging later in the day. The trail climbs gradually across rocky and sometimes snowy terrain toward the pass at approximately 5,106 m, the highest point of the Manaslu Circuit. From the top, expansive Himalayan views can open up before the long descent toward Bimthang. The descent is demanding in its own way, with tired legs and changing terrain requiring careful footing. As elevation decreases, the landscape gradually becomes greener toward Bimthang.',
        stats: {
          elevation: '5,106m',
          duration: '8-10 hrs',
          distance: '-',
        },
        coordinates: [28.6667, 84.5636],
        price: 'NPR 4,000 (Accommodation: 1,000, Meals: 3,000)',
        isDestination: true,
      },

      {
        day: '11',
        title: 'Bimthang → Tilije',
        description:
          'After crossing Larkya La, the trail descends into a noticeably greener landscape. The barren alpine terrain gradually gives way to rhododendron and pine forests as you lose elevation. The route continues through Kharche and toward the lower Marsyangdi valley, with vegetation becoming denser as the altitude drops. By the time you reach Tilije, the landscape has changed considerably from the high mountain terrain around the pass.',
        stats: {
          elevation: '2,300m',
          duration: '5-7 hrs',
          distance: '20km',
        },
        coordinates: [28.7227, 84.5525],
        price: 'NPR 2,800 (Accommodation: 800, Meals: 2,000)',
      },

      {
        day: '12',
        title: 'Tilije → Dharapani → Besisahar',
        description:
          'The final walking section follows the valley from Tilije through Thonje toward Dharapani, where the Manaslu Circuit connects with the Annapurna trekking corridor. The route continues through increasingly settled and warmer terrain as the altitude drops. From Dharapani, the journey continues by road toward Besisahar. Travel time depends on road conditions, traffic, weather, and the vehicle available, making this a combined walking and road-transfer day rather than a continuous trekking stage.',
        stats: {
          elevation: '760m',
          duration: '4-5 hrs + drive',
          distance: '-',
        },
        coordinates: [28.2316, 84.0098],
        price: 'NPR 2,800 (Accommodation: 800, Meals: 2,000)',
      },

      {
        day: '13',
        title: 'Besisahar → Kathmandu',
        description:
          'The final day is a road journey from Besisahar to Kathmandu. The route follows the Marsyangdi valley before continuing through the Middle Hills toward the capital. The journey can take much of the day depending on road conditions, traffic, and stops, so keep your schedule flexible. By the time you reach Kathmandu, you will have completed the full Manaslu Circuit from the Budhi Gandaki valley to the Larkya La and back through the Marsyangdi side of the circuit.',
        stats: {
          elevation: '1,400m',
          duration: '6-8 hrs drive',
          distance: '-',
        },
        coordinates: [27.7172, 85.324],
        price: 'NPR 3,500 (Transport: 2,500, Meals: 1,000)',
      },
    ],

    expectations: [
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

    seasonalPlanning: [
      { month: 'Jan', condition: 'Closed / Heavy Snow on Larkya La' },
      { month: 'Feb', condition: 'Closed / Extreme Cold / Pass Blocked' },
      {
        month: 'Mar',
        condition: 'Good / Spring Blooms / Moderate Temperatures',
      },
      { month: 'Apr', condition: 'Peak Season / Clear Skies / Stable Weather' },
      {
        month: 'May',
        condition: 'Warm / Rhododendron Forests / Clear Mornings',
      },
      { month: 'Jun', condition: 'Beginning of Monsoon / Cloudy / Leeches' },
      { month: 'Jul', condition: 'Danger / Heavy Rain / Landslide Risk' },
      { month: 'Aug', condition: 'Peak Monsoon / Wet & Muddy Trails' },
      {
        month: 'Sep',
        condition: 'Late-Monsoon / Crisp Air / Fresh Landscapes',
      },
      { month: 'Oct', condition: 'Perfect / Best Visibility / Most Popular' },
      { month: 'Nov', condition: 'Excellent / Cool & Stable / Golden Peaks' },
      { month: 'Dec', condition: 'Closing / Winter Chill / High Pass Snow' },
    ],
    gallery: [
      {
        id: 'img_01',
        url: '/images/manaslu/manaslu.jpg',
        alt: 'Manaslu ',
        type: 'hero',
      },
      {
        id: 'img_02',
        url: '/images/manaslu/manaslu2.jpg',
        alt: 'En route to Pung Gyen Gompa in Manaslu Circuit Trek.',
        type: 'landscape',
      },
      {
        id: 'img_03',
        url: '/images/manaslu/manaslu3.jpg',
        alt: 'Manaslu, Samagaun, Nepal',
        type: 'portrait',
      },
      {
        id: 'img_04',
        url: '/images/erik-OwJ6Cn_DnHM-unsplash.jpg',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_05',
        url: '/images/manaslu/manaslu4.jpg',
        alt: 'Manaslu',
        type: 'landscape',
      },
      {
        id: 'img_06',
        url: '/images/manaslu/manaslu5.jpg',
        alt: 'Manaslu',
        type: 'landscape',
      },
    ],
    gearChecklist: {
      essentials: [
        { item: 'Backpack (45-60L)', weight: '1.5kg' },
        { item: 'Rain Cover for Backpack', weight: '0.08kg' },
        { item: 'Down Jacket', weight: '0.425kg' },
        { item: 'Raincoat / Waterproof Shell Jacket', weight: '0.34kg' },
        { item: 'Fleece / Insulated Mid Layer', weight: '0.34kg' },
        { item: 'Thermal Base Layer Top', weight: '0.2kg', quantity: 1 },
        // { item: 'Thermal Base Layer Bottom', weight: '0.2kg', quantity: 1 },
        { item: 'Trekking T-Shirt', weight: '0.14kg', quantity: 3 },
        { item: 'Trekking Pants', weight: '0.315kg', quantity: 2 },
        { item: 'Trekking Boots (pair)', weight: '1.1kg' },
        { item: 'Trekking Socks (per pair)', weight: '0.06kg', quantity: 3 },
        { item: 'Warm Hat / Beanie', weight: '0.075kg' },
        { item: 'Sun Cap', weight: '0.06kg' },
        { item: 'Light Gloves', weight: '0.065kg' },
        { item: 'Trekking Poles (pair)', weight: '0.475kg' },
        { item: 'Headlamp', weight: '0.1kg' },
        { item: 'Water Bottle (1L, empty)', weight: '0.125kg' },
        { item: 'Sunglasses (UV 400 Protection)', weight: '0.033kg' },
        { item: 'Sunscreen + Lip Balm', weight: '0.1kg' },
        { item: 'Personal First Aid Kit', weight: '0.275kg' },
        { item: 'Passport, Permits, Cash, Insurance Copy', weight: '0.15kg' },
      ],
      optional: [
        { item: 'Sleeping Bag (-10°C to -15°C comfort)', weight: '1.4kg' },
        { item: 'Waterproof Rain Pants', weight: '0.215kg' },
        { item: 'Thermal Base Layer Bottom', weight: '0.2kg', quantity: 1 },
        {
          item: 'Warm Trekking Trousers / Softshell Pants',
          weight: '0.37kg',
          quantity: 2,
        },
        { item: 'Camp Shoes / Sandals', weight: '0.325kg' },
        { item: 'Warm Outer Gloves', weight: '0.11kg' },
        { item: 'Buff / Neck Gaiter', weight: '0.043kg' },
        { item: 'Water Purification Tablets / Filter', weight: '0.075kg' },
        { item: 'Toiletries & Quick-Dry Towel', weight: '0.325kg' },
        { item: 'Power Bank (10,000-20,000 mAh)', weight: '0.265kg' },
        { item: 'Charging Cable / Adapter', weight: '0.09kg' },
        { item: 'Snacks / Energy Bars', weight: '0.45kg', quantity: 3 },
      ],
    },
  },
  'langtang-valley': {
    id: 'langtang-valley',
    name: 'Langtang Valley Trek',
    summary:
      'Follow the Langtang Khola from forested valleys and Tamang villages into the alpine landscape of Kyanjin Gompa, with a climb to Kyanjin Ri at 4,773 m.',
    region: 'Langtang Region',

    meta: {
      duration: '7 Days',
      difficulty: 'Moderate',
      maxElevation: '4,773m',
      bestSeasons: 'March-May, October-November',
      startingPoint: 'Kathmandu',
      tripFacts: {
        flights: 'None',
        accommodation: 'Tea houses / lodges',
        routeType: 'Out & Back',
        permits: 'Langtang National Park Entry Permit, TIMS',
      },
    },
    overview:
      'The Langtang Valley Trek follows the Langtang Khola through a changing mountain landscape, beginning at Syabrubesi and gradually climbing from forested valleys and Tamang settlements into open alpine terrain. The route passes through Lama Hotel, Langtang Village, and Kyanjin Gompa, with dense forests giving way to wider mountain landscapes as the elevation increases. Much of the trekking route lies within Langtang National Park, a protected area known for its forests, alpine vegetation, mountain scenery, and Tamang cultural heritage. At Kyanjin Gompa, the valley opens into a high-mountain landscape surrounded by ridgelines, glaciers, and Himalayan peaks. A day hike to Kyanjin Ri at 4,773 m brings this 7-day itinerary to its highest point. On a clear day, views extend across the upper Langtang Valley and surrounding mountains. From Kyanjin Gompa, the route retraces the valley through Langtang Village and Lama Hotel before descending to Syabrubesi.',

    timeline: [
      {
        day: '01',
        title: 'Kathmandu → Syabrubesi',
        description:
          'The journey begins with an overland drive from Kathmandu toward Syabrubesi, the usual starting point for the Langtang Valley Trek. The route heads north through the Trishuli Valley, passing through Dhunche before continuing toward Syabrubesi. Travel time can vary with road and traffic conditions, so this is best treated as a full travel day rather than a fixed-duration transfer. Nepal Tourism Board identifies Dhunche, 117 km by road from Kathmandu, as an access point to Langtang National Park. As you leave the lower river valleys behind, the landscape becomes increasingly mountainous, with steeper hills and settlements along the way. At approximately 1,500 m, Syabrubesi provides the overnight base before you begin trekking the following morning.',
        stats: {
          elevation: '~1,500m · Syabrubesi',
          duration: 'Full-day overland journey',
          distance: '-',
        },
        coordinates: [28.1657291, 85.3418267],
        price: 'NPR 1,500 (Accommodation: 500, Meals: 1,000)',
      },

      {
        day: '02',
        title: 'Syabrubesi → Lama Hotel',
        description:
          'Leaving Syabrubesi behind, you follow the Langtang Khola into the forested landscape of Langtang National Park. The route passes through sections of bamboo, oak, and rhododendron forest, with suspension bridges and riverside stretches adding variety to the gradual climb. The steady ascent takes you deeper into the valley before reaching Lama Hotel. Published sources give different elevations for the settlement, so Trails Nepal uses approximately 2,500–2,600 m here rather than presenting a more precise figure as definitive.',
        stats: {
          elevation: '~2,470m · Lama Hotel',
          duration: '6-7 hrs',
          distance: '11-12km',
        },
        coordinates: [28.1612117, 85.4296495],
        price: 'NPR 1,700 (Accommodation: 500, Meals: 1,200)',
      },

      {
        day: '03',
        title: 'Lama Hotel → Langtang Village',
        description:
          'The forest gradually opens as you climb higher from Lama Hotel, following the Langtang Khola through Ghodatabela. Mountain views become more prominent as the valley begins to widen and the dense woodland starts to give way to more open slopes. You continue toward Langtang Village at approximately 3,430 m, where stone-built homes, chortens, prayer flags, and mani walls reflect the cultural character of the upper valley. The increasing elevation is noticeable here, making a steady pace important.',
        stats: {
          elevation: '~3,430m · Langtang Village',
          duration: '6-7 hrs',
          distance: '10-11km',
        },
        coordinates: [28.2157142, 85.5030007],
        price: 'NPR 1,900 (Accommodation: 700, Meals: 1,200)',
      },

      {
        day: '04',
        title: 'Langtang Village → Kyanjin Gompa',
        description:
          'Today brings a shorter walking day as you make your way toward Kyanjin Gompa. The landscape becomes increasingly open, with fewer trees and more alpine vegetation, rocky slopes, chortens, prayer flags, and mani walls along the route. The gradual climb brings you to Kyanjin Gompa at approximately 3,870 m, the base for the trek’s high-altitude day hikes. With more time after reaching the settlement, you can explore the surrounding area or take a short walk while allowing your body to adjust to the higher elevation.',
        stats: {
          elevation: '~3,870m · Kyanjin Gompa',
          duration: '3-4 hrs',
          distance: '6-7km',
        },
        coordinates: [28.2124247, 85.5672161],
        price: 'NPR 2,200 (Accommodation: 700, Meals: 1,500)',
      },

      {
        day: '05',
        title: 'Kyanjin Gompa → Kyanjin Ri → Kyanjin Gompa',
        description:
          'A high-altitude day hike takes you from Kyanjin Gompa toward Kyanjin Ri, the highest point of this itinerary at 4,773 m. The trail becomes steeper as it leaves the settlement and climbs onto the surrounding ridge. The lower viewpoint provides an increasingly elevated perspective over Kyanjin and the upper Langtang Valley. Higher on the ridge, the views open toward Langtang Lirung, surrounding glaciers, ridgelines, and the high peaks of the region. On a clear day, the elevated position provides a broad panorama across the upper valley. The final section toward 4,773 m is steeper and more demanding because of the elevation. After spending time at the viewpoint, the trail descends back to Kyanjin Gompa for the night.',
        stats: {
          elevation: '4,773m · Kyanjin Ri',
          duration: '4-6 hrs round trip',
          distance: '5-6km',
        },
        coordinates: [28.2124247, 85.5672161],
        price: 'NPR 2,200 (Accommodation: 700, Meals: 1,500)',
        isDestination: true,
      },

      {
        day: '06',
        title: 'Kyanjin Gompa → Lama Hotel',
        description:
          'Retracing the valley from Kyanjin Gompa, the descent passes through Langtang Village. As you lose elevation, vegetation gradually becomes denser and the landscape shifts from alpine meadows and exposed mountain slopes back toward forest. The long descent continues through the familiar trail to Lama Hotel at approximately 2,470 m, providing a substantially lower sleeping elevation after the high-altitude day at Kyanjin Ri.',
        stats: {
          elevation: '~3,870m · Kyanjin Gompa',
          duration: '6-7 hrs',
          distance: '14-15km',
        },
        coordinates: [28.1612117, 85.4296495],
        price: 'NPR 1,900 (Accommodation: 700, Meals: 1,200)',
      },

      {
        day: '07',
        title: 'Lama Hotel → Syabrubesi → Kathmandu',
        description:
          'The final morning brings you back along the lower Langtang Khola to Syabrubesi. The route retraces the familiar trail through the lower settlements and suspension bridges before reaching Syabrubesi, where the trekking portion of your journey comes to an end. From Syabrubesi, you continue overland toward Kathmandu. Road and traffic conditions can affect the return journey, so the drive is best treated as a variable travel period rather than assigned a fixed duration.',
        stats: {
          elevation: '-',
          duration: '4-5 hrs trek + variable drive',
          distance: '11-12km',
        },
        coordinates: [28.1657291, 85.3418267],
        price: 'NPR 1,000 (Meals: 1,000)',
      },
    ],

    expectations: [
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

    seasonalPlanning: [
      { month: 'Jan', condition: 'Extremely Cold / Heavy Snow on Passes' },
      { month: 'Feb', condition: 'Freezing Temperatures / Quiet Trails' },
      { month: 'Mar', condition: 'Spring Bloom / Vibrant Rhododendrons' },
      { month: 'Apr', condition: 'Perfect Climbing Weather / Peak Season' },
      { month: 'May', condition: 'Warm Temperatures / Pre-Monsoon Views' },
      { month: 'Jun', condition: 'Beginning of Monsoon / Cloudy Skies' },
      { month: 'Jul', condition: 'Heavy Rain / Lush Greenery / Leeches' },
      { month: 'Aug', condition: 'Peak Monsoon / Wet & Muddy Trails' },
      { month: 'Sep', condition: 'Late-Monsoon / Crisp & Fresh Air' },
      { month: 'Oct', condition: 'Crystal Clear Skies / Most Popular Month' },
      { month: 'Nov', condition: 'Cool & Stable / Excellent Visibility' },
      { month: 'Dec', condition: 'Winter Chill / Crystal Clear Blue Skies' },
    ],
    gallery: [
      {
        id: 'img_01',
        url: '/images/langtang/1.jpg',
        alt: 'Langtang 1',
        type: 'hero',
        order: 1,
      },
      {
        id: 'img_02',
        url: '/images/langtang/2.webp',
        alt: 'Langtang 2',
        type: 'landscape',
      },
      {
        id: 'img_03',
        url: '/images/langtang/3.webp',
        alt: 'Langtang 3',
        type: 'portrait',
      },
      {
        id: 'img_04',
        url: '/images/langtang/4.webp',
        alt: 'Langtang 4',
        type: 'landscape',
      },
      {
        id: 'img_05',
        url: '/images/langtang/5.webp',
        alt: 'Langtang 5',
        type: 'landscape',
      },
      {
        id: 'img_06',
        url: '/images/langtang/6.webp',
        alt: 'Langtang 6',
        type: 'landscape',
      },
      {
        id: 'img_07',
        url: '/images/langtang/7.webp',
        alt: 'Langtang 7',
        type: 'hero',
      },
      {
        id: 'img_08',
        url: '/images/langtang/8.webp',
        alt: 'Langtang 8',
        type: 'landscape',
      },
      {
        id: 'img_09',
        url: '/images/langtang/9.webp',
        alt: 'Langtang 9',
        type: 'portrait',
      },
      {
        id: 'img_10',
        url: '/images/langtang/10.webp',
        alt: 'Langtang 10',
        type: 'landscape',
      },
      {
        id: 'img_11',
        url: '/images/langtang/11.webp',
        alt: 'Langtang 11',
        type: 'landscape',
      },
      {
        id: 'img_12',
        url: '/images/langtang/12.webp',
        alt: 'Langtang 12',
        type: 'landscape',
      },
      {
        id: 'img_13',
        url: '/images/langtang/13.webp',
        alt: 'Langtang 13',
        type: 'portrait',
      },
      {
        id: 'img_14',
        url: '/images/langtang/14.webp',
        alt: 'Langtang 14',
        type: 'landscape',
      },
      {
        id: 'img_015',
        url: '/images/langtang/15.webp',
        alt: 'Langtang 15',
        type: 'landscape',
      },
      {
        id: 'img_16',
        url: '/images/langtang/16.webp',
        alt: 'Langtang 16',
        type: 'landscape',
      },
      {
        id: 'img_17',
        url: '/images/langtang/17.webp',
        alt: 'Langtang 17',
        type: 'hero',
      },
      {
        id: 'img_18',
        url: '/images/langtang/18.webp',
        alt: 'Langtang 18',
        type: 'landscape',
      },
      {
        id: 'img_20',
        url: '/images/langtang/19.webp',
        alt: 'Langtang 20',
        type: 'landscape',
      },
      {
        id: 'img_21',
        url: '/images/langtang/20.webp',
        alt: 'Langtang 21',
        type: 'landscape',
      },
    ],
    gearChecklist: {
      essentials: [
        { item: 'Backpack (45-60L)', weight: '1.5kg' },
        { item: 'Rain Cover for Backpack', weight: '0.08kg' },
        { item: 'Down Jacket', weight: '0.425kg' },
        { item: 'Raincoat / Waterproof Shell Jacket', weight: '0.34kg' },
        { item: 'Fleece / Insulated Mid Layer', weight: '0.34kg' },
        { item: 'Thermal Base Layer Top', weight: '0.2kg', quantity: 1 },
        // { item: 'Thermal Base Layer Bottom', weight: '0.2kg', quantity: 1 },
        { item: 'Trekking T-Shirt', weight: '0.14kg', quantity: 3 },
        { item: 'Trekking Pants', weight: '0.315kg', quantity: 2 },
        { item: 'Trekking Boots (pair)', weight: '1.1kg' },
        { item: 'Trekking Socks (per pair)', weight: '0.06kg', quantity: 3 },
        { item: 'Warm Hat / Beanie', weight: '0.075kg' },
        { item: 'Sun Cap', weight: '0.06kg' },
        { item: 'Light Gloves', weight: '0.065kg' },
        { item: 'Trekking Poles (pair)', weight: '0.475kg' },
        { item: 'Headlamp', weight: '0.1kg' },
        { item: 'Water Bottle (1L, empty)', weight: '0.125kg' },
        { item: 'Sunglasses (UV 400 Protection)', weight: '0.033kg' },
        { item: 'Sunscreen + Lip Balm', weight: '0.1kg' },
        { item: 'Personal First Aid Kit', weight: '0.275kg' },
        { item: 'Passport, Permits, Cash, Insurance Copy', weight: '0.15kg' },
      ],
      optional: [
        { item: 'Sleeping Bag (-10°C to -15°C comfort)', weight: '1.4kg' },
        { item: 'Waterproof Rain Pants', weight: '0.215kg' },
        { item: 'Thermal Base Layer Bottom', weight: '0.2kg', quantity: 1 },
        {
          item: 'Warm Trekking Trousers / Softshell Pants',
          weight: '0.37kg',
          quantity: 2,
        },
        { item: 'Camp Shoes / Sandals', weight: '0.325kg' },
        { item: 'Warm Outer Gloves', weight: '0.11kg' },
        { item: 'Buff / Neck Gaiter', weight: '0.043kg' },
        { item: 'Water Purification Tablets / Filter', weight: '0.075kg' },
        { item: 'Toiletries & Quick-Dry Towel', weight: '0.325kg' },
        { item: 'Power Bank (10,000-20,000 mAh)', weight: '0.265kg' },
        { item: 'Charging Cable / Adapter', weight: '0.09kg' },
        { item: 'Snacks / Energy Bars', weight: '0.45kg', quantity: 3 },
      ],
    },
    foodMenu: {
      categories: LANGTANG_FOOD_MENU,
    },
  },
  'abc-trek': {
    id: 'annapurna-base-camp-ascent',
    name: 'Annapurna Base Camp',
    summary:
      'Trek through the Annapurna Sanctuary, passing Gurung villages, bamboo and rhododendron forests, the Modi Khola valley, and alpine terrain on the way to Annapurna Base Camp.',
    region: 'Annapurna Region',
    meta: {
      duration: '7 Days ',
      difficulty: 'Moderate',
      maxElevation: '4,130m',
      bestSeasons: 'March-May, September-November',
      startingPoint: 'Pokhara',
      tripFacts: {
        flights: 'None',
        accommodation: 'Tea House / Trekking Lodges',
        routeType: 'Out & Back',
        permits: 'Annapurna Conservation Area Permit, TIMS',
      },
    },
    overview:
      'The Annapurna Base Camp trek follows the Modi Khola valley into the Annapurna Sanctuary, beginning with a drive from Pokhara toward the lower trailhead near Jhinu Danda. From there, the route climbs through Chhomrong and Sinuwa before entering a narrower section of the valley surrounded by bamboo, oak, and rhododendron forest. The trail continues through Dovan and Deurali toward Machhapuchhre Base Camp, where the landscape becomes increasingly open and alpine. As the route gains elevation, the forest gradually gives way to rocky slopes, glacial terrain, and the high mountain environment of the Annapurna Sanctuary. The trail reaches Annapurna Base Camp at 4,130 m, surrounded by peaks including Annapurna I, Annapurna South, Hiunchuli, and Machhapuchhre. After reaching the highest point of the trek, the route retraces its path toward the lower valleys before descending to Jhinu Danda and returning to Pokhara.',

    timeline: [
      {
        day: '01',
        title: 'Pokhara → Chhomrong',
        description:
          'The journey begins with a drive from Pokhara toward the roadhead near Jhinu Danda. From the trailhead, the route crosses the Modi Khola and climbs through forest toward Chhomrong. The first section includes a substantial series of stone steps, making this one of the more physically demanding climbs of the lower route. The trail continues upward through forest and scattered settlements before reaching Chhomrong at approximately 2,170 m. Set on a steep hillside above the Modi Khola valley, Chhomrong is one of the major Gurung settlements on the route and serves as the gateway toward the Annapurna Sanctuary.',
        stats: {
          elevation: '2,170m',
          duration: '3 hrs',
          distance: '5km',
        },
        coordinates: [28.4200417, 83.8176077],
        price: 'NPR 4,300 (Transport: 2,000, Accommodation: 800, Meals: 1,500)',
      },

      {
        day: '02',
        title: 'Chhomrong → Dovan',
        description:
          'The trail descends from Chhomrong on a long series of stone steps toward the Chhomrong Khola before crossing the river and climbing again toward Sinuwa. From Sinuwa, the route enters the forested Modi Khola valley, passing through Bamboo before continuing toward Dovan. The vegetation becomes increasingly dense and humid along this section, with bamboo, oak, and rhododendron forest covering much of the trail. The valley gradually narrows as the route continues toward Dovan at approximately 2,600 m, where the surrounding terrain begins to feel more enclosed and mountainous.',
        stats: {
          elevation: '2,600m',
          duration: '5-6 hrs',
          distance: '9-12km',
        },
        coordinates: [28.4697078, 83.8694284],
        price: 'NPR 2,100 (Accommodation: 600, Meals: 1,500)',
      },

      {
        day: '03',
        title: 'Dovan → Deurali',
        description:
          'The trail continues uphill from Dovan through the narrowing Modi Khola valley. Sections of dense bamboo and rhododendron forest give way to steeper and rockier terrain as the route passes Himalaya and continues toward the Hinku Cave area. The landscape becomes more open as the trail approaches Deurali at approximately 3,200 m, marking the transition toward the higher alpine environment of the Annapurna Sanctuary. This is a relatively short trekking day compared with the longer lower-valley sections, but the increasing elevation makes a steady pace important.',
        stats: {
          elevation: '3,200m',
          duration: '3-4 hrs',
          distance: '6km',
        },
        coordinates: [28.4933, 83.893],
        price: 'NPR 2,200 (Accommodation: 600, Meals: 1,600)',
      },

      {
        day: '04',
        title: 'Deurali → Machhapuchhre Base Camp (MBC)',
        description:
          'Above Deurali, the forest gradually thins as the route enters more exposed alpine terrain. The valley opens toward the upper Modi Khola, with rocky slopes and glacial features replacing much of the vegetation found at lower elevations. The trail continues toward the entrance of the Annapurna Sanctuary. The route reaches Machhapuchhre Base Camp at approximately 3,700 m, positioned beneath the distinctive fluted face of Machhapuchhre (Fishtail). From here, the surrounding peaks become increasingly prominent and the landscape takes on a distinctly high-altitude character.',
        stats: {
          elevation: '3,700m',
          duration: '3-4 hrs',
          distance: '5km',
        },
        coordinates: [28.5132035, 83.9060408],
        price: 'NPR 2,400 (Accommodation: 800, Meals: 1,600)',
      },

      {
        day: '05',
        title: 'MBC → Annapurna Base Camp (ABC)',
        description:
          'The trail continues gently upward from Machhapuchhre Base Camp into the heart of the Annapurna Sanctuary. With the forest now completely behind you, the route crosses open alpine and glacial terrain while the surrounding peaks become increasingly dominant. The trail reaches Annapurna Base Camp at 4,130 m, where the valley opens into a natural amphitheatre surrounded by the Annapurna massif. Depending on weather and visibility, views can include Annapurna I, Annapurna South, Hiunchuli, Machhapuchhre, and other surrounding peaks.',
        stats: {
          elevation: '4,130m',
          duration: '2-3 hrs',
          distance: '3-4km',
        },
        coordinates: [28.5308115, 83.8777275],
        price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
        isDestination: true,
      },

      {
        day: '06',
        title: 'ABC → Bamboo (Descent)',
        description:
          'The route retraces the trail from Annapurna Base Camp through Machhapuchhre Base Camp, Deurali, Himalaya, and Dovan before continuing toward Bamboo. The long descent brings a rapid change in elevation and landscape, with the open alpine environment gradually giving way to forest. Although the route is descending, the uneven trail and repeated stone steps can make this one of the more physically demanding days. By the time you reach Bamboo at approximately 2,310 m, the warmer and greener forest environment provides a noticeable contrast to the high Sanctuary.',
        stats: {
          elevation: '2,310m',
          duration: '6-7 hrs',
          distance: '13-16km',
        },
        coordinates: [28.457, 83.8569],
        price: 'NPR 2,600 (Accommodation: 800, Meals: 1,800)',
      },

      {
        day: '07',
        title: 'Bamboo → Jhinu Danda & Drive → Pokhara',
        description:
          'The final trekking section continues through the forest toward Sinuwa before climbing back toward Chhomrong. From Chhomrong, the trail follows a long staircase down toward Jhinu Danda, where the trekking route leaves the higher valley. The natural hot springs below Jhinu Danda provide an optional stop before the final drive to Pokhara. From the forested lower valley, the route returns to the roadhead and continues by vehicle toward Pokhara, bringing the seven-day journey into the Annapurna Sanctuary to an end.',
        stats: {
          elevation: '1,780m',
          duration: '5-6 hrs trek + 2-3 hrs drive',
          distance: '10-11km',
        },
        coordinates: [28.4096, 83.8241],
        price: 'NPR 3,000 (Transport: 2,000, Meals: 1,000)',
      },
    ],
    expectations: [
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
          "Be prepared for the famous 'Nepali flat'—thousands of steep stone staircases that test your leg endurance on the way up to the sanctuary.",
      },
    ],
    seasonalPlanning: [
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
    gallery: [
      {
        id: 'abc_img_01',
        url: '/images/abc/image.png',
        alt: 'Panoramic view of the Annapurna Sanctuary',
        type: 'hero',
      },
      {
        id: 'abc_img_02',
        url: '/images/abc/annapurna.jpg',
        alt: 'Machhapuchhre (Fishtail) peak towering over MBC',
        type: 'portrait',
      },
      {
        id: 'abc_img_03',
        url: '/images/abc/annapurna1.jpg',
        alt: 'Trekking through a blooming rhododendron forest',
        type: 'landscape',
      },
      {
        id: 'abc_img_04',
        url: '/images/abc/image0.png',
        alt: 'The stone terraces of Chhomrong village',
        type: 'landscape',
      },
      {
        id: 'abc_img_05',
        url: '/images/abc/image1.png',
        alt: 'The stone terraces of Chhomrong village',
        type: 'landscape',
      },
      {
        id: 'abc_img_06',
        url: '/images/abc/image3.png',
        alt: 'The stone terraces of Chhomrong village',
        type: 'landscape',
      },
    ],
    gearChecklist: {
      essentials: [
        { item: 'Backpack (45-60L)', weight: '1.5kg' },
        { item: 'Rain Cover for Backpack', weight: '0.08kg' },
        { item: 'Down Jacket', weight: '0.425kg' },
        { item: 'Raincoat / Waterproof Shell Jacket', weight: '0.34kg' },
        { item: 'Fleece / Insulated Mid Layer', weight: '0.34kg' },
        { item: 'Thermal Base Layer Top', weight: '0.2kg', quantity: 1 },
        // { item: 'Thermal Base Layer Bottom', weight: '0.2kg', quantity: 1 },
        { item: 'Trekking T-Shirt', weight: '0.14kg', quantity: 3 },
        { item: 'Trekking Pants', weight: '0.315kg', quantity: 2 },
        { item: 'Trekking Boots (pair)', weight: '1.1kg' },
        { item: 'Trekking Socks (per pair)', weight: '0.06kg', quantity: 3 },
        { item: 'Warm Hat / Beanie', weight: '0.075kg' },
        { item: 'Sun Cap', weight: '0.06kg' },
        { item: 'Light Gloves', weight: '0.065kg' },
        { item: 'Trekking Poles (pair)', weight: '0.475kg' },
        { item: 'Headlamp', weight: '0.1kg' },
        { item: 'Water Bottle (1L, empty)', weight: '0.125kg' },
        { item: 'Sunglasses (UV 400 Protection)', weight: '0.033kg' },
        { item: 'Sunscreen + Lip Balm', weight: '0.1kg' },
        { item: 'Personal First Aid Kit', weight: '0.275kg' },
        { item: 'Passport, Permits, Cash, Insurance Copy', weight: '0.15kg' },
      ],
      optional: [
        { item: 'Sleeping Bag (-10°C to -15°C comfort)', weight: '1.4kg' },
        { item: 'Waterproof Rain Pants', weight: '0.215kg' },
        { item: 'Thermal Base Layer Bottom', weight: '0.2kg', quantity: 1 },
        {
          item: 'Warm Trekking Trousers / Softshell Pants',
          weight: '0.37kg',
          quantity: 2,
        },
        { item: 'Camp Shoes / Sandals', weight: '0.325kg' },
        { item: 'Warm Outer Gloves', weight: '0.11kg' },
        { item: 'Buff / Neck Gaiter', weight: '0.043kg' },
        { item: 'Water Purification Tablets / Filter', weight: '0.075kg' },
        { item: 'Toiletries & Quick-Dry Towel', weight: '0.325kg' },
        { item: 'Power Bank (10,000-20,000 mAh)', weight: '0.265kg' },
        { item: 'Charging Cable / Adapter', weight: '0.09kg' },
        { item: 'Snacks / Energy Bars', weight: '0.45kg', quantity: 3 },
      ],
    },
  },
  'gokyo-valley-trek': {
    id: 'gokyo-valley-trek',
    name: 'Gokyo Valley Trek',
    summary:
      'Trek through the Gokyo Valley to a series of high-altitude glacial lakes, alongside the Ngozumpa Glacier, and climb Gokyo Ri at 5,357 m for expansive Himalayan views.',
    region: 'Khumbu Region',
    meta: {
      duration: '11 Days',
      difficulty: 'Challenging',
      maxElevation: '5,357m',
      bestSeasons: 'March-May, September-November',
      startingPoint: 'Kathmandu',
      tripFacts: {
        flights: 'Kathmandu ⇄ Lukla',
        accommodation: 'Tea houses / lodges',
        routeType: 'Out and Back',
        permits:
          'Sagarmatha National Park Entry Permit · Khumbu Pasang Lhamu Rural Municipality Trek-Card',
      },
    },
    overview:
      "The Gokyo Valley Trek takes you from Kathmandu into the Khumbu through Lukla, Namche Bazaar and the Dudh Koshi valley before turning toward the Gokyo Valley. As you climb higher, forest gives way to alpine terrain, glacial landscapes and the turquoise Gokyo Lakes.\n\nGokyo village sits beside Dudh Pokhari, the third and largest of the main Gokyo Lakes. From here, the trail climbs to Gokyo Ri, a high viewpoint at approximately 5,357 m. On a clear day, you can look across the Gokyo Lakes and surrounding glaciers toward some of the world's highest peaks. Nepal Tourism Board specifically identifies Gokyo Ri as a viewpoint for the surrounding peaks and lakes.\n\nThe Gokyo Lakes also have religious significance for Hindu and Buddhist communities and form part of the Gokyo and associated lakes Ramsar site.",
    timeline: [
      {
        day: '01',
        title: 'Kathmandu to Lukla to Phakding',
        description:
          'The journey begins with a flight toward Lukla, the main gateway for this route. Depending on current flight operations, departures may be arranged from Kathmandu or Ramechhap. Flight schedules can change with weather and operational conditions, so your departure airport and timing should be confirmed before the trek.\n\nAfter landing at Lukla, you begin walking through the lower Khumbu, passing Chheplung and Ghat before following the Dudh Koshi toward Phakding. The relatively short first walking day gives you time to settle into the trail and adjust your pace.',
        stats: {
          elevation: '2,610m',
          duration: 'Flight + 3-4 hours trek',
          distance: '8km',
        },
        coordinates: [27.73926, 86.71228],
        price: 'NPR 2,500 (Accommodation: 1,000, Meals: 1,500)',
      },
      {
        day: '02',
        title: 'Phakding to Namche Bazaar',
        description:
          'From Phakding, you follow the Dudh Koshi River toward Monjo, crossing suspension bridges and passing through small settlements along the valley. The route enters Sagarmatha National Park at the Monjo checkpoint.\n\nThe character of the day changes after the river crossing below Namche. A sustained climb through pine and rhododendron forest leads toward Namche Bazaar at approximately 3,440 m. Take this ascent steadily; it is one of the first substantial elevation gains of the trek.',
        stats: { elevation: '3,440m', duration: '6-7 hours', distance: '11km' },
        coordinates: [27.80231, 86.71119],
        price: 'NPR 3,700 (Accommodation: 1,200, Meals: 2,500)',
      },
      {
        day: '03',
        title: 'Acclimatization Day: Namche Bazaar',
        description:
          'A second night at Namche Bazaar (~3,440 m) gives you time to adjust before the route climbs higher. A short daytime hike is useful for staying active while returning to Namche to sleep at the same elevation.\n\nRather than treating the day as complete rest, a short hike to a higher elevation followed by a return to Namche can help you stay active while keeping your sleeping elevation unchanged. One popular option is the viewpoint area around the Everest View Hotel at approximately 3,880 m.',
        stats: {
          elevation: '3,440m',
          duration: '3-4 hours',
          distance: '6km',
          note: 'Acclimatization Day',
        },
        coordinates: [27.80231, 86.71119],
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },
      {
        day: '04',
        title: 'Namche Bazaar to Dole',
        description:
          'The route toward Gokyo separates from the main Everest Base Camp corridor around Kyanjuma. From there, the path climbs toward Mong La, then descends toward Phortse Tenga before climbing again through rhododendron and birch forest.\n\nAt around 4,038 m, Dole is a small high-altitude settlement surrounded by open mountain terrain. You are now sleeping considerably higher than at Namche, so a steady pace becomes increasingly important.',
        stats: { elevation: '4,038m', duration: '5-6 hours', distance: '10km' },
        coordinates: [27.86848, 86.74148],
        price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
      },
      {
        day: '05',
        title: 'Dole to Machhermo',
        description:
          'The vegetation becomes increasingly sparse as you climb out of Dole. Juniper and alpine pasture replace the denser forests lower in the valley, while the surrounding peaks become more prominent.\n\nThe walk to Machhermo at approximately 4,470 m is shorter than the previous day, but the continued elevation gain makes pacing important. Once you arrive, the afternoon is best kept easy so your body can adjust before the climb toward Gokyo.',
        stats: {
          elevation: '4,470m',
          duration: '3-4 hours',
          distance: '7km',
          note: 'Short day by design — critical acclimatization gain',
        },
        coordinates: [27.90763, 86.7215],
        price: 'NPR 3,700 (Accommodation: 1,200, Meals: 2,500)',
      },
      {
        day: '06',
        title: 'Machhermo to Gokyo',
        description:
          'From Machhermo, the landscape opens toward the glacial terrain around the Ngozumpa Glacier. The route passes through Pangka before approaching the Gokyo lake system.\n\nThe first lakes appear as you continue north, followed by the second and third lakes. Gokyo village sits beside Dudh Pokhari, the third lake, at approximately 4,750 m. After reaching the village, the afternoon is best spent resting and taking in the high-altitude surroundings.',
        stats: { elevation: '4,750m', duration: '4-5 hours', distance: '7km' },
        coordinates: [27.9603, 86.6839],
        price: 'NPR 5,000 (Accommodation: 2,000, Meals: 3,000)',
      },
      {
        day: '07',
        title: 'Gokyo Ri · Fourth & Fifth Lakes',
        description:
          "An early start takes you toward Gokyo Ri at 5,357 m, the highest point of the trek. The climb is steep and demanding at this elevation, so allow plenty of time and keep your pace controlled.\n\nFrom the viewpoint, clear conditions can reveal Everest, Lhotse, Makalu and Cho Oyu among the surrounding Himalayan peaks, with the Gokyo Lakes and Ngozumpa Glacier spread below. After returning to Gokyo, you can continue toward the Fourth and Fifth Lakes if conditions, energy and your guide's assessment make the extension appropriate.",
        stats: {
          elevation: '5,357m',
          duration: '5-6 hours',
          distance: '10km',
          note: 'Gokyo Ri is the highest point of the trek. Start early and keep your pace controlled.',
        },
        coordinates: [27.96154, 86.68313],
        price: 'NPR 4,000 (Accommodation: 1,500, Meals: 2,500)',
        isDestination: true,
      },
      {
        day: '08',
        title: 'Gokyo to Dole',
        description:
          'After the Gokyo Ri excursion, you begin the descent through the valley. The Gokyo Lakes and Ngozumpa Glacier gradually fall behind as the trail retraces the route toward Machhermo and Dole.\n\nThe drop in elevation makes the air feel noticeably easier, although the descent itself can be demanding on tired legs. Take care on rocky sections and allow yourself time to reach Dole at around 4,038 m.',
        stats: { elevation: '4,038m', duration: '5-6 hours', distance: '11km' },
        coordinates: [27.865, 86.725],
        price: 'NPR 4,000 (Accommodation: 1,500, Meals: 2,500)',
      },
      {
        day: '09',
        title: 'Dole to Namche Bazaar',
        description:
          'The return to Namche takes you back through Phortse Tenga and Mong La, with a mixture of descents and shorter climbs along the hillside. The forest becomes denser again as you lose altitude.\n\nEventually, the route reconnects with the familiar approach to Namche Bazaar at approximately 3,440 m. After several nights in the high valley, the lower elevation and more developed services in Namche provide a noticeable change.',
        stats: { elevation: '3,440m', duration: '6-7 hours', distance: '12km' },
        coordinates: [27.805, 86.7106],
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },
      {
        day: '10',
        title: 'Namche Bazaar to Lukla',
        description:
          "Your final trekking day retraces the Dudh Koshi valley toward Lukla. You pass through Monjo and Phakding, crossing suspension bridges and moving through increasingly green forest as the elevation drops.\n\nThe walk is still substantial despite the lower altitude. After reaching Lukla at approximately 2,860 m, you can use the evening to rest and confirm the following day's flight arrangements.",
        stats: { elevation: '2,860m', duration: '7-8 hours', distance: '18km' },
        coordinates: [27.6868, 86.7314],
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },
      {
        day: '11',
        title: 'Lukla to Kathmandu',
        description:
          'Your trek ends with the flight from Lukla to Kathmandu. Flight operations depend on weather and operational conditions in the region, so departure times can change.\n\nAllow flexibility in your wider travel plans, particularly if you have an international flight or other fixed connection after returning to Kathmandu.',
        stats: {
          elevation: '1,400m',
          duration: '35-min flight + transfer',
          distance: '-',
        },
        coordinates: [27.7172, 85.324],
        price: 'NPR 1,500 (Meals: 1,500)',
      },
    ],
    expectations: [
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
    seasonalPlanning: [
      {
        month: 'Jan',
        condition: 'Heavy Snow Above 4,000m / Trail to Gokyo Ri May Be Closed',
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
      { month: 'Aug', condition: 'Peak Monsoon / High Risk / Avoid' },
      {
        month: 'Sep',
        condition: 'Late-Monsoon / Fresh Air / Some Cloud Lingering / Quieter',
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
        condition: 'Very Cold Above 4,000m / Clear Skies / Almost Empty Trail',
      },
    ],
    gallery: [
      {
        id: 'img_01',
        url: '/images/gokyo/gokyo.webp',
        alt: 'Turquoise Gokyo Lakes below the surrounding Himalayan peaks',
        type: 'hero',
      },
      {
        id: 'img_02',
        url: '/images/gokyo/gokyo1.webp',
        alt: 'High-altitude alpine terrain along the Gokyo valley',
        type: 'landscape',
      },
      {
        id: 'img_03',
        url: '/images/gokyo/gokyo6.jpg',
        alt: 'The Gokyo Lakes beside the Ngozumpa Glacier',
        type: 'portrait',
      },
      {
        id: 'img_04',
        url: '/images/gokyo/gokyo3.webp',
        alt: 'Gokyo village beside Dudh Pokhari',
        type: 'landscape',
      },
      {
        id: 'img_05',
        url: '/images/gokyo/gokyo4.webp',
        alt: 'Dudh Koshi valley and suspension bridges below Namche',
        type: 'landscape',
      },
      {
        id: 'img_06',
        url: '/images/gokyo/gokyo5.jpg',
        alt: 'Namche Bazaar and the Khumbu approach',
        type: 'landscape',
      },
    ],
    gearChecklist: {
      essentials: [
        { item: 'Backpack (45-60L)', weight: '1.5kg' },
        { item: 'Rain Cover for Backpack', weight: '0.08kg' },
        { item: 'Down Jacket', weight: '0.425kg' },
        { item: 'Raincoat / Waterproof Shell Jacket', weight: '0.34kg' },
        { item: 'Fleece / Insulated Mid Layer', weight: '0.34kg' },
        { item: 'Thermal Base Layer Top', weight: '0.2kg', quantity: 1 },
        // { item: 'Thermal Base Layer Bottom', weight: '0.2kg', quantity: 1 },
        { item: 'Trekking T-Shirt', weight: '0.14kg', quantity: 3 },
        { item: 'Trekking Pants', weight: '0.315kg', quantity: 2 },
        { item: 'Trekking Boots (pair)', weight: '1.1kg' },
        { item: 'Trekking Socks (per pair)', weight: '0.06kg', quantity: 3 },
        { item: 'Warm Hat / Beanie', weight: '0.075kg' },
        { item: 'Sun Cap', weight: '0.06kg' },
        { item: 'Light Gloves', weight: '0.065kg' },
        { item: 'Trekking Poles (pair)', weight: '0.475kg' },
        { item: 'Headlamp', weight: '0.1kg' },
        { item: 'Water Bottle (1L, empty)', weight: '0.125kg' },
        { item: 'Sunglasses (UV 400 Protection)', weight: '0.033kg' },
        { item: 'Sunscreen + Lip Balm', weight: '0.1kg' },
        { item: 'Personal First Aid Kit', weight: '0.275kg' },
        { item: 'Passport, Permits, Cash, Insurance Copy', weight: '0.15kg' },
      ],
      optional: [
        { item: 'Sleeping Bag (-10°C to -15°C comfort)', weight: '1.4kg' },
        { item: 'Waterproof Rain Pants', weight: '0.215kg' },
        { item: 'Thermal Base Layer Bottom', weight: '0.2kg', quantity: 1 },
        {
          item: 'Warm Trekking Trousers / Softshell Pants',
          weight: '0.37kg',
          quantity: 2,
        },
        { item: 'Camp Shoes / Sandals', weight: '0.325kg' },
        { item: 'Warm Outer Gloves', weight: '0.11kg' },
        { item: 'Buff / Neck Gaiter', weight: '0.043kg' },
        { item: 'Water Purification Tablets / Filter', weight: '0.075kg' },
        { item: 'Toiletries & Quick-Dry Towel', weight: '0.325kg' },
        { item: 'Power Bank (10,000-20,000 mAh)', weight: '0.265kg' },
        { item: 'Charging Cable / Adapter', weight: '0.09kg' },
        { item: 'Snacks / Energy Bars', weight: '0.45kg', quantity: 3 },
      ],
    },
  },
  'ghorepani-poon-hill-trek': {
    id: 'ghorepani-poon-hill-trek',
    name: 'Ghorepani Poon Hill Trek',
    summary:
      'Trek through the lower Annapurna region, passing Gurung and Magar villages, rhododendron forests, and terraced fields on the way to Poon Hill.',
    region: 'Annapurna Region',
    meta: {
      duration: '5 Days',
      difficulty: 'Moderate',
      maxElevation: '3,210m',
      bestSeasons: 'March-May, September-November',
      startingPoint: 'Pokhara',
      tripFacts: {
        flights: 'None',
        accommodation: 'Tea House',
        routeType: 'Circuit',
        permits: 'Annapurna Conservation Area Permit, TIMS',
      },
    },
    overview:
      'The Ghorepani Poon Hill trek follows the classic trail through the lower foothills of the Annapurna region, beginning with a drive from Pokhara toward the trailhead at Birethanti or Nayapul. From there, the route ascends through terraced farmland, traditional Magar settlements, and dense oak and rhododendron forests toward Ulleri and Ghorepani. The trail steadily climbs through the Modi and Bhurungdi Khola valleys, where the landscape transitions from cultivated lower hills to rich temperate forest. As the route reaches Ghorepani, the surrounding forest gives way to panoramic views of the Annapurna and Dhaulagiri mountain ranges. An early morning ascent leads to the summit of Poon Hill at 3,210 m, providing panoramic mountain views before the route descends through Tadapani and the historic Gurung village of Ghandruk. After traversing dense forests and scenic terraced hillsides, the trek descends back toward Birethanti before returning to Pokhara.',

    timeline: [
      {
        day: '01',
        title: 'Pokhara → Birethanti → Tikhedhunga / Ulleri',
        description:
          'A morning drive from Pokhara takes you toward Nayapul and Birethanti, where the trekking route follows the Bhurungdi Khola through terraced farmland and small settlements. From Tikhedhunga, the trail becomes steeper as you climb a long series of stone steps toward Ulleri. The sustained ascent gains significant elevation, with occasional openings offering views toward Annapurna South and Hiunchuli on clear days. The day ends in Ulleri at approximately 1,960 m, a traditional Magar settlement and common overnight stop on the Poon Hill route.',
        stats: {
          elevation: '1,960m',
          duration: '4-5 hrs',
          distance: '10km',
        },
        coordinates: [28.3766, 83.7164],
        price: 'NPR 3,500 (Transport: 1,500, Accommodation: 500, Meals: 1,500)',
      },

      {
        day: '02',
        title: 'Ulleri → Banthanti → Ghorepani',
        description:
          'The trail leaves Ulleri and enters a dense forest of oak, magnolia, and rhododendron. The route continues on a steady incline, passing small teahouses and streams around Banthanti and Nangethanti as you move deeper into the forest. The forest canopy becomes thicker and the air cooler with elevation. The final section climbs through the upper woodland before emerging at Ghorepani, approximately 2,860 m, where openings along the ridge can offer views toward Dhaulagiri and the Annapurna range.',
        stats: {
          elevation: '2,860m',
          duration: '5-6 hrs',
          distance: '8km',
        },
        coordinates: [28.4006, 83.6997],
        price: 'NPR 2,500 (Accommodation: 700, Meals: 1,800)',
      },

      {
        day: '03',
        title: 'Ghorepani → Poon Hill → Tadapani',
        description:
          'The day begins before dawn with a steep climb up the stone trail to Poon Hill at 3,210 m, the highest point of the trek. As morning light reaches the mountains, the summit ridge opens to wide views across Dhaulagiri I, Annapurna I, Annapurna South, Machhapuchhre, and Nilgiri. After descending to Ghorepani for breakfast, the route follows a high ridge through pine and rhododendron forest toward Deurali Pass. The trail then descends through a narrow forested section before a short climb brings you to Tadapani at approximately 2,630 m.',
        stats: {
          elevation: '3,210m',
          duration: '6-7 hrs',
          distance: '12km',
        },
        coordinates: [28.3997, 83.7424],
        price: 'NPR 2,500 (Accommodation: 700, Meals: 1,800)',
        isDestination: true,
      },

      {
        day: '04',
        title: 'Tadapani → Ghandruk',
        description:
          'From Tadapani, the route descends through rhododendron and oak forest. The trail gradually loses elevation as the woodland gives way to more open slopes, terraces, and scattered settlements. The route eventually reaches Ghandruk at approximately 1,940 m, a traditional Gurung village in Kaski. Stone-paved lanes, traditional houses, and the Gurung Museum provide a cultural contrast to the forest sections of the previous days, while clear openings can offer views toward Annapurna South, Hiunchuli, and Machhapuchhre.',
        stats: {
          elevation: '1,940m',
          duration: '3-4 hrs',
          distance: '7km',
        },
        coordinates: [28.3845, 83.8057],
        price: 'NPR 2,500 (Accommodation: 800, Meals: 1,700)',
      },

      {
        day: '05',
        title: 'Ghandruk → Birethanti → Pokhara',
        description:
          'The final day descends from Ghandruk through terraced fields and small stone hamlets toward the Modi Khola valley. The trail follows stone stairways down the hillside, passing local farms and rural homesteads along the way. After reaching the valley floor, the route follows the river toward Birethanti, where the trekking section concludes. From Birethanti, a short drive returns you to Pokhara, completing the five-day Ghorepani–Poon Hill circuit.',
        stats: {
          elevation: '1,940m',
          duration: '4-5 hrs',
          distance: '10km',
        },
        coordinates: [28.2826, 83.7484],
        price: 'NPR 2,000 (Transport: 1,000, Meals: 1,000)',
      },
    ],
    expectations: [
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
    seasonalPlanning: [
      {
        month: 'Jan',
        condition:
          'Cold at Ghorepani / Possible Snow / Manageable with Good Gear',
      },
      { month: 'Feb', condition: 'Cold & Quiet / No Rhododendron Bloom Yet' },
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
      { month: 'Jun', condition: 'Monsoon Begins / Slippery Trails / Leeches' },
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
        condition: 'Sharpest Visibility / Most Reliable Sunrise / Peak Season',
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
    gallery: [
      {
        id: 'img_01',
        url: '/images/poonhill/poonhill5.webp',
        alt: 'Poon Hill sunrise panorama with Dhaulagiri and Annapurna',
        type: 'hero',
      },
      {
        id: 'img_02',
        url: '/images/poonhill/poonhill.webp',
        alt: 'Poon Hill, Histan Mandali',
        type: 'landscape',
      },
      {
        id: 'img_03',
        url: '/images/poonhill/poonhill1.webp',
        alt: 'Poonhill nepal',
        type: 'portrait',
      },
      {
        id: 'img_04',
        url: '/images/poonhill/poonhill1.webp',
        alt: 'Poonhill nepal',
        type: 'landscape',
      },
      {
        id: 'img_05',
        url: '/images/poonhill/poonhill3.webp',
        alt: 'Poonhill nepal',
        type: 'landscape',
      },
      {
        id: 'img_06',
        url: '/images/poonhill/poonhill4.webp',
        alt: 'Ghorepani Poonhill nepal',
        type: 'landscape',
      },
    ],
    gearChecklist: {
      essentials: [
        { item: 'Backpack (45-60L)', weight: '1.5kg' },
        { item: 'Rain Cover for Backpack', weight: '0.08kg' },
        { item: 'Down Jacket', weight: '0.425kg' },
        { item: 'Raincoat / Waterproof Shell Jacket', weight: '0.34kg' },
        { item: 'Fleece / Insulated Mid Layer', weight: '0.34kg' },
        { item: 'Thermal Base Layer Top', weight: '0.2kg', quantity: 1 },
        // { item: 'Thermal Base Layer Bottom', weight: '0.2kg', quantity: 1 },
        { item: 'Trekking T-Shirt', weight: '0.14kg', quantity: 3 },
        { item: 'Trekking Pants', weight: '0.315kg', quantity: 2 },
        { item: 'Trekking Boots (pair)', weight: '1.1kg' },
        { item: 'Trekking Socks (per pair)', weight: '0.06kg', quantity: 3 },
        { item: 'Warm Hat / Beanie', weight: '0.075kg' },
        { item: 'Sun Cap', weight: '0.06kg' },
        { item: 'Light Gloves', weight: '0.065kg' },
        { item: 'Trekking Poles (pair)', weight: '0.475kg' },
        { item: 'Headlamp', weight: '0.1kg' },
        { item: 'Water Bottle (1L, empty)', weight: '0.125kg' },
        { item: 'Sunglasses (UV 400 Protection)', weight: '0.033kg' },
        { item: 'Sunscreen + Lip Balm', weight: '0.1kg' },
        { item: 'Personal First Aid Kit', weight: '0.275kg' },
        { item: 'Passport, Permits, Cash, Insurance Copy', weight: '0.15kg' },
      ],
      optional: [
        { item: 'Sleeping Bag (-10°C to -15°C comfort)', weight: '1.4kg' },
        { item: 'Waterproof Rain Pants', weight: '0.215kg' },
        { item: 'Thermal Base Layer Bottom', weight: '0.2kg', quantity: 1 },
        {
          item: 'Warm Trekking Trousers / Softshell Pants',
          weight: '0.37kg',
          quantity: 2,
        },
        { item: 'Camp Shoes / Sandals', weight: '0.325kg' },
        { item: 'Warm Outer Gloves', weight: '0.11kg' },
        { item: 'Buff / Neck Gaiter', weight: '0.043kg' },
        { item: 'Water Purification Tablets / Filter', weight: '0.075kg' },
        { item: 'Toiletries & Quick-Dry Towel', weight: '0.325kg' },
        { item: 'Power Bank (10,000-20,000 mAh)', weight: '0.265kg' },
        { item: 'Charging Cable / Adapter', weight: '0.09kg' },
        { item: 'Snacks / Energy Bars', weight: '0.45kg', quantity: 3 },
      ],
    },
  },
  'mardi-himal-trek': {
    id: 'mardi-himal-trek',
    name: 'Mardi Himal Trek',
    summary:
      'Trek along high ridges and through rhododendron forests in the Annapurna region, leading to the base of Mardi Himal directly below Machhapuchhre.',
    region: 'Annapurna Region',
    meta: {
      duration: '5 Days',
      difficulty: 'Moderate',
      maxElevation: '4,500m',
      bestSeasons: 'March-May, September-November',
      startingPoint: 'Pokhara',
      tripFacts: {
        flights: 'None',
        accommodation: 'Tea houses / mountain lodges',
        routeType: 'Teardrop ridge trek',
        permits: 'Annapurna Conservation Area Permit, TIMS',
      },
    },
    overview:
      'The Mardi Himal trek follows a ridge trail through the eastern reaches of the Annapurna region, starting with a drive from Pokhara to the trailhead at Kande or Simrung. From the trailhead, the route ascends through forests of oak, maple, and rhododendron toward Australian Camp and Pothana before continuing along the forested ridgelines to Forest Camp. The trail steadily gains elevation while moving away from the busier main routes of the region. As the route continues beyond Low Camp and Badal Danda, the tree line drops away to reveal open ridge walking with views of Annapurna South, Hiunchuli, and Machhapuchhre. The trail reaches High Camp before making the final early morning ascent along the narrow ridge to Mardi Himal Base Camp at 4,500 m. After taking in close views of the surrounding peaks and glaciers, the route descends back through Middle Camp and Sidhing before driving back to Pokhara.',

    timeline: [
      {
        day: '01',
        title: 'Pokhara → Kande → Forest Camp',
        description:
          'The journey begins with a drive from Pokhara toward the trailhead at Kande. From Kande, the trail starts with an uphill climb through stone paths and terraced fields toward Australian Camp, opening to initial views across the Pokhara valley and Annapurna range. The route continues along a gentle forested trail through Pothana, where park permits are checked. Beyond Pothana, the trail leaves the main trekking route and enters a quieter, denser section of forest, winding gradually upward through oak and rhododendron trees until reaching Forest Camp (Kokar) at approximately 2,550 m.',
        stats: {
          elevation: '2,550m',
          duration: '5-6 hrs',
          distance: '11km',
        },
        coordinates: [28.3593, 83.8449],
        price: 'NPR 2,700 (Accommodation: 600, Meals: 1,600, Transport: 500)',
      },

      {
        day: '02',
        title: 'Forest Camp → Badal Danda',
        description:
          'The trail leaves Forest Camp and continues its steady climb through dense moss-covered forest. As the elevation increases, the vegetation begins to shift, with rhododendron and birch trees dominating the higher forest section toward Low Camp. Beyond Low Camp, the trail emerges above the tree line onto an open ridgeline. The landscape changes rapidly from dense woodland to sub-alpine ridge walking, offering unobstructed views of Machhapuchhre and Annapurna South. The day ends at Badal Danda at approximately 3,210 m, set high on the ridge above the clouds.',
        stats: {
          elevation: '3,210m',
          duration: '4-5 hrs',
          distance: '8km',
        },
        coordinates: [28.415, 83.8545],
        price: 'NPR 2,500 (Accommodation: 700, Meals: 1,800)',
      },

      {
        day: '03',
        title: 'Badal Danda → High Camp',
        description:
          'The route leaves Badal Danda and follows the narrow grassy ridge toward High Camp. Walking along the exposed spine of the ridge, clear openings on either side offer sweeping views of the Modi Khola valley to the west and the Mardi Khola valley to the east. As you gain elevation, the terrain becomes rockier and more alpine, with low shrubs replacing the alpine grasses. The short walking day allows time for acclimatization and rest upon reaching High Camp at approximately 3,580 m, preparing for the early morning ascent to the base camp.',
        stats: {
          elevation: '3,580m',
          duration: '3-4 hrs',
          distance: '4.5km',
        },
        coordinates: [28.4329, 83.8668],
        price: 'NPR 2,800 (Accommodation: 800, Meals: 2,000)',
      },

      {
        day: '04',
        title: 'High Camp → Mardi Himal Base Camp → Badal Danda / Low Camp',
        description:
          'The day begins before dawn with a steep climb along the narrow, rocky ridgeline toward Mardi Himal Upper Viewpoint and Base Camp. As the morning light hits the surrounding sanctuary, the trail passes rocky outcrops before reaching Mardi Himal Base Camp at 4,500 m, sitting directly beneath the towering face of Machhapuchhre. After spending time at the base camp taking in views of Annapurna I, Annapurna South, and Hiunchuli, the route retraces its path down the ridge back to High Camp for breakfast. The trail then continues descending along the familiar ridge to spend the night at Badal Danda or Low Camp at approximately 2,970 m.',
        stats: {
          elevation: '4,500m',
          duration: '7-8 hrs',
          distance: '12km',
        },
        coordinates: [28.46, 83.895],
        price: 'NPR 2,500 (Accommodation: 700, Meals: 1,800)',
      },

      {
        day: '05',
        title: 'Low Camp → Sidhing → Pokhara',
        description:
          'The final day leaves the high ridge trail and takes a steep descent through dense rhododendron and oak forest toward the valley floor. The trail drops rapidly through shaded woodland before emerging into the terraced fields and traditional hamlets surrounding Sidhing village. Upon reaching Sidhing at approximately 1,700 m, the trekking portion concludes. From Sidhing, a local jeep drive follows the river valley back toward Lumre and connects to the main highway returning to Pokhara.',
        stats: {
          elevation: '2,970m',
          duration: '4-5 hrs',
          distance: '9km',
        },
        coordinates: [28.3848, 83.8747],
        price: 'NPR 2,000 (Meals: 1,000, Transport: 1,000)',
      },
    ],
    expectations: [
      {
        title: 'Iconic Machapuchare Views',
        description:
          "Witness Machapuchare's perfect pyramid filling the sky at close range alongside the full Annapurna massif — a perspective most Annapurna trekkers never see.",
      },
      {
        title: 'Gurung Village Culture',
        description:
          'Pass through traditional Gurung settlements like Dhampus and Sidhing, experiencing authentic Himalayan hospitality far from the main trekking crowds.',
      },
      {
        title: 'The Ridge Experience',
        description:
          'Walk an exposed alpine spine with the Modi Khola valley dropping away to the south and the Annapurna Sanctuary walls rising to the north — one of the finest ridge walks in Nepal.',
      },
      {
        title: 'Uncrowded Solitude',
        description:
          'Above Forest Camp the trail grows quiet, and at High Camp and Base Camp you may find yourself nearly alone with a panorama that rivals anything on the busier Annapurna routes.',
      },
    ],
    seasonalPlanning: [
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
      { month: 'May', condition: 'Warm & Clear / Pre-Monsoon Views' },
      { month: 'Jun', condition: 'Monsoon Begins / Slippery Trails / Leeches' },
      {
        month: 'Jul',
        condition: 'Heavy Rain / Views Blocked / Not Recommended',
      },
      { month: 'Aug', condition: 'Peak Monsoon / Dangerous Trail Conditions' },
      { month: 'Sep', condition: 'Late-Monsoon Green / Quieter / Some Cloud' },
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
    gallery: [
      {
        id: 'img_01',
        url: '/images/mardi/mardi.webp',
        alt: 'Mardi Himal Base Camp with Machapuchare',
        type: 'hero',
      },
      {
        id: 'img_02',
        url: '/images/mardi/mardi1.webp',
        alt: 'Australian Camp sunset over Annapurna range',
        type: 'landscape',
      },
      {
        id: 'img_03',
        url: '/images/mardi/mardi2.webp',
        alt: 'Rhododendron forest trail to Forest Camp',
        type: 'portrait',
      },
      {
        id: 'img_04',
        url: '/images/mardi/mardi4.jpg',
        alt: 'Exposed ridge walk between Upper Camp and High Camp',
        type: 'landscape',
      },
      {
        id: 'img_05',
        url: '/images/mardi/mardi6.jpg',
        alt: 'Machapuchare pyramid from High Camp',
        type: 'landscape',
      },
      {
        id: 'img_06',
        url: '/images/mardi/mardi5.jpg',
        alt: 'Sidhing Gurung village in the Modi Khola valley',
        type: 'landscape',
      },
      {
        id: 'img_07',
        url: '/images/mardi/mardi7.jpeg',
        alt: 'Sidhing Gurung village in the Modi Khola valley',
        type: 'landscape',
      },
      {
        id: 'img_08',
        url: '/images/mardi/mardi8.jpeg',
        alt: 'Sidhing Gurung village in the Modi Khola valley',
        type: 'landscape',
      },
      {
        id: 'img_09',
        url: '/images/mardi/mardi9.jpeg',
        alt: 'Sidhing Gurung village in the Modi Khola valley',
        type: 'landscape',
      },
    ],
    gearChecklist: {
      essentials: [
        { item: 'Backpack (45-60L)', weight: '1.5kg' },
        { item: 'Rain Cover for Backpack', weight: '0.08kg' },
        { item: 'Down Jacket', weight: '0.425kg' },
        { item: 'Raincoat / Waterproof Shell Jacket', weight: '0.34kg' },
        { item: 'Fleece / Insulated Mid Layer', weight: '0.34kg' },
        { item: 'Thermal Base Layer Top', weight: '0.2kg', quantity: 1 },
        // { item: 'Thermal Base Layer Bottom', weight: '0.2kg', quantity: 1 },
        { item: 'Trekking T-Shirt', weight: '0.14kg', quantity: 3 },
        { item: 'Trekking Pants', weight: '0.315kg', quantity: 2 },
        { item: 'Trekking Boots (pair)', weight: '1.1kg' },
        { item: 'Trekking Socks (per pair)', weight: '0.06kg', quantity: 3 },
        { item: 'Warm Hat / Beanie', weight: '0.075kg' },
        { item: 'Sun Cap', weight: '0.06kg' },
        { item: 'Light Gloves', weight: '0.065kg' },
        { item: 'Trekking Poles (pair)', weight: '0.475kg' },
        { item: 'Headlamp', weight: '0.1kg' },
        { item: 'Water Bottle (1L, empty)', weight: '0.125kg' },
        { item: 'Sunglasses (UV 400 Protection)', weight: '0.033kg' },
        { item: 'Sunscreen + Lip Balm', weight: '0.1kg' },
        { item: 'Personal First Aid Kit', weight: '0.275kg' },
        { item: 'Passport, Permits, Cash, Insurance Copy', weight: '0.15kg' },
      ],
      optional: [
        { item: 'Sleeping Bag (-10°C to -15°C comfort)', weight: '1.4kg' },
        { item: 'Waterproof Rain Pants', weight: '0.215kg' },
        { item: 'Thermal Base Layer Bottom', weight: '0.2kg', quantity: 1 },
        {
          item: 'Warm Trekking Trousers / Softshell Pants',
          weight: '0.37kg',
          quantity: 2,
        },
        { item: 'Camp Shoes / Sandals', weight: '0.325kg' },
        { item: 'Warm Outer Gloves', weight: '0.11kg' },
        { item: 'Buff / Neck Gaiter', weight: '0.043kg' },
        { item: 'Water Purification Tablets / Filter', weight: '0.075kg' },
        { item: 'Toiletries & Quick-Dry Towel', weight: '0.325kg' },
        { item: 'Power Bank (10,000-20,000 mAh)', weight: '0.265kg' },
        { item: 'Charging Cable / Adapter', weight: '0.09kg' },
        { item: 'Snacks / Energy Bars', weight: '0.45kg', quantity: 3 },
      ],
    },
  },
  'shey-phoksundo': {
    id: 'shey-phoksundo',
    name: 'Shey Phoksundo Trek',
    summary:
      'Journey into the remote Lower Dolpo region to the turquoise waters of Lake Phoksundo, ancient Bon monasteries, and dramatic alpine landscapes.',
    region: 'Dolpo Region',
    meta: {
      duration: '8 Days',
      difficulty: 'Moderate to Challenging',
      maxElevation: '3,660 m',
      bestSeasons: 'March-May, September-November',
      startingPoint: 'Kathmandu',
      tripFacts: {
        flights: 'Kathmandu ⇄ Nepalgunj ⇄ Juphal',
        accommodation: 'Tea houses / Homestays / Tents',
        routeType: 'Out and Back',
        permits:
          'Shey Phoksundo National Park Permit, Lower Dolpo Restricted Area Permit, TIMS',
      },
    },

    overview:
      "The Shey Phoksundo Trek leads into the remote wilderness of Lower Dolpo, beginning with a mountain flight from Nepalgunj to Juphal. From Juphal, the route descends toward the Thuli Bheri River before turning into the Suligad Valley and entering Shey-Phoksundo National Park. The trail follows the river through pine, cedar, and bamboo forests, crossing suspension bridges and passing through dramatic gorges and small mountain settlements as it climbs toward Chhepka and Jharana. Beyond Jharana, the landscape becomes more rugged as the route enters the Phoksundo Valley. The trail reaches Ringmo, a traditional settlement beside Phoksundo Lake, where the deep-blue waters lie at approximately 3,611 m beneath steep cliffs and mountain slopes. A day around Ringmo allows time to explore the lake and experience the area's distinctive Bon cultural heritage, including Thashung Gompa, a historic monastery associated with the Bon tradition and said to be around 900 years old. After exploring the lake and surrounding village, the route retraces the valley through the forests and river gorges toward Juphal.",

    timeline: [
      {
        day: '01',
        title: 'Kathmandu → Nepalgunj → Juphal → Dunai',
        description:
          'The journey begins with a flight from Kathmandu to Nepalgunj, followed by a mountain flight to Juphal in Dolpo. After arriving at the airstrip, the trek begins through cultivated hillsides and local settlements before descending toward the Thuli Bheri River. Following the river valley, the route reaches Dunai, the administrative headquarters of Dolpa District. At around 2,140 m, Dunai provides a relatively low-elevation overnight stop before the trail climbs deeper into Lower Dolpo.',
        stats: {
          elevation: '2,140 m · Dunai',
          duration: '~3-4 hrs',
          distance: '~10 km',
        },
        coordinates: [28.9799, 82.81999],
        price:
          'NPR 20,500 - 29,500 (Accommodation: 700, Meals: 1,800, Transport: 18,000 - 27,000)',
      },

      {
        day: '02',
        title: 'Dunai → Suligad → Chhepka',
        description:
          'From Dunai, the route follows the river valley toward Suligad, where the trail enters Shey-Phoksundo National Park. From here, the path turns into the Suligad Valley and begins climbing through increasingly forested terrain. The trail passes through pine, walnut, maple, and other vegetation, with river crossings, suspension bridges, and rocky sections adding variety to the day. The route eventually reaches Chhepka, where the night is spent at approximately 2,670 m.',
        stats: {
          elevation: '2,670 m · Chhepka',
          duration: '~5-6 hrs',
          distance: '~14 km',
        },
        coordinates: [29.00037, 82.91257],
        price: 'NPR 2,800 (Accommodation: 800, Meals: 2,000)',
      },

      {
        day: '03',
        title: 'Chhepka → Rechi → Jharana Hotel',
        description:
          'The route continues deeper into the valley, following the river through pine and birch forests and past rocky cliffs and small settlements. Sections of the trail cross or run close to the river before gradually gaining elevation. Passing through Rechi, the trail continues toward the Jharana area at approximately 3,110 m. The landscape becomes more open here, with views toward the Suligad Waterfall emerging as the route approaches the lake valley.',
        stats: {
          elevation: '3,110 m · Jharana',
          duration: '~5-6 hrs',
          distance: '~12 km',
        },
        coordinates: [29.07787, 82.88615],
        price: 'NPR 3,000 (Accommodation: 800, Meals: 2,200)',
      },

      {
        day: '04',
        title: 'Jharana Hotel → Ringmo Village / Phoksundo Lake',
        description:
          'The trail descends briefly before climbing through birch and mountain forests toward the Phoksundo Valley. As the route gains the ridge, views open toward Suligad Waterfall, where water from the lake drops approximately 167 m through the gorge below. After crossing the Phoksundo River, the trail reaches Ringmo, a traditional settlement beside the lake. At approximately 3,611 m, Phoksundo Lake becomes the defining feature of the landscape, with its deep-blue waters surrounded by steep cliffs and mountain slopes.',
        stats: {
          elevation: '3,660 m · Ringmo Village',
          duration: '~4-5 hrs',
          distance: '~9 km',
        },
        coordinates: [29.14148, 82.91075],
        price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
        isDestination: true,
      },

      {
        day: '05',
        title: 'Exploration Day at Phoksundo Lake & Thashung Gompa',
        description:
          'A full day around Ringmo and Phoksundo Lake provides time to experience the landscape at a slower pace. Lakeside walks and nearby viewpoints offer different perspectives of the distinctive Y-shaped lake and surrounding cliffs. NTB describes Phoksundo as a Y-shaped alpine freshwater lake within Shey-Phoksundo National Park. The day can also include a visit to Thashung Gompa, a historic monastery associated with the Bon tradition. Visitors should be respectful around religious sites and ask permission before taking photographs inside.',
        stats: {
          elevation: '3,660 m · Ringmo Village',
          duration: '~3-4 hrs (exploration)',
          distance: '~6 km',
          // note: 'Exploration + cultural day',
        },
        coordinates: [29.14148, 82.91075],
        price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
      },

      {
        day: '06',
        title: 'Ringmo Village → Chhepka',
        description:
          'After time around the lake, the return journey follows the same route back through the Phoksundo Valley. The trail descends through birch and conifer forests, passing the waterfall viewpoint before continuing along the river toward the lower valley. With approximately 18-19 km to cover, this is one of the longer walking days. The substantial descent brings the route back toward the lower elevation of Chhepka, around 2,670 m.',
        stats: {
          elevation: '2,670 m · Chhepka',
          duration: '~6-7 hrs',
          distance: '~18 km',
        },
        coordinates: [29.0857, 82.9412],
        price: 'NPR 2,800 (Accommodation: 800, Meals: 2,000)',
      },

      {
        day: '07',
        title: 'Chhepka → Suligad → Juphal',
        description:
          'The final trekking day retraces the route toward Suligad and the lower sections of Shey-Phoksundo National Park. The trail follows the river through forested terrain before continuing toward Dunai and then Juphal. The final stretch includes uphill sections as the route approaches Juphal, so despite the overall descent from Phoksundo, the day still involves sustained walking. An overnight stay in Juphal provides some flexibility before the return flight.',
        stats: {
          elevation: '2,475 m · Juphal',
          duration: '~5-6 hrs',
          distance: '~16 km',
        },
        coordinates: [28.985337, 82.819138],
        price: 'NPR 2,600 (Accommodation: 800, Meals: 1,800)',
      },

      {
        day: '08',
        title: 'Juphal → Nepalgunj → Kathmandu',
        description:
          'Board an early morning flight from Juphal airstrip to Nepalgunj, offering final aerial views over the rugged valleys of Dolpo. Connect in Nepalgunj for the flight back to Kathmandu, concluding the Shey Phoksundo journey.',
        stats: {
          elevation: '1,400 m',
          duration: '—',
          distance: '—',
        },
        coordinates: [27.717245, 85.323961],
        price: 'NPR 18,800 - 27,800 (Meals: 800, Transport: 18,000 - 27,000)',
      },
    ],

    expectations: [
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

    seasonalPlanning: [
      {
        month: 'Jan',
        condition: 'Heavy snow / Closed teahouses / Freezing at Lake Phoksundo',
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
        condition: 'Rain-shadow monsoon / Possible flight delays / Plan buffer',
      },
      {
        month: 'Sep',
        condition: 'Crystal clear skies / Vibrant foliage / Stable weather',
      },
      {
        month: 'Oct',
        condition: 'Crystal clear skies / Sharper lake views / Stable weather',
      },
      {
        month: 'Nov',
        condition:
          'Cool & stable / Good visibility / Teahouses closing around Ringmo',
      },
      {
        month: 'Dec',
        condition: 'Heavy snow / Closed teahouses / Freezing at Lake Phoksundo',
      },
    ],

    gallery: [
      {
        id: 'img_01',
        url: '/images/shey/shey.webp',
        alt: 'Shey Phoksundo trek',
        type: 'hero',
      },
      {
        id: 'img_02',
        url: '/images/shey/shey1.webp',
        alt: 'Shey Phoksundo trek',
        type: 'landscape',
      },
      {
        id: 'img_03',
        url: '/images/shey/shey2.webp',
        alt: 'Shey Phoksundo trek',
        type: 'portrait',
      },
      {
        id: 'img_04',
        url: '/images/shey/shey3.webp',
        alt: 'Shey Phoksundo trek',
        type: 'landscape',
      },
      {
        id: 'img_05',
        url: '/images/shey/shey4.webp',
        alt: 'Shey Phoksundo trek',
        type: 'landscape',
      },
      {
        id: 'img_06',
        url: '/images/shey/shey5.webp',
        alt: 'Shey Phoksundo trek',
        type: 'landscape',
      },
    ],
    gearChecklist: {
      essentials: [
        { item: 'Backpack (45-60L)', weight: '1.5kg' },
        { item: 'Rain Cover for Backpack', weight: '0.08kg' },
        { item: 'Down Jacket', weight: '0.425kg' },
        { item: 'Raincoat / Waterproof Shell Jacket', weight: '0.34kg' },
        { item: 'Fleece / Insulated Mid Layer', weight: '0.34kg' },
        { item: 'Thermal Base Layer Top', weight: '0.2kg', quantity: 1 },
        // { item: 'Thermal Base Layer Bottom', weight: '0.2kg', quantity: 1 },
        { item: 'Trekking T-Shirt', weight: '0.14kg', quantity: 3 },
        { item: 'Trekking Pants', weight: '0.315kg', quantity: 2 },
        { item: 'Trekking Boots (pair)', weight: '1.1kg' },
        { item: 'Trekking Socks (per pair)', weight: '0.06kg', quantity: 3 },
        { item: 'Warm Hat / Beanie', weight: '0.075kg' },
        { item: 'Sun Cap', weight: '0.06kg' },
        { item: 'Light Gloves', weight: '0.065kg' },
        { item: 'Trekking Poles (pair)', weight: '0.475kg' },
        { item: 'Headlamp', weight: '0.1kg' },
        { item: 'Water Bottle (1L, empty)', weight: '0.125kg' },
        { item: 'Sunglasses (UV 400 Protection)', weight: '0.033kg' },
        { item: 'Sunscreen + Lip Balm', weight: '0.1kg' },
        { item: 'Personal First Aid Kit', weight: '0.275kg' },
        { item: 'Passport, Permits, Cash, Insurance Copy', weight: '0.15kg' },
      ],
      optional: [
        { item: 'Sleeping Bag (-10°C to -15°C comfort)', weight: '1.4kg' },
        { item: 'Waterproof Rain Pants', weight: '0.215kg' },
        { item: 'Thermal Base Layer Bottom', weight: '0.2kg', quantity: 1 },
        {
          item: 'Warm Trekking Trousers / Softshell Pants',
          weight: '0.37kg',
          quantity: 2,
        },
        { item: 'Camp Shoes / Sandals', weight: '0.325kg' },
        { item: 'Warm Outer Gloves', weight: '0.11kg' },
        { item: 'Buff / Neck Gaiter', weight: '0.043kg' },
        { item: 'Water Purification Tablets / Filter', weight: '0.075kg' },
        { item: 'Toiletries & Quick-Dry Towel', weight: '0.325kg' },
        { item: 'Power Bank (10,000-20,000 mAh)', weight: '0.265kg' },
        { item: 'Charging Cable / Adapter', weight: '0.09kg' },
        { item: 'Snacks / Energy Bars', weight: '0.45kg', quantity: 3 },
      ],
    },
  },
  'tilicho-lake-trek': {
    id: 'tilicho-lake-trek',
    name: 'Tilicho Lake Trek',
    summary:
      'Cross lush valleys, Tibetan-influenced villages, and stark alpine terrain in the Annapurna region. Reach Tilicho Lake at 4,919m.',
    region: 'Annapurna Region',

    meta: {
      duration: '12-15 Days',
      difficulty: 'Challenging',
      maxElevation: '4,919m',
      bestSeasons: 'March-May, September-November',
      startingPoint: 'Kathmandu',
      tripFacts: {
        flights: 'None',
        accommodation: 'Tea House',
        routeType: 'Out & Back',
        permits: 'Annapurna Conservation Area Permit, TIMS',
      },
    },

    overview:
      "The Tilicho Lake Trek is one of Nepal's most dramatic high-altitude journeys, combining the turquoise waters of Tilicho Lake with the legendary landscapes of the Annapurna region. Starting in Kathmandu, the route follows the Marsyangdi Valley deep into the Annapurna Conservation Area, gradually transitioning from lush terraced hills and pine forests into the barren, wind-swept landscapes of Manang. Ancient Tibetan-influenced villages offer rare cultural immersion before the trail branches toward Tilicho Base Camp through unstable slopes and towering cliffs. Reaching Tilicho Lake, one of the world's highest alpine lakes at 4,919m, is the ultimate reward of this challenging trek.",

    timeline: [
      {
        day: '01',
        title: 'Kathmandu to Besisahar',
        description:
          "Leave Kathmandu behind and drive west along Nepal's winding river highways toward Besisahar, the traditional gateway to the Annapurna region. The journey passes terraced farmland, roaring rivers, and mid-hill villages before reaching the Marsyangdi Valley.",
        stats: {
          elevation: '760m',
          duration: '6-7 hrs drive',
          distance: '175km',
        },
        coordinates: [28.2342, 84.3773],
        price: 'NPR 4,400 (Transport: 2,500, Accommodation: 700, Meals: 1,200)',
      },

      {
        day: '02',
        title: 'Besisahar to Chame',
        description:
          'A rugged jeep ride climbs deeper into the Annapurna Conservation Area through waterfalls, suspension bridges, pine forests, and steep mountain roads carved into canyon walls. Chame offers the first close-up Himalayan views.',
        stats: {
          elevation: '2,670m',
          duration: '7-8 hrs drive',
          distance: '65km',
        },
        coordinates: [28.55048, 84.24236],
        price: 'NPR 5,000 (Transport: 3,000, Accommodation: 800, Meals: 1,200)',
      },

      {
        day: '03',
        title: 'Chame to Upper Pisang',
        description:
          'The trail follows the Marsyangdi River through dense pine forests and dramatic rock formations before opening into the dry alpine valley of Upper Pisang. Annapurna II and Pisang Peak dominate the skyline.',
        stats: {
          elevation: '3,300m',
          duration: '5-6 hours',
          distance: '13km',
        },
        coordinates: [28.63394, 84.11001],
        price: 'NPR 2,300 (Accommodation: 800, Meals: 1,500)',
      },

      {
        day: '04',
        title: 'Upper Pisang to Manang',
        description:
          'Take the scenic upper route through Ghyaru and Ngawal, traversing high ridges lined with monasteries, prayer walls, and expansive Himalayan panoramas. The landscape grows increasingly arid as you enter Manang.',
        stats: {
          elevation: '3,540m',
          duration: '6-7 hours',
          distance: '17km',
        },
        coordinates: [28.66668, 84.01975],
        price: 'NPR 2,300 (Accommodation: 800, Meals: 1,500)',
      },

      {
        day: '05',
        title: 'Acclimatization Day in Manang',
        description:
          'An essential acclimatization day before pushing higher into the alpine zone. Optional hikes to Gangapurna Lake, Ice Lake, or nearby ridges help the body adapt while providing incredible views of Annapurna III, Tilicho Peak, and Gangapurna.',
        stats: {
          elevation: '3,540m',
          duration: '3-5 hours hiking',
          distance: 'Optional side hikes',
          note: 'Critical altitude adaptation day',
        },
        coordinates: [28.66668, 84.01975],
        price: 'NPR 2,800 (Accommodation: 800, Meals: 2,000)',
      },

      {
        day: '06',
        title: 'Manang to Shree Kharka',
        description:
          'Leave the main Annapurna Circuit trail and move west toward Tilicho through isolated yak pastures and juniper-covered slopes. The route becomes quieter, colder, and significantly more remote.',
        stats: {
          elevation: '4,050m',
          duration: '4-5 hours',
          distance: '10km',
        },
        coordinates: [28.6684, 83.97698],
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },

      {
        day: '07',
        title: 'Shree Kharka to Tilicho Base Camp',
        description:
          'Traverse narrow landslide-prone trails beneath towering cliffs and unstable scree slopes before reaching Tilicho Base Camp. The environment feels raw and unforgiving, with powerful winds and freezing night temperatures.',
        stats: {
          elevation: '4,150m',
          duration: '5-6 hours',
          distance: '8km',
          note: 'Start early to avoid strong afternoon winds',
        },
        coordinates: [28.67842, 83.95835],
        price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
      },

      {
        day: '08',
        title: 'Tilicho Base Camp to Tilicho Lake and return',
        description:
          'A pre-dawn climb leads through frozen alpine terrain toward the immense turquoise basin of Tilicho Lake (4,919m). Surrounded by snow-covered ridges and barren cliffs, the lake is one of the most visually surreal landscapes in the Himalayas. Soak in the silence before descending back to base camp.',
        stats: {
          elevation: '4,919m',
          duration: '5-7 hours round trip',
          distance: '10km',
          note: 'Sub-zero temperatures common before sunrise',
        },
        coordinates: [28.68471, 83.86579],
        price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
        isDestination: true,
      },

      {
        day: '09',
        title: 'Tilicho Base Camp to Manang',
        description:
          'Retrace the exposed landslide trail back through Shree Kharka and descend toward Manang. The familiar valley widens and thicker air returns with every downhill step. A well-earned rest in Manang closes the high-altitude chapter.',
        stats: {
          elevation: '3,540m',
          duration: '6-7 hours',
          distance: '18km',
        },
        coordinates: [28.66668, 84.01975],
        price: 'NPR 2,800 (Accommodation: 800, Meals: 2,000)',
      },

      {
        day: '10',
        title: 'Manang to Upper Pisang',
        description:
          'Continue the descent eastward along the Marsyangdi Valley, retracing the upper ridge route through Ngawal and Ghyaru. The return journey offers a different perspective of the pine-draped cliffs and river crossings.',
        stats: {
          elevation: '3,300m',
          duration: '5-6 hours',
          distance: '17km',
        },
        coordinates: [28.63394, 84.11001],
        price: 'NPR 2,300 (Accommodation: 800, Meals: 1,500)',
      },

      {
        day: '11',
        title: 'Upper Pisang to Chame and drive to Kathmandu',
        description:
          'A final stretch of trekking brings you back to Chame, where a jeep picks up for the long drive back through the Marsyangdi Valley to Besisahar and onward to Kathmandu, completing the journey.',
        stats: {
          elevation: '760m',
          duration: '4-5 hrs trek + 7-8 hrs drive',
          distance: '240km',
        },
        coordinates: [28.55048, 84.24236],
        price: 'NPR 1,500 (Transport: 5,000, Meals: 1,000)',
      },
    ],

    expectations: [
      {
        title: 'Tilicho Lake',
        description:
          'Witness the surreal turquoise waters of one of the highest alpine lakes in the world, hidden deep within the Annapurna Himal at 4,919m.',
      },
      {
        title: 'Himalayan Landscapes',
        description:
          'Experience the dramatic transition from lush river valleys into the dry, rugged terrain of the Manang Valley and high alpine desert.',
      },
      {
        title: 'Ancient Himalayan Culture',
        description:
          'Walk through Tibetan-influenced villages filled with monasteries, mani walls, yak caravans, and centuries-old mountain traditions.',
      },
      {
        title: 'Challenging Landslide Section',
        description:
          'Navigate the infamous landslide trail before Tilicho Base Camp, a narrow, exposed path that demands focus and rewards with dramatic mountain vistas.',
      },
    ],

    seasonalPlanning: [
      {
        month: 'Jan',
        condition: 'Heavy snow above 3,000m / Route often closed',
      },
      {
        month: 'Feb',
        condition: 'Significant snow / Experienced trekkers only, very cold',
      },
      {
        month: 'Mar',
        condition: 'Snow clearing, cold mornings / Excellent views, popular',
      },
      {
        month: 'Apr',
        condition: 'Mild temperatures, clear skies / Ideal conditions, busy',
      },
      {
        month: 'May',
        condition: 'Warm, pre-monsoon haze / Good trekking, afternoon clouds',
      },
      {
        month: 'Jun',
        condition: 'Monsoon begins / Not recommended for high altitude',
      },
      {
        month: 'Jul',
        condition: 'Heavy rains / Trails slippery, not recommended',
      },
      {
        month: 'Aug',
        condition: 'Monsoon continues / High risk of landslides',
      },
      {
        month: 'Sep',
        condition: 'Monsoon ends / Excellent post-monsoon conditions',
      },
      {
        month: 'Oct',
        condition: 'Stable weather, crisp air / Peak season, crowded',
      },
      {
        month: 'Nov',
        condition: 'Cooler, clear skies / Great views, cold nights',
      },
      {
        month: 'Dec',
        condition: 'Cold, increasing snow / High passes may close',
      },
    ],

    gallery: [
      {
        id: 'tilicho_img_01',
        url: '/images/tilicho/tilicho.webp',
        alt: 'Tilicho Lake Nepal',
        type: 'hero',
      },
      {
        id: 'tilicho_img_02',
        url: '/images/tilicho/tilicho2.webp',
        alt: 'Manang Valley high altitude landscape',
        type: 'landscape',
      },
      {
        id: 'tilicho_img_03',
        url: '/images/tilicho/tilicho3.webp',
        alt: 'Trekking through Annapurna range',
        type: 'landscape',
      },
      {
        id: 'tilicho_img_04',
        url: '/images/tilicho/tilicho4.webp',
        alt: 'Snow-capped peaks near Tilicho',
        type: 'landscape',
      },
      {
        id: 'tilicho_img_05',
        url: '/images/tilicho/tilicho5.webp',
        alt: 'Exposed mountain trail toward Tilicho Base Camp',
        type: 'landscape',
      },
      {
        id: 'tilicho_img_06',
        url: '/images/tilicho/tilicho6.webp',
        alt: 'Glacial lake in the Annapurna region',
        type: 'landscape',
      },
    ],

    gearChecklist: {
      essentials: [
        { item: 'Backpack (45-60L)', weight: '1.5kg' },
        { item: 'Rain Cover for Backpack', weight: '0.08kg' },
        { item: 'Down Jacket', weight: '0.45kg' },
        { item: 'Waterproof Shell Jacket', weight: '0.35kg' },
        { item: 'Fleece / Mid Layer', weight: '0.34kg' },
        { item: 'Thermal Base Layer Top', weight: '0.2kg', quantity: 1 },
        { item: 'Thermal Base Layer Bottom', weight: '0.2kg', quantity: 1 },
        { item: 'Trekking T-Shirt', weight: '0.14kg', quantity: 3 },
        { item: 'Trekking Pants', weight: '0.32kg', quantity: 2 },
        { item: 'Trekking Boots (pair)', weight: '1.15kg' },
        { item: 'Trekking Socks (per pair)', weight: '0.06kg', quantity: 4 },
        { item: 'Warm Hat / Beanie', weight: '0.08kg' },
        { item: 'Warm Gloves', weight: '0.1kg' },
        { item: 'Trekking Poles', weight: '0.48kg' },
        { item: 'Headlamp', weight: '0.1kg' },
        { item: 'Water Bottle (1L)', weight: '0.125kg' },
        { item: 'Sunglasses (UV Protection)', weight: '0.03kg' },
        { item: 'Sunscreen + Lip Balm', weight: '0.1kg' },
        { item: 'Personal First Aid Kit', weight: '0.28kg' },
        { item: 'Passport, Permits, Cash, Insurance Copy', weight: '0.15kg' },
      ],
      optional: [
        { item: 'Sleeping Bag (-15C comfort)', weight: '1.5kg' },
        { item: 'Waterproof Rain Pants', weight: '0.22kg' },
        { item: 'Camp Shoes / Sandals', weight: '0.33kg' },
        { item: 'Buff / Neck Gaiter', weight: '0.04kg' },
        { item: 'Water Purification Tablets', weight: '0.07kg' },
        { item: 'Quick-Dry Towel', weight: '0.12kg' },
        { item: 'Power Bank', weight: '0.27kg' },
        { item: 'Charging Cable / Adapter', weight: '0.09kg' },
        { item: 'Energy Bars / Snacks', weight: '0.45kg', quantity: 3 },
        { item: 'Microspikes (Spring/Winter)', weight: '0.38kg' },
      ],
    },
  },
};
