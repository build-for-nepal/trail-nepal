import { TrekDetail } from "@/types/trek";

export const TREK_DETAILS: Record<string, TrekDetail> = {
  "ebc-trek": {
    id: "ebc-trek",
    name: "Everest Base Camp (EBC) Trek",
    region: "Khumbu region",
    meta: {
      duration: "11 Days",
      difficulty: "Difficult",
      maxElevation: "5,545m",
      bestSeasons: "March - May, September - November",
      startingPoint: "Lukla (Tenzing-Hillary Airport)",
    },
    overview:
      "The Everest Base Camp trek is more than just a hike, it is a pilgrimage to the highest point on Earth and a deep dive into the heart of the Himalayas. Beginning with a pulse-pounding flight into the mountain-side airstrip of Lukla, the journey takes you through the sacred Sagarmatha National Park, a UNESCO World Heritage site. You will traverse high suspension bridges draped in prayer flags, navigate ancient glacial moraines, and walk through stone-walled villages that have remained unchanged for centuries. Beyond the physical challenge of reaching 5,364 meters, the trek offers a profound cultural encounter with the Sherpa people, whose hospitality and spiritual resilience are as legendary as the peaks they call home.",
    timeline: [
      {
        day: "01",
        title: "Kathmandu to Lukla & Trek to Phakding",
        description:
          "Your adventure begins with a breathtaking 35-minute flight from Kathmandu to Lukla, often cited as one of the most scenic flights in the world. Upon landing at the Tenzing-Hillary Airport, you’ll meet your trekking team and begin the walk through the bustling village of Lukla. The trail descends gently, passing through small Sherpa hamlets like Chheplung and Ghat. You will follow the path of the Dudh Koshi river, crossing your first suspension bridges and smelling the fresh pine air, eventually reaching the riverside village of Phakding for your first night in a mountain teahouse.",
        // accommodations: [
        //   { name: "Phakding Guest House" },
        //   { name: "Yeti Mountain Home (Luxury)" },
        // ],
        stats: { elevation: "2,610m", duration: "3-4 hours", distance: "8km" },
        coordinates: [27.737, 86.712],
        // price: "NPR 4,500",
      },
      {
        day: "02",
        title: "Phakding to Namche Bazaar",
        description:
          "Today is a rigorous climb that serves as your introduction to the high Himalayas. You will crisscross the Dudh Koshi river multiple times over high suspension bridges, including the famous Hillary Bridge. After passing through the entrance of Sagarmatha National Park at Monjo, the trail drops to the riverbed before beginning a long, zig-zagging ascent through dense forests. Halfway up, you may catch your very first glimpse of Mount Everest peeking through the trees. The day ends as you emerge into the horseshoe-shaped amphitheater of Namche Bazaar, the vibrant commercial hub of the Khumbu region.",
        // accommodations: [{ name: "Hotel Namche" }, { name: "Khumbu Lodge" }],

        stats: { elevation: "3,440m", duration: "6-7 hours", distance: "11km" },
        coordinates: [27.805068, 86.7105936],
        // price: "NPR 5,500",
      },
      {
        day: "03",
        title: "Acclimatization Day: Exploring Namche",
        description:
          "Acclimatization is the golden rule of high-altitude trekking. Instead of pushing higher, you spend the day in Namche to let your body adjust to the thinner air. A popular activity is a steep hike up to the Everest View Hotel, where you can sit on the terrace and enjoy a panoramic view of Everest, Lhotse, and Ama Dablam. On the way back, you can visit the Sherpa Culture Museum or the Everest Photo Gallery. The afternoon is best spent exploring the local bakeries, gear shops, and cafes of Namche, soaking in the unique mountain atmosphere.",
        // accommodations: [{ name: "Hotel Namche" }, { name: "Khumbu Lodge" }],
        stats: {
          elevation: "3,440m",
          duration: "3-4 hours",
          distance: "4km",
          note: "Acclimatization Indicated",
        },
        coordinates: [27.805068, 86.7105936],
        // price: "NPR 6,000",
      },
      {
        day: "04",
        title: "Namche Bazaar to Tengboche",
        description:
          "The trail out of Namche is spectacular, winding around the mountainside with the giant peaks standing guard across the valley. After an easy walk to Kyanjuma, the trail descends steeply to the river at Phunki Tenga for lunch. From here, it is a steady, two-hour climb through rhododendron and silver fir forests to Tengboche. As you reach the ridge, you are greeted by the magnificent Tengboche Monastery, the largest in the region.",
        // accommodations: [
        //   { name: "Tengboche Guest House" },
        //   { name: "Hotel Himalayan" },
        // ],
        stats: { elevation: "3,860m", duration: "5-6 hours", distance: "10km" },
        coordinates: [27.8352264, 86.7641614],
        // price: "NPR 5,000",
      },
      {
        day: "05",
        title: "Tengboche to Dingboche",
        description:
          "Leaving Tengboche, the trail descends through a forest of birch, conifers, and rhododendrons. The path is dotted with mani walls (stones carved with Buddhist prayers) as you head toward the village of Pangboche. You are now leaving the tree line behind, and the landscape becomes noticeably more arid and alpine. Crossing the Imja Khola, you begin a gradual climb into the Chukhung Valley. The day ends in Dingboche.",
        // accommodations: [
        //   { name: "Snow Lion Lodge" },
        //   { name: "Hotel Good Luck" },
        // ],
        stats: { elevation: "4,410m", duration: "5-6 hours", distance: "11km" },
        coordinates: [27.8873288, 86.8259632],
        // price: "NPR 5,500",
      },
      {
        day: "06",
        title: "Second Acclimatization Day: Dingboche",
        description:
          "To prepare for the push above 5,000 meters, you spend another day acclimatizing. The most effective way to do this is to 'hike high, sleep low.' Most trekkers climb the steep ridge of Nangkartshang Peak, which rises directly above the village. From the summit (5,083m), you are rewarded with a 360-degree view of the surrounding giants. The rest of the day is for resting, hydrating, and mentally preparing for the higher altitudes ahead.",
        // accommodations: [{ name: "Snow Lion Lodge" }],
        stats: {
          elevation: "4,410m",
          duration: "4-5 hours",
          distance: "5km",
          note: "Acclimatization Indicated",
        },
        coordinates: [27.8873288, 86.8259632],
        // price: "NPR 5,500",
      },
      {
        day: "07",
        title: "Dingboche to Lobuche",
        description:
          "The trail today is a steady climb across a wide, glacier-carved valley. You will reach the small settlement of Thukla, situated at the foot of the massive Khumbu Glacier. After lunch, you face the 'Thukla Pass'—a steep, challenging climb to the top of the terminal moraine. Here, you will find a somber and beautiful memorial site dedicated to climbers who lost their lives on Everest. From the pass, the trail levels out to reach Lobuche.",
        // accommodations: [
        //   { name: "National Park Lodge" },
        //   { name: "Oxygen Altitude Home" },
        // ],
        stats: { elevation: "4,940m", duration: "5-6 hours", distance: "8km" },
        coordinates: [27.9477818, 86.8105368],
        // price: "NPR 6,000",
      },
      {
        day: "08",
        title: "Lobuche to Gorak Shep & Everest Base Camp",
        description:
          "This is the most significant day of the trek. You start early, walking across rocky terrain toward Gorak Shep. After a quick meal, you push forward onto the Khumbu Glacier moraine toward Everest Base Camp. The trail is rugged and constantly shifting. Reaching Base Camp (5,364m) is an emotional milestone. You will stand among the colorful tents of expedition teams (if in spring) before returning to Gorak Shep for the night.",
        // accommodations: [
        //   { name: "Buddha Lodge" },
        //   { name: "Snowland Highest Inn" },
        // ],
        stats: {
          elevation: "5,164m",
          duration: "8-9 hours",
          distance: "15km",
          note: "EBC elevation is 5,364m, sleeping at Gorak Shep",
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
        title: "Iconic Mountain Panoramas",
        description:
          "Witness the sheer scale of the world's highest peaks, including the jagged summit of Everest, the wall of Nuptse, and the aesthetic beauty of Ama Dablam.",
      },
      {
        title: "Vibrant Sherpa Culture",
        description:
          "Walk through ancient villages, visit hilltop monasteries, and experience the unique spiritual heritage and hospitality of the Himalayan people.",
      },
      {
        title: "The Khumbu Icefall",
        description:
          "Stand at the edge of the world's most famous glacier and watch the sun rise over the cascading towers of ice that mark the start of the climb to the summit.",
      },
      {
        title: "High Altitude Resilience",
        description:
          "Test your physical and mental limits as you navigate rugged terrain and thin air, supported by professional guides and local expertise.",
      },
    ],
    seasonalPlanning: [
      { month: "Jan", condition: "Extremely Cold / Heavy Snow on Passes" },
      { month: "Feb", condition: "Freezing Temperatures / Quiet Trails" },
      { month: "Mar", condition: "Spring Bloom / Vibrant Rhododendrons" },
      { month: "Apr", condition: "Perfect Climbing Weather / Peak Season" },
      { month: "May", condition: "Warm Temperatures / Pre-Monsoon Views" },
      { month: "Jun", condition: "Beginning of Monsoon / Cloudy Skies" },
      { month: "Jul", condition: "Heavy Rain / Lush Greenery / Leeches" },
      { month: "Aug", condition: "Peak Monsoon / Wet & Muddy Trails" },
      { month: "Sep", condition: "Post-Monsoon / Crisp & Fresh Air" },
      { month: "Oct", condition: "Crystal Clear Skies / Most Popular Month" },
      { month: "Nov", condition: "Cool & Stable / Excellent Visibility" },
      { month: "Dec", condition: "Winter Chill / Crystal Clear Blue Skies" },
    ],
    gallery: [
      {
        id: "img_01",
        url: "/images/ebc.jpg",
        alt: "Everest Base Camp and Khumbu Icefall",
        type: "hero",
      },
      {
        id: "img_02",
        url: "/images/ebc/Lukla.png",
        alt: "Namche Bazaar Sherpa Capital",
        type: "landscape",
      },
      {
        id: "img_03",
        url: "/images/ebc/EBC2.png",
        alt: "Tengboche Monastery with Ama Dablam",
        type: "portrait",
      },
      {
        id: "img_04",
        url: "/images/ebc/Peak.png",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_05",
        url: "/images/ebc/Namche.png",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_06",
        url: "/images/ebc/ABC1.png",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
    ],
    gearChecklist: {
      essentials: [
        { item: "Down Jacket (Minimum 800 Fill Power)", weight: "0.65kg" },
        { item: "Sleeping Bag (Comfort Rated to -20°C)", weight: "1.4kg" },
        { item: "Sturdy Gore-Tex Trekking Boots", weight: "1.2kg" },
        {
          item: "Merino Wool Thermal Base Layers (Top & Bottom)",
          weight: "0.4kg",
        },
        { item: "UV 400 Protection Sunglasses", weight: "0.045kg" },
        { item: "Hard-Shell Waterproof Jacket", weight: "0.5kg" },
        {
          item: "Personal First Aid Kit & High Altitude Meds",
          weight: "0.35kg",
        },
      ],
      optional: [
        { item: "Fleece Jacket", weight: "0.5kg" },
        { item: "Sun Hat", weight: "0.1kg" },
        { item: "Trekking Poles", weight: "0.5kg" },
        { item: "Portable Power Bank", weight: "0.3kg" },
      ],
    },
  },
  "manaslu-circuit": {
    id: "manaslu-circuit",
    name: "Manaslu Circuit Trek",
    region: "Manaslu Region",
    meta: {
      duration: "14-18 Days",
      difficulty: "Challenging",
      maxElevation: "5,106m",
      bestSeasons: "March - May, September - November",
      startingPoint: "Kathmandu",
    },
    overview:
      "The Manaslu Circuit is Nepal's most compelling wilderness loop, tracing a complete circle around Manaslu, the world's eighth-highest peak at 8,163 metres through terrain that changes so dramatically it feels like several expeditions rolled into one. The route follows the ancient Budhi Gandaki river valley northward, climbing from subtropical gorges at 700 metres through dense rhododendron and pine forests, past thundering waterfalls and traditional stone villages, before breaking into the high alpine world above 3,500 metres. Culturally, the trail moves through Gurung, Nubri, and Tsum communities whose Tibetan Buddhist traditions have remained largely intact mani walls, centuries-old gompas, and prayer flags strung across glacial ridgelines mark every significant landmark. Because the circuit sits within a restricted area requiring a special permit and a licensed guide, the trail sees a fraction of the traffic found on Everest or Annapurna routes, meaning you will share the path with yak caravans more often than other trekking groups.",
    timeline: [
      {
        day: "01",
        title: "Kathmandu to Soti Khola",
        description:
          "Early departure from Kathmandu by jeep through Arughat and along the Budhi Gandaki river valley.",
        stats: {
          elevation: "700m",
          duration: "7-8 hours (drive)",
          distance: "N/A",
        },
        coordinates: [28.0483558, 84.8143192],
      },
      {
        day: "02",
        title: "Soti Khola to Machha Khola",
        description:
          "The trail opens through banana groves, millet fields, and small Gurung settlements, crossing several suspension bridges above the rushing Budhi Gandaki. Subtropical and humid",
        stats: { elevation: "930m", duration: "5-6 hours", distance: "14km" },
        coordinates: [28.1363198, 84.8550124],
      },
      {
        day: "03",
        title: "Trek to Jagat",
        description:
          "A longer day tracking the river closely through Khorlabesi and Tatopani, where natural hot springs sit right beside the trail worth a quick soak. Jagat is the first official checkpoint where permits are inspected, a proper stone-paved village with a small monastery.",
        stats: { elevation: "1,340m", duration: "6-7 hours", distance: "22km" },
        coordinates: [28.2191381, 84.8754899],
      },
      {
        day: "04",
        title: "Jagat to Deng",
        description:
          "The valley narrows and the Tibetan cultural influence begins mani walls, prayer flags, and stone-carved chortens appear along the trail. The route passes through Phillim, a large Nubri village with a working gompa, before descending to Deng across a high suspension bridge. ",
        stats: { elevation: "1,860m", duration: "6-7 hours", distance: "19km" },
        coordinates: [28.3756597, 84.8860943],
      },
      {
        day: "05",
        title: "Trek to Namrung",
        description:
          "Climbing steadily through Rana and Bihi, small villages where locals still wear traditional chuba robes. The forest thickens with oak and rhododendron and the air cools noticeably. Namrung sits on a commanding ridge with the first clear views of Sringi Himal (7,161m).",
        stats: { elevation: "2,630m", duration: "6-7 hours", distance: "18km" },
        coordinates: [28.5353815, 84.7834682],
      },
      {
        day: "06",
        title: "Namrung to Samagaon via Lho",
        description:
          "The standout day of the lower circuit. At Lho village, Manaslu's south face appears with sudden, staggering scale: a wall of ice and granite rising nearly 5,000 vertical metres. The Ribung Gompa above Lho is worth a short detour. The trail continues through Shyala before descending into Samagaon, the largest village in the Nubri region with a beautifully preserved gompa at its edge. ",
        stats: { elevation: "3,180m", duration: "5-6 hours", distance: "N/A" },
        coordinates: [28.5841331, 84.6450536],
      },
      {
        day: "07",
        title: "Hike to Pungyen Gompa ",
        description:
          "Non-negotiable rest day before pushing higher. The hike to Pungyen Gompa at 4,050m rewards with a glacial lake and direct close-up views of Manaslu's north face. Alternatively, walk toward Manaslu Base Camp at 4,480m. Return to Samagaon for the night. ",
        stats: {
          elevation: "3,520m",
          duration: "4-5 hours",
          distance: "5km",
          note: "Acclimatization Indicated",
        },
        coordinates: [28.5841331, 84.6450536],
      },
      {
        day: "08",
        title: "Samagaon to Samdo",
        description:
          "Short by distance but meaningful in altitude. The trail leaves the treeline immediately, crossing open moraines through a wide glacial valley. Samdo is a tiny settlement of around 50 households near the Tibetan border cold nights, extraordinary skies. ",
        stats: { elevation: "3,860m", duration: "3-4 hours", distance: "9km" },
        coordinates: [28.6470636, 84.6325197],
      },
      {
        day: "09",
        title: "Hike toward Tibet border ridge ",
        description:
          "A second acclimatization day walking northeast toward the old Tibet trade route. Views back down the valley toward Manaslu are exceptional and the terrain is a direct preview of what Larkya La demands. Early dinner, early sleep.",
        stats: {
          elevation: "3,875m",
          duration: "3-4 hours",
          distance: "4km",
          note: "Acclimatization Indicated",
        },
        coordinates: [28.6470636, 84.6325197],
      },
      {
        day: "10",
        title: "Samdo to Dharamsala",
        description:
          "A short but serious climb across open alpine terrain to Dharamsala, a wind-exposed collection of stone shelters with one basic lodge and no electricity. Arrive early, eat well, drink plenty of water, and sleep by 8pm. Tomorrow starts before dawn.",
        stats: { elevation: "4,200m", duration: "3-4 hours", distance: "7km" },
        coordinates: [28.6584715, 84.582265],
      },
      {
        day: "11",
        title: "Dharamsala to Bimthang via Larkya La",
        description:
          "Cross Larkya La Pass at 5,106m with panoramic Himalayan views before descending to Bimthang.",
        stats: {
          elevation: "5,106m",
          duration: "8-10 hours",
          distance: "22km",
        },
        coordinates: [28.6024945, 84.4600261],
      },
      {
        day: "12",
        title: "Bimthang to Tilje",
        description:
          "A long descent back through rhododendron and bamboo forest, passing Dudh Pokhari lake and the village of Kharche before reaching Tilje in the lower Marsyangdi valley. The air thickens, the body recovers, apple orchards replace glaciers. ",
        stats: { elevation: "2,300m", duration: "6-7 hours", distance: "20km" },
        coordinates: [28.5446263, 84.3809759],
      },
      {
        day: "13",
        title: "Tilje to Dharapani",
        description:
          "Walk to Dharapani where the Manaslu and Annapurna trails meet.",
        stats: { elevation: "1,860m", duration: "3-4 hours", distance: "8km" },
        coordinates: [28.5298499, 84.3497295],
      },
      {
        day: "14",
        title: "Drive to Kathmandu",
        description:
          "Return via Besisahar with a long scenic drive back to the capital.",
        stats: {
          elevation: "1,400m",
          duration: "8-10 hours (drive)",
          distance: "-",
        },
        coordinates: [27.717, 85.324],
      },
    ],
    expectations: [
      {
        title: "Remote Wilderness Loop",
        description:
          "Experience one of Nepal's most pristine trails with far fewer crowds than Everest or Annapurna.",
      },
      {
        title: "The Larkya La Pass",
        description:
          "Conquer the 5,106m pass for unmatched views of Himlung Himal, Cheo Himal, and the massive Manaslu.",
      },
      {
        title: "Cultural Fusion",
        description:
          "Witness the transition from Hindu-influenced lower villages to the ancient Tibetan Buddhist culture of the high valley.",
      },
      {
        title: "Challenging Endurance",
        description:
          "Test your limits with a strenuous trek requiring stamina for multiple high-altitude days and basic teahouse living.",
      },
    ],
    seasonalPlanning: [
      { month: "Jan", condition: "Closed / Heavy Snow on Larkya La" },
      { month: "Feb", condition: "Closed / Extreme Cold / Pass Blocked" },
      {
        month: "Mar",
        condition: "Good / Spring Blooms / Moderate Temperatures",
      },
      { month: "Apr", condition: "Peak Season / Clear Skies / Stable Weather" },
      {
        month: "May",
        condition: "Warm / Rhododendron Forests / Clear Mornings",
      },
      { month: "Jun", condition: "Beginning of Monsoon / Cloudy / Leeches" },
      { month: "Jul", condition: "Danger / Heavy Rain / Landslide Risk" },
      { month: "Aug", condition: "Peak Monsoon / Wet & Muddy Trails" },
      {
        month: "Sep",
        condition: "Post-Monsoon / Crisp Air / Fresh Landscapes",
      },
      { month: "Oct", condition: "Perfect / Best Visibility / Most Popular" },
      { month: "Nov", condition: "Excellent / Cool & Stable / Golden Peaks" },
      { month: "Dec", condition: "Closing / Winter Chill / High Pass Snow" },
    ],
    gallery: [
      {
        id: "img_01",
        url: "/images/manaslu/manaslu.jpg",
        alt: "Manaslu ",
        type: "hero",
      },
      {
        id: "img_02",
        url: "/images/manaslu/manaslu2.jpg",
        alt: "En route to Pung Gyen Gompa in Manaslu Circuit Trek.",
        type: "landscape",
      },
      {
        id: "img_03",
        url: "/images/manaslu/manaslu3.jpg",
        alt: "Manaslu, Samagaun, Nepal",
        type: "portrait",
      },
      {
        id: "img_04",
        url: "/images/erik-OwJ6Cn_DnHM-unsplash.jpg",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_05",
        url: "/images/erik-OwJ6Cn_DnHM-unsplash.jpg",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_06",
        url: "/images/erik-OwJ6Cn_DnHM-unsplash.jpg",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
    ],
    gearChecklist: {
      essentials: [
        { item: "Down Jacket (800+ Fill Power)", weight: "0.7kg" },
        { item: "Sleeping Bag (Comfort -20°C)", weight: "1.5kg" },
        { item: "Crampons or Micro-spikes (for the Pass)", weight: "0.4kg" },
        { item: "Waterproof Trekking Boots", weight: "1.3kg" },
        { item: "Hard-Shell Rain Jacket", weight: "0.5kg" },
        { item: "Thermal Base Layers", weight: "0.4kg" },
      ],
      optional: [
        { item: "Trekking Poles", weight: "0.5kg" },
        { item: "Power Bank", weight: "0.4kg" },
        { item: "Headlamp", weight: "0.1kg" },
      ],
    },
  },
  "langtang-valley": {
    id: "langtang-valley",
    name: "Langtang Valley Trek",
    region: "Langtang Region",
    meta: {
      duration: "7 Days",
      difficulty: "Moderate",
      maxElevation: "4773m",
      bestSeasons: "March - May, September - November",
      startingPoint: "Syafrubesi",
    },
    overview:
      "The Langtang Valley Trek is one of Nepal’s most rewarding short Himalayan journeys, combining dramatic mountain scenery, Tamang culture, riverside trails, and high alpine landscapes in just one week. Starting with an overland drive from Kathmandu to Syabrubesi, the route follows the Langtang Khola through dense bamboo, oak, and rhododendron forests before opening into wide yak pastures and glacial valleys. As you move higher, the scenery shifts from deep woodland and waterfalls to prayer walls, Buddhist landmarks, and sweeping views of Langtang Lirung and surrounding peaks. The trek culminates at Kyanjin Gompa, a beautiful high-mountain settlement, and a hike to Kyanjin Ri, where sunrise views over glaciers, ridges, and snow-covered summits create the true highlight of the trip. This 7-day version is a compact and scenic adventure, ideal for trekkers who want a classic Nepal experience without the longer duration of Everest or Annapurna routes.",
    timeline: [
      {
        day: "01",
        title: "Kathmandu to Syafrubesi",
        description:
          "Drive from Kathmandu to Syafrubesi, the usual starting point of the Langtang Valley Trek. There are two common road routes to reach Syafrubesi. The usual public bus route goes via Kalanki - Nagdhunga - Galchi - Betrawati - Dhunche before reaching Syafrubesi. Private vehicles and jeeps may also use the Tokha-side road via Tokha - Chhahare / Dhikure - Trishuli - Dhunche - Syafrubesi, which can be shorter and more efficient in good road conditions. Public buses usually leave early in the morning, while private jeeps offer more flexibility and a faster ride.\n\nAlternative Route:\nIf you have a private vehicle, you can continue beyond Syafrubesi for about 45 minutes to 1 hour to reach Sherpagaun. This is a more scenic option and gives you the choice to stay either in Syafrubesi or in Sherpagaun, depending on your transport arrangement and arrival time.\n\nTransport Note:\nPublic buses usually depart from the Gongabu / Machhapokhari area in the morning. Shared jeeps also leave from the same area and are fast		er than buses, while private jeeps can start directly from your hotel or arranged pickup point.",
        stats: { elevation: "1,460m / 2,563m", duration: "7-10 hours(drive)" },
        coordinates: [28.1657291, 85.3418267],
      },
      {
        day: "02",
        title: "Syafrubesi to Rimche / Lama Hotel",
        description:
          "Begin trekking from Syafrubesi and follow the classic trail along the Langtang Khola through bamboo, oak, and rhododendron forest. The trail climbs steadily toward Rimche, with several suspension bridges and riverside sections along the way. Rimche has only limited accommodation, so many trekkers continue another 15-30 minutes to Lama Hotel, where there are more lodge options.\n\nIf you continued to Sherpagaun on Day 1 by private jeep, today’s walk becomes more scenic and generally easier. The upper trail from Sherpagaun toward Rimche offers better views, less steep climbing, more gradual walking, and some downhill sections before reaching Rimche and Lama Hotel.",
        stats: {
          elevation: "2,470m",
          duration: "6-7 hours from Syafrubesi / 4-5 hours from Sherpagaun",
        },
        coordinates: [28.1612117, 85.4296495],
      },

      {
        day: "03",
        title: "Lama Hotel to Langtang Village",
        description:
          "Leaving the forest behind, the trail climbs past riverside sections and open clearings toward Ghodatabela, where the valley begins to feel broader and more alpine. As you continue higher, mountain views start to open up and the cultural atmosphere becomes stronger with chortens, mani walls, and traditional settlements. By the time you reach Langtang Village, you are fully in the heart of the valley, surrounded by dramatic peaks and a distinctly Tibetan-influenced mountain landscape.",
        stats: { elevation: "3,430m", duration: "6-7 hours" },
        coordinates: [28.2157142, 85.5030007],
      },
      {
        day: "04",
        title: "Langtang Village to Kyanjin Gompa (with nearby visits)",
        description:
          "This is a shorter trekking day, which gives you time to explore both Langtang and Kyanjin areas. Before leaving Langtang, you can wander through the village, observe local life, visit prayer walls and nearby viewpoints, and enjoy the open valley scenery. After a gradual ascent, you reach Kyanjin Gompa, a spectacular high settlement surrounded by snow peaks. Once there, you can visit the monastery area, the local cheese factory, nearby yak pastures, and take a gentle acclimatization walk toward the Lirung glacier moraine or the lower ridge trails around the village.",
        stats: {
          elevation: "3,870m",
          duration: "3-4 hours trek / 1-2 hours exploration",
        },
        coordinates: [28.2124247, 85.5672161],
      },
      {
        day: "05",
        title: "Kyanjin Gompa to Kyanjin Ri and back to Kyanjin",
        description:
          "Today is the highlight of the trek. You start early for the climb above Kyanjin Gompa toward Kyanjin Ri, one of the best viewpoints in Langtang. The trail is steep from the beginning and the first major viewpoint is Lower Kyanjin Ri at around 4,400m. This lower point already offers excellent views of Langtang Lirung, the valley below, surrounding ridges, and glacial terrain. From here, those feeling strong can continue higher to the main Kyanjin Ri viewpoint at 4,773m. The final section is steeper and more demanding because of the altitude, but the panorama becomes even wider and more dramatic. After spending time at the viewpoint for photos and rest, you descend carefully to Kyanjin Gompa for a relaxed afternoon and overnight stay.",
        stats: { elevation: "4,773m", duration: "4-6 hours round trip" },
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
        title: "Forest to Glacier Landscapes",
        description:
          "Walk from subtropical river valleys and bamboo forests into open alpine terrain, glacier-fed scenery, and dramatic Himalayan viewpoints.",
      },
      {
        title: "Tamang Culture and Buddhist Heritage",
        description:
          "Experience the living culture of the Tamang people, whose villages give Langtang Valley its unique identity. Along the trail, you will see prayer flags, mani walls, chortens, monasteries, and homes shaped by a strong Tibetan Buddhist influence. Tamang culture is also expressed through language, oral storytelling, hospitality, music, and dance, especially the rhythm of the damphu and the traditional Tamang selo performed during community gatherings and celebrations. One of the most important festivals is Sonam Lhosar, the Tamang New Year, usually celebrated in January or February, when families come together for blessings, feasting, music, and cultural performances. Trekking through Langtang is therefore not only a mountain journey, but also a chance to better understand a resilient Himalayan community and its deeply rooted traditions.",
      },
      {
        title: "Kyanjin Gompa and Kyanjin Ri",
        description:
          "Stay in one of Nepal’s most beautiful high-mountain settlements and climb to a panoramic ridge above the valley for the trek’s best views.",
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
        title: "Optional Extra Day to Tserko Ri",
        description:
          "If you stay one more night in Kyanjin Gompa, you can add a day hike to Tserko Ri, one of the most spectacular viewpoints in the Langtang region. The trail climbs into a more open and rugged alpine landscape, and the reward is a huge Himalayan panorama with glaciers, icefalls, sweeping valley views, and an even more remote high-mountain feeling. Tserko Ri is longer and more demanding than Kyanjin Ri, but its beauty makes it a highly rewarding extension for trekkers who have the time and energy.",
      },
      // {
      //   title: "Short but Powerful Himalayan Trek",
      //   description:
      //     "Enjoy a compact 7-day route that delivers classic Nepal trekking scenery and culture without the longer commitment of bigger expeditions.",
      // },
    ],

    seasonalPlanning: [
      { month: "Jan", condition: "Extremely Cold / Heavy Snow on Passes" },
      { month: "Feb", condition: "Freezing Temperatures / Quiet Trails" },
      { month: "Mar", condition: "Spring Bloom / Vibrant Rhododendrons" },
      { month: "Apr", condition: "Perfect Climbing Weather / Peak Season" },
      { month: "May", condition: "Warm Temperatures / Pre-Monsoon Views" },
      { month: "Jun", condition: "Beginning of Monsoon / Cloudy Skies" },
      { month: "Jul", condition: "Heavy Rain / Lush Greenery / Leeches" },
      { month: "Aug", condition: "Peak Monsoon / Wet & Muddy Trails" },
      { month: "Sep", condition: "Post-Monsoon / Crisp & Fresh Air" },
      { month: "Oct", condition: "Crystal Clear Skies / Most Popular Month" },
      { month: "Nov", condition: "Cool & Stable / Excellent Visibility" },
      { month: "Dec", condition: "Winter Chill / Crystal Clear Blue Skies" },
    ],
    gallery: [
      {
        id: "img_01",
        url: "/images/langtang/IMG_6112.webp",
        alt: "Langtang ",
        type: "hero",
      },
      {
        id: "img_02",
        url: "/images/langtang/IMG_6198.webp",
        alt: "En route to Pung Gyen Gompa in Manaslu Circuit Trek.",
        type: "landscape",
      },
      {
        id: "img_03",
        url: "/images/langtang/IMG_6283.webp",
        alt: "Manaslu, Samagaun, Nepal",
        type: "portrait",
      },
      {
        id: "img_04",
        url: "/images/langtang/IMG_6299.webp",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_05",
        url: "/images/langtang/IMG_6368.webp",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_06",
        url: "/images/langtang/IMG_6312.webp",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_07",
        url: "/images/langtang/IMG_6406.webp",
        alt: "Langtang ",
        type: "hero",
      },
      {
        id: "img_08",
        url: "/images/langtang/IMG_6411.webp",
        alt: "En route to Pung Gyen Gompa in Manaslu Circuit Trek.",
        type: "landscape",
      },
      {
        id: "img_09",
        url: "/images/langtang/IMG_6413.webp",
        alt: "Manaslu, Samagaun, Nepal",
        type: "portrait",
      },
      {
        id: "img_10",
        url: "/images/langtang/IMG_6426.webp",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_11",
        url: "/images/langtang/IMG_6433.webp",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_12",
        url: "/images/langtang/IMG_6501.webp",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
       {
        id: "img_13",
        url: "/images/langtang/IMG_6517.webp",
        alt: "Manaslu, Samagaun, Nepal",
        type: "portrait",
      },
      {
        id: "img_14",
        url: "/images/langtang/IMG_6596.webp",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_015",
        url: "/images/langtang/IMG_6368.webp",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_16",
        url: "/images/langtang/IMG_6447.webp",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
       {
        id: "img_17",
        url: "/images/langtang/IMG_6823.webp",
        alt: "camping ",
        type: "hero",
      },
      {
        id: "img_18",
        url: "/images/langtang/IMG_6905.jpg",
        alt: "En route to Pung Gyen Gompa in Manaslu Circuit Trek.",
        type: "landscape",
      },
      {
        id: "img_19",
        url: "/images/langtang/IMG_6909.webp",
        alt: "Manaslu, Samagaun, Nepal",
        type: "portrait",
      },
      {
        id: "img_20",
        url: "/images/langtang/IMG_6925.jpg",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_21",
        url: "/images/langtang/IMG_6930.webp",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_22",
        url: "/images/langtang/IMG_6931.jpg",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_23",
        url: "/images/langtang/IMG_6957.webp",
        alt: "Langtang ",
        type: "hero",
      },
      {
        id: "img_24",
        url: "/images/langtang/IMG_6987.webp",
        alt: " Cheese Factory",
        type: "landscape",
      },
      {
        id: "img_25",
        url: "/images/langtang/IMG_7013.webp",
        alt: "Manaslu, Samagaun, Nepal",
        type: "portrait",
      },
      {
        id: "img_26",
        url: "/images/langtang/IMG_7043.jpeg",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_27",
        url: "/images/langtang/IMG_7053.jpg",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_28",
        url: "/images/langtang/IMG_7067.jpg",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
       {
        id: "img_29",
        url: "/images/langtang/IMG_7095.jpg",
        alt: "Manaslu, Samagaun, Nepal",
        type: "portrait",
      },
      {
        id: "img_30",
        url: "/images/langtang/IMG_7109.webp",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_31",
        url: "/images/langtang/IMG_7133.webp",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_32",
        url: "/images/langtang/IMG_7135.webp",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_33",
        url: "/images/langtang/IMG_7302.jpg",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
        {
        id: "img_34",
        url: "/images/langtang/IMG_7324.jpg",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_35",
        url: "/images/langtang/IMG_7327.webp",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
    ],
    gearChecklist: {
      essentials: [
        { item: "Down Jacket (Minimum 800 Fill Power)", weight: "650g" },
        { item: "Sleeping Bag (Comfort Rated to -20°C)", weight: "1.4kg" },
        { item: "Sturdy Gore-Tex Trekking Boots", weight: "1.2kg" },
        {
          item: "Merino Wool Thermal Base Layers (Top & Bottom)",
          weight: "400g",
        },
        { item: "UV 400 Protection Sunglasses", weight: "45g" },
        { item: "Hard-Shell Waterproof Jacket", weight: "500g" },
        { item: "Personal First Aid Kit & High Altitude Meds", weight: "350g" },
      ],
      optional: [
        { item: "Trekking Poles", weight: "0.5kg" },
        { item: "Power Bank", weight: "0.4kg" },
        { item: "Headlamp", weight: "0.1kg" },
      ],
    },
  },
};
