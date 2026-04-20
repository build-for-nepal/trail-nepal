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
        // price: "NPR 4,500",
      },
      {
        day: "02",
        title: "Phakding to Namche Bazaar",
        description:
          "Today is a rigorous climb that serves as your introduction to the high Himalayas. You will crisscross the Dudh Koshi river multiple times over high suspension bridges, including the famous Hillary Bridge. After passing through the entrance of Sagarmatha National Park at Monjo, the trail drops to the riverbed before beginning a long, zig-zagging ascent through dense forests. Halfway up, you may catch your very first glimpse of Mount Everest peeking through the trees. The day ends as you emerge into the horseshoe-shaped amphitheater of Namche Bazaar, the vibrant commercial hub of the Khumbu region.",
        // accommodations: [{ name: "Hotel Namche" }, { name: "Khumbu Lodge" }],
        stats: { elevation: "3,440m", duration: "6-7 hours", distance: "11km" },
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
        // price: "NPR 6,500",
      },
      {
        day: "09",
        title: "Gorak Shep to Kala Patthar & Pheriche",
        description:
          "Before dawn, you begin a grueling climb up Kala Patthar (5,545m). This is the highest point of the trek, and while the climb is difficult in the freezing dark, the reward is unmatched. As the sun rises, it illuminates the entire south face of Mount Everest. After descending back to Gorak Shep for breakfast, you begin the long journey down the valley to the lower, warmer altitude of Pheriche.",
        // accommodations: [{ name: "Himalayan Hotel" }, { name: "Pumori Lodge" }],
        stats: {
          elevation: "4,371m",
          duration: "7-8 hours",
          distance: "13km",
          note: "Sleeping elevation",
        },
        // price: "NPR 5,000",
      },
      {
        day: "10",
        title: "Pheriche to Namche Bazaar",
        description:
          "Today's trek is a long descent, but the increasing oxygen levels make you feel surprisingly energetic. You’ll pass back through the forests of Tengboche and descend to the river before climbing the hill on the opposite side. The trail winds around the mountain, eventually leading you back into the familiar, bustling streets of Namche Bazaar.",
        // accommodations: [{ name: "Hotel Namche" }],
        stats: { elevation: "3,440m", duration: "6-7 hours", distance: "14km" },
        // price: "NPR 5,500",
      },
      {
        day: "11",
        title: "Namche Bazaar to Lukla",
        description:
          "The final day of trekking is a long one as you retrace your steps back to where it all began. You will descend the 'Namche Hill' for the last time, cross the Hillary Bridge, and walk through the villages of Monjo and Phakding. The final hour involves a gentle but tiring uphill climb to reach Lukla, where you can finally celebrate the completion of your trek.",
        // accommodations: [{ name: "Paradise Lodge" }, { name: "Khumbu Resort" }],
        stats: { elevation: "2,860m", duration: "7-8 hours", distance: "18km" },
        // price: "NPR 5,000",
      },
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
      duration: "14 Days",
      difficulty: "Challenging",
      maxElevation: "5,106m",
      bestSeasons: "March - May, September - November",
      startingPoint: "Kathmandu",
    },
    overview:
      "The Manaslu Circuit is Nepal's most compelling wilderness loop, tracing a complete circle around Manaslu — the world's eighth-highest peak at 8,163 metres. The journey transitions dramatically from subtropical river gorges with cascading waterfalls to high alpine landscapes and windswept silence. Following the Budhi Gandaki river, you'll traverse terrain inhabited by Gurung, Nubri, and Tsum communities with deep-rooted Tibetan Buddhist traditions. As a restricted area trek, it offers a much quieter, more pristine alternative to the Everest or Annapurna regions. The climax of the adventure is the crossing of the formidable Larkya La Pass at 5,106 metres, offering a breathtaking panoramic view before descending into the lush meadows of Bimthang.",
    timeline: [
      {
        day: "01",
        title: "Kathmandu to Soti Khola",
        description:
          "Early departure from Kathmandu by jeep through Arughat and along the Budhi Gandaki river valley.",
        stats: {
          elevation: "700m",
          duration: "7-8 hours (drive)",
          distance: "-",
        },
      },
      {
        day: "02",
        title: "Soti Khola to Machha Khola",
        description:
          "Trail through banana groves, millet fields, and Gurung settlements crossing suspension bridges.",
        stats: { elevation: "930m", duration: "5-6 hours", distance: "14km" },
      },
      {
        day: "03",
        title: "Machha Khola to Jagat",
        description:
          "Trail follows the river through Khorlabesi and Tatopani hot springs before reaching Jagat.",
        stats: { elevation: "1,340m", duration: "6-7 hours", distance: "22km" },
      },
      {
        day: "04",
        title: "Jagat to Deng",
        description:
          "The valley narrows and Tibetan cultural influence becomes visible along the trail.",
        stats: { elevation: "1,860m", duration: "6-7 hours", distance: "19km" },
      },
      {
        day: "05",
        title: "Deng to Namrung",
        description:
          "Steady climb through villages and dense forests with views of Sringi Himal.",
        stats: { elevation: "2,630m", duration: "6-7 hours", distance: "18km" },
      },
      {
        day: "06",
        title: "Namrung to Samagaon via Lho",
        description:
          "Manaslu's massive south face becomes visible at Lho village before reaching Samagaon.",
        stats: { elevation: "3,530m", duration: "6-7 hours", distance: "18km" },
      },
      {
        day: "07",
        title: "Acclimatization Day – Samagaon",
        description:
          "Hike to Pungyen Gompa or toward Manaslu Base Camp for acclimatization.",
        stats: {
          elevation: "3,530m",
          duration: "4-5 hours",
          distance: "5km",
          note: "Acclimatization Indicated",
        },
      },
      {
        day: "08",
        title: "Samagaon to Samdo",
        description:
          "Trail crosses open glacial valleys toward the Tibetan border settlement.",
        stats: { elevation: "3,875m", duration: "3-4 hours", distance: "9km" },
      },
      {
        day: "09",
        title: "Acclimatization Day – Samdo",
        description:
          "Acclimatization hike toward the old Tibet trade route for high altitude adjustment.",
        stats: {
          elevation: "3,875m",
          duration: "3-4 hours",
          distance: "4km",
          note: "Acclimatization Indicated",
        },
      },
      {
        day: "10",
        title: "Samdo to Dharamsala",
        description:
          "Climb across alpine terrain to Larkya La Base Camp (also known as Phedi).",
        stats: { elevation: "4,460m", duration: "3-4 hours", distance: "7km" },
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
      },
      {
        day: "12",
        title: "Bimthang to Tilje",
        description:
          "Long descent through rhododendron forest into the Marsyangdi valley.",
        stats: { elevation: "2,300m", duration: "6-7 hours", distance: "20km" },
      },
      {
        day: "13",
        title: "Tilje to Dharapani",
        description:
          "Walk to Dharapani where the Manaslu and Annapurna trails meet.",
        stats: { elevation: "1,860m", duration: "3-4 hours", distance: "8km" },
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
        id: "m_img_01",
        url: "/images/erik-OwJ6Cn_DnHM-unsplash.jpg",
        alt: "Manaslu Peak and Larkya La Pass",
        type: "hero",
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
};
