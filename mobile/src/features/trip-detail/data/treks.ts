import type { TrekDetail } from '../types';

// Copied from frontend/src/static/trekDetails.ts, word for word. The summary is not here: it
// is the card's description, in features/explore/trips.ts.
export const TREK_DETAILS: Readonly<Record<string, TrekDetail>> = {
  'ebc-trek': {
    type: 'trek',
    name: 'EBC Trek',
    region: 'Khumbu Region',
    meta: {
      duration: '12 Days',
      difficulty: 'Challenging',
      maxElevation: '5,545m',
      bestSeasons: 'March-May, September-November',
      startingPoint: 'Kathmandu',
    },
    tripFacts: {
      flights: 'Kathmandu ⇄ Lukla',
      accommodation: 'Tea houses',
      routeType: 'Out and Back',
      permits:
        'Sagarmatha National Park Entry Permit, Khumbu Pasang Lhamu Rural Municipality Trek-Card',
    },
    overview:
      'The Everest Base Camp trek follows the classic route through the Khumbu region of Nepal, beginning with a flight to Lukla and continuing through Sherpa settlements, Buddhist monasteries, forests, glacial valleys, and high-altitude terrain. The trail passes through Namche Bazaar, Tengboche, Dingboche, Lobuche, and Gorakshep before reaching Everest Base Camp at 5,364 m.\n\nAs the trail climbs deeper into the Himalayas, the landscape gradually changes from green valleys and rhododendron forests to open alpine terrain, rocky moraines, and snow-covered peaks. Two acclimatization days in Namche Bazaar and Dingboche allow for gradual adjustment to the increasing elevation. The journey reaches its highest point at Kala Patthar, 5,545 m, before descending through Pheriche and Namche Bazaar and returning to Lukla for the flight back to Kathmandu.',
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
    itinerary: [
      {
        day: '01',
        title: 'Kathmandu → Lukla → Phakding',
        duration: '3-4 hours',
        description:
          'The journey begins with a mountain flight to Tenzing-Hillary Airport in Lukla. Depending on the season and current flight operations, flights may depart from Kathmandu or Ramechhap. The flight from Kathmandu takes around 30–35 minutes, while the Ramechhap–Lukla sector is shorter. On clear days, the flight offers changing views of the Himalayan foothills, valleys, and mountain landscape. Flight schedules and operations can vary depending on weather and airport conditions.\n\nAfter landing in Lukla, the trail descends gradually through surrounding Sherpa settlements, passing Chheplung and Ghat before joining the Dudh Koshi valley. Pine and rhododendron forests, stone-built villages, mani walls, and the first suspension bridges introduce the landscapes of the Khumbu. The trail continues alongside the river to Phakding at approximately 2,610 m, where the first night is spent in a local tea house.',
        stats: { elevation: '2,610m', duration: '3-4 hours', distance: '8km' },
        price: 'NPR 2,500 (Accommodation: 1,000, Meals: 1,500)',
      },
      {
        day: '02',
        title: 'Phakding → Namche Bazaar',
        duration: '6-7 hours',
        description:
          'From Phakding, the route follows the Dudh Koshi River north, crossing suspension bridges and passing small Sherpa settlements toward Monjo. Just beyond Monjo, the trail enters Sagarmatha National Park at Jorsale, where your park entry permit is checked at the checkpoint.\n\nBeyond Jorsale, the trail follows the river through forest before the main climb toward Namche Bazaar begins. The Dudh Koshi is crossed again on a suspension bridge, followed by a series of uphill sections through pine and rhododendron forest. Along the climb, a clear break in the trees can offer the first distant glimpse of Mount Everest. As you gain elevation, the valley gradually opens toward the mountains before reaching Namche Bazaar at approximately 3,440 m, a major Sherpa trading centre and an important acclimatization stop on the route.',
        stats: { elevation: '3,440m', duration: '6-7 hours', distance: '11km' },
        price: 'NPR 2,800 (Accommodation: 800, Meals: 2,000)',
      },
      {
        day: '03',
        title: 'Acclimatization Day · Namche Bazaar',
        duration: '3-4 hours',
        description:
          "Namche Bazaar is the first major acclimatization stop of the trek, with a second night at approximately 3,440 m before the route continues toward higher elevations. Rather than gaining more overnight elevation, the day allows your body to adjust to the thinner air while you explore the hills and viewpoints around Namche before returning to the same elevation for the night.\n\nA popular acclimatization hike follows the trail toward Everest View Hotel, where the higher viewpoint opens to panoramic views of Everest, Lhotse, Ama Dablam, and the surrounding Himalayan peaks on clear days. The route then returns toward Namche, with options to visit the Sherpa Culture Museum and Everest Photo Gallery. Later, you can explore the town's bakeries, cafés, and gear shops, or simply take in the mountain atmosphere before the trek continues deeper into the Khumbu.",
        stats: {
          elevation: '3,440m',
          duration: '3-4 hours',
          distance: '4km',
          note: 'Acclimatization Day',
        },
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },
      {
        day: '04',
        title: 'Namche Bazaar → Tengboche',
        duration: '5-6 hours',
        description:
          'The trail leaves Namche along the mountainside, with open views across the Khumbu and Himalayan peaks rising beyond the valley. The route follows a relatively gentle section toward Kyangjuma before descending through forest toward Phunki Tenga, where the Dudh Koshi is crossed and the main climb toward Tengboche begins.\n\nFrom Phunki Tenga, you follow a steady uphill trail through rhododendron and conifer forests. As the trees thin near the ridge, Ama Dablam and the surrounding Himalayan peaks come into view before you reach Tengboche at approximately 3,860 m. The village is home to Tengboche Monastery, a leading Buddhist centre in the Khumbu region, set against a backdrop of Himalayan peaks.',
        stats: { elevation: '3,860m', duration: '5-6 hours', distance: '10km' },
        price: 'NPR 3,350 (Accommodation: 1,000, Meals: 2,350)',
      },
      {
        day: '05',
        title: 'Tengboche → Dingboche',
        duration: '5-6 hours',
        description:
          'The trail leaves Tengboche and descends through birch, conifer, and rhododendron forests, passing stone-built villages and mani walls carved with Buddhist prayers. The route continues toward Pangboche, with views of Ama Dablam and the surrounding mountains along the valley. As you move higher, the forest gradually thins and the landscape becomes more open, dry, and alpine.\n\nAfter crossing the Imja Khola, the trail continues through Pangboche and Shomare, following the Imja Valley toward Dingboche. The vegetation becomes increasingly sparse as the elevation rises, while the surrounding peaks become more prominent across the valley. The day ends in Dingboche at approximately 4,410 m, an important stop before the route moves into the higher reaches of the Khumbu.',
        stats: { elevation: '4,410m', duration: '5-6 hours', distance: '11km' },
        price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
      },
      {
        day: '06',
        title: 'Acclimatization Day · Dingboche',
        duration: '4-5 hours',
        description:
          'The second acclimatization day in Dingboche prepares you for the higher elevations ahead. The route follows the principle of "hike high, sleep low", with a climb into the surrounding hills before returning to Dingboche at approximately 4,410 m for the night.\n\nA popular option is the climb toward Nangkartshang Peak, which rises above Dingboche. From higher ground, you can take in wide views across the Imja Valley and surrounding Himalayan peaks before returning to the village. The rest of the day provides time to rest, hydrate, and prepare for the increasingly high-altitude terrain ahead.',
        stats: {
          elevation: '4,410m',
          duration: '4-5 hours',
          distance: '5km',
          note: 'Acclimatization Day',
        },
        price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
      },
      {
        day: '07',
        title: 'Dingboche → Lobuche',
        duration: '5-6 hours',
        description:
          'The trail leaves Dingboche and climbs steadily through a wide, glacier-carved valley toward Thukla. As you gain elevation, the landscape becomes increasingly barren, with low vegetation giving way to rocky slopes and the surrounding peaks appearing closer across the valley.\n\nBeyond Thukla, you face a steeper climb toward the Thukla Pass, ascending the terminal moraine of the Khumbu Glacier. Along the ridge, a collection of memorials commemorates climbers and mountaineers who lost their lives in the Everest region. From here, the trail becomes gentler as you continue across the high valley toward Lobuche at approximately 4,940 m, one of the last settlements before Gorakshep.',
        stats: { elevation: '4,940m', duration: '5-6 hours', distance: '8km' },
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },
      {
        day: '08',
        title: 'Lobuche → Gorakshep → Everest Base Camp',
        duration: '8-9 hours',
        description:
          'The trail leaves Lobuche early and continues across the rugged, high-altitude terrain toward Gorakshep. The route follows rocky paths and glacial moraine as you move deeper into the upper Khumbu, with Pumori, Nuptse, and other high peaks surrounding the valley.\n\nAfter reaching Gorakshep, the trail continues toward Everest Base Camp, following the moraine beside the Khumbu Glacier. The terrain becomes increasingly rocky and uneven, and the route can change with the movement of the glacier and seasonal conditions. At 5,364 m, Everest Base Camp marks the highest destination of the trek before you retrace the route to Gorakshep at approximately 5,164 m for the night.',
        stats: {
          elevation: '5,364m',
          duration: '8-9 hours',
          distance: '15km',
          note: 'EBC elevation is 5,364m, sleeping at Gorakshep 5,164m',
        },
        price: 'NPR 5,500 (Accommodation: 1,000, Meals: 4,500)',
        isDestination: true,
      },
      {
        day: '09',
        title: 'Gorakshep → Kala Patthar → Pheriche',
        duration: '7-8 hours',
        description:
          "The day begins early with the climb toward Kala Patthar, reaching 5,545 m, the highest point of the trek. The ascent is demanding at this elevation, particularly in the cold early hours, but the ridge opens to one of the most expansive mountain views of the journey. As the light reaches the surrounding peaks, you can look across the upper Khumbu toward Everest, Nuptse, Pumori, and the surrounding Himalayan landscape.\n\nThe trail descends back to Gorakshep before continuing down the valley toward Pheriche. With each drop in elevation, the landscape gradually becomes less stark, with more vegetation returning to the valley. The day ends in Pheriche at approximately 4,371 m, providing a significant drop from the previous night's sleeping elevation.",
        stats: {
          elevation: '5,545m',
          duration: '7-8 hours',
          distance: '13km',
          note: 'Kala Patthar is the highest point of the trek. Sleeping elevation Pheriche 4,371m.',
        },
        price: 'NPR 4,500 (Accommodation: 1,000, Meals: 3,500)',
      },
      {
        day: '10',
        title: 'Pheriche → Namche Bazaar',
        duration: '6-7 hours',
        description:
          'The trail continues its long descent from Pheriche through the Khumbu Valley, retracing the route toward Tengboche. As you lose elevation, the landscape gradually changes from the sparse alpine terrain around Pheriche to greener surroundings and forested sections.\n\nFrom Tengboche, the trail descends toward the Dudh Koshi before climbing again toward the mountainside route leading to Namche. The return through familiar forests and villages offers a noticeable contrast to the high-altitude landscape of the previous days. The trail eventually reaches Namche Bazaar at approximately 3,440 m, where the lower elevation brings more oxygen and a more lively mountain atmosphere.',
        stats: { elevation: '3,440m', duration: '6-7 hours', distance: '14km' },
        price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
      },
      {
        day: '11',
        title: 'Namche Bazaar → Lukla',
        duration: '7-8 hours',
        description:
          'The trail retraces the route from Namche Bazaar toward Lukla, descending through the Dudh Koshi valley and passing familiar settlements along the way. You follow the trail through Monjo and Phakding, crossing suspension bridges and moving through increasingly green forest as the elevation decreases.\n\nBeyond Phakding, the route continues toward Lukla with a mixture of gradual descents and short uphill sections. The final approach climbs gently back toward Lukla at approximately 2,860 m, where the trekking portion of the journey comes to an end and you spend the final night in the Khumbu.',
        stats: { elevation: '2,860m', duration: '7-8 hours', distance: '18km' },
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },
      {
        day: '12',
        title: 'Lukla → Kathmandu',
        duration: '35-min flight',
        description:
          'The final morning begins with a return flight from Tenzing-Hillary Airport in Lukla. Depending on the season and current flight operations, the flight may arrive in Kathmandu or connect through the operational departure arrangements in use at the time. The short mountain flight offers another perspective of the hills and valleys that surrounded the trek, with changing views depending on weather and visibility.\n\nAfter landing in Kathmandu, the 12-day Everest Base Camp journey comes to an end, bringing the route from the high valleys of the Khumbu back to the capital.',
        stats: { duration: '35-min flight' },
      },
    ],
    gear: {
      essential: [
        { name: 'Backpack (45-60L)', grams: 1500 },
        { name: 'Rain Cover for Backpack', grams: 80 },
        { name: 'Down Jacket', grams: 425 },
        { name: 'Raincoat / Waterproof Shell Jacket', grams: 340 },
        { name: 'Fleece / Insulated Mid Layer', grams: 340 },
        { name: 'Thermal Base Layer Top', grams: 200, quantity: 1 },
        { name: 'Trekking T-Shirt', grams: 140, quantity: 3 },
        { name: 'Trekking Pants', grams: 315, quantity: 2 },
        { name: 'Trekking Boots (pair)', grams: 1100 },
        { name: 'Trekking Socks (per pair)', grams: 60, quantity: 3 },
        { name: 'Warm Hat / Beanie', grams: 75 },
        { name: 'Sun Cap', grams: 60 },
        { name: 'Light Gloves', grams: 65 },
        { name: 'Trekking Poles (pair)', grams: 475 },
        { name: 'Headlamp', grams: 100 },
        { name: 'Water Bottle (1L, empty)', grams: 125 },
        { name: 'Sunglasses (UV 400 Protection)', grams: 33 },
        { name: 'Sunscreen + Lip Balm', grams: 100 },
        { name: 'Personal First Aid Kit', grams: 275 },
        { name: 'Passport, Permits, Cash, Insurance Copy', grams: 150 },
      ],
      goodToHave: [
        { name: 'Sleeping Bag (-10°C to -15°C comfort)', grams: 1400 },
        { name: 'Waterproof Rain Pants', grams: 215 },
        { name: 'Thermal Base Layer Bottom', grams: 200, quantity: 1 },
        {
          name: 'Warm Trekking Trousers / Softshell Pants',
          grams: 370,
          quantity: 2,
        },
        { name: 'Camp Shoes / Sandals', grams: 325 },
        { name: 'Warm Outer Gloves', grams: 110 },
        { name: 'Buff / Neck Gaiter', grams: 43 },
        { name: 'Water Purification Tablets / Filter', grams: 75 },
        { name: 'Toiletries & Quick-Dry Towel', grams: 325 },
        { name: 'Power Bank (10,000-20,000 mAh)', grams: 265 },
        { name: 'Charging Cable / Adapter', grams: 90 },
        { name: 'Snacks / Energy Bars', grams: 450, quantity: 3 },
      ],
    },
  },
  'manaslu-circuit': {
    type: 'trek',
    name: 'Manaslu Circuit Trek',
    region: 'Manaslu Region',
    meta: {
      duration: '13 Days',
      difficulty: 'Challenging',
      maxElevation: '5,106m',
      bestSeasons: 'March-May, September-November',
      startingPoint: 'Kathmandu',
    },
    tripFacts: {
      flights: 'None',
      accommodation: 'Tea houses / lodges',
      routeType: 'Circuit',
      permits: 'Manaslu Restricted Area Permit, MCAP, ACAP',
    },
    overview:
      "The Manaslu Circuit is a challenging Himalayan trek that circles Manaslu, the world's eighth-highest mountain at 8,163 m. The route follows the Budhi Gandaki Valley from Machha Khola through forests, waterfalls, suspension bridges, and traditional mountain villages. As the elevation rises, the landscape changes from subtropical valleys to pine and rhododendron forests and eventually open alpine terrain. The upper valley also reflects strong Gurung and Tibetan Buddhist traditions, with monasteries, mani walls, chortens, and prayer flags becoming more prominent. The route passes through Namrung, Lho, Samagaon, and Samdo before reaching Dharamsala and the high-altitude crossing of Larkya La. At approximately 5,106 m, the pass is the highest point of the trek and its main physical challenge.\n\nFrom Larkya La, the route descends to Bimthang, then continues through greener landscapes to Tilije and Dharapani before the road journey to Besisahar and Kathmandu.",
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
    itinerary: [
      {
        day: '01',
        title: 'Kathmandu → Machha Khola',
        duration: '8-10 hrs drive',
        description:
          'An early road departure takes you from Kathmandu through Dhading and Arughat before entering the Budhi Gandaki valley. The drive follows the river corridor, with road conditions varying along the route.\n\nRather than stopping at Soti Khola, this itinerary continues farther along the valley to Machha Khola, allowing the trekking section to begin the following morning. Keep water, snacks, and warm layers accessible during the long journey.',
        stats: {
          elevation: '930m',
          duration: '8-10 hrs drive',
          distance: '160km',
        },
        price: 'NPR 4,200 (Transport: 2,500, Accommodation: 700, Meals: 1,000)',
      },
      {
        day: '02',
        title: 'Machha Khola → Jagat',
        duration: '6-7 hrs',
        description:
          'The first walking day follows the Budhi Gandaki River through a warm, forested section of the valley. The trail passes through Khorlabesi and continues toward Tatopani, known for its natural hot spring.\n\nFrom there, the valley narrows as the route crosses suspension bridges, climbs along the hillsides, and gradually enters more rugged terrain. The trail eventually reaches Jagat, a traditional stone-paved village and an important checkpoint on the route into the restricted Manaslu area.',
        stats: {
          elevation: '1,340m',
          duration: '6-7 hrs',
          distance: '20-22km',
        },
        price: 'NPR 1,900 (Accommodation: 700, Meals: 1,200)',
      },
      {
        day: '03',
        title: 'Jagat → Deng',
        duration: '5-7 hrs',
        description:
          'From Jagat, the trail follows the Budhi Gandaki River through forests, cultivated hillsides, stone stairways, and suspension bridges. As you move deeper into the valley, the terrain becomes steeper and more rugged.\n\nThe route passes through Philim, one of the larger settlements along the lower Manaslu trail, before continuing toward Deng. With the gradual gain in elevation, the landscape and villages begin to take on the distinct character of the upper Budhi Gandaki valley, with Tibetan-influenced architecture and Buddhist cultural features becoming more visible.',
        stats: { elevation: '1,804m', duration: '5-7 hrs', distance: '19km' },
        price: 'NPR 1,900 (Accommodation: 700, Meals: 1,200)',
      },
      {
        day: '04',
        title: 'Deng → Namrung',
        duration: '5-7 hrs',
        description:
          'The route climbs steadily through increasingly mountainous terrain as you leave the lower Budhi Gandaki valley behind. The trail passes through Rana and Bihi, with oak and rhododendron forests covering sections of the hillside.\n\nAs you approach the upper Nubri valley, the landscape and culture begin to change. Namrung, at approximately 2,630 m, marks an important transition into the higher Manaslu landscape, with more open views toward the surrounding peaks and increasing signs of Tibetan Buddhist culture.',
        stats: { elevation: '2,630m', duration: '5-7 hrs', distance: '18km' },
        price: 'NPR 2,200 (Accommodation: 700, Meals: 1,500)',
      },
      {
        day: '05',
        title: 'Namrung → Lho',
        duration: '4-5 hrs',
        description:
          'Leaving Namrung behind, the trail climbs gradually into a higher and more open landscape. Forests and traditional villages line the route toward Lho, where the valley begins to open beneath the towering peaks of the Manaslu range.\n\nAt Lho, you can explore the traditional village and Ribung Gompa, an important Buddhist monastery above the settlement. The shorter walking day also gives your body more time to adjust before continuing toward Samagaon.',
        stats: { elevation: '3,180m', duration: '4-5 hrs' },
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },
      {
        day: '06',
        title: 'Lho → Samagaon',
        duration: '3-5 hrs',
        description:
          'The trail continues through the upper Nubri valley, passing Shyala, where the surrounding mountains become increasingly prominent. The forest gradually gives way to more open alpine terrain as you approach Samagaon.\n\nThe walk is relatively short compared with some earlier days, but the elevation gain is significant. At approximately 3,530 m, Samagaon becomes your base for acclimatization before the route climbs toward Samdo and the Larkya La.',
        stats: { elevation: '3,530m', duration: '3-5 hrs', distance: '15km' },
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },
      {
        day: '07',
        title: 'Acclimatization Day · Samagaon',
        duration: '3-5 hrs optional hike',
        description:
          'This dedicated acclimatization day provides time to adjust to the altitude before the route climbs higher. A moderate hike above Samagaon is preferable to remaining completely inactive, followed by a return to sleep at approximately 3,530 m.\n\nA popular option is the hike toward Pungyen Gompa, which sits at around 4,050 m and provides views toward Manaslu. You can also hike toward Manaslu Base Camp, depending on conditions, fitness, and your guide’s assessment.',
        stats: {
          elevation: '4,050m',
          duration: '3-5 hrs optional hike',
          note: 'Acclimatization Day',
        },
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },
      {
        day: '08',
        title: 'Samagaon → Samdo',
        duration: '3-4 hrs',
        description:
          'The trail leaves Samagaon and enters the high, open landscape of the upper Budhi Gandaki valley. The walking is shorter today, but the elevation continues to increase as you approach Samdo. The route crosses open terrain with broad views of the surrounding mountains and follows the valley toward this remote settlement near the Tibetan border.\n\nAt approximately 3,860 m, Samdo is an important stopping point before the final approach to Dharamsala and Larkya La. Take the afternoon to rest and prepare for another high-altitude day.',
        stats: { elevation: '3,860m', duration: '3-4 hrs', distance: '9km' },
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
      },
      {
        day: '09',
        title: 'Samdo → Dharamsala',
        duration: '3-4 hrs',
        description:
          'As you climb toward Dharamsala, the landscape changes noticeably, with sparse vegetation and increasingly rugged mountain terrain. The trail crosses increasingly barren alpine terrain as vegetation becomes sparse and the mountains feel closer.\n\nDharamsala sits at approximately 4,460 m and is the final overnight stop before the Larkya La crossing. Because tomorrow is the trek’s most demanding day, arrive early, eat well, hydrate, and give yourself plenty of time to rest.',
        stats: { elevation: '4,460m', duration: '3-4 hrs', distance: '7km' },
        price: 'NPR 2,500 (Accommodation: 1,000, Meals: 2,500)',
      },
      {
        day: '10',
        title: 'Dharamsala → Larkya La → Bimthang',
        duration: '8-10 hrs',
        description:
          'This is the most demanding day of the trek. An early morning start allows you to make the ascent toward Larkya La before conditions become more challenging later in the day. The trail climbs gradually across rocky and sometimes snowy terrain toward the pass at approximately 5,106 m, the highest point of the Manaslu Circuit. From the top, expansive Himalayan views can open up before the long descent toward Bimthang.\n\nThe descent is demanding in its own way, with tired legs and changing terrain requiring careful footing. As elevation decreases, the landscape gradually becomes greener toward Bimthang.',
        stats: { elevation: '5,106m', duration: '8-10 hrs' },
        price: 'NPR 4,000 (Accommodation: 1,000, Meals: 3,000)',
        isDestination: true,
      },
      {
        day: '11',
        title: 'Bimthang → Tilije',
        duration: '5-7 hrs',
        description:
          'After crossing Larkya La, the trail descends into a noticeably greener landscape. The barren alpine terrain gradually gives way to rhododendron and pine forests as you lose elevation.\n\nThe route continues through Kharche and toward the lower Marsyangdi valley, with vegetation becoming denser as the altitude drops. By the time you reach Tilije, the landscape has changed considerably from the high mountain terrain around the pass.',
        stats: { elevation: '2,300m', duration: '5-7 hrs', distance: '20km' },
        price: 'NPR 2,800 (Accommodation: 800, Meals: 2,000)',
      },
      {
        day: '12',
        title: 'Tilije → Dharapani → Besisahar',
        duration: '4-5 hrs + drive',
        description:
          'The final walking section follows the valley from Tilije through Thonje toward Dharapani, where the Manaslu Circuit connects with the Annapurna trekking corridor. The route continues through increasingly settled and warmer terrain as the altitude drops.\n\nFrom Dharapani, the journey continues by road toward Besisahar. Travel time depends on road conditions, traffic, weather, and the vehicle available, making this a combined walking and road-transfer day rather than a continuous trekking stage.',
        stats: { elevation: '760m', duration: '4-5 hrs + drive' },
        price: 'NPR 2,800 (Accommodation: 800, Meals: 2,000)',
      },
      {
        day: '13',
        title: 'Besisahar → Kathmandu',
        duration: '6-8 hrs drive',
        description:
          'The final day is a road journey from Besisahar to Kathmandu. The route follows the Marsyangdi valley before continuing through the Middle Hills toward the capital. The journey can take much of the day depending on road conditions, traffic, and stops, so keep your schedule flexible.\n\nBy the time you reach Kathmandu, you will have completed the full Manaslu Circuit from the Budhi Gandaki valley to the Larkya La and back through the Marsyangdi side of the circuit.',
        stats: { elevation: '1,400m', duration: '6-8 hrs drive' },
        price: 'NPR 3,500 (Transport: 2,500, Meals: 1,000)',
      },
    ],
    gear: {
      essential: [
        { name: 'Backpack (45-60L)', grams: 1500 },
        { name: 'Rain Cover for Backpack', grams: 80 },
        { name: 'Down Jacket', grams: 425 },
        { name: 'Raincoat / Waterproof Shell Jacket', grams: 340 },
        { name: 'Fleece / Insulated Mid Layer', grams: 340 },
        { name: 'Thermal Base Layer Top', grams: 200, quantity: 1 },
        { name: 'Trekking T-Shirt', grams: 140, quantity: 3 },
        { name: 'Trekking Pants', grams: 315, quantity: 2 },
        { name: 'Trekking Boots (pair)', grams: 1100 },
        { name: 'Trekking Socks (per pair)', grams: 60, quantity: 3 },
        { name: 'Warm Hat / Beanie', grams: 75 },
        { name: 'Sun Cap', grams: 60 },
        { name: 'Light Gloves', grams: 65 },
        { name: 'Trekking Poles (pair)', grams: 475 },
        { name: 'Headlamp', grams: 100 },
        { name: 'Water Bottle (1L, empty)', grams: 125 },
        { name: 'Sunglasses (UV 400 Protection)', grams: 33 },
        { name: 'Sunscreen + Lip Balm', grams: 100 },
        { name: 'Personal First Aid Kit', grams: 275 },
        { name: 'Passport, Permits, Cash, Insurance Copy', grams: 150 },
      ],
      goodToHave: [
        { name: 'Sleeping Bag (-10°C to -15°C comfort)', grams: 1400 },
        { name: 'Waterproof Rain Pants', grams: 215 },
        { name: 'Thermal Base Layer Bottom', grams: 200, quantity: 1 },
        {
          name: 'Warm Trekking Trousers / Softshell Pants',
          grams: 370,
          quantity: 2,
        },
        { name: 'Camp Shoes / Sandals', grams: 325 },
        { name: 'Warm Outer Gloves', grams: 110 },
        { name: 'Buff / Neck Gaiter', grams: 43 },
        { name: 'Water Purification Tablets / Filter', grams: 75 },
        { name: 'Toiletries & Quick-Dry Towel', grams: 325 },
        { name: 'Power Bank (10,000-20,000 mAh)', grams: 265 },
        { name: 'Charging Cable / Adapter', grams: 90 },
        { name: 'Snacks / Energy Bars', grams: 450, quantity: 3 },
      ],
    },
  },
  'langtang-valley': {
    type: 'trek',
    name: 'Langtang Valley Trek',
    region: 'Langtang Region',
    meta: {
      duration: '7 Days',
      difficulty: 'Moderate',
      maxElevation: '4,773m',
      bestSeasons: 'March-May, October-November',
      startingPoint: 'Kathmandu',
    },
    tripFacts: {
      flights: 'None',
      accommodation: 'Tea houses / lodges',
      routeType: 'Out & Back',
      permits: 'Langtang National Park Entry Permit, TIMS',
    },
    overview:
      'The Langtang Valley Trek follows the Langtang Khola through a changing mountain landscape, beginning at Syabrubesi and gradually climbing from forested valleys and Tamang settlements into open alpine terrain. The route passes through Lama Hotel, Langtang Village, and Kyanjin Gompa, with dense forests giving way to wider mountain landscapes as the elevation increases. Much of the trekking route lies within Langtang National Park, a protected area known for its forests, alpine vegetation, mountain scenery, and Tamang cultural heritage.\n\nAt Kyanjin Gompa, the valley opens into a high-mountain landscape surrounded by ridgelines, glaciers, and Himalayan peaks. A day hike to Kyanjin Ri at 4,773 m brings this 7-day itinerary to its highest point. On a clear day, views extend across the upper Langtang Valley and surrounding mountains. From Kyanjin Gompa, the route retraces the valley through Langtang Village and Lama Hotel before descending to Syabrubesi.',
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
    itinerary: [
      {
        day: '01',
        title: 'Kathmandu → Syabrubesi',
        duration: 'Full-day overland journey',
        description:
          'The journey begins with an overland drive from Kathmandu toward Syabrubesi, the usual starting point for the Langtang Valley Trek. The route heads north through the Trishuli Valley, passing through Dhunche before continuing toward Syabrubesi. Travel time can vary with road and traffic conditions, so this is best treated as a full travel day rather than a fixed-duration transfer.\n\nNepal Tourism Board identifies Dhunche, 117 km by road from Kathmandu, as an access point to Langtang National Park. As you leave the lower river valleys behind, the landscape becomes increasingly mountainous, with steeper hills and settlements along the way. At approximately 1,500 m, Syabrubesi provides the overnight base before you begin trekking the following morning.',
        stats: {
          elevation: '1,500m · Syabrubesi',
          duration: 'Full-day overland journey',
        },
        price: 'NPR 1,500 (Accommodation: 500, Meals: 1,000)',
      },
      {
        day: '02',
        title: 'Syabrubesi → Lama Hotel',
        duration: '6-7 hrs',
        description:
          'Leaving Syabrubesi behind, you follow the Langtang Khola into the forested landscape of Langtang National Park. The route passes through sections of bamboo, oak, and rhododendron forest, with suspension bridges and riverside stretches adding variety to the gradual climb. The steady ascent takes you deeper into the valley before reaching Lama Hotel.\n\nPublished sources give different elevations for the settlement, so Trails Nepal uses approximately 2,500–2,600 m here rather than presenting a more precise figure as definitive.',
        stats: {
          elevation: '2,470m · Lama Hotel',
          duration: '6-7 hrs',
          distance: '11-12km',
        },
        price: 'NPR 1,700 (Accommodation: 500, Meals: 1,200)',
      },
      {
        day: '03',
        title: 'Lama Hotel → Langtang Village',
        duration: '6-7 hrs',
        description:
          'The forest gradually opens as you climb higher from Lama Hotel, following the Langtang Khola through Ghodatabela. Mountain views become more prominent as the valley begins to widen and the dense woodland starts to give way to more open slopes.\n\nYou continue toward Langtang Village at approximately 3,430 m, where stone-built homes, chortens, prayer flags, and mani walls reflect the cultural character of the upper valley. The increasing elevation is noticeable here, making a steady pace important.',
        stats: {
          elevation: '3,430m · Langtang Village',
          duration: '6-7 hrs',
          distance: '10-11km',
        },
        price: 'NPR 1,900 (Accommodation: 700, Meals: 1,200)',
      },
      {
        day: '04',
        title: 'Langtang Village → Kyanjin Gompa',
        duration: '3-4 hrs',
        description:
          'Today brings a shorter walking day as you make your way toward Kyanjin Gompa. The landscape becomes increasingly open, with fewer trees and more alpine vegetation, rocky slopes, chortens, prayer flags, and mani walls along the route. The gradual climb brings you to Kyanjin Gompa at approximately 3,870 m, the base for the trek’s high-altitude day hikes.\n\nWith more time after reaching the settlement, you can explore the surrounding area or take a short walk while allowing your body to adjust to the higher elevation.',
        stats: {
          elevation: '3,870m · Kyanjin Gompa',
          duration: '3-4 hrs',
          distance: '6-7km',
        },
        price: 'NPR 2,200 (Accommodation: 700, Meals: 1,500)',
      },
      {
        day: '05',
        title: 'Kyanjin Gompa → Kyanjin Ri → Kyanjin Gompa',
        duration: '4-6 hrs round trip',
        description:
          'A high-altitude day hike takes you from Kyanjin Gompa toward Kyanjin Ri, the highest point of this itinerary at 4,773 m. The trail becomes steeper as it leaves the settlement and climbs onto the surrounding ridge. The lower viewpoint provides an increasingly elevated perspective over Kyanjin and the upper Langtang Valley. Higher on the ridge, the views open toward Langtang Lirung, surrounding glaciers, ridgelines, and the high peaks of the region. On a clear day, the elevated position provides a broad panorama across the upper valley. The final section toward 4,773 m is steeper and more demanding because of the elevation.\n\nAfter spending time at the viewpoint, the trail descends back to Kyanjin Gompa for the night.',
        stats: {
          elevation: '4,773m · Kyanjin Ri',
          duration: '4-6 hrs round trip',
          distance: '5-6km',
        },
        price: 'NPR 2,200 (Accommodation: 700, Meals: 1,500)',
        isDestination: true,
      },
      {
        day: '06',
        title: 'Kyanjin Gompa → Lama Hotel',
        duration: '6-7 hrs',
        description:
          'Retracing the valley from Kyanjin Gompa, the descent passes through Langtang Village. As you lose elevation, vegetation gradually becomes denser and the landscape shifts from alpine meadows and exposed mountain slopes back toward forest.\n\nThe long descent continues through the familiar trail to Lama Hotel at approximately 2,470 m, providing a substantially lower sleeping elevation after the high-altitude day at Kyanjin Ri.',
        stats: {
          elevation: '3,870m · Kyanjin Gompa',
          duration: '6-7 hrs',
          distance: '14-15km',
        },
        price: 'NPR 1,900 (Accommodation: 700, Meals: 1,200)',
      },
      {
        day: '07',
        title: 'Lama Hotel → Syabrubesi → Kathmandu',
        duration: '4-5 hrs trek + variable drive',
        description:
          'The final morning brings you back along the lower Langtang Khola to Syabrubesi. The route retraces the familiar trail through the lower settlements and suspension bridges before reaching Syabrubesi, where the trekking portion of your journey comes to an end.\n\nFrom Syabrubesi, you continue overland toward Kathmandu. Road and traffic conditions can affect the return journey, so the drive is best treated as a variable travel period rather than assigned a fixed duration.',
        stats: {
          duration: '4-5 hrs trek + variable drive',
          distance: '11-12km',
        },
        price: 'NPR 1,000 (Meals: 1,000)',
      },
    ],
    gear: {
      essential: [
        { name: 'Backpack (45-60L)', grams: 1500 },
        { name: 'Rain Cover for Backpack', grams: 80 },
        { name: 'Down Jacket', grams: 425 },
        { name: 'Raincoat / Waterproof Shell Jacket', grams: 340 },
        { name: 'Fleece / Insulated Mid Layer', grams: 340 },
        { name: 'Thermal Base Layer Top', grams: 200, quantity: 1 },
        { name: 'Trekking T-Shirt', grams: 140, quantity: 3 },
        { name: 'Trekking Pants', grams: 315, quantity: 2 },
        { name: 'Trekking Boots (pair)', grams: 1100 },
        { name: 'Trekking Socks (per pair)', grams: 60, quantity: 3 },
        { name: 'Warm Hat / Beanie', grams: 75 },
        { name: 'Sun Cap', grams: 60 },
        { name: 'Light Gloves', grams: 65 },
        { name: 'Trekking Poles (pair)', grams: 475 },
        { name: 'Headlamp', grams: 100 },
        { name: 'Water Bottle (1L, empty)', grams: 125 },
        { name: 'Sunglasses (UV 400 Protection)', grams: 33 },
        { name: 'Sunscreen + Lip Balm', grams: 100 },
        { name: 'Personal First Aid Kit', grams: 275 },
        { name: 'Passport, Permits, Cash, Insurance Copy', grams: 150 },
      ],
      goodToHave: [
        { name: 'Sleeping Bag (-10°C to -15°C comfort)', grams: 1400 },
        { name: 'Waterproof Rain Pants', grams: 215 },
        { name: 'Thermal Base Layer Bottom', grams: 200, quantity: 1 },
        {
          name: 'Warm Trekking Trousers / Softshell Pants',
          grams: 370,
          quantity: 2,
        },
        { name: 'Camp Shoes / Sandals', grams: 325 },
        { name: 'Warm Outer Gloves', grams: 110 },
        { name: 'Buff / Neck Gaiter', grams: 43 },
        { name: 'Water Purification Tablets / Filter', grams: 75 },
        { name: 'Toiletries & Quick-Dry Towel', grams: 325 },
        { name: 'Power Bank (10,000-20,000 mAh)', grams: 265 },
        { name: 'Charging Cable / Adapter', grams: 90 },
        { name: 'Snacks / Energy Bars', grams: 450, quantity: 3 },
      ],
    },
  },
  'abc-trek': {
    type: 'trek',
    name: 'Annapurna Base Camp',
    region: 'Annapurna Region',
    meta: {
      duration: '7 Days ',
      difficulty: 'Moderate',
      maxElevation: '4,130m',
      bestSeasons: 'March-May, September-November',
      startingPoint: 'Pokhara',
    },
    tripFacts: {
      flights: 'None',
      accommodation: 'Tea House / Trekking Lodges',
      routeType: 'Out & Back',
      permits: 'Annapurna Conservation Area Permit, TIMS',
    },
    overview:
      'The Annapurna Base Camp trek follows the Modi Khola valley into the Annapurna Sanctuary, beginning with a drive from Pokhara toward the lower trailhead near Jhinu Danda. From there, the route climbs through Chhomrong and Sinuwa before entering a narrower section of the valley surrounded by bamboo, oak, and rhododendron forest. The trail continues through Dovan and Deurali toward Machhapuchhre Base Camp, where the landscape becomes increasingly open and alpine. As the route gains elevation, the forest gradually gives way to rocky slopes, glacial terrain, and the high mountain environment of the Annapurna Sanctuary.\n\nThe trail reaches Annapurna Base Camp at 4,130 m, surrounded by peaks including Annapurna I, Annapurna South, Hiunchuli, and Machhapuchhre. After reaching the highest point of the trek, the route retraces its path toward the lower valleys before descending to Jhinu Danda and returning to Pokhara.',
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
          "Be prepared for the famous 'Nepali flat': thousands of steep stone staircases that test your leg endurance on the way up to the sanctuary.",
      },
    ],
    itinerary: [
      {
        day: '01',
        title: 'Pokhara → Chhomrong',
        duration: '3 hrs',
        description:
          'The journey begins with a drive from Pokhara toward the roadhead near Jhinu Danda. From the trailhead, the route crosses the Modi Khola and climbs through forest toward Chhomrong. The first section includes a substantial series of stone steps, making this one of the more physically demanding climbs of the lower route. The trail continues upward through forest and scattered settlements before reaching Chhomrong at approximately 2,170 m.\n\nSet on a steep hillside above the Modi Khola valley, Chhomrong is one of the major Gurung settlements on the route and serves as the gateway toward the Annapurna Sanctuary.',
        stats: { elevation: '2,170m', duration: '3 hrs', distance: '5km' },
        price: 'NPR 4,300 (Transport: 2,000, Accommodation: 800, Meals: 1,500)',
      },
      {
        day: '02',
        title: 'Chhomrong → Dovan',
        duration: '5-6 hrs',
        description:
          'The trail descends from Chhomrong on a long series of stone steps toward the Chhomrong Khola before crossing the river and climbing again toward Sinuwa. From Sinuwa, the route enters the forested Modi Khola valley, passing through Bamboo before continuing toward Dovan. The vegetation becomes increasingly dense and humid along this section, with bamboo, oak, and rhododendron forest covering much of the trail.\n\nThe valley gradually narrows as the route continues toward Dovan at approximately 2,600 m, where the surrounding terrain begins to feel more enclosed and mountainous.',
        stats: { elevation: '2,600m', duration: '5-6 hrs', distance: '9-12km' },
        price: 'NPR 2,100 (Accommodation: 600, Meals: 1,500)',
      },
      {
        day: '03',
        title: 'Dovan → Deurali',
        duration: '3-4 hrs',
        description:
          'The trail continues uphill from Dovan through the narrowing Modi Khola valley. Sections of dense bamboo and rhododendron forest give way to steeper and rockier terrain as the route passes Himalaya and continues toward the Hinku Cave area. The landscape becomes more open as the trail approaches Deurali at approximately 3,200 m, marking the transition toward the higher alpine environment of the Annapurna Sanctuary.\n\nThis is a relatively short trekking day compared with the longer lower-valley sections, but the increasing elevation makes a steady pace important.',
        stats: { elevation: '3,200m', duration: '3-4 hrs', distance: '6km' },
        price: 'NPR 2,200 (Accommodation: 600, Meals: 1,600)',
      },
      {
        day: '04',
        title: 'Deurali → Machhapuchhre Base Camp (MBC)',
        duration: '3-4 hrs',
        description:
          'Above Deurali, the forest gradually thins as the route enters more exposed alpine terrain. The valley opens toward the upper Modi Khola, with rocky slopes and glacial features replacing much of the vegetation found at lower elevations. The trail continues toward the entrance of the Annapurna Sanctuary.\n\nThe route reaches Machhapuchhre Base Camp at approximately 3,700 m, positioned beneath the distinctive fluted face of Machhapuchhre (Fishtail). From here, the surrounding peaks become increasingly prominent and the landscape takes on a distinctly high-altitude character.',
        stats: { elevation: '3,700m', duration: '3-4 hrs', distance: '5km' },
        price: 'NPR 2,400 (Accommodation: 800, Meals: 1,600)',
      },
      {
        day: '05',
        title: 'MBC → Annapurna Base Camp (ABC)',
        duration: '2-3 hrs',
        description:
          'The trail continues gently upward from Machhapuchhre Base Camp into the heart of the Annapurna Sanctuary. With the forest now completely behind you, the route crosses open alpine and glacial terrain while the surrounding peaks become increasingly dominant.\n\nThe trail reaches Annapurna Base Camp at 4,130 m, where the valley opens into a natural amphitheatre surrounded by the Annapurna massif. Depending on weather and visibility, views can include Annapurna I, Annapurna South, Hiunchuli, Machhapuchhre, and other surrounding peaks.',
        stats: { elevation: '4,130m', duration: '2-3 hrs', distance: '3-4km' },
        price: 'NPR 3,500 (Accommodation: 1,000, Meals: 2,500)',
        isDestination: true,
      },
      {
        day: '06',
        title: 'ABC → Bamboo (Descent)',
        duration: '6-7 hrs',
        description:
          'The route retraces the trail from Annapurna Base Camp through Machhapuchhre Base Camp, Deurali, Himalaya, and Dovan before continuing toward Bamboo. The long descent brings a rapid change in elevation and landscape, with the open alpine environment gradually giving way to forest.\n\nAlthough the route is descending, the uneven trail and repeated stone steps can make this one of the more physically demanding days. By the time you reach Bamboo at approximately 2,310 m, the warmer and greener forest environment provides a noticeable contrast to the high Sanctuary.',
        stats: {
          elevation: '2,310m',
          duration: '6-7 hrs',
          distance: '13-16km',
        },
        price: 'NPR 2,600 (Accommodation: 800, Meals: 1,800)',
      },
      {
        day: '07',
        title: 'Bamboo → Jhinu Danda & Drive → Pokhara',
        duration: '5-6 hrs trek + 2-3 hrs drive',
        description:
          'The final trekking section continues through the forest toward Sinuwa before climbing back toward Chhomrong. From Chhomrong, the trail follows a long staircase down toward Jhinu Danda, where the trekking route leaves the higher valley. The natural hot springs below Jhinu Danda provide an optional stop before the final drive to Pokhara.\n\nFrom the forested lower valley, the route returns to the roadhead and continues by vehicle toward Pokhara, bringing the seven-day journey into the Annapurna Sanctuary to an end.',
        stats: {
          elevation: '1,780m',
          duration: '5-6 hrs trek + 2-3 hrs drive',
          distance: '10-11km',
        },
        price: 'NPR 3,000 (Transport: 2,000, Meals: 1,000)',
      },
    ],
    gear: {
      essential: [
        { name: 'Backpack (45-60L)', grams: 1500 },
        { name: 'Rain Cover for Backpack', grams: 80 },
        { name: 'Down Jacket', grams: 425 },
        { name: 'Raincoat / Waterproof Shell Jacket', grams: 340 },
        { name: 'Fleece / Insulated Mid Layer', grams: 340 },
        { name: 'Thermal Base Layer Top', grams: 200, quantity: 1 },
        { name: 'Trekking T-Shirt', grams: 140, quantity: 3 },
        { name: 'Trekking Pants', grams: 315, quantity: 2 },
        { name: 'Trekking Boots (pair)', grams: 1100 },
        { name: 'Trekking Socks (per pair)', grams: 60, quantity: 3 },
        { name: 'Warm Hat / Beanie', grams: 75 },
        { name: 'Sun Cap', grams: 60 },
        { name: 'Light Gloves', grams: 65 },
        { name: 'Trekking Poles (pair)', grams: 475 },
        { name: 'Headlamp', grams: 100 },
        { name: 'Water Bottle (1L, empty)', grams: 125 },
        { name: 'Sunglasses (UV 400 Protection)', grams: 33 },
        { name: 'Sunscreen + Lip Balm', grams: 100 },
        { name: 'Personal First Aid Kit', grams: 275 },
        { name: 'Passport, Permits, Cash, Insurance Copy', grams: 150 },
      ],
      goodToHave: [
        { name: 'Sleeping Bag (-10°C to -15°C comfort)', grams: 1400 },
        { name: 'Waterproof Rain Pants', grams: 215 },
        { name: 'Thermal Base Layer Bottom', grams: 200, quantity: 1 },
        {
          name: 'Warm Trekking Trousers / Softshell Pants',
          grams: 370,
          quantity: 2,
        },
        { name: 'Camp Shoes / Sandals', grams: 325 },
        { name: 'Warm Outer Gloves', grams: 110 },
        { name: 'Buff / Neck Gaiter', grams: 43 },
        { name: 'Water Purification Tablets / Filter', grams: 75 },
        { name: 'Toiletries & Quick-Dry Towel', grams: 325 },
        { name: 'Power Bank (10,000-20,000 mAh)', grams: 265 },
        { name: 'Charging Cable / Adapter', grams: 90 },
        { name: 'Snacks / Energy Bars', grams: 450, quantity: 3 },
      ],
    },
  },
  'gokyo-valley-trek': {
    type: 'trek',
    name: 'Gokyo Valley Trek',
    region: 'Khumbu Region',
    meta: {
      duration: '11 Days',
      difficulty: 'Challenging',
      maxElevation: '5,357m',
      bestSeasons: 'March-May, September-November',
      startingPoint: 'Kathmandu',
    },
    tripFacts: {
      flights: 'Kathmandu ⇄ Lukla',
      accommodation: 'Tea houses / lodges',
      routeType: 'Out and Back',
      permits:
        'Sagarmatha National Park Entry Permit · Khumbu Pasang Lhamu Rural Municipality Trek-Card',
    },
    overview:
      "The Gokyo Valley Trek takes you from Kathmandu into the Khumbu through Lukla, Namche Bazaar and the Dudh Koshi valley before turning toward the Gokyo Valley. As you climb higher, forest gives way to alpine terrain, glacial landscapes and the turquoise Gokyo Lakes.\n\nGokyo village sits beside Dudh Pokhari, the third and largest of the main Gokyo Lakes. From here, the trail climbs to Gokyo Ri, a high viewpoint at approximately 5,357 m. On a clear day, you can look across the Gokyo Lakes and surrounding glaciers toward some of the world's highest peaks. Nepal Tourism Board specifically identifies Gokyo Ri as a viewpoint for the surrounding peaks and lakes.\n\nThe Gokyo Lakes also have religious significance for Hindu and Buddhist communities and form part of the Gokyo and associated lakes Ramsar site.",
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
    itinerary: [
      {
        title: 'Kathmandu to Lukla to Phakding',
        duration: 'Flight + 3-4 hours trek',
      },
      { title: 'Phakding to Namche Bazaar', duration: '6-7 hours' },
      { title: 'Acclimatization Day: Namche Bazaar', duration: '3-4 hours' },
      { title: 'Namche Bazaar to Dole', duration: '5-6 hours' },
      { title: 'Dole to Machhermo', duration: '3-4 hours' },
      { title: 'Machhermo to Gokyo', duration: '4-5 hours' },
      { title: 'Gokyo Ri · Fourth & Fifth Lakes', duration: '5-6 hours' },
      { title: 'Gokyo to Dole', duration: '5-6 hours' },
      { title: 'Dole to Namche Bazaar', duration: '6-7 hours' },
      { title: 'Namche Bazaar to Lukla', duration: '7-8 hours' },
      { title: 'Lukla to Kathmandu', duration: '35-min flight + transfer' },
    ],
    gear: {
      essential: [
        { name: 'Backpack (45-60L)', grams: 1500 },
        { name: 'Rain Cover for Backpack', grams: 80 },
        { name: 'Down Jacket', grams: 425 },
        { name: 'Raincoat / Waterproof Shell Jacket', grams: 340 },
        { name: 'Fleece / Insulated Mid Layer', grams: 340 },
        { name: 'Thermal Base Layer Top', grams: 200, quantity: 1 },
        { name: 'Trekking T-Shirt', grams: 140, quantity: 3 },
        { name: 'Trekking Pants', grams: 315, quantity: 2 },
        { name: 'Trekking Boots (pair)', grams: 1100 },
        { name: 'Trekking Socks (per pair)', grams: 60, quantity: 3 },
        { name: 'Warm Hat / Beanie', grams: 75 },
        { name: 'Sun Cap', grams: 60 },
        { name: 'Light Gloves', grams: 65 },
        { name: 'Trekking Poles (pair)', grams: 475 },
        { name: 'Headlamp', grams: 100 },
        { name: 'Water Bottle (1L, empty)', grams: 125 },
        { name: 'Sunglasses (UV 400 Protection)', grams: 33 },
        { name: 'Sunscreen + Lip Balm', grams: 100 },
        { name: 'Personal First Aid Kit', grams: 275 },
        { name: 'Passport, Permits, Cash, Insurance Copy', grams: 150 },
      ],
      goodToHave: [
        { name: 'Sleeping Bag (-10°C to -15°C comfort)', grams: 1400 },
        { name: 'Waterproof Rain Pants', grams: 215 },
        { name: 'Thermal Base Layer Bottom', grams: 200, quantity: 1 },
        {
          name: 'Warm Trekking Trousers / Softshell Pants',
          grams: 370,
          quantity: 2,
        },
        { name: 'Camp Shoes / Sandals', grams: 325 },
        { name: 'Warm Outer Gloves', grams: 110 },
        { name: 'Buff / Neck Gaiter', grams: 43 },
        { name: 'Water Purification Tablets / Filter', grams: 75 },
        { name: 'Toiletries & Quick-Dry Towel', grams: 325 },
        { name: 'Power Bank (10,000-20,000 mAh)', grams: 265 },
        { name: 'Charging Cable / Adapter', grams: 90 },
        { name: 'Snacks / Energy Bars', grams: 450, quantity: 3 },
      ],
    },
  },
  'ghorepani-poon-hill-trek': {
    type: 'trek',
    name: 'Ghorepani Poon Hill Trek',
    region: 'Annapurna Region',
    meta: {
      duration: '5 Days',
      difficulty: 'Moderate',
      maxElevation: '3,210m',
      bestSeasons: 'March-May, September-November',
      startingPoint: 'Pokhara',
    },
    tripFacts: {
      flights: 'None',
      accommodation: 'Tea House',
      routeType: 'Circuit',
      permits: 'Annapurna Conservation Area Permit, TIMS',
    },
    overview:
      'The Ghorepani Poon Hill trek follows the classic trail through the lower foothills of the Annapurna region, beginning with a drive from Pokhara toward the trailhead at Birethanti or Nayapul. From there, the route ascends through terraced farmland, traditional Magar settlements, and dense oak and rhododendron forests toward Ulleri and Ghorepani. The trail steadily climbs through the Modi and Bhurungdi Khola valleys, where the landscape transitions from cultivated lower hills to rich temperate forest.\n\nAs the route reaches Ghorepani, the surrounding forest gives way to panoramic views of the Annapurna and Dhaulagiri mountain ranges. An early morning ascent leads to the summit of Poon Hill at 3,210 m, providing panoramic mountain views before the route descends through Tadapani and the historic Gurung village of Ghandruk. After traversing dense forests and scenic terraced hillsides, the trek descends back toward Birethanti before returning to Pokhara.',
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
    itinerary: [
      {
        day: '01',
        title: 'Pokhara → Birethanti → Tikhedhunga / Ulleri',
        duration: '4-5 hrs',
        description:
          'A morning drive from Pokhara takes you toward Nayapul and Birethanti, where the trekking route follows the Bhurungdi Khola through terraced farmland and small settlements. From Tikhedhunga, the trail becomes steeper as you climb a long series of stone steps toward Ulleri. The sustained ascent gains significant elevation, with occasional openings offering views toward Annapurna South and Hiunchuli on clear days.\n\nThe day ends in Ulleri at approximately 1,960 m, a traditional Magar settlement and common overnight stop on the Poon Hill route.',
        stats: { elevation: '1,960m', duration: '4-5 hrs', distance: '10km' },
        price: 'NPR 3,500 (Transport: 1,500, Accommodation: 500, Meals: 1,500)',
      },
      {
        day: '02',
        title: 'Ulleri → Banthanti → Ghorepani',
        duration: '5-6 hrs',
        description:
          'The trail leaves Ulleri and enters a dense forest of oak, magnolia, and rhododendron. The route continues on a steady incline, passing small teahouses and streams around Banthanti and Nangethanti as you move deeper into the forest. The forest canopy becomes thicker and the air cooler with elevation.\n\nThe final section climbs through the upper woodland before emerging at Ghorepani, approximately 2,860 m, where openings along the ridge can offer views toward Dhaulagiri and the Annapurna range.',
        stats: { elevation: '2,860m', duration: '5-6 hrs', distance: '8km' },
        price: 'NPR 2,500 (Accommodation: 700, Meals: 1,800)',
      },
      {
        day: '03',
        title: 'Ghorepani → Poon Hill → Tadapani',
        duration: '6-7 hrs',
        description:
          'The day begins before dawn with a steep climb up the stone trail to Poon Hill at 3,210 m, the highest point of the trek. As morning light reaches the mountains, the summit ridge opens to wide views across Dhaulagiri I, Annapurna I, Annapurna South, Machhapuchhre, and Nilgiri.\n\nAfter descending to Ghorepani for breakfast, the route follows a high ridge through pine and rhododendron forest toward Deurali Pass. The trail then descends through a narrow forested section before a short climb brings you to Tadapani at approximately 2,630 m.',
        stats: { elevation: '3,210m', duration: '6-7 hrs', distance: '12km' },
        price: 'NPR 2,500 (Accommodation: 700, Meals: 1,800)',
        isDestination: true,
      },
      {
        day: '04',
        title: 'Tadapani → Ghandruk',
        duration: '3-4 hrs',
        description:
          'From Tadapani, the route descends through rhododendron and oak forest. The trail gradually loses elevation as the woodland gives way to more open slopes, terraces, and scattered settlements.\n\nThe route eventually reaches Ghandruk at approximately 1,940 m, a traditional Gurung village in Kaski. Stone-paved lanes, traditional houses, and the Gurung Museum provide a cultural contrast to the forest sections of the previous days, while clear openings can offer views toward Annapurna South, Hiunchuli, and Machhapuchhre.',
        stats: { elevation: '1,940m', duration: '3-4 hrs', distance: '7km' },
        price: 'NPR 2,500 (Accommodation: 800, Meals: 1,700)',
      },
      {
        day: '05',
        title: 'Ghandruk → Birethanti → Pokhara',
        duration: '4-5 hrs',
        description:
          'The final day descends from Ghandruk through terraced fields and small stone hamlets toward the Modi Khola valley. The trail follows stone stairways down the hillside, passing local farms and rural homesteads along the way. After reaching the valley floor, the route follows the river toward Birethanti, where the trekking section concludes.\n\nFrom Birethanti, a short drive returns you to Pokhara, completing the five-day Ghorepani–Poon Hill circuit.',
        stats: { elevation: '1,940m', duration: '4-5 hrs', distance: '10km' },
        price: 'NPR 2,000 (Transport: 1,000, Meals: 1,000)',
      },
    ],
    gear: {
      essential: [
        { name: 'Backpack (45-60L)', grams: 1500 },
        { name: 'Rain Cover for Backpack', grams: 80 },
        { name: 'Down Jacket', grams: 425 },
        { name: 'Raincoat / Waterproof Shell Jacket', grams: 340 },
        { name: 'Fleece / Insulated Mid Layer', grams: 340 },
        { name: 'Thermal Base Layer Top', grams: 200, quantity: 1 },
        { name: 'Trekking T-Shirt', grams: 140, quantity: 3 },
        { name: 'Trekking Pants', grams: 315, quantity: 2 },
        { name: 'Trekking Boots (pair)', grams: 1100 },
        { name: 'Trekking Socks (per pair)', grams: 60, quantity: 3 },
        { name: 'Warm Hat / Beanie', grams: 75 },
        { name: 'Sun Cap', grams: 60 },
        { name: 'Light Gloves', grams: 65 },
        { name: 'Trekking Poles (pair)', grams: 475 },
        { name: 'Headlamp', grams: 100 },
        { name: 'Water Bottle (1L, empty)', grams: 125 },
        { name: 'Sunglasses (UV 400 Protection)', grams: 33 },
        { name: 'Sunscreen + Lip Balm', grams: 100 },
        { name: 'Personal First Aid Kit', grams: 275 },
        { name: 'Passport, Permits, Cash, Insurance Copy', grams: 150 },
      ],
      goodToHave: [
        { name: 'Sleeping Bag (-10°C to -15°C comfort)', grams: 1400 },
        { name: 'Waterproof Rain Pants', grams: 215 },
        { name: 'Thermal Base Layer Bottom', grams: 200, quantity: 1 },
        {
          name: 'Warm Trekking Trousers / Softshell Pants',
          grams: 370,
          quantity: 2,
        },
        { name: 'Camp Shoes / Sandals', grams: 325 },
        { name: 'Warm Outer Gloves', grams: 110 },
        { name: 'Buff / Neck Gaiter', grams: 43 },
        { name: 'Water Purification Tablets / Filter', grams: 75 },
        { name: 'Toiletries & Quick-Dry Towel', grams: 325 },
        { name: 'Power Bank (10,000-20,000 mAh)', grams: 265 },
        { name: 'Charging Cable / Adapter', grams: 90 },
        { name: 'Snacks / Energy Bars', grams: 450, quantity: 3 },
      ],
    },
  },
  'mardi-himal-trek': {
    type: 'trek',
    name: 'Mardi Himal Trek',
    region: 'Annapurna Region',
    meta: {
      duration: '5 Days',
      difficulty: 'Moderate',
      maxElevation: '4,500m',
      bestSeasons: 'March-May, September-November',
      startingPoint: 'Pokhara',
    },
    tripFacts: {
      flights: 'None',
      accommodation: 'Tea houses / mountain lodges',
      routeType: 'Teardrop ridge trek',
      permits: 'Annapurna Conservation Area Permit, TIMS',
    },
    overview:
      'The Mardi Himal trek follows a ridge trail through the eastern reaches of the Annapurna region, starting with a drive from Pokhara to the trailhead at Kande or Simrung. From the trailhead, the route ascends through forests of oak, maple, and rhododendron toward Australian Camp and Pothana before continuing along the forested ridgelines to Forest Camp. The trail steadily gains elevation while moving away from the busier main routes of the region.\n\nAs the route continues beyond Low Camp and Badal Danda, the tree line drops away to reveal open ridge walking with views of Annapurna South, Hiunchuli, and Machhapuchhre. The trail reaches High Camp before making the final early morning ascent along the narrow ridge to Mardi Himal Base Camp at 4,500 m. After taking in close views of the surrounding peaks and glaciers, the route descends back through Middle Camp and Sidhing before driving back to Pokhara.',
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
    expectations: [
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
    itinerary: [
      {
        day: '01',
        title: 'Pokhara → Kande → Forest Camp',
        duration: '5-6 hrs',
        description:
          'The journey begins with a drive from Pokhara toward the trailhead at Kande. From Kande, the trail starts with an uphill climb through stone paths and terraced fields toward Australian Camp, opening to initial views across the Pokhara valley and Annapurna range. The route continues along a gentle forested trail through Pothana, where park permits are checked.\n\nBeyond Pothana, the trail leaves the main trekking route and enters a quieter, denser section of forest, winding gradually upward through oak and rhododendron trees until reaching Forest Camp (Kokar) at approximately 2,550 m.',
        stats: { elevation: '2,550m', duration: '5-6 hrs', distance: '11km' },
        price: 'NPR 2,700 (Accommodation: 600, Meals: 1,600, Transport: 500)',
      },
      {
        day: '02',
        title: 'Forest Camp → Badal Danda',
        duration: '4-5 hrs',
        description:
          'The trail leaves Forest Camp and continues its steady climb through dense moss-covered forest. As the elevation increases, the vegetation begins to shift, with rhododendron and birch trees dominating the higher forest section toward Low Camp.\n\nBeyond Low Camp, the trail emerges above the tree line onto an open ridgeline. The landscape changes rapidly from dense woodland to sub-alpine ridge walking, offering unobstructed views of Machhapuchhre and Annapurna South. The day ends at Badal Danda at approximately 3,210 m, set high on the ridge above the clouds.',
        stats: { elevation: '3,210m', duration: '4-5 hrs', distance: '8km' },
        price: 'NPR 2,500 (Accommodation: 700, Meals: 1,800)',
      },
      {
        day: '03',
        title: 'Badal Danda → High Camp',
        duration: '3-4 hrs',
        description:
          'The route leaves Badal Danda and follows the narrow grassy ridge toward High Camp. Walking along the exposed spine of the ridge, clear openings on either side offer sweeping views of the Modi Khola valley to the west and the Mardi Khola valley to the east. As you gain elevation, the terrain becomes rockier and more alpine, with low shrubs replacing the alpine grasses.\n\nThe short walking day allows time for acclimatization and rest upon reaching High Camp at approximately 3,580 m, preparing for the early morning ascent to the base camp.',
        stats: { elevation: '3,580m', duration: '3-4 hrs', distance: '4.5km' },
        price: 'NPR 2,800 (Accommodation: 800, Meals: 2,000)',
      },
      {
        day: '04',
        title: 'High Camp → Mardi Himal Base Camp → Badal Danda / Low Camp',
        duration: '7-8 hrs',
        description:
          'The day begins before dawn with a steep climb along the narrow, rocky ridgeline toward Mardi Himal Upper Viewpoint and Base Camp. As the morning light hits the surrounding sanctuary, the trail passes rocky outcrops before reaching Mardi Himal Base Camp at 4,500 m, sitting directly beneath the towering face of Machhapuchhre.\n\nAfter spending time at the base camp taking in views of Annapurna I, Annapurna South, and Hiunchuli, the route retraces its path down the ridge back to High Camp for breakfast. The trail then continues descending along the familiar ridge to spend the night at Badal Danda or Low Camp at approximately 2,970 m.',
        stats: { elevation: '4,500m', duration: '7-8 hrs', distance: '12km' },
        price: 'NPR 2,500 (Accommodation: 700, Meals: 1,800)',
        isDestination: true,
      },
      {
        day: '05',
        title: 'Low Camp → Sidhing → Pokhara',
        duration: '4-5 hrs',
        description:
          'The final day leaves the high ridge trail and takes a steep descent through dense rhododendron and oak forest toward the valley floor. The trail drops rapidly through shaded woodland before emerging into the terraced fields and traditional hamlets surrounding Sidhing village.\n\nUpon reaching Sidhing at approximately 1,700 m, the trekking portion concludes. From Sidhing, a local jeep drive follows the river valley back toward Lumre and connects to the main highway returning to Pokhara.',
        stats: { elevation: '2,970m', duration: '4-5 hrs', distance: '9km' },
        price: 'NPR 2,000 (Meals: 1,000, Transport: 1,000)',
      },
    ],
    gear: {
      essential: [
        { name: 'Backpack (45-60L)', grams: 1500 },
        { name: 'Rain Cover for Backpack', grams: 80 },
        { name: 'Down Jacket', grams: 425 },
        { name: 'Raincoat / Waterproof Shell Jacket', grams: 340 },
        { name: 'Fleece / Insulated Mid Layer', grams: 340 },
        { name: 'Thermal Base Layer Top', grams: 200, quantity: 1 },
        { name: 'Trekking T-Shirt', grams: 140, quantity: 3 },
        { name: 'Trekking Pants', grams: 315, quantity: 2 },
        { name: 'Trekking Boots (pair)', grams: 1100 },
        { name: 'Trekking Socks (per pair)', grams: 60, quantity: 3 },
        { name: 'Warm Hat / Beanie', grams: 75 },
        { name: 'Sun Cap', grams: 60 },
        { name: 'Light Gloves', grams: 65 },
        { name: 'Trekking Poles (pair)', grams: 475 },
        { name: 'Headlamp', grams: 100 },
        { name: 'Water Bottle (1L, empty)', grams: 125 },
        { name: 'Sunglasses (UV 400 Protection)', grams: 33 },
        { name: 'Sunscreen + Lip Balm', grams: 100 },
        { name: 'Personal First Aid Kit', grams: 275 },
        { name: 'Passport, Permits, Cash, Insurance Copy', grams: 150 },
      ],
      goodToHave: [
        { name: 'Sleeping Bag (-10°C to -15°C comfort)', grams: 1400 },
        { name: 'Waterproof Rain Pants', grams: 215 },
        { name: 'Thermal Base Layer Bottom', grams: 200, quantity: 1 },
        {
          name: 'Warm Trekking Trousers / Softshell Pants',
          grams: 370,
          quantity: 2,
        },
        { name: 'Camp Shoes / Sandals', grams: 325 },
        { name: 'Warm Outer Gloves', grams: 110 },
        { name: 'Buff / Neck Gaiter', grams: 43 },
        { name: 'Water Purification Tablets / Filter', grams: 75 },
        { name: 'Toiletries & Quick-Dry Towel', grams: 325 },
        { name: 'Power Bank (10,000-20,000 mAh)', grams: 265 },
        { name: 'Charging Cable / Adapter', grams: 90 },
        { name: 'Snacks / Energy Bars', grams: 450, quantity: 3 },
      ],
    },
  },
  'shey-phoksundo': {
    type: 'trek',
    name: 'Shey Phoksundo Trek',
    region: 'Dolpo Region',
    meta: {
      duration: '8 Days',
      difficulty: 'Moderate to Challenging',
      maxElevation: '3,660 m',
      bestSeasons: 'March-May, September-November',
      startingPoint: 'Kathmandu',
    },
    tripFacts: {
      flights: 'Kathmandu ⇄ Nepalgunj ⇄ Juphal',
      accommodation: 'Tea houses / Homestays / Tents',
      routeType: 'Out and Back',
      permits:
        'Shey Phoksundo National Park Permit, Lower Dolpo Restricted Area Permit, TIMS',
    },
    overview:
      "The Shey Phoksundo Trek leads into the remote wilderness of Lower Dolpo, beginning with a mountain flight from Nepalgunj to Juphal. From Juphal, the route descends toward the Thuli Bheri River before turning into the Suligad Valley and entering Shey-Phoksundo National Park. The trail follows the river through pine, cedar, and bamboo forests, crossing suspension bridges and passing through dramatic gorges and small mountain settlements as it climbs toward Chhepka and Jharana.\n\nBeyond Jharana, the landscape becomes more rugged as the route enters the Phoksundo Valley. The trail reaches Ringmo, a traditional settlement beside Phoksundo Lake, where the deep-blue waters lie at approximately 3,611 m beneath steep cliffs and mountain slopes. A day around Ringmo allows time to explore the lake and experience the area's distinctive Bon cultural heritage, including Thashung Gompa, a historic monastery associated with the Bon tradition and said to be around 900 years old. After exploring the lake and surrounding village, the route retraces the valley through the forests and river gorges toward Juphal.",
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
    itinerary: [
      { title: 'Kathmandu → Nepalgunj → Juphal → Dunai', duration: '3-4 hrs' },
      { title: 'Dunai → Suligad → Chhepka', duration: '5-6 hrs' },
      { title: 'Chhepka → Rechi → Jharana Hotel', duration: '5-6 hrs' },
      {
        title: 'Jharana Hotel → Ringmo Village / Phoksundo Lake',
        duration: '4-5 hrs',
      },
      {
        title: 'Exploration Day at Phoksundo Lake & Thashung Gompa',
        duration: '3-4 hrs (exploration)',
      },
      { title: 'Ringmo Village → Chhepka', duration: '6-7 hrs' },
      { title: 'Chhepka → Suligad → Juphal', duration: '5-6 hrs' },
      { title: 'Juphal → Nepalgunj → Kathmandu' },
    ],
    gear: {
      essential: [
        { name: 'Backpack (45-60L)', grams: 1500 },
        { name: 'Rain Cover for Backpack', grams: 80 },
        { name: 'Down Jacket', grams: 425 },
        { name: 'Raincoat / Waterproof Shell Jacket', grams: 340 },
        { name: 'Fleece / Insulated Mid Layer', grams: 340 },
        { name: 'Thermal Base Layer Top', grams: 200, quantity: 1 },
        { name: 'Trekking T-Shirt', grams: 140, quantity: 3 },
        { name: 'Trekking Pants', grams: 315, quantity: 2 },
        { name: 'Trekking Boots (pair)', grams: 1100 },
        { name: 'Trekking Socks (per pair)', grams: 60, quantity: 3 },
        { name: 'Warm Hat / Beanie', grams: 75 },
        { name: 'Sun Cap', grams: 60 },
        { name: 'Light Gloves', grams: 65 },
        { name: 'Trekking Poles (pair)', grams: 475 },
        { name: 'Headlamp', grams: 100 },
        { name: 'Water Bottle (1L, empty)', grams: 125 },
        { name: 'Sunglasses (UV 400 Protection)', grams: 33 },
        { name: 'Sunscreen + Lip Balm', grams: 100 },
        { name: 'Personal First Aid Kit', grams: 275 },
        { name: 'Passport, Permits, Cash, Insurance Copy', grams: 150 },
      ],
      goodToHave: [
        { name: 'Sleeping Bag (-10°C to -15°C comfort)', grams: 1400 },
        { name: 'Waterproof Rain Pants', grams: 215 },
        { name: 'Thermal Base Layer Bottom', grams: 200, quantity: 1 },
        {
          name: 'Warm Trekking Trousers / Softshell Pants',
          grams: 370,
          quantity: 2,
        },
        { name: 'Camp Shoes / Sandals', grams: 325 },
        { name: 'Warm Outer Gloves', grams: 110 },
        { name: 'Buff / Neck Gaiter', grams: 43 },
        { name: 'Water Purification Tablets / Filter', grams: 75 },
        { name: 'Toiletries & Quick-Dry Towel', grams: 325 },
        { name: 'Power Bank (10,000-20,000 mAh)', grams: 265 },
        { name: 'Charging Cable / Adapter', grams: 90 },
        { name: 'Snacks / Energy Bars', grams: 450, quantity: 3 },
      ],
    },
  },
  'tilicho-lake-trek': {
    type: 'trek',
    name: 'Tilicho Lake Trek',
    region: 'Annapurna Region',
    meta: {
      duration: '11 Days',
      difficulty: 'Challenging',
      maxElevation: '4,919 m',
      bestSeasons: 'Mar–May, Sep–Nov',
      startingPoint: 'Kathmandu',
    },
    tripFacts: {
      flights: 'None',
      accommodation: 'Tea houses / lodges',
      routeType: 'Out and back',
      permits: 'Annapurna Conservation Area Permit, TIMS',
    },
    overview:
      'The Tilicho Lake Trek follows the Marsyangdi Valley from Kathmandu toward the high Manang region, passing through Besisahar, Chame, and Upper Pisang before reaching Manang. From here, the route leaves the main Annapurna Circuit corridor and heads toward Khangsar and Shree Kharka, where the landscape becomes drier and more exposed. Traditional stone-built villages, Buddhist cultural features, pine forests, and increasingly open mountain terrain mark the transition into the high Himalaya.\n\nAfter an acclimatization day in Manang, the route climbs above 4,000 m to Tilicho Base Camp before the final ascent to Tilicho Lake at 4,919 m. The lake excursion involves steep, rocky and exposed terrain, so an early start and careful pacing are important. The journey then retraces the approach through Shree Kharka and Manang before descending along the Marsyangdi Valley toward Kathmandu. This standalone route does not cross Thorong La; itineraries that continue over Thorong La are a different Annapurna Circuit-with-Tilicho variation.',
    seasonalPlanning: [
      {
        month: 'Jan',
        condition: 'Very cold / Possible snow or ice around the Tilicho route',
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
        condition: 'Warming conditions / Generally favourable trekking weather',
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
        condition: 'Monsoon / Rain, cloud, difficult road & trail conditions',
      },
      {
        month: 'Aug',
        condition:
          'Monsoon / Manang drier but access can be affected by weather',
      },
      {
        month: 'Sep',
        condition: 'Post-monsoon / Clearer skies and good mountain visibility',
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
    expectations: [
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
    itinerary: [
      {
        day: '01',
        title: 'Kathmandu → Besisahar',
        duration: '6-8 hrs drive',
        description:
          "The journey begins with a road trip west from Kathmandu toward Besisahar, following the Prithvi Highway before turning north toward the Marsyangdi Valley. Terraced hills, river valleys, roadside settlements, and changing landscapes provide the first introduction to the Annapurna region. Besisahar is the traditional gateway to the Annapurna trekking corridor.\n\nDepending on traffic, road conditions, and the transport used, the drive can take most of the day. The night in Besisahar keeps the first day's elevation gain modest before the road climbs deeper into the mountains.",
        stats: {
          elevation: '760 m · Besisahar',
          duration: '6-8 hrs drive',
          distance: '175 km',
        },
        price: 'NPR 3,700 (Accommodation: 600, Meals: 1,600, Transport: 1,500)',
      },
      {
        day: '02',
        title: 'Besisahar → Chame',
        duration: '5-8 hrs',
        description:
          'From Besisahar, the road leaves the main highway and follows the Marsyangdi Valley deeper into the mountains. The journey passes through steep-sided valleys, waterfalls, forested slopes, and mountain settlements as the road climbs toward Manang District. Chame, the district headquarters of Manang, sits at approximately 2,670 m. The surrounding landscape is noticeably more mountainous here, with pine forests and increasingly prominent Himalayan peaks.\n\nRoad conditions can be rough in places, and travel time varies with weather and surface conditions.',
        stats: {
          elevation: '2,670 m · Chame',
          duration: '5-8 hrs',
          distance: '65 km',
        },
        price: 'NPR 2,300 (Accommodation: 800, Meals: 1,500)',
      },
      {
        day: '03',
        title: 'Chame → Upper Pisang',
        duration: '5-6 hrs',
        description:
          'The first full trekking day follows the Marsyangdi River through pine and fir forests, with the valley narrowing around dramatic rock formations. Small settlements and cultivated areas gradually give way to drier mountain terrain as the route climbs.\n\nAround Bhratang and Dhukur Pokhari, the landscape opens and views toward Annapurna II and Pisang Peak become more prominent. A final climb brings you to Upper Pisang, positioned above the valley at approximately 3,300 m.',
        stats: {
          elevation: '3,300 m · Upper Pisang',
          duration: '5-6 hrs',
          distance: '14 km',
        },
        price: 'NPR 2,300 (Accommodation: 800, Meals: 1,500)',
      },
      {
        day: '04',
        title: 'Upper Pisang → Manang',
        duration: '5-6 hrs',
        description:
          'A higher route from Upper Pisang climbs toward Ghyaru and Ngawal, with wider views across the Marsyangdi Valley and surrounding mountains. The ascent is more demanding than the lower valley alternative, but it also provides a gradual introduction to the increasingly dry landscape of upper Manang.\n\nAfter Ngawal, the trail descends through Mungji and Braga before reaching Manang at approximately 3,540 m. This is the main settlement and acclimatization base for the higher section of the trek.',
        stats: {
          elevation: '3,540 m · Manang',
          duration: '5-6 hrs',
          distance: '17 km',
        },
        price: 'NPR 2,500 (Accommodation: 700, Meals: 1,800)',
      },
      {
        day: '05',
        title: 'Acclimatization Day · Manang',
        duration: '3-5 hrs',
        description:
          'Manang is the planned acclimatization stop before the trek moves above 4,000 m. Keep the day active but easy, with a short optional hike rather than another demanding trekking stage. You return to Manang to sleep at the same elevation.',
        stats: {
          elevation: '3,540 m · Manang',
          duration: '3-5 hrs',
          distance: '5 km',
          note: 'Acclimatization day · optional hike',
        },
        price: 'NPR 2,600 (Accommodation: 800, Meals: 1,800)',
      },
      {
        day: '06',
        title: 'Manang → Shree Kharka',
        duration: '4-5 hrs',
        description:
          'Leaving Manang, the route turns toward Khangsar and enters the Tilicho side valley. The settlement and surrounding slopes have a distinctly drier character than the lower Marsyangdi Valley, with sparse vegetation and open mountain terrain.\n\nFrom Khangsar, the trail climbs toward Shree Kharka, where the overnight elevation reaches approximately 4,050 m. The higher altitude makes this a noticeably more demanding stage than the approach through the lower valley.',
        stats: {
          elevation: '4,050 m · Shree Kharka',
          duration: '4-5 hrs',
          distance: '10 km',
        },
        price: 'NPR 2,800 (Accommodation: 1,000, Meals: 1,800)',
      },
      {
        day: '07',
        title: 'Shree Kharka → Tilicho Base Camp',
        duration: '4-5 hrs',
        description:
          'The trail climbs farther into the high mountain environment toward Tilicho Base Camp. Rocky slopes and exposed sections make the route more physically demanding, particularly at this elevation.\n\nAt approximately 4,150 m, Tilicho Base Camp is the final overnight stop before the lake. Facilities here are more basic than those in Manang, and conditions can be affected by season and weather.',
        stats: {
          elevation: '4,150 m · Tilicho Base Camp',
          duration: '4-5 hrs',
          distance: '8 km',
          note: 'Exposed slopes · scree · landslide-prone sections',
        },
        price: 'NPR 2,800 (Accommodation: 1,000, Meals: 1,800)',
      },
      {
        day: '08',
        title: 'Tilicho Base Camp → Tilicho Lake → Shree Kharka',
        duration: '7-8 hrs',
        description:
          'An early start takes you from Tilicho Base Camp toward the lake through steep, rocky high-altitude terrain. The final approach is exposed in places, so conditions underfoot and weather should be assessed before continuing. At 4,919 m, Tilicho Lake is the highest point of the trek.\n\nAfter spending time at the lake, descend through the same high-altitude section and continue toward Shree Kharka for the night. This makes Day 08 the longest and most demanding trekking day of the itinerary.',
        stats: {
          elevation: '4,919 m · Tilicho Lake',
          duration: '7-8 hrs',
          distance: '18 km',
          note: 'Highest point 4,919 m · Sleep Shree Kharka 4,050 m',
        },
        price: 'NPR 3,000 (Accommodation: 1,000, Meals: 2,000)',
        isDestination: true,
      },
      {
        day: '09',
        title: 'Shree Kharka → Manang',
        duration: '4-5 hrs',
        description:
          "After the high-altitude lake day, the return descends through the Tilicho side valley toward Khangsar. The landscape gradually becomes less exposed as the route loses elevation.\n\nFrom Khangsar, the trail continues to Manang, where the lower sleeping elevation provides a useful recovery point after the previous day's climb to 4,919 m.",
        stats: {
          elevation: '3,540 m · Manang',
          duration: '4-5 hrs',
          distance: '12 km',
          note: 'Shree Kharka · Khangsar · Manang',
        },
        price: 'NPR 2,300 (Accommodation: 800, Meals: 1,500)',
      },
      {
        day: '10',
        title: 'Manang → Upper Pisang',
        duration: '6-7 hrs',
        description:
          'The journey retraces the Marsyangdi Valley toward Upper Pisang. If the higher route is used again, you pass through the ridges around Ngawal and Ghyaru before descending toward Pisang. The landscape becomes greener as elevation decreases, with forests returning around the Marsyangdi Valley.\n\nUpper Pisang provides the final trekking overnight before the road journey back toward Kathmandu.',
        stats: {
          elevation: '3,300 m · Upper Pisang',
          duration: '6-7 hrs',
          distance: '17 km',
          note: 'Manang · Ngawal · Ghyaru',
        },
        price: 'NPR 2,300 (Accommodation: 800, Meals: 1,500)',
      },
      {
        day: '11',
        title: 'Upper Pisang → Chame → Kathmandu',
        duration: '4-5 hrs trek',
        description:
          'The final trekking section descends from Upper Pisang toward Chame through the Marsyangdi Valley. You leave the high alpine environment behind as forest and lower-elevation vegetation become more prominent. At Chame, the trekking section ends and the return continues by road toward Besisahar and Kathmandu.\n\nThe road journey can take much of the day, with actual travel time depending on road conditions, traffic, weather, and the vehicle used.',
        stats: {
          elevation: '760 m',
          duration: '4-5 hrs trek',
          distance: '14 km',
        },
        price: 'NPR 3,000 (Meals: 1,000, Transport: 2,000)',
      },
    ],
    gear: {
      essential: [
        { name: 'Backpack (45-60L)', grams: 1500 },
        { name: 'Rain Cover for Backpack', grams: 80 },
        { name: 'Down Jacket', grams: 450 },
        { name: 'Waterproof Shell Jacket', grams: 350 },
        { name: 'Fleece / Mid Layer', grams: 340 },
        { name: 'Thermal Base Layer Top', grams: 200, quantity: 1 },
        { name: 'Thermal Base Layer Bottom', grams: 200, quantity: 1 },
        { name: 'Trekking T-Shirt', grams: 140, quantity: 3 },
        { name: 'Trekking Pants', grams: 320, quantity: 2 },
        { name: 'Trekking Boots (pair)', grams: 1150 },
        { name: 'Trekking Socks (per pair)', grams: 60, quantity: 4 },
        { name: 'Warm Hat / Beanie', grams: 80 },
        { name: 'Warm Gloves', grams: 100 },
        { name: 'Trekking Poles', grams: 480 },
        { name: 'Headlamp', grams: 100 },
        { name: 'Water Bottle (1L)', grams: 125 },
        { name: 'Sunglasses (UV Protection)', grams: 30 },
        { name: 'Sunscreen + Lip Balm', grams: 100 },
        { name: 'Personal First Aid Kit', grams: 280 },
        { name: 'Passport, Permits, Cash, Insurance Copy', grams: 150 },
      ],
      goodToHave: [
        { name: 'Sleeping Bag (-15C comfort)', grams: 1500 },
        { name: 'Waterproof Rain Pants', grams: 220 },
        { name: 'Camp Shoes / Sandals', grams: 330 },
        { name: 'Buff / Neck Gaiter', grams: 40 },
        { name: 'Water Purification Tablets', grams: 70 },
        { name: 'Quick-Dry Towel', grams: 120 },
        { name: 'Power Bank', grams: 270 },
        { name: 'Charging Cable / Adapter', grams: 90 },
        { name: 'Energy Bars / Snacks', grams: 450, quantity: 3 },
        { name: 'Microspikes (Spring/Winter)', grams: 380 },
      ],
    },
  },
};
