import { TrekDetail } from "@/types/trek";

export const TREK_DETAILS: Record<string, TrekDetail> = {
  "ebc-trek": {
    id: "ebc-trek",
    name: "Everest Base Camp (EBC) Trek",
    meta: {
      duration: "14 Days",
      difficulty: "Strenuous",
      maxElevation: "5,364m",
      bestSeasons: "March - May, September - November",
      startingPoint: "Lukla (Tenzing-Hillary Airport)",
    },
    overview:
      "The Everest Base Camp trek is more than just a hike; it is a pilgrimage to the highest point on Earth and a deep dive into the heart of the Himalayas. Beginning with a pulse-pounding flight into the mountain-side airstrip of Lukla, the journey takes you through the sacred Sagarmatha National Park, a UNESCO World Heritage site. You will traverse high suspension bridges draped in prayer flags, navigate ancient glacial moraines, and walk through stone-walled villages that have remained unchanged for centuries. Beyond the physical challenge of reaching 5,364 meters, the trek offers a profound cultural encounter with the Sherpa people, whose hospitality and spiritual resilience are as legendary as the peaks they call home. From the lush rhododendron forests of the lower valleys to the stark, moon-like landscapes of the high alpine zone, every step provides a front-row seat to the world’s most iconic summits, including Lhotse, Nuptse, and the majestic Ama Dablam.",
    timeline: [
      {
        day: "01",
        title: "Kathmandu to Lukla & Trek to Phakding",
        description:
          "Your adventure begins with a breathtaking 35-minute flight from Kathmandu to Lukla, often cited as one of the most scenic flights in the world. Upon landing at the Tenzing-Hillary Airport, you’ll meet your trekking team and begin the walk through the bustling village of Lukla. The trail descends gently, passing through small Sherpa hamlets like Chheplung and Ghat. You will follow the path of the Dudh Koshi river, crossing your first suspension bridges and smelling the fresh pine air, eventually reaching the riverside village of Phakding for your first night in a mountain teahouse.",
        stats: { elevation: "2,610m", duration: "3-4 hours" },
      },
      {
        day: "02",
        title: "Phakding to Namche Bazaar",
        description:
          "Today is a rigorous climb that serves as your introduction to the high Himalayas. You will crisscross the Dudh Koshi river multiple times over high suspension bridges, including the famous Hillary Bridge. After passing through the entrance of Sagarmatha National Park at Monjo, the trail drops to the riverbed before beginning a long, zig-zagging ascent through dense forests. Halfway up, you may catch your very first glimpse of Mount Everest peeking through the trees. The day ends as you emerge into the horseshoe-shaped amphitheater of Namche Bazaar, the vibrant commercial hub of the Khumbu region.",
        stats: { elevation: "3,440m", duration: "6-7 hours" },
      },
      {
        day: "03",
        title: "Acclimatization Day: Exploring Namche",
        description:
          "Acclimatization is the golden rule of high-altitude trekking. Instead of pushing higher, you spend the day in Namche to let your body adjust to the thinner air. A popular activity is a steep hike up to the Everest View Hotel, where you can sit on the terrace and enjoy a panoramic view of Everest, Lhotse, and Ama Dablam. On the way back, you can visit the Sherpa Culture Museum or the Everest Photo Gallery. The afternoon is best spent exploring the local bakeries, gear shops, and cafes of Namche, soaking in the unique mountain atmosphere.",
        stats: { elevation: "3,440m", duration: "3-4 hours" },
      },
      {
        day: "04",
        title: "Namche Bazaar to Tengboche",
        description:
          "The trail out of Namche is spectacular, winding around the mountainside with the giant peaks standing guard across the valley. After an easy walk to Kyanjuma, the trail descends steeply to the river at Phunki Tenga for lunch. From here, it is a steady, two-hour climb through rhododendron and silver fir forests to Tengboche. As you reach the ridge, you are greeted by the magnificent Tengboche Monastery, the largest in the region. The view from the monastery grounds, with Ama Dablam soaring directly behind it, is widely considered one of the most beautiful in the world.",
        stats: { elevation: "3,860m", duration: "5-6 hours" },
      },
      {
        day: "05",
        title: "Tengboche to Dingboche",
        description:
          "Leaving Tengboche, the trail descends through a forest of birch, conifers, and rhododendrons. The path is dotted with mani walls (stones carved with Buddhist prayers) as you head toward the village of Pangboche. You are now leaving the tree line behind, and the landscape becomes noticeably more arid and alpine. Crossing the Imja Khola, you begin a gradual climb into the Chukhung Valley. The day ends in Dingboche, a beautiful village protected by stone walls to shelter crops from the cold mountain winds.",
        stats: { elevation: "4,410m", duration: "5-6 hours" },
      },
      {
        day: "06",
        title: "Second Acclimatization Day: Dingboche",
        description:
          "To prepare for the push above 5,000 meters, you spend another day acclimatizing. The most effective way to do this is to 'hike high, sleep low.' Most trekkers climb the steep ridge of Nangkartshang Peak, which rises directly above the village. From the summit (5,100m), you are rewarded with a 360-degree view of the surrounding giants, including the world's fourth and fifth highest peaks, Lhotse and Makalu. The rest of the day is for resting, hydrating, and mentally preparing for the higher altitudes ahead.",
        stats: { elevation: "4,410m", duration: "4-5 hours" },
      },
      {
        day: "07",
        title: "Dingboche to Lobuche",
        description:
          "The trail today is a steady climb across a wide, glacier-carved valley. You will reach the small settlement of Thukla, situated at the foot of the massive Khumbu Glacier. After lunch, you face the 'Thukla Pass'—a steep, challenging climb to the top of the terminal moraine. Here, you will find a somber and beautiful memorial site with hundreds of stone chortens dedicated to climbers who lost their lives on Everest. From the pass, the trail levels out as you follow the lateral moraine of the glacier to reach the small collection of lodges at Lobuche.",
        stats: { elevation: "4,910m", duration: "5-6 hours" },
      },
      {
        day: "08",
        title: "Lobuche to Gorak Shep & Everest Base Camp",
        description:
          "This is the most significant day of the trek. You start early, walking across rocky terrain and frozen stream beds toward Gorak Shep, the final outpost of civilization. After a quick meal, you push forward onto the Khumbu Glacier moraine toward Everest Base Camp. The trail is rugged and constantly shifting due to the movement of the ice below. Reaching Base Camp (5,364m) is an emotional milestone. You will stand among the colorful tents of expedition teams, surrounded by the towering walls of the Khumbu Icefall, before returning to Gorak Shep to spend the night.",
        stats: { elevation: "5,364m", duration: "8-9 hours" },
      },
      {
        day: "09",
        title: "Gorak Shep to Kala Patthar & Pheriche",
        description:
          "Before dawn, you begin a grueling climb up the black slopes of Kala Patthar. This is the highest point of the trek, and while the climb is difficult in the freezing morning air, the reward is unmatched. As the sun rises, it illuminates the south face of Mount Everest, providing the clearest and most intimate view of the summit possible for trekkers. After descending back to Gorak Shep for breakfast, you begin the long journey down the valley, losing elevation quickly as you walk to the windy but warmer village of Pheriche.",
        stats: { elevation: "5,545m", duration: "7-8 hours" },
      },
      {
        day: "10",
        title: "Pheriche to Namche Bazaar",
        description:
          "Today's trek is a long descent, but the increasing oxygen levels make you feel surprisingly energetic. You’ll pass back through the forests of Tengboche and descend to the river before climbing the hill on the opposite side. The trail winds around the mountain, eventually leading you back into the familiar streets of Namche Bazaar. After days of basic living in the high mountains, the chance to visit a bakery for a fresh pastry or a cafe with Wi-Fi is a welcome luxury.",
        stats: { elevation: "3,440m", duration: "6-7 hours" },
      },
      {
        day: "11",
        title: "Namche Bazaar to Lukla",
        description:
          "The final day of trekking is a long one as you retrace your steps back to where it all began. You will descend the 'Namche Hill' for the last time, cross the Hillary Bridge, and walk through the villages of Monjo and Phakding. The final hour involves a gentle but tiring uphill climb to reach Lukla. In the evening, it is traditional to have a farewell dinner with your guides and porters to celebrate the successful completion of the journey and the bonds formed along the trail.",
        stats: { elevation: "2,860m", duration: "7-8 hours" },
      },
      {
        day: "12",
        title: "Lukla to Kathmandu",
        description:
          "You bid farewell to the mountains with one last scenic flight back to Kathmandu. As the small plane lifts off from the short runway, you can look out the window at the massive peaks you just spent two weeks exploring. Upon arrival in Kathmandu, you will be transferred to your hotel. The rest of the day is yours to enjoy a well-deserved hot shower, a comfortable bed, and perhaps a celebratory meal in the Thamel district.",
        stats: { elevation: "1,400m", duration: "45 min flight" },
      },
      {
        day: "13",
        title: "Contingency / Buffer Day",
        description:
          "Flights in and out of Lukla are highly dependent on weather conditions and can often be delayed or canceled due to fog or high winds. This day is built into the itinerary as a safety net. If your flight on Day 12 went as planned, this day can be used for sightseeing in Kathmandu—visiting the Pashupatinath Temple, the Boudhanath Stupa, or simply shopping for souvenirs in the local markets.",
        stats: { elevation: "1,400m", duration: "Flexible" },
      },
      {
        day: "14",
        title: "Final Departure",
        description:
          "Your Himalayan journey comes to an end today. A representative will pick you up from your hotel and drive you to Tribhuvan International Airport for your flight home. As you fly away, you carry with you the memories of the world's highest peaks, the sound of yak bells, and the incredible sense of achievement that comes from reaching Everest Base Camp.",
        stats: { elevation: "1,400m", duration: "Airport Transfer" },
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
        url: "https://api.trekking-backend.com/v1/assets/ebc/hero-landscape.jpg",
        alt: "Everest Base Camp and Khumbu Icefall",
        type: "hero",
      },
      {
        id: "img_02",
        url: "https://api.trekking-backend.com/v1/assets/ebc/namche-aerial.jpg",
        alt: "Namche Bazaar Sherpa Capital",
        type: "landscape",
      },
      {
        id: "img_03",
        url: "https://api.trekking-backend.com/v1/assets/ebc/monastery-view.jpg",
        alt: "Tengboche Monastery with Ama Dablam",
        type: "portrait",
      },
      {
        id: "img_04",
        url: "https://api.trekking-backend.com/v1/assets/ebc/hillary-bridge.jpg",
        alt: "Trekking over Hillary Suspension Bridge",
        type: "landscape",
      },
      {
        id: "img_05",
        url: "https://api.trekking-backend.com/v1/assets/ebc/summit-sunrise.jpg",
        alt: "Sunrise over Mount Everest from Kala Patthar",
        type: "portrait",
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
    },
  },

  // Future Additions go here:
  // "abc-trek": { ...details here... },
  // "manaslu-circuit": { ...details here... },
};
