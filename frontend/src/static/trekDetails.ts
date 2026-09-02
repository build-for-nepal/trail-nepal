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
      "The Everest Base Camp trek follows the classic route through the Khumbu region of Nepal, beginning with a flight to Lukla and continuing through Sherpa settlements, Buddhist monasteries, forests, glacial valleys, and high-altitude terrain. The trail passes through Namche Bazaar, Tengboche, Dingboche, Lobuche, and Gorakshep before reaching Everest Base Camp at 5,364 m.\n\nAs the trail climbs deeper into the Himalayas, the landscape gradually changes from green valleys and rhododendron forests to open alpine terrain, rocky moraines, and snow-covered peaks. Two acclimatization days in Namche Bazaar and Dingboche allow for gradual adjustment to the increasing elevation. The journey reaches its highest point at Kala Patthar, 5,545 m, before descending through Pheriche and Namche Bazaar and returning to Lukla for the flight back to Kathmandu.",
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
          "The trail leaves Namche along the mountainside, with open views across the Khumbu and Himalayan peaks rising beyond the valley. The route follows a relatively gentle section toward Kyangjuma before descending through forest toward Phunki Tenga, where the Dudh Koshi is crossed and the main climb toward Tengboche begins.\n\nFrom Phunki Tenga, you follow a steady uphill trail through rhododendron and conifer forests. As the trees thin near the ridge, Ama Dablam and the surrounding Himalayan peaks come into view before you reach Tengboche at approximately 3,860 m. The village is home to Tengboche Monastery, a leading Buddhist centre in the Khumbu region, set against a backdrop of Himalayan peaks.",
        stats: { elevation: '3,860m', duration: '5-6 hours', distance: '10km' },
        coordinates: [27.8352264, 86.7641614],
        price: 'NPR 3,350 (Accommodation: 1,000, Meals: 2,350)',
      },
      {
        day: '05',
        title: 'Tengboche → Dingboche',
        description:
          "The trail leaves Tengboche and descends through birch, conifer, and rhododendron forests, passing stone-built villages and mani walls carved with Buddhist prayers. The route continues toward Pangboche, with views of Ama Dablam and the surrounding mountains along the valley. As you move higher, the forest gradually thins and the landscape becomes more open, dry, and alpine.\n\nAfter crossing the Imja Khola, the trail continues through Pangboche and Shomare, following the Imja Valley toward Dingboche. The vegetation becomes increasingly sparse as the elevation rises, while the surrounding peaks become more prominent across the valley. The day ends in Dingboche at approximately 4,410 m, an important stop before the route moves into the higher reaches of the Khumbu.",
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
          "The trail leaves Dingboche and climbs steadily through a wide, glacier-carved valley toward Thukla. As you gain elevation, the landscape becomes increasingly barren, with low vegetation giving way to rocky slopes and the surrounding peaks appearing closer across the valley.\n\nBeyond Thukla, you face a steeper climb toward the Thukla Pass, ascending the terminal moraine of the Khumbu Glacier. Along the ridge, a collection of memorials commemorates climbers and mountaineers who lost their lives in the Everest region. From here, the trail becomes gentler as you continue across the high valley toward Lobuche at approximately 4,940 m, one of the last settlements before Gorakshep.",
        stats: { elevation: '4,940m', duration: '5-6 hours', distance: '8km' },
        coordinates: [27.9477818, 86.8105368],
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },
      {
        day: '08',
        title: 'Lobuche → Gorakshep → Everest Base Camp',
        description:
          "The trail leaves Lobuche early and continues across the rugged, high-altitude terrain toward Gorakshep. The route follows rocky paths and glacial moraine as you move deeper into the upper Khumbu, with Pumori, Nuptse, and other high peaks surrounding the valley.\n\nAfter reaching Gorakshep, the trail continues toward Everest Base Camp, following the moraine beside the Khumbu Glacier. The terrain becomes increasingly rocky and uneven, and the route can change with the movement of the glacier and seasonal conditions. At 5,364 m, Everest Base Camp marks the highest destination of the trek before you retrace the route to Gorakshep at approximately 5,164 m for the night.",
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
          "The trail continues its long descent from Pheriche through the Khumbu Valley, retracing the route toward Tengboche. As you lose elevation, the landscape gradually changes from the sparse alpine terrain around Pheriche to greener surroundings and forested sections.\n\nFrom Tengboche, the trail descends toward the Dudh Koshi before climbing again toward the mountainside route leading to Namche. The return through familiar forests and villages offers a noticeable contrast to the high-altitude landscape of the previous days. The trail eventually reaches Namche Bazaar at approximately 3,440 m, where the lower elevation brings more oxygen and a more lively mountain atmosphere.",
        stats: { elevation: '3,440m', duration: '6-7 hours', distance: '14km' },
        coordinates: [27.806, 86.714],
        price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
      },
      {
        day: '11',
        title: 'Namche Bazaar → Lukla',
        description:
          "The trail retraces the route from Namche Bazaar toward Lukla, descending through the Dudh Koshi valley and passing familiar settlements along the way. You follow the trail through Monjo and Phakding, crossing suspension bridges and moving through increasingly green forest as the elevation decreases.\n\nBeyond Phakding, the route continues toward Lukla with a mixture of gradual descents and short uphill sections. The final approach climbs gently back toward Lukla at approximately 2,860 m, where the trekking portion of the journey comes to an end and you spend the final night in the Khumbu.",
        stats: { elevation: '2,860m', duration: '7-8 hours', distance: '18km' },
        coordinates: [27.686, 86.73],
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },
      {
        day: '12',
        title: 'Lukla → Kathmandu',
        description:
          "The final morning begins with a return flight from Tenzing-Hillary Airport in Lukla. Depending on the season and current flight operations, the flight may arrive in Kathmandu or connect through the operational departure arrangements in use at the time. The short mountain flight offers another perspective of the hills and valleys that surrounded the trek, with changing views depending on weather and visibility.\n\nAfter landing in Kathmandu, the 12-day Everest Base Camp journey comes to an end, bringing the route from the high valleys of the Khumbu back to the capital.",
        stats: {
          elevation: '1,400m',
          duration: '35-min flight',
          distance: '-',
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
      { month: 'Jan', condition: 'Very Cold / Heavy Snow Above 4,000m / Experienced Trekkers Only' },
      { month: 'Feb', condition: 'Freezing Temperatures / Quiet Trails / Icy at Night' },
      { month: 'Mar', condition: 'Spring Begins / Rhododendrons in Bloom / Warming Temperatures' },
      { month: 'Apr', condition: 'Stable Weather / Long Daylight / Peak Spring Season / Excellent Visibility' },
      { month: 'May', condition: 'Warm & Clear / Pre-Monsoon Views / Expedition Season' },
      { month: 'Jun', condition: 'Monsoon Builds / Views Blocked / Trails Slippery / Not Recommended' },
      { month: 'Jul', condition: 'Full Monsoon / Heavy Rain / Landslide Risk / Avoid' },
      { month: 'Aug', condition: 'Peak Monsoon / Wet & Muddy Trails / High Risk / Avoid' },
      { month: 'Sep', condition: 'Late-Monsoon / Fresh Air / Some Cloud Lingering / Quieter' },
      { month: 'Oct', condition: 'Crystal Clear Skies / Best Mountain Views / Peak Season / Most Popular Month' },
      { month: 'Nov', condition: 'Excellent Visibility / Cold at Night / Fewer Trekkers than October' },
      { month: 'Dec', condition: 'Very Cold Above 4,000m / Clear Skies / Almost Empty Trail / Winter Chill' },
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
      'Circle the world’s eighth-highest mountain through remote valleys and alpine landscapes. Cross the challenging 5,106m Larkya La Pass.',
    region: 'Manaslu Region',
    meta: {
      duration: '14-18 Days',
      difficulty: 'Challenging',
      maxElevation: '5,106m',
      bestSeasons: 'March-May, September-November',
      startingPoint: 'Kathmandu',
      tripFacts: {
        flights: 'None',
        accommodation: 'Tea House',
        routeType: 'Circuit',
        permits: 'Manaslu Restricted Area Permit, MCAP, ACAP',
      },
    },
    overview:
      "The Manaslu Circuit is Nepal's most compelling wilderness loop, tracing a complete circle around Manaslu, the world's eighth-highest peak at 8,163 metres through terrain that changes so dramatically it feels like several expeditions rolled into one. The route follows the ancient Budhi Gandaki river valley northward, climbing from subtropical gorges at 700 metres through dense rhododendron and pine forests, past thundering waterfalls and traditional stone villages, before breaking into the high alpine world above 3,500 metres. Culturally, the trail moves through Gurung, Nubri, and Tsum communities whose Tibetan Buddhist traditions have remained largely intact mani walls, centuries-old gompas, and prayer flags strung across glacial ridgelines mark every significant landmark. Because the circuit sits within a restricted area requiring a special permit and a licensed guide, the trail sees a fraction of the traffic found on Everest or Annapurna routes, meaning you will share the path with yak caravans more often than other trekking groups.",
    timeline: [
      {
        day: '01',
        title: 'Kathmandu to Soti Khola',
        description:
          'Early departure from Kathmandu by jeep through Arughat and along the Budhi Gandaki river valley.',
        stats: {
          elevation: '700m',
          duration: '7-8 hours (drive)',
          distance: 'N/A',
        },
        coordinates: [28.0483558, 84.8143192],
        price: 'NPR 4,200 (Transport: 2,500, Accommodation: 700, Meals: 1,000)',
      },
      {
        day: '02',
        title: 'Soti Khola to Machha Khola',
        description:
          'The trail opens through banana groves, millet fields, and small Gurung settlements, crossing several suspension bridges above the rushing Budhi Gandaki. Subtropical and humid',
        stats: { elevation: '930m', duration: '5-6 hours', distance: '14km' },
        coordinates: [28.1363198, 84.8550124],
        price: 'NPR 1,900 (Accommodation: 700, Meals: 1,200)',
      },
      {
        day: '03',
        title: 'Trek to Jagat',
        description:
          'A longer day tracking the river closely through Khorlabesi and Tatopani, where natural hot springs sit right beside the trail worth a quick soak. Jagat is the first official checkpoint where permits are inspected, a proper stone-paved village with a small monastery.',
        stats: { elevation: '1,340m', duration: '6-7 hours', distance: '22km' },
        coordinates: [28.2191381, 84.8754899],
        price: 'NPR 1,900 (Accommodation: 700, Meals: 1,200)',
      },
      {
        day: '04',
        title: 'Jagat to Deng',
        description:
          'The valley narrows and the Tibetan cultural influence begins mani walls, prayer flags, and stone-carved chortens appear along the trail. The route passes through Phillim, a large Nubri village with a working gompa, before descending to Deng across a high suspension bridge. ',
        stats: { elevation: '1,860m', duration: '6-7 hours', distance: '19km' },
        coordinates: [28.3756597, 84.8860943],
        price: 'NPR 2,200 (Accommodation: 700, Meals: 1,500)',
      },
      {
        day: '05',
        title: 'Trek to Namrung',
        description:
          'Climbing steadily through Rana and Bihi, small villages where locals still wear traditional chuba robes. The forest thickens with oak and rhododendron and the air cools noticeably. Namrung sits on a commanding ridge with the first clear views of Sringi Himal (7,161m).',
        stats: { elevation: '2,630m', duration: '6-7 hours', distance: '18km' },
        coordinates: [28.5353815, 84.7834682],
        price: 'NPR 2,200 (Accommodation: 700, Meals: 1,500)',
      },
      {
        day: '06',
        title: 'Namrung to Samagaon via Lho',
        description:
          "The standout day of the lower circuit. At Lho village, Manaslu's south face appears with sudden, staggering scale: a wall of ice and granite rising nearly 5,000 vertical metres. The Ribung Gompa above Lho is worth a short detour. The trail continues through Shyala before descending into Samagaon, the largest village in the Nubri region with a beautifully preserved gompa at its edge. ",
        stats: { elevation: '3,180m', duration: '5-6 hours', distance: 'N/A' },
        coordinates: [28.5841331, 84.6450536],
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },
      {
        day: '07',
        title: 'Hike to Pungyen Gompa ',
        description:
          "Non-negotiable rest day before pushing higher. The hike to Pungyen Gompa at 4,050m rewards with a glacial lake and direct close-up views of Manaslu's north face. Alternatively, walk toward Manaslu Base Camp at 4,480m. Return to Samagaon for the night. ",
        stats: {
          elevation: '3,520m',
          duration: '4-5 hours',
          distance: '5km',
          note: 'Acclimatization Indicated',
        },
        coordinates: [28.5841331, 84.6450536],
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },
      {
        day: '08',
        title: 'Samagaon to Samdo',
        description:
          'Short by distance but meaningful in altitude. The trail leaves the treeline immediately, crossing open moraines through a wide glacial valley. Samdo is a tiny settlement of around 50 households near the Tibetan border cold nights, extraordinary skies. ',
        stats: { elevation: '3,860m', duration: '3-4 hours', distance: '9km' },
        coordinates: [28.6470636, 84.6325197],
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },
      {
        day: '09',
        title: 'Hike toward Tibet border ridge ',
        description:
          'A second acclimatization day walking northeast toward the old Tibet trade route. Views back down the valley toward Manaslu are exceptional and the terrain is a direct preview of what Larkya La demands. Early dinner, early sleep.',
        stats: {
          elevation: '3,875m',
          duration: '3-4 hours',
          distance: '4km',
          note: 'Acclimatization Indicated',
        },
        coordinates: [28.6470636, 84.6325197],
        price: 'NPR 4,000 (Accommodation: 1,000, Meals: 3,000)',
      },
      {
        day: '10',
        title: 'Samdo to Dharamsala',
        description:
          'A short but serious climb across open alpine terrain to Dharamsala, a wind-exposed collection of stone shelters with one basic lodge and no electricity. Arrive early, eat well, drink plenty of water, and sleep by 8pm. Tomorrow starts before dawn.',
        stats: { elevation: '4,200m', duration: '3-4 hours', distance: '7km' },
        coordinates: [28.6584715, 84.582265],
        price: 'NPR 2,500 (Accommodation: 1,000, Meals: 2,500)',
      },
      {
        day: '11',
        title: 'Dharamsala to Bimthang via Larkya La Pass',
        description:
          'Cross Larkya La Pass at 5,106m with panoramic Himalayan views before descending to Bimthang.',
        stats: {
          elevation: '5,106m',
          duration: '8-10 hours',
          distance: '22km',
        },
        coordinates: [28.6024945, 84.4600261],
        price: 'NPR 4,000 (Accommodation: 1,000, Meals: 3,000)',
        isDestination: true,
      },
      {
        day: '12',
        title: 'Bimthang to Tilje',
        description:
          'A long descent back through rhododendron and bamboo forest, passing Dudh Pokhari lake and the village of Kharche before reaching Tilje in the lower Marsyangdi valley. The air thickens, the body recovers, apple orchards replace glaciers. ',
        stats: { elevation: '2,300m', duration: '6-7 hours', distance: '20km' },
        coordinates: [28.5446263, 84.3809759],
        price: 'NPR 2,800 (Accommodation: 800, Meals: 2,000)',
      },
      {
        day: '13',
        title: 'Tilje to Dharapani',
        description:
          'Walk to Dharapani where the Manaslu and Annapurna trails meet.',
        stats: { elevation: '1,860m', duration: '3-4 hours', distance: '8km' },
        coordinates: [28.5298499, 84.3497295],
        price: 'NPR 2,800 (Accommodation: 800, Meals: 2,000)',
      },
      {
        day: '14',
        title: 'Drive to Kathmandu',
        description:
          'Return via Besisahar with a long scenic drive back to the capital.',
        stats: {
          elevation: '1,400m',
          duration: '8-10 hours (drive)',
          distance: '-',
        },
        coordinates: [27.717, 85.324],
        price: 'NPR 3,500 (Transport: 2,500, Meals: 1,000)',
      },
    ],
    expectations: [
      {
        title: 'Remote Wilderness Loop',
        description:
          "Experience one of Nepal's most pristine trails with far fewer crowds than Everest or Annapurna.",
      },
      {
        title: 'The Larkya La Pass',
        description:
          'Conquer the 5,106m pass for unmatched views of Himlung Himal, Cheo Himal, and the massive Manaslu.',
      },
      {
        title: 'Cultural Fusion',
        description:
          'Witness the transition from Hindu-influenced lower villages to the ancient Tibetan Buddhist culture of the high valley.',
      },
      {
        title: 'Challenging Endurance',
        description:
          'Test your limits with a strenuous trek requiring stamina for multiple high-altitude days and basic teahouse living.',
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
      'Trek through forests, Tamang villages, and high alpine valleys. Reach Kyanjin Gompa and enjoy spectacular glacier and mountain views.',
    region: 'Langtang Region',
    meta: {
      duration: '7-10 Days',
      difficulty: 'Moderate',
      maxElevation: '4,773m',
      bestSeasons: 'March-May, September-December',
      startingPoint: 'Kathmandu',
      tripFacts: {
        flights: 'None',
        accommodation: 'Tea House',
        routeType: 'Out & Back',
        permits: 'Langtang National Park Permit, TIMS',
      },
    },
    overview:
      'The Langtang Valley Trek is one of Nepal’s most rewarding short Himalayan journeys, combining dramatic mountain scenery, Tamang culture, riverside trails, and high alpine landscapes in just one week. Starting with an overland drive from Kathmandu to Syabrubesi, the route follows the Langtang Khola through dense bamboo, oak, and rhododendron forests before opening into wide yak pastures and glacial valleys. As you move higher, the scenery shifts from deep woodland and waterfalls to prayer walls, Buddhist landmarks, and sweeping views of Langtang Lirung and surrounding peaks. The trek culminates at Kyanjin Gompa, a beautiful high-mountain settlement, and a hike to Kyanjin Ri, where sunrise views over glaciers, ridges, and snow-covered summits create the true highlight of the trip. This 7-day version is a compact and scenic adventure, ideal for trekkers who want a classic Nepal experience without the longer duration of Everest or Annapurna routes.',
    timeline: [
      {
        day: '01',
        title: 'Kathmandu to Syafrubesi',
        description: `<p>Drive from Kathmandu to Syafrubesi, the usual starting point of the Langtang Valley Trek. There are
two common road routes to reach Syafrubesi. The usual public bus route goes via Kalanki - Nagdhunga -
Galchi - Betrawati - Dhunche before reaching Syafrubesi. Private vehicles and jeeps may also use the
Tokha-side road via Tokha - Dhikure - Trishuli - Dhunche - Syafrubesi, which can be shorter and more
efficient in good road conditions. Public buses usually leave early in the morning, while private jeeps
offer more flexibility and a faster ride'</p> <p>Transport Note: Public buses usually depart from the Gongabu / Machhapokhari area in the morning.
Shared jeeps also leave from the same area and are faster than buses, while private jeeps can start
directly from your hotel or arranged pickup point </p> <p><i>Alternative Option: Continue to Sherpagaun</i></p> <p>If you have a private vehicle, you can drive about 45 minutes to 1 hour beyond Syafrubesi to
Sherpagaun. Spending the night in Sherpagaun at an altitude of 2,563 m on Day 1 makes the trek more
efficient, as you can comfortably reach Langtang Village in a single day on Day 2. This helps reduce the
overall walking time and gives you more time to enjoy and explore both Langtang Village and Kyanjin
Gompa.</p>`,
        stats: { elevation: '1,460m / 2,563m', duration: '7-10 hours(drive)' },
        coordinates: [28.1657291, 85.3418267],
        price: 'NPR 3,500 (Transport: 2,000, Accommodation: 500, Meals: 1,000)',
      },
      {
        day: '02',
        title: 'Syafrubesi to Rimche / Lama Hotel',
        description: ` Begin trekking from Syafrubesi and follow the classic trail along the Langtang Khola through beautiful
bamboo, oak, and rhododendron forest. This lower section of the valley is rich in wildlife, and if you are
especially lucky, you may even spot a red panda, although sightings are very rare. Along the way, you
may also notice wild bee hives on the cliffs and trees, associated with the region’s famous mad honey.
The trail then climbs steadily toward Rimche, crossing several suspension bridges and following scenic
riverside sections. As accommodation in Rimche is limited, many trekkers continue another 15 to 30
minutes to Lama Hotel, where there are more lodge options`,
        stats: {
          elevation: '2,470m',
          duration: '6-7 hours from Syafrubesi / 4-5 hours from Sherpagaun',
        },
        coordinates: [28.1612117, 85.4296495],
        price: 'NPR 1,700 (Accommodation: 500, Meals: 1,200)',
      },

      {
        day: '03',
        title: 'Lama Hotel to Langtang Village',
        description:
          'Leaving the forest behind, the trail climbs past riverside sections and open clearings toward Ghodatabela, where the valley begins to feel broader and more alpine. As you continue higher, mountain views start to open up and the cultural atmosphere becomes stronger with chortens, mani walls, and traditional settlements. By the time you reach Langtang Village, you are fully in the heart of the valley, surrounded by dramatic peaks and a distinctly Tibetan-influenced mountain landscape.',
        stats: { elevation: '3,430m', duration: '6-7 hours' },
        coordinates: [28.2157142, 85.5030007],
        price: 'NPR 1,900 (Accommodation: 700, Meals: 1,200)',
      },
      {
        day: '04',
        title: 'Langtang Village to Kyanjin Gompa (with nearby visits)',
        description: `This is a shorter trekking day, which gives you time to explore both Langtang and Kyanjin areas. Before
leaving Langtang, you can wander through the village, observe local life, visit prayer walls and nearby
viewpoints, and enjoy the open valley scenery. After a gradual ascent, you reach Kyanjin Gompa, a
spectacular high settlement surrounded by snow peaks. Once there, you can visit the monastery area,
the local cheese factory, nearby yak pastures, and take a gentle acclimatization walk toward the Lirung
glacier moraine or the lower ridge trails around the village. You can also see the local 100 kW micro-
hydropower system associated with the Langtang Lirung glacial area, which supplies electricity to
Kyanjin and nearby settlements and provides an interesting insight into how remote Himalayan
communities utilize local natural resources`,
        stats: {
          elevation: '3,870m',
          duration: '3-4 hours trek / 1-2 hours exploration',
        },
        coordinates: [28.2124247, 85.5672161],
        price: 'NPR 2,200 (Accommodation: 700, Meals: 1,500)',
      },
      {
        day: '05',
        title: 'Kyanjin Gompa — Kyanjin Ri Summit',
        description: `Today is the highlight of the trek. You start early for the climb above Kyanjin Gompa toward Kyanjin Ri,
one of the finest viewpoints in the Langtang region. The trail is steep from the beginning, and the first
major viewpoint is Lower Kyanjin Ri at around 4,400 m. Even from here, the panorama is already
spectacular, with close views of Langtang Lirung rising dramatically above the valley, along with a bird’s-
eye view of Kyanjin Village and its surrounding glacial landscape. As you gain height, the view opens
even wider, offering sweeping panoramas of Yala Glacier, Khimsung Glacier, Ganchenpo Himal, beautiful
Tserko Ri, and the distant direction of Ganja La Pass. From here, those feeling strong can continue higher
to the main Kyanjin Ri viewpoint at 4,773 m. The final section is steeper and more demanding because
of the altitude, but the reward is an even broader and more dramatic Himalayan panorama, with snow
peaks, glaciers, ridgelines, and the upper Langtang Valley spread out below. After spending time at the
viewpoint for photos and rest, you descend carefully to Kyanjin Gompa for a relaxed afternoon and
overnight stay`,
        stats: { elevation: '4,773m', duration: '4-6 hours round trip' },
        coordinates: [28.2124247, 85.5672161],
        price: 'NPR 2,200 (Accommodation: 700, Meals: 1,500)',
        isDestination: true,
      },
      {
        day: '06',
        title: 'Kyanjin Gompa to Lama Hotel',
        description:
          'After breakfast, you begin the long descent down the valley, retracing your route past Langtang Village and through alpine meadows into the forested lower section. Since the route is mostly downhill, the day feels easier on the lungs, though it is still a long walking day. Returning to Lama Hotel gives you a comfortable forest stop before the final push out of the valley.',
        stats: { elevation: '2,470m', duration: '6-7 hours' },
        coordinates: [28.1612117, 85.4296495],
        price: 'NPR 1,900 (Accommodation: 700, Meals: 1,200)',
      },
      {
        day: '07',
        title: 'Lama Hotel to Syabrubesi and drive to Kathmandu',
        description:
          'Your final day is long but straightforward. You descend from Lama Hotel through the same green riverside trail back to Syabrubesi, enjoying your last suspension bridges, forests, and mountain air. After lunch or a short break in Syabrubesi, you drive back to Kathmandu. This is the most demanding transfer day of the itinerary, so an early start is strongly recommended.',
        stats: {
          elevation: '1,400m',
          duration: '4-5 hours trek + 7-8 hours drive',
        },
        coordinates: [28.1657291, 85.3418267],
        price: 'NPR 3,000 (Transport: 2,000, Meals: 1,000)',
      },
    ],

    expectations: [
      {
        title: 'Forest to Glacier Landscapes',
        description:
          'Walk from subtropical river valleys and bamboo forests into open alpine terrain, glacier-fed scenery, and dramatic Himalayan viewpoints.',
      },
      {
        title: 'Tamang Culture and Buddhist Heritage',
        description:
          'Experience the living culture of the Tamang people, whose villages give Langtang Valley its unique identity. Along the trail, you will see prayer flags, mani walls, chortens, monasteries, and homes shaped by a strong Tibetan Buddhist influence. Tamang culture is also expressed through language, oral storytelling, hospitality, music, and dance, especially the rhythm of the damphu and the traditional Tamang selo performed during community gatherings and celebrations. One of the most important festivals is Sonam Lhosar, the Tamang New Year, usually celebrated in January or February, when families come together for blessings, feasting, music, and cultural performances. Trekking through Langtang is therefore not only a mountain journey, but also a chance to better understand a resilient Himalayan community and its deeply rooted traditions.',
      },
      {
        title: 'Kyanjin Gompa and Kyanjin Ri',
        description: `Stay in one of Nepal’s most beautiful high-mountain settlements and climb to a panoramic ridge above
the valley for the trek’s best views. The viewpoint offers stunning panoramas of Langtang Lirung, Yala
Glacier, Khimsung Glacier, Ganchenpo Himal, Tserko Ri, the direction of Ganja La Pass, and a bird’s-eye
view over Kyanjin Village and the upper Langtang Valley`,
      },
      // {
      // title: "Visit the Kyanjin Cheese Factory",
      // description:
      //  "Explore the famous cheese factory at Kyanjin, an iconic local highlight of the trek, and learn how mountain dairy traditions have supported livelihoods in Langtang for generations.The factory works with milk from local yak and chauri herders, turning high-altitude mountain milk into cheese and butter using a long-established Himalayan dairy tradition. This makes the visit more than just a tasting stop — it is also a chance to understand how local pastoral life supports the mountain economy. The cheese produced here has long been associated with Nepal’s wider dairy network, and yak cheese is also marketed nationally through the government-owned Dairy Development Corporation (DDC). At the same time, production in Kyanjin remains closely tied to local demand, trekking tourism, and seasonal supply, so the factory still feels personal, authentic, and deeply connected to the valley itself.",
      // },
      // {
      //  title: "Learn About Langtang’s Earthquake Recovery",
      //  description:
      // "Understand the impact of the 2015 earthquake and avalanche on Langtang Valley, where parts of the old settlement area still reflect the disaster through remaining debris fields, memorial areas, and local stories of rebuilding. The trek also offers insight into ongoing mountain risk awareness through research and hazard communication work supported in the region.",
      // },
      // {
      //  title: "A Valley of Mountain Science and Research",
      //  description:
      // "If you are interested in science, Langtang offers more than scenic trekking. The valley is one of Nepal’s best-monitored and most research-active mountain regions, with ongoing work related to Yala Glacier, Lirung Glacier, permafrost, the hydrology of the Langtang River, climate change, and post-earthquake socio-economic change. Along the route and around the upper valley, researchers have installed meteorological stations, hydrological stations, and temperature sensors, making Langtang an important living laboratory for understanding how Himalayan mountain systems are changing.",
      // },
      {
        title: 'Optional Extra Day to Tserko Ri',
        description:
          'If you stay one more night in Kyanjin Gompa, you can add a day hike to Tserko Ri, one of the most spectacular viewpoints in the Langtang region. The trail climbs into a more open and rugged alpine landscape, and the reward is a huge Himalayan panorama with glaciers, icefalls, sweeping valley views, and an even more remote high-mountain feeling. Tserko Ri is longer and more demanding than Kyanjin Ri, but its beauty makes it a highly rewarding extension for trekkers who have the time and energy.',
      },
      // {
      //   title: "Short but Powerful Himalayan Trek",
      //   description:
      //     "Enjoy a compact 7-day route that delivers classic Nepal trekking scenery and culture without the longer commitment of bigger expeditions.",
      // },
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
    name: 'Annapurna Base Camp (Direct Ascent)',
    summary:
      'Journey through the Annapurna Sanctuary beneath towering Himalayan peaks. Reach Annapurna Base Camp with Machhapuchhre and Annapurna views.',
    region: 'Annapurna Region',
    meta: {
      duration: '7 Days ',
      difficulty: 'Moderate',
      maxElevation: '4,130m',
      bestSeasons: 'March-May, September-November',
      startingPoint: 'Pokhara',
      tripFacts: {
        flights: 'None',
        accommodation: 'Tea House',
        routeType: 'Out & Back',
        permits: 'Annapurna Conservation Area Permit, TIMS',
      },
    },
    overview:
      'The Annapurna Base Camp trek follows the Modi Khola valley into the Annapurna Sanctuary, beginning with a drive from Pokhara toward the lower trailhead near Jhinu Danda. From there, the route climbs through Chhomrong and Sinuwa before entering a narrower section of the valley surrounded by bamboo, oak, and rhododendron forest. The trail continues through Dovan and Deurali toward Machhapuchhre Base Camp, where the landscape becomes increasingly open and alpine. As the route gains elevation, the forest gradually gives way to rocky slopes, glacial terrain, and the high mountain environment of the Annapurna Sanctuary. The trail reaches Annapurna Base Camp at 4,130 m, surrounded by peaks including Annapurna I, Annapurna South, Hiunchuli, and Machhapuchhre. After reaching the highest point of the trek, the route retraces its path toward the lower valleys before descending to Jhinu Danda and returning to Pokhara.',

    timeline: [
      {
        day: '01',
        title: 'Pokhara to Chhomrong',
        description:
          'The journey begins with a drive from Pokhara toward the roadhead near Jhinu Danda. From the trailhead, the route crosses the Modi Khola and climbs through forest toward Chhomrong. The first section includes a substantial series of stone steps, making this one of the more physically demanding climbs of the lower route. The trail continues upward through forest and scattered settlements before reaching Chhomrong at approximately 2,170 m. Set on a steep hillside above the Modi Khola valley, Chhomrong is one of the major Gurung settlements on the route and serves as the gateway toward the Annapurna Sanctuary.',
        stats: {
          elevation: '2,170m',
          duration: '3-4 hrs trek',
          distance: '5km',
        },
        coordinates: [28.4200417, 83.8176077],
        price: 'NPR 4,300 (Transport: 2,000, Accommodation: 800, Meals: 1,500)',
      },

      {
        day: '02',
        title: 'Chhomrong to Dovan',
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
        title: 'Dovan to Deurali',
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
        title: 'Deurali to Machhapuchhre Base Camp (MBC)',
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
        title: 'MBC to Annapurna Base Camp (ABC)',
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
        title: 'ABC to Bamboo (Descent)',
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
        title: 'Bamboo to Jhinu Danda & Drive to Pokhara',
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
      'Explore turquoise glacial lakes and remote alpine valleys beyond the Khumbu. Climb Gokyo Ri at 5,357m for panoramic Himalayan views.',
    region: 'Khumbu Region',
    meta: {
      duration: '13-14 Days',
      difficulty: 'Challenging',
      maxElevation: '5,357m',
      bestSeasons: 'March-May, September-November',
      startingPoint: 'Kathmandu',
      tripFacts: {
        flights: 'Kathmandu ⇄ Lukla',
        accommodation: 'Tea House',
        routeType: 'Out & Back',
        permits: 'Sagarmatha National Park Permit, TIMS',
      },
    },
    overview:
      "The Gokyo Valley is the Khumbu's better-kept secret. It shares a flight into Lukla and a walk through Namche Bazaar with the Everest Base Camp trek, then quietly peels away northwest at Kyanjuma and climbs toward a world that most Khumbu trekkers never see: high-altitude glacial lakes burning turquoise against a backdrop of ice and rock, Nepal's longest glacier spreading across the valley floor like a slow river of rubble, and a viewpoint at Gokyo Ri (5,357m) that many experienced trekkers argue is superior to Kala Patthar. From the summit of Gokyo Ri you see four 8,000m peaks simultaneously: Everest, Lhotse, Makalu, and Cho Oyu arranged across the horizon with the Ngozumpa Glacier directly below and the string of Gokyo Lakes glittering in the valley you just climbed through. It is a panorama that rewards the extra days and extra effort it takes to reach it.\n\nWhat separates Gokyo from EBC is the quality of solitude and the character of the landscape. Above Dole, the valley narrows, the trail empties, and the terrain shifts from forest and suspension bridges to alpine meadow, glacial moraine, and high-wind ridgeline. The six Gokyo Lakes designated a Ramsar Wetland Site in 2007, the world's highest freshwater lake system are sacred to local Sherpa communities and have a stillness that EBC's tent-city atmosphere cannot offer. Only around 35% of Khumbu trekkers take this route. That gap shows on the trail above Machhermo you may walk entire mornings without passing another group.",
    timeline: [
      {
        day: '01',
        title: 'Arrive Kathmandu',
        description:
          'Land at Tribhuvan International Airport (1,400m) and transfer to your hotel in Thamel, the trekking district. Kathmandu is chaotic, warm, and fascinating in equal measure a medieval city that has been absorbing mountain traders and now mountain trekkers for centuries. The afternoon is best used for two things: sorting your gear and walking the backstreets of Thamel to pick up any last items (buffs, trekking socks, headtorch batteries all available here at reasonable prices). If you have the energy, the Buddhist stupa at Boudhanath is a 20-minute taxi ride east and worth an evening visit. Eat well, sleep early, and do not underestimate jet lag at altitude.',
        stats: { elevation: '1,400m', duration: 'Transfer day', distance: '-' },
        coordinates: [27.7172, 85.324],
        price:
          'NPR 5,000 (Transport: 1,500, Accommodation: 1,500, Meals: 2,000)',
      },
      {
        day: '02',
        title: 'Fly Kathmandu to Lukla — Trek to Phakding',
        description:
          'The 35-minute flight from Kathmandu into Tenzing-Hillary Airport at Lukla (2,860m) is its own event a mountain airstrip with a cliff at one end and a sheer drop at the other. During peak season (April and October), flights may depart from Manthali Airport in Ramechhap, a 4–5 hour drive from Kathmandu that requires leaving your hotel before 3:00am. After landing, the trail drops gently south through Cheplung and Ghat, following the Dudh Koshi river downstream. The first trekking day is deliberately short a warmup for legs fresh off a plane, a chance to calibrate pace, and an introduction to the suspension bridge crossings that will define the days ahead. Phakding is a comfortable riverside village with good teahouses and strong wifi, the last truly reliable internet until you descend back from Gokyo.',
        stats: {
          elevation: '2,610m',
          duration: 'Flight + 3-4 hours trek',
          distance: '8km',
        },
        coordinates: [27.73926, 86.71228],
        price: 'NPR 12,300 (Flight: 10,000, Accommodation: 800, Meals: 1,500)',
      },
      {
        day: '03',
        title: 'Phakding to Namche Bazaar',
        description:
          "The day that sorts trekkers out. From Phakding the trail criss-crosses the Dudh Koshi river on a series of high suspension bridges, the Hillary Bridge, at 60 metres above the river, is the most dramatic before entering Sagarmatha National Park at Monjo. After the park checkpoint the trail drops to the riverbed and begins the long, relentless 600m ascent to Namche. There is no shortcut. The zig-zag climbs through pine forest for two hours, and midway up if the clouds cooperate a clearing offers the first glimpse of Everest's south face framed between Lhotse and Nuptse. Namche Bazaar itself, the commercial capital of the Khumbu at 3,440m, arrives as a shock after hours of forest: a horseshoe of lodges, bakeries, gear shops, and cafes carved into a natural amphitheatre. The elevation gain is significant and the legs will know about it.",
        stats: { elevation: '3,440m', duration: '6-7 hours', distance: '11km' },
        coordinates: [27.80231, 86.71119],
        price: 'NPR 3,700 (Accommodation: 1,200, Meals: 2,500)',
      },
      {
        day: '04',
        title: 'Acclimatization Day: Namche Bazaar',
        description:
          "Do not skip this day, Namche at 3,440m is the altitude at which the body begins making real adjustments, and pushing straight to Dole without a rest here is how trekkers end up turning back from Machhermo with splitting headaches. The classic acclimatization hike climbs 400m to the Everest View Hotel at 3,880m the world's highest hotel, with a terrace that frames Everest, Lhotse, Ama Dablam, and Thamserku in a single view. The Sherpa Cultural Museum in Namche is genuinely excellent and worth two hours of your afternoon. The Namche Saturday market, if your timing aligns, draws Tibetan traders and villagers from across the valley and offers a rare window into the Khumbu's economic life above the trekking bubble. Eat well, drink 4 litres of water, avoid alcohol, and be in bed early.",
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
        day: '05',
        title: 'Namche Bazaar to Dole',
        description:
          'This is the day the Gokyo trail separates itself from the EBC route and the crowds thin immediately. The trail climbs out of Namche on the main EBC path before branching northwest at Kyanjuma toward Mong La (3,973m), a viewpoint ridge with a sweeping panorama of Ama Dablam, Kantega, and Thamserku. From Mong La the trail drops steeply to the Dudh Koshi at Phortse Tenga (3,680m) before climbing again through rhododendron and birch forest, the forests here are dense enough in October to be genuinely beautiful past summer yak pastures to Dole at 4,200m. Dole is a small, scattered settlement of stone buildings used seasonally by herders. The teahouses are basic but warm, Cho Oyu looms at the head of the valley, and above the treeline the trail ahead is visible all the way to the high ridges. This is where the trek begins to feel genuinely remote.',
        stats: { elevation: '4,200m', duration: '5-6 hours', distance: '10km' },
        coordinates: [27.86848, 86.74148],
        price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
      },
      {
        day: '06',
        title: 'Dole to Machhermo',
        description:
          "A short but important day that earns its place in the itinerary. The trail climbs steadily out of Dole through scrub juniper, the last real vegetation before the high alpine world above past the tiny yak-herding hamlets of Luza and Lhabarma, which see virtually no trekkers who aren't passing through. Machhermo at 4,470m sits in a natural bowl sheltered from the north wind by a steep rocky ridge, with a dramatic glacial amphitheatre to the west that comes into full view as you approach. The Machhermo Rescue Post here is staffed seasonally by a Himalayan Rescue Association doctor this is a good moment to get a free altitude briefing and understand what symptoms warrant descent. The half-day of walking leaves the afternoon for rest, hydration, and the genuinely useful activity of doing nothing. Cho Oyu's 8,188m profile fills the head of the valley.",
        stats: {
          elevation: '4,470m',
          duration: '3-4 hours',
          distance: '6.5km',
          note: 'Short day by design — critical acclimatization gain',
        },
        coordinates: [27.90763, 86.7215],
        price: 'NPR 3,700 (Accommodation: 1,200, Meals: 2,500)',
      },
      {
        day: '07',
        title: 'Machhermo to Gokyo',
        description:
          "The day the valley reveals itself. From Machhermo the trail climbs a final ridge with a last look south toward Kantega and Thamserku, then descends into a wider, flatter valley where the Ngozumpa Glacier Nepal's longest at over 36km comes into full view for the first time. The glacier's surface is not white but grey-brown, covered in a thick layer of rock debris pushed down from the peaks above, and it stretches north as far as the eye can follow. The trail passes through Pangka (4,390m) and skirts the glacier's terminal moraine before crossing the Dudh Koshi river and ascending to the first Gokyo Lake (4,690m) small, jade-green, and partially frozen even in October. The second and third lakes arrive in quick succession. Gokyo village sits on the eastern shore of the third lake, Dudh Pokhari, with Cho Oyu (8,188m) closing the northern horizon and the Ngozumpa Glacier spreading across the valley to the west. The scale of the place, seen all at once from the village edge, stops most trekkers mid-step.",
        stats: { elevation: '4,750m', duration: '4-5 hours', distance: '7km' },
        coordinates: [27.9603, 86.6839],
        price: 'NPR 5,000 (Accommodation: 2,000, Meals: 3,000)',
      },
      {
        day: '08',
        title: 'Gokyo Ri Sunrise & Fifth Lake',
        description:
          "Leave the lodge by 5:00am. The climb to Gokyo Ri (5,357m) takes 1.5 to 2 hours on a rocky, steep trail that offers no technical difficulty but demands controlled breathing and patience at this altitude. Arrive before sunrise if you can the summit's observation point is small and fills quickly. What meets you at the top is one of the few views in the Himalayas that justifies every cliché ever written about it: Everest's south face and Lhotse's wall directly east, Makalu's pyramid to the southeast, Cho Oyu dominating the northwest, Gyachung Kang (7,952m) between them, and the entire Ngozumpa Glacier spread below like a slow-moving flood frozen in time. The four 8,000m peaks visible simultaneously from this single point is something Kala Patthar, the more famous EBC viewpoint cannot match. Descend for breakfast, then spend the afternoon walking north to the Fourth and Fifth Gokyo Lakes (5,000m) the fifth lake in particular, tucked in a remote bowl beneath Cho Oyu's base camp approach, offers a level of high-altitude solitude that is almost unreasonable.",
        stats: {
          elevation: '5,357m',
          duration: '5-6 hours',
          distance: '10km',
          note: 'Gokyo Ri is the highest point of the trek. Start no later than 5:00am.',
        },
        coordinates: [27.96154, 86.68313],
        price: 'NPR 4,000 (Accommodation: 1,500, Meals: 2,500)',
        isDestination: true,
      },
      {
        day: '09',
        title: 'Gokyo to Dole',
        description:
          "The long descent back down the valley, retracing the route through the Ngozumpa moraine and past the string of lakes. Going downhill, the views south the full corridor of Khumbu peaks down toward Namche, open up in a way they did not on the ascent. The descent from 4,750m to 4,200m is significant enough to feel in the knees but the extra oxygen at every step is noticeable. Dole's basic teahouses feel almost luxurious after Gokyo's thin air. If energy allows, the section between Machhermo and Dole rewards slower walkers who look carefully, musk deer are occasionally spotted on the slopes above the trail in the late afternoon.",
        stats: { elevation: '4,200m', duration: '5-6 hours', distance: '11km' },
        coordinates: [27.865, 86.725],
        price: 'NPR 4,000 (Accommodation: 1,500, Meals: 2,500)',
      },
      {
        day: '10',
        title: 'Dole to Namche Bazaar',
        description:
          "A long descent that drops 760m back to Namche and transitions the body from high-altitude alpine terrain back to Khumbu valley life. The trail passes back through Phortse Tenga and climbs briefly to the Mong La ridge before the final descent into Namche, the 'Namche hill' going down is considerably more agreeable than going up. Namche in the evening, after days above it, feels urban: warm meals with real menus, hot showers without a cold-water backup, phone signal without interruption. Your legs will ache. The altitude will feel generous. Buy something from a local shop you have been eyeing since Day 2.",
        stats: { elevation: '3,440m', duration: '6-7 hours', distance: '12km' },
        coordinates: [27.805, 86.7106],
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },
      {
        day: '11',
        title: 'Namche Bazaar to Lukla',
        description:
          'The final trekking day retraces the first two trekking days in reverse descending the Namche hill, crossing the Hillary Bridge, passing through Monjo and Phakding, and climbing the final gentle rise to Lukla. The trail is familiar, the legs are tired, and the views of Ama Dablam and Thamserku from the lower valley are just as good going home as they were on the way up. Arrive in Lukla by early afternoon, storms building over the mountains can delay or cancel the morning flights that follow, so an early arrival and a weather eye on the sky matters. Sort your bag for the flight, confirm departure time with your guide, and let the whole thing sink in over dinner.',
        stats: { elevation: '2,860m', duration: '6-7 hours', distance: '18km' },
        coordinates: [27.6868, 86.7314],
        price: 'NPR 2,500 (Accommodation: 1,000, Meals: 1,500)',
      },
      {
        day: '12',
        title: 'Fly Lukla to Kathmandu',
        description:
          'The return flight from Lukla is subject to weather, cloud building over the Khumbu by 10am can ground flights for hours, and this is not a schedule you can rush. Most flights depart between 6:00am and 9:00am. The 35-minute flight back over the Solu-Khumbu foothills, descending from mountain air to the smoggy warmth of the Kathmandu valley, is a transition that hits differently after 12 days at altitude. Land at Tribhuvan International (or Manthali if your outbound was from Ramechhap), transfer to your Thamel hotel, eat something you have been craving for a week, and sleep at a reasonable hour. A buffer day in Kathmandu after this flight is strongly recommended for international connections Lukla flight delays are common enough that booking an international departure the same evening as your Lukla-Kathmandu flight is a genuine risk.',
        stats: {
          elevation: '1,400m',
          duration: '35-min flight + transfer',
          distance: '-',
        },
        coordinates: [27.7172, 85.324],
        price: 'NPR 12,500 (Flight: 11,000, Meals: 1,500)',
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
        alt: 'a vertical image with a snow-capped mountain and its reflection',
        type: 'hero',
      },
      {
        id: 'img_02',
        url: '/images/gokyo/gokyo1.webp',
        alt: 'Snowy trails',
        type: 'landscape',
      },
      {
        id: 'img_03',
        url: '/images/gokyo/gokyo6.jpg',
        alt: 'Nestled between a large turquoise glacial lake, and an actual glacier right behind it.',
        type: 'portrait',
      },
      {
        id: 'img_04',
        url: '/images/gokyo/gokyo3.webp',
        alt: 'Gokyo',
        type: 'landscape',
      },
      {
        id: 'img_05',
        url: '/images/gokyo/gokyo4.webp',
        alt: 'Gokyo',
        type: 'landscape',
      },
      {
        id: 'img_05',
        url: '/images/gokyo/gokyo5.jpg',
        alt: 'Gokyo',
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
      duration: '5-7 Days',
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
        title: 'Pokhara to Birethanti to Tikhedhunga / Ulleri',

        description:
          'The journey begins with a drive from Pokhara toward the trailhead near Birethanti. After crossing the Modi Khola and registering permits at the checkpoint, the route follows the Bhurungdi Khola valley through small settlements, terraced fields, and subtropical forest toward Tikhedhunga. From Tikhedhunga, the trail begins a sustained uphill climb featuring thousands of stone steps toward the village of Ulleri. As you gain elevation, the surrounding valley opens up to reveal views of Annapurna South and Hiunchuli. The day ends in Ulleri at approximately 1,960 m, a traditional Magar village set high on the hillside.',

        stats: {
          elevation: '1,960m',
          duration: '4-5 hrs',
          distance: '10km',
        },

        coordinates: [28.3573, 83.7354],

        price: 'NPR 3,000 (Transport: 1,000 Accommodation: 500, Meals: 1,500)',
      },

      {
        day: '02',
        title: 'Ulleri to Ghorepani',

        description:
          'The trail leaves Ulleri and enters a dense forest of oak, magnolia, and rhododendron. The route continues on a steady, gradual incline along the river, passing small teahouses and streams at Banthanti and Nangethanti as you move deeper into the forest. As you gain elevation, the trail becomes cooler and the forest canopy thicker, offering a quiet forest walk for much of the day. The final section climbs through the upper woodland before emerging into the ridge village of Ghorepani at approximately 2,870 m. From the village, clear openings across the ridge offer views toward Dhaulagiri and the Annapurna range.',

        stats: {
          elevation: '2,870m',
          duration: '5-6 hrs',
          distance: '11km',
        },

        coordinates: [28.4025, 83.6999],

        price: 'NPR 2,500 (Accommodation: 700, Meals: 1,800)',
      },

      {
        day: '03',
        title: 'Ghorepani to Poon Hill to Tadapani',

        description:
          'The day begins before dawn with a steep climb up the stone trail to Poon Hill at 3,210 m, the highest point of the trek. As the morning light reaches the mountains, the summit ridge opens to wide views stretching across Dhaulagiri I, Annapurna I, Annapurna South, Machhapuchhre, and Nilgiri. After descending to Ghorepani for breakfast, the route leaves the village and follows a high ridge through pine and rhododendron forest toward Deurali Pass. The trail then descends along a narrow forested canyon, crossing small streams before a short climb brings you to Tadapani at approximately 2,630 m, surrounded by close views of Annapurna South and Machhapuchhre.',

        stats: {
          elevation: '3,210m',
          duration: '6-7 hrs',
          distance: '12km',
        },

        coordinates: [28.3965, 83.7653],

        price: 'NPR 2,500 (Accommodation: 700, Meals: 1,800)',
      },

      {
        day: '04',
        title: 'Tadapani to Ghandruk',

        description:
          'The trail leaves Tadapani and descends through quiet rhododendron and oak forest, where birdlife and shaded woodland trails lead down toward the lower valley. As you lose elevation, the forest gradually thins to reveal terraced slopes and small farming settlements. The route continues toward Ghandruk at approximately 1,940 m, one of the largest Gurung settlements in the Annapurna region. Set against the backdrop of Annapurna South, Hiunchuli, and Machhapuchhre, the village features traditional stone-paved alleys, slate-roofed houses, and the Gurung Cultural Museum.',

        stats: {
          elevation: '1,940m',
          duration: '3-4 hrs',
          distance: '7km',
        },

        coordinates: [28.3769, 83.8078],

        price: 'NPR 2,500 (Accommodation: 800, Meals: 1,700)',
      },

      {
        day: '05',
        title: 'Ghandruk to Birethanti & Drive to Pokhara',

        description:
          'The final day of the trek descends from Ghandruk through terraced fields and small stone hamlets toward the Modi Khola valley. The trail follows stone stairways down the hillside, passing local farmers and rural homesteads along the way. After reaching the valley floor, the route follows the river bank back toward Birethanti, where the trek officially concludes. From Birethanti, a short drive returns you to Pokhara, bringing the 5-day Ghorepani circuit from the foothills back to the lakeside city.',

        stats: {
          elevation: '1,940m',
          duration: '4-5 hrs',
          distance: '10km',
        },

        coordinates: [28.3095, 83.7748],

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
        accommodation: 'Tea House',
        routeType: 'Circuit',
        permits: 'Annapurna Conservation Area Permit, TIMS',
      },
    },
    overview:
      'The Mardi Himal trek follows a ridge trail through the eastern reaches of the Annapurna region, starting with a drive from Pokhara to the trailhead at Kande or Simrung. From the trailhead, the route ascends through forests of oak, maple, and rhododendron toward Australian Camp and Pothana before continuing along the forested ridgelines to Forest Camp. The trail steadily gains elevation while moving away from the busier main routes of the region. As the route continues beyond Low Camp and Badal Danda, the tree line drops away to reveal open ridge walking with views of Annapurna South, Hiunchuli, and Machhapuchhre. The trail reaches High Camp before making the final early morning ascent along the narrow ridge to Mardi Himal Base Camp at 4,500 m. After taking in close views of the surrounding peaks and glaciers, the route descends back through Middle Camp and Sidhing before driving back to Pokhara.',

    timeline: [
      {
        day: '01',
        title: 'Pokhara to Kande to Forest Camp',
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
        title: 'Forest Camp to Badal Danda',
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
        title: 'Badal Danda to High Camp',
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
        title: 'High Camp to Mardi Himal Base Camp to Badal Danda / Low Camp',
        description:
          'The day begins before dawn with a steep climb along the narrow, rocky ridgeline toward Mardi Himal Upper Viewpoint and Base Camp. As the morning light hits the surrounding sanctuary, the trail passes rocky outcrops before reaching Mardi Himal Base Camp at 4,500 m, sitting directly beneath the towering face of Machhapuchhre. After spending time at the base camp taking in views of Annapurna I, Annapurna South, and Hiunchuli, the route retraces its path down the ridge back to High Camp for breakfast. The trail then continues descending along the familiar ridge to spend the night at Badal Danda or Low Camp at approximately 2,970 m.',
        stats: {
          elevation: '4,500m',
          duration: '6-7 hrs',
          distance: '10km',
        },
        coordinates: [28.46, 83.895],
        price: 'NPR 2,500 (Accommodation: 700, Meals: 1,800)',
      },

      {
        day: '05',
        title: 'Low Camp to Sidhing to Pokhara',
        description:
          'The final day leaves the high ridge trail and takes a steep descent through dense rhododendron and oak forest toward the valley floor. The trail drops rapidly through shaded woodland before emerging into the terraced fields and traditional hamlets surrounding Sidhing village. Upon reaching Sidhing at approximately 1,700 m, the trekking portion concludes. From Sidhing, a local jeep drive follows the river valley back toward Lumre and connects to the main highway returning to Pokhara.',
        stats: {
          elevation: '2,970m',
          duration: '4-5 hrs',
          distance: '8.5km',
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
        id: 'img_06',
        url: '/images/mardi/mardi7.jpeg',
        alt: 'Sidhing Gurung village in the Modi Khola valley',
        type: 'landscape',
      },
      {
        id: 'img_06',
        url: '/images/mardi/mardi8.jpeg',
        alt: 'Sidhing Gurung village in the Modi Khola valley',
        type: 'landscape',
      },
      {
        id: 'img_06',
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
      'Journey through remote Dolpo, past waterfalls, villages, and rugged trans-Himalayan landscapes. Discover turquoise Phoksundo Lake and Tibetan Buddhist culture.',
    region: 'Dolpo Region',
    meta: {
      duration: '10-12 Days',
      difficulty: 'Moderate',
      maxElevation: '3,611m',
      bestSeasons: 'April-June, September-November',
      startingPoint: 'Kathmandu',
      tripFacts: {
        flights: 'Kathmandu ⇄ Nepalgunj ⇄ Juphal',
        accommodation: 'Tea House / Lodge',
        routeType: 'Out & Back',
        permits: 'Shey Phoksundo National Park Permit, Restricted Area Permit',
      },
    },

    overview:
      'The Shey Phoksundo Trek is one of Nepal’s most unique Himalayan journeys, leading deep into the remote Dolpo region of western Nepal. Unlike the greener trekking regions of central Nepal, this trail passes through a striking transition zone where dense pine forests, deep river canyons, waterfalls, and traditional villages slowly give way to the dry Himalayan landscapes closer to the Tibetan plateau. The centerpiece of the trek is the magnificent Phoksundo Lake, famous for its unreal turquoise-blue water, dramatic cliffs, and quiet alpine atmosphere. The route also offers a rare opportunity to experience the culture of Dolpo, where Tibetan Buddhist traditions, ancient monasteries, yak caravans, prayer walls, and centuries-old mountain lifestyles remain strongly preserved due to the region’s remoteness. Compared to Everest or Annapurna, the Shey Phoksundo Trek is less crowded, more culturally isolated, and feels significantly more raw and wilderness-oriented. Although the maximum altitude is relatively moderate by Himalayan standards, the remoteness, long walking days, and limited infrastructure make the journey feel adventurous and deeply rewarding.',

    timeline: [
      {
        day: '01',
        title: 'Kathmandu to Nepalgunj',
        description:
          'Fly or travel overland from Kathmandu to Nepalgunj, the main gateway to western Nepal and the Dolpo region. Nepalgunj lies in Nepal’s lowland Terai belt near the Indian border and serves as the transit hub for flights into remote mountain airstrips such as Juphal. Depending on weather and airline schedules, many trekkers spend the night here before continuing into Dolpo the following morning.',
        stats: {
          elevation: '150m',
          duration: '1 hour flight / 12-14 hours by road',
          distance: '370km (air)',
        },
        coordinates: [28.05, 81.616667],
        price: 'NPR 11,800 (Flight: 10,000, Accommodation: 800, Meals: 1,000)',
      },

      {
        day: '02',
        title: 'Nepalgunj to Juphal and trek to Dunai',
        description:
          'Take an early mountain flight from Nepalgunj to Juphal, the small hillside airstrip that serves as the main access point into Dolpo. The flight itself offers dramatic views of western Nepal’s ridges and river systems. After landing, begin trekking downhill through terraced fields and scattered settlements toward Dunai, the administrative center of Dolpa District. The trail follows the Thuli Bheri River and gives an immediate sense of how remote and distinct this region feels compared to Nepal’s more commercial trekking areas.',
        stats: {
          elevation: '2,150m',
          duration: '35 minute flight + 3-4 hours trek',
          distance: '8km',
        },
        coordinates: [28.9799, 82.81999],
        price: 'NPR 11,500 (Flight: 10,000, Accommodation: 500, Meals: 1,000)',
      },

      {
        day: '03',
        title: 'Dunai to Chhepka',
        description:
          'Leave Dunai and follow the Phoksundo River valley through pine forest, rocky trails, suspension bridges, and small villages. The lower section of the trek feels greener and more humid than many people expect from Dolpo, especially near the river corridor. Along the route, mule caravans carrying food and supplies are common, reflecting the region’s dependence on long-distance mountain trade routes.',
        stats: {
          elevation: '2,670m',
          duration: '5-6 hours',
          distance: '15km',
        },
        coordinates: [29.00037, 82.91257],
        price: 'NPR 1,700 (Accommodation: 500, Meals: 1,200)',
      },

      {
        day: '04',
        title: 'Chhepka to Jharana Hotel',
        description:
          'The trail climbs steadily deeper into Shey Phoksundo National Park, Nepal’s largest national park. Forest sections become quieter and more isolated, with occasional views of steep cliffs and waterfalls. One of the highlights of the day is the massive Phoksundo waterfall system, often considered among the tallest waterfalls in Nepal. As the trail gains elevation, the air becomes cooler and the landscape more rugged.',
        stats: {
          elevation: '3,100m',
          duration: '5-6 hours',
          distance: '12km',
        },
        coordinates: [29.07787, 82.88615],
        price: 'NPR 2,100 (Accommodation: 600, Meals: 1,500)',
      },

      {
        day: '05',
        title: 'Jharana Hotel to Ringmo and Phoksundo Lake',
        description:
          'Today is one of the most spectacular days of the trek. The trail climbs toward Ringmo Village, a traditional Tibetan Buddhist settlement sitting above the shores of Phoksundo Lake. As you approach the lake, the landscape changes dramatically into dry cliffs, glacial valleys, and striking blue water unlike anywhere else in Nepal. The lake’s vivid turquoise color comes from mineral-rich glacial meltwater and changing light conditions. Ringmo itself offers insight into traditional Dolpo life, with stone houses, prayer flags, mani walls, and old Buddhist chortens spread throughout the village.',
        stats: {
          elevation: '3,611m',
          duration: '5-6 hours',
          distance: '10km',
        },
        coordinates: [29.14148, 82.91075],
        price: 'NPR 2,800 (Accommodation: 800, Meals: 2,000)',
        isDestination: true,
      },

      {
        day: '06',
        title: 'Exploration Day around Phoksundo Lake',
        description:
          'Spend a full day exploring the Phoksundo area for acclimatization and cultural experience. You can walk along sections of the lakeshore trail, visit nearby viewpoints, observe traditional village life in Ringmo, or explore local monasteries connected to Tibetan Buddhist traditions. The lake area feels remarkably peaceful, especially during early morning and evening when the surrounding cliffs reflect off the calm water surface.',
        stats: {
          elevation: '3,611m',
          duration: '3-5 hours exploration',
          distance: '4km',
          note: 'Acclimatization + cultural exploration day',
        },
        coordinates: [29.14148, 82.91075],
        price: 'NPR 3,000 (Accommodation: 800, Meals: 2,200)',
      },

      {
        day: '07',
        title: 'Ringmo to Chhepka',
        description:
          'Begin descending from the alpine lake zone back toward the greener lower valley. Descending allows you to experience the changing landscape from a different perspective, with forested sections, waterfalls, and river gorges becoming more prominent again. The return journey also offers more opportunities to observe local trade movement and everyday life along the trail.',
        stats: {
          elevation: '2,670m',
          duration: '6-7 hours',
        },
        coordinates: [29.0857, 82.9412],
        price: 'NPR 1,800 (Accommodation: 600, Meals: 1,200)',
      },

      {
        day: '08',
        title: 'Chhepka to Juphal',
        description:
          'Continue descending through forests and riverside trails toward Juphal. The final trekking day feels quieter and more reflective as the journey gradually reconnects with small agricultural settlements and cultivated terraces near the airstrip region.',
        stats: {
          elevation: '2,475m',
          duration: '6-7 hours',
        },
        coordinates: [28.985337, 82.819138],
        price: 'NPR 2,000 (Accommodation: 600, Meals: 1,400)',
      },

      {
        day: '09',
        title: 'Juphal to Nepalgunj',
        description:
          'Take an early morning flight back to Nepalgunj. Flights in western Nepal are weather dependent, so delays are common, especially during unstable mountain conditions. Many trekkers choose to keep an extra buffer day after Dolpo trips because flight schedules can change unexpectedly.',
        stats: {
          elevation: '150m',
          duration: '35 minute flight',
        },
        coordinates: [28.05, 81.616667],
        price:
          'NPR 12,000 (Flight: 10,000, Accommodation: 1,000, Meals: 1,000)',
      },

      {
        day: '10',
        title: 'Nepalgunj to Kathmandu',
        description:
          'Fly or travel back to Kathmandu, concluding one of Nepal’s most remote and culturally distinctive trekking journeys.',
        stats: {
          elevation: '1,400m',
          duration: '1 hour flight',
        },
        coordinates: [27.717245, 85.323961],
        price: 'NPR 11,000 (Flight: 10,000, Meals: 1,000)',
      },
    ],

    expectations: [
      {
        title: 'Phoksundo Lake',
        description:
          'Witness one of Nepal’s most visually striking alpine lakes, famous for its deep turquoise-blue water, dramatic cliffs, and peaceful high-mountain atmosphere.',
      },

      {
        title: 'Remote Dolpo Culture',
        description:
          'Experience one of Nepal’s most isolated Himalayan cultures, shaped heavily by Tibetan Buddhism, mountain trade traditions, yak herding, and centuries of geographic isolation.',
      },

      {
        title: 'A Less Crowded Himalayan Trek',
        description:
          'Unlike Everest or Annapurna, the Shey Phoksundo route remains relatively quiet, making it ideal for trekkers seeking wilderness, solitude, and a slower mountain experience.',
      },

      {
        title: 'Shey Phoksundo National Park',
        description:
          'Trek through Nepal’s largest national park, home to blue sheep, Himalayan tahr, musk deer, and rare wildlife including the elusive snow leopard, although sightings are extremely uncommon.',
      },

      {
        title: 'Waterfalls, Cliffs, and Trans-Himalayan Landscapes',
        description:
          'Observe the gradual transition from forested river valleys into the stark and beautiful dry landscapes that characterize Nepal’s trans-Himalayan regions.',
      },
    ],

    seasonalPlanning: [
      {
        month: 'Jan',
        condition: 'Extremely Cold / Frozen Trails / Expedition Teams Only',
      },
      {
        month: 'Feb',
        condition: 'Winter Cold / High Passes Snowbound / Very Quiet',
      },
      {
        month: 'Mar',
        condition:
          'Rhododendrons Bloom on Lower Trails / Snow Gear Still Required',
      },
      {
        month: 'Apr',
        condition:
          'Stable & Clear / Wildflowers Peak / Ideal Spring Conditions',
      },
      {
        month: 'May',
        condition:
          'Best Spring Views / Kanjiroba Sharp / Yarsagumba Season Starts',
      },
      {
        month: 'Jun',
        condition:
          'Monsoon Buffered by Rain Shadow / Muddy Lower Trails / Flight Delays',
      },
      {
        month: 'Jul',
        condition: 'Cloudy but Drier Than Most Nepal Treks / Lush & Green',
      },
      {
        month: 'Aug',
        condition: 'Monsoon Easing / Dry at Lake Level / Plan Flight Buffer',
      },
      {
        month: 'Sep',
        condition:
          'Post-Monsoon Green / Skies Clearing / Shoulder Season Begins',
      },
      {
        month: 'Oct',
        condition:
          'Crystal Clear Skies / Sharpest Lake & Mountain Views / Peak Season',
      },
      {
        month: 'Nov',
        condition:
          'Cool & Stable / Excellent Visibility / Teahouses Start Closing',
      },
      {
        month: 'Dec',
        condition: 'Cold but Clear / Very Few Trekkers / Ringmo Closing Down',
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
