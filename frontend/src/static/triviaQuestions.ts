// Generated from trivia qns.docx. Do not edit question content manually.

export type TriviaQuestion = {
  question: string;
  answers: [string, string, string, string];
  correctAnswer: number;
  explanation: string;
};

export const GENERAL_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    question:
      'What is the primary purpose of taking an "acclimatization day" during a high-altitude trek?',
    answers: [
      'To rest your legs',
      'To allow your body to adjust to lower oxygen levels',
      'To wait for better weather',
      'To explore local villages',
    ],
    correctAnswer: 1,
    explanation:
      'Acclimatization days allow your body to produce more red blood cells and adapt to the lower air pressure, preventing Acute Mountain Sickness (AMS).',
  },
  {
    question:
      'If you encounter a mule or yak train on a narrow trail, what is the safest action?',
    answers: [
      'Stand still in the middle',
      'Step to the downhill side',
      'Step to the uphill (mountain) side',
      'Run ahead of them',
    ],
    correctAnswer: 2,
    explanation:
      'Always step to the uphill side. If a pack animal gets spooked or bumps you on the downhill side, you could fall off the cliff.',
  },
  {
    question: 'What is the golden rule regarding altitude?',
    answers: [
      'Climb high, sleep low',
      'Climb high, sleep high',
      'Sleep low, stay low',
      'Only climb in the morning',
    ],
    correctAnswer: 0,
    explanation:
      '"Climb high, sleep low" means you can hike to a higher elevation during the day for acclimatization, but you should return to a lower altitude to sleep.',
  },
  {
    question:
      'What should you do immediately if you suspect someone has severe Acute Mountain Sickness (AMS)?',
    answers: [
      'Give them aspirin and wait',
      'Have them drink lots of water',
      'Descend to a lower altitude immediately',
      'Have them sleep it off',
    ],
    correctAnswer: 2,
    explanation:
      'Descending is the only guaranteed cure for severe AMS. Waiting or sleeping can be fatal if the condition worsens into HAPE or HACE.',
  },
  {
    question: 'Why are trekking poles highly recommended for steep descents?',
    answers: [
      'To look like a professional',
      'To reduce the impact on your knees',
      'To fend off wild animals',
      'To measure the trail distance',
    ],
    correctAnswer: 1,
    explanation:
      'Trekking poles can reduce compressive forces on your knees by up to 25%, significantly reducing fatigue and injury risk on long downhill sections.',
  },
  {
    question: 'What is the "TIMS" card required for in Nepal?',
    answers: [
      'Paying park entrance fees',
      'Tracking trekkers for safety and search-and-rescue',
      'Getting a visa on arrival',
      'Booking tea houses',
    ],
    correctAnswer: 1,
    explanation:
      "The Trekkers' Information Management System (TIMS) card helps authorities keep track of trekkers' whereabouts in case of emergencies, natural disasters, or if someone goes missing.",
  },
  {
    question: 'What is a common symptom of mild altitude sickness?',
    answers: [
      'Unexplained euphoria',
      'Headache and nausea',
      'Increased appetite',
      'Feeling very cold',
    ],
    correctAnswer: 1,
    explanation:
      "Mild AMS typically presents as a headache, nausea, dizziness, and fatigue. If these symptoms worsen, it's a sign to descend.",
  },
  {
    question: 'Why should you avoid drinking untreated water on the trail?',
    answers: [
      'It tastes bad',
      'It may contain bacteria causing Giardia or cholera',
      'It is too cold',
      'It is considered disrespectful',
    ],
    correctAnswer: 1,
    explanation:
      'Untreated water can harbor bacteria, viruses, and parasites. Always use purification tablets, a filter, or boil your water.',
  },
  {
    question:
      'What should you do if you get separated from your trekking group?',
    answers: [
      'Keep walking fast to catch up',
      'Take random side trails to find them',
      'Stay put and blow a whistle',
      'Wait until morning',
    ],
    correctAnswer: 2,
    explanation:
      'Staying put makes it easier for search parties to find you. A whistle carries much further than a human voice.',
  },
  {
    question: 'What is the main role of a trekking "porter" in Nepal?',
    answers: [
      'To cook all the meals',
      'To carry heavy loads and gear for trekkers',
      'To guide the group',
      'To set up tents',
    ],
    correctAnswer: 1,
    explanation:
      "Porters carry the heavy luggage, allowing trekkers to hike comfortably. It is highly respectful to keep your porter's load under the legal limit (usually 20-25kg).",
  },
  {
    question:
      'What should you do if caught in a thunderstorm above the tree line?',
    answers: [
      'Stand under the tallest tree',
      'Crouch down low on your backpack',
      'Run as fast as you can',
      'Wave your trekking poles',
    ],
    correctAnswer: 1,
    explanation:
      'You are the tallest object above the treeline. Crouch low on your insulated backpack to minimize ground contact and wait for the storm to pass.',
  },
  {
    question:
      'Why is it important to wear sunglasses with high UV protection on a glacier or snow pass?',
    answers: [
      'To look cool in photos',
      'To prevent snow blindness',
      'To keep your face warm',
      'To see in the dark',
    ],
    correctAnswer: 1,
    explanation:
      'Snow reflects up to 80% of UV rays. Without proper glacier glasses, you can get a sunburn on your cornea, causing temporary but painful "snow blindness."',
  },
  {
    question:
      'What does the traditional Nepali greeting "Namaste" literally mean?',
    answers: [
      'Hello and goodbye',
      'I bow to the divine in you',
      'Peace be with you',
      'Good luck',
    ],
    correctAnswer: 1,
    explanation:
      'Namaste is a sign of deep respect. Pressing your palms together at your chest symbolizes that we are all one, and you are acknowledging the divine spark in the other person.',
  },
  {
    question:
      'Which direction should you walk around a Buddhist Stupa (like Boudhanath)?',
    answers: [
      'Clockwise',
      'Counter-clockwise',
      'Any direction',
      'You should not walk around it',
    ],
    correctAnswer: 0,
    explanation:
      'Buddhist tradition dictates walking clockwise around stupas and mani walls, keeping the sacred structure on your right side.',
  },
  {
    question:
      'What should you remove before entering a Hindu temple or a Nepali home?',
    answers: [
      'Your hat',
      'Your socks',
      'Your shoes (and often leather items)',
      'Your backpack',
    ],
    correctAnswer: 2,
    explanation:
      'Shoes are considered impure. In many Hindu temples, leather belts, wallets, and bags must also be removed.',
  },
  {
    question:
      "Why is it considered disrespectful to touch someone's head in Nepal?",
    answers: [
      'It ruins their hairstyle',
      'The head is considered the most sacred part of the body',
      'It is a sign of aggression',
      'It brings bad luck',
    ],
    correctAnswer: 1,
    explanation:
      'In Hindu and Buddhist cultures, the head is the highest and purest part of the body, while the feet are the lowest and considered impure.',
  },
  {
    question:
      'What are the five colors of Tibetan prayer flags (Lungta) meant to represent?',
    answers: [
      'The five senses',
      'The five elements (Water, Earth, Fire, Wind, Space)',
      'The five mountains of Nepal',
      'The five seasons',
    ],
    correctAnswer: 1,
    explanation:
      'The colors are Blue (Space), White (Air), Red (Fire), Green (Water), and Yellow (Earth).',
  },
  {
    question:
      'Which hand should you use to eat, pass money, or hand something to a Nepali person?',
    answers: ['Left hand', 'Right hand', 'Both hands', 'Either hand'],
    correctAnswer: 1,
    explanation:
      'The right hand is used for eating and giving/receiving items. The left hand is traditionally used for personal hygiene and is considered impolite to use for these tasks.',
  },
  {
    question: 'What is a "Tika"?',
    answers: [
      'A traditional Nepali dish',
      'A colored powder or yogurt mixture applied to the forehead',
      'A type of mountain goat',
      'A prayer wheel',
    ],
    correctAnswer: 1,
    explanation:
      'Tika is a mixture of vermilion powder, yogurt, and rice applied to the forehead as a blessing during festivals (like Dashain) or religious ceremonies.',
  },
  {
    question: 'What is the name of the living goddess worshipped in Kathmandu?',
    answers: ['Kumari', 'Devi', 'Shakti', 'Lakshmi'],
    correctAnswer: 0,
    explanation:
      'The Kumari is a young girl chosen from the Newar Buddhist community who is believed to be the living incarnation of the goddess Taleju.',
  },
  {
    question:
      'During which festival do Nepalis fly kites, put on Tika, and swing on bamboo swings?',
    answers: ['Tihar', 'Dashain', 'Holi', 'Losar'],
    correctAnswer: 1,
    explanation:
      'Dashain is the longest and biggest festival in Nepal, celebrating the victory of good over evil.',
  },
  {
    question:
      'How should you behave if you see a religious procession or cremation taking place at Pashupatinath?',
    answers: [
      'Take lots of flash photos',
      'Be respectful, keep a distance, and avoid pointing',
      'Join in the crying',
      'Turn your back',
    ],
    correctAnswer: 1,
    explanation:
      'Cremations are deeply sacred events. Tourists should observe respectfully from a distance, never taking photos of the bodies or grieving families.',
  },
  {
    question: 'What is "Tihar" the festival of?',
    answers: [
      'Lights, brothers and sisters, and animals',
      'Water and colors',
      'Mountains and snow',
      'Harvesting rice',
    ],
    correctAnswer: 0,
    explanation:
      'Tihar is the festival of lights. It honors Laxmi (goddess of wealth), dogs, cows, and brothers, strengthening family bonds.',
  },
  {
    question: 'What is the local Nepali name for Mount Everest?',
    answers: ['Chomolungma', 'Sagarmatha', 'Kanchenjunga', 'Machhapuchhre'],
    correctAnswer: 1,
    explanation:
      'In Nepal, the mountain is called Sagarmatha ("Forehead of the Sky"). The Tibetan name is Chomolungma.',
  },
  {
    question: 'Which lake is the centerpiece of the tourist city of Pokhara?',
    answers: ['Rara Lake', 'Phewa Lake', 'Tilicho Lake', 'Gokyo Lake'],
    correctAnswer: 1,
    explanation:
      'Phewa Lake is famous for its reflection of the Annapurna range, including the sacred peak Machhapuchhre (Fishtail).',
  },
  {
    question:
      'Which National Park is best known for its population of Greater One-Horned Rhinos?',
    answers: [
      'Sagarmatha National Park',
      'Bardia National Park',
      'Chitwan National Park',
      'Langtang National Park',
    ],
    correctAnswer: 2,
    explanation:
      'Chitwan National Park, a UNESCO World Heritage site in the Terai lowlands, is the most famous place to see rhinos, tigers, and elephants.',
  },
  {
    question: 'What is the national flower of Nepal?',
    answers: ['Lotus', 'Rhododendron (Lali Gurans)', 'Sunflower', 'Orchid'],
    correctAnswer: 1,
    explanation:
      'The Rhododendron, locally known as Lali Gurans, blooms brightly across the Himalayan hills in the spring.',
  },
  {
    question: 'What is the national bird of Nepal?',
    answers: [
      'Himalayan Monal (Danphe)',
      'Snow Leopard',
      'Peacock',
      'Red Panda',
    ],
    correctAnswer: 0,
    explanation:
      'The Himalayan Monal (Danphe) is a colorful pheasant found in the high altitudes of the Himalayas.',
  },
  {
    question: 'Which of these is the largest lake in Nepal?',
    answers: ['Phewa Lake', 'Rara Lake', 'Tilicho Lake', 'Begnas Lake'],
    correctAnswer: 1,
    explanation:
      'Rara Lake, located in the remote Mugu district, is the largest and deepest lake in Nepal.',
  },
  {
    question: 'What is the flat, fertile southern region of Nepal called?',
    answers: [
      'The Himalayas',
      'The Terai',
      'The Mid-Hills',
      'The Tibetan Plateau',
    ],
    correctAnswer: 1,
    explanation:
      "The Terai is the northern edge of the Indo-Gangetic Plain, bordering India, and is home to Nepal's agricultural heartland and wildlife parks.",
  },
  {
    question: 'How tall is Mount Everest (official 2020 measurement)?',
    answers: [
      '8,848 meters',
      '8,848.86 meters',
      '8,611 meters',
      '8,167 meters',
    ],
    correctAnswer: 1,
    explanation:
      'In 2020, China and Nepal jointly announced the newly measured height of Everest as 8,848.86 meters (29,031.7 ft).',
  },
  {
    question: 'Which valley is known as the "Gateway to the Everest Region"?',
    answers: [
      'Kathmandu Valley',
      'Pokhara Valley',
      'Namche Bazaar',
      'Langtang Valley',
    ],
    correctAnswer: 2,
    explanation:
      'Namche Bazaar (3,440m) is the main trading hub and acclimatization stop for trekkers heading to Everest Base Camp.',
  },
  {
    question: 'Which three ancient cities make up the Kathmandu Valley?',
    answers: [
      'Kathmandu, Pokhara, Chitwan',
      'Kathmandu, Patan (Lalitpur), Bhaktapur',
      'Kathmandu, Namche, Lukla',
      'Kathmandu, Lumbini, Janakpur',
    ],
    correctAnswer: 1,
    explanation:
      'The Kathmandu Valley historically consists of three distinct royal cities: Kathmandu, Patan (Lalitpur), and Bhaktapur.',
  },
  {
    question: 'Where is the birthplace of Lord Buddha located in Nepal?',
    answers: ['Kathmandu', 'Lumbini', 'Pokhara', 'Janakpur'],
    correctAnswer: 1,
    explanation:
      'Lumbini, located in the Rupandehi District, is a UNESCO World Heritage site and the birthplace of Siddhartha Gautama (Lord Buddha).',
  },
  {
    question: 'What is the highest mountain entirely within Nepal?',
    answers: ['Mount Everest', 'Kanchenjunga', 'Annapurna I', 'Manaslu'],
    correctAnswer: 3,
    explanation:
      "While Everest is shared with China, Manaslu (8,163m) is the highest peak entirely within Nepal's borders.",
  },
  {
    question: 'Why is "Dal Bhat" considered the ultimate trekker\'s meal?',
    answers: [
      'It is the cheapest thing on the menu',
      'It provides a balanced diet and is usually refillable',
      'It is the only food available above 4,000m',
      'It is quick to cook',
    ],
    correctAnswer: 1,
    explanation:
      'Dal Bhat (lentil soup and rice) provides a perfect mix of carbs and protein for energy. Most lodges offer free refills, making it the best fuel for long trekking days.',
  },
  {
    question: 'What is the best time of year for trekking in Nepal?',
    answers: [
      'June to August',
      'January to February',
      'October to November and March to May',
      'July to September',
    ],
    correctAnswer: 2,
    explanation:
      'Autumn (Oct-Nov) and Spring (Mar-May) offer stable weather, clear skies, and moderate temperatures. Summer is the monsoon, and winter is dangerously cold at high altitudes.',
  },
  {
    question: 'What are "Momo"?',
    answers: [
      'A type of mountain boots',
      'Nepali dumplings usually filled with meat or vegetables',
      'A traditional greeting',
      'Prayer flags',
    ],
    correctAnswer: 1,
    explanation:
      'Momo are steamed or fried dumplings, often served with a spicy tomato-chili dipping sauce (achar). They are a staple snack in Nepal.',
  },
  {
    question: 'What is a "Tea House" in the context of Nepali trekking?',
    answers: [
      'A literal house made of tea leaves',
      'A small lodge along the trail offering food and accommodation',
      'A shop that only sells tea',
      'A government rest stop',
    ],
    correctAnswer: 1,
    explanation:
      'Tea house trekking means you sleep and eat at local lodges along the route, rather than camping. They are the backbone of the Nepali trekking industry.',
  },
  {
    question: 'What is the local currency of Nepal?',
    answers: [
      'Indian Rupee',
      'Nepalese Rupee',
      'US Dollar',
      'Tibetan Ngultrum',
    ],
    correctAnswer: 1,
    explanation:
      'The Nepalese Rupee (NPR) is the official currency. Indian Rupees are also widely accepted, but larger notes are often refused.',
  },
  {
    question: 'What is a "Doko"?',
    answers: [
      'A traditional woven basket carried on the back',
      'A type of Nepali bread',
      'A mountain peak',
      'A blessing scarf',
    ],
    correctAnswer: 0,
    explanation:
      'The Doko is a conical woven bamboo basket used by porters and farmers to carry heavy loads, supported by a strap across the forehead.',
  },
  {
    question: 'What is "Thukpa"?',
    answers: [
      'A Tibetan noodle soup, popular in the mountains',
      'A fried bread',
      'A type of yak cheese',
      'A spicy pickle',
    ],
    correctAnswer: 0,
    explanation:
      'Thukpa is a hearty noodle soup, often with vegetables or meat, that is perfect for warming up in cold mountain climates.',
  },
  {
    question: 'What is the "Khukuri"?',
    answers: [
      'A curved knife used by Gurkhas',
      'A mountain shelter',
      'A religious temple',
      'A type of drum',
    ],
    correctAnswer: 0,
    explanation:
      'The Khukuri is the traditional curved knife of Nepal, famous for being the weapon of the Gurkha soldiers.',
  },
  {
    question:
      'If you buy bottled water on the trail, what should you do with the plastic bottle?',
    answers: [
      'Leave it at the tea house',
      'Throw it in the river',
      'Carry it out with you to recycle properly',
      'Bury it',
    ],
    correctAnswer: 2,
    explanation:
      '"Leave No Trace." Nepal\'s trails struggle with plastic pollution. It is best to carry a reusable bottle and use purification tablets or filters.',
  },
  {
    question: 'What does "Namaste" mean when used as a goodbye?',
    answers: [
      'It means "See you later"',
      'It carries the same spiritual meaning as hello',
      'It means "Go in peace"',
      'It is considered rude',
    ],
    correctAnswer: 1,
    explanation:
      'Namaste is used for both hello and goodbye, carrying the same respectful meaning of acknowledging the divine in the other person.',
  },
  {
    question: 'What is the best way to respect local porters on the trail?',
    answers: [
      'Give them all your heavy gear',
      'Walk ahead of them quickly',
      'Keep your pack light and treat them with dignity',
      'Pay them in advance',
    ],
    correctAnswer: 2,
    explanation:
      'Porters work incredibly hard. You should carry your own daypack, keep your main bag under the weight limit, and always treat them as respected team members.',
  },
  {
    question: 'Newari architecture is especially known for intricately carved:',
    answers: [
      'Wooden windows and roof struts',
      'Glass domes',
      'Steel beams',
      'Poured concrete facades',
    ],
    correctAnswer: 0,
    explanation:
      'Elaborately carved wooden windows, doors, and struts are a signature of Newari craftsmanship.',
  },
  {
    question:
      'A Newar architect named Araniko is historically credited with influencing pagoda-style architecture in which country?',
    answers: ['China', 'Nowhere outside Nepal', 'Bhutan only', 'Sri Lanka'],
    correctAnswer: 0,
    explanation:
      'Araniko traveled to China in the 13th century and helped introduce pagoda-style design there.',
  },
  {
    question:
      "During Dashain, Nepal's biggest festival, younger family members receive from elders:",
    answers: [
      'Tika and blessings',
      'Fireworks only',
      'New Year resolutions',
      'Gift cards',
    ],
    correctAnswer: 0,
    explanation:
      'Elders apply tika (a mix of rice, yogurt, and vermilion) and give blessings during Dashain.',
  },
  {
    question:
      'Tihar, the festival of lights, includes a day dedicated to honoring which animal for its loyalty?',
    answers: ['Dogs', 'Cats', 'Horses', 'Elephants'],
    correctAnswer: 0,
    explanation:
      'Kukur Tihar, a day of Tihar, honors dogs with garlands, tika, and treats.',
  },
  {
    question:
      'Which massive stupa in Kathmandu is a major Tibetan Buddhist pilgrimage site?',
    answers: ['Boudhanath', 'Pashupatinath', 'Changunarayan', 'Kumari Ghar'],
    correctAnswer: 0,
    explanation:
      'Boudhanath is one of the largest stupas in the world and a key Tibetan Buddhist site.',
  },
  {
    question:
      'Pashupatinath Temple, a major Hindu pilgrimage site, is dedicated to which deity?',
    answers: ['Shiva', 'Vishnu', 'Buddha', 'Ganesh'],
    correctAnswer: 0,
    explanation:
      'Pashupatinath, on the banks of the Bagmati River, is dedicated to Lord Shiva.',
  },
  {
    question: 'What is the everyday staple meal eaten across most of Nepal?',
    answers: ['Dal Bhat', 'Momo', 'Sel Roti', 'Thukpa'],
    correctAnswer: 0,
    explanation:
      'Dal bhat, lentil soup with rice and side dishes, is the staple meal for most Nepalis.',
  },
  {
    question: "Momo, one of Nepal's most popular dishes, is a type of:",
    answers: [
      'Steamed or fried dumpling',
      'Rice pudding',
      'Flatbread',
      'Clear soup',
    ],
    correctAnswer: 0,
    explanation:
      'Momo are dumplings filled with meat or vegetables, usually steamed or fried and served with a spicy dip.',
  },
  {
    question: 'The traditional cap worn by many Nepali men is called:',
    answers: ['Dhaka Topi', 'Sombrero', 'Turban', 'Beret'],
    correctAnswer: 0,
    explanation:
      'The Dhaka Topi, made from handwoven Dhaka fabric, is a recognizable piece of Nepali dress.',
  },
  {
    question: 'Dhaka fabric, used for topis and shawls, is known for its:',
    answers: [
      'Colorful handwoven geometric patterns',
      'Plain plastic sheen',
      'Purely metallic threading',
      'Machine-only production',
    ],
    correctAnswer: 0,
    explanation:
      'Dhaka cloth is handwoven with distinctive, colorful geometric patterns, historically from eastern Nepal.',
  },
  {
    question: "Nepal contains how many of the world's fourteen 8,000m peaks?",
    answers: ['3', '8', '10', '14'],
    correctAnswer: 1,
    explanation:
      "Eight of the world's fourteen 8,000m peaks, including Everest, lie within or on Nepal's borders.",
  },
  {
    question:
      'The Himalayan range runs across Nepal roughly in which direction?',
    answers: [
      'East to west',
      'North to south',
      'Diagonally in the far east only',
      'It does not cross Nepal',
    ],
    correctAnswer: 0,
    explanation:
      "The Himalaya forms a long east-west arc along Nepal's northern border.",
  },
  {
    question: 'What is the officially recognized height of Mount Everest?',
    answers: ['8,611 m', '8,849 m', '8,163 m', '7,925 m'],
    correctAnswer: 1,
    explanation:
      "A joint Nepal-China survey confirmed Everest's height at 8,848.86 m (commonly rounded to 8,849 m).",
  },
  {
    question:
      "Kanchenjunga, the world's third-highest peak, sits on the border of Nepal and which country?",
    answers: ['India', 'China', 'Bhutan', 'Myanmar'],
    correctAnswer: 0,
    explanation:
      "Kanchenjunga straddles the border between eastern Nepal and India's Sikkim state.",
  },
  {
    question:
      'Which major Himalayan-origin river system in Nepal eventually flows into the Ganges?',
    answers: ['Koshi', 'Nile', 'Mekong', 'Yangtze'],
    correctAnswer: 0,
    explanation:
      'The Koshi River rises in the Nepal Himalaya and joins the Ganges in India.',
  },
  {
    question:
      "Phewa Lake, Nepal's second-largest lake, is located in which city?",
    answers: ['Pokhara', 'Kathmandu', 'Bhaktapur', 'Biratnagar'],
    correctAnswer: 0,
    explanation:
      "Phewa Lake is Pokhara's centerpiece, framed by views of the Annapurna range.",
  },
  {
    question:
      'Which national park is famous for one-horned rhinos and Bengal tigers?',
    answers: [
      'Chitwan National Park',
      'Sagarmatha National Park',
      'Langtang National Park',
      'Rara National Park',
    ],
    correctAnswer: 0,
    explanation:
      'Chitwan National Park in the Terai lowlands protects rhinos, tigers, and diverse wildlife.',
  },
  {
    question:
      'Sagarmatha National Park protects the region around which mountain?',
    answers: ['Everest', 'Annapurna', 'Manaslu', 'Dhaulagiri'],
    correctAnswer: 0,
    explanation:
      'Sagarmatha (Everest) National Park covers the Khumbu region surrounding Mount Everest.',
  },
  {
    question: "What is Nepal's national flower?",
    answers: ['Rhododendron', 'Rose', 'Lotus', 'Sunflower'],
    correctAnswer: 0,
    explanation:
      "The rhododendron, locally called 'Lali Gurans,' is Nepal's national flower.",
  },
  {
    question:
      "Which elusive high-altitude cat is found in Nepal's mountain regions?",
    answers: ['Snow leopard', 'Bengal tiger', 'Lion', 'Cheetah'],
    correctAnswer: 0,
    explanation:
      "The snow leopard inhabits Nepal's remote high-altitude terrain, including Dolpo and Manang.",
  },
  {
    question:
      'As trekkers gain elevation in Nepal, the climate generally becomes:',
    answers: ['Colder and drier', 'Warmer and wetter', 'Unchanged', 'Tropical'],
    correctAnswer: 0,
    explanation:
      "Temperature drops and air becomes drier with increasing elevation along Nepal's trekking routes.",
  },
  {
    question:
      "Compared to the mountains, Nepal's lowland Terai region has a climate that is:",
    answers: [
      'Subtropical and warmer',
      'Arctic',
      'Identical to high mountains',
      'Desert-like year-round',
    ],
    correctAnswer: 0,
    explanation:
      'The Terai lowlands are subtropical and much warmer and more humid than the high mountains.',
  },
  {
    question: 'What is the medical term for altitude sickness?',
    answers: [
      'Acute Mountain Sickness (AMS)',
      'Motion sickness',
      'Hypothermia',
      'Frostbite',
    ],
    correctAnswer: 0,
    explanation:
      'Acute Mountain Sickness (AMS) results from ascending faster than the body can adjust to lower oxygen levels.',
  },
  {
    question:
      'A common guideline above 3,000m is to limit sleeping-elevation gain per day to about:',
    answers: [
      '300-500 m',
      '2,000 m',
      'No limit needed',
      'Only ascend at night',
    ],
    correctAnswer: 0,
    explanation:
      'Limiting daily sleeping-altitude gain to roughly 300-500 m helps the body acclimatize safely.',
  },
  {
    question:
      'Restricted area permits, such as for Manaslu or Upper Mustang, typically require trekkers to:',
    answers: [
      'Travel with a registered guide or agency',
      'Trek completely alone',
      'Pay no fees at all',
      'Skip all paperwork',
    ],
    correctAnswer: 0,
    explanation:
      'Restricted areas require a registered guide and a minimum group arrangement as part of the permit.',
  },
  {
    question:
      'Which item is essential for high-altitude teahouse trekking due to cold nights?',
    answers: [
      'A warm sleeping bag',
      'Beach sandals',
      'An umbrella only',
      'A swimsuit',
    ],
    correctAnswer: 0,
    explanation:
      'Teahouse rooms are often unheated, so a warm sleeping bag is essential at altitude.',
  },
  {
    question:
      'Layering clothing while trekking is important mainly because mountain weather is:',
    answers: [
      'Highly variable and changes quickly',
      'Always the same',
      'Always hot',
      'Always freezing',
    ],
    correctAnswer: 0,
    explanation:
      'Temperatures and conditions can shift rapidly with altitude and time of day, making layers essential.',
  },
  {
    question: 'The two most popular trekking seasons in Nepal are:',
    answers: [
      'Spring (Mar-May) and Autumn (Sep-Nov)',
      'Monsoon and Winter only',
      'December only',
      'July only',
    ],
    correctAnswer: 0,
    explanation:
      'Spring and autumn offer the clearest skies and most stable weather for trekking.',
  },
  {
    question:
      'Trekking during the monsoon season (Jun-Aug) is less popular mainly because of:',
    answers: [
      'Heavy rain, leeches, and obscured mountain views',
      'Extreme cold',
      'Trail closures for holidays',
      'No accommodation available',
    ],
    correctAnswer: 0,
    explanation:
      'Monsoon rains bring muddy trails, leeches, and clouds that block mountain views.',
  },
  {
    question: 'Hiring a local guide mainly helps trekkers with:',
    answers: [
      'Navigation, safety, and cultural insight',
      'Cooking meals only',
      'Nothing useful',
      'Carrying bags only',
    ],
    correctAnswer: 0,
    explanation:
      'Guides assist with route-finding, safety decisions, permits, and sharing local cultural context.',
  },
  {
    question: "A porter's main role on a trek is to:",
    answers: [
      'Carry luggage and gear',
      'Lead technical mountaineering climbs',
      'Sell trekking permits',
      'Pilot rescue helicopters',
    ],
    correctAnswer: 0,
    explanation:
      "Porters carry trekkers' loads, allowing them to hike with lighter daypacks.",
  },
  {
    question: "'Teahouse trekking' refers to trekking style where hikers:",
    answers: [
      'Stay in basic lodges along the trail',
      'Camp in tents every night',
      'Stay only in five-star hotels',
      'Sleep outdoors with no shelter',
    ],
    correctAnswer: 0,
    explanation:
      'Teahouses are simple family-run lodges offering rooms and meals along popular trekking routes.',
  },
  {
    question: 'Meals at teahouses along popular routes commonly include:',
    answers: [
      'Dal bhat and noodle dishes',
      'Only fast food',
      'Only raw food',
      'Only imported meals',
    ],
    correctAnswer: 0,
    explanation:
      'Teahouse menus typically feature dal bhat, noodles, soups, and simple local dishes.',
  },
  {
    question:
      'If a trekker develops severe altitude sickness, the recommended immediate action is to:',
    answers: [
      'Descend to a lower elevation',
      'Continue climbing higher',
      'Ignore the symptoms',
      'Wait a week at the same altitude',
    ],
    correctAnswer: 0,
    explanation:
      'Immediate descent is the most effective treatment for worsening altitude sickness.',
  },
  {
    question:
      'In remote high-altitude areas, emergency evacuation typically relies on:',
    answers: [
      'Helicopter rescue',
      'Train service',
      'Car ambulance',
      'Boat transport',
    ],
    correctAnswer: 0,
    explanation:
      'Helicopter rescue is the standard method for evacuating trekkers from remote mountain trails.',
  },
  {
    question:
      'On narrow mountain trails, who traditionally has the right of way?',
    answers: [
      'Uphill trekkers and loaded pack animals',
      'Photographers',
      "No one; it's unregulated",
      'Whoever moves fastest',
    ],
    correctAnswer: 0,
    explanation:
      'Trail custom gives right of way to trekkers going uphill and to loaded mules or yaks.',
  },
  {
    question:
      'When passing chortens or mani walls, trekkers traditionally pass on which side?',
    answers: [
      'The left side, moving clockwise',
      'The right side only',
      'Either side; no custom exists',
      'They should never be passed',
    ],
    correctAnswer: 0,
    explanation:
      'Buddhist custom is to pass chortens and mani walls on the left, keeping them on the right (clockwise).',
  },
  {
    question:
      'The Sherpa people are traditionally associated with which region of Nepal?',
    answers: [
      'The Khumbu/Everest region',
      'The Terai plains',
      'Kathmandu Valley only',
      'Far-western Nepal only',
    ],
    correctAnswer: 0,
    explanation:
      'Sherpas have long inhabited the high Khumbu valleys around Everest and are central to mountaineering there.',
  },
  {
    question:
      'Tenzing Norgay, an ethnic Sherpa, is famous for being one of the first two people to summit:',
    answers: ['Mount Everest', 'K2', 'Kanchenjunga', 'Annapurna'],
    correctAnswer: 0,
    explanation: 'Tenzing Norgay summited Everest with Edmund Hillary in 1953.',
  },
  {
    question:
      'The Newar community is traditionally associated with which region?',
    answers: [
      'Kathmandu Valley',
      'The Everest region',
      'The Terai plains',
      'The far-western mountains',
    ],
    correctAnswer: 0,
    explanation:
      'The Newars are the historic inhabitants and civic builders of the Kathmandu Valley.',
  },
  {
    question:
      'Gurkha soldiers, renowned worldwide for their bravery, traditionally come from which ethnic groups?',
    answers: ['Gurung and Magar', 'Newar only', 'Tharu only', 'Madhesi only'],
    correctAnswer: 0,
    explanation:
      'Gurkha regiments have long drawn heavily from the Gurung and Magar hill communities.',
  },
  {
    question:
      'Which Nepali mountaineer led the team that achieved the first winter ascent of K2 in 2021?',
    answers: [
      'Nirmal Purja',
      'Tenzing Norgay',
      'Apa Sherpa',
      'Kami Rita Sherpa',
    ],
    correctAnswer: 0,
    explanation:
      "Nirmal Purja led the Nepali climbing team that completed K2's historic first winter ascent in January 2021.",
  },
  {
    question:
      'In what year did Edmund Hillary and Tenzing Norgay first summit Everest?',
    answers: ['1953', '1963', '1975', '1990'],
    correctAnswer: 0,
    explanation:
      'Hillary and Norgay reached the summit of Everest on 29 May 1953.',
  },
  {
    question: 'Everest is known by which traditional Nepali name?',
    answers: ['Sagarmatha', 'Chomolungma only', 'Machapuchare', 'Dhaulagiri'],
    correctAnswer: 0,
    explanation:
      'In Nepal, Everest is officially called Sagarmatha; Tibetans call it Chomolungma.',
  },
  {
    question:
      'Nepal was unified into a single kingdom in the 18th century largely by which king?',
    answers: ['Prithvi Narayan Shah', 'Ashoka', 'Akbar', 'Tribhuvan'],
    correctAnswer: 0,
    explanation:
      "Prithvi Narayan Shah, King of Gorkha, led the campaigns that unified Nepal's small states in the 1700s.",
  },
  {
    question:
      "Nepal's monarchy officially ended, and the country became a federal republic, in which year?",
    answers: ['2008', '1990', '1951', '2015'],
    correctAnswer: 0,
    explanation:
      'Nepal abolished its monarchy and declared a federal democratic republic in 2008.',
  },
  {
    question:
      'Nepal is a landlocked country situated between which two nations?',
    answers: [
      'India and China',
      'India and Bangladesh',
      'China and Pakistan',
      'Bhutan and India only',
    ],
    correctAnswer: 0,
    explanation:
      'Nepal lies landlocked between India to the south/east/west and China (Tibet) to the north.',
  },
  {
    question:
      "Nepal's geography is commonly divided into mountains, hills, and which third region?",
    answers: ['Terai (plains)', 'Desert', 'Coastal zone', 'Island chain'],
    correctAnswer: 0,
    explanation:
      "The flat, fertile Terai plains form the southern strip of Nepal's three main geographic regions.",
  },
  {
    question: "What is Nepal's official national language?",
    answers: ['Nepali', 'Hindi', 'English', 'Newari'],
    correctAnswer: 0,
    explanation:
      "Nepali, written in the Devanagari script, is Nepal's official and most widely spoken language.",
  },
  {
    question:
      'Roughly how many other languages, besides Nepali, are spoken across the country?',
    answers: ['Over 100', 'Only 2', 'Only 5', 'None'],
    correctAnswer: 0,
    explanation:
      'Nepal is linguistically diverse, with more than 100 languages spoken among its many ethnic groups.',
  },
  {
    question: "What is Nepal's official currency?",
    answers: [
      'Nepalese Rupee (NPR)',
      'Indian Rupee',
      'US Dollar',
      'Nepali Taka',
    ],
    correctAnswer: 0,
    explanation: "Nepal's official currency is the Nepalese Rupee (NPR).",
  },
  {
    question:
      'For budget travelers, teahouse trekking is generally considered:',
    answers: [
      'Affordable compared to fully guided expeditions',
      'More expensive than five-star hotels',
      'Completely free',
      'Unavailable to tourists',
    ],
    correctAnswer: 0,
    explanation:
      'Teahouse trekking keeps daily costs relatively low compared to organized mountaineering expeditions.',
  },
  {
    question:
      'Which small mountain airport is the famous gateway to the Everest region?',
    answers: [
      'Lukla Airport',
      'Pokhara Airport',
      'Bhairahawa Airport',
      'Kathmandu Airport only',
    ],
    correctAnswer: 0,
    explanation:
      'Tenzing-Hillary Airport in Lukla, known for its short runway, is the main air gateway to the Khumbu.',
  },
  {
    question:
      'Aside from domestic flights, most long-distance travel between Nepali cities relies on:',
    answers: ['Buses', 'Subway systems', 'Trains', 'Trams'],
    correctAnswer: 0,
    explanation:
      'Nepal has an extensive bus network connecting cities, since it has no national railway or subway system.',
  },
  {
    question:
      'Responsible trekkers are encouraged to reduce plastic waste mainly by:',
    answers: [
      'Carrying reusable bottles and water filters',
      'Buying more bottled water',
      'Leaving trash on less-visited trails',
      'Ignoring local guidelines',
    ],
    correctAnswer: 0,
    explanation:
      'Reusable bottles and filtration reduce single-use plastic waste along popular trekking routes.',
  },
  {
    question:
      'Choosing local teahouses and guides during a trek mainly helps to:',
    answers: [
      'Sustain local mountain economies',
      'Harm the local economy',
      'Increase pollution',
      'Have no economic effect',
    ],
    correctAnswer: 0,
    explanation:
      'Spending directly with local lodges and guides channels tourism income into mountain communities.',
  },
  {
    question:
      'How many UNESCO World Heritage Sites (cultural and natural combined) does Nepal have?',
    answers: ['4', '2', '10', '20'],
    correctAnswer: 0,
    explanation:
      'Nepal has four UNESCO World Heritage Sites: Kathmandu Valley, Lumbini, Chitwan National Park, and Sagarmatha National Park.',
  },
  {
    question:
      'Which UNESCO natural site in Nepal is home to the Bengal tiger and one-horned rhino?',
    answers: [
      'Chitwan National Park',
      'Sagarmatha National Park',
      'Kathmandu Valley',
      'Lumbini',
    ],
    correctAnswer: 0,
    explanation:
      "Chitwan National Park is one of Nepal's two natural UNESCO sites, protecting tigers and rhinos.",
  },
];

