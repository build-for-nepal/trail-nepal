import type { CraftTourDetail } from '@/types/craft';

// Text is verbatim from the operator's workshop documents. `summary` is the
// "Trip Highlights" Description and must match the CRAFT_TOURS card exactly.
export const CRAFT_TOUR_DETAILS: Record<string, CraftTourDetail> = {
  'bhaktapur-pottery': {
    id: 'bhaktapur-pottery',
    name: 'Pottery Making in Bhaktapur',
    summary:
      "Discover traditional pottery-making in Bhaktapur's historic Pottery Square. Meet local artisans, learn traditional clay-shaping techniques, and try making your own pottery piece while exploring the city's living Newari craft heritage.",
    region: 'Bhaktapur, Kathmandu Valley',
    meta: {
      duration: '1–2 Hours',
      difficulty: 'Easy',
      // Not in the document; same valley elevation as the Kathmandu Valley tour.
      maxElevation: '~1400m',
      bestSeasons: 'Year-Round',
      startingPoint: 'Pottery Square, Bhaktapur',
      tripFacts: {
        start: 'Pottery Square, Bhaktapur',
        cities: 'Bhaktapur',
        tourType: 'Arts and Crafts',
        transport: 'Walking',
        terrain: 'Brick-paved streets',
      },
    },
    overview:
      "Bhaktapur's Pottery Square, locally known as Talako, is one of the Kathmandu Valley's best-known centres of traditional pottery. The square is surrounded by historic Newari buildings and open courtyards where artisans shape clay into everyday vessels, decorative objects, and traditional household items.\n\nThe experience begins at Pottery Square, where visitors can observe potters working on traditional wheels and see rows of clay pots drying in the open air. A hands-on workshop offers the opportunity to learn basic pottery-making techniques and try shaping clay under the guidance of a local artisan.\n\nBeyond the workshop, the surrounding historic centre provides opportunities to explore traditional architecture, temples, courtyards, and local craft shops. Together, the experience combines practical learning with an introduction to Bhaktapur's cultural heritage.",
    // The workshop pin plus the document's "Places to Explore Nearby".
    // Coordinates are OpenStreetMap values (lat, lng) resolved via Nominatim;
    // the first four match the Kathmandu Valley tour's pins.
    // Suryamadhi Pottery Area is not in OSM under any spelling tried, so it is
    // left off the map rather than given a guessed position.
    sites: [
      {
        order: 1,
        name: 'Bhaktapur Pottery Square',
        // OSM node/12287948902 (tourism=attraction, "Pottery Square (Talako Tole)")
        coordinates: [27.669897, 85.427743],
        description:
          'Pottery Square is a historic Bhaktapur neighbourhood known for its traditional pottery-making heritage.',
        isHighlight: true,
        dayId: 'workshop',
      },
      {
        order: 2,
        name: 'Taumadhi Square',
        // OSM way/85470341 (amenity=place_of_worship), Nyatapola Temple, which
        // stands in the square; the square itself has no OSM feature.
        coordinates: [27.6714098, 85.4293725],
        description:
          'A historic square featuring the iconic Nyatapola Temple, Bhairavnath Temple, and traditional Newari architecture.',
      },
      {
        order: 3,
        name: 'Bhaktapur Durbar Square',
        // OSM way/1192827651 (place=square)
        coordinates: [27.672078, 85.4281306],
        description:
          'Explore the historic royal complex, including ornate temples, palace courtyards, and the famous Golden Gate.',
      },
      {
        order: 4,
        name: 'Dattatreya Square',
        // OSM node/11365112169 (amenity=place_of_worship, "Dattatraya Temple")
        coordinates: [27.6735387, 85.4353586],
        description:
          'Discover historic temples, traditional buildings, and intricate examples of Newari woodcarving.',
      },
      {
        order: 5,
        name: 'Peacock Window',
        // OSM node/11365112470 (tourism=museum, "Woodcarving Museum"). The
        // window is carved into the same building, the Pujari Math, and has no
        // OSM feature of its own.
        coordinates: [27.6733941, 85.4355692],
        description:
          "See an intricately carved wooden window that showcases Bhaktapur's renowned woodcarving tradition.",
      },
    ],
    // One entry: the document's "Map Points" stop and its "Day Facts".
    itinerary: [
      {
        day: '',
        id: 'workshop',
        title: 'Bhaktapur Pottery Square',
        color: '#84b829',
        description:
          "Discover Bhaktapur's traditional pottery-making heritage at Pottery Square, where local artisans shape clay using techniques passed down through generations. Observe the craft, join a hands-on workshop, and explore the surrounding historic neighbourhood.",
        transport: 'Road transport + walking',
        highlights: [
          'Pottery making',
          'Artisan workshop',
          'Newari craft heritage',
        ],
        coordinates: [27.669897, 85.427743],
      },
    ],
    // The document's price column is left out (indicative figures only).
    workshopOptions: {
      intro:
        'Choose a pottery-making session that fits your schedule. Options, prices, and availability depend on the local workshop provider.',
      rows: [
        { name: 'Short Pottery Session', duration: '10 minutes' },
        { name: 'Introductory Workshop', duration: '30 minutes' },
        { name: 'Guided Pottery Workshop', duration: '60 minutes' },
      ],
      additionalCosts: [
        {
          title: 'Pottery firing',
          description: 'May incur an additional charge.',
        },
        {
          title: 'Finished pottery',
          description:
            'Purchase or collection arrangements depend on the artisan.',
        },
        {
          title: 'Bhaktapur heritage-site entry',
          description: 'Separate from the workshop fee.',
        },
      ],
    },
    nearby: {
      title: 'Places to Explore Nearby',
      places: [
        {
          order: 1,
          title: 'Taumadhi Square',
          description: [
            'A historic square featuring the iconic Nyatapola Temple, Bhairavnath Temple, and traditional Newari architecture.',
          ],
        },
        {
          order: 2,
          title: 'Bhaktapur Durbar Square',
          description: [
            'Explore the historic royal complex, including ornate temples, palace courtyards, and the famous Golden Gate.',
          ],
        },
        {
          order: 3,
          title: 'Dattatreya Square',
          description: [
            'Discover historic temples, traditional buildings, and intricate examples of Newari woodcarving.',
          ],
        },
        {
          order: 4,
          title: 'Peacock Window',
          description: [
            "See an intricately carved wooden window that showcases Bhaktapur's renowned woodcarving tradition.",
          ],
        },
        {
          order: 5,
          title: 'Suryamadhi Pottery Area',
          description: [
            'Explore another traditional pottery-producing neighbourhood in Bhaktapur, known for its local pottery heritage.',
          ],
        },
      ],
    },
    bookingNote:
      "Workshop availability depends on the participating artisan's schedule. Confirm the session in advance if you want to guarantee a hands-on experience.",
    // Map links are the document's own Google Maps searches (tracking params
    // removed). They search by name rather than pin a point, which matters for
    // Suryamadhi: it has no OSM feature to take coordinates from.
    alternatives: {
      title: 'Alternative Pottery Experiences',
      intro:
        'Visitors interested in exploring pottery beyond the main square can consider other traditional pottery-producing areas in the Kathmandu Valley.',
      columns: 3,
      places: [
        {
          order: 1,
          title: 'Suryamadhi Pottery Area, Bhaktapur',
          description: [
            "Explore Suryamadhi, another traditional pottery-producing area in Bhaktapur. Discover local clay-working practices and observe how pottery continues to be part of the neighbourhood's craft traditions.",
            'A quieter alternative for visitors interested in traditional pottery production beyond the main tourist square.',
          ],
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Suryamadhi+Pottery+Bhaktapur+Nepal',
        },
        {
          order: 2,
          title: 'Traditional Pottery in Madhyapur Thimi',
          description: [
            'Discover Madhyapur Thimi, a traditional craft town in the Kathmandu Valley known for its pottery-making heritage. Learn about the techniques used by local artisans to shape clay into household vessels and other handmade objects.',
            "An opportunity to explore a different pottery-producing community and learn about the craft beyond Bhaktapur's historic centre.",
          ],
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Traditional+Pottery+Madhyapur+Thimi+Nepal',
        },
        {
          order: 3,
          title: 'Traditional Pottery Heritage in Khokana, Lalitpur',
          description: [
            "Explore Khokana, a traditional Newari village in Lalitpur. The wider Lalitpur area has a documented heritage of pottery and brick-making, including Khokana, Bungamati, Harsiddhi, Sunakothi, and Khapinche. Discover the region's traditional craftsmanship and historic architecture.",
            'Experience the cultural heritage of a traditional Newari settlement beyond the main pottery destinations.',
          ],
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Khokana+Lalitpur+Nepal',
        },
      ],
    },
    expectations: [
      {
        title: 'Traditional Pottery Craft',
        description:
          'Pottery Square is a working craft neighbourhood where artisans continue traditional clay-working practices. Visitors can observe the process and learn how pottery remains connected to local culture and livelihoods.',
      },
      {
        title: 'Hands-On Learning',
        description:
          'A workshop introduces the basics of shaping clay. Beginners can try using a pottery wheel with guidance from a local artisan. The finished piece will depend on the technique and session arrangements.',
      },
      {
        title: 'Historic Surroundings',
        description:
          "The area features brick-paved streets, traditional Newari buildings, open courtyards, and nearby cultural landmarks. The experience can be combined with a short walk through Bhaktapur's historic centre.",
      },
      {
        title: 'Local Artisans',
        description:
          "Pottery Square is a living neighbourhood rather than a dedicated visitor attraction. Visitors should respect artisans' workspaces and ask permission before photographing people or entering private areas.",
      },
      {
        title: 'Finished Pottery',
        description:
          'Newly shaped pottery may require additional drying and firing before it is ready for use. Confirm whether firing, collection, or delivery is available and whether additional charges apply.',
      },
    ],
    seasonalPlanning: [
      // January-first (the calendar maps array position to month). Spread from
      // the document's three ranges: October–April comfortable, March–May
      // warmer drying weather, June–September monsoon.
      {
        month: 'Jan',
        condition:
          'Comfortable Conditions / Walking the Historic Centre / Observing Pottery-Making',
        status: 'peak',
      },
      {
        month: 'Feb',
        condition:
          'Comfortable Conditions / Walking the Historic Centre / Observing Pottery-Making',
        status: 'peak',
      },
      {
        month: 'Mar',
        condition:
          'Comfortable Conditions / Warmer Weather / Favourable for Outdoor Pottery Drying',
        status: 'peak',
      },
      {
        month: 'Apr',
        condition:
          'Comfortable Conditions / Warmer Weather / Favourable for Outdoor Pottery Drying',
        status: 'peak',
      },
      {
        month: 'May',
        condition: 'Warmer Weather / Favourable for Outdoor Pottery Drying',
        status: 'peak',
      },
      {
        month: 'Jun',
        condition: 'Monsoon / Rainfall & Humidity / Can Affect Outdoor Drying',
        status: 'caution',
      },
      {
        month: 'Jul',
        condition: 'Monsoon / Rainfall & Humidity / Can Affect Outdoor Drying',
        status: 'caution',
      },
      {
        month: 'Aug',
        condition: 'Monsoon / Rainfall & Humidity / Can Affect Outdoor Drying',
        status: 'caution',
      },
      {
        month: 'Sep',
        condition: 'Monsoon / Rainfall & Humidity / Can Affect Outdoor Drying',
        status: 'caution',
      },
      {
        month: 'Oct',
        condition:
          'Comfortable Conditions / Walking the Historic Centre / Observing Pottery-Making',
        status: 'peak',
      },
      {
        month: 'Nov',
        condition:
          'Comfortable Conditions / Walking the Historic Centre / Observing Pottery-Making',
        status: 'peak',
      },
      {
        month: 'Dec',
        condition:
          'Comfortable Conditions / Walking the Historic Centre / Observing Pottery-Making',
        status: 'peak',
      },
    ],
    // The document has no "Before You Go" section.
    beforeYouGo: [],
    // Wikimedia Commons photos the document uses, resized only (no crop).
    // Credits are taken from each Commons file page. pottery-4 is credited to
    // Nikesh Tandukar in the document, but Commons lists Lori Branham.
    gallery: [
      {
        id: 'img_01',
        url: '/images/bhaktapur-pottery/pottery-cover.jpg',
        alt: 'Rows of clay pots drying in the open air at Pottery Square, Bhaktapur',
        type: 'hero',
        credit: {
          text: 'Photo: Gerd Eichmann · CC BY-SA 4.0',
          url: 'https://commons.wikimedia.org/wiki/File:Bhaktapur-Toepferplatz-56-2015-gje.jpg',
        },
      },
      {
        id: 'img_02',
        url: '/images/bhaktapur-pottery/pottery-1.jpg',
        alt: 'A potter turning a traditional wooden wheel with a stick at Pottery Square',
        type: 'landscape',
        credit: {
          text: 'Photo: Gerd Eichmann · CC BY-SA 4.0',
          url: 'https://commons.wikimedia.org/wiki/File:Bhaktapur-Toepferplatz-14-Toepferscheibe-2013-gje.jpg',
        },
      },
      {
        id: 'img_03',
        url: '/images/bhaktapur-pottery/pottery-2.jpg',
        alt: 'Clay pots laid out to dry around a small stupa in Pottery Square',
        type: 'landscape',
        credit: {
          text: 'Photo: Gerd Eichmann · CC BY-SA 4.0',
          url: 'https://commons.wikimedia.org/wiki/File:Bhaktapur-Toepferplatz-12-2013-gje.jpg',
        },
      },
      {
        id: 'img_04',
        url: '/images/bhaktapur-pottery/pottery-3.jpg',
        alt: 'A potter shaping a vessel on a traditional wheel beside finished pots',
        type: 'landscape',
        credit: {
          text: 'Photo: Gerd Eichmann · CC BY-SA 4.0',
          url: 'https://commons.wikimedia.org/wiki/File:Bhaktapur-Toepferplatz-18-Toepferscheibe-2013-gje.jpg',
        },
      },
      {
        id: 'img_05',
        url: '/images/bhaktapur-pottery/pottery-4.jpg',
        alt: 'Rows of clay cups drying on a mat while an artisan arranges pots behind',
        type: 'portrait',
        credit: {
          text: 'Photo: Lori Branham · CC BY 2.0',
          url: 'https://commons.wikimedia.org/wiki/File:Pottery_rows.jpg',
        },
      },
      {
        id: 'img_06',
        url: '/images/bhaktapur-pottery/pottery-5.jpg',
        alt: 'A potter shaping a tall clay vessel on a spinning wheel with wet hands',
        type: 'landscape',
        credit: {
          text: 'Photo: Kerensa Pickett · Unsplash',
          url: 'https://unsplash.com/photos/NExZB5LZF7g',
        },
      },
    ],
  },
  'bhaktapur-woodcarving': {
    id: 'bhaktapur-woodcarving',
    name: 'Traditional Woodcarving in Bhaktapur',
    summary:
      "Discover the art of traditional Newari woodcarving in Bhaktapur. Meet local artisans, learn basic carving techniques, and create your own design while exploring the intricate woodwork that decorates the city's historic temples, windows, and buildings.",
    region: 'Bhaktapur, Kathmandu Valley',
    meta: {
      duration: '2–3 Hours',
      difficulty: 'Easy',
      // Not in the document; same valley elevation as the pottery workshop.
      maxElevation: '~1400m',
      bestSeasons: 'Year-Round',
      startingPoint: 'Nyatapola Crafts, Bhaktapur',
      tripFacts: {
        start: 'Nyatapola Crafts, Bhaktapur',
        cities: 'Bhaktapur',
        tourType: 'Arts and Crafts',
        transport: 'Walking',
        terrain: 'Brick-paved streets',
      },
    },
    overview:
      "Woodcarving is an important part of Bhaktapur's Newari artistic heritage. Intricately carved wooden windows, doors, pillars, and decorative elements adorn the city's traditional buildings, temples, and historic courtyards.\n\nAt Nyatapola Crafts in Pottery Square, visitors can learn directly from local artisans who continue this traditional craft. Beginner workshops introduce participants to hand-carving techniques and simple designs, including flowers, leaves, and the traditional endless knot.\n\nThe experience combines practical learning with an opportunity to appreciate the craftsmanship behind Bhaktapur's distinctive architecture.",
    // Workshop pin plus the document's "Places to Explore Nearby".
    // Coordinates are OpenStreetMap values (lat, lng) resolved via Nominatim;
    // the Bhaktapur sites reuse the pottery tour's verified pins.
    sites: [
      {
        order: 1,
        name: 'Nyatapola Crafts',
        // Not in OSM; the provider's published studio location in Pottery Square.
        coordinates: [27.6700913, 85.4283848],
        description:
          "Nyatapola Crafts is a traditional craft destination near Bhaktapur's iconic Nyatapola Temple, known for its intricate woodwork.",
        isHighlight: true,
        dayId: 'workshop',
      },
      {
        order: 2,
        name: 'Pottery Square',
        // OSM node/12287948902 (tourism=attraction, "Pottery Square (Talako Tole)")
        coordinates: [27.669897, 85.427743],
        description:
          "Explore Bhaktapur's traditional pottery centre, where local artisans shape clay and display handmade pottery in open courtyards.",
      },
      {
        order: 3,
        name: 'Taumadhi Square',
        // OSM way/85470341 (amenity=place_of_worship), Nyatapola Temple, which
        // stands in the square; the square itself has no OSM feature.
        coordinates: [27.6714098, 85.4293725],
        description:
          'A historic square featuring the iconic Nyatapola Temple, Bhairavnath Temple, and traditional Newari architecture.',
      },
      {
        order: 4,
        name: 'Bhaktapur Durbar Square',
        // OSM way/1192827651 (place=square)
        coordinates: [27.672078, 85.4281306],
        description:
          'Explore the historic royal complex, including ornate temples, palace courtyards, and the famous Golden Gate.',
      },
      {
        order: 5,
        name: 'Dattatreya Square',
        // OSM node/11365112169 (amenity=place_of_worship, "Dattatraya Temple")
        coordinates: [27.6735387, 85.4353586],
        description:
          'Discover historic temples, traditional buildings, and intricate examples of Newari woodcarving.',
      },
      {
        order: 6,
        name: 'Woodcarving Museum',
        // OSM node/11365112470 (tourism=museum). The Peacock Window is carved
        // into the same building, the Pujari Math, so it shares this point and
        // is listed under "nearby" rather than given a duplicate map pin.
        coordinates: [27.6733941, 85.4355692],
        description:
          'Located in the historic Pujari Math at Dattatreya Square, the museum displays traditional wooden sculptures, carved windows, and architectural elements.',
      },
    ],
    // One entry: the document's "Map Points" stop and its "Day Facts".
    itinerary: [
      {
        day: '',
        id: 'workshop',
        title: 'Nyatapola Crafts — Woodcarving Workshop',
        color: '#84b829',
        description:
          "Learn traditional Newari woodcarving at a local workshop in Pottery Square. Work alongside skilled artisans, practise basic chisel techniques, and explore the craft behind Bhaktapur's intricately carved wooden designs.",
        transport: 'Road transport + walking',
        highlights: [
          'Traditional woodcarving',
          'Artisan workshop',
          'Newari craftsmanship',
        ],
        coordinates: [27.6700913, 85.4283848],
      },
    ],
    // The document's "What You'll Learn" column has no field in the table, so
    // its content is folded into the intro; the table keeps level + duration.
    workshopOptions: {
      intro:
        'Nyatapola Crafts offers workshops for different skill levels. Beginner sessions cover basic hand-carving techniques, the endless knot, and simple flowers and leaves. Longer courses progress to more detailed floral patterns, pillar carvings, traditional Newari designs, and, at apprenticeship level, advanced carving, statues, and wood selection.',
      rows: [
        { name: 'Beginner', duration: '1 afternoon or 2–3 days' },
        { name: 'Intermediate', duration: '3–7 days' },
        { name: 'Expert / Apprenticeship', duration: '3 months–1 year' },
      ],
      additionalCosts: [
        {
          title: 'Your carved piece',
          description:
            'Ask the workshop provider whether your carved piece can be completed during the session, and whether materials or additional finishing work incur extra costs.',
        },
      ],
    },
    nearby: {
      title: 'Places to Explore Nearby',
      places: [
        {
          order: 1,
          title: 'Pottery Square',
          description: [
            "Explore Bhaktapur's traditional pottery centre, where local artisans shape clay and display handmade pottery in open courtyards.",
          ],
        },
        {
          order: 2,
          title: 'Taumadhi Square',
          description: [
            'A historic square featuring the iconic Nyatapola Temple, Bhairavnath Temple, and traditional Newari architecture.',
          ],
        },
        {
          order: 3,
          title: 'Bhaktapur Durbar Square',
          description: [
            'Explore the historic royal complex, including ornate temples, palace courtyards, and the famous Golden Gate.',
          ],
        },
        {
          order: 4,
          title: 'Dattatreya Square',
          description: [
            'Discover historic temples, traditional buildings, and intricate examples of Newari woodcarving.',
          ],
        },
        {
          order: 5,
          title: 'Peacock Window',
          description: [
            "See an intricately carved wooden window that showcases Bhaktapur's renowned woodcarving tradition.",
          ],
        },
        {
          order: 6,
          title: 'Woodcarving Museum',
          description: [
            'Located in the historic Pujari Math at Dattatreya Square, the museum displays traditional wooden sculptures, carved windows, and architectural elements.',
          ],
        },
      ],
    },
    bookingNote:
      'Because the experience involves a hands-on workshop, booking ahead is recommended to arrange a suitable session.',
    // Map links are the document's own Google Maps searches (tracking params
    // removed). They search by name rather than pin a point.
    alternatives: {
      title: 'Alternative Woodcarving Experiences',
      intro:
        "Visitors interested in exploring woodcarving beyond the main workshop can discover other destinations across the Kathmandu Valley. These places offer opportunities to appreciate traditional woodwork, intricate carvings, and Nepal's rich craftsmanship.",
      columns: 3,
      places: [
        {
          order: 1,
          title: 'Traditional Woodcarving in Bungamati, Lalitpur',
          description: [
            "Bungamati is a traditional Newari settlement known for its rich cultural heritage and traditional craftsmanship. Explore the village's wooden carvings, traditional houses, and local artisan practices to learn more about the region's woodcarving traditions.",
          ],
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Bungamati+Woodcarving+Lalitpur+Nepal',
        },
        {
          order: 2,
          title: 'Traditional Woodcarving in Patan, Lalitpur',
          description: [
            "Patan is renowned for its Newari architecture, featuring intricately carved wooden windows, doors, and decorative details. Explore its historic squares, temples, and local craft businesses to discover how woodcarving contributes to the city's architectural heritage.",
            'For a more hands-on experience, contact local artisans or workshop providers to check whether woodcarving sessions are available.',
          ],
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Traditional+Woodcarving+Patan+Lalitpur+Nepal',
        },
      ],
    },
    expectations: [
      {
        title: 'Traditional Craftsmanship',
        description:
          "Learn about the woodcarving tradition reflected in Bhaktapur's historic temples, windows, doors, and decorative wooden structures.",
      },
      {
        title: 'Hands-On Learning',
        description:
          'Practise basic carving techniques with guidance from an artisan. Beginner sessions focus on simple patterns rather than complex architectural carvings.',
      },
      {
        title: 'Historic Surroundings',
        description:
          "Explore Pottery Square and nearby heritage sites to see how traditional woodcarving contributes to Bhaktapur's architectural identity.",
      },
      {
        title: 'Local Artisans',
        description:
          'Learn directly from craftspeople who continue traditional Newari woodcarving practices and produce handmade wooden pieces.',
      },
      {
        title: 'Your Carved Piece',
        description:
          'Ask the workshop provider whether your carved piece can be completed during the session and whether materials or additional finishing work incur extra costs.',
      },
    ],
    seasonalPlanning: [
      // January-first. The document gives Year-Round, with October–April the
      // comfortable window and May–September the warmer/monsoon months where
      // availability should be confirmed.
      {
        month: 'Jan',
        condition: 'Comfortable Conditions / Exploring the Historic Centre',
        status: 'peak',
      },
      {
        month: 'Feb',
        condition: 'Comfortable Conditions / Exploring the Historic Centre',
        status: 'peak',
      },
      {
        month: 'Mar',
        condition: 'Comfortable Conditions / Exploring the Historic Centre',
        status: 'peak',
      },
      {
        month: 'Apr',
        condition: 'Comfortable Conditions / Exploring the Historic Centre',
        status: 'peak',
      },
      {
        month: 'May',
        condition: 'Warmer & Monsoon Months / Confirm Workshop Availability',
        status: 'caution',
      },
      {
        month: 'Jun',
        condition: 'Warmer & Monsoon Months / Confirm Workshop Availability',
        status: 'caution',
      },
      {
        month: 'Jul',
        condition: 'Warmer & Monsoon Months / Confirm Workshop Availability',
        status: 'caution',
      },
      {
        month: 'Aug',
        condition: 'Warmer & Monsoon Months / Confirm Workshop Availability',
        status: 'caution',
      },
      {
        month: 'Sep',
        condition: 'Warmer & Monsoon Months / Confirm Workshop Availability',
        status: 'caution',
      },
      {
        month: 'Oct',
        condition: 'Comfortable Conditions / Exploring the Historic Centre',
        status: 'peak',
      },
      {
        month: 'Nov',
        condition: 'Comfortable Conditions / Exploring the Historic Centre',
        status: 'peak',
      },
      {
        month: 'Dec',
        condition: 'Comfortable Conditions / Exploring the Historic Centre',
        status: 'peak',
      },
    ],
    // The document has no "Before You Go" section.
    beforeYouGo: [],
    // Every image from the document, resized only (no crop) from the operator's
    // embedded files, in the order they appear in the PDF. The hero is the
    // document's page-1 image. Credits are shown where the source is verified:
    // the two Wikimedia Commons file pages and the two Unsplash authors. The
    // page-1 carving image has no resolvable free-licence source, so it carries
    // no credit line.
    gallery: [
      {
        id: 'img_01',
        url: '/images/bhaktapur-woodcarving/woodcarving-cover.jpg',
        alt: "An artisan's hands carving an intricate figure into a wooden pillar with a mallet and chisel",
        type: 'hero',
      },
      {
        id: 'img_02',
        url: '/images/bhaktapur-woodcarving/woodcarving-1.jpg',
        alt: 'Carved wooden roof struts and brickwork on a historic Bhaktapur temple',
        type: 'landscape',
        credit: {
          text: 'Photo: Bijaya2043 · CC BY-SA 4.0',
          url: 'https://commons.wikimedia.org/wiki/File:Nepal_Bhaktapur_60.jpg',
        },
      },
      {
        id: 'img_03',
        url: '/images/bhaktapur-woodcarving/woodcarving-2.jpg',
        alt: 'The tiered Nyatapola Temple rising above Bhaktapur under a clear sky',
        type: 'landscape',
        credit: {
          text: 'Photo: Martijn Vonk · Unsplash',
          url: 'https://unsplash.com/photos/a-very-tall-building-with-a-very-tall-tower-on-top-of-it-Qkvi-kfJRj8',
        },
      },
      {
        id: 'img_04',
        url: '/images/bhaktapur-woodcarving/woodcarving-4.jpg',
        alt: 'Rows of intricately carved wooden windows on a traditional building at Bhaktapur Durbar Square',
        type: 'landscape',
        credit: {
          text: 'Photo: Alexander Shafir · CC BY-SA 4.0',
          url: 'https://commons.wikimedia.org/wiki/File:Bhaktapur_Dubar_Square-IMG_3534.jpg',
        },
      },
      {
        id: 'img_05',
        url: '/images/bhaktapur-woodcarving/woodcarving-3.jpg',
        alt: 'An artisan in a traditional cap carving a wooden beam with a hand tool',
        type: 'portrait',
        credit: {
          text: 'Photo: Shashank Thapa · Unsplash',
          url: 'https://unsplash.com/photos/man-in-white-striped-shirt-sitting-on-brown-pallet-holding-gray-power-tool-5icc4eJULUE',
        },
      },
      {
        id: 'img_06',
        url: '/images/bhaktapur-woodcarving/woodcarving-5.jpg',
        alt: 'Hands carving a decorative pattern into a flat wooden panel with chisels',
        type: 'landscape',
        credit: {
          text: 'Photo: Dominik Scythe · Unsplash',
          url: 'https://unsplash.com/photos/person-using-chisel-while-curving-wood-3cIvvzjE6Lk',
        },
      },
    ],
  },
  'patan-mandala-painting': {
    id: 'patan-mandala-painting',
    name: 'Mandala Painting Workshop',
    summary:
      "Explore the art of mandala painting in a guided creative workshop. Learn to build intricate patterns, work with shapes and colours, and create your own mandala artwork while discovering this art form's cultural and artistic significance.",
    region: 'Patan, Kathmandu Valley',
    meta: {
      duration: '2–3 Hours',
      difficulty: 'Easy',
      // Not in the document; Patan sits at roughly the same valley elevation.
      maxElevation: '~1350m',
      bestSeasons: 'Year-Round',
      startingPoint: 'The Precious Arts, Patan',
      tripFacts: {
        start: 'The Precious Arts, Patan',
        cities: 'Patan, Kathmandu Valley',
        tourType: 'Arts and Crafts',
        transport: 'Walking',
        terrain: 'Urban streets and traditional neighbourhoods',
      },
    },
    overview:
      "Discover the intricate art of mandala painting through a creative workshop in Patan, Kathmandu Valley. A mandala is a geometric design arranged around a central point, often representing harmony, balance, and the structure of the universe.\n\nMandala art has deep roots in Buddhist and Hindu traditions, where it is used in spiritual practice, meditation, and artistic expression.\n\nDuring this experience, explore the patterns, shapes, and colours that make mandalas distinctive, and learn about their cultural significance. The workshop offers an opportunity to engage with this traditional art form and create your own mandala-inspired artwork while experiencing Patan's rich artistic heritage.",
    // Workshop pin plus the document's "Places to Explore Nearby".
    // Coordinates are OpenStreetMap values (lat, lng) resolved via Nominatim;
    // the Patan sites reuse the Kathmandu Valley cultural tour's verified pins.
    sites: [
      {
        order: 1,
        name: 'The Precious Arts',
        // Not in OSM; the provider's published studio location near Patan Durbar
        // Square (Chushika-Hakha Bahal Galli).
        coordinates: [27.6726296, 85.3266042],
        description:
          'Visit The Precious Arts near Patan Durbar Square to enquire about its mandala art workshops. The studio offers various art classes and occasional special workshops. Contact the provider to confirm the schedule and arrange your session.',
        isHighlight: true,
        dayId: 'workshop',
      },
      {
        order: 2,
        name: 'Patan Durbar Square',
        // OSM relation/4557971 (highway=pedestrian)
        coordinates: [27.6734454, 85.325035],
        description:
          'Explore the historic royal complex, featuring traditional Newari architecture, ornate temples, palace courtyards, and intricately carved wooden details.',
      },
      {
        order: 3,
        name: 'Krishna Mandir',
        // OSM way/120443307 (amenity=place_of_worship)
        coordinates: [27.6736225, 85.3249641],
        description:
          'Visit the iconic stone temple at Patan Durbar Square, known for its detailed carvings and distinctive architectural design.',
      },
      {
        order: 4,
        name: 'Golden Temple',
        // OSM relation/4624856 (amenity=place_of_worship)
        coordinates: [27.6752237, 85.3247105],
        description:
          'Discover a historic Buddhist monastery known for its traditional architecture, religious artwork, and intricate decorative details.',
      },
      {
        order: 5,
        name: 'Patan Museum',
        // OSM node/1904110313 (tourism=museum)
        coordinates: [27.6734438, 85.3253354],
        description:
          "Explore Nepal's artistic and cultural heritage through collections of traditional sculpture, religious objects, and metalwork.",
      },
      {
        order: 6,
        name: 'Mahabouddha Temple',
        // OSM node/564129617 (amenity=place_of_worship, "महाबुद्ध मन्दिर")
        coordinates: [27.6689984, 85.3271415],
        description:
          'Visit the distinctive terracotta temple known for its intricate brickwork and repeated Buddha images.',
      },
    ],
    // One entry: the document's "Map Points" stop and its "Day Facts".
    itinerary: [
      {
        day: '',
        id: 'workshop',
        title: 'The Precious Arts - Mandala Painting Workshop',
        color: '#84b829',
        description:
          'Visit The Precious Arts near Patan Durbar Square to enquire about its mandala art workshops. The studio offers various art classes and occasional special workshops. Contact the provider to confirm the schedule and arrange your session.',
        transport: 'Local transport + walking',
        highlights: [
          'Mandala painting',
          'Creative workshop',
          "Patan's artistic heritage",
        ],
        coordinates: [27.6726296, 85.3266042],
        link: {
          label: 'thepreciousarts.com.np',
          url: 'https://thepreciousarts.com.np/',
        },
      },
    ],
    nearby: {
      title: 'Places to Explore Nearby',
      places: [
        {
          order: 1,
          title: 'Patan Durbar Square',
          description: [
            'Explore the historic royal complex, featuring traditional Newari architecture, ornate temples, palace courtyards, and intricately carved wooden details.',
          ],
        },
        {
          order: 2,
          title: 'Krishna Mandir',
          description: [
            'Visit the iconic stone temple at Patan Durbar Square, known for its detailed carvings and distinctive architectural design.',
          ],
        },
        {
          order: 3,
          title: 'Golden Temple',
          description: [
            'Discover a historic Buddhist monastery known for its traditional architecture, religious artwork, and intricate decorative details.',
          ],
        },
        {
          order: 4,
          title: 'Patan Museum',
          description: [
            "Explore Nepal's artistic and cultural heritage through collections of traditional sculpture, religious objects, and metalwork.",
          ],
        },
        {
          order: 5,
          title: 'Mahabouddha Temple',
          description: [
            'Visit the distinctive terracotta temple known for its intricate brickwork and repeated Buddha images.',
          ],
        },
      ],
    },
    bookingNote:
      'Contact The Precious Arts to confirm the next available session, duration, price, and whether advance reservations are required.',
    // Map links are the document's own Google Maps searches (tracking params
    // removed). They search by name rather than pin a point.
    alternatives: {
      title: 'Alternative Experiences',
      intro:
        'Visitors interested in exploring other traditional painting practices can consider these experiences in the Kathmandu Valley.',
      columns: 3,
      places: [
        {
          order: 1,
          title: 'Paubha Painting Workshop, Patan',
          description: [
            'Discover Paubha, a traditional Newari religious painting practice. Learn about its imagery, symbolism, and painting techniques in a guided session with a local artist.',
            'The listed experience includes an introduction to Paubha painting and a practical painting session. The provider describes a workshop lasting approximately 2–3 hours, with materials and other inclusions depending on the booking arrangement.',
          ],
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Patan+Durbar+Square+Lalitpur+Nepal',
        },
        {
          order: 2,
          title: 'Thangka Painting Experience, Kathmandu Valley',
          description: [
            'Explore traditional Tibetan Buddhist painting through its detailed imagery, symbolic motifs, and carefully developed compositions. Thangka painting offers a different artistic experience, with an emphasis on traditional religious art and painting techniques.',
          ],
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Himalayan+Arts+Gallery+Thamel+Kathmandu',
        },
      ],
    },
    expectations: [
      {
        title: 'Creative Art Practice',
        description:
          'Explore mandala-inspired patterns through drawing, shapes, repetition, and colour. The session provides an opportunity to develop a personal design while learning basic artistic techniques.',
      },
      {
        title: 'Guided Learning',
        description:
          'The Precious Arts offers art classes and special workshops. Ask the studio about the format of its mandala session, the level of guidance provided, and whether it is suitable for first-time participants.',
      },
      {
        title: 'A Beginner-Friendly Experience',
        description:
          'Mandala painting can be approached without previous art experience. Confirm with the provider whether the available workshop is designed for beginners and what techniques will be covered.',
      },
      {
        title: 'Materials and Artwork',
        description:
          'Confirm whether paper, drawing tools, paints, brushes, and other materials are included in the workshop fee. Ask whether participants can take their completed artwork home.',
      },
    ],
    seasonalPlanning: [
      // January-first. The document gives Year-Round: October–April is
      // comfortable for exploring Patan, and because the workshop is indoors it
      // remains a suitable activity through the warmer and monsoon months.
      {
        month: 'Jan',
        condition: "Comfortable Conditions / Exploring Patan's Historic Centre",
        status: 'peak',
      },
      {
        month: 'Feb',
        condition: "Comfortable Conditions / Exploring Patan's Historic Centre",
        status: 'peak',
      },
      {
        month: 'Mar',
        condition: "Comfortable Conditions / Exploring Patan's Historic Centre",
        status: 'peak',
      },
      {
        month: 'Apr',
        condition: "Comfortable Conditions / Exploring Patan's Historic Centre",
        status: 'peak',
      },
      {
        month: 'May',
        condition:
          'Warmer & Monsoon Months / Suitable Indoor Workshop Activity',
        status: 'peak',
      },
      {
        month: 'Jun',
        condition:
          'Warmer & Monsoon Months / Suitable Indoor Workshop Activity',
        status: 'peak',
      },
      {
        month: 'Jul',
        condition:
          'Warmer & Monsoon Months / Suitable Indoor Workshop Activity',
        status: 'peak',
      },
      {
        month: 'Aug',
        condition:
          'Warmer & Monsoon Months / Suitable Indoor Workshop Activity',
        status: 'peak',
      },
      {
        month: 'Sep',
        condition:
          'Warmer & Monsoon Months / Suitable Indoor Workshop Activity',
        status: 'peak',
      },
      {
        month: 'Oct',
        condition: "Comfortable Conditions / Exploring Patan's Historic Centre",
        status: 'peak',
      },
      {
        month: 'Nov',
        condition: "Comfortable Conditions / Exploring Patan's Historic Centre",
        status: 'peak',
      },
      {
        month: 'Dec',
        condition: "Comfortable Conditions / Exploring Patan's Historic Centre",
        status: 'peak',
      },
    ],
    // The document has no "Before You Go" section.
    beforeYouGo: [],
    // Every image from the document, resized only (no crop) from the operator's
    // embedded files, in the order they appear in the PDF. The hero is the
    // last gallery image (the Stan Tuladhar mandala). Credits are shown where the source is verified:
    // the Wikimedia Commons file page and the Unsplash author. The page-1
    // mandala, the sand mandala, and the pencil sketch have no resolvable
    // free-licence source (one of them is the document's AI-generated image),
    // so they carry no credit line.
    gallery: [
      {
        id: 'img_01',
        url: '/images/patan-mandala-painting/mandala-cover.jpg',
        alt: 'A vividly coloured finished mandala with intricate concentric geometric patterns',
        type: 'landscape',
      },
      {
        id: 'img_02',
        url: '/images/patan-mandala-painting/mandala-1.jpg',
        alt: 'An artist painting a detailed mandala with fine brushwork',
        type: 'landscape',
        credit: {
          text: 'Photo: Jean-Pierre Dalbéra · CC BY 2.0',
          url: 'https://commons.wikimedia.org/wiki/File:Apprenti_Peintre_de_Thanka_(Bhaktapur,_N%C3%A9pal)_(8531738177).jpg',
        },
      },
      {
        id: 'img_03',
        url: '/images/patan-mandala-painting/mandala-2.jpg',
        alt: 'A traditional art and crafts shop in the Kathmandu Valley with paintings and handmade items on display',
        type: 'landscape',
        credit: {
          text: 'Photo: Bishan Thapa Magar · Unsplash',
          url: 'https://unsplash.com/photos/a-man-walking-past-a-store-with-a-lot-of-items-on-display-6LxjLHYGkv0',
        },
      },
      {
        id: 'img_04',
        url: '/images/patan-mandala-painting/mandala-3.jpg',
        alt: 'A colourful sand mandala laid out in a circular geometric design',
        type: 'landscape',
      },
      {
        id: 'img_05',
        url: '/images/patan-mandala-painting/mandala-4.jpg',
        alt: 'A hand-drawn mandala outline with coloured pencils on paper',
        type: 'portrait',
      },
      {
        id: 'img_06',
        url: '/images/patan-mandala-painting/mandala-5.jpg',
        alt: 'A detailed, symmetrical mandala painting in vivid traditional colours',
        type: 'hero',
        credit: {
          text: 'Photo: Stan Tuladhar · Unsplash',
          url: 'https://unsplash.com/photos/intricate-colorful-mandala-painted-on-a-ceiling-GA5isaMG-cI',
        },
      },
    ],
  },
};
