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
      { title: 'Kathmandu → Lukla → Phakding', duration: '3-4 hours' },
      { title: 'Phakding → Namche Bazaar', duration: '6-7 hours' },
      { title: 'Acclimatization Day · Namche Bazaar', duration: '3-4 hours' },
      { title: 'Namche Bazaar → Tengboche', duration: '5-6 hours' },
      { title: 'Tengboche → Dingboche', duration: '5-6 hours' },
      { title: 'Acclimatization Day · Dingboche', duration: '4-5 hours' },
      { title: 'Dingboche → Lobuche', duration: '5-6 hours' },
      {
        title: 'Lobuche → Gorakshep → Everest Base Camp',
        duration: '8-9 hours',
      },
      { title: 'Gorakshep → Kala Patthar → Pheriche', duration: '7-8 hours' },
      { title: 'Pheriche → Namche Bazaar', duration: '6-7 hours' },
      { title: 'Namche Bazaar → Lukla', duration: '7-8 hours' },
      { title: 'Lukla → Kathmandu', duration: '35-min flight' },
    ],
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
      { title: 'Kathmandu → Machha Khola', duration: '8-10 hrs drive' },
      { title: 'Machha Khola → Jagat', duration: '6-7 hrs' },
      { title: 'Jagat → Deng', duration: '5-7 hrs' },
      { title: 'Deng → Namrung', duration: '5-7 hrs' },
      { title: 'Namrung → Lho', duration: '4-5 hrs' },
      { title: 'Lho → Samagaon', duration: '3-5 hrs' },
      {
        title: 'Acclimatization Day · Samagaon',
        duration: '3-5 hrs optional hike',
      },
      { title: 'Samagaon → Samdo', duration: '3-4 hrs' },
      { title: 'Samdo → Dharamsala', duration: '3-4 hrs' },
      { title: 'Dharamsala → Larkya La → Bimthang', duration: '8-10 hrs' },
      { title: 'Bimthang → Tilije', duration: '5-7 hrs' },
      { title: 'Tilije → Dharapani → Besisahar', duration: '4-5 hrs + drive' },
      { title: 'Besisahar → Kathmandu', duration: '6-8 hrs drive' },
    ],
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
        title: 'Kathmandu → Syabrubesi',
        duration: 'Full-day overland journey',
      },
      { title: 'Syabrubesi → Lama Hotel', duration: '6-7 hrs' },
      { title: 'Lama Hotel → Langtang Village', duration: '6-7 hrs' },
      { title: 'Langtang Village → Kyanjin Gompa', duration: '3-4 hrs' },
      {
        title: 'Kyanjin Gompa → Kyanjin Ri → Kyanjin Gompa',
        duration: '4-6 hrs round trip',
      },
      { title: 'Kyanjin Gompa → Lama Hotel', duration: '6-7 hrs' },
      {
        title: 'Lama Hotel → Syabrubesi → Kathmandu',
        duration: '4-5 hrs trek + variable drive',
      },
    ],
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
      { title: 'Pokhara → Chhomrong', duration: '3 hrs' },
      { title: 'Chhomrong → Dovan', duration: '5-6 hrs' },
      { title: 'Dovan → Deurali', duration: '3-4 hrs' },
      { title: 'Deurali → Machhapuchhre Base Camp (MBC)', duration: '3-4 hrs' },
      { title: 'MBC → Annapurna Base Camp (ABC)', duration: '2-3 hrs' },
      { title: 'ABC → Bamboo (Descent)', duration: '6-7 hrs' },
      {
        title: 'Bamboo → Jhinu Danda & Drive → Pokhara',
        duration: '5-6 hrs trek + 2-3 hrs drive',
      },
    ],
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
        title: 'Pokhara → Birethanti → Tikhedhunga / Ulleri',
        duration: '4-5 hrs',
      },
      { title: 'Ulleri → Banthanti → Ghorepani', duration: '5-6 hrs' },
      { title: 'Ghorepani → Poon Hill → Tadapani', duration: '6-7 hrs' },
      { title: 'Tadapani → Ghandruk', duration: '3-4 hrs' },
      { title: 'Ghandruk → Birethanti → Pokhara', duration: '4-5 hrs' },
    ],
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
      { title: 'Pokhara → Kande → Forest Camp', duration: '5-6 hrs' },
      { title: 'Forest Camp → Badal Danda', duration: '4-5 hrs' },
      { title: 'Badal Danda → High Camp', duration: '3-4 hrs' },
      {
        title: 'High Camp → Mardi Himal Base Camp → Badal Danda / Low Camp',
        duration: '7-8 hrs',
      },
      { title: 'Low Camp → Sidhing → Pokhara', duration: '4-5 hrs' },
    ],
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
      { title: 'Kathmandu → Besisahar', duration: '6-8 hrs drive' },
      { title: 'Besisahar → Chame', duration: '5-8 hrs' },
      { title: 'Chame → Upper Pisang', duration: '5-6 hrs' },
      { title: 'Upper Pisang → Manang', duration: '5-6 hrs' },
      { title: 'Acclimatization Day · Manang', duration: '3-5 hrs' },
      { title: 'Manang → Shree Kharka', duration: '4-5 hrs' },
      { title: 'Shree Kharka → Tilicho Base Camp', duration: '4-5 hrs' },
      {
        title: 'Tilicho Base Camp → Tilicho Lake → Shree Kharka',
        duration: '7-8 hrs',
      },
      { title: 'Shree Kharka → Manang', duration: '4-5 hrs' },
      { title: 'Manang → Upper Pisang', duration: '6-7 hrs' },
      { title: 'Upper Pisang → Chame → Kathmandu', duration: '4-5 hrs trek' },
    ],
  },
};