export const TRIVIA_QUESTIONS_BY_TREK: Record<string, TriviaQuestion[]> = {
  'ebc-trek': [
    {
      question:
        'What is the elevation of Everest Base Camp on the Nepal (south) side?',
      answers: ['3,440 m', '5,364 m', '6,190 m', '8,848 m'],
      correctAnswer: 1,
      explanation:
        'EBC South sits at roughly 5,364 m in the Khumbu region, the staging point for Everest summit attempts.',
    },
    {
      question:
        'Which small mountain airport do most EBC trekkers fly into to start the trek?',
      answers: ['Pokhara', 'Lukla', 'Jomsom', 'Bhairahawa'],
      correctAnswer: 1,
      explanation:
        "Lukla's short mountain airstrip is the standard gateway into the Khumbu region for EBC trekkers.",
    },
  ],
  'gokyo-valley-trek': [
    {
      question:
        'Gokyo Ri is climbed for panoramic views that include which mountain?',
      answers: ['Everest', 'Manaslu', 'Dhaulagiri', 'Machapuchare'],
      correctAnswer: 0,
      explanation:
        'Gokyo Ri offers one of the best panoramic viewpoints of Everest, Cho Oyu, and neighboring peaks.',
    },
    {
      question: 'Which glacier runs alongside the Gokyo lakes?',
      answers: [
        'Ngozumpa Glacier',
        'Khumbu Glacier',
        'Langtang Glacier',
        'Annapurna Glacier',
      ],
      correctAnswer: 0,
      explanation:
        "The Ngozumpa Glacier, Nepal's longest glacier, flows past the turquoise Gokyo lakes.",
    },
  ],
  'langtang-valley': [
    {
      question: 'Langtang Valley is often nicknamed which of the following?',
      answers: [
        'Valley of Flowers',
        'Valley of Glaciers',
        'Valley of Rivers',
        'Valley of Deserts',
      ],
      correctAnswer: 1,
      explanation:
        "Langtang's dramatic ice-capped peaks and glaciers have earned it the nickname 'Valley of Glaciers'.",
    },
    {
      question: 'Langtang region was severely affected by which 2015 disaster?',
      answers: ['Flood', 'Earthquake', 'Wildfire', 'Drought'],
      correctAnswer: 1,
      explanation:
        'The 2015 Gorkha earthquake triggered a massive landslide that devastated Langtang village.',
    },
  ],
  'abc-trek': [
    {
      question: 'The ABC trek lies within which protected area?',
      answers: [
        'Sagarmatha National Park',
        'Annapurna Conservation Area',
        'Langtang National Park',
        'Chitwan National Park',
      ],
      correctAnswer: 1,
      explanation:
        "ABC sits inside the Annapurna Conservation Area, Nepal's largest protected area.",
    },
    {
      question:
        'What is the highest pass on the classic Annapurna Circuit trek?',
      answers: ['Thorong La', 'Everest Base Camp', 'Larkya La', 'Cho La'],
      correctAnswer: 0,
      explanation:
        'Thorong La Pass sits at an elevation of 5,416 meters (17,769 ft) and is the highest point of the Annapurna Circuit.',
    },
  ],
  'mardi-himal-trek': [
    {
      question: 'Mardi Himal is a popular short trek near which lakeside city?',
      answers: ['Kathmandu', 'Pokhara', 'Biratnagar', 'Butwal'],
      correctAnswer: 1,
      explanation:
        'Mardi Himal starts within easy reach of Pokhara, making it a popular shorter alternative trek.',
    },
  ],
  'ghorepani-poon-hill-trek': [
    {
      question:
        'Poon Hill is famous for sunrise views of which mountain range?',
      answers: [
        'Annapurna and Dhaulagiri',
        'Everest and Lhotse',
        'Kanchenjunga',
        'Manaslu only',
      ],
      correctAnswer: 0,
      explanation:
        'From Poon Hill, trekkers watch sunrise light spread across the Annapurna and Dhaulagiri ranges.',
    },
    {
      question:
        'The villages along the Ghorepani Poon Hill route are mainly home to which ethnic groups?',
      answers: ['Sherpa', 'Gurung and Magar', 'Newar', 'Tharu'],
      correctAnswer: 1,
      explanation:
        'The trail passes through Gurung and Magar villages known for their distinct hill culture.',
    },
  ],
  'manaslu-circuit': [
    {
      question:
        'Trekking in the Manaslu region requires a special permit because it is classified as a:',
      answers: [
        'Restricted area',
        'Urban zone',
        'UNESCO monument',
        'Private estate',
      ],
      correctAnswer: 0,
      explanation:
        'Manaslu is a restricted trekking area, requiring a special permit and a registered guide.',
    },
  ],
  'tilicho-lake-trek': [
    {
      question:
        'The Tilicho Lake trek is most commonly combined with which longer route?',
      answers: [
        'Everest Circuit',
        'Annapurna Circuit',
        'Manaslu Circuit',
        'Langtang Circuit',
      ],
      correctAnswer: 1,
      explanation:
        'Tilicho Lake is typically added onto or trekked alongside the classic Annapurna Circuit.',
    },
  ],
  'shey-phoksundo': [
    {
      question:
        "Shey Phoksundo Lake, Nepal's deepest lake, sits inside which national park?",
      answers: [
        'Sagarmatha National Park',
        'Shey Phoksundo National Park',
        'Bardia National Park',
        'Rara National Park',
      ],
      correctAnswer: 1,
      explanation:
        'The lake gives its name to Shey Phoksundo National Park in the remote Dolpo region.',
    },
    {
      question: 'Shey Phoksundo Lake is especially known for its striking:',
      answers: [
        'Turquoise color',
        'Boiling water',
        'High salt content',
        'Underground caves',
      ],
      correctAnswer: 0,
      explanation:
        'Mineral content gives Shey Phoksundo its vivid turquoise-blue color.',
    },
  ],
  'dhulikhel-namobuddha': [
    {
      question:
        'The Dhulikhel-Namobuddha hike combines nature walking with visiting what kind of site?',
      answers: [
        'A pilgrimage/monastery site',
        'A beach resort',
        'A ski slope',
        'An international airport',
      ],
      correctAnswer: 0,
      explanation:
        'The trail ends at Namobuddha, a hilltop pilgrimage and monastery site.',
    },
    {
      question: 'Namobuddha is a significant site in which religion?',
      answers: ['Hinduism', 'Buddhism', 'Islam', 'Christianity'],
      correctAnswer: 1,
      explanation:
        'Namobuddha commemorates a Buddhist Jataka tale and is an important Buddhist pilgrimage site.',
    },
  ],
  'nagarkot-changunarayan': [
    {
      question: 'Nagarkot is popular chiefly for viewing what at sunrise?',
      answers: [
        'Ocean waves',
        'Himalayan mountain panoramas',
        'Waterfalls',
        'City skylines',
      ],
      correctAnswer: 1,
      explanation:
        "Nagarkot's ridge-top position gives sweeping sunrise views across the Himalayan range.",
    },
    {
      question: 'Changunarayan, the endpoint of this hike, is recognized as a:',
      answers: [
        'UNESCO World Heritage Site',
        'Modern shopping complex',
        'Military installation',
        'Ski resort',
      ],
      correctAnswer: 0,
      explanation:
        'Changunarayan Temple is part of the Kathmandu Valley UNESCO World Heritage listing.',
    },
  ],
  'godawari-phulchoki': [
    {
      question:
        'Ridge hikes around the rim of Kathmandu Valley typically offer views of:',
      answers: [
        'The valley and distant Himalayas',
        'The open ocean',
        'Desert dunes',
        'Rice paddies exclusively',
      ],
      correctAnswer: 0,
      explanation:
        'Forested ridgelines encircling the valley give hikers views over Kathmandu and the mountains beyond.',
    },
    {
      question:
        'Which is a well-known Kathmandu Valley rim hiking destination combining forest and viewpoint?',
      answers: [
        'Shivapuri/Champadevi',
        'Everest Base Camp',
        'Tilicho Lake',
        'Manaslu Circuit',
      ],
      correctAnswer: 0,
      explanation:
        'Shivapuri and Champadevi are classic short rim hikes accessible directly from the valley.',
    },
  ],
  'kathmandu-valley-heritage-tour': [
    {
      question:
        'Kathmandu Durbar Square suffered significant damage in which event?',
      answers: [
        'The 2015 earthquake',
        'A major flood',
        'A large fire',
        'A landslide',
      ],
      correctAnswer: 0,
      explanation:
        'The 2015 Gorkha earthquake damaged or destroyed several structures in the square.',
    },
    {
      question:
        'Patan (Lalitpur) is especially renowned for its heritage in which craft?',
      answers: [
        'Metalwork and wood carving',
        'Glassblowing',
        'Papermaking only',
        'Textile weaving only',
      ],
      correctAnswer: 0,
      explanation:
        'Patan has a centuries-old reputation for fine metal statues and intricate wood carving.',
    },
    {
      question:
        'Bhaktapur is especially famous for a local yogurt dish called:',
      answers: ['Juju Dhau (King Curd)', 'Momo', 'Sel Roti', 'Dal Bhat'],
      correctAnswer: 0,
      explanation:
        "Juju Dhau, or 'King Curd,' is a rich, clay-pot-set yogurt that originated in Bhaktapur.",
    },
    {
      question:
        "Bhaktapur's Durbar Square is a well-preserved example of which architectural style?",
      answers: [
        'Newari medieval architecture',
        'Modern glass towers',
        'Mughal domes',
        'Colonial British style',
      ],
      correctAnswer: 0,
      explanation:
        'Bhaktapur retains some of the best-preserved Newari pagoda and palace architecture in Nepal.',
    },
  ],
  'lumbini-tour': [
    {
      question:
        'Lumbini is marked by an ancient stone pillar erected by which emperor?',
      answers: ['Ashoka', 'Akbar', 'Chandragupta', 'Kanishka'],
      correctAnswer: 0,
      explanation:
        "Emperor Ashoka erected a pillar at Lumbini in the 3rd century BCE marking Buddha's birthplace.",
    },
    {
      question: 'Lumbini is located in which part of Nepal?',
      answers: [
        'The southern Terai plains',
        'The high Himalaya',
        'The eastern hills',
        'The far-western mountains',
      ],
      correctAnswer: 0,
      explanation:
        "Lumbini sits in the low-lying Terai region near Nepal's southern border.",
    },
  ],
  'bandipur-hill-town': [
    {
      question:
        'Bandipur preserves the architecture and culture of which historic trading community?',
      answers: [
        'Newar merchants',
        'Sherpa traders',
        'Tharu farmers',
        'Rai warriors',
      ],
      correctAnswer: 0,
      explanation:
        'Bandipur grew as a Newar trading town and retains its distinctive brick-and-timber streets.',
    },
    {
      question:
        "Bandipur's ridge-top setting offers views of which mountain ranges?",
      answers: [
        'Annapurna and Manaslu',
        'Everest only',
        'Kanchenjunga only',
        'Karakoram',
      ],
      correctAnswer: 0,
      explanation:
        "From Bandipur's ridge, both the Annapurna and Manaslu ranges are visible on a clear day.",
    },
  ],
};
