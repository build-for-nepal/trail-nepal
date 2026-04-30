import { TrekDetail } from '@/types/trek';

export const TREK_DETAILS: Record<string, TrekDetail> = {
  'ebc-trek': {
    id: 'ebc-trek',
    name: 'Everest Base Camp (EBC) Trek',
    region: 'Khumbu region',
    meta: {
      duration: '11 Days',
      difficulty: 'Difficult',
      maxElevation: '5,545m',
      bestSeasons: 'March - May, September - November',
      startingPoint: 'Lukla (Tenzing-Hillary Airport)',
    },
    overview:
      'The Everest Base Camp trek is more than just a hike, it is a pilgrimage to the highest point on Earth and a deep dive into the heart of the Himalayas. Beginning with a pulse-pounding flight into the mountain-side airstrip of Lukla, the journey takes you through the sacred Sagarmatha National Park, a UNESCO World Heritage site. You will traverse high suspension bridges draped in prayer flags, navigate ancient glacial moraines, and walk through stone-walled villages that have remained unchanged for centuries. Beyond the physical challenge of reaching 5,364 meters, the trek offers a profound cultural encounter with the Sherpa people, whose hospitality and spiritual resilience are as legendary as the peaks they call home.',
    timeline: [
      {
        day: '01',
        title: 'Kathmandu to Lukla & Trek to Phakding',
        description:
          'Your adventure begins with a breathtaking 35-minute flight from Kathmandu to Lukla, often cited as one of the most scenic flights in the world. Upon landing at the Tenzing-Hillary Airport, you’ll meet your trekking team and begin the walk through the bustling village of Lukla. The trail descends gently, passing through small Sherpa hamlets like Chheplung and Ghat. You will follow the path of the Dudh Koshi river, crossing your first suspension bridges and smelling the fresh pine air, eventually reaching the riverside village of Phakding for your first night in a mountain teahouse.',
        // accommodations: [
        //   { name: "Phakding Guest House" },
        //   { name: "Yeti Mountain Home (Luxury)" },
        // ],
        stats: { elevation: '2,610m', duration: '3-4 hours', distance: '8km' },
        coordinates: [27.737, 86.712],
        // price: "NPR 4,500",
      },
      {
        day: '02',
        title: 'Phakding to Namche Bazaar',
        description:
          'Today is a rigorous climb that serves as your introduction to the high Himalayas. You will crisscross the Dudh Koshi river multiple times over high suspension bridges, including the famous Hillary Bridge. After passing through the entrance of Sagarmatha National Park at Monjo, the trail drops to the riverbed before beginning a long, zig-zagging ascent through dense forests. Halfway up, you may catch your very first glimpse of Mount Everest peeking through the trees. The day ends as you emerge into the horseshoe-shaped amphitheater of Namche Bazaar, the vibrant commercial hub of the Khumbu region.',
        // accommodations: [{ name: "Hotel Namche" }, { name: "Khumbu Lodge" }],

        stats: { elevation: '3,440m', duration: '6-7 hours', distance: '11km' },
        coordinates: [27.805068, 86.7105936],
        // price: "NPR 5,500",
      },
      {
        day: '03',
        title: 'Acclimatization Day: Exploring Namche',
        description:
          'Acclimatization is the golden rule of high-altitude trekking. Instead of pushing higher, you spend the day in Namche to let your body adjust to the thinner air. A popular activity is a steep hike up to the Everest View Hotel, where you can sit on the terrace and enjoy a panoramic view of Everest, Lhotse, and Ama Dablam. On the way back, you can visit the Sherpa Culture Museum or the Everest Photo Gallery. The afternoon is best spent exploring the local bakeries, gear shops, and cafes of Namche, soaking in the unique mountain atmosphere.',
        // accommodations: [{ name: "Hotel Namche" }, { name: "Khumbu Lodge" }],
        stats: {
          elevation: '3,440m',
          duration: '3-4 hours',
          distance: '4km',
          note: 'Acclimatization Indicated',
        },
        coordinates: [27.805068, 86.7105936],
        // price: "NPR 6,000",
      },
      {
        day: '04',
        title: 'Namche Bazaar to Tengboche',
        description:
          'The trail out of Namche is spectacular, winding around the mountainside with the giant peaks standing guard across the valley. After an easy walk to Kyanjuma, the trail descends steeply to the river at Phunki Tenga for lunch. From here, it is a steady, two-hour climb through rhododendron and silver fir forests to Tengboche. As you reach the ridge, you are greeted by the magnificent Tengboche Monastery, the largest in the region.',
        // accommodations: [
        //   { name: "Tengboche Guest House" },
        //   { name: "Hotel Himalayan" },
        // ],
        stats: { elevation: '3,860m', duration: '5-6 hours', distance: '10km' },
        coordinates: [27.8352264, 86.7641614],
        // price: "NPR 5,000",
      },
      {
        day: '05',
        title: 'Tengboche to Dingboche',
        description:
          'Leaving Tengboche, the trail descends through a forest of birch, conifers, and rhododendrons. The path is dotted with mani walls (stones carved with Buddhist prayers) as you head toward the village of Pangboche. You are now leaving the tree line behind, and the landscape becomes noticeably more arid and alpine. Crossing the Imja Khola, you begin a gradual climb into the Chukhung Valley. The day ends in Dingboche.',
        // accommodations: [
        //   { name: "Snow Lion Lodge" },
        //   { name: "Hotel Good Luck" },
        // ],
        stats: { elevation: '4,410m', duration: '5-6 hours', distance: '11km' },
        coordinates: [27.8873288, 86.8259632],
        // price: "NPR 5,500",
      },
      {
        day: '06',
        title: 'Second Acclimatization Day: Dingboche',
        description:
          "To prepare for the push above 5,000 meters, you spend another day acclimatizing. The most effective way to do this is to 'hike high, sleep low.' Most trekkers climb the steep ridge of Nangkartshang Peak, which rises directly above the village. From the summit (5,083m), you are rewarded with a 360-degree view of the surrounding giants. The rest of the day is for resting, hydrating, and mentally preparing for the higher altitudes ahead.",
        // accommodations: [{ name: "Snow Lion Lodge" }],
        stats: {
          elevation: '4,410m',
          duration: '4-5 hours',
          distance: '5km',
          note: 'Acclimatization Indicated',
        },
        coordinates: [27.8873288, 86.8259632],
        // price: "NPR 5,500",
      },
      {
        day: '07',
        title: 'Dingboche to Lobuche',
        description:
          "The trail today is a steady climb across a wide, glacier-carved valley. You will reach the small settlement of Thukla, situated at the foot of the massive Khumbu Glacier. After lunch, you face the 'Thukla Pass'—a steep, challenging climb to the top of the terminal moraine. Here, you will find a somber and beautiful memorial site dedicated to climbers who lost their lives on Everest. From the pass, the trail levels out to reach Lobuche.",
        // accommodations: [
        //   { name: "National Park Lodge" },
        //   { name: "Oxygen Altitude Home" },
        // ],
        stats: { elevation: '4,940m', duration: '5-6 hours', distance: '8km' },
        coordinates: [27.9477818, 86.8105368],
        // price: "NPR 6,000",
      },
      {
        day: '08',
        title: 'Lobuche to Gorak Shep & Everest Base Camp',
        description:
          'This is the most significant day of the trek. You start early, walking across rocky terrain toward Gorak Shep. After a quick meal, you push forward onto the Khumbu Glacier moraine toward Everest Base Camp. The trail is rugged and constantly shifting. Reaching Base Camp (5,364m) is an emotional milestone. You will stand among the colorful tents of expedition teams (if in spring) before returning to Gorak Shep for the night.',
        // accommodations: [
        //   { name: "Buddha Lodge" },
        //   { name: "Snowland Highest Inn" },
        // ],
        stats: {
          elevation: '5,164m',
          duration: '8-9 hours',
          distance: '15km',
          note: 'EBC elevation is 5,364m, sleeping at Gorak Shep',
        },
        coordinates: [28.0029111, 86.855732],
        // price: "NPR 6,500",
      },
      // {
      //   day: "09",
      //   title: "Gorak Shep to Kala Patthar & Pheriche",
      //   description:
      //     "Before dawn, you begin a grueling climb up Kala Patthar (5,545m). This is the highest point of the trek, and while the climb is difficult in the freezing dark, the reward is unmatched. As the sun rises, it illuminates the entire south face of Mount Everest. After descending back to Gorak Shep for breakfast, you begin the long journey down the valley to the lower, warmer altitude of Pheriche.",
      //   // accommodations: [{ name: "Himalayan Hotel" }, { name: "Pumori Lodge" }],
      //   stats: {
      //     elevation: "4,371m",
      //     duration: "7-8 hours",
      //     distance: "13km",
      //     note: "Sleeping elevation",
      //   },
      //   coordinates: [27.893, 86.818],
      //   // price: "NPR 5,000",
      // },
      // {
      //   day: "10",
      //   title: "Pheriche to Namche Bazaar",
      //   description:
      //     "Today's trek is a long descent, but the increasing oxygen levels make you feel surprisingly energetic. You’ll pass back through the forests of Tengboche and descend to the river before climbing the hill on the opposite side. The trail winds around the mountain, eventually leading you back into the familiar, bustling streets of Namche Bazaar.",
      //   // accommodations: [{ name: "Hotel Namche" }],
      //   stats: { elevation: "3,440m", duration: "6-7 hours", distance: "14km" },
      //   coordinates: [27.806, 86.714],
      //   // price: "NPR 5,500",
      // },
      // {
      //   day: "11",
      //   title: "Namche Bazaar to Lukla",
      //   description:
      //     "The final day of trekking is a long one as you retrace your steps back to where it all began. You will descend the 'Namche Hill' for the last time, cross the Hillary Bridge, and walk through the villages of Monjo and Phakding. The final hour involves a gentle but tiring uphill climb to reach Lukla, where you can finally celebrate the completion of your trek.",
      //   // accommodations: [{ name: "Paradise Lodge" }, { name: "Khumbu Resort" }],
      //   stats: { elevation: "2,860m", duration: "7-8 hours", distance: "18km" },
      //   coordinates: [27.686, 86.73],
      //   // price: "NPR 5,000",
      // },
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
      { month: 'Jan', condition: 'Extremely Cold / Heavy Snow on Passes' },
      { month: 'Feb', condition: 'Freezing Temperatures / Quiet Trails' },
      { month: 'Mar', condition: 'Spring Bloom / Vibrant Rhododendrons' },
      { month: 'Apr', condition: 'Perfect Climbing Weather / Peak Season' },
      { month: 'May', condition: 'Warm Temperatures / Pre-Monsoon Views' },
      { month: 'Jun', condition: 'Beginning of Monsoon / Cloudy Skies' },
      { month: 'Jul', condition: 'Heavy Rain / Lush Greenery / Leeches' },
      { month: 'Aug', condition: 'Peak Monsoon / Wet & Muddy Trails' },
      { month: 'Sep', condition: 'Post-Monsoon / Crisp & Fresh Air' },
      { month: 'Oct', condition: 'Crystal Clear Skies / Most Popular Month' },
      { month: 'Nov', condition: 'Cool & Stable / Excellent Visibility' },
      { month: 'Dec', condition: 'Winter Chill / Crystal Clear Blue Skies' },
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
        { item: 'Down Jacket (Minimum 800 Fill Power)', weight: '0.65kg' },
        { item: 'Sleeping Bag (Comfort Rated to -20°C)', weight: '1.4kg' },
        { item: 'Sturdy Gore-Tex Trekking Boots', weight: '1.2kg' },
        {
          item: 'Merino Wool Thermal Base Layers (Top & Bottom)',
          weight: '0.4kg',
        },
        { item: 'UV 400 Protection Sunglasses', weight: '0.045kg' },
        { item: 'Hard-Shell Waterproof Jacket', weight: '0.5kg' },
        {
          item: 'Personal First Aid Kit & High Altitude Meds',
          weight: '0.35kg',
        },
      ],
      optional: [
        { item: 'Fleece Jacket', weight: '0.5kg' },
        { item: 'Sun Hat', weight: '0.1kg' },
        { item: 'Trekking Poles', weight: '0.5kg' },
        { item: 'Portable Power Bank', weight: '0.3kg' },
      ],
    },
  },
  'manaslu-circuit': {
    id: 'manaslu-circuit',
    name: 'Manaslu Circuit Trek',
    region: 'Manaslu Region',
    meta: {
      duration: '14-18 Days',
      difficulty: 'Challenging',
      maxElevation: '5,106m',
      bestSeasons: 'March - May, September - November',
      startingPoint: 'Kathmandu',
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
      },
      {
        day: '02',
        title: 'Soti Khola to Machha Khola',
        description:
          'The trail opens through banana groves, millet fields, and small Gurung settlements, crossing several suspension bridges above the rushing Budhi Gandaki. Subtropical and humid',
        stats: { elevation: '930m', duration: '5-6 hours', distance: '14km' },
        coordinates: [28.1363198, 84.8550124],
      },
      {
        day: '03',
        title: 'Trek to Jagat',
        description:
          'A longer day tracking the river closely through Khorlabesi and Tatopani, where natural hot springs sit right beside the trail worth a quick soak. Jagat is the first official checkpoint where permits are inspected, a proper stone-paved village with a small monastery.',
        stats: { elevation: '1,340m', duration: '6-7 hours', distance: '22km' },
        coordinates: [28.2191381, 84.8754899],
      },
      {
        day: '04',
        title: 'Jagat to Deng',
        description:
          'The valley narrows and the Tibetan cultural influence begins mani walls, prayer flags, and stone-carved chortens appear along the trail. The route passes through Phillim, a large Nubri village with a working gompa, before descending to Deng across a high suspension bridge. ',
        stats: { elevation: '1,860m', duration: '6-7 hours', distance: '19km' },
        coordinates: [28.3756597, 84.8860943],
      },
      {
        day: '05',
        title: 'Trek to Namrung',
        description:
          'Climbing steadily through Rana and Bihi, small villages where locals still wear traditional chuba robes. The forest thickens with oak and rhododendron and the air cools noticeably. Namrung sits on a commanding ridge with the first clear views of Sringi Himal (7,161m).',
        stats: { elevation: '2,630m', duration: '6-7 hours', distance: '18km' },
        coordinates: [28.5353815, 84.7834682],
      },
      {
        day: '06',
        title: 'Namrung to Samagaon via Lho',
        description:
          "The standout day of the lower circuit. At Lho village, Manaslu's south face appears with sudden, staggering scale: a wall of ice and granite rising nearly 5,000 vertical metres. The Ribung Gompa above Lho is worth a short detour. The trail continues through Shyala before descending into Samagaon, the largest village in the Nubri region with a beautifully preserved gompa at its edge. ",
        stats: { elevation: '3,180m', duration: '5-6 hours', distance: 'N/A' },
        coordinates: [28.5841331, 84.6450536],
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
      },
      {
        day: '08',
        title: 'Samagaon to Samdo',
        description:
          'Short by distance but meaningful in altitude. The trail leaves the treeline immediately, crossing open moraines through a wide glacial valley. Samdo is a tiny settlement of around 50 households near the Tibetan border cold nights, extraordinary skies. ',
        stats: { elevation: '3,860m', duration: '3-4 hours', distance: '9km' },
        coordinates: [28.6470636, 84.6325197],
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
      },
      {
        day: '10',
        title: 'Samdo to Dharamsala',
        description:
          'A short but serious climb across open alpine terrain to Dharamsala, a wind-exposed collection of stone shelters with one basic lodge and no electricity. Arrive early, eat well, drink plenty of water, and sleep by 8pm. Tomorrow starts before dawn.',
        stats: { elevation: '4,200m', duration: '3-4 hours', distance: '7km' },
        coordinates: [28.6584715, 84.582265],
      },
      {
        day: '11',
        title: 'Dharamsala to Bimthang via Larkya La',
        description:
          'Cross Larkya La Pass at 5,106m with panoramic Himalayan views before descending to Bimthang.',
        stats: {
          elevation: '5,106m',
          duration: '8-10 hours',
          distance: '22km',
        },
        coordinates: [28.6024945, 84.4600261],
      },
      {
        day: '12',
        title: 'Bimthang to Tilje',
        description:
          'A long descent back through rhododendron and bamboo forest, passing Dudh Pokhari lake and the village of Kharche before reaching Tilje in the lower Marsyangdi valley. The air thickens, the body recovers, apple orchards replace glaciers. ',
        stats: { elevation: '2,300m', duration: '6-7 hours', distance: '20km' },
        coordinates: [28.5446263, 84.3809759],
      },
      {
        day: '13',
        title: 'Tilje to Dharapani',
        description:
          'Walk to Dharapani where the Manaslu and Annapurna trails meet.',
        stats: { elevation: '1,860m', duration: '3-4 hours', distance: '8km' },
        coordinates: [28.5298499, 84.3497295],
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
        condition: 'Post-Monsoon / Crisp Air / Fresh Landscapes',
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
        url: '/images/erik-OwJ6Cn_DnHM-unsplash.jpg',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_06',
        url: '/images/erik-OwJ6Cn_DnHM-unsplash.jpg',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
    ],
    gearChecklist: {
      essentials: [
        { item: 'Down Jacket (800+ Fill Power)', weight: '0.7kg' },
        { item: 'Sleeping Bag (Comfort -20°C)', weight: '1.5kg' },
        { item: 'Crampons or Micro-spikes (for the Pass)', weight: '0.4kg' },
        { item: 'Waterproof Trekking Boots', weight: '1.3kg' },
        { item: 'Hard-Shell Rain Jacket', weight: '0.5kg' },
        { item: 'Thermal Base Layers', weight: '0.4kg' },
      ],
      optional: [
        { item: 'Trekking Poles', weight: '0.5kg' },
        { item: 'Power Bank', weight: '0.4kg' },
        { item: 'Headlamp', weight: '0.1kg' },
      ],
    },
  },
  'langtang-valley': {
    id: 'langtang-valley',
    name: 'Langtang Valley Trek',
    region: 'Langtang Region',
    meta: {
      duration: '7 Days',
      difficulty: 'Moderate',
      maxElevation: '4773m',
      bestSeasons: 'March - May, September - November',
      startingPoint: 'Syafrubesi',
    },
    overview:
      'The Langtang Valley Trek is one of Nepal’s most rewarding short Himalayan journeys, combining dramatic mountain scenery, Tamang culture, riverside trails, and high alpine landscapes in just one week. Starting with an overland drive from Kathmandu to Syabrubesi, the route follows the Langtang Khola through dense bamboo, oak, and rhododendron forests before opening into wide yak pastures and glacial valleys. As you move higher, the scenery shifts from deep woodland and waterfalls to prayer walls, Buddhist landmarks, and sweeping views of Langtang Lirung and surrounding peaks. The trek culminates at Kyanjin Gompa, a beautiful high-mountain settlement, and a hike to Kyanjin Ri, where sunrise views over glaciers, ridges, and snow-covered summits create the true highlight of the trip. This 7-day version is a compact and scenic adventure, ideal for trekkers who want a classic Nepal experience without the longer duration of Everest or Annapurna routes.',
    timeline: [
      {
        day: '01',
        title: 'Kathmandu to Syafrubesi',
        description:
          'Drive from Kathmandu to Syafrubesi, the usual starting point of the Langtang Valley Trek. There are two common road routes to reach Syafrubesi. The usual public bus route goes via Kalanki - Nagdhunga - Galchi - Betrawati - Dhunche before reaching Syafrubesi. Private vehicles and jeeps may also use the Tokha-side road via Tokha - Chhahare / Dhikure - Trishuli - Dhunche - Syafrubesi, which can be shorter and more efficient in good road conditions. Public buses usually leave early in the morning, while private jeeps offer more flexibility and a faster ride.\n\nAlternative Route:\nIf you have a private vehicle, you can continue beyond Syafrubesi for about 45 minutes to 1 hour to reach Sherpagaun. This is a more scenic option and gives you the choice to stay either in Syafrubesi or in Sherpagaun, depending on your transport arrangement and arrival time.\n\nTransport Note:\nPublic buses usually depart from the Gongabu / Machhapokhari area in the morning. Shared jeeps also leave from the same area and are fast		er than buses, while private jeeps can start directly from your hotel or arranged pickup point.',
        stats: { elevation: '1,460m / 2,563m', duration: '7-10 hours(drive)' },
        coordinates: [28.1657291, 85.3418267],
      },
      {
        day: '02',
        title: 'Syafrubesi to Rimche / Lama Hotel',
        description:
          'Begin trekking from Syafrubesi and follow the classic trail along the Langtang Khola through bamboo, oak, and rhododendron forest. The trail climbs steadily toward Rimche, with several suspension bridges and riverside sections along the way. Rimche has only limited accommodation, so many trekkers continue another 15-30 minutes to Lama Hotel, where there are more lodge options.\n\nIf you continued to Sherpagaun on Day 1 by private jeep, today’s walk becomes more scenic and generally easier. The upper trail from Sherpagaun toward Rimche offers better views, less steep climbing, more gradual walking, and some downhill sections before reaching Rimche and Lama Hotel.',
        stats: {
          elevation: '2,470m',
          duration: '6-7 hours from Syafrubesi / 4-5 hours from Sherpagaun',
        },
        coordinates: [28.1612117, 85.4296495],
      },

      {
        day: '03',
        title: 'Lama Hotel to Langtang Village',
        description:
          'Leaving the forest behind, the trail climbs past riverside sections and open clearings toward Ghodatabela, where the valley begins to feel broader and more alpine. As you continue higher, mountain views start to open up and the cultural atmosphere becomes stronger with chortens, mani walls, and traditional settlements. By the time you reach Langtang Village, you are fully in the heart of the valley, surrounded by dramatic peaks and a distinctly Tibetan-influenced mountain landscape.',
        stats: { elevation: '3,430m', duration: '6-7 hours' },
        coordinates: [28.2157142, 85.5030007],
      },
      {
        day: '04',
        title: 'Langtang Village to Kyanjin Gompa (with nearby visits)',
        description:
          'This is a shorter trekking day, which gives you time to explore both Langtang and Kyanjin areas. Before leaving Langtang, you can wander through the village, observe local life, visit prayer walls and nearby viewpoints, and enjoy the open valley scenery. After a gradual ascent, you reach Kyanjin Gompa, a spectacular high settlement surrounded by snow peaks. Once there, you can visit the monastery area, the local cheese factory, nearby yak pastures, and take a gentle acclimatization walk toward the Lirung glacier moraine or the lower ridge trails around the village.',
        stats: {
          elevation: '3,870m',
          duration: '3-4 hours trek / 1-2 hours exploration',
        },
        coordinates: [28.2124247, 85.5672161],
      },
      {
        day: '05',
        title: 'Kyanjin Gompa to Kyanjin Ri and back to Kyanjin',
        description:
          'Today is the highlight of the trek. You start early for the climb above Kyanjin Gompa toward Kyanjin Ri, one of the best viewpoints in Langtang. The trail is steep from the beginning and the first major viewpoint is Lower Kyanjin Ri at around 4,400m. This lower point already offers excellent views of Langtang Lirung, the valley below, surrounding ridges, and glacial terrain. From here, those feeling strong can continue higher to the main Kyanjin Ri viewpoint at 4,773m. The final section is steeper and more demanding because of the altitude, but the panorama becomes even wider and more dramatic. After spending time at the viewpoint for photos and rest, you descend carefully to Kyanjin Gompa for a relaxed afternoon and overnight stay.',
        stats: { elevation: '4,773m', duration: '4-6 hours round trip' },
        coordinates: [28.2124247, 85.5672161],
      },
      // {
      //   day: "06",
      //   title: "Kyanjin Gompa to Lama Hotel",
      //   description:
      //     "After breakfast, you begin the long descent down the valley, retracing your route past Langtang Village and through alpine meadows into the forested lower section. Since the route is mostly downhill, the day feels easier on the lungs, though it is still a long walking day. Returning to Lama Hotel gives you a comfortable forest stop before the final push out of the valley.",
      //   stats: { elevation: "2,470m", duration: "6-7 hours" },
      //   coordinates: [28.1612117, 85.4296495],
      // },
      // {
      //   day: "07",
      //   title: "Lama Hotel to Syabrubesi and drive to Kathmandu",
      //   description:
      //     "Your final day is long but straightforward. You descend from Lama Hotel through the same green riverside trail back to Syabrubesi, enjoying your last suspension bridges, forests, and mountain air. After lunch or a short break in Syabrubesi, you drive back to Kathmandu. This is the most demanding transfer day of the itinerary, so an early start is strongly recommended.",
      //   stats: {
      //     elevation: "1,400m",
      //     duration: "4-5 hours trek + 7-8 hours drive",
      //   },
      //   coordinates: [28.1657291, 85.3418267],
      // },
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
        description:
          'Stay in one of Nepal’s most beautiful high-mountain settlements and climb to a panoramic ridge above the valley for the trek’s best views.',
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
      { month: 'Sep', condition: 'Post-Monsoon / Crisp & Fresh Air' },
      { month: 'Oct', condition: 'Crystal Clear Skies / Most Popular Month' },
      { month: 'Nov', condition: 'Cool & Stable / Excellent Visibility' },
      { month: 'Dec', condition: 'Winter Chill / Crystal Clear Blue Skies' },
    ],
    gallery: [
      {
        id: 'img_01',
        url: '/images/langtang/IMG_6112.webp',
        alt: 'Langtang ',
        type: 'hero',
      },
      {
        id: 'img_02',
        url: '/images/langtang/IMG_6198.webp',
        alt: 'En route to Pung Gyen Gompa in Manaslu Circuit Trek.',
        type: 'landscape',
      },
      {
        id: 'img_03',
        url: '/images/langtang/IMG_6283.webp',
        alt: 'Manaslu, Samagaun, Nepal',
        type: 'portrait',
      },
      {
        id: 'img_04',
        url: '/images/langtang/IMG_6299.webp',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_05',
        url: '/images/langtang/IMG_6368.webp',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_06',
        url: '/images/langtang/IMG_6312.webp',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_07',
        url: '/images/langtang/IMG_6406.webp',
        alt: 'Langtang ',
        type: 'hero',
      },
      {
        id: 'img_08',
        url: '/images/langtang/IMG_6411.webp',
        alt: 'En route to Pung Gyen Gompa in Manaslu Circuit Trek.',
        type: 'landscape',
      },
      {
        id: 'img_09',
        url: '/images/langtang/IMG_6413.webp',
        alt: 'Manaslu, Samagaun, Nepal',
        type: 'portrait',
      },
      {
        id: 'img_10',
        url: '/images/langtang/IMG_6426.webp',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_11',
        url: '/images/langtang/IMG_6433.webp',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_12',
        url: '/images/langtang/IMG_6501.webp',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_13',
        url: '/images/langtang/IMG_6517.webp',
        alt: 'Manaslu, Samagaun, Nepal',
        type: 'portrait',
      },
      {
        id: 'img_14',
        url: '/images/langtang/IMG_6596.webp',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_015',
        url: '/images/langtang/IMG_6368.webp',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_16',
        url: '/images/langtang/IMG_6447.webp',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_17',
        url: '/images/langtang/IMG_6823.webp',
        alt: 'camping ',
        type: 'hero',
      },
      {
        id: 'img_18',
        url: '/images/langtang/IMG_6905.jpg',
        alt: 'En route to Pung Gyen Gompa in Manaslu Circuit Trek.',
        type: 'landscape',
      },
      {
        id: 'img_19',
        url: '/images/langtang/IMG_6909.webp',
        alt: 'Manaslu, Samagaun, Nepal',
        type: 'portrait',
      },
      {
        id: 'img_20',
        url: '/images/langtang/IMG_6925.jpg',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_21',
        url: '/images/langtang/IMG_6930.webp',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_22',
        url: '/images/langtang/IMG_6931.jpg',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_23',
        url: '/images/langtang/IMG_6957.webp',
        alt: 'Langtang ',
        type: 'hero',
      },
      {
        id: 'img_24',
        url: '/images/langtang/IMG_6987.webp',
        alt: ' Cheese Factory',
        type: 'landscape',
      },
      {
        id: 'img_25',
        url: '/images/langtang/IMG_7013.webp',
        alt: 'Manaslu, Samagaun, Nepal',
        type: 'portrait',
      },
      {
        id: 'img_26',
        url: '/images/langtang/IMG_7043.jpeg',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_27',
        url: '/images/langtang/IMG_7053.jpg',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_28',
        url: '/images/langtang/IMG_7067.jpg',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_29',
        url: '/images/langtang/IMG_7095.jpg',
        alt: 'Manaslu, Samagaun, Nepal',
        type: 'portrait',
      },
      {
        id: 'img_30',
        url: '/images/langtang/IMG_7109.webp',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_31',
        url: '/images/langtang/IMG_7133.webp',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_32',
        url: '/images/langtang/IMG_7135.webp',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_33',
        url: '/images/langtang/IMG_7302.jpg',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_34',
        url: '/images/langtang/IMG_7324.jpg',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
      {
        id: 'img_35',
        url: '/images/langtang/IMG_7327.webp',
        alt: 'Trekking over Hillary Suspension Bridge',
        type: 'landscape',
      },
    ],
    gearChecklist: {
      essentials: [
        { item: 'Down Jacket (Minimum 800 Fill Power)', weight: '650g' },
        { item: 'Sleeping Bag (Comfort Rated to -20°C)', weight: '1.4kg' },
        { item: 'Sturdy Gore-Tex Trekking Boots', weight: '1.2kg' },
        {
          item: 'Merino Wool Thermal Base Layers (Top & Bottom)',
          weight: '400g',
        },
        { item: 'UV 400 Protection Sunglasses', weight: '45g' },
        { item: 'Hard-Shell Waterproof Jacket', weight: '500g' },
        { item: 'Personal First Aid Kit & High Altitude Meds', weight: '350g' },
      ],
      optional: [
        { item: 'Trekking Poles', weight: '0.5kg' },
        { item: 'Power Bank', weight: '0.4kg' },
        { item: 'Headlamp', weight: '0.1kg' },
      ],
    },
  },
  'abc-trek': {
    id: 'annapurna-base-camp-ascent',
    name: 'Annapurna Base Camp (Direct Ascent)',
    region: 'Annapurna Region',
    meta: {
      duration: '4 Days ',
      difficulty: 'Moderate to Challenging',
      maxElevation: '4,130m',
      bestSeasons: 'March - May, September - November',
      startingPoint: 'Pokhara / Jhinu Trailhead',
    },
    overview:
      'This route represents the direct, dramatic ascent into the Annapurna Sanctuary, bypassing the lower foothill loops to take you straight into the heart of the Himalayas. Starting from the suspension bridges of Jhinu Danda, the trail climbs the steep stone staircases of Chhomrong before plunging into the V-shaped Modi Khola gorge. Over four days of upward trekking, you will transition from lush, subtropical bamboo and rhododendron forests into a harsh, icy alpine environment. The climax of the upward journey brings you past the towering sheer face of Machhapuchhre (Fishtail) and through the sanctuary gates, ending at Annapurna Base Camp (4,130m) where you are completely surrounded by a 360-degree wall of 7,000m and 8,000m peaks.',
    timeline: [
      {
        day: '01',
        title: 'Pokhara to Chhomrong',
        description:
          "An early jeep ride from Pokhara winds along the rough road to the Matkyu/Jhinu Danda trailhead (~2 hrs). Drop down through forest to cross the Kyumnu Khola on a steel suspension bridge, then begin the trek's first real test: thousands of stone steps climbing the ridge to Chhomrong. This sprawling Gurung village is the gateway to the Sanctuary — last reliable ATM, last bakery, and your first head-on view of Annapurna South and Hiunchuli.",
        stats: {
          elevation: '2,170m',
          duration: '2 hrs drive, 3-4 hrs trek',
          distance: '5km',
        },
        coordinates: [28.4200417, 83.8176077],
      },
      {
        day: '02',
        title: 'Chhomrong to Dovan',
        description:
          'Descend the long stone staircase to the Chhomrong Khola, cross the suspension bridge, and grind back up to Sinuwa (2,360m) on the opposite ridge. The trail then levels out and contours through Bamboo (2,310m) — a popular alternate stop — before plunging into damp, mossy forests of bamboo, oak, and rhododendron all the way to the small clearing at Dovan.',
        stats: { elevation: '2,600m', duration: '5-6 hours', distance: '9km' },
        coordinates: [28.4697078, 83.8694284],
      },
      {
        day: '03',
        title: 'Dovan to Deurali (Acclimatization Day)',
        description:
          'A deliberately short day to protect acclimatization. The valley narrows into a steep gorge as you pass the sacred Hinku Cave overhang and cross avalanche chutes (closed in heavy winter snow). Reach Deurali by lunch, drop your pack, and take a slow afternoon walk uphill toward the sanctuary gates before returning to sleep low. This split is the single most important change for AMS prevention on the route.',
        stats: {
          elevation: '3,200m',
          duration: '3-4 hours',
          distance: '6km',
          note: 'Sleeping elevation gain limited to ~600m for safer acclimatization',
        },
        coordinates: [28.4933, 83.893],
      },
      {
        day: '04',
        title: 'Deurali to Machhapuchhre Base Camp (MBC)',
        description:
          "The treeline ends abruptly above Deurali, replaced by sparse alpine grass, glacial moraines, and the first long views into the Sanctuary. The climb is steady but never brutal. As you cross the threshold of the inner sanctuary, the staggering fluted face of Machhapuchhre (the 'Fishtail') rises directly above your lodge at MBC. Watch for blue sheep and Himalayan tahr on the slopes opposite.",
        stats: {
          elevation: '3,700m',
          duration: '2-3 hours',
          distance: '4km',
          note: 'Hydrate aggressively; symptoms of mild AMS often appear here',
        },
        coordinates: [28.5132035, 83.9060408],
      },
      {
        day: '05',
        title: 'MBC to Annapurna Base Camp (ABC)',
        description:
          'A short, awe-inspiring morning walk takes you into the true heart of the Sanctuary. The trail climbs gently alongside the lateral moraine of the South Annapurna Glacier. As you crest the final rise into ABC, you are completely enveloped by a 360° amphitheatre of giants — Hiunchuli, Annapurna South, Annapurna I (8,091m), Khangsar Kang, Tare Kang, Singu Chuli, and Machhapuchhre — culminating at the towering, icy South Face of Annapurna I.',
        stats: {
          elevation: '4,130m',
          duration: '2-3 hours',
          distance: '3km',
          note: 'Target arrival before noon; clouds typically roll in by 1pm',
        },
        coordinates: [28.5308115, 83.8777275],
      },
      // {
      //   day: "06",
      //   title: "ABC to Bamboo (Descent)",
      //   description:
      //     "Wake before dawn for the alpenglow show — the South Face of Annapurna I lighting up gold is the moment most trekkers come for. After breakfast, retrace your steps down through MBC, Deurali, and Dovan. Knees take a beating on the long stone stairs, so pace yourself. Bamboo's lower, warmer, oxygen-rich air is a noticeable relief after three nights at altitude.",
      //   stats: {
      //     elevation: "2,310m",
      //     duration: "6-7 hours",
      //     distance: "16km",
      //     note: "Trekking poles strongly recommended for the descent",
      //   },
      //   coordinates: [28.4801, 83.8589],
      // },
      // {
      //   day: "07",
      //   title: "Bamboo to Jhinu Danda & Drive to Pokhara",
      //   description:
      //     "Descend through forest back to Sinuwa, then climb briefly to Chhomrong before the long stone-step descent to Jhinu Danda. Reward your legs with an hour at the natural hot springs beside the Modi Khola — a 20-minute walk below the village. Meet your jeep at the Jhinu road head for the bumpy ride back to Pokhara, and a real shower.",
      //   stats: {
      //     elevation: "1,780m",
      //     duration: "5-6 hrs trek, 2-3 hrs drive",
      //     distance: "11km",
      //     note: "Hot springs entry: NPR 150 per person",
      //   },
      //   coordinates: [28.385, 83.8197],
      // },
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
        condition: 'Post-Monsoon / Washing Away Dust / Crystal Clear',
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
        {
          item: 'Down Jacket (800+ Fill Power) — critical at ABC (4,130m)',
          weight: '0.7kg',
        },
        {
          item: 'Sleeping Bag (Comfort -10°C, lower limit -15°C)',
          weight: '1.4kg',
        },
        {
          item: 'Waterproof Trekking Boots (broken-in, ankle support)',
          weight: '1.3kg',
        },

        { item: 'Thermal Base Layers (merino top + bottom)', weight: '0.4kg' },
        {
          item: 'Hard-Shell Wind/Rain Jacket (Gore-Tex or equivalent)',
          weight: '0.5kg',
        },
        { item: 'Fleece Mid-Layer', weight: '0.4kg' },
        { item: 'Insulated Gloves + Liner Gloves', weight: '0.2kg' },
        { item: 'Wool Beanie + Buff/Neck Gaiter', weight: '0.15kg' },
        {
          item: 'Headlamp + Spare Batteries (lodges cut power early)',
          weight: '0.15kg',
        },
        {
          item: 'High SPF Sunscreen & Polarized UV400 Sunglasses',
          weight: '0.1kg',
        },
      ],
      optional: [
        {
          item: 'Trekking Poles (saves knees on the 3,000+ stone stairs)',
          weight: '0.5kg',
        },
        {
          item: 'Power Bank 20,000mAh (charging at ABC is NPR 300–500/hour)',
          weight: '0.4kg',
        },
        { item: 'Water Purification Tablets / SteriPEN', weight: '0.1kg' },
        {
          item: 'Sleeping Bag Liner (+5°C warmth, hygiene in tea houses)',
          weight: '0.25kg',
        },
        {
          item: 'Gaiters (snow above Deurali in shoulder seasons)',
          weight: '0.2kg',
        },
        {
          item: 'Diamox / Altitude Meds (consult doctor first)',
          weight: '0.05kg',
        },
        {
          item: 'Quick-dry Towel + Wet Wipes (no showers past Bamboo)',
          weight: '0.2kg',
        },
      ],
    },
  },
  'gokyo-valley-trek': {
    id: "gokyo-valley-trek",
    name: "Gokyo Valley Trek",
    region: "Khumbu Region",
    meta: {
      duration: "13-14 Days",
      difficulty: "Difficult",
      maxElevation: "5,357m",
      bestSeasons: "March - May, September - November",
      startingPoint: "Kathmandu",
    },
    overview:
      "The Gokyo Valley is the Khumbu's better-kept secret. It shares a flight into Lukla and a walk through Namche Bazaar with the Everest Base Camp trek, then quietly peels away northwest at Kyanjuma and climbs toward a world that most Khumbu trekkers never see: high-altitude glacial lakes burning turquoise against a backdrop of ice and rock, Nepal's longest glacier spreading across the valley floor like a slow river of rubble, and a viewpoint at Gokyo Ri (5,357m) that many experienced trekkers argue is superior to Kala Patthar. From the summit of Gokyo Ri you see four 8,000m peaks simultaneously: Everest, Lhotse, Makalu, and Cho Oyu arranged across the horizon with the Ngozumpa Glacier directly below and the string of Gokyo Lakes glittering in the valley you just climbed through. It is a panorama that rewards the extra days and extra effort it takes to reach it.\n\nWhat separates Gokyo from EBC is the quality of solitude and the character of the landscape. Above Dole, the valley narrows, the trail empties, and the terrain shifts from forest and suspension bridges to alpine meadow, glacial moraine, and high-wind ridgeline. The six Gokyo Lakes designated a Ramsar Wetland Site in 2007, the world's highest freshwater lake system are sacred to local Sherpa communities and have a stillness that EBC's tent-city atmosphere cannot offer. Only around 35% of Khumbu trekkers take this route. That gap shows on the trail above Machhermo you may walk entire mornings without passing another group.",
    timeline: [
      {
        day: "01",
        title: "Arrive Kathmandu",
        description:
          "Land at Tribhuvan International Airport (1,400m) and transfer to your hotel in Thamel, the trekking district. Kathmandu is chaotic, warm, and fascinating in equal measure a medieval city that has been absorbing mountain traders and now mountain trekkers for centuries. The afternoon is best used for two things: sorting your gear and walking the backstreets of Thamel to pick up any last items (buffs, trekking socks, headtorch batteries all available here at reasonable prices). If you have the energy, the Buddhist stupa at Boudhanath is a 20-minute taxi ride east and worth an evening visit. Eat well, sleep early, and do not underestimate jet lag at altitude.",
        stats: { elevation: "1,400m", duration: "Transfer day", distance: "-" },
        coordinates: [27.7172, 85.3240],
      },
      {
        day: "02",
        title: "Kathmandu: Permits, Briefing & Sightseeing",
        description:
          "A full day in Kathmandu with purpose. Your guide handles the two permits you need: the Sagarmatha National Park Entry Permit and the Khumbu Pasang Lhamu Rural Municipality permit, both can be sorted at the Nepal Tourism Board office in Pradarshani Marg. Use the morning for this. The afternoon is genuinely worth spending at Pashupatinath, the great Hindu cremation temple on the banks of the Bagmati, or at Swayambhunath (the Monkey Temple) on its hilltop above the city, both are 30-minute walks or a short taxi from Thamel. Brief your guide on your fitness history, any altitude sensitivity, and medication. Confirm the Lukla flight time for tomorrow during peak season (April, October) Lukla flights operate from Manthali Airport (Ramechhap), a 4–5 hour drive from Kathmandu, requiring a 2:00am departure. Confirm which airport applies to your dates.",
        
        stats: { elevation: "1,400m", duration: "Prep day", distance: "-" },
        coordinates: [27.7172, 85.3240],
      },
      {
        day: "03",
        title: "Fly Kathmandu to Lukla — Trek to Phakding",
        description:
          "The 35-minute flight from Kathmandu into Tenzing-Hillary Airport at Lukla (2,860m) is its own event a mountain airstrip with a cliff at one end and a sheer drop at the other. During peak season (April and October), flights may depart from Manthali Airport in Ramechhap, a 4–5 hour drive from Kathmandu that requires leaving your hotel before 3:00am. After landing, the trail drops gently south through Cheplung and Ghat, following the Dudh Koshi river downstream. The first trekking day is deliberately short a warmup for legs fresh off a plane, a chance to calibrate pace, and an introduction to the suspension bridge crossings that will define the days ahead. Phakding is a comfortable riverside village with good teahouses and strong wifi, the last truly reliable internet until you descend back from Gokyo.",
        // accommodations: [
        //   { name: "Phakding Guest House" },
        //   { name: "River Side Lodge" },
        // ],
        stats: { elevation: "2,610m", duration: "Flight + 3-4 hours trek", distance: "8km" },
        coordinates: [27.7373, 86.7123],
      },
      {
        day: "04",
        title: "Phakding to Namche Bazaar",
        description:
          "The day that sorts trekkers out. From Phakding the trail criss-crosses the Dudh Koshi river on a series of high suspension bridges, the Hillary Bridge, at 60 metres above the river, is the most dramatic before entering Sagarmatha National Park at Monjo. After the park checkpoint the trail drops to the riverbed and begins the long, relentless 600m ascent to Namche. There is no shortcut. The zig-zag climbs through pine forest for two hours, and midway up if the clouds cooperate a clearing offers the first glimpse of Everest's south face framed between Lhotse and Nuptse. Namche Bazaar itself, the commercial capital of the Khumbu at 3,440m, arrives as a shock after hours of forest: a horseshoe of lodges, bakeries, gear shops, and cafes carved into a natural amphitheatre. The elevation gain is significant and the legs will know about it.",
        // accommodations: [
        //   { name: "Hotel Namche" },
        //   { name: "Khumbu Lodge" },
        // ],
        stats: { elevation: "3,440m", duration: "6-7 hours", distance: "11km" },
        coordinates: [27.8050, 86.7106],
      },
      {
        day: "05",
        title: "Acclimatization Day: Namche Bazaar",
        description:
          "Do not skip this day, Namche at 3,440m is the altitude at which the body begins making real adjustments, and pushing straight to Dole without a rest here is how trekkers end up turning back from Machhermo with splitting headaches. The classic acclimatization hike climbs 400m to the Everest View Hotel at 3,880m the world's highest hotel, with a terrace that frames Everest, Lhotse, Ama Dablam, and Thamserku in a single view. The Sherpa Cultural Museum in Namche is genuinely excellent and worth two hours of your afternoon. The Namche Saturday market, if your timing aligns, draws Tibetan traders and villagers from across the valley and offers a rare window into the Khumbu's economic life above the trekking bubble. Eat well, drink 4 litres of water, avoid alcohol, and be in bed early.",
        // accommodations: [
        //   { name: "Hotel Namche" },
        //   { name: "Khumbu Lodge" },
        // ],
        stats: {
          elevation: "3,440m",
          duration: "3-4 hours",
          distance: "6km",
          note: "Acclimatization Day",
        },
        coordinates: [27.8050, 86.7106],
      },
      {
        day: "06",
        title: "Namche Bazaar to Dole",
        description:
          "This is the day the Gokyo trail separates itself from the EBC route and the crowds thin immediately. The trail climbs out of Namche on the main EBC path before branching northwest at Kyanjuma toward Mong La (3,973m), a viewpoint ridge with a sweeping panorama of Ama Dablam, Kantega, and Thamserku. From Mong La the trail drops steeply to the Dudh Koshi at Phortse Tenga (3,680m) before climbing again through rhododendron and birch forest, the forests here are dense enough in October to be genuinely beautiful past summer yak pastures to Dole at 4,200m. Dole is a small, scattered settlement of stone buildings used seasonally by herders. The teahouses are basic but warm, Cho Oyu looms at the head of the valley, and above the treeline the trail ahead is visible all the way to the high ridges. This is where the trek begins to feel genuinely remote.",
        // accommodations: [
        //   { name: "Dole Guest House" },
        //   { name: "Himalayan Lodge Dole" },
        // ],
        stats: { elevation: "4,200m", duration: "5-6 hours", distance: "10km" },
        coordinates: [27.8650, 86.7250],
      },
      {
        day: "07",
        title: "Dole to Machhermo",
        description:
          "A short but important day that earns its place in the itinerary. The trail climbs steadily out of Dole through scrub juniper, the last real vegetation before the high alpine world above past the tiny yak-herding hamlets of Luza and Lhabarma, which see virtually no trekkers who aren't passing through. Machhermo at 4,470m sits in a natural bowl sheltered from the north wind by a steep rocky ridge, with a dramatic glacial amphitheatre to the west that comes into full view as you approach. The Machhermo Rescue Post here is staffed seasonally by a Himalayan Rescue Association doctor this is a good moment to get a free altitude briefing and understand what symptoms warrant descent. The half-day of walking leaves the afternoon for rest, hydration, and the genuinely useful activity of doing nothing. Cho Oyu's 8,188m profile fills the head of the valley.",
        // accommodations: [
        //   { name: "Machhermo Guest House" },
        //   { name: "Namaste Lodge Machhermo" },
        // ],
        stats: {
          elevation: "4,470m",
          duration: "3-4 hours",
          distance: "6.5km",
          note: "Short day by design — critical acclimatization gain",
        },
        coordinates: [27.9100, 86.7110],
      },
      {
        day: "08",
        title: "Machhermo to Gokyo",
        description:
          "The day the valley reveals itself. From Machhermo the trail climbs a final ridge with a last look south toward Kantega and Thamserku, then descends into a wider, flatter valley where the Ngozumpa Glacier Nepal's longest at over 36km comes into full view for the first time. The glacier's surface is not white but grey-brown, covered in a thick layer of rock debris pushed down from the peaks above, and it stretches north as far as the eye can follow. The trail passes through Pangka (4,390m) and skirts the glacier's terminal moraine before crossing the Dudh Koshi river and ascending to the first Gokyo Lake (4,690m) small, jade-green, and partially frozen even in October. The second and third lakes arrive in quick succession. Gokyo village sits on the eastern shore of the third lake, Dudh Pokhari, with Cho Oyu (8,188m) closing the northern horizon and the Ngozumpa Glacier spreading across the valley to the west. The scale of the place, seen all at once from the village edge, stops most trekkers mid-step.",
        // accommodations: [
        //   { name: "Gokyo Resort" },
        //   { name: "Namaste Lodge Gokyo" },
        // ],
        stats: { elevation: "4,750m", duration: "4-5 hours", distance: "7km" },
        coordinates: [27.9620, 86.6880],
      },
      {
        day: "09",
        title: "Gokyo Ri Sunrise & Fifth Lake",
        description:
          "Leave the lodge by 5:00am. The climb to Gokyo Ri (5,357m) takes 1.5 to 2 hours on a rocky, steep trail that offers no technical difficulty but demands controlled breathing and patience at this altitude. Arrive before sunrise if you can the summit's observation point is small and fills quickly. What meets you at the top is one of the few views in the Himalayas that justifies every cliché ever written about it: Everest's south face and Lhotse's wall directly east, Makalu's pyramid to the southeast, Cho Oyu dominating the northwest, Gyachung Kang (7,952m) between them, and the entire Ngozumpa Glacier spread below like a slow-moving flood frozen in time. The four 8,000m peaks visible simultaneously from this single point is something Kala Patthar, the more famous EBC viewpoint cannot match. Descend for breakfast, then spend the afternoon walking north to the Fourth and Fifth Gokyo Lakes (5,000m) the fifth lake in particular, tucked in a remote bowl beneath Cho Oyu's base camp approach, offers a level of high-altitude solitude that is almost unreasonable.",
        // accommodations: [
        //   { name: "Gokyo Resort" },
        //   { name: "Namaste Lodge Gokyo" },
        // ],
        stats: {
          elevation: "5,357m",
          duration: "5-6 hours",
          distance: "10km",
          note: "Gokyo Ri is the highest point of the trek. Start no later than 5:00am.",
        },
        coordinates: [27.9700, 86.6780],
      },
      {
        day: "10",
        title: "Gokyo to Dole",
        description:
          "The long descent back down the valley, retracing the route through the Ngozumpa moraine and past the string of lakes. Going downhill, the views south the full corridor of Khumbu peaks down toward Namche, open up in a way they did not on the ascent. The descent from 4,750m to 4,200m is significant enough to feel in the knees but the extra oxygen at every step is noticeable. Dole's basic teahouses feel almost luxurious after Gokyo's thin air. If energy allows, the section between Machhermo and Dole rewards slower walkers who look carefully, musk deer are occasionally spotted on the slopes above the trail in the late afternoon.",
        // accommodations: [
        //   { name: "Dole Guest House" },
        //   { name: "Himalayan Lodge Dole" },
        // ],
        stats: { elevation: "4,200m", duration: "5-6 hours", distance: "11km" },
        coordinates: [27.8650, 86.7250],
      },
      {
        day: "11",
        title: "Dole to Namche Bazaar",
        description:
          "A long descent that drops 760m back to Namche and transitions the body from high-altitude alpine terrain back to Khumbu valley life. The trail passes back through Phortse Tenga and climbs briefly to the Mong La ridge before the final descent into Namche, the 'Namche hill' going down is considerably more agreeable than going up. Namche in the evening, after days above it, feels urban: warm meals with real menus, hot showers without a cold-water backup, phone signal without interruption. Your legs will ache. The altitude will feel generous. Buy something from a local shop you have been eyeing since Day 2.",
        // accommodations: [
        //   { name: "Hotel Namche" },
        //   { name: "Khumbu Lodge" },
        // ],
        stats: { elevation: "3,440m", duration: "6-7 hours", distance: "12km" },
        coordinates: [27.8050, 86.7106],
      },
      {
        day: "12",
        title: "Namche Bazaar to Lukla",
        description:
          "The final trekking day retraces the first two trekking days in reverse descending the Namche hill, crossing the Hillary Bridge, passing through Monjo and Phakding, and climbing the final gentle rise to Lukla. The trail is familiar, the legs are tired, and the views of Ama Dablam and Thamserku from the lower valley are just as good going home as they were on the way up. Arrive in Lukla by early afternoon, storms building over the mountains can delay or cancel the morning flights that follow, so an early arrival and a weather eye on the sky matters. Sort your bag for the flight, confirm departure time with your guide, and let the whole thing sink in over dinner.",
        // accommodations: [
        //   { name: "Paradise Lodge Lukla" },
        //   { name: "Khumbu Resort" },
        // ],
        stats: { elevation: "2,860m", duration: "6-7 hours", distance: "18km" },
        coordinates: [27.6868, 86.7314],
      },
      {
        day: "13",
        title: "Fly Lukla to Kathmandu",
        description:
          "The return flight from Lukla is subject to weather, cloud building over the Khumbu by 10am can ground flights for hours, and this is not a schedule you can rush. Most flights depart between 6:00am and 9:00am. The 35-minute flight back over the Solu-Khumbu foothills, descending from mountain air to the smoggy warmth of the Kathmandu valley, is a transition that hits differently after 12 days at altitude. Land at Tribhuvan International (or Manthali if your outbound was from Ramechhap), transfer to your Thamel hotel, eat something you have been craving for a week, and sleep at a reasonable hour. A buffer day in Kathmandu after this flight is strongly recommended for international connections Lukla flight delays are common enough that booking an international departure the same evening as your Lukla-Kathmandu flight is a genuine risk.",
        // accommodations: [
        //   { name: "Hotel Yak & Yeti" },
        //   { name: "Thamel Eco Resort" },
        // ],
        stats: { elevation: "1,400m", duration: "35-min flight + transfer", distance: "-" },
        coordinates: [27.7172, 85.3240],
      },
    ],
    expectations: [
      {
        title: "Four 8,000m Peaks from One Summit",
        description:
          "Gokyo Ri at 5,357m is the only viewpoint in Nepal from which Everest, Lhotse, Makalu, and Cho Oyu are all visible simultaneously, a four-peak panorama that the more famous Kala Patthar viewpoint on the EBC route cannot match.",
      },
      {
        title: "The Gokyo Lakes",
        description:
          "Six glacial lakes ranging from 4,700m to 5,000m, designated a Ramsar Wetland Site in 2007 and considered sacred by Sherpa communities. The Third Lake (Dudh Pokhari) reflects Cho Oyu and the surrounding peaks in conditions that make photography feel almost unfair. The Fifth Lake, tucked in a remote bowl near Cho Oyu Base Camp, offers high-altitude solitude that is increasingly rare in the Khumbu.",
      },
      {
        title: "The Ngozumpa Glacier",
        description:
          "Nepal's longest glacier at over 36km, visible from the valley floor as a vast grey river of ice and rock debris stretching from Cho Oyu toward Gokyo. Walking alongside the terminal moraine on the approach to Gokyo is one of the most dramatic pieces of trail in the Khumbu region and a visceral illustration of how quickly this glacier is retreating.",
      },
      {
        title: "The Khumbu Without the Crowds",
        description:
          "Above Dole the Gokyo trail sees roughly 35% of EBC's trekker numbers. Above Machhermo that thins further. The lakes, the glacier, and the summit of Gokyo Ri carry the same mountain pedigree as anything on the EBC route without the queue.",
      },
    ],
    seasonalPlanning: [
      { month: "Jan", condition: "Heavy Snow Above 4,000m / Trail to Gokyo Ri May Be Closed" },
      { month: "Feb", condition: "Cold & Icy / Experienced High-Altitude Trekkers Only" },
      { month: "Mar", condition: "Spring Begins / Rhododendrons Below Namche in Bloom" },
      { month: "Apr", condition: "Stable Weather / Long Daylight / Peak Spring Season" },
      { month: "May", condition: "Warm & Clear / Pre-Monsoon Views / Expedition Season on Cho Oyu" },
      { month: "Jun", condition: "Monsoon Builds / Views Blocked / Trail Below Namche Slippery" },
      { month: "Jul", condition: "Full Monsoon / Not Recommended / Landslide Risk Below 3,000m" },
      { month: "Aug", condition: "Peak Monsoon / High Risk / Avoid" },
      { month: "Sep", condition: "Post-Monsoon / Fresh Air / Some Cloud Lingering / Quieter" },
      { month: "Oct", condition: "Crystal Clarity / Best Gokyo Ri Views / Peak Season" },
      { month: "Nov", condition: "Excellent Visibility / Cold at Night / Fewer Trekkers than October" },
      { month: "Dec", condition: "Very Cold Above 4,000m / Clear Skies / Almost Empty Trail" },
    ],
    gallery: [
      {
        id: "img_01",
        url: "/images/gokyo/gokyo.webp",
        alt: "a vertical image with a snow-capped mountain and its reflection",
        type: "hero",
      },
      {
        id: "img_02",
        url: "/images/gokyo/gokyo1.webp",
        alt: "Snowy trails",
        type: "landscape",
      },
      {
        id: "img_03",
        url: "/images/gokyo/gokyo2.webp",
        alt: "Nestled between a large turquoise glacial lake, and an actual glacier right behind it.",
        type: "portrait",
      },
      {
        id: "img_04",
        url: "/images/gokyo/gokyo3.webp",
        alt: "Ngozumpa Glacier from the valley trail above Machhermo",
        type: "landscape",
      },
      {
        id: "img_05",
        url: "/images/gokyo/gokyo4.webp",
        alt: "Ngozumpa Glacier from the valley trail above Machhermo",
        type: "landscape",
      },
      
    ],
    gearChecklist: {
      essentials: [
        { item: "Down Jacket (Minimum 800 Fill Power)", weight: "0.65kg" },
        { item: "Sleeping Bag (Comfort Rated to -20°C)", weight: "1.4kg" },
        { item: "Sturdy Gore-Tex Trekking Boots (Broken In)", weight: "1.2kg" },
        { item: "Merino Wool Thermal Base Layers (Top & Bottom)", weight: "0.4kg" },
        { item: "UV 400 Glacier Sunglasses (Wraparound)", weight: "0.05kg" },
        { item: "Hard-Shell Waterproof Jacket & Trousers", weight: "0.7kg" },
        { item: "Personal First Aid Kit & Altitude Meds (Diamox)", weight: "0.35kg" },
        { item: "Trekking Poles with Snow Baskets", weight: "0.5kg" },
        { item: "Headtorch + Spare Batteries (for Gokyo Ri pre-dawn)", weight: "0.15kg" },
      ],
      optional: [
        { item: "Lightweight Crampons or Microspikes (for icy Gokyo Ri trail)", weight: "0.4kg" },
        { item: "Fleece Mid-Layer", weight: "0.5kg" },
        { item: "Buff / Balaclava (essential above Machhermo at night)", weight: "0.08kg" },
        { item: "Portable Power Bank (solar charging unreliable above Dole)", weight: "0.3kg" },
        { item: "Water Purification Tablets or Filter", weight: "0.1kg" },
      ],
    },
  },
  "ghorepani-poon-hill-trek": {
    id: "ghorepani-poon-hill-trek",
    name: "Ghorepani Poon Hill Trek",
    region: "Annapurna Region",
    meta: {
      duration: "4-5 Days",
      difficulty: "Easy–Moderate",
      maxElevation: "3,210m",
      bestSeasons: "March - May, October - December",
      startingPoint: "Pokhara",
    },
    overview:
      "Ghorepani Poon Hill is the trek that introduces most people to the Himalayas. Short enough to complete in four days, accessible enough for reasonably fit beginners, yet rewarding enough to leave experienced trekkers genuinely moved. It sits in a rare category of routes that consistently over-deliver on expectation. The trail begins at Nayapul in the Modi Khola valley and climbs steadily through a series of traditional Magar and Gurung villages before arriving at Ghorepani, a ridge-top settlement perched at 2,860m in one of the densest rhododendron forests in Nepal. The centrepiece is the pre-dawn climb to Poon Hill at 3,210m, a summit that commands one of the most celebrated mountain panoramas in all of Nepal, taking in Dhaulagiri (8,167m), Annapurna I (8,091m), Machhapuchhre (6,993m), and dozens of lesser peaks across 180 degrees of horizon. Sunrise here is not a subtle affair, the first light hits the snowfields of Dhaulagiri and Annapurna simultaneously, turning them from grey to gold to blazing white in the space of fifteen minutes.",
    timeline: [
      {
        day: "01",
        title: "Pokhara to Nayapul to Tikhedhunga",
        description:
          "A morning drive from Pokhara along the Baglung Highway to Nayapul, where the trail begins beside the Modi Khola river. The first stretch follows a wide, flat riverbank path through Birethanti, a busy trailhead village with good coffee stops and the ACAP permit checkpoint. From Birethanti the trail climbs gently through Hile before a steeper section leads to Tikhedhunga, a small village split by a waterfall with several comfortable lodges. A short, enjoyable day designed to ease legs into the rhythm of walking.",
        
        stats: { elevation: "1,540m", duration: "3-4 hours", distance: "1.5hr drive + trek" },
        coordinates: [28.3285, 83.6732],
      },
      {
        day: "02",
        title: "Tikhedhunga to Ghorepani",
        description:
          "The most demanding day of the trek, and arguably the most rewarding. From Tikhedhunga the trail immediately attacks the famous stone staircase climb to Ulleri roughly 3,000 hand-cut stone steps ascending 500m in under two kilometres. Ulleri itself is a beautiful Magar village worth pausing in traditional stone houses, prayer wheels at the village entrance, and the first open views back down the Modi Khola valley. From Ulleri the trail enters the rhododendron forest and stays in it almost continuously through Banthanti (2,250m) and Nangethanti to Ghorepani. The forest above 2,500m is ancient and dense enormous rhododendron trees with gnarled trunks, carpeted in moss, tunnel over the path. In March and April the canopy is in full bloom. Ghorepani sits on a saddle between ridges and has the largest concentration of tea houses on the trek.",
       
        stats: { elevation: "2,860m", duration: "6-7 hours", distance: "11km" },
        coordinates: [28.3997, 83.7001],
      },
      {
        day: "03",
        title: "Poon Hill Sunrise then Trek to Tadapani",
        description:
          "Wake at 4:30am and join the procession of headtorches climbing the 45-minute trail to Poon Hill. The wooden observation tower at the top fills quickly arrive by 5:30am in October and November for a good position before sunrise. The panorama on a clear morning is extraordinary: Dhaulagiri anchors the western horizon, Annapurna I and South dominate the centre, Machhapuchhre's perfect pyramid rises to the east, and the entire Annapurna Sanctuary wall stretches between them. After sunrise and breakfast back in Ghorepani, the day continues east toward Tadapani through more rhododendron forest via Deurali pass (3,090m). The forest on this section is quieter and less trodden look for Himalayan Monal pheasants in the undergrowth. Tadapani sits on a forested ridge with excellent evening views of Annapurna South and Machhapuchhre.",
          stats: {
          elevation: "2,630m",
          duration: "5-6 hours",
          distance: "14km",
          note: "Poon Hill summit elevation is 3,210m, sleeping at Tadapani",
        },
        coordinates: [28.4101, 83.7384],
      },
      {
        day: "04",
        title: "Tadapani to Ghandruk to Nayapul, Drive to Pokhara",
        description:
          "The descent to Ghandruk is steep and involves long stone staircase sections through dense forest, take it slowly on tired legs. Ghandruk is the largest Gurung village in the Annapurna region and one of the most beautifully preserved stone-flagged lanes, traditional slate-roofed houses, a small but excellent Gurung museum, and a community-run conservation project that has made it a model for sustainable tourism in Nepal. Allow an hour to walk through the village before descending further to Kimche, where jeeps and local buses run back to Nayapul and onward to Pokhara.",
          stats: {
          elevation: "820m",
          duration: "5-6 hours",
          distance: "14km + 1.5hr drive",
          note: "Ghandruk elevation is 1,940m. Optional overnight in Ghandruk on Day 5.",
        },
        coordinates: [28.3799, 83.7567],
      },
    ],
    expectations: [
      {
        title: "The Poon Hill Panorama",
        description:
          "One of the most celebrated sunrise viewpoints in the Himalayas: Dhaulagiri, Annapurna I, Annapurna South, Nilgiri, and Machhapuchhre all visible across 180 degrees of horizon as first light turns the snowfields gold.",
      },
      {
        title: "Rhododendron Forests",
        description:
          "The ancient forest between Banthanti and Ghorepani is one of the densest rhododendron forests in Nepal, in March and April the canopy turns a deep crimson and pink, blooming in near-silence above the trail.",
      },
      {
        title: "Magar and Gurung Villages",
        description:
          "Trek through traditional hill communities with a proud Gurkha military heritage stone-flagged lanes, prayer wheels, and the Gurung Museum in Ghandruk offer a genuine window into Himalayan culture.",
      },
      {
        title: "Accessible Himalayan Adventure",
        description:
          "At 3,210m maximum elevation with well-maintained stone-paved trails, this trek is achievable for reasonably fit beginners while delivering mountain views that rival anything Nepal has to offer.",
      },
    ],
    seasonalPlanning: [
      { month: "Jan", condition: "Cold at Ghorepani / Possible Snow / Manageable with Good Gear" },
      { month: "Feb", condition: "Cold & Quiet / No Rhododendron Bloom Yet" },
      { month: "Mar", condition: "Rhododendron Season Begins / Stunning Forest Colour" },
      { month: "Apr", condition: "Peak Bloom / Best Forest Colour / Busy but Worth It" },
      { month: "May", condition: "Warm & Clear / Pre-Monsoon / Late Bloom at Altitude" },
      { month: "Jun", condition: "Monsoon Begins / Slippery Trails / Leeches" },
      { month: "Jul", condition: "Heavy Rain / Views Blocked / Not Recommended" },
      { month: "Aug", condition: "Peak Monsoon / Wet & Muddy / Not Recommended" },
      { month: "Sep", condition: "Post-Monsoon Green / Quieter / Some Residual Cloud" },
      { month: "Oct", condition: "Sharpest Visibility / Most Reliable Sunrise / Peak Season" },
      { month: "Nov", condition: "Crystal Clear Skies / Cool & Stable / Excellent Views" },
      { month: "Dec", condition: "Cold & Quiet / Light Snow at Ghorepani / Beautiful & Uncrowded" },
    ],
    gallery: [
      {
        id: "img_01",
        url: "/images/poonhill/poonhill5.webp",
        alt: "Poon Hill sunrise panorama with Dhaulagiri and Annapurna",
        type: "hero",
      },
      {
        id: "img_02",
        url: "/images/poonhill/poonhill.webp",
        alt: "Poon Hill, Histan Mandali",
        type: "landscape",
      },
      {
        id: "img_03",
        url: "/images/poonhill/poonhill1.webp",
        alt: "Poonhill nepal",
        type: "portrait",
      },
      {
        id: "img_04",
        url: "/images/poonhill/poonhill1.webp",
        alt: "Poonhill nepal",
        type: "landscape",
      },
      {
        id: "img_05",
        url: "/images/poonhill/poonhill3.webp",
        alt: "Poonhill nepal",
        type: "landscape",
      },
      {
        id: "img_06",
        url: "/images/poonhill/poonhill4.webp",
        alt: "Ghorepani Poonhill nepal",
        type: "landscape",
      },
    ],
    gearChecklist: {
      essentials: [
        { item: "Warm Insulated Jacket (Down or Synthetic)", weight: "0.6kg" },
        { item: "Sleeping Bag (Comfort Rated to -10°C)", weight: "1.0kg" },
        { item: "Sturdy Waterproof Trekking Boots", weight: "1.2kg" },
        { item: "Merino Wool Thermal Base Layers (Top & Bottom)", weight: "0.4kg" },
        { item: "UV 400 Protection Sunglasses", weight: "0.045kg" },
        { item: "Hard-Shell Waterproof Jacket", weight: "0.5kg" },
        { item: "Personal First Aid Kit & Basic Meds", weight: "0.3kg" },
        { item: "Headtorch with Fresh Batteries (for Poon Hill pre-dawn)", weight: "0.15kg" },
      ],
      optional: [
        { item: "Trekking Poles (helpful on Ulleri & Ghandruk descent)", weight: "0.5kg" },
        { item: "Windchill Layer / Softshell (for Poon Hill ridge)", weight: "0.35kg" },
        { item: "Sun Hat & Warm Beanie", weight: "0.15kg" },
        { item: "Portable Power Bank", weight: "0.3kg" },
      ],
    },
  },
  "mardi-himal-trek": {
    id: "mardi-himal-trek",
    name: "Mardi Himal Trek",
    region: "Annapurna Region",
    meta: {
      duration: "6-7 Days",
      difficulty: "Moderate",
      maxElevation: "4,500m",
      bestSeasons: "March - May, September - December",
      startingPoint: "Pokhara",
    },
    overview:
      "Mardi Himal is Pokhara's best-kept secret, a steep, forested ridge trek that climbs directly above the city into one of the most dramatic viewpoints in the entire Annapurna region, yet sees only a fraction of the traffic of its famous neighbours. Opened officially to trekkers in 2012 after years as a restricted route, the trail follows the Mardi Himal ridgeline southeast of Machapuchare (6,993m), ascending through dense rhododendron and oak forest before breaking out onto a high open ridge at around 3,300m. From the Upper Camp and High Camp the views are intimate in a way that Annapurna Base Camp cannot quite replicate — Machapuchare's perfect pyramid fills the sky to the northwest, Annapurna South and Hiunchuli rise to the left, and Mardi Himal itself (5,587m) closes the horizon directly ahead. Most trekkers who do ABC or the Annapurna Circuit miss this trail entirely, which means on a clear October morning at High Camp you may find yourself alone with one of the finest mountain panoramas in Nepal.",
    timeline: [
      {
        day: "01",
        title: "Pokhara to Kande to Australian Camp",
        description:
          "A short drive from Pokhara to Kande where the trail begins immediately through a mix of farmland and lower forest. The ascent to Australian Camp is steady and well-marked, passing through Dhampus, a Gurung village with excellent Annapurna views. Sunsets here over Pokhara and the Annapurna range are genuinely spectacular.",
        stats: { elevation: "2,100m", duration: "3-4 hours", distance: "45min drive + trek" },
        coordinates: [28.2671, 83.8750],
      },
      {
        day: "02",
        title: "Australian Camp to Forest Camp",
        description:
          "The trail enters dense rhododendron and oak forest almost immediately after Australian Camp, climbing steadily along the Mardi Himal ridge. The canopy is thick in March and April. The path is well-defined but steep in sections. Forest Camp sits in a clearing in the forest with basic but comfortable lodges and the first filtered views of Mardi Himal's upper ridge.",
        stats: { elevation: "2,550m", duration: "5-6 hours", distance: "10km" },
        coordinates: [28.3050, 83.9020],
      },
      {
        day: "03",
        title: "Forest Camp to High Camp",
        description:
          "The day the ridge opens up. The trail passes through Low Camp (2,990m) and Upper Camp (3,580m) in quick succession, and by Upper Camp the forest gives way entirely to open alpine terrain. Machapuchare dominates the northwest horizon and the full Annapurna Sanctuary wall appears to the left. High Camp at 4,100m is exposed and wind-prone. Arrive early and rest well for tomorrow.",
        stats: { elevation: "4,100m", duration: "5-6 hours", distance: "7-8km" },
        coordinates: [28.3310, 83.9180],
      },
      {
        day: "04",
        title: "Trek to Mardi Himal Base Camp and back to Low Camp",
        description:
          "Depart High Camp by 5–6am to reach Mardi Himal Base Camp at 4,500m before clouds build. The trail climbs steeply over loose rock and seasonal snowfields — sure-footedness is essential. At Base Camp the panorama includes Mardi Himal directly above, Machapuchare, Annapurna I, Annapurna South, Hiunchuli, and on clear days, Dhaulagiri to the west. Allow 45 minutes to an hour at the top. Descend all the way to Low Camp to ease altitude.",
        stats: {
          elevation: "2,990m",
          duration: "6-7 hours",
          distance: "12km",
          note: "Base Camp elevation is 4,500m, sleeping at Low Camp",
        },
        coordinates: [28.3490, 83.9350],
      },
      {
        day: "05",
        title: "Low Camp to Sidhing Village",
        description:
          "An alternative descent route drops south off the ridge through dense forest to Sidhing, a quiet Gurung village in the Modi Khola valley largely untouched by trekking tourism. The trail is steeper and less used than the main ridge path — look for trail markers carefully. Sidhing has a handful of basic lodges and a warm, unhurried atmosphere.",
        stats: { elevation: "1,700m", duration: "5-6 hours", distance: "11km" },
        coordinates: [28.3020, 83.8850],
      },
      {
        day: "06",
        title: "Sidhing to Lwang Ghalel to Pokhara",
        description:
          "A gentle morning walk through terraced farmland and rhododendron forest to Lwang Ghalel, a community homestay village that has become a model for sustainable trekking tourism in the region. The community-run lodges here are excellent — clean, locally managed, and a direct channel for trekking income to the village. From Lwang a jeep or local bus runs back to Pokhara via Phedi.",
        stats: { elevation: "820m", duration: "3-4 hours", distance: "1.5hrs drive" },
        coordinates: [28.2800, 83.8600],
      },
    ],
    expectations: [
      {
        title: "Iconic Machapuchare Views",
        description:
          "Witness Machapuchare's perfect pyramid filling the sky at close range alongside the full Annapurna massif — a perspective most Annapurna trekkers never see.",
      },
      {
        title: "Gurung Village Culture",
        description:
          "Pass through traditional Gurung settlements like Dhampus and Sidhing, experiencing authentic Himalayan hospitality far from the main trekking crowds.",
      },
      {
        title: "The Ridge Experience",
        description:
          "Walk an exposed alpine spine with the Modi Khola valley dropping away to the south and the Annapurna Sanctuary walls rising to the north — one of the finest ridge walks in Nepal.",
      },
      {
        title: "Uncrowded Solitude",
        description:
          "Above Forest Camp the trail grows quiet, and at High Camp and Base Camp you may find yourself nearly alone with a panorama that rivals anything on the busier Annapurna routes.",
      },
    ],
    seasonalPlanning: [
      { month: "Jan", condition: "Snowbound at High Camp / Experienced Trekkers Only" },
      { month: "Feb", condition: "Cold & Icy Above 3,500m / Very Quiet Trails" },
      { month: "Mar", condition: "Rhododendrons in Bloom / Best Forest Colour" },
      { month: "Apr", condition: "Stable Mornings / Peak Season / Ideal Conditions" },
      { month: "May", condition: "Warm & Clear / Pre-Monsoon Views" },
      { month: "Jun", condition: "Monsoon Begins / Slippery Trails / Leeches" },
      { month: "Jul", condition: "Heavy Rain / Views Blocked / Not Recommended" },
      { month: "Aug", condition: "Peak Monsoon / Dangerous Trail Conditions" },
      { month: "Sep", condition: "Post-Monsoon Green / Quieter / Some Cloud" },
      { month: "Oct", condition: "Crystal Clear Skies / Sharpest Mountain Views" },
      { month: "Nov", condition: "Cool & Stable / Excellent Visibility / Fewer Crowds" },
      { month: "Dec", condition: "Cold but Clear / Very Few Trekkers / Light Snow at High Camp" },
    ],
    gallery: [
      {
        id: "img_01",
        url: "/images/mardi/mardi.webp",
        alt: "Mardi Himal Base Camp with Machapuchare",
        type: "hero",
      },
      {
        id: "img_02",
        url: "/images/mardi/mardi1.webp",
        alt: "Australian Camp sunset over Annapurna range",
        type: "landscape",
      },
      {
        id: "img_03",
        url: "/images/mardi/mardi2.webp",
        alt: "Rhododendron forest trail to Forest Camp",
        type: "portrait",
      },
      // {
      //   id: "img_04",
      //   url: "/images/mardi/mardi1.webp",
      //   alt: "Exposed ridge walk between Upper Camp and High Camp",
      //   type: "landscape",
      // },
      // {
      //   id: "img_05",
      //   url: "/images/mardi/mardi1.webp",
      //   alt: "Machapuchare pyramid from High Camp",
      //   type: "landscape",
      // },
      // {
      //   id: "img_06",
      //   url: "/images/mardi/mardi1.webp",
      //   alt: "Sidhing Gurung village in the Modi Khola valley",
      //   type: "landscape",
      // },
    ],
    gearChecklist: {
      essentials: [
        { item: "Down Jacket (Minimum 600 Fill Power)", weight: "0.65kg" },
        { item: "Sleeping Bag (Comfort Rated to -15°C)", weight: "1.2kg" },
        { item: "Sturdy Waterproof Trekking Boots", weight: "1.2kg" },
        { item: "Merino Wool Thermal Base Layers (Top & Bottom)", weight: "0.4kg" },
        { item: "UV 400 Protection Sunglasses", weight: "0.045kg" },
        { item: "Hard-Shell Waterproof Jacket", weight: "0.5kg" },
        { item: "Personal First Aid Kit & Altitude Meds (Diamox)", weight: "0.35kg" },
        { item: "Trekking Poles (Essential Above Upper Camp)", weight: "0.5kg" },
      ],
      optional: [
        { item: "Fleece Mid-Layer", weight: "0.5kg" },
        { item: "Sun Hat & Warm Beanie", weight: "0.15kg" },
        { item: "Sleeping Bag Liner", weight: "0.2kg" },
        { item: "Portable Power Bank", weight: "0.3kg" },
      ],
    },
  },
};
