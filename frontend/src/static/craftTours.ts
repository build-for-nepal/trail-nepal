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
        tourType: 'Short Experience · Arts & Crafts · Cultural Heritage',
        transport: 'Walking',
        terrain: 'Brick-paved streets · Traditional courtyards',
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
          "Discover Bhaktapur's traditional pottery-making heritage at Pottery Square, where local artisans shape clay using techniques passed down through generations. Observe the craft, join a hands-on workshop, and explore the surrounding historic neighbourhood.",
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
        day: 'Workshop',
        id: 'workshop',
        title: 'Bhaktapur Pottery Square',
        color: '#B45309',
        description:
          "Discover Bhaktapur's traditional pottery-making heritage at Pottery Square, where local artisans shape clay using techniques passed down through generations. Observe the craft, join a hands-on workshop, and explore the surrounding historic neighbourhood.",
        transport: 'Road transport + walking',
        highlights: [
          'Pottery making',
          'Artisan workshop',
          'Newari craft heritage',
        ],
        coordinates: [27.669897, 85.427743],
        link: { label: 'potterysquare.com', url: 'https://potterysquare.com/' },
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
      // Not in the document, which has no intro for this list.
      intro: 'Sights within walking distance of Pottery Square.',
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
        'Visitors interested in exploring pottery beyond the main square can consider other traditional pottery-producing areas in the Kathmandu Valley. These are alternative locations, not confirmed Trails Nepal workshop partners. Hands-on sessions should be arranged directly with local artisans.',
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
            'Arrange a visit or hands-on session directly with a local pottery workshop. Availability and pricing need to be confirmed.',
          ],
          reference: {
            label: 'Visit Madhyapur — Pottery',
            url: 'https://visitmadhyapur.com/en/pesa/pottery/',
          },
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
          note: {
            title: 'Workshop Availability',
            description:
              "Khokana's specific pottery workshops and hands-on activities have not been verified. Contact local artisans before planning a pottery-making session.",
          },
          reference: {
            label: 'Lalitpur Metropolitan City — Intangible Heritage Report',
            url: 'https://www.lmc.gov.np/sites/lalitpurmun.gov.np/files/documents/Report%20On%20Intangible%20Heritage%20of%20Lalitpur.pdf',
          },
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
    ],
  },
};
