// Generated from trivia qns.docx. Do not edit question content manually.

export type TriviaQuestion = {
  question: string;
  answers: [string, string, string, string];
  correctAnswer: number;
  explanation: string;
  category?: GeneralTriviaCategory;
};

export type GeneralTriviaCategory =
  | 'trekking'
  | 'nature'
  | 'heritage'
  | 'culture';

export type TriviaExperienceType =
  | 'trek'
  | 'hike'
  | 'cultural'
  | 'nature'
  | 'craft';

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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'culture',
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
    category: 'culture',
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
    category: 'culture',
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
    category: 'culture',
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
    category: 'culture',
    explanation:
      'The colors are Blue (Space), White (Air), Red (Fire), Green (Water), and Yellow (Earth).',
  },
  {
    question:
      'Which hand should you use to eat, pass money, or hand something to a Nepali person?',
    answers: ['Left hand', 'Right hand', 'Both hands', 'Either hand'],
    correctAnswer: 1,
    category: 'culture',
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
    category: 'culture',
    explanation:
      'Tika is a mixture of vermilion powder, yogurt, and rice applied to the forehead as a blessing during festivals (like Dashain) or religious ceremonies.',
  },
  {
    question: 'What is the name of the living goddess worshipped in Kathmandu?',
    answers: ['Kumari', 'Devi', 'Shakti', 'Lakshmi'],
    correctAnswer: 0,
    category: 'culture',
    explanation:
      'The Kumari is a young girl chosen from the Newar Buddhist community who is believed to be the living incarnation of the goddess Taleju.',
  },
  {
    question:
      'During which festival do Nepalis fly kites, put on Tika, and swing on bamboo swings?',
    answers: ['Tihar', 'Dashain', 'Holi', 'Losar'],
    correctAnswer: 1,
    category: 'culture',
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
    category: 'culture',
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
    category: 'culture',
    explanation:
      'Tihar is the festival of lights. It honors Laxmi (goddess of wealth), dogs, cows, and brothers, strengthening family bonds.',
  },
  {
    question: 'What is the local Nepali name for Mount Everest?',
    answers: ['Chomolungma', 'Sagarmatha', 'Kanchenjunga', 'Machhapuchhre'],
    correctAnswer: 1,
    category: 'nature',
    explanation:
      'In Nepal, the mountain is called Sagarmatha ("Forehead of the Sky"). The Tibetan name is Chomolungma.',
  },
  {
    question: 'Which lake is the centerpiece of the tourist city of Pokhara?',
    answers: ['Rara Lake', 'Phewa Lake', 'Tilicho Lake', 'Gokyo Lake'],
    correctAnswer: 1,
    category: 'nature',
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
    category: 'nature',
    explanation:
      'Chitwan National Park, a UNESCO World Heritage site in the Terai lowlands, is the most famous place to see rhinos, tigers, and elephants.',
  },
  {
    question: 'What is the national flower of Nepal?',
    answers: ['Lotus', 'Rhododendron (Lali Gurans)', 'Sunflower', 'Orchid'],
    correctAnswer: 1,
    category: 'nature',
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
    category: 'nature',
    explanation:
      'The Himalayan Monal (Danphe) is a colorful pheasant found in the high altitudes of the Himalayas.',
  },
  {
    question: 'Which of these is the largest lake in Nepal?',
    answers: ['Phewa Lake', 'Rara Lake', 'Tilicho Lake', 'Begnas Lake'],
    correctAnswer: 1,
    category: 'nature',
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
    category: 'nature',
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
    category: 'nature',
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
    category: 'nature',
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
    category: 'heritage',
    explanation:
      'The Kathmandu Valley historically consists of three distinct royal cities: Kathmandu, Patan (Lalitpur), and Bhaktapur.',
  },
  {
    question: 'Where is the birthplace of Lord Buddha located in Nepal?',
    answers: ['Kathmandu', 'Lumbini', 'Pokhara', 'Janakpur'],
    correctAnswer: 1,
    category: 'heritage',
    explanation:
      'Lumbini, located in the Rupandehi District, is a UNESCO World Heritage site and the birthplace of Siddhartha Gautama (Lord Buddha).',
  },
  {
    question: 'What is the highest mountain entirely within Nepal?',
    answers: ['Mount Everest', 'Kanchenjunga', 'Annapurna I', 'Manaslu'],
    correctAnswer: 3,
    category: 'nature',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'culture',
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
    category: 'trekking',
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
    category: 'culture',
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
    category: 'culture',
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
    category: 'culture',
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
    category: 'culture',
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
    category: 'trekking',
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
    category: 'culture',
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
    category: 'trekking',
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
    category: 'heritage',
    explanation:
      'Elaborately carved wooden windows, doors, and struts are a signature of Newari craftsmanship.',
  },
  {
    question:
      'A Newar architect named Araniko is historically credited with influencing pagoda-style architecture in which country?',
    answers: ['China', 'Nowhere outside Nepal', 'Bhutan only', 'Sri Lanka'],
    correctAnswer: 0,
    category: 'heritage',
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
    category: 'culture',
    explanation:
      'Elders apply tika (a mix of rice, yogurt, and vermilion) and give blessings during Dashain.',
  },
  {
    question:
      'Tihar, the festival of lights, includes a day dedicated to honoring which animal for its loyalty?',
    answers: ['Dogs', 'Cats', 'Horses', 'Elephants'],
    correctAnswer: 0,
    category: 'culture',
    explanation:
      'Kukur Tihar, a day of Tihar, honors dogs with garlands, tika, and treats.',
  },
  {
    question:
      'Which massive stupa in Kathmandu is a major Tibetan Buddhist pilgrimage site?',
    answers: ['Boudhanath', 'Pashupatinath', 'Changunarayan', 'Kumari Ghar'],
    correctAnswer: 0,
    category: 'heritage',
    explanation:
      'Boudhanath is one of the largest stupas in the world and a key Tibetan Buddhist site.',
  },
  {
    question:
      'Pashupatinath Temple, a major Hindu pilgrimage site, is dedicated to which deity?',
    answers: ['Shiva', 'Vishnu', 'Buddha', 'Ganesh'],
    correctAnswer: 0,
    category: 'heritage',
    explanation:
      'Pashupatinath, on the banks of the Bagmati River, is dedicated to Lord Shiva.',
  },
  {
    question: 'What is the everyday staple meal eaten across most of Nepal?',
    answers: ['Dal Bhat', 'Momo', 'Sel Roti', 'Thukpa'],
    correctAnswer: 0,
    category: 'culture',
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
    category: 'culture',
    explanation:
      'Momo are dumplings filled with meat or vegetables, usually steamed or fried and served with a spicy dip.',
  },
  {
    question: 'The traditional cap worn by many Nepali men is called:',
    answers: ['Dhaka Topi', 'Sombrero', 'Turban', 'Beret'],
    correctAnswer: 0,
    category: 'culture',
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
    category: 'culture',
    explanation:
      'Dhaka cloth is handwoven with distinctive, colorful geometric patterns, historically from eastern Nepal.',
  },
  {
    question: "Nepal contains how many of the world's fourteen 8,000m peaks?",
    answers: ['3', '8', '10', '14'],
    correctAnswer: 1,
    category: 'nature',
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
    category: 'nature',
    explanation:
      "The Himalaya forms a long east-west arc along Nepal's northern border.",
  },
  {
    question: 'What is the officially recognized height of Mount Everest?',
    answers: ['8,611 m', '8,849 m', '8,163 m', '7,925 m'],
    correctAnswer: 1,
    category: 'nature',
    explanation:
      "A joint Nepal-China survey confirmed Everest's height at 8,848.86 m (commonly rounded to 8,849 m).",
  },
  {
    question:
      "Kanchenjunga, the world's third-highest peak, sits on the border of Nepal and which country?",
    answers: ['India', 'China', 'Bhutan', 'Myanmar'],
    correctAnswer: 0,
    category: 'nature',
    explanation:
      "Kanchenjunga straddles the border between eastern Nepal and India's Sikkim state.",
  },
  {
    question:
      'Which major Himalayan-origin river system in Nepal eventually flows into the Ganges?',
    answers: ['Koshi', 'Nile', 'Mekong', 'Yangtze'],
    correctAnswer: 0,
    category: 'nature',
    explanation:
      'The Koshi River rises in the Nepal Himalaya and joins the Ganges in India.',
  },
  {
    question:
      "Phewa Lake, Nepal's second-largest lake, is located in which city?",
    answers: ['Pokhara', 'Kathmandu', 'Bhaktapur', 'Biratnagar'],
    correctAnswer: 0,
    category: 'nature',
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
    category: 'nature',
    explanation:
      'Chitwan National Park in the Terai lowlands protects rhinos, tigers, and diverse wildlife.',
  },
  {
    question:
      'Sagarmatha National Park protects the region around which mountain?',
    answers: ['Everest', 'Annapurna', 'Manaslu', 'Dhaulagiri'],
    correctAnswer: 0,
    category: 'nature',
    explanation:
      'Sagarmatha (Everest) National Park covers the Khumbu region surrounding Mount Everest.',
  },
  {
    question: "What is Nepal's national flower?",
    answers: ['Rhododendron', 'Rose', 'Lotus', 'Sunflower'],
    correctAnswer: 0,
    category: 'nature',
    explanation:
      "The rhododendron, locally called 'Lali Gurans,' is Nepal's national flower.",
  },
  {
    question:
      "Which elusive high-altitude cat is found in Nepal's mountain regions?",
    answers: ['Snow leopard', 'Bengal tiger', 'Lion', 'Cheetah'],
    correctAnswer: 0,
    category: 'nature',
    explanation:
      "The snow leopard inhabits Nepal's remote high-altitude terrain, including Dolpo and Manang.",
  },
  {
    question:
      'As trekkers gain elevation in Nepal, the climate generally becomes:',
    answers: ['Colder and drier', 'Warmer and wetter', 'Unchanged', 'Tropical'],
    correctAnswer: 0,
    category: 'nature',
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
    category: 'nature',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'culture',
    explanation:
      'Sherpas have long inhabited the high Khumbu valleys around Everest and are central to mountaineering there.',
  },
  {
    question:
      'Tenzing Norgay, an ethnic Sherpa, is famous for being one of the first two people to summit:',
    answers: ['Mount Everest', 'K2', 'Kanchenjunga', 'Annapurna'],
    correctAnswer: 0,
    category: 'heritage',
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
    category: 'culture',
    explanation:
      'The Newars are the historic inhabitants and civic builders of the Kathmandu Valley.',
  },
  {
    question:
      'Gurkha soldiers, renowned worldwide for their bravery, traditionally come from which ethnic groups?',
    answers: ['Gurung and Magar', 'Newar only', 'Tharu only', 'Madhesi only'],
    correctAnswer: 0,
    category: 'culture',
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
    category: 'heritage',
    explanation:
      "Nirmal Purja led the Nepali climbing team that completed K2's historic first winter ascent in January 2021.",
  },
  {
    question:
      'In what year did Edmund Hillary and Tenzing Norgay first summit Everest?',
    answers: ['1953', '1963', '1975', '1990'],
    correctAnswer: 0,
    category: 'heritage',
    explanation:
      'Hillary and Norgay reached the summit of Everest on 29 May 1953.',
  },
  {
    question: 'Everest is known by which traditional Nepali name?',
    answers: ['Sagarmatha', 'Chomolungma only', 'Machapuchare', 'Dhaulagiri'],
    correctAnswer: 0,
    category: 'nature',
    explanation:
      'In Nepal, Everest is officially called Sagarmatha; Tibetans call it Chomolungma.',
  },
  {
    question:
      'Nepal was unified into a single kingdom in the 18th century largely by which king?',
    answers: ['Prithvi Narayan Shah', 'Ashoka', 'Akbar', 'Tribhuvan'],
    correctAnswer: 0,
    category: 'heritage',
    explanation:
      "Prithvi Narayan Shah, King of Gorkha, led the campaigns that unified Nepal's small states in the 1700s.",
  },
  {
    question:
      "Nepal's monarchy officially ended, and the country became a federal republic, in which year?",
    answers: ['2008', '1990', '1951', '2015'],
    correctAnswer: 0,
    category: 'heritage',
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
    category: 'nature',
    explanation:
      'Nepal lies landlocked between India to the south/east/west and China (Tibet) to the north.',
  },
  {
    question:
      "Nepal's geography is commonly divided into mountains, hills, and which third region?",
    answers: ['Terai (plains)', 'Desert', 'Coastal zone', 'Island chain'],
    correctAnswer: 0,
    category: 'nature',
    explanation:
      "The flat, fertile Terai plains form the southern strip of Nepal's three main geographic regions.",
  },
  {
    question: "What is Nepal's official national language?",
    answers: ['Nepali', 'Hindi', 'English', 'Newari'],
    correctAnswer: 0,
    category: 'culture',
    explanation:
      "Nepali, written in the Devanagari script, is Nepal's official and most widely spoken language.",
  },
  {
    question:
      'Roughly how many other languages, besides Nepali, are spoken across the country?',
    answers: ['Over 100', 'Only 2', 'Only 5', 'None'],
    correctAnswer: 0,
    category: 'culture',
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
    category: 'culture',
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
    category: 'trekking',
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
    category: 'trekking',
    explanation:
      'Tenzing-Hillary Airport in Lukla, known for its short runway, is the main air gateway to the Khumbu.',
  },
  {
    question:
      'Aside from domestic flights, most long-distance travel between Nepali cities relies on:',
    answers: ['Buses', 'Subway systems', 'Trains', 'Trams'],
    correctAnswer: 0,
    category: 'trekking',
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
    category: 'trekking',
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
    category: 'trekking',
    explanation:
      'Spending directly with local lodges and guides channels tourism income into mountain communities.',
  },
  {
    question:
      'How many UNESCO World Heritage Sites (cultural and natural combined) does Nepal have?',
    answers: ['4', '2', '10', '20'],
    correctAnswer: 0,
    category: 'heritage',
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
    category: 'nature',
    explanation:
      "Chitwan National Park is one of Nepal's two natural UNESCO sites, protecting tigers and rhinos.",
  },
  {
    question: 'Why are trekking poles recommended for steep descents?',
    answers: [
      'To look like a professional',
      'To reduce stress on your knees',
      'To fend off wild animals',
      'To measure the trail distance',
    ],
    correctAnswer: 1,
    category: 'trekking',
    explanation:
      'Poles share the load with your legs and improve stability on long downhill sections. Exact load-reduction figures vary by study, so avoid quoting a single percentage.',
  },
  {
    question: 'Why is cotton clothing discouraged for high-altitude hiking?',
    answers: [
      'It breaks very easily',
      'It holds onto sweat and loses warmth when wet',
      'Animals like eating cotton',
      'It is illegal in mountain parks',
    ],
    correctAnswer: 1,
    category: 'trekking',
    explanation:
      'Wet cotton stays damp for a long time and chills your body quickly when you stop walking.',
  },
  {
    question: 'Why should you carry a headlamp in your daypack?',
    answers: [
      'To look for lost items under teahouse beds',
      'In case an unexpected delay keeps you walking after dark',
      'To read books at night',
      'To signal passing airplanes',
    ],
    correctAnswer: 1,
    category: 'trekking',
    explanation:
      'Sunset comes quickly in mountain valleys, and a hands-free light prevents you from getting stranded in the dark.',
  },
  {
    question:
      'What should you do if you notice a “hot spot” forming on your heel while walking?',
    answers: [
      'Ignore it until you finish for the day',
      'Stop and apply a blister plaster or tape',
      'Take off your shoes and walk barefoot',
      'Pour cold water inside your boot',
    ],
    correctAnswer: 1,
    category: 'trekking',
    explanation:
      'Treating friction spots early prevents painful blisters from forming.',
  },
  {
    question:
      'Why do guides remind trekkers to say “Bistari, Bistari” while hiking uphill?',
    answers: [
      'It means “Faster, faster”',
      'It means “Slowly, slowly” to keep your heart rate steady',
      'It is a local song refrain',
      'It means “Watch out for rocks”',
    ],
    correctAnswer: 1,
    category: 'trekking',
    explanation:
      'A slow, steady pace keeps breathing comfortable and reduces early fatigue and altitude stress.',
  },
  {
    question:
      'What action should you take if loose rocks start sliding toward you on a mountain path?',
    answers: [
      'Freeze and close your eyes',
      'Shout “Rock!” to warn others and step behind a boulder',
      'Catch the rocks with your hands',
      'Run downhill in a straight line',
    ],
    correctAnswer: 1,
    category: 'trekking',
    explanation:
      'Warning others and sheltering behind a natural barrier protects everyone from falling debris.',
  },
  {
    question:
      'What does a pulse oximeter clip measure when checked by your guide at night?',
    answers: [
      'Your walking speed',
      'Your oxygen saturation level and heart rate',
      'Your body weight',
      'Room humidity',
    ],
    correctAnswer: 1,
    category: 'trekking',
    explanation:
      'The clip sits on a finger and estimates how well your blood is carrying oxygen.',
  },
  {
    question:
      'Why is it wise to carry extra Nepali cash in small notes on long treks?',
    answers: [
      'Banknotes keep you warm',
      'Remote lodges often lack ATMs or card readers',
      'Cards break in cold temperatures',
      'Small notes weigh less',
    ],
    correctAnswer: 1,
    category: 'trekking',
    explanation:
      'Cash is usually the only accepted payment in high teahouses, and small notes are easier for lodges to break.',
  },
  {
    question:
      'Why should trekkers avoid alcohol at altitudes above 3,000 meters?',
    answers: [
      'Teahouses don’t sell warm drinks',
      'Alcohol dehydrates the body and can mask or mimic altitude sickness symptoms',
      'It makes walking uphill too fast',
      'It spoils food taste',
    ],
    correctAnswer: 1,
    category: 'trekking',
    explanation:
      'Alcohol also disrupts sleep, which makes acclimatization harder.',
  },
  {
    question:
      'What do the five colors of Tibetan prayer flags (Lungta) represent?',
    answers: [
      'The five senses',
      'The five elements (Space, Air, Fire, Water, Earth)',
      'The five mountains of Nepal',
      'The five seasons',
    ],
    correctAnswer: 1,
    category: 'culture',
    explanation:
      'Blue (Space), white (Air), red (Fire), green (Water), and yellow (Earth).',
  },
  {
    question:
      'What is the traditional white silk or cotton scarf offered as a sign of respect and blessing in Buddhist and Sherpa culture?',
    answers: ['Pashmina', 'Khada', 'Dhaka scarf', 'Saree'],
    correctAnswer: 1,
    category: 'culture',
    explanation:
      'A khada is offered to guests, monks, or departing hikers to wish them peace and a safe journey.',
  },
  {
    question:
      'What animal is specially honored on the second day of Tihar (Kukur Tihar)?',
    answers: ['Cats', 'Dogs', 'Cows', 'Elephants'],
    correctAnswer: 1,
    category: 'culture',
    explanation:
      'Dogs are garlanded with marigolds and given treats to thank them for their loyalty.',
  },
  {
    question:
      'Why do visitors gently ring the brass bells at the entrance of Hindu temples?',
    answers: [
      'To call for room service',
      'To announce their arrival to the deity and focus the mind',
      'To signal the end of prayers',
      'To scare away birds',
    ],
    correctAnswer: 1,
    category: 'culture',
    explanation:
      'Ringing the bell awakens the divine presence and helps the devotee focus before entering.',
  },
  {
    question:
      'What do the giant painted eyes on stupas like Boudhanath and Swayambhunath symbolize?',
    answers: [
      'Weather warning signs',
      'Buddha’s all-seeing wisdom, compassion, and watchfulness',
      'Guard dogs of the temple',
      'Mountain peaks',
    ],
    correctAnswer: 1,
    category: 'culture',
    explanation:
      'The eyes look out in four directions, symbolizing Buddha’s wisdom and compassion for all beings.',
  },
  {
    question: 'What is Losar, celebrated by Himalayan and Sherpa communities?',
    answers: [
      'The rice harvest festival',
      'The Tibetan New Year',
      'The festival of lights',
      'The monsoon celebration',
    ],
    correctAnswer: 1,
    category: 'culture',
    explanation:
      'Losar marks the New Year in the Tibetan lunar calendar, with family gatherings, feasts, and monastery dances.',
  },
  {
    question:
      'Why do married Hindu women traditionally wear red sindoor in their hair part?',
    answers: [
      'To keep their hair tidy',
      'As a traditional cultural symbol of marital status',
      'To protect against cold wind',
      'As a festival makeup trend',
    ],
    correctAnswer: 1,
    category: 'culture',
    explanation:
      'Sindoor is applied at weddings and worn as a traditional symbol of marriage and blessing.',
  },
  {
    question: 'What is the respectful way to beckon someone in Nepal?',
    answers: [
      'Palm facing up, curling fingers upward',
      'Palm facing down, fingers waving downward',
      'Pointing with your index finger',
      'Waving both arms in circles',
    ],
    correctAnswer: 1,
    category: 'culture',
    explanation:
      'Palm-down beckoning is polite. Palm-up gestures are traditionally used for animals.',
  },
  {
    question:
      'What is the traditional way to offer a cup of tea or money to someone?',
    answers: [
      'Toss it across the table',
      'Support your right forearm with your left hand as you offer it',
      'Use only your left hand behind your back',
      'Hold it with your feet',
    ],
    correctAnswer: 1,
    category: 'culture',
    explanation: 'Supporting the forearm shows humility and respect.',
  },
  {
    question:
      'What is the traditional gesture when paying respect to elderly family members or gurus?',
    answers: [
      'High-five',
      'Touching their feet (Dhogne / Pranam)',
      'Patting their shoulder',
      'Waving from afar',
    ],
    correctAnswer: 1,
    category: 'culture',
    explanation:
      'Touching the feet of elders is a sign of humility and a request for blessings.',
  },
  {
    question:
      'What is the appropriate way to ask permission before photographing local villagers or children?',
    answers: [
      'Run away quickly',
      'Politely ask with a smile: “Photo khichna milcha?”',
      'Hide behind trees',
      'Take pictures without asking',
    ],
    correctAnswer: 1,
    category: 'culture',
    explanation:
      '“Photo khichna milcha?” means “May I take a photo?” Asking shows respect for privacy.',
  },
  {
    question:
      'What traditional warm beverage made with butter, tea leaves, and salt is popular in high-altitude lodges?',
    answers: [
      'Masala Chai',
      'Tibetan Butter Tea (Suja)',
      'Green Tea',
      'Iced Lemonade',
    ],
    correctAnswer: 1,
    category: 'trekking',
    explanation:
      'Butter tea provides calories, salt, and hydration in cold high-altitude conditions.',
  },
  {
    question:
      'What popular local drink is made from fermented millet and served hot with a bamboo straw?',
    answers: ['Wine', 'Tongba', 'Cider', 'Vodka'],
    correctAnswer: 1,
    category: 'trekking',
    explanation:
      'Tongba is a fermented millet drink of the Limbu and Kirat communities, served with hot water poured over the millet.',
  },
  {
    question:
      'What fermented leafy green pickle is a staple condiment with Dal Bhat across Nepal?',
    answers: ['Kimchi', 'Gundruk', 'Sauerkraut', 'Chutney'],
    correctAnswer: 1,
    category: 'trekking',
    explanation:
      'Gundruk is made from fermented, sun-dried leafy greens, producing a tangy, savory pickle.',
  },
  {
    question:
      'Why do teahouses prefer that guests order dinner early in the evening?',
    answers: [
      'The lodge closes for night walks',
      'It allows cooks to prepare fresh meals efficiently over limited kitchen fires',
      'Food runs out at sunset',
      'Electricity shuts off completely',
    ],
    correctAnswer: 1,
    category: 'trekking',
    explanation:
      'Kitchens run on wood or gas, so early orders keep meals fresh and avoid long waits.',
  },
  {
    question:
      'What is “Chhurpi,” a hard local cheese famous in the mountain regions of Nepal?',
    answers: [
      'A soft melting cheese',
      'A dried, long-lasting, rock-hard cheese chewed like a snack',
      'A liquid cheese soup',
      'A sweet dessert cream',
    ],
    correctAnswer: 1,
    category: 'trekking',
    explanation:
      'Chhurpi is a dried milk-curd cheese, protein-rich and chewed slowly over a long time.',
  },
  {
    question:
      'Why do prices for meals, hot showers, and Wi-Fi increase as you trek higher?',
    answers: [
      'Teahouses want to charge extra taxes',
      'All goods must be transported uphill by porters, mules, or yaks',
      'High altitude makes food taste sweeter',
      'Electricity is imported from abroad',
    ],
    correctAnswer: 1,
    category: 'trekking',
    explanation:
      'With no roads in the high Himalaya, carrying food and fuel uphill raises costs.',
  },
  {
    question:
      'What is the standard fee for charging devices at remote mountain teahouses?',
    answers: [
      'Free unlimited fast charging in every room',
      'A small per-hour or per-device fee to cover solar or micro-hydro power costs',
      'Devices are not allowed to be charged',
      'Charging is paid only with coins',
    ],
    correctAnswer: 1,
    category: 'trekking',
    explanation:
      'Remote lodges rely on limited solar or micro-hydro power, so charging carries a modest fee. Rates vary.',
  },
  {
    question:
      'Why is carrying small-denomination notes recommended in remote villages?',
    answers: [
      'Large notes melt in mountain rain',
      'Small village shops and lodges often cannot break large bills',
      'Large notes carry higher fees',
      'Small notes are easier to count',
    ],
    correctAnswer: 1,
    category: 'trekking',
    explanation:
      'Remote teahouses have limited change, so smaller bills are much easier to spend on snacks and water.',
  },
  {
    question:
      'Why do trekkers often order hot lemon-ginger-honey tea in mountain teahouses?',
    answers: [
      'It is the only drink on the menu',
      'It soothes cold throats, warms the body, and helps settle stomachs',
      'It prevents sunburn',
      'It cools you down fast',
    ],
    correctAnswer: 1,
    category: 'trekking',
    explanation:
      'It is a popular mountain drink that warms you and soothes your throat after hiking.',
  },
  {
    question:
      'What is the traditional way to eat Dal Bhat like a local in Nepal?',
    answers: [
      'Using wooden chopsticks',
      'Mixing rice and lentils with your right hand',
      'Using a giant soup ladle',
      'Drinking it through a straw',
    ],
    correctAnswer: 1,
    category: 'trekking',
    explanation:
      'Eating with a clean right hand is the traditional way to enjoy Dal Bhat.',
  },
  {
    question:
      'What is the customary tip for trekking guides and porters at the end of a trek in Nepal?',
    answers: [
      'Zero tipping is allowed',
      'About 10% of the total trek cost, shared among the crew (guidance varies)',
      '50% of the trek cost',
      'One meal voucher',
    ],
    correctAnswer: 1,
    category: 'trekking',
    explanation:
      'Tipping is customary and shows appreciation. Commonly suggested amounts vary, so check current guidance before your trek.',
  },
  {
    question:
      'What dessert is a specialty in teahouses around Marpha in the Mustang region?',
    answers: [
      'Apple gelato',
      'Freshly baked warm apple pie',
      'Apple candy drops',
      'Steamed apple dumpling',
    ],
    correctAnswer: 1,
    category: 'trekking',
    explanation:
      'Marpha is known for its apple orchards, and warm apple pie is a popular teahouse treat.',
  },
  {
    question:
      'What is the Sanskrit name of Patan, meaning “City of Fine Arts”?',
    answers: ['Lalitpur', 'Momo Nagar', 'Chiya Chowk', 'Kathmandu 2.0'],
    correctAnswer: 0,
    category: 'heritage',
    explanation:
      'Patan is officially called Lalitpur, meaning “City of Fine Arts.”',
  },
  {
    question:
      'Which multi-tiered pagoda in Bhaktapur Durbar Square is among Nepal’s tallest temples?',
    answers: [
      'The Five-Story Pizza Palace',
      'Krishna Mandir',
      'Nyatapola Temple',
      'The Great Tower of Sleeping Yaks',
    ],
    correctAnswer: 2,
    category: 'heritage',
    explanation:
      'Built in 1702, the five-tiered Nyatapola is one of Nepal’s tallest pagodas, at about 30 m.',
  },
  {
    question:
      'Which famous stone temple in Patan Durbar Square has 21 carved spires?',
    answers: [
      'Golden Temple',
      'The Temple of 21 Giant Momos',
      'Kasthamandap',
      'Krishna Mandir',
    ],
    correctAnswer: 3,
    category: 'heritage',
    explanation:
      'Krishna Mandir, built in 1637, is an intricate stone temple with its distinctive spires.',
  },
  {
    question:
      'What sacred pond in Lumbini marks where Queen Maya Devi bathed before giving birth?',
    answers: [
      'Phewa Lake',
      'Pushkarini Pond',
      'The Royal Bubble Bath',
      'Gosaikunda',
    ],
    correctAnswer: 1,
    category: 'heritage',
    explanation: 'The Pushkarini pool sits beside the Maya Devi Temple.',
  },
  {
    question:
      'Which historic building in Kathmandu Durbar Square gave the city its name?',
    answers: [
      'Kasthamandap (Wooden Shelter)',
      'Kumari Ghar',
      'The Giant Wooden Shoe Shop',
      'Gaddi Baithak',
    ],
    correctAnswer: 0,
    category: 'heritage',
    explanation:
      'Legend says the city is named after Kasthamandap, a shelter built from a single tree.',
  },
  {
    question: 'Bandipur was historically a stop on which ancient trade route?',
    answers: [
      'The Yak Express Highway',
      'The Great Momo Delivery Route',
      'India–Tibet trade route',
      'The International Chocolate Highway',
    ],
    correctAnswer: 2,
    category: 'heritage',
    explanation:
      'Bandipur was a commercial hub on the mountain trade route between India and Tibet.',
  },
  {
    question:
      'What rule helps preserve Bandipur’s historic main bazaar street?',
    answers: [
      'Only flying vehicles are allowed',
      'Motor vehicles are banned from the main street',
      'Every visitor must arrive on a dancing yak',
      'Cars can enter only while singing',
    ],
    correctAnswer: 1,
    category: 'heritage',
    explanation:
      'The car-free street keeps the historic brick-paved promenade peaceful.',
  },
  {
    question:
      'Which traditional Newar palace in Patan now houses a famous bronze and statue museum?',
    answers: [
      'Narayanhiti Palace',
      'The Palace of Golden Noodles',
      'Hanuman Dhoka',
      'Patan Museum',
    ],
    correctAnswer: 3,
    category: 'heritage',
    explanation:
      'The restored Patan Durbar palace complex houses the Patan Museum.',
  },
  {
    question: 'Bhaktapur is historically nicknamed the “City of...”',
    answers: [
      'Devotees',
      'Giant Pancakes',
      'Sleeping Dragons',
      'Lost Tourists',
    ],
    correctAnswer: 0,
    category: 'heritage',
    explanation:
      'Bhaktapur translates to the “City of Devotees,” reflecting its religious traditions.',
  },
  {
    question:
      'Which unique Buddhist monastery in Patan is covered in gilded copper plates?',
    answers: [
      'The Shiny Chocolate Monastery',
      'Taleju Temple',
      'Hiranya Varna Mahavihar (Golden Temple)',
      'The Golden Toilet Temple',
    ],
    correctAnswer: 2,
    category: 'heritage',
    explanation:
      'The Golden Temple is an ancient monastery covered in gilded copper and brass.',
  },
  {
    question:
      'Kumari Ghar in Kathmandu Durbar Square is the residence of which figure?',
    answers: [
      'A retired royal chef',
      'A famous Himalayan guide',
      'A professional palace photographer',
      'The Kumari, a living goddess',
    ],
    correctAnswer: 3,
    category: 'heritage',
    explanation:
      'The Kumari is a young girl worshipped as a living embodiment of the goddess Taleju.',
  },
  {
    question:
      'The former royal palace of Hanuman Dhoka is located in which city?',
    answers: ['Pokhara', 'Kathmandu', 'Bhaktapur', 'The Lost City of Momos'],
    correctAnswer: 1,
    category: 'heritage',
    explanation:
      'Hanuman Dhoka is the former royal palace complex in Kathmandu Durbar Square.',
  },
  {
    question:
      'A Newar architect named Araniko is credited with influencing pagoda-style architecture in which country?',
    answers: [
      'Antarctica',
      'China',
      'The Kingdom of Talking Yaks',
      'Nowhere outside Nepal',
    ],
    correctAnswer: 1,
    category: 'culture',
    explanation:
      'Araniko travelled to China in the 13th century and helped introduce pagoda-style design.',
  },
  {
    question:
      'During Dashain, younger family members receive what from elders?',
    answers: [
      'A lifetime supply of momos',
      'A certificate for surviving another year',
      'Tika and blessings',
      'A golden ticket to Disneyland',
    ],
    correctAnswer: 2,
    category: 'culture',
    explanation: 'Elders apply tika and offer blessings during Dashain.',
  },
  {
    question:
      'Tihar includes a day dedicated to honoring which animal for its loyalty?',
    answers: [
      'Dogs',
      'Grumpy mountain goats',
      'Dancing chickens',
      'Cats wearing sunglasses',
    ],
    correctAnswer: 0,
    category: 'culture',
    explanation: 'Kukur Tihar honors dogs with garlands, tika, and treats.',
  },
  {
    question: 'Pashupatinath Temple is dedicated to which deity?',
    answers: ['The God of Pizza', 'Shiva', 'Lord of the Flying Yaks', 'Buddha'],
    correctAnswer: 1,
    category: 'culture',
    explanation:
      'Pashupatinath, on the Bagmati River, is dedicated to Lord Shiva.',
  },
  {
    question:
      'What animal is honored on the first day of Tihar (Kaag Tihar) as a messenger?',
    answers: ['Crows', 'Dogs', 'Flying potatoes', 'Very dramatic pigeons'],
    correctAnswer: 0,
    category: 'culture',
    explanation:
      'On Kaag Tihar, food is offered to crows, regarded as messengers in Hindu tradition.',
  },
  {
    question:
      'Gai Tihar honors which sacred animal, representing prosperity and motherly care?',
    answers: [
      'Yaks wearing sunglasses',
      'Goats with royal crowns',
      'Cows',
      'Horses that know karate',
    ],
    correctAnswer: 2,
    category: 'culture',
    explanation:
      'Cows are decorated with garlands and tika on Gai Tihar, alongside Laxmi Puja.',
  },
  {
    question: 'Bhai Tika, the final day of Tihar, celebrates the bond between:',
    answers: [
      'Farmers and their potatoes',
      'Brothers and sisters',
      'Kings and their pet elephants',
      'Teachers and their coffee mugs',
    ],
    correctAnswer: 1,
    category: 'culture',
    explanation:
      'Sisters place seven-colored tika on their brothers’ foreheads to wish them long life.',
  },
  {
    question:
      'What sweet, ring-shaped fried rice bread is traditionally prepared during Dashain and Tihar?',
    answers: ['Momo', 'Yomari', 'The Edible Bicycle Tire', 'Sel Roti'],
    correctAnswer: 3,
    category: 'culture',
    explanation:
      'Sel Roti is a crisp ring bread made from sweetened rice batter.',
  },
  {
    question:
      'What fig-shaped rice flour dumpling stuffed with molasses and sesame is eaten during a Newar festival in December?',
    answers: [
      'Yomari',
      'A chocolate-filled football',
      'Sel Roti',
      'The Great Rice Balloon',
    ],
    correctAnswer: 0,
    category: 'culture',
    explanation:
      'Yomari is eaten during Yomari Punhi to celebrate the winter harvest.',
  },
  {
    question:
      'What hilltop temple in Kathmandu is famously known as the “Monkey Temple”?',
    answers: [
      'The Banana Kingdom',
      'Pashupatinath',
      'Swayambhunath',
      'The Temple of 1,000 Monkeys in Suits',
    ],
    correctAnswer: 2,
    category: 'culture',
    explanation: 'Swayambhunath is home to a large troop of monkeys.',
  },
  {
    question:
      'What is the colossal sleeping Vishnu statue carved from a single stone in a pool near Kathmandu?',
    answers: [
      "The World's Largest Sleeping Potato",
      'Budhanilkantha',
      'The Giant Stone Pillow',
      'Swayambhunath',
    ],
    correctAnswer: 1,
    category: 'culture',
    explanation:
      'The Budhanilkantha statue shows Vishnu reclining on a bed of serpents.',
  },
  {
    question:
      'What fermented mustard green dish is a favorite tangy side pickle across Nepal?',
    answers: ['Kimchi', 'Chhurpi', 'Dal', 'Gundruk'],
    correctAnswer: 3,
    category: 'culture',
    explanation: 'Gundruk is made from fermented and sun-dried leafy greens.',
  },
  {
    question:
      'What rock-hard dried cheese snack, made in the Himalaya from yak milk, is chewed for hours?',
    answers: [
      'Chhurpi',
      'Juju Dhau',
      'Chocolate-flavored chewing stones',
      'Gouda',
    ],
    correctAnswer: 0,
    category: 'culture',
    explanation:
      'Chhurpi is a traditional Himalayan cheese dried until hard, serving as a long-lasting snack.',
  },
  {
    question: 'What spicy tomato and chili sauce is served with momos?',
    answers: [
      'Chocolate milkshake',
      'Momo Achar',
      'Strawberry jam',
      'Mayonnaise mixed with mountain snow',
    ],
    correctAnswer: 1,
    category: 'culture',
    explanation:
      'Momo achar is a roasted tomato, sesame, garlic, and chili sauce.',
  },
  {
    question: 'Nepal contains how many of the world’s fourteen 8,000 m peaks?',
    answers: ['3', '14', '8', '100, because Nepal collected them all'],
    correctAnswer: 2,
    category: 'nature',
    explanation:
      'Eight of the fourteen 8,000 m peaks, including Everest, lie in or on Nepal’s borders.',
  },
  {
    question:
      'Which major Himalayan river system in Nepal eventually flows into the Ganges?',
    answers: [
      'The River of Unlimited Chiya',
      'The Nile',
      'Koshi',
      'The Chocolate River',
    ],
    correctAnswer: 2,
    category: 'nature',
    explanation:
      'The Koshi rises in the Nepal Himalaya and joins the Ganges in India.',
  },
  {
    question: 'Phewa Lake is located in which city?',
    answers: [
      'Pokhara',
      'Kathmandu',
      'Bhaktapur',
      'Somewhere inside a giant bathtub',
    ],
    correctAnswer: 0,
    category: 'nature',
    explanation:
      'Phewa is Pokhara’s centerpiece and Nepal’s second-largest lake, framed by Annapurna views.',
  },
  {
    question:
      'Which elusive high-altitude cat lives in Nepal’s mountain regions?',
    answers: [
      'Bengal tiger',
      'Lion',
      'Snow leopard',
      'A very shy house cat with hiking boots',
    ],
    correctAnswer: 2,
    category: 'nature',
    explanation:
      'Snow leopards inhabit remote high-altitude terrain, including Dolpo and Manang.',
  },
  {
    question:
      'What is the world’s 4th-highest mountain, directly connected to Everest via the South Col?',
    answers: [
      'Makalu',
      'Lhotse (8,516 m)',
      'Cho Oyu',
      "Mount Everest's little brother",
    ],
    correctAnswer: 1,
    category: 'nature',
    explanation:
      'Lhotse sits immediately south of Everest and shares part of the standard route.',
  },
  {
    question:
      'Which 8,000 m peak, known as the “Turquoise Goddess,” sits near the Gokyo Valley?',
    answers: ['The Blueberry Mountain', 'Annapurna I', 'K2', 'Cho Oyu'],
    correctAnswer: 3,
    category: 'nature',
    explanation:
      'Cho Oyu, the world’s 6th-highest mountain, lies on the Nepal–Tibet border.',
  },
  {
    question:
      'What is Nepal’s national bird, known for its iridescent feathers?',
    answers: [
      'Himalayan Monal (Danphe)',
      'A chicken wearing rainbow sunglasses',
      'House Crow',
      'Golden Eagle',
    ],
    correctAnswer: 0,
    category: 'nature',
    explanation:
      'The Danphe is a colorful pheasant native to Himalayan forests.',
  },
  {
    question: 'What deep canyon is carved between Annapurna I and Dhaulagiri?',
    answers: [
      'The Giant Potato Valley',
      'Grand Canyon',
      'Kali Gandaki Gorge',
      'The Canyon of Lost Trekking Boots',
    ],
    correctAnswer: 2,
    category: 'nature',
    explanation:
      'The Kali Gandaki cuts a gorge often described as one of the deepest in the world.',
  },
  {
    question: 'Which national park protects Rara Lake, Nepal’s largest lake?',
    answers: [
      'Chitwan National Park',
      'Rara National Park',
      'The National Park of Floating Ducks',
      'Bardia National Park',
    ],
    correctAnswer: 1,
    category: 'nature',
    explanation:
      'Located in Mugu district in the northwest, Rara National Park surrounds the pristine Rara Lake, the largest lake in Nepal.',
  },
  {
    question:
      'What wild animal, nicknamed the “Firefox,” lives in bamboo forests of Langtang and Sagarmatha?',
    answers: [
      'A red-colored internet browser',
      'Snow Leopard',
      'Golden Jackal',
      'Red Panda',
    ],
    correctAnswer: 3,
    category: 'nature',
    explanation:
      'The endangered red panda lives in high-altitude bamboo and rhododendron forests.',
  },
  {
    question:
      'Which sacred high-altitude lake, a Hindu pilgrimage site, lies in the Langtang region?',
    answers: ['Gosaikunda', 'Rara', 'Phewa', 'The Lake of Never-Ending Chiya'],
    correctAnswer: 0,
    category: 'nature',
    explanation:
      'Gosaikunda sits at about 4,380 m and is visited by pilgrims, especially during Janai Purnima.',
  },
  {
    question:
      'What is the world’s 5th-highest mountain, on the Nepal–China border?',
    answers: [
      'Cho Oyu',
      'Kangchenjunga',
      'Makalu',
      "Mount Everest's secret twin",
    ],
    correctAnswer: 2,
    category: 'nature',
    explanation:
      'Makalu, at about 8,485 m, lies east of Everest on the Nepal–China border.',
  },
  {
    question:
      'Which Nepali peak is the world’s 10th-highest mountain at 8,091 m?',
    answers: [
      'Manaslu',
      'Annapurna I',
      'Dhaulagiri',
      'The Great Himalayan Speed Bump',
    ],
    correctAnswer: 1,
    category: 'nature',
    explanation:
      'Annapurna I is 8,091 m and is one of the most famous peaks in the Annapurna range.',
  },
  {
    question:
      'Bardia National Park, known for tigers and rhinos, is located in which region?',
    answers: [
      'High Himalaya',
      'Eastern hills',
      'The Land of Flying Yaks',
      'Terai lowlands',
    ],
    correctAnswer: 3,
    category: 'nature',
    explanation: 'Bardia lies in the lowland Terai of western Nepal.',
  },
  {
    question:
      'A common guideline above 3,000 m is to limit sleeping-elevation gain per day to about:',
    answers: [
      '5,000 m, because the sky is the limit',
      '2,000 m',
      'No limit needed',
      '300–500 m',
    ],
    correctAnswer: 3,
    category: 'trekking',
    explanation:
      'Limiting the increase in sleeping altitude to about 300–500 m per day helps acclimatization.',
  },
  {
    question:
      'Trekking during the monsoon season (June–August) is less popular mainly because of:',
    answers: [
      'Too many birthday parties on the trail',
      'Heavy snow and polar bears',
      'Heavy rain, leeches, and obscured mountain views',
      "Mountain goats stealing everyone's backpacks",
    ],
    correctAnswer: 2,
    category: 'trekking',
    explanation:
      'Monsoon brings muddy trails, leeches, and clouds that block views.',
  },
  {
    question:
      'Gurkha soldiers, renowned for bravery, traditionally come from which ethnic groups?',
    answers: [
      'Newar only',
      'Tharu only',
      'Gurung and Magar',
      'Professional mountain penguins',
    ],
    correctAnswer: 2,
    category: 'trekking',
    explanation:
      'Gurkha regiments have long drawn heavily from the Gurung and Magar hill communities.',
  },
  {
    question:
      'Nepal’s monarchy ended, and the country became a federal republic, in which year?',
    answers: ['2008', '3025', '1990', 'The year dinosaurs learned to fly'],
    correctAnswer: 0,
    category: 'trekking',
    explanation: 'Nepal declared a federal democratic republic in 2008.',
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
    {
      question:
        'Which viewpoint above Gorakshep offers a famous close-up view of Everest?',
      answers: ['Poon Hill', 'Gokyo Ri', 'Kala Patthar', 'Sarangkot'],
      correctAnswer: 2,
      explanation:
        'At about 5,644 meters, Kala Patthar (“Black Rock”) is the classic viewpoint for Everest.',
    },
    {
      question:
        'What is the name of the milky-turquoise river that flows through the valley on the EBC trail?',
      answers: [
        'Dudh Koshi (Milk River)',
        'Kali Gandaki',
        'Bagmati River',
        'Amazon River',
      ],
      correctAnswer: 0,
      explanation:
        'Its name comes from the white glacial silt carried by its rushing meltwater.',
    },
    {
      question:
        'Which pyramid-shaped peak dominates the skyline near Tengboche Monastery?',
      answers: ['Lhotse', 'Ama Dablam', 'Annapurna I', 'Manaslu'],
      correctAnswer: 1,
      explanation:
        'Ama Dablam (6,812 m) is widely considered one of the world’s most beautiful peaks.',
    },
    {
      question: 'Which small mountain airport do most EBC trekkers fly into?',
      answers: [
        'Pokhara',
        'Lukla (Tenzing-Hillary Airport)',
        'Jomsom',
        'Bhairahawa',
      ],
      correctAnswer: 1,
      explanation:
        'Lukla’s short, sloping runway on a cliffside is the gateway to the Khumbu.',
    },
    {
      question: 'What is Namche Bazaar known for on the EBC trail?',
      answers: [
        'A desert ghost town',
        'A bowl-shaped Sherpa town full of bakeries, cafes, and gear shops',
        'An underground cave complex',
        'A lake resort',
      ],
      correctAnswer: 1,
      explanation:
        'At 3,440 m, Namche is the main trade and acclimatization hub of the Khumbu.',
    },
    {
      question:
        'How are food, gas, and heavy equipment transported up the EBC trail, where there are no roads?',
      answers: [
        'By golf carts',
        'By yaks, zopkyoks, and porters',
        'By pickup trucks',
        'By subterranean trains',
      ],
      correctAnswer: 1,
      explanation:
        'Pack animals and porters carry all supplies along the narrow mountain paths.',
    },
    {
      question:
        'Where do trekkers sleep and eat each night along the EBC route?',
      answers: [
        'Five-star luxury hotels',
        'Tents in snow caves',
        'Family-run mountain teahouses',
        'Treehouses',
      ],
      correctAnswer: 2,
      explanation:
        'Teahouses offer simple rooms, shared dining halls, and hot meals.',
    },
    {
      question: 'Why is a high-quality down jacket essential for EBC?',
      answers: [
        'To look like a giant marshmallow in photos',
        'Teahouse bedrooms are unheated and nights drop well below freezing',
        'To keep you floatable in glacial lakes',
        'To wear while sunbathing',
      ],
      correctAnswer: 1,
      explanation: 'Temperatures fall quickly after sunset at high elevation.',
    },
    {
      question: 'Why should trekkers pack UV-protection sunglasses on EBC?',
      answers: [
        'To see in the dark',
        'To prevent snow blindness caused by sunlight reflecting off snow and ice',
        'To block dust storms only',
        'To take dark photos',
      ],
      correctAnswer: 1,
      explanation:
        'Strong high-altitude sun reflecting off snow can injure unprotected eyes.',
    },
    {
      question: 'Why are trekking poles helpful on the EBC trail?',
      answers: [
        'To scare away wild snow leopards',
        'To reduce stress on your knee joints during steep downhills',
        'To measure trail distance',
        'To push other hikers aside',
      ],
      correctAnswer: 1,
      explanation: 'Poles share the load with your legs on long descents.',
    },
    {
      question: 'Why bring a sleeping bag liner to the teahouses?',
      answers: [
        'It doubles as a rain poncho',
        'It adds warmth and keeps your sleeping bag clean',
        'It stops bug bites',
        'It prevents altitude sickness',
      ],
      correctAnswer: 1,
      explanation:
        'A silk or fleece liner adds insulation and hygiene inside rented bags or teahouse quilts.',
    },
    {
      question:
        'What is the golden rule to prevent Acute Mountain Sickness (AMS) on the trail?',
      answers: [
        'Run uphill as fast as you can',
        'Walk slowly (“Bistari”), stay hydrated, and take acclimatization rest days',
        'Skip meals to stay light',
        'Drink only energy drinks',
      ],
      correctAnswer: 1,
      explanation:
        'A slow pace and rest days give your body time to adapt to lower oxygen.',
    },
    {
      question:
        'What should you do when meeting a yak train on a narrow mountain path?',
      answers: [
        'Stand on the cliff edge side',
        'Step to the uphill (mountain) side of the trail and wait',
        'Try to pet the yak’s nose',
        'Run right past them',
      ],
      correctAnswer: 1,
      explanation:
        'The cliff side risks being bumped off the edge by heavy cargo.',
    },
    {
      question:
        'Why should you always use purification tablets or a filter on trail water?',
      answers: [
        'Untreated water freezes instantly in bottles',
        'To protect yourself from stomach bugs and waterborne parasites',
        'Cold water causes altitude sickness',
        'Streams taste salty',
      ],
      correctAnswer: 1,
      explanation:
        'Treatment methods kill bacteria and parasites such as Giardia.',
    },
    {
      question:
        'Why do trekkers start before dawn (around 4:00 AM) to hike up Kala Patthar?',
      answers: [
        'The mountain closes at noon',
        'To catch the sunrise on Everest before afternoon clouds build',
        'To beat city traffic',
        'To avoid daytime heat',
      ],
      correctAnswer: 1,
      explanation: 'Morning usually offers the clearest skies and best light.',
    },
    {
      question:
        'Which ethnic community, famous for high-altitude climbing expertise, lives in the Khumbu?',
      answers: ['Tharu', 'Sherpa', 'Newar', 'Gurung'],
      correctAnswer: 1,
      explanation:
        'Sherpa communities have lived in the high Khumbu for centuries and lead many expeditions.',
    },
    {
      question:
        'What is one of the most famous Buddhist monasteries along the EBC trail?',
      answers: [
        'Kopan Monastery',
        'Tengboche Monastery',
        'Namobuddha',
        'World Peace Pagoda',
      ],
      correctAnswer: 1,
      explanation:
        'Tengboche sits on a ridge with direct views of Everest and Ama Dablam.',
    },
    {
      question:
        'Which direction should you walk when passing sacred mani walls on the trail?',
      answers: [
        'Pass on the left side, moving clockwise',
        'Pass on the right side, moving counter-clockwise',
        'Jump over them',
        'Walk directly over the top',
      ],
      correctAnswer: 0,
      explanation:
        'Keep the sacred structure on your right, which means walking clockwise.',
    },
    {
      question:
        'What friendly local greeting is spoken on the trail with hands pressed together?',
      answers: ['Aloha', 'Namaste', 'Ciao', 'Bonjour'],
      correctAnswer: 1,
      explanation: 'Namaste means “I bow to the divine in you.”',
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
    {
      question: 'What is the Gokyo Valley especially famous for?',
      answers: [
        'Tropical beaches',
        'High-altitude glacial lakes',
        'Desert sand dunes',
        'Giant shopping malls',
      ],
      correctAnswer: 1,
      explanation:
        'Gokyo Valley is famous for its beautiful glacial lakes surrounded by spectacular Himalayan mountains.',
    },
    {
      question: 'Which Himalayan region is the Gokyo Valley Trek located in?',
      answers: [
        'Annapurna Region',
        'Dolpo Region',
        'Khumbu Region',
        'The Kingdom of Snow Monsters',
      ],
      correctAnswer: 2,
      explanation:
        'Gokyo lies in the Khumbu Region, the same broader Himalayan region as Mount Everest.',
    },
    {
      question: 'What colour are the Gokyo Lakes especially known for?',
      answers: ['Bright red', 'Turquoise', 'Neon pink', 'Chocolate brown'],
      correctAnswer: 1,
      explanation:
        'The striking turquoise colour of the Gokyo Lakes makes them some of the most beautiful sights in the Khumbu.',
    },
    {
      question: 'What is Gokyo Ri?',
      answers: [
        'A high mountain viewpoint',
        'A shopping centre',
        'A river crossing',
        'A mountain airport for yaks',
      ],
      correctAnswer: 0,
      explanation:
        'Gokyo Ri is a popular viewpoint that offers panoramic views of lakes, glaciers and surrounding Himalayan peaks.',
    },
    {
      question: 'What can trekkers see from Gokyo Ri on a clear day?',
      answers: [
        'Ocean beaches',
        'Kathmandu traffic',
        'Himalayan peaks, lakes and glaciers',
        'Desert camels having a picnic',
      ],
      correctAnswer: 2,
      explanation:
        'Gokyo Ri overlooks the beautiful Gokyo Lakes and the enormous Ngozumpa Glacier.',
    },
    {
      question: 'Which famous mountain can be seen from Gokyo Ri?',
      answers: ['Mount Fuji', 'Mount Everest', 'Kilimanjaro', 'Mount Elbrus'],
      correctAnswer: 1,
      explanation:
        'On clear days, Gokyo Ri offers views toward Everest, Lhotse, Makalu and Cho Oyu.',
    },
    {
      question: 'Which glacier is a major feature of the Gokyo route?',
      answers: [
        'Ngozumpa Glacier',
        'A chocolate ice glacier',
        'Gangotri Glacier',
        'Baltoro Glacier',
      ],
      correctAnswer: 0,
      explanation:
        'Ngozumpa Glacier is a huge Himalayan glacier that forms an important part of the Gokyo Valley landscape.',
    },
    {
      question:
        'What type of landscape do trekkers enter as they climb higher?',
      answers: [
        'Tropical coastline',
        'Busy city roads',
        'Alpine and glacial terrain',
        'Desert farmland',
      ],
      correctAnswer: 2,
      explanation:
        'As the route climbs higher, forests become less common and the landscape opens into rocky alpine and glacial terrain.',
    },
    {
      question: 'Where does the walking portion of the Gokyo Trek begin?',
      answers: ['Pokhara', 'Lukla', 'Jomsom', 'A secret underground airport'],
      correctAnswer: 1,
      explanation:
        'Trekkers usually fly into Lukla before beginning their journey through the Khumbu mountains.',
    },
    {
      question: 'Which famous mountain town does the Gokyo route pass through?',
      answers: ['Manang', 'Ghandruk', 'Namche Bazaar', 'Ringmo'],
      correctAnswer: 2,
      explanation:
        'Namche Bazaar is an important mountain town with shops, bakeries, cafes and beautiful Himalayan surroundings.',
    },
    {
      question: 'Why do trekkers spend an extra day in Namche Bazaar?',
      answers: [
        'To help their bodies adjust to altitude',
        'To wait for a cruise ship',
        'To go shopping for 48 hours straight',
        'To avoid eating mountain food',
      ],
      correctAnswer: 0,
      explanation:
        'Acclimatization in Namche helps prepare trekkers for the higher elevations of the Gokyo Valley.',
    },
    {
      question: 'Which river is followed through the lower Khumbu region?',
      answers: [
        'Kali Gandaki',
        'Modi Khola',
        'Dudh Koshi',
        'The River of Chocolate Milk',
      ],
      correctAnswer: 2,
      explanation:
        'Dudh Koshi means "Milk River" in Nepali. The river flows through the lower Khumbu Valley.',
    },
    {
      question: 'What is Dudh Pokhari?',
      answers: [
        'A mountain pass',
        'One of the main Gokyo Lakes',
        'A village airport',
        'A mountain swimming pool',
      ],
      correctAnswer: 1,
      explanation:
        'Gokyo Village sits beside Dudh Pokhari, which is the third and largest of the main Gokyo Lakes.',
    },
    {
      question: 'Where do trekkers usually stay along the Gokyo route?',
      answers: [
        'Cruise cabins',
        'Luxury resorts only',
        'Tea houses and lodges',
        'Giant snow caves',
      ],
      correctAnswer: 2,
      explanation:
        'Tea houses and lodges provide accommodation along the established Gokyo trekking route.',
    },
    {
      question: 'Which protected area does the Gokyo route pass through?',
      answers: [
        'Chitwan National Park',
        'Sagarmatha National Park',
        'Bardia National Park',
        'A park full of dancing llamas',
      ],
      correctAnswer: 1,
      explanation:
        'Sagarmatha National Park protects the spectacular mountain environment of the Khumbu region and is home to Mount Everest.',
    },
    {
      question: 'Do the Gokyo Lakes have religious and cultural significance?',
      answers: [
        'Yes, for Hindu and Buddhist communities',
        'No, they are only for swimming',
        'Only for mountain climbers',
        'Only for fish competitions',
      ],
      correctAnswer: 0,
      explanation:
        'The Gokyo Lakes are considered sacred by both Hindu and Buddhist communities.',
    },
    {
      question: 'Which season is recommended for the Gokyo Trek?',
      answers: [
        'July only',
        'January only',
        'March–May',
        'The season of endless sunshine',
      ],
      correctAnswer: 2,
      explanation:
        'Spring is one of the recommended trekking periods, with generally favourable conditions for exploring the Gokyo Valley.',
    },
    {
      question: 'Which period is also popular for good mountain visibility?',
      answers: [
        'June–August',
        'September–November',
        'July only',
        'December–February only',
      ],
      correctAnswer: 1,
      explanation:
        'Autumn generally brings drier conditions and clearer mountain views after the monsoon.',
    },
    {
      question: 'Why should trekkers walk steadily at higher elevations?',
      answers: [
        'To help their bodies adjust to altitude',
        'Because running is illegal in the mountains',
        'To avoid mountain traffic jams',
        'Because the yaks are judging their walking speed',
      ],
      correctAnswer: 0,
      explanation:
        'The trek reaches above 5,000 meters, where altitude sickness can become serious. Gradual acclimatization is essential.',
    },
    {
      question: 'What best describes the Gokyo Valley experience?',
      answers: [
        'A tropical beach holiday',
        'A city sightseeing tour',
        'A desert expedition',
        'Turquoise lakes, glaciers and Himalayan viewpoints',
      ],
      correctAnswer: 3,
      explanation:
        'The Gokyo experience combines beautiful glacial lakes, Ngozumpa Glacier, high alpine landscapes and panoramic mountain views.',
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
    {
      question:
        'What popular nickname is given to Langtang Valley because of its landscape?',
      answers: [
        'Valley of Sunflowers',
        'Valley of Glaciers',
        'Valley of Deserts',
        'Valley of Lakes',
      ],
      correctAnswer: 1,
      explanation:
        'Hanging glaciers cascade down the surrounding peaks into the valley.',
    },
    {
      question:
        'Langtang Valley lies near Nepal’s northern border, sharing a boundary with which region?',
      answers: ['India', 'Tibet (China)', 'Bhutan', 'Myanmar'],
      correctAnswer: 1,
      explanation:
        'High passes at the head of the valley connect toward Tibet.',
    },
    {
      question:
        'What is the highest peak towering over upper Langtang at 7,234 meters?',
      answers: [
        'Langtang Lirung',
        'Ganesh Himal',
        'Machapuchare',
        'Mount Everest',
      ],
      correctAnswer: 0,
      explanation:
        'Langtang Lirung dominates the northern wall of the main valley.',
    },
    {
      question:
        'What viewpoint near Kyanjin Gompa offers panoramic 360-degree views?',
      answers: ['Kala Patthar', 'Tserko Ri', 'Poon Hill', 'Sarangkot'],
      correctAnswer: 1,
      explanation:
        'Tserko Ri, a climb above Kyanjin Gompa, offers sweeping views of glaciers and high peaks.',
    },
    {
      question:
        'Which trailhead town, reached by road from Kathmandu, starts the Langtang trek?',
      answers: ['Lukla', 'Pokhara', 'Syabrubesi', 'Besisahar'],
      correctAnswer: 2,
      explanation:
        'Syabrubesi in Rasuwa district is the main road hub for the valley.',
    },
    {
      question: 'Why do many travelers choose Langtang over EBC or ABC?',
      answers: [
        'You fly in on a commercial jet',
        'It is close to Kathmandu, less crowded, and takes under 10 days',
        'It is completely flat',
        'It features cable cars all the way up',
      ],
      correctAnswer: 1,
      explanation:
        'Langtang offers a high Himalayan experience without internal flights or heavy crowds.',
    },
    {
      question:
        'What local product is famously produced in the high village of Kyanjin Gompa?',
      answers: [
        'Chocolate bars',
        'Fresh yak cheese',
        'Olive oil',
        'Pineapple pie',
      ],
      correctAnswer: 1,
      explanation:
        'A cheese factory at Kyanjin, set up with Swiss assistance, produces fresh yak cheese.',
    },
    {
      question: 'How do trekkers cross the rushing rivers in Langtang?',
      answers: [
        'In wooden canoes',
        'Across steel suspension bridges draped in prayer flags',
        'By jumping on flat rocks',
        'By zip line',
      ],
      correctAnswer: 1,
      explanation:
        'High suspension bridges span the deep river canyons along the trail.',
    },
    {
      question:
        'Why is a warm knit beanie essential for early mornings at Kyanjin Gompa?',
      answers: [
        'You lose significant body heat from your head in cold conditions',
        'To hold your hair back for photos',
        'To store snacks inside',
        'To wear while sleeping in the sun',
      ],
      correctAnswer: 0,
      explanation:
        'A warm hat helps preserve body heat during cold pre-dawn walks.',
    },
    {
      question: 'Why should you pack lip balm with SPF for Langtang?',
      answers: [
        'To make lips shine in photos',
        'Cold winds and intense sun dry out skin and lips quickly',
        'To use as boot polish',
        'It smells sweet',
      ],
      correctAnswer: 1,
      explanation: 'Sun-protective balm prevents painful chapping at altitude.',
    },
    {
      question: 'Why bring a neck gaiter or Buff on the trail?',
      answers: [
        'To tie up your backpack',
        'To protect your throat and airways from dust and cold air',
        'To use as a towel',
        'To wave at passing helicopters',
      ],
      correctAnswer: 1,
      explanation:
        'A Buff shields your neck and airways from dry dust and biting wind.',
    },
    {
      question: 'Why is carrying slip-on sandals helpful in the evenings?',
      answers: [
        'To hike up snow peaks',
        'To let your feet rest and dry out around the teahouse',
        'To walk across rivers',
        'To wear on suspension bridges',
      ],
      correctAnswer: 1,
      explanation: 'Taking off heavy boots lets your feet breathe and recover.',
    },
    {
      question:
        'Which major natural event heavily affected the Langtang village in April 2015?',
      answers: [
        'A massive forest fire',
        'The 7.8 magnitude Gorkha earthquake and resulting avalanche',
        'A volcanic eruption',
        'A flash river flood',
      ],
      correctAnswer: 1,
      explanation:
        'The earthquake triggered a huge rock-and-ice avalanche. The village was later rebuilt in a safer location nearby.',
    },
    {
      question:
        'Why is it essential to carry enough Nepali cash on the Langtang trek?',
      answers: [
        'Credit cards are illegal in mountains',
        'Remote teahouses often have no ATMs or card machines',
        'Cash is lighter than plastic cards',
        'Paper money keeps your wallet warm',
      ],
      correctAnswer: 1,
      explanation:
        'Bank networks don’t reach remote lodges, so cash is often the only accepted payment.',
    },
    {
      question:
        'What should you do if sudden afternoon fog lowers visibility on high ridges?',
      answers: [
        'Run fast to find the lodge',
        'Stay together with your group, slow down, and follow path markers',
        'Hide in bushes',
        'Shout loudly nonstop',
      ],
      correctAnswer: 1,
      explanation:
        'Staying close together prevents anyone from straying off the trail.',
    },
    {
      question:
        'Why is dressing in multiple thin layers better than one heavy coat?',
      answers: [
        'It makes you look bulkier',
        'You can add or remove layers as body heat changes',
        'Heavy coats are banned on paths',
        'Thin layers make you walk faster',
      ],
      correctAnswer: 1,
      explanation:
        'Adjusting layers prevents overheating on climbs and keeps you warm during rest stops.',
    },
    {
      question:
        'Which ethnic group with heritage close to Tibet makes up the main population in Langtang?',
      answers: ['Tamang and Bhotia', 'Tharu', 'Newar', 'Rai'],
      correctAnswer: 0,
      explanation:
        'Tamang culture dominates the region, visible in language, dress, and Buddhist traditions.',
    },
    {
      question:
        'What carved stone walls do trekkers pass on the way into local villages?',
      answers: [
        'Totem poles',
        'Mani walls (carved prayer stone walls)',
        'Pyramid tombs',
        'Brick fences',
      ],
      correctAnswer: 1,
      explanation:
        'Mani walls are built from flat stones carved with Buddhist mantras.',
    },
    {
      question:
        'What cultural trail segment in lower Langtang offers community homestays?',
      answers: [
        'Tamang Heritage Trail',
        'Great Himalayan Highway',
        'Annapurna Circuit',
        'Everest Highway',
      ],
      correctAnswer: 0,
      explanation:
        'The trail showcases village crafts, hot springs, and homestays.',
    },
    {
      question:
        'What brightly colored items flutter on bridges and roofs to spread prayers across the land?',
      answers: [
        'Silk ribbons',
        'Tibetan prayer flags (Lungta)',
        'Paper lanterns',
        'Woolen scarves',
      ],
      correctAnswer: 1,
      explanation:
        'Buddhists believe the wind carries the printed prayers across the mountains.',
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
    {
      question:
        'Which sacred fishtail-shaped peak dominates the approach to ABC?',
      answers: ['Manaslu', 'Machapuchare (Fishtail Mountain)', 'K2', 'Lhotse'],
      correctAnswer: 1,
      explanation:
        'Machapuchare (6,993 m) is sacred to Lord Shiva, and climbing it is prohibited.',
    },
    {
      question: 'ABC lies inside which large protected conservation zone?',
      answers: [
        'Sagarmatha National Park',
        'Annapurna Conservation Area (ACAP)',
        'Langtang National Park',
        'Chitwan National Park',
      ],
      correctAnswer: 1,
      explanation:
        'ACAP is one of Nepal’s largest protected areas, covering roughly 7,600 square kilometers.',
    },
    {
      question:
        'What is the high-altitude glacial basin surrounding ABC called?',
      answers: [
        'Annapurna Sanctuary',
        'Pokhara Bowl',
        'Mustang Desert',
        'Kathmandu Valley',
      ],
      correctAnswer: 0,
      explanation:
        'The Sanctuary is a high amphitheater ringed by 7,000 m+ peaks.',
    },
    {
      question: 'At approximately what elevation does Annapurna Base Camp sit?',
      answers: ['2,100 m', '3,200 m', '4,130 m', '5,364 m'],
      correctAnswer: 2,
      explanation: 'ABC sits at about 4,130 meters.',
    },
    {
      question:
        'Which lakeside city is the main starting gateway for Annapurna region treks?',
      answers: ['Kathmandu', 'Pokhara', 'Biratnagar', 'Nepalgunj'],
      correctAnswer: 1,
      explanation: 'Pokhara is the launching point for most Annapurna treks.',
    },
    {
      question: 'What distinct trail feature is the ABC walk famous for?',
      answers: [
        'Escalators',
        'Hand-carved stone staircases',
        'Wooden slides',
        'Tunnels',
      ],
      correctAnswer: 1,
      explanation:
        'The trail climbs and descends thousands of stone steps linking hill villages.',
    },
    {
      question:
        'What natural relaxing stop can trekkers enjoy on the way down at Jhinu Danda?',
      answers: [
        'Ice cream parlors',
        'Natural hot spring pools by the riverbank',
        'Theme park rides',
        'Chocolate fountains',
      ],
      correctAnswer: 1,
      explanation:
        'Jhinu Danda’s warm springs sit beside the Modi Khola river.',
    },
    {
      question:
        'What is Machapuchare Base Camp (MBC), which you pass before reaching ABC?',
      answers: [
        'A teahouse stop at about 3,700 m',
        'The actual summit of Fishtail',
        'A military fort',
        'A deep cave system',
      ],
      correctAnswer: 0,
      explanation: 'MBC is a rest and overnight stop just below ABC.',
    },
    {
      question: 'Why are sturdy hiking boots crucial for the ABC trail?',
      answers: [
        'To swim across deep lakes',
        'To provide ankle support over thousands of uneven stone steps',
        'To walk across hot desert sand',
        'To scale vertical cliffs without ropes',
      ],
      correctAnswer: 1,
      explanation:
        'Good tread and ankle support prevent trips and joint fatigue.',
    },
    {
      question:
        'Why should you pack a light waterproof poncho or rain jacket even in dry seasons?',
      answers: [
        'To protect from dust storms',
        'Afternoon rain showers are common in the green Modi Khola valley',
        'To keep warm at night while sleeping',
        'To use as a picnic blanket',
      ],
      correctAnswer: 1,
      explanation: 'The lower Annapurna valleys receive substantial rainfall.',
    },
    {
      question: 'Why are compression knee sleeves popular gear for ABC?',
      answers: [
        'To keep ankles warm',
        'To ease knee strain during long downhill step descents',
        'To make you run faster',
        'To prevent insect bites',
      ],
      correctAnswer: 1,
      explanation: 'Repeated step descents place heavy impact on the knees.',
    },
    {
      question:
        'Why is a fast-drying microfiber towel ideal for teahouse trekking?',
      answers: [
        'It doubles as a warm coat',
        'It dries quickly in cool, humid air and packs small',
        'It keeps water out of your backpack',
        'It works as a trail flag',
      ],
      correctAnswer: 1,
      explanation: 'Cotton towels can stay damp for days in mountain humidity.',
    },
    {
      question:
        'During late winter and spring, what hazard exists in narrow gorges between Himalaya and MBC?',
      answers: [
        'Sandstorms',
        'Avalanche chutes crossing the main path',
        'Forest fires',
        'Quicksand',
      ],
      correctAnswer: 1,
      explanation:
        'Steep slopes can shed snow onto the trail in narrow sections.',
    },
    {
      question:
        'What should you do if you get a persistent headache and nausea above 3,000 m?',
      answers: [
        'Hike twice as fast uphill',
        'Stop ascending, inform your guide, and descend if symptoms worsen',
        'Drink alcohol to dull the pain',
        'Ignore it completely',
      ],
      correctAnswer: 1,
      explanation:
        'These are classic altitude sickness signs. The main remedy is to stop climbing.',
    },
    {
      question:
        'Why should trekkers carry a headlamp for the morning hike up to ABC?',
      answers: [
        'Teahouses have no indoor lights',
        'Trekkers start walking in the dark to reach ABC for sunrise',
        'The trail goes through long caves',
        'To signal airplanes',
      ],
      correctAnswer: 1,
      explanation: 'Early starts require hands-free light on rocky paths.',
    },
    {
      question:
        'Why is eating freshly cooked hot meals like Dal Bhat recommended for trail health?',
      answers: [
        'Raw food causes instant mountain sickness',
        'Freshly cooked hot meals reduce the risk of foodborne stomach bugs',
        'Cold food is illegal in lodges',
        'Hot food makes you climb faster',
      ],
      correctAnswer: 1,
      explanation:
        'Hot, freshly cooked food is generally safer than food that has been sitting out.',
    },
    {
      question:
        'Which local hill communities primarily inhabit villages like Ghandruk along the lower ABC trail?',
      answers: [
        'Gurung and Magar',
        'Sherpa only',
        'Tibetan nomads',
        'Newar traders',
      ],
      correctAnswer: 0,
      explanation:
        'These communities are known for terraced farming and a strong military history.',
    },
    {
      question:
        'Which traditional Gurung village features slate-roofed stone houses and a cultural museum?',
      answers: ['Namche Bazaar', 'Ghandruk', 'Lukla', 'Syabrubesi'],
      correctAnswer: 1,
      explanation:
        'Ghandruk offers views of Annapurna South and traditional stone architecture.',
    },
    {
      question:
        'What energetic phrase do trekkers use to describe the power of Nepal’s staple dish?',
      answers: [
        'Pizza Power!',
        '“Dal Bhat Power, 24 Hour!”',
        'Momo Master!',
        'Tea Time All Day!',
      ],
      correctAnswer: 1,
      explanation:
        'Dal Bhat provides carbs and protein, and refills are often free.',
    },
    {
      question:
        'Why do conservation projects in the Annapurna region promote refill stations instead of single-use bottles?',
      answers: [
        'Water is free everywhere',
        'To reduce plastic trash and protect the fragile mountain ecosystem',
        'Bottles explode in high air',
        'Locals dislike plastic colors',
      ],
      correctAnswer: 1,
      explanation:
        'Refill stations cut down the number of discarded plastic bottles on the trail.',
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
    {
      question: 'Which region is the Mardi Himal Trek located in?',
      answers: [
        'Everest Region',
        'Annapurna Region',
        'Dolpo Region',
        'The Kingdom of Lost Socks',
      ],
      correctAnswer: 1,
      explanation:
        'Mardi Himal is part of the Annapurna Region and is famous for its quieter trails and beautiful mountain scenery.',
    },
    {
      question: 'What type of trail is Mardi Himal especially famous for?',
      answers: [
        'Desert walking',
        'Underwater trekking',
        'Ridge walking',
        'Walking through shopping malls',
      ],
      correctAnswer: 2,
      explanation:
        'The trek follows a beautiful mountain ridge with incredible views of surrounding valleys and Himalayan peaks.',
    },
    {
      question:
        'Which famous mountain is especially visible along the Mardi Himal route?',
      answers: [
        'Mount Fuji',
        'Machhapuchhre (Fishtail)',
        'Mount Kilimanjaro',
        'Mount Everest only',
      ],
      correctAnswer: 1,
      explanation:
        'Machhapuchhre is also called Fishtail because of its distinctive double-peaked summit.',
    },
    {
      question:
        'What kind of landscape do trekkers encounter at lower elevations?',
      answers: [
        'Dense forests',
        'Sandy beaches',
        'Desert dunes',
        'Busy highways',
      ],
      correctAnswer: 0,
      explanation:
        'The lower trail passes through beautiful oak, maple and rhododendron forests.',
    },
    {
      question:
        'Which colourful flower is especially common along the forest trail?',
      answers: ['Lotus', 'Cactus flower', 'Rhododendron', 'Sunflower'],
      correctAnswer: 2,
      explanation:
        "Rhododendrons are Nepal's national flower, and their colourful blooms make the spring trekking season especially beautiful.",
    },
    {
      question: 'What happens to the landscape as you climb above Low Camp?',
      answers: [
        'You enter a shopping district',
        'The forest gives way to open ridges',
        'You reach a tropical beach',
        'You suddenly arrive in Kathmandu',
      ],
      correctAnswer: 1,
      explanation:
        'Above Low Camp, the trail moves beyond the tree line and opens into beautiful sub-alpine ridge landscapes.',
    },
    {
      question: 'Which place is famous for its views above the clouds?',
      answers: [
        'Badal Danda',
        'Jomsom Airport',
        'Ghandruk Market',
        'The Yak Shopping Centre',
      ],
      correctAnswer: 0,
      explanation:
        'Badal Danda means "Cloud Hill" and offers wonderful views of clouds filling the valleys below.',
    },
    {
      question: 'What can you see from the higher Mardi Himal ridges?',
      answers: [
        'Ocean waves and beaches',
        'Desert camels',
        'Mountain peaks and deep valleys',
        'City skyscrapers',
      ],
      correctAnswer: 2,
      explanation:
        'The upper ridge offers sweeping views toward Machhapuchhre, Annapurna South and surrounding Himalayan landscapes.',
    },
    {
      question: 'What is High Camp mainly used for?',
      answers: [
        'Starting a road trip',
        'Preparing for the final ascent',
        'Building sandcastles',
        'Catching a train',
      ],
      correctAnswer: 1,
      explanation:
        'High Camp is an important overnight stop before the early-morning hike toward the upper viewpoint and Base Camp.',
    },
    {
      question: 'What is the main high-altitude destination of this trek?',
      answers: [
        'Everest Base Camp',
        'Annapurna Base Camp',
        'Mardi Himal Base Camp',
        "The World's Highest Bakery",
      ],
      correctAnswer: 2,
      explanation:
        'Mardi Himal Base Camp is the highest destination in this itinerary and sits along the dramatic upper ridge.',
    },
    {
      question:
        'What makes the final approach toward Mardi Himal Base Camp more challenging?',
      answers: [
        'Too many traffic lights',
        'Higher altitude and exposed terrain',
        'Sand dunes and camels',
        'Too many shopping bags',
      ],
      correctAnswer: 1,
      explanation:
        'The trail becomes rockier and more exposed as you climb, making weather awareness and careful walking important.',
    },
    {
      question:
        'Which city is commonly used as the starting point for this trek?',
      answers: ['Pokhara', 'Kathmandu only', 'Biratnagar', 'The City of Yaks'],
      correctAnswer: 0,
      explanation:
        'Trekkers usually travel from Pokhara toward Kande before beginning their walk into the mountains.',
    },
    {
      question: 'Where do trekkers usually stay during the Mardi Himal Trek?',
      answers: [
        'Cruise ships',
        'Luxury resorts only',
        'Tea houses and mountain lodges',
        'Under giant mushrooms',
      ],
      correctAnswer: 2,
      explanation:
        'Tea houses and mountain lodges provide places to sleep and eat along the route.',
    },
    {
      question: 'What shape is the Mardi Himal trekking route described as?',
      answers: [
        'A perfect circle',
        'A teardrop-shaped ridge route',
        'A giant square',
        'A zigzag lightning bolt',
      ],
      correctAnswer: 1,
      explanation:
        'The route follows a teardrop-shaped ridge journey before descending through a different lower section.',
    },
    {
      question: 'Which village do trekkers reach near the end of the trek?',
      answers: ['Sidhing', 'Namche Bazaar', 'Samagaon', 'Penguin Village'],
      correctAnswer: 0,
      explanation:
        'After descending through the forest from the ridge, trekkers reach Sidhing and return toward Pokhara by road.',
    },
    {
      question:
        'Which season makes the lower Mardi Himal forests especially colourful?',
      answers: [
        'Mid-winter',
        'Monsoon only',
        'Spring',
        'The season of rainbow snow',
      ],
      correctAnswer: 2,
      explanation:
        'March to May is known for blooming rhododendrons, adding beautiful colours to the forest trail.',
    },
    {
      question: 'What can the monsoon season bring to the Mardi Himal trail?',
      answers: [
        'Guaranteed sunshine',
        'Slippery trails and cloud cover',
        'Desert heat',
        'Ice cream falling from the sky',
      ],
      correctAnswer: 1,
      explanation:
        'Monsoon can bring heavy rain, slippery paths, leeches and clouds that hide mountain views.',
    },
    {
      question: 'Which period is recommended for clearer mountain visibility?',
      answers: [
        'June–August',
        'July only',
        'September–November',
        'January only',
      ],
      correctAnswer: 2,
      explanation:
        'Autumn generally brings more stable weather and clearer skies, making it a popular time for mountain views.',
    },
    {
      question:
        'Why should trekkers maintain a steady pace near Mardi Himal Base Camp?',
      answers: [
        'To help their bodies adjust to altitude',
        'Because running attracts mountain dragons',
        'To avoid city traffic',
        'Because the mountains have a speed limit sign',
      ],
      correctAnswer: 0,
      explanation:
        'The trek reaches above 4,000 meters, where altitude illness can occur. Gradual ascent and proper acclimatization are important.',
    },
    {
      question: 'Which description best captures the Mardi Himal experience?',
      answers: [
        'A tropical beach holiday',
        'A city sightseeing tour',
        'A desert expedition',
        'Forests, open ridges and close Himalayan views',
      ],
      correctAnswer: 3,
      explanation:
        'Mardi Himal combines peaceful forest trails, dramatic ridge walks and close-up views of the beautiful Annapurna mountains.',
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
    {
      question: 'What is Poon Hill most famous for?',
      answers: [
        'Desert adventures',
        'Sunrise mountain views',
        'City nightlife',
        'A giant mountain disco',
      ],
      correctAnswer: 1,
      explanation:
        'Poon Hill is famous for its beautiful sunrise views over the Dhaulagiri and Annapurna mountain ranges.',
    },
    {
      question: 'Which region is the Ghorepani–Poon Hill Trek located in?',
      answers: [
        'Everest Region',
        'Dolpo Region',
        'Annapurna Region',
        'The Kingdom of Sleeping Yaks',
      ],
      correctAnswer: 2,
      explanation:
        'This trek explores the lower Annapurna region, passing through traditional villages, forests and beautiful mountain viewpoints.',
    },
    {
      question: 'What type of landscape is commonly found along the trail?',
      answers: [
        'Terraced hillsides and forests',
        'Beaches and palm trees',
        'Desert sand dunes',
        'Skyscrapers and shopping malls',
      ],
      correctAnswer: 0,
      explanation:
        'The trail passes through terraced farmland, traditional villages, oak forests and colourful rhododendron woodland.',
    },
    {
      question:
        'Which flower makes the forests especially colourful during spring?',
      answers: ['Cactus', 'Lotus', 'Rhododendron', 'Giant plastic flowers'],
      correctAnswer: 2,
      explanation:
        'Rhododendron flowers bloom in different colours during spring, making the forest sections especially beautiful.',
    },
    {
      question: 'Which village is famous for its long stone staircase?',
      answers: ['Ulleri', 'Namche Bazaar', 'Samdo', 'Staircase Kingdom'],
      correctAnswer: 0,
      explanation:
        'The climb toward Ulleri includes a long series of stone steps. It is one of the most memorable uphill sections of the trek!',
    },
    {
      question:
        'Which type of forest do trekkers pass through on the way to Ghorepani?',
      answers: [
        'Mangrove forest',
        'Oak and rhododendron forest',
        'Palm tree forest',
        'A forest of giant broccoli',
      ],
      correctAnswer: 1,
      explanation:
        'The trail passes through beautiful oak, magnolia and rhododendron woodland as it climbs toward Ghorepani.',
    },
    {
      question: 'What kind of place is Ghorepani?',
      answers: [
        'An international airport',
        'A beach town',
        'A mountain village',
        'A secret underwater city',
      ],
      correctAnswer: 2,
      explanation:
        'Ghorepani is a mountain village located along the ridge, surrounded by beautiful forest landscapes.',
    },
    {
      question: 'When do trekkers usually hike to Poon Hill?',
      answers: [
        'Early morning',
        'Midnight after dinner',
        'Late afternoon only',
        'Whenever their alarm clock feels happy',
      ],
      correctAnswer: 0,
      explanation:
        'Trekkers usually start before dawn so they can reach the viewpoint in time to watch the sunrise over the Himalayas.',
    },
    {
      question: 'Which famous mountain is visible from Poon Hill?',
      answers: [
        'Mount Fuji',
        'Kilimanjaro',
        'Dhaulagiri',
        'Mount Everest only',
      ],
      correctAnswer: 2,
      explanation:
        'Poon Hill offers views of Dhaulagiri, Annapurna I, Annapurna South, Machhapuchhre and several other Himalayan peaks.',
    },
    {
      question: 'What type of route is the Ghorepani–Poon Hill Trek?',
      answers: [
        'Road-only route',
        'Full circuit',
        'One-way walking route',
        'An endless walking loop',
      ],
      correctAnswer: 1,
      explanation:
        'The trek follows a circuit through different villages and forest trails before returning toward Pokhara.',
    },
    {
      question: 'Which traditional village is visited later in the trek?',
      answers: ['Gorakshep', 'Samagaon', 'Kyanjin Gompa', 'Ghandruk'],
      correctAnswer: 3,
      explanation:
        'Ghandruk is a beautiful traditional Gurung village known for its stone-paved lanes and mountain scenery.',
    },
    {
      question:
        'Which cultural community is especially associated with Ghandruk?',
      answers: [
        'Gurung community',
        'Viking community',
        'Egyptian community',
        'The Mountain Cookie Association',
      ],
      correctAnswer: 0,
      explanation:
        'Ghandruk is well known for its Gurung cultural heritage, traditional houses and beautiful village surroundings.',
    },
    {
      question: 'Where do trekkers commonly stay during this journey?',
      answers: [
        'Cruise ships',
        'Tea houses and lodges',
        'Luxury resorts only',
        'Treehouses in the ocean',
      ],
      correctAnswer: 1,
      explanation:
        'Tea houses and lodges are the standard accommodation along the Ghorepani–Poon Hill route.',
    },
    {
      question: 'Why is the Poon Hill Trek popular with many visitors?',
      answers: [
        'It has no uphill walking',
        'It can be completed entirely by car',
        'It combines mountain views, villages and forests',
        'It has a shopping mall at every turn',
      ],
      correctAnswer: 2,
      explanation:
        'The trek offers a little bit of everything: traditional villages, beautiful forests, terraced hillsides and spectacular Himalayan viewpoints.',
    },
    {
      question:
        'Which season is especially beautiful because of blooming rhododendrons?',
      answers: ['Monsoon', 'Mid-winter', 'Late summer only', 'Spring'],
      correctAnswer: 3,
      explanation:
        'March to May is a colourful time to visit because rhododendron forests burst into bloom.',
    },
    {
      question: 'What can monsoon season bring to the trail?',
      answers: [
        'Heavy rain and wetter trails',
        'Guaranteed clear skies',
        'Desert heat',
        'Flying umbrellas and dancing clouds',
      ],
      correctAnswer: 0,
      explanation:
        'June to August can bring heavy rainfall, leeches and reduced mountain visibility.',
    },
    {
      question: 'Which period is popular for clearer mountain views?',
      answers: [
        'June–August',
        'September–November',
        'July only',
        'January only',
      ],
      correctAnswer: 1,
      explanation:
        'Autumn generally brings clearer skies, stable weather and excellent visibility of the Himalayan peaks.',
    },
    {
      question: 'Why should trekkers maintain a steady pace on this route?',
      answers: [
        'Because running attracts mountain monsters',
        'To avoid traffic lights',
        'Because there are sustained climbs and long stone stairways',
        'To make the mountains wait for them',
      ],
      correctAnswer: 2,
      explanation:
        'Long staircases and uphill sections can be tiring, so regular breaks, hydration and steady pacing help make the journey more comfortable.',
    },
    {
      question: 'What best describes the Ghorepani–Poon Hill experience?',
      answers: [
        'A technical climbing expedition',
        'A desert safari',
        'A city heritage walk',
        'A short mountain journey combining nature, culture and viewpoints',
      ],
      correctAnswer: 3,
      explanation:
        'The trek combines Magar and Gurung villages, rhododendron forests and the famous Poon Hill sunrise viewpoint.',
    },
    {
      question:
        'Which city is commonly used as the starting point for the Ghorepani Poon Hill trek?',
      answers: ['Lukla', 'Pokhara', 'Jomsom', 'The City of Mountain Penguins'],
      correctAnswer: 1,
      explanation:
        'Trekkers usually travel from Pokhara toward the trailhead near Nayapul and Birethanti.',
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
    {
      question: 'Mount Manaslu holds what global elevation rank?',
      answers: [
        '1st highest',
        '5th highest',
        '8th highest mountain in the world (8,163 m)',
        '14th highest',
      ],
      correctAnswer: 2,
      explanation:
        'At 8,163 meters, Manaslu is the world’s 8th highest peak and is known as the “Mountain of the Spirit.”',
    },
    {
      question:
        'What high pass forms the challenging apex of the Manaslu Circuit at 5,106 m?',
      answers: ['Thorong La', 'Larkya La Pass', 'Cho La', 'Kongma La'],
      correctAnswer: 1,
      explanation:
        'Larkya La offers panoramas of Himlung Himal, Cheo Himal, and Annapurna II.',
    },
    {
      question:
        'Which river valley do you follow during the first half of the trek?',
      answers: [
        'Budhi Gandaki River Valley',
        'Kali Gandaki River Valley',
        'Amazon River Valley',
        'Arun River Valley',
      ],
      correctAnswer: 0,
      explanation:
        'The trail winds through dramatic gorges carved by the Budhi Gandaki.',
    },
    {
      question:
        'Near the end of the circuit, the Manaslu route connects with which classic trekking route?',
      answers: [
        'Everest Base Camp',
        'Annapurna Circuit (at Dharapani)',
        'Langtang Valley',
        'Rara Lake Trek',
      ],
      correctAnswer: 1,
      explanation:
        'After Larkya La, the route descends into the Marshyangdi valley and joins the Annapurna Circuit.',
    },
    {
      question:
        'Can individual solo trekkers go on the Manaslu Circuit without a guide?',
      answers: [
        'Yes, anyone can go alone',
        'No, regulations require a licensed guide and restricted area permit',
        'Only on weekends',
        'Yes, if carrying a tent',
      ],
      correctAnswer: 1,
      explanation:
        'Manaslu is a restricted area, so trekkers must travel with a registered guide. Check current rules before you go, as they change.',
    },
    {
      question:
        'What makes the Manaslu Circuit attractive to wilderness lovers?',
      answers: [
        'It has fast food restaurants',
        'It is less crowded, less commercialized, and feels remote',
        'It is completely paved',
        'You ride a bus the whole way',
      ],
      correctAnswer: 1,
      explanation:
        'It offers a traditional teahouse experience away from the busiest trekking routes.',
    },
    {
      question:
        'What high village serves as the main rest and acclimatization hub before Larkya La?',
      answers: ['Lukla', 'Samagaon', 'Ghorepani', 'Besisahar'],
      correctAnswer: 1,
      explanation:
        'Samagaon sits beneath Mount Manaslu and has an ancient Buddhist monastery.',
    },
    {
      question:
        'What glacial lake near Samagaon makes a popular acclimatization side trip?',
      answers: ['Birendra Lake', 'Phewa Lake', 'Tilicho Lake', 'Begnas Lake'],
      correctAnswer: 0,
      explanation:
        'Birendra Lake lies near the Manaslu Glacier, a short walk from Samagaon.',
    },
    {
      question:
        'Why are windproof thermal gloves essential for crossing Larkya La Pass?',
      answers: [
        'To grip climbing ropes',
        'High passes have freezing winds that cause severe chill',
        'To handle hot soup bowls',
        'To carry heavy bags',
      ],
      correctAnswer: 1,
      explanation:
        'Wind on the pass drops the effective temperature far below freezing.',
    },
    {
      question:
        'Why are sunscreen and SPF lip balm vital in high valleys like Manaslu?',
      answers: [
        'To make skin shiny',
        'Thin high-altitude air lets strong UV rays cause rapid sunburn',
        'To keep bugs away',
        'To wash hands',
      ],
      correctAnswer: 1,
      explanation: 'Sun is intense at altitude, even on cool days.',
    },
    {
      question: 'Why is a portable power bank valuable on the Manaslu Circuit?',
      answers: [
        'Teahouses have free outlets everywhere',
        'Remote teahouses charge fees for device charging',
        'Cold weather improves battery life',
        'To power room heaters',
      ],
      correctAnswer: 1,
      explanation:
        'Cold drains batteries, and charging points are limited and often paid.',
    },
    {
      question:
        'Why are light trail crampons or microspikes recommended in early spring or late autumn?',
      answers: [
        'To walk through sand',
        'To grip slippery packed snow and ice over Larkya La',
        'To climb trees',
        'To protect shoelaces',
      ],
      correctAnswer: 1,
      explanation: 'Microspikes give secure grip on icy sections.',
    },
    {
      question:
        'Why is taking an extra rest day in Samagaon or Samdo necessary?',
      answers: [
        'To watch TV shows',
        'To let your body adjust before climbing above 4,000 m',
        'Because the trail closes on weekends',
        'To wait for a train',
      ],
      correctAnswer: 1,
      explanation:
        'Acclimatization rest days lower the risk of severe altitude sickness before high passes.',
    },
    {
      question:
        'What should you do if heavy snowfall starts while ascending toward Larkya La?',
      answers: [
        'Separate from your group and run',
        'Follow your licensed guide’s advice on whether to proceed or wait',
        'Take off your jacket',
        'Pitch a tent on thin ice',
      ],
      correctAnswer: 1,
      explanation: 'Guides understand local weather and mountain safety best.',
    },
    {
      question: 'How much water should a trekker drink daily at high altitude?',
      answers: [
        'Half a glass',
        'Roughly 3 to 4 liters of clean water throughout the day',
        '10 liters at once',
        'Only carbonated sodas',
      ],
      correctAnswer: 1,
      explanation:
        'Dry air and exertion speed up dehydration. Needs vary, so drink regularly and check your urine color.',
    },
    {
      question: 'Why should trekkers stay alert on narrow cliff paths?',
      answers: [
        'Cameras don’t work near cliffs',
        'Loose gravel and narrow paths require firm footing and steady balance',
        'Birds might grab your phone',
        'Photography costs money',
      ],
      correctAnswer: 1,
      explanation:
        'Keeping your attention on the path prevents slips along steep gorges.',
    },
    {
      question:
        'What high region of Manaslu is known for preserving ancient Tibetan culture?',
      answers: ['Nubri and Tsum Valleys', 'Solukhumbu', 'Chitwan', 'Helambu'],
      correctAnswer: 0,
      explanation:
        'These regions maintain strong Buddhist traditions, monasteries, and art.',
    },
    {
      question:
        'What principle of non-violence, Ahimsa, is traditionally practiced in the Tsum Valley?',
      answers: [
        'No farming allowed',
        'Its Buddhist culture traditionally discourages harming animals',
        'Modern dietary trend',
        'National park forestry rule',
      ],
      correctAnswer: 1,
      explanation:
        'Tsum’s Buddhist traditions emphasize compassion for living beings, which shapes local attitudes toward animal life.',
    },
    {
      question:
        'Which ancient Buddhist monastery near Samagaon sits beneath the face of Manaslu?',
      answers: [
        'Tengboche Monastery',
        'Pungyen Gompa',
        'Swayambhunath',
        'Shey Gompa',
      ],
      correctAnswer: 1,
      explanation:
        'Pungyen Gompa offers views of Manaslu’s glaciers and mountain faces.',
    },
    {
      question:
        'What warm drink is traditionally served in mountain lodges to welcome cold trekkers?',
      answers: [
        'Cold lemonade',
        'Warm lemon-ginger-honey tea',
        'Soda pops',
        'Ice water',
      ],
      correctAnswer: 1,
      explanation: 'It warms the body and soothes the throat after hiking.',
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
    {
      question: 'Which Himalayan region is home to Tilicho Lake?',
      answers: [
        'Annapurna Region',
        'Everest Region',
        'The Land of Flying Penguins',
        'Dolpo Region',
      ],
      correctAnswer: 0,
      explanation:
        'Tilicho Lake lies in the beautiful Annapurna Region, surrounded by dramatic Himalayan mountains.',
    },
    {
      question: 'What is the main attraction of the Tilicho Lake Trek?',
      answers: [
        'A giant chocolate fountain',
        'Tilicho Lake',
        'A tropical beach',
        'A shopping mall in the clouds',
      ],
      correctAnswer: 1,
      explanation:
        'Tilicho Lake is a spectacular high-altitude lake surrounded by rugged mountain landscapes.',
    },
    {
      question:
        'Which valley does the trek follow before heading toward Tilicho?',
      answers: [
        'Dudh Koshi Valley',
        'Marsyangdi Valley',
        'A valley full of dinosaurs',
        'Kathmandu Valley',
      ],
      correctAnswer: 1,
      explanation:
        'The Marsyangdi Valley takes trekkers through beautiful mountain settlements before the route branches toward Tilicho.',
    },
    {
      question:
        'What type of landscape becomes more common as you climb higher?',
      answers: [
        'Tropical beaches',
        'Busy city streets',
        'Dry alpine terrain',
        'Never-ending potato farms',
      ],
      correctAnswer: 2,
      explanation:
        'The upper Manang and Tilicho areas have dry, open landscapes with fewer trees and dramatic mountain views.',
    },
    {
      question:
        'Which village is the main place for acclimatization before heading higher?',
      answers: [
        'Pokhara',
        'Manang',
        'Lukla',
        'A village made entirely of chocolate',
      ],
      correctAnswer: 1,
      explanation:
        'Manang is an important resting point where trekkers allow their bodies to adjust to the higher altitude.',
    },
    {
      question: 'Why do trekkers spend an extra day in Manang?',
      answers: [
        'To help their bodies adjust to altitude',
        'To wait for a helicopter taxi',
        'To learn how to fly like an eagle',
        'To avoid eating breakfast',
      ],
      correctAnswer: 0,
      explanation:
        'Acclimatization helps reduce the risk of altitude sickness before climbing above 4,000 meters.',
    },
    {
      question: 'Which settlement comes before the Tilicho side valley?',
      answers: [
        'Ghandruk',
        'Khangsar',
        'Namche Bazaar',
        'The Secret Yak Kingdom',
      ],
      correctAnswer: 1,
      explanation:
        'From Manang, trekkers head toward Khangsar before continuing to Shree Kharka and Tilicho Base Camp.',
    },
    {
      question:
        'Where do trekkers usually spend the night before heading to Tilicho Lake?',
      answers: [
        'Tilicho Base Camp',
        'Pokhara Airport',
        'A floating hotel',
        'Kathmandu Durbar Square',
      ],
      correctAnswer: 0,
      explanation:
        'Tilicho Base Camp is the final overnight stop before the demanding early-morning hike to the lake.',
    },
    {
      question: 'What makes the final approach to Tilicho Lake challenging?',
      answers: [
        'Too many traffic lights',
        'Rocky and exposed terrain',
        'Giant waves',
        'Hundreds of shopping stairs',
      ],
      correctAnswer: 1,
      explanation:
        'The upper trail has steep and exposed sections, so careful walking and good weather awareness are important.',
    },
    {
      question: 'What type of route is the standard Tilicho Lake Trek?',
      answers: [
        'A road trip',
        'A full circuit',
        'An out-and-back route',
        'A one-way rocket journey',
      ],
      correctAnswer: 2,
      explanation:
        'After visiting the lake, trekkers retrace much of their route through Shree Kharka and Manang.',
    },
    {
      question:
        'Does the standard Tilicho Lake itinerary cross Thorong La Pass?',
      answers: [
        'Yes, every single time',
        'No',
        'Only by helicopter',
        'Only if the yaks agree',
      ],
      correctAnswer: 1,
      explanation:
        'The standalone Tilicho itinerary does not cross Thorong La. The pass belongs to certain Annapurna Circuit itineraries.',
    },
    {
      question: 'Where do trekkers usually sleep along the Tilicho route?',
      answers: [
        'Luxury cruise ships',
        'Treehouses in the jungle',
        'Tea houses and mountain lodges',
        'Shopping mall sofas',
      ],
      correctAnswer: 2,
      explanation:
        'Tea houses and lodges provide basic accommodation and meals throughout much of the trekking route.',
    },
    {
      question: 'Which mountains become more visible around Upper Pisang?',
      answers: [
        'Annapurna II and Pisang Peak',
        'Everest and Kilimanjaro',
        'Mount Fuji and K2',
        'The Chocolate Mountains',
      ],
      correctAnswer: 0,
      explanation:
        'Upper Pisang offers beautiful views of Annapurna II and the nearby Pisang Peak.',
    },
    {
      question: 'What happens to vegetation as you move into upper Manang?',
      answers: [
        'Trees turn into palm trees',
        'It becomes denser and tropical',
        'It becomes sparser and drier',
        'Everything turns into a giant garden',
      ],
      correctAnswer: 2,
      explanation:
        'Higher elevations have harsher conditions, resulting in fewer trees and more open alpine landscapes.',
    },
    {
      question:
        'Why is an early morning start recommended for the Tilicho Lake hike?',
      answers: [
        'To reach the lake before breakfast disappears',
        'To handle the demanding high-altitude route in better conditions',
        'To catch a city bus',
        'To watch the mountains go to sleep',
      ],
      correctAnswer: 1,
      explanation:
        'The lake hike involves steep and exposed terrain, making an early start and careful pacing useful.',
    },
    {
      question: 'Which season is recommended for trekking to Tilicho Lake?',
      answers: [
        'March–May',
        'Monsoon only',
        'January only',
        'The season of endless snowfall',
      ],
      correctAnswer: 0,
      explanation:
        'Spring offers generally favourable trekking conditions, although snow may remain on higher sections early in the season.',
    },
    {
      question: 'Which period is also popular for clear mountain views?',
      answers: [
        'June–August',
        'September–November',
        'July only',
        'December–February only',
      ],
      correctAnswer: 1,
      explanation:
        'Autumn follows the monsoon and generally brings clearer skies and excellent mountain visibility.',
    },
    {
      question: 'What can winter bring to the upper Tilicho route?',
      answers: [
        'Tropical sunshine and coconuts',
        'Sandstorms',
        'Snow and ice',
        'Swimming pools',
      ],
      correctAnswer: 2,
      explanation:
        'Winter temperatures can become extremely cold, with snow and icy conditions making the higher trail more challenging.',
    },
    {
      question: 'Why should trekkers walk slowly at higher elevations?',
      answers: [
        'To help their bodies adjust to altitude',
        'Because the mountains are watching',
        'To make the trek last forever',
        'Because walking fast attracts penguins',
      ],
      correctAnswer: 0,
      explanation:
        'Above 4,000 meters, there is less available oxygen. Gradual ascent and proper acclimatization are important for safety.',
    },
    {
      question: 'Which description best captures the Tilicho Lake experience?',
      answers: [
        'A tropical beach adventure',
        'A city shopping tour',
        'A desert safari',
        'A high-altitude lake journey through dry Himalayan terrain',
      ],
      correctAnswer: 3,
      explanation:
        'The trek combines the Marsyangdi Valley, traditional mountain settlements, rugged alpine trails and the spectacular Tilicho Lake.',
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
    {
      question: 'What is Shey Phoksundo especially famous for?',
      answers: [
        'A giant desert',
        'A tropical beach',
        'A beautiful turquoise alpine lake',
        'A floating shopping mall',
      ],
      correctAnswer: 2,
      explanation:
        'Phoksundo Lake is famous for its striking deep-blue to turquoise water surrounded by dramatic Himalayan mountains.',
    },
    {
      question: 'Which region is the Shey Phoksundo Trek located in?',
      answers: [
        'Annapurna Region',
        'Dolpo Region',
        'Everest Region',
        'The Kingdom of Snow Dragons',
      ],
      correctAnswer: 1,
      explanation:
        'Shey Phoksundo lies in the remote Dolpo Region of western Nepal.',
    },
    {
      question: 'What kind of adventure is the Shey Phoksundo Trek?',
      answers: [
        'A city sightseeing tour',
        'A tropical beach holiday',
        'A mountain shopping trip',
        'A remote mountain and lake trek',
      ],
      correctAnswer: 3,
      explanation:
        'The journey passes through remote valleys, forests, dramatic gorges and traditional mountain settlements.',
    },
    {
      question: 'Which protected area does the trail enter?',
      answers: [
        'Shey-Phoksundo National Park',
        'Chitwan National Park',
        'Sagarmatha National Park',
        'The National Park of Giant Yaks',
      ],
      correctAnswer: 0,
      explanation:
        'Shey-Phoksundo National Park protects the beautiful landscapes, wildlife and cultural heritage of the Dolpo region.',
    },
    {
      question: 'Which valley does much of the trek follow?',
      answers: [
        'Dudh Koshi Valley',
        'Marsyangdi Valley',
        'Suligad Valley',
        'The Valley of Lost Trekking Boots',
      ],
      correctAnswer: 2,
      explanation:
        'The route follows Suligad Valley through forests, river crossings and impressive mountain gorges.',
    },
    {
      question: 'What kind of scenery can trekkers expect along the route?',
      answers: [
        'Beaches and palm trees',
        'Forests, gorges and alpine landscapes',
        'Desert dunes',
        'City highways and skyscrapers',
      ],
      correctAnswer: 1,
      explanation:
        'The trek combines forested valleys, dramatic gorges, traditional settlements and rugged mountain landscapes.',
    },
    {
      question: 'Which village is located beside Phoksundo Lake?',
      answers: ['Namche Bazaar', 'Ghandruk', 'Samagaon', 'Ringmo'],
      correctAnswer: 3,
      explanation:
        'Ringmo is a traditional village beside Phoksundo Lake and is one of the cultural highlights of the trek.',
    },
    {
      question:
        'Which cultural tradition is especially associated with the Phoksundo area?',
      answers: [
        'Bon tradition',
        'Roman tradition',
        'Viking tradition',
        'The Ancient Yak Dancing Tradition',
      ],
      correctAnswer: 0,
      explanation:
        'The Ringmo and Phoksundo area is strongly associated with Bon cultural heritage and religious traditions.',
    },
    {
      question: 'Which monastery can trekkers visit near Phoksundo Lake?',
      answers: [
        'Tengboche Monastery',
        'Kopan Monastery',
        'Thashung Gompa',
        'The Monastery of Sleeping Penguins',
      ],
      correctAnswer: 2,
      explanation:
        'Thashung Gompa is a historic monastery near Phoksundo Lake associated with the Bon tradition.',
    },
    {
      question:
        'What makes the landscape around Phoksundo Lake look so dramatic?',
      answers: [
        'Flat farmland',
        'Steep cliffs and mountain slopes',
        'Sand dunes',
        'Ocean waves',
      ],
      correctAnswer: 1,
      explanation:
        'The lake sits beneath steep cliffs and towering mountain slopes, creating a spectacular natural setting.',
    },
    {
      question:
        'Which waterfall can trekkers see along the approach to Phoksundo Lake?',
      answers: [
        'A waterfall made of chocolate',
        'A desert waterfall',
        'A waterfall inside a shopping mall',
        'Suligad Waterfall',
      ],
      correctAnswer: 3,
      explanation:
        'Suligad Waterfall is one of the natural highlights along the route as trekkers climb toward the Phoksundo Valley.',
    },
    {
      question:
        'Which types of forests can be found along parts of the lower route?',
      answers: [
        'Pine, cedar and bamboo forests',
        'Mangrove forests',
        'Palm tree forests',
        'Cactus forests',
      ],
      correctAnswer: 0,
      explanation:
        'The lower trail passes through different types of mountain vegetation, including pine, cedar and bamboo.',
    },
    {
      question: 'How do trekkers reach the Dolpo area on this itinerary?',
      answers: [
        'By cruise ship',
        'By train',
        'By mountain flight',
        'By flying carpet',
      ],
      correctAnswer: 2,
      explanation:
        'The journey includes flights from Kathmandu to Nepalgunj and then onward to Juphal in Dolpo.',
    },
    {
      question: 'What type of route is the Shey Phoksundo Trek?',
      answers: [
        'Full circuit',
        'Out-and-back route',
        'Road-only route',
        'One-way rocket journey',
      ],
      correctAnswer: 1,
      explanation:
        'After reaching Ringmo and Phoksundo Lake, trekkers retrace much of the same valley toward Juphal.',
    },
    {
      question:
        'What types of accommodation can trekkers use along this remote route?',
      answers: [
        'Luxury cruise cabins',
        'City hotels only',
        'Treehouses in the ocean',
        'Tea houses, homestays and tents',
      ],
      correctAnswer: 3,
      explanation:
        'Because Dolpo is a remote trekking destination, accommodation can include local homestays, tea houses and camping options.',
    },
    {
      question: 'Which period is recommended for visiting Shey Phoksundo?',
      answers: ['May–June', 'January only', 'December only', 'February only'],
      correctAnswer: 0,
      explanation:
        'May and June offer pleasant trekking temperatures, wildflowers and beautiful lake views.',
    },
    {
      question:
        'Which other period is recommended for clear skies and stable weather?',
      answers: [
        'July only',
        'January–February',
        'September–October',
        'December only',
      ],
      correctAnswer: 2,
      explanation:
        'September and October generally offer clearer mountain skies, colourful vegetation and more stable weather.',
    },
    {
      question:
        'Why can trekking in Dolpo sometimes be possible during the monsoon?',
      answers: [
        'It never rains anywhere in Nepal',
        'Dolpo lies partly in a rain-shadow area',
        'The mountains have giant umbrellas',
        'The lake magically stops rainfall',
      ],
      correctAnswer: 1,
      explanation:
        'Parts of Dolpo receive less rainfall because of the surrounding mountains. However, flights can still be affected by monsoon weather.',
    },
    {
      question:
        'What is one possible travel challenge when visiting Shey Phoksundo?',
      answers: [
        'Too many highways',
        'Too many shopping malls',
        'There are no remote sections',
        'Mountain flights can be delayed by weather',
      ],
      correctAnswer: 3,
      explanation:
        'Flights to and from Juphal depend heavily on weather conditions, so keeping extra buffer days in your itinerary is a smart idea.',
    },
    {
      question:
        'Which description best captures the Shey Phoksundo experience?',
      answers: [
        'A remote wilderness adventure with turquoise lake scenery and distinctive culture',
        'A city sightseeing tour',
        'A tropical beach escape',
        'A short shopping trip',
      ],
      correctAnswer: 0,
      explanation:
        'Shey Phoksundo combines the stunning Phoksundo Lake, forested valleys, dramatic mountain landscapes and the distinctive Bon cultural heritage of Lower Dolpo.',
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
    {
      question:
        'According to Buddhist legend, what did the prince (Buddha in a past life) offer to a starving tigress at Namobuddha?',
      answers: ['His own body', 'A bowl of rice', 'Fresh fruit', 'Milk'],
      correctAnswer: 0,
      explanation:
        'The legend tells that the compassionate prince sacrificed his body to feed the tigress and her cubs.',
    },
    {
      question:
        'Which impressive modern monastery complex sits on the hill at Namobuddha?',
      answers: [
        'Thrangu Tashi Yangtse Monastery',
        'Kopan Monastery',
        'Tengboche Monastery',
        'Shey Gompa',
      ],
      correctAnswer: 0,
      explanation:
        'Thrangu Tashi Yangtse is a Tibetan Buddhist monastic college at Namobuddha.',
    },
    {
      question:
        'What traditional Newar town is the starting point for the hike to Namobuddha?',
      answers: ['Dhulikhel', 'Pokhara', 'Lukla', 'Lumbini'],
      correctAnswer: 0,
      explanation:
        'Dhulikhel is an historic Newar hill town east of Kathmandu.',
    },
    {
      question:
        'What type of agricultural landscape do hikers pass through on this trail?',
      answers: [
        'Terraced mustard and rice fields',
        'Palm tree plantations',
        'Desert sand dunes',
        'Sugarcane fields',
      ],
      correctAnswer: 0,
      explanation:
        'The trail winds through rural villages and terraced farmland.',
    },
    {
      question:
        'What sacred stupa marks the traditional spot of the tigress story at Namobuddha?',
      answers: [
        'Namobuddha Stupa',
        'Swayambhunath Stupa',
        'Boudhanath Stupa',
        'Peace Pagoda',
      ],
      correctAnswer: 0,
      explanation: 'The Namobuddha Stupa marks the legend’s sacred site.',
    },
    {
      question:
        'Approximately how long does the easy hike from Dhulikhel to Namobuddha take?',
      answers: ['3 to 4 hours', '12 hours', '3 days', '30 minutes'],
      correctAnswer: 0,
      explanation:
        'It is a gentle, roughly 10 km walk, making it a popular day trip. Times vary with pace.',
    },
    {
      question:
        'Which mountain range can be seen on a clear day from Dhulikhel’s ridges?',
      answers: [
        'Langtang and Ganesh Himal range',
        'Mount Everest only',
        'Karakoram range',
        'Mount Fuji',
      ],
      correctAnswer: 0,
      explanation:
        'Dhulikhel offers panoramic views across the central Himalaya.',
    },
    {
      question:
        'What traditional building material gives Dhulikhel’s historic core its red look?',
      answers: [
        'Red brick and carved timber',
        'Polished marble',
        'Corrugated tin sheets',
        'Glass panels',
      ],
      correctAnswer: 0,
      explanation:
        'Traditional Newari architecture uses exposed brick and dark carved wooden beams.',
    },
    {
      question:
        'Which hilltop shrine near Dhulikhel is reached by a long stone staircase?',
      answers: [
        'Kali Temple (Bhagwati Mandir)',
        'Pashupatinath',
        'Muktinath',
        'Janaki Mandir',
      ],
      correctAnswer: 0,
      explanation:
        'Hikers climb the stone steps to the Kali Temple for panoramic views over Dhulikhel.',
    },
    {
      question:
        'What color robes are worn by young monks studying at Namobuddha Monastery?',
      answers: ['Maroon and yellow', 'All white', 'Bright blue', 'Black'],
      correctAnswer: 0,
      explanation:
        'Tibetan Buddhist monks traditionally wear maroon robes with yellow accents.',
    },
    {
      question:
        'What transport option do hikers typically take from Namobuddha back to Kathmandu or Dhulikhel?',
      answers: [
        'Local bus or private car',
        'Passenger train',
        'Helicopter only',
        'Cable car',
      ],
      correctAnswer: 0,
      explanation: 'Local buses and cars connect the area by paved road.',
    },
    {
      question:
        'Which heritage village is commonly added to an extended Namobuddha hike?',
      answers: ['Panauti', 'Namche Bazaar', 'Mustang', 'Jomsom'],
      correctAnswer: 0,
      explanation:
        'Many hikers descend into Panauti, a historic riverside town.',
    },
    {
      question:
        'Panauti is famous for one of the oldest intact wooden temples in Nepal, dedicated to which deity?',
      answers: ['Indreshwar Mahadev', 'Buddha', 'Sita', 'Krishna'],
      correctAnswer: 0,
      explanation:
        'The Indreshwar Temple is a classic multi-roofed Newari pagoda, dating to the 14th century.',
    },
    {
      question:
        'What sacred river confluence (Triveni Ghat) makes Panauti a pilgrimage site?',
      answers: [
        'Roshi Khola and Punyamati River',
        'Nile and Amazon',
        'Bagmati and Bishnumati',
        'Dudh Koshi and Imja Khola',
      ],
      correctAnswer: 0,
      explanation:
        'The junction of the Roshi and Punyamati is a holy bathing site.',
    },
    {
      question:
        'What season brings bright yellow colors to the fields around Dhulikhel and Namobuddha?',
      answers: [
        'Winter/Spring (mustard blooming season)',
        'Monsoon rain season',
        'Peak snow season',
        'Mid-summer',
      ],
      correctAnswer: 0,
      explanation:
        'Mustard crops bloom in vivid yellow across the hills during winter and early spring.',
    },
    {
      question:
        'What makes the Dhulikhel to Namobuddha hike ideal for beginner walkers?',
      answers: [
        'Gentle climbs, well-marked paths, and moderate distance',
        'Glacier ice walking',
        'High-altitude mountain passes',
        'Mandatory climbing ropes',
      ],
      correctAnswer: 0,
      explanation:
        'It is a low-altitude hike with great views and no technical terrain.',
    },
    {
      question:
        'What type of trees form the shady forest canopy along parts of the Dhulikhel ridge?',
      answers: [
        'Pine and Schima-Castanopsis trees',
        'Mangrove trees',
        'Palm trees',
        'Eucalyptus trees',
      ],
      correctAnswer: 0,
      explanation:
        'The trail passes through mid-hill pine and subtropical hardwood forest.',
    },
    {
      question:
        'What traditional Buddhist item can travelers light at Namobuddha for blessings?',
      answers: ['Butter lamps', 'Wax candles only', 'Campfires', 'Fireworks'],
      correctAnswer: 0,
      explanation:
        'Devotees light butter lamps in the prayer hall as an offering of wisdom and clarity.',
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
    {
      question:
        'Which hill near Pokhara offers a popular short sunrise hike with Annapurna views?',
      answers: ['Sarangkot', 'Nagarkot', 'Dhulikhel', 'Bandipur'],
      correctAnswer: 0,
      explanation:
        'Sarangkot, above Pokhara, is a favorite sunrise viewpoint for the Annapurna range.',
    },
    {
      question:
        'Besides hiking, Pokhara’s Phewa Lake is popular for which activity?',
      answers: ['Boating', 'Skiing', 'Surfing', 'Ice skating'],
      correctAnswer: 0,
      explanation:
        'Boating on Phewa, with Machapuchare reflected on the water, is a Pokhara highlight.',
    },
    {
      question: 'Changunarayan Temple is dedicated to which Hindu deity?',
      answers: ['Lord Vishnu', 'Lord Shiva', 'Goddess Durga', 'Lord Ganesh'],
      correctAnswer: 0,
      explanation:
        'Changunarayan is a historic Vishnu shrine with ancient stone carvings.',
    },
    {
      question:
        'Which famous stone inscription at Changunarayan is considered among Nepal’s oldest written records?',
      answers: [
        'King Manadeva’s inscription (464 AD)',
        'Ashoka Pillar text',
        'Prithvi Narayan Shah decree',
        'Buddhist Diamond Sutra',
      ],
      correctAnswer: 0,
      explanation:
        'The Licchavi-era inscription from 464 AD is one of the earliest epigraphic records in Nepal.',
    },
    {
      question: 'What adventure activity is Sarangkot world-famous for?',
      answers: [
        'Paragliding',
        'Scuba diving',
        'Snow skiing',
        'Deep-sea fishing',
      ],
      correctAnswer: 0,
      explanation:
        'Sarangkot is one of the best-known paragliding launch sites in the world.',
    },
    {
      question:
        'Shivapuri National Park serves as a primary source for Kathmandu’s:',
      answers: [
        'Freshwater supply',
        'Coal energy',
        'Salt mining',
        'Gold supply',
      ],
      correctAnswer: 0,
      explanation:
        'Shivapuri’s forested watershed protects rivers that feed the Kathmandu Valley.',
    },
    {
      question:
        'Which rim peak at about 2,278 m has a Buddhist stupa and a Hindu shrine?',
      answers: ['Champadevi', 'Kala Patthar', 'Poon Hill', 'Gokyo Ri'],
      correctAnswer: 0,
      explanation:
        'Champadevi is a popular ridge summit on the southwestern rim of the valley.',
    },
    {
      question:
        'Which popular rim hike leads to the highest point around the Kathmandu Valley at about 2,732 m?',
      answers: ['Phulchowki Peak', 'Sarangkot', 'Nagarkot', 'Dhulikhel'],
      correctAnswer: 0,
      explanation:
        'Phulchowki, the “Hill of Flowers,” is the highest peak on the valley rim.',
    },
    {
      question:
        'What seasonal feature makes Phulchowki famous in late winter and spring?',
      answers: [
        'Snowfall and blooming rhododendrons',
        'Active geysers',
        'Autumn leaves falling',
        'Sandstorms',
      ],
      correctAnswer: 0,
      explanation:
        'Phulchowki occasionally gets snow and bursts into rhododendron color in spring.',
    },
    {
      question:
        'What village is passed on the hike from Nagarkot toward Changunarayan?',
      answers: ['Telkot', 'Namche', 'Lukla', 'Jomsom'],
      correctAnswer: 0,
      explanation: 'Telkot is a scenic village along the Nagarkot ridge trail.',
    },
    {
      question:
        'Nagarkot sits at an elevation of approximately how many meters?',
      answers: ['2,175 m', '5,364 m', '800 m', '4,130 m'],
      correctAnswer: 0,
      explanation:
        'At about 2,175 m, Nagarkot is cool and offers clear valley views.',
    },
    {
      question:
        'From Nagarkot on a clear day, which world-famous 8,000 m peak can be seen far in the distance?',
      answers: ['Mount Everest', 'K2', 'Mount Kilimanjaro', 'Mount Blanc'],
      correctAnswer: 0,
      explanation: 'On clear mornings, Everest is visible far to the east.',
    },
    {
      question: 'What river gorge lies directly below Pokhara and Sarangkot?',
      answers: [
        'Seti River Gorge',
        'Nile River',
        'Bagmati River',
        'Dudh Koshi',
      ],
      correctAnswer: 0,
      explanation:
        'The milky-white Seti flows through deep gorges beneath Pokhara.',
    },
    {
      question:
        'Which famous nunnery sits inside Shivapuri National Park on the way up to Nagi Gompa?',
      answers: [
        'Nagi Gompa Nunnery',
        'Tengboche Monastery',
        'Shey Gompa',
        'Muktinath Temple',
      ],
      correctAnswer: 0,
      explanation:
        'Nagi Gompa is a peaceful Buddhist nunnery on the forested slopes of Shivapuri.',
    },
    {
      question:
        'What mythical creature’s statue stands before Changunarayan Temple?',
      answers: ['Garuda', 'Naga', 'Lion', 'Dragon'],
      correctAnswer: 0,
      explanation:
        'Garuda, Vishnu’s mount, is depicted in a statue facing the temple.',
    },
    {
      question: 'Nagarkot sits on the rim of which valley?',
      answers: [
        'Kathmandu Valley',
        'Pokhara Valley',
        'Chitwan Valley',
        'Mustang Valley',
      ],
      correctAnswer: 0,
      explanation: 'Nagarkot is on the eastern rim of the Kathmandu Valley.',
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
    {
      question:
        'Phulchoki is the highest point on which feature of the Kathmandu Valley?',
      answers: [
        'The valley floor',
        'The rim of the Kathmandu Valley',
        'The Bagmati riverbank',
        'The Terai border',
      ],
      correctAnswer: 1,
      explanation:
        'Phulchoki is the highest point on the ridge that encircles the Kathmandu Valley.',
    },
    {
      question: 'What does the name “Phulchoki” roughly mean?',
      answers: [
        'Hill of Flowers',
        'Mountain of Snow',
        'River of Gold',
        'Lake of Dreams',
      ],
      correctAnswer: 0,
      explanation:
        'The name is commonly translated as “Hill of Flowers” or “Place of Flowers,” a reference to its rich flora.',
    },
    {
      question: 'What is Phulchoki’s approximate summit elevation?',
      answers: ['1,440 m', '2,762 m', '4,130 m', '5,364 m'],
      correctAnswer: 1,
      explanation:
        'It is usually given as about 2,762 m, though some sources quote slightly higher figures.',
    },
    {
      question:
        'Godawari, the starting point of this hike, is famous for which attraction?',
      answers: [
        'Botanical Garden',
        'Floating market',
        'Glacier lake',
        'Tea auction house',
      ],
      correctAnswer: 0,
      explanation:
        'Godawari’s Botanical Garden is a popular stop for birdwatchers and nature lovers before the trail begins.',
    },
    {
      question:
        'What forest tree is especially prominent on Phulchoki’s upper slopes?',
      answers: ['Rhododendron', 'Teak', 'Sal', 'Eucalyptus'],
      correctAnswer: 0,
      explanation:
        'Rhododendron forests become more prominent with elevation and are the highlight of spring.',
    },
    {
      question:
        'Rhododendron is the national flower of Nepal. What is its local name?',
      answers: ['Lali Gurans', 'Phulchoki Mai', 'Danphe', 'Tilaurakot'],
      correctAnswer: 0,
      explanation:
        'Rhododendron, locally called Lali Gurans, is Nepal’s national flower and blooms on Phulchoki in spring.',
    },
    {
      question: 'Which goddess is worshipped at the summit shrine?',
      answers: ['Phulchoki Mai', 'Bhagawati', 'Taleju', 'Saraswati'],
      correctAnswer: 0,
      explanation:
        'The small shrine at the summit is dedicated to Phulchoki Mai, a goddess associated with the forest.',
    },
    {
      question:
        'Which months are most celebrated for blooming rhododendron on Phulchoki?',
      answers: [
        'March and April',
        'July and August',
        'December and January',
        'September and October',
      ],
      correctAnswer: 0,
      explanation:
        'Spring is when the forest is most colourful, though flowering times vary from year to year.',
    },
    {
      question: 'What is the main reason the monsoon makes this hike harder?',
      answers: [
        'Wet, muddy, and slippery trails with reduced visibility',
        'Snow blocks the summit road',
        'The temple is closed for the season',
        'Leeches only appear in winter',
      ],
      correctAnswer: 0,
      explanation:
        'Rain makes stone steps and dirt paths slippery, and cloud cover can block views.',
    },
    {
      question:
        'On a clear day, which mountain range can be seen from the summit?',
      answers: [
        'The Himalayan ranges, including Annapurna',
        'The Western Ghats',
        'The Andes',
        'The Alps',
      ],
      correctAnswer: 0,
      explanation:
        'Clear conditions reveal views across the valley to the Himalayan peaks, including Annapurna.',
    },
    {
      question: 'Which of these rim hills is lower than Phulchoki?',
      answers: [
        'Champadevi (about 2,278 m)',
        'Phulchoki',
        'Mount Everest',
        'Dhaulagiri',
      ],
      correctAnswer: 0,
      explanation:
        'Champadevi is a popular rim summit, but it is lower than Phulchoki.',
    },
    {
      question: 'In which direction from Kathmandu is Phulchoki located?',
      answers: ['Southeast', 'Northwest', 'Northeast', 'Southwest'],
      correctAnswer: 0,
      explanation:
        'Phulchoki lies southeast of Kathmandu, reached from the Godawari side of the valley.',
    },
    {
      question:
        'Which named pass or section appears on the standard Godawari–Phulchoki route?',
      answers: ['Latta Bhanjyang', 'Thorong La', 'Cho La', 'Larkya La'],
      correctAnswer: 0,
      explanation:
        'Latta Bhanjyang is a named higher section of the trail before the final climb to the summit.',
    },
    {
      question: 'What is the Godavari Kunda?',
      answers: [
        'A sacred pond with a perennial water flow',
        'A volcanic crater',
        'A tea estate',
        'A high-altitude glacier',
      ],
      correctAnswer: 0,
      explanation:
        'The Godavari Kunda is a small pond at Godawari that Hindus regard as sacred and that flows year-round.',
    },
    {
      question:
        'Hikers on one common route to Naudhara are directed past which school?',
      answers: [
        'St. Xavier’s School',
        'Tribhuvan University',
        'Kathmandu University',
        'Boudha Vidyalaya',
      ],
      correctAnswer: 0,
      explanation:
        'Some route descriptions pass near St. Xavier’s School in Godawari on the way to the Naudhare temple area.',
    },
    {
      question: 'Which faiths visit the shrines and temples on Phulchoki?',
      answers: [
        'Hindus and Buddhists',
        'Christians only',
        'Jains only',
        'Sikhs only',
      ],
      correctAnswer: 0,
      explanation:
        'The summit temple is a Hindu shrine, while the Naudhare area has Buddhist sites, so both faiths visit the hill.',
    },
    {
      question:
        'Which major Hindu festival draws pilgrims to the Phulchoki Mai temple?',
      answers: ['Dashain', 'Holi', 'Losar', 'Eid'],
      correctAnswer: 0,
      explanation:
        'Pilgrims visit the temple during festivals such as Dashain and the Nepali New Year (Baisakh 1).',
    },
    {
      question:
        'Which option helps visitors with limited trekking ability reach the upper forest?',
      answers: [
        'A 4WD road that reaches higher sections',
        'A cable car',
        'A helicopter shuttle only',
        'A sled ride on snow',
      ],
      correctAnswer: 0,
      explanation:
        'A rough road allows 4WD access toward the upper forest, so people can birdwatch without the full climb.',
    },
    {
      question:
        'Roughly how long does a fit hiker take to reach the summit from Godawari?',
      answers: ['3–4 hours', '30 minutes', '2 days', '10 hours each way'],
      correctAnswer: 0,
      explanation:
        'The climb from Godawari takes around 3–4 hours, depending on pace and conditions.',
    },
    {
      question:
        'Why is good footwear with grip especially important on this hike?',
      answers: [
        'Stone steps and forest paths can be slippery when wet',
        'Phulchoki has no paths',
        'The summit is covered in ice year-round',
        'It keeps leeches away',
      ],
      correctAnswer: 0,
      explanation:
        'Sustained climbing on stone steps and wet dirt paths makes grip important, particularly in the monsoon.',
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
    {
      question:
        'In which year were the Durbar Squares of Kathmandu Valley inscribed as UNESCO World Heritage Sites?',
      answers: ['1979', '1984', '1997', '2003'],
      correctAnswer: 0,
      explanation:
        'Kathmandu, Patan, and Bhaktapur Durbar Squares were all inscribed in 1979.',
    },
    {
      question: 'Kathmandu’s name is traditionally linked to which structure?',
      answers: [
        'Kasthamandap',
        'Kumari Ghar',
        'Taleju Temple',
        'Swayambhunath',
      ],
      correctAnswer: 0,
      explanation:
        'Kasthamandap, a wooden pavilion near Durbar Square, is linked to the city’s name.',
    },
    {
      question:
        'Kathmandu Durbar Square, also called Hanuman Dhoka, was the palace of which two dynasties?',
      answers: [
        'Malla and Shah',
        'Chola and Pala',
        'Mughal and Rana',
        'Licchavi and Gupta',
      ],
      correctAnswer: 0,
      explanation:
        'The complex served as the royal palace of both the Malla and Shah kings.',
    },
    {
      question: 'What is Swayambhunath’s popular nickname?',
      answers: [
        'Monkey Temple',
        'Golden Temple',
        'Stone Temple',
        'Cloud Temple',
      ],
      correctAnswer: 0,
      explanation: 'The hilltop stupa is home to a large troop of monkeys.',
    },
    {
      question: 'Swayambhunath is considered the valley’s oldest what?',
      answers: [
        'Buddhist monument',
        'Hindu palace',
        'Royal garden',
        'Market street',
      ],
      correctAnswer: 0,
      explanation:
        'It is described as the oldest Buddhist monument in the Kathmandu Valley.',
    },
    {
      question: 'Pashupatinath Temple stands on the banks of which river?',
      answers: ['Bagmati', 'Koshi', 'Rapti', 'Narayani'],
      correctAnswer: 0,
      explanation:
        'The temple complex lies along the Bagmati River, which is also home to cremation ghats.',
    },
    {
      question:
        'What practice at Pashupatinath makes it especially sacred for many Hindus?',
      answers: [
        'Open-air cremations on the riverside ghats',
        'Daily camel races',
        'Commercial fishing',
        'Tea ceremonies',
      ],
      correctAnswer: 0,
      explanation:
        'Many Hindus choose to be cremated at the ghats. Visitors should be respectful and avoid photographing bodies or grieving families.',
    },
    {
      question:
        'Boudhanath is primarily associated with which Buddhist tradition?',
      answers: [
        'Tibetan Buddhism',
        'Theravada Buddhism from Sri Lanka',
        'Jainism',
        'Sikhism',
      ],
      correctAnswer: 0,
      explanation:
        'Boudhanath is one of the key Tibetan Buddhist pilgrimage sites outside Tibet.',
    },
    {
      question: 'Boudhanath is often described as Nepal’s largest what?',
      answers: ['Stupa', 'Palace', 'Lake', 'Monastery school'],
      correctAnswer: 0,
      explanation:
        'Boudhanath is one of the largest stupas in Nepal and a major pilgrimage site.',
    },
    {
      question:
        'In which direction should visitors walk around Boudhanath and other stupas?',
      answers: ['Clockwise', 'Counter-clockwise', 'Zigzag', 'Not at all'],
      correctAnswer: 0,
      explanation:
        'Circumambulation is done clockwise, keeping the stupa on your right.',
    },
    {
      question: 'Where does the Kumari, the living goddess, reside?',
      answers: [
        'Kumari Ghar in Kathmandu Durbar Square',
        'Pashupatinath Temple',
        'Boudhanath Stupa',
        'Golden Temple in Patan',
      ],
      correctAnswer: 0,
      explanation:
        'The Kumari Ghar is the residence of the Kumari, a young girl worshipped as a living goddess.',
    },
    {
      question:
        'Changu Narayan Temple, a valley UNESCO site, is dedicated to which deity?',
      answers: ['Vishnu', 'Shiva', 'Durga', 'Ganesh'],
      correctAnswer: 0,
      explanation:
        'Changu Narayan is a historic Vishnu shrine and one of the seven UNESCO sites in the valley.',
    },
    {
      question: 'Patan’s official name, meaning “City of Fine Arts,” is what?',
      answers: ['Lalitpur', 'Bhaktapur', 'Kantipur', 'Gorkha'],
      correctAnswer: 0,
      explanation:
        'Patan is officially Lalitpur, and it is known for metalwork, woodcarving, and art.',
    },
    {
      question: 'The Golden Temple in Patan is formally known as what?',
      answers: [
        'Hiranya Varna Mahavihar',
        'Swayambhu Mahachaitya',
        'Hanuman Dhoka',
        'Kasthamandap',
      ],
      correctAnswer: 0,
      explanation:
        'It is a Buddhist monastery whose gilded architecture gives it its popular name.',
    },
    {
      question:
        'Which of the three Durbar Squares is described as the largest and oldest?',
      answers: ['Bhaktapur', 'Kathmandu', 'Patan', 'Pokhara'],
      correctAnswer: 0,
      explanation:
        'Bhaktapur Durbar Square is described as the largest and oldest of the valley’s three squares.',
    },
    {
      question: 'What type of temple is Nyatapola in Bhaktapur?',
      answers: [
        'Five-tiered pagoda',
        'Stone dome',
        'Cave shrine',
        'Glass pyramid',
      ],
      correctAnswer: 0,
      explanation:
        'Nyatapola is a famous five-tiered pagoda built in 1702 at Taumadhi Square.',
    },
    {
      question:
        'How many sites in the Kathmandu Valley are on the UNESCO World Heritage list?',
      answers: ['Seven', 'Two', 'Ten', 'Twenty'],
      correctAnswer: 0,
      explanation:
        'The valley’s UNESCO listing includes seven monument zones, including Kathmandu, Patan, and Bhaktapur Durbar Squares, Swayambhunath, Boudhanath, Pashupatinath, and Changu Narayan.',
    },
    {
      question:
        'The Krishna Mandir at Patan Durbar Square is built from which material?',
      answers: ['Stone', 'Glass', 'Steel', 'Bamboo'],
      correctAnswer: 0,
      explanation:
        'Krishna Mandir is an entirely stone temple known for its intricate carving.',
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
    {
      question: 'Lumbini is the birthplace of which figure?',
      answers: [
        'Siddhartha Gautama (the Buddha)',
        'Guru Rinpoche',
        'Adi Shankaracharya',
        'Mahavira',
      ],
      correctAnswer: 0,
      explanation:
        'Lumbini is recognised as the birthplace of Siddhartha Gautama, the founder of Buddhism.',
    },
    {
      question:
        'What does the inscription on the Ashoka Pillar identify the site as?',
      answers: [
        'The birthplace of the Buddha',
        'A royal treasury',
        'A battle site',
        'A trade fair',
      ],
      correctAnswer: 0,
      explanation:
        'The pillar’s inscription is the key historical evidence identifying Lumbini as the Buddha’s birthplace.',
    },
    {
      question: 'The Maya Devi Temple marks which spot?',
      answers: [
        'The traditional birthplace of the Buddha',
        'The site of a palace',
        'A monastery kitchen',
        'A market square',
      ],
      correctAnswer: 0,
      explanation:
        'The temple stands over the sacred spot of the Buddha’s birth in the Sacred Garden.',
    },
    {
      question:
        'In which decade was the marker stone pinpointing the birth spot discovered?',
      answers: ['1950s', '1970s', '1990s', '2010s'],
      correctAnswer: 2,
      explanation:
        'The marker stone was found during excavations of the old Maya Devi Temple in 1996.',
    },
    {
      question: 'In which year was the restored Maya Devi Temple reopened?',
      answers: ['1995', '2003', '2010', '2016'],
      correctAnswer: 1,
      explanation:
        'The temple reopened on 16 May 2003, on the Buddha’s 2547th birth anniversary.',
    },
    {
      question: 'What sacred pond sits beside the Maya Devi Temple?',
      answers: ['Puskarini Pond', 'Phewa Lake', 'Begnas Lake', 'Gosaikunda'],
      correctAnswer: 0,
      explanation:
        'The Puskarini is one of the sacred features of the Sacred Garden.',
    },
    {
      question: 'Which zone of Lumbini contains the Maya Devi Temple?',
      answers: [
        'The Sacred Garden',
        'The Monastic Zone',
        'New Lumbini Village',
        'Tilaurakot',
      ],
      correctAnswer: 0,
      explanation:
        'The Sacred Garden is the core of the pilgrimage site, containing the temple, pillar, and archaeological remains.',
    },
    {
      question: 'Tilaurakot is identified with which ancient city?',
      answers: ['Kapilavastu', 'Pataliputra', 'Taxila', 'Nalanda'],
      correctAnswer: 0,
      explanation:
        'Tilaurakot is linked to Kapilavastu, the home of the Shakya kingdom and Siddhartha’s early life.',
    },
    {
      question: 'Approximately how far west is Tilaurakot from Lumbini?',
      answers: ['2 km', '27 km', '270 km', '1,000 km'],
      correctAnswer: 1,
      explanation:
        'Tilaurakot lies about 27 km west of Lumbini, near Taulihawa.',
    },
    {
      question: 'Kudan is associated with which event in the Buddha’s life?',
      answers: [
        'His meeting with his father after his enlightenment',
        'His birth',
        'His final sermon',
        'His mountain ascent',
      ],
      correctAnswer: 0,
      explanation:
        'Kudan is linked to the Buddha’s return to the region after enlightenment.',
    },
    {
      question: 'Who was Siddhartha’s father?',
      answers: [
        'King Suddhodana',
        'King Bimbisara',
        'King Ajatashatru',
        'King Prasenjit',
      ],
      correctAnswer: 0,
      explanation:
        'Suddhodana was the ruler of the Shakya kingdom at Kapilavastu.',
    },
    {
      question: 'Which kingdom was Queen Maya Devi part of?',
      answers: [
        'The Shakya kingdom',
        'The Malla kingdom',
        'The Licchavi kingdom',
        'The Mauryan empire',
      ],
      correctAnswer: 0,
      explanation:
        'Maya Devi was the queen of King Suddhodana of the Shakya kingdom.',
    },
    {
      question:
        'What kind of communities built many of the monasteries in the Monastic Zone?',
      answers: [
        'Buddhist communities from across Asia',
        'Only Hindu traders',
        'Only Sherpa villagers',
        'British colonial officials',
      ],
      correctAnswer: 0,
      explanation:
        'The Monastic Zone reflects a range of Buddhist traditions and architectural styles from different countries.',
    },
    {
      question:
        'Which months generally bring the most comfortable walking weather to Lumbini?',
      answers: [
        'October to February',
        'March to May',
        'June to September',
        'April to June only',
      ],
      correctAnswer: 0,
      explanation:
        'Cooler months make it easier to explore the open archaeological and garden areas.',
    },
    {
      question:
        'Why can walking in Lumbini feel demanding in the hottest months?',
      answers: [
        'The Terai heat is strong, especially around midday',
        'The Sacred Garden is closed in summer',
        'Monsoon fog blocks the paths',
        'The temples are too cold',
      ],
      correctAnswer: 0,
      explanation:
        'The Terai is considerably warmer than Kathmandu from spring into summer, so carry water and plan walks for cooler hours.',
    },
    {
      question: 'Which period is typically described as hot in Lumbini?',
      answers: [
        'March to May',
        'November to January',
        'October only',
        'Every month equally',
      ],
      correctAnswer: 0,
      explanation:
        'Temperatures climb from March, becoming particularly hot by May.',
    },
    {
      question:
        'What script is the inscription on the Ashoka Pillar written in?',
      answers: ['Brahmi', 'Devanagari', 'Tibetan', 'Cyrillic'],
      correctAnswer: 0,
      explanation:
        'The Ashoka Pillar carries a Pali inscription in Brahmi script, which is among the key historical records of the site.',
    },
    {
      question:
        'Which offering is commonly seen at the Maya Devi Temple and other sacred sites in Lumbini?',
      answers: ['Butter lamps', 'Fireworks', 'Campfires', 'Plastic bottles'],
      correctAnswer: 0,
      explanation:
        'Pilgrims light butter lamps and pray at the sacred sites, reflecting the wisdom and clarity they symbolise.',
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
    {
      question: 'Bandipur lies in which district?',
      answers: ['Tanahun', 'Kaski', 'Gorkha', 'Lamjung'],
      correctAnswer: 0,
      explanation:
        'Bandipur is a hill town in Tanahun District of Gandaki Province.',
    },
    {
      question: 'Bandipur sits roughly between which two cities?',
      answers: [
        'Kathmandu and Pokhara',
        'Pokhara and Lumbini',
        'Kathmandu and Biratnagar',
        'Chitwan and Bharatpur',
      ],
      correctAnswer: 0,
      explanation:
        'Its position makes it a convenient stop on a road trip between the two cities.',
    },
    {
      question: 'What is Bandipur’s approximate elevation?',
      answers: ['1,030 m', '300 m', '4,000 m', '5,364 m'],
      correctAnswer: 0,
      explanation:
        'Bandipur sits on a ridge at about 1,030 metres above sea level.',
    },
    {
      question: 'Bandipur overlooks which river valley?',
      answers: ['Marshyangdi', 'Koshi', 'Narayani', 'Karnali'],
      correctAnswer: 0,
      explanation:
        'The town sits on a ridge above the Marshyangdi River valley.',
    },
    {
      question: 'Who originally settled Bandipur as a trading town?',
      answers: [
        'Newar traders from Bhaktapur',
        'Sherpa traders from Khumbu',
        'Tharu farmers from the Terai',
        'Dutch merchants',
      ],
      correctAnswer: 0,
      explanation:
        'Newar traders from Bhaktapur built the town’s trading settlement and its distinctive architecture.',
    },
    {
      question: 'What was Bandipur historically known as?',
      answers: [
        'A trading centre',
        'A royal summer capital',
        'A mining town',
        'A fishing port',
      ],
      correctAnswer: 0,
      explanation:
        'Bandipur was a commercial hub on hill trade routes before motorable roads were built.',
    },
    {
      question:
        'Which highway, built in the 1960s at the foot of the hill, reduced Bandipur’s trade?',
      answers: [
        'Prithvi Highway',
        'Siddhartha Highway',
        'Mahendra Highway',
        'Tribhuvan Highway',
      ],
      correctAnswer: 0,
      explanation:
        'The highway bypassed the hilltop town, which is one reason it has kept its historic character.',
    },
    {
      question: 'What is Siddha Gufa?',
      answers: [
        'Nepal’s largest cave',
        'A royal palace',
        'A Buddhist stupa',
        'A tea estate',
      ],
      correctAnswer: 0,
      explanation:
        'Siddha Gufa is a limestone cave near Bandipur and is widely described as the largest in Nepal.',
    },
    {
      question: 'Roughly how deep is Siddha Gufa?',
      answers: ['437 m', '43 m', '4,370 m', '4.3 m'],
      correctAnswer: 0,
      explanation: 'The cave is about 437 metres deep and 50 metres high.',
    },
    {
      question: 'Which goddess is Bindhyabasini Temple dedicated to?',
      answers: ['Durga', 'Saraswati', 'Lakshmi', 'Parvati'],
      correctAnswer: 0,
      explanation:
        'Bindhyabasini is a Durga temple and one of the key religious sites in Bandipur.',
    },
    {
      question:
        'Which temple is considered the mother temple for the Shrestha clan of the Newar community?',
      answers: [
        'Khadga Devi Temple',
        'Pashupatinath',
        'Boudhanath',
        'Swayambhunath',
      ],
      correctAnswer: 0,
      explanation:
        'The temple holds special significance for the Shrestha clan, whose ancestors settled in Bandipur from Sabkha.',
    },
    {
      question:
        'What is the main architectural style of Bandipur’s historic houses?',
      answers: [
        'Newar, with carved windows and struts',
        'Mughal domes',
        'Modern glass towers',
        'Colonial Indian bungalows',
      ],
      correctAnswer: 0,
      explanation:
        'Traditional Newar houses with carved wooden windows and struts give the town its character.',
    },
    {
      question: 'Bindhyabasini Temple is associated with which craft?',
      answers: [
        'Woodcarving and brasswork',
        'Glassblowing',
        'Papermaking',
        'Pottery in glaze',
      ],
      correctAnswer: 0,
      explanation:
        'The temple reflects traditional Newar craftsmanship in its timber and metal details.',
    },
    {
      question:
        'Which mountain ranges can be seen from the viewpoints above Bandipur on clear days?',
      answers: [
        'Annapurna and Manaslu',
        'Everest and Lhotse only',
        'Karakoram and Hindu Kush',
        'Kanchenjunga only',
      ],
      correctAnswer: 0,
      explanation:
        'Viewpoints offer wide Himalayan panoramas when visibility allows.',
    },
    {
      question:
        'What is the best season for clear skies and comfortable walking in Bandipur?',
      answers: [
        'October to April',
        'June to September',
        'July to August only',
        'December only',
      ],
      correctAnswer: 0,
      explanation:
        'This period is generally drier, with clearer skies and better mountain views.',
    },
    {
      question:
        'Which season brings frequent rain and less predictable mountain views to Bandipur?',
      answers: [
        'June to September',
        'October to December',
        'February to March',
        'January only',
      ],
      correctAnswer: 0,
      explanation:
        'The monsoon brings rainfall, cloud cover, and slippery paths.',
    },
    {
      question:
        'Why is caution advised on the trail to Siddha Gufa during wet weather?',
      answers: [
        'The stone steps and natural surfaces can become slippery',
        'The cave is always closed when wet',
        'Leeches block the entrance',
        'Trails turn into snow',
      ],
      correctAnswer: 0,
      explanation:
        'Wet conditions make stone steps and natural paths slippery, so sturdy footwear is advised.',
    },
    {
      question:
        'Bandipur was once the administrative headquarters of which district?',
      answers: ['Tanahun', 'Kaski', 'Chitwan', 'Bardiya'],
      correctAnswer: 0,
      explanation:
        'Bandipur served as an earlier administrative headquarters of Tanahun District.',
    },
    {
      question: 'Which king is said to have conquered Bandipur in 1768?',
      answers: ['Prithvi Narayan Shah', 'Ashoka', 'Tribhuvan', 'Mahendra'],
      correctAnswer: 0,
      explanation:
        'Prithvi Narayan Shah, the king of Gorkha, led the campaigns that unified Nepal.',
    },
    {
      question:
        'Why is Bandipur’s town centre especially pleasant for walking?',
      answers: [
        'It is pedestrian-friendly, with a compact historic core',
        'Cars are required to drive through it at high speed',
        'It has no streets',
        'It has moving walkways',
      ],
      correctAnswer: 0,
      explanation:
        'The compact centre is best explored on foot, which helps it feel like a living heritage town.',
    },
  ],
  'bhaktapur-woodcarving': [
    {
      question: 'Which city is famous for its Newari woodcarving tradition?',
      answers: [
        'The city of paragliding and paddle-boats',
        'Bhaktapur',
        'The city of sweet mangoes and ponds',
        'The birthplace of baby Buddha',
      ],
      correctAnswer: 1,
      explanation:
        'Bhaktapur is one of the three historic royal cities of the Kathmandu Valley, and its carved windows, doors, and pillars are a major part of its Newari heritage.',
    },
    {
      question: 'In which square does the five-tiered Nyatapola Temple stand?',
      answers: [
        'The pigeon hangout zone',
        'The courtyard of metal magicians',
        'Taumadhi Square',
        'The royal palace parade ground',
      ],
      correctAnswer: 2,
      explanation:
        'Nyatapola was built in 1702 and is often described as the tallest pagoda in Nepal.',
    },
    {
      question:
        'What does the endless knot motif symbolise in Buddhist and Hindu art?',
      answers: [
        'Epic video game style battles',
        'Eternity and interconnectedness',
        'A giant cosmic watering can',
        'Ancient pirate gold chests',
      ],
      correctAnswer: 1,
      explanation:
        'The endless knot is one of the Eight Auspicious Symbols in Buddhism, and it is also a common motif in Hindu art.',
    },
    {
      question:
        'Which community’s artistic tradition is Newari woodcarving associated with?',
      answers: [
        'The high-altitude mountain legends',
        'The jungle-dwelling master trackers',
        'Newar',
        'The brave hill-tribe heroes',
      ],
      correctAnswer: 2,
      explanation:
        'The Newar people built and decorated the Kathmandu Valley’s cities, and their carved wooden windows and struts are among the valley’s most recognisable details.',
    },
    {
      question:
        'The famous Peacock Window in Bhaktapur is named after which bird?',
      answers: [
        'The sky-soaring aerial predator',
        'Peacock',
        'The long-legged wetland walker',
        'The chatty tropical mimic',
      ],
      correctAnswer: 1,
      explanation:
        'The window is decorated with carved peacock motifs and is one of the best-known examples of Bhaktapur’s woodcraft.',
    },
    {
      question: 'The Woodcarving Museum is located in which historic building?',
      answers: [
        'Pujari Math',
        'The home of the living goddess',
        'The tall earthquake survivor',
        "The stone bell ringers' hangout",
      ],
      correctAnswer: 0,
      explanation:
        'Pujari Math sits at Dattatreya Square and houses carved sculptures, windows, and architectural elements.',
    },
    {
      question:
        'Which tool is central to the hand-carving techniques taught at beginner workshops?',
      answers: [
        'For smashing things cartoon-style',
        'Chisel',
        'For slapping wet mud on walls',
        'For noisy lumberjack competitions',
      ],
      correctAnswer: 1,
      explanation:
        'Beginner workshops teach basic chisel techniques, starting with simple designs like flowers, leaves, and the endless knot.',
    },
    {
      question: 'Bhaktapur’s famous Golden Gate is formally known as what?',
      answers: [
        'Sun Dhoka',
        'The holy monkey corridor',
        "The queen's washing steps",
        "The monkey-god's front door",
      ],
      correctAnswer: 0,
      explanation:
        'Sun Dhoka, or Golden Gate, stands at the entrance to the royal palace courtyard in Bhaktapur Durbar Square and was built in 1753.',
    },
    {
      question:
        'Which season is generally considered least comfortable for walking around Bhaktapur’s historic centre?',
      answers: [
        'Festival season picnic weather',
        'Cozy sweater and hot tea season',
        'Blooming flower sightseeing weather',
        'June to September (monsoon)',
      ],
      correctAnswer: 3,
      explanation:
        'The monsoon brings heavy rain and humidity, so October to April is recommended for exploring the historic centre comfortably.',
    },
    {
      question:
        'What wood is traditionally favoured by many Newari carvers for durable carving?',
      answers: [
        'Sal wood',
        'Giant hollow green grass stalks',
        'The fluffy pine-scented Christmas tree',
        'The fancy boat-deck lumber',
      ],
      correctAnswer: 0,
      explanation:
        'Sal (Shorea robusta) is a hardwood native to Nepal and is widely used in traditional Newari woodwork.',
    },
  ],
  'patan-mandala-painting': [
    {
      question: 'What does the Sanskrit word “mandala” roughly mean?',
      answers: [
        'The muddy pond flower',
        'Circle',
        'The giant rocky hiking peak',
        'A spinning dragon spectacle',
      ],
      correctAnswer: 1,
      explanation:
        'Mandala is often translated as “circle” or “discoid,” and it refers to a sacred geometric design.',
    },
    {
      question:
        'Mandalas are most closely associated with which religious tradition?',
      answers: [
        'The peaceful desert oasis faith',
        'Buddhism',
        'The ancient historic lineage',
        'The faith of the proud warriors',
      ],
      correctAnswer: 1,
      explanation:
        'Mandalas are used in Buddhist meditation and ritual, and they also appear in Hindu and Jain practice.',
    },
    {
      question: 'What is Patan also known as?',
      answers: [
        'Lalitpur',
        'The hillside fortress town',
        "Bhaktapur's old country cousin",
        'The ancient valley corner town',
      ],
      correctAnswer: 0,
      explanation:
        'Lalitpur means “City of Beauty,” and it is widely known as the City of Fine Arts.',
    },
    {
      question:
        'The Krishna Mandir at Patan Durbar Square is built from which material?',
      answers: [
        'Flammable cabin logs',
        'Stone',
        'Fragile greenhouse panes',
        "Pandas' favorite snack stalks",
      ],
      correctAnswer: 1,
      explanation:
        'The Krishna Mandir is a stone temple known for its detailed carvings, which makes it stand out among Patan’s architecture.',
    },
    {
      question:
        'The Mahabouddha Temple is distinctive because it is built from which material?',
      answers: [
        'Terracotta brick',
        'Fancy kitchen counter slabs',
        'Heavy cliff boulder blocks',
        'Roof shingle extras',
      ],
      correctAnswer: 0,
      explanation:
        'Mahabouddha is covered in terracotta bricks and decorated with repeated small Buddha images.',
    },
    {
      question: 'Which Patan monastery is known as the Golden Temple?',
      answers: [
        'Hiranya Varna Mahavihar',
        'The cheeky monkey temple hill',
        'The giant all-seeing eye dome',
        'The sadhu sanctuary by the river',
      ],
      correctAnswer: 0,
      explanation:
        'Hiranya Varna Mahavihar is a Buddhist monastery whose name refers to its golden-hued architecture and interior decoration.',
    },
    {
      question: 'Paubha paintings are traditionally painted on which surface?',
      answers: [
        'Cotton cloth',
        'Kitchen chopping boards',
        'Caveman graffiti slabs',
        'Transparent window panes',
      ],
      correctAnswer: 0,
      explanation:
        'Paubha is a traditional Newari religious painting form, and artists often used cloth with mineral-based pigments.',
    },
    {
      question: 'Thangka painting is closely linked to which tradition?',
      answers: [
        'Tibetan Buddhism',
        'The blue-skinned deity followers',
        'The strict broom-wielding ascetics',
        'Cathedral stained-glass traditions',
      ],
      correctAnswer: 0,
      explanation:
        'Thangkas are painted scrolls that depict Buddhist deities, mandalas, and teachings, and they are commonly seen in Kathmandu’s Thamel area.',
    },
    {
      question:
        'What do Tibetan monks symbolise when they create and then destroy sand mandalas?',
      answers: [
        'Unlocking a hidden pirate chest',
        'Impermanence',
        'Winning a medieval board game',
        'Baking a giant harvest loaf',
      ],
      correctAnswer: 1,
      explanation:
        'Monks spend days making intricate sand mandalas and then sweep them away, which reminds practitioners that all things are temporary.',
    },
    {
      question: 'What is the usual central element of a mandala design?',
      answers: [
        'A point or bindu',
        'Where snow leopards hang out',
        'A winding aquatic snake line',
        'Climbing up to the attic',
      ],
      correctAnswer: 0,
      explanation:
        'Many mandalas are built outward from a central point, representing the centre of consciousness or the sacred core of the design.',
    },
  ],
  'bhaktapur-pottery': [
    {
      question: 'What is Bhaktapur’s Pottery Square locally called?',
      answers: [
        'Talako',
        'The three-headed deity square',
        'The pigeon meeting plaza',
        "The sun-worshippers' courtyard",
      ],
      correctAnswer: 0,
      explanation:
        'Talako is the local name for the pottery area, and it is one of the Kathmandu Valley’s best-known pottery centres.',
    },
    {
      question: 'Bhaktapur is traditionally known by which nickname?',
      answers: [
        "The water-ski lover's paradise",
        'City of Devotees',
        'The troll-infested river crossing',
        'The pirate treasure destination',
      ],
      correctAnswer: 1,
      explanation:
        'The name Bhaktapur means “city of devotees,” reflecting its long religious and cultural heritage.',
    },
    {
      question: 'Which Lalitpur village is known for pottery and brick-making?',
      answers: [
        'Khokana',
        'The elephant-riding festival village',
        'The masked dance stage town',
        'The backpacker pizza and souvenir maze',
      ],
      correctAnswer: 0,
      explanation:
        'Khokana is a traditional Newari village, and the wider Lalitpur area has a long heritage of pottery and brick-making.',
    },
    {
      question: 'Madhyapur Thimi is best known for which traditional craft?',
      answers: [
        'Origami folding factories',
        'Pottery',
        "Grandma's wool sweater knitting",
        'Terminator robot smelting',
      ],
      correctAnswer: 1,
      explanation:
        'Madhyapur Thimi is a craft town known for its traditional clay-working, which shapes household vessels and handmade objects.',
    },
    {
      question:
        'Newly shaped pottery usually needs to be dried and then what before use?',
      answers: [
        'Covered in neon tie-dye stripes',
        'Fired',
        'Dipped in pirate treasure liquid',
        'Left in an ice-cream freezer',
      ],
      correctAnswer: 1,
      explanation:
        'Drying removes moisture from the clay, and firing hardens it into a durable ceramic; this step may carry an additional cost at workshops.',
    },
    {
      question: 'Which season is least favourable for outdoor pottery drying?',
      answers: [
        'Kite-flying breeze season',
        'Crisp campfire morning season',
        'Monsoon',
        'Spring picnic flower season',
      ],
      correctAnswer: 2,
      explanation:
        'The monsoon brings rain and humidity, which slow drying and can affect pottery that is left outside.',
    },
    {
      question:
        'How long does the Guided Pottery Workshop at Pottery Square typically last?',
      answers: [
        'Micro-wave meal timing',
        'A single cartoon episode length',
        '60 minutes',
        'A full epic movie marathon',
      ],
      correctAnswer: 2,
      explanation:
        'The guided workshop is 60 minutes, while a short pottery session lasts about 10 minutes.',
    },
    {
      question:
        'Which Bhaktapur temple stands at Taumadhi Square close to the pottery area?',
      answers: [
        'Bhairavnath Temple',
        'The flute-playing cowherd sanctuary',
        'The giant wooden tree-house pavilion',
        'The royal chariot station',
      ],
      correctAnswer: 0,
      explanation:
        'Bhairavnath Temple is one of the landmarks around Taumadhi Square, along with the Nyatapola Temple.',
    },
    {
      question:
        'What should visitors do before photographing artisans at Pottery Square?',
      answers: [
        'Buy a photography license sticker',
        'Ask permission',
        'Dress up in historical Newari royal garments',
        'Check your Wi-Fi signal strength',
      ],
      correctAnswer: 1,
      explanation:
        'Pottery Square is a working neighbourhood rather than a tourist attraction, so respecting artisans’ workspaces and privacy is important.',
    },
    {
      question:
        'Which is the best-known open-air pottery neighbourhood in the Kathmandu Valley covered in this document?',
      answers: [
        'Pottery Square in Bhaktapur',
        'The mustard-oil pressing village',
        'The trekking gear shopping hub',
        'The giant prayer-wheel circle',
      ],
      correctAnswer: 0,
      explanation:
        'Pottery Square is one of the valley’s best-known centres of traditional pottery, and its open courtyards let artisans dry pots outdoors.',
    },
  ],
  'chitwan-national-park': [
    {
      question: 'In which year was Chitwan National Park established?',
      answers: ['1963', '1973', '1984', '1990'],
      correctAnswer: 1,
      explanation:
        'Chitwan is Nepal’s first national park, established in 1973. It was added to the UNESCO World Heritage list in 1984.',
    },
    {
      question:
        'In which year did Chitwan become a UNESCO World Heritage Site?',
      answers: ['1973', '1984', '1998', '2008'],
      correctAnswer: 1,
      explanation:
        'UNESCO listed Chitwan as a natural World Heritage Site in 1984.',
    },
    {
      question: 'Which three rivers shape Chitwan’s landscape?',
      answers: [
        'Narayani, Rapti, and Reu',
        'Ganges, Yamuna, and Sutlej',
        'Koshi, Kali Gandaki, and Trishuli',
        'Karnali, Babai, and Bagmati',
      ],
      correctAnswer: 0,
      explanation:
        'The park’s floodplains and wetlands are formed by these three rivers.',
    },
    {
      question:
        'Where in the world is the greater one-horned rhinoceros found in the wild?',
      answers: [
        'Only in Nepal and India',
        'Only in China',
        'Only in Africa',
        'Only in Bhutan',
      ],
      correctAnswer: 0,
      explanation:
        'The species is restricted to South Asia. UNESCO notes that Chitwan and India’s Kaziranga hold most of the world population.',
    },
    {
      question:
        'In which year did Chitwan’s Gharial Breeding Center begin its work?',
      answers: ['1960', '1978', '1995', '2005'],
      correctAnswer: 1,
      explanation:
        'The breeding centre was launched in 1978, when the park’s gharial population had fallen below 81 animals.',
    },
    {
      question: 'What is a gharial?',
      answers: [
        'A crocodile with a long, narrow snout',
        'A type of deer',
        'A bird of prey',
        'A wild boar',
      ],
      correctAnswer: 0,
      explanation:
        'Gharials are a critically endangered fish-eating crocodilian. They are one of the animals visitors can spot on a canoe ride in Chitwan.',
    },
    {
      question: 'Which type of forest dominates much of Chitwan’s interior?',
      answers: [
        'Sal forest',
        'Pine forest',
        'Mangrove forest',
        'Cedar rainforest',
      ],
      correctAnswer: 0,
      explanation:
        'Sal forests, along with tall grasslands and riverine habitats, are characteristic of the Terai lowlands.',
    },
    {
      question: 'Which month falls in Chitwan’s peak monsoon period?',
      answers: ['January', 'July', 'October', 'November'],
      correctAnswer: 1,
      explanation:
        'July and August are peak monsoon months with frequent rain and wet ground. October and November are rated among the best months to visit.',
    },
    {
      question:
        'Why might outdoor activities in Chitwan be affected during July to September?',
      answers: [
        'Heavy rain, humidity, and changing river conditions',
        'Snowfall on the trails',
        'Locust swarms',
        'Volcanic ash',
      ],
      correctAnswer: 0,
      explanation:
        'Monsoon rain makes trails muddy and can affect canoe rides and safaris. Park activities may be suspended during this period.',
    },
    {
      question:
        'Which community is closely associated with Chitwan and Sauraha?',
      answers: ['Tharu', 'Sherpa', 'Newar', 'Limbu'],
      correctAnswer: 0,
      explanation:
        'The Tharu people are the traditional inhabitants of the Terai and form an important part of Sauraha’s cultural life.',
    },
    {
      question: 'Which big cat lives in Chitwan’s habitats?',
      answers: [
        'Snow leopard',
        'Royal Bengal tiger',
        'Clouded leopard',
        'Lion',
      ],
      correctAnswer: 1,
      explanation:
        'The park provides protected habitat for the Royal Bengal tiger. Tigers are elusive, so sightings can never be guaranteed.',
    },
    {
      question:
        'What is the main threat to Chitwan’s one-horned rhinoceros, according to UNESCO?',
      answers: [
        'Poaching for its horn',
        'Overgrazing by cattle',
        'Tourist traffic',
        'Dam construction',
      ],
      correctAnswer: 0,
      explanation:
        'UNESCO identifies poaching for the illegal horn trade as a pressing threat, despite strong protection efforts.',
    },
    {
      question: 'Which river runs past Sauraha, where canoe rides depart?',
      answers: [
        'Koshi River',
        'Rapti River',
        'Karnali River',
        'Trishuli River',
      ],
      correctAnswer: 1,
      explanation:
        'Canoe rides and birdwatching around Sauraha take place on the Rapti River.',
    },
    {
      question: 'Where is the Elephant Breeding Centre located?',
      answers: ['Khorsar, Sauraha', 'Jomsom', 'Dhulikhel', 'Pokhara'],
      correctAnswer: 0,
      explanation:
        'The Elephant Breeding Centre is in Khorsar, near Sauraha, and focuses on elephant breeding and conservation.',
    },
    {
      question: 'Which airport city is the usual air gateway for Chitwan?',
      answers: ['Pokhara', 'Bharatpur', 'Biratnagar', 'Lumbini'],
      correctAnswer: 1,
      explanation:
        'Travellers usually fly to Bharatpur and continue by road. The park headquarters at Kasara is about 21 km from Bharatpur.',
    },
    {
      question: 'Where is Chitwan National Park’s headquarters?',
      answers: ['Kasara', 'Sauraha', 'Khorsar', 'Thakurdwara'],
      correctAnswer: 0,
      explanation:
        'The park headquarters is at Kasara. Thakurdwara is the headquarters of Bardia National Park, a different park.',
    },
    {
      question:
        'What can visitors typically spot on a canoe ride on Chitwan’s rivers?',
      answers: [
        'Crocodiles, gharials, and water birds',
        'Polar bears',
        'Penguins',
        'Sea turtles',
      ],
      correctAnswer: 0,
      explanation:
        'Riverbanks and wetlands provide habitat for these animals. Sightings depend on the day.',
    },
    {
      question: 'Why is a local guide recommended for jungle walks in Chitwan?',
      answers: [
        'To interpret animal tracks and keep visitors at a safe distance from wildlife',
        'To carry your luggage',
        'To book your hotel',
        'To drive the safari vehicle',
      ],
      correctAnswer: 0,
      explanation:
        'Guides help read signs such as tracks and vegetation and keep groups within safe practices around wildlife.',
    },
    {
      question: 'Roughly how many bird species have been recorded in Chitwan?',
      answers: ['About 50', 'More than 500', 'About 5', 'About 5,000'],
      correctAnswer: 1,
      explanation:
        'About 525 to 565 species have been recorded, which is why Chitwan is considered one of Asia’s richest bird habitats. Exact counts vary.',
    },
    {
      question:
        'Why should visitors avoid using flash while photographing wildlife in Chitwan?',
      answers: [
        'It can disturb animals',
        'It drains the camera battery in the sun',
        'It makes photos too dark to see',
        'It is only a problem in winter',
      ],
      correctAnswer: 0,
      explanation:
        'Flash can startle wildlife. Patience, distance, and following local restrictions at conservation and cultural sites are advised.',
    },
  ],
  'bardia-national-park': [
    {
      question:
        'Bardiya National Park is the largest national park in which region of Nepal?',
      answers: [
        'The lowland Terai',
        'The high Himalaya',
        'The eastern hills',
        'The far-western mountains',
      ],
      correctAnswer: 0,
      explanation:
        'Bardiya is the largest national park in Nepal’s Terai lowlands, covering about 968 square kilometres.',
    },
    {
      question: 'What is the approximate area of Bardiya National Park?',
      answers: ['152 km²', '968 km²', '3,000 km²', '7,600 km²'],
      correctAnswer: 1,
      explanation:
        'The park covers 968 km², with a buffer zone of about 327 km² around it.',
    },
    {
      question: 'Which two rivers shape Bardiya’s landscape?',
      answers: [
        'Karnali and Babai',
        'Ganges and Yamuna',
        'Koshi and Arun',
        'Narayani and Trishuli',
      ],
      correctAnswer: 0,
      explanation:
        'The Karnali and Babai river systems create important habitats for gharials, marsh muggers, and birds.',
    },
    {
      question:
        'In which year was the gharial breeding centre at Thakurdwara established?',
      answers: ['1960', '1982', '1999', '2010'],
      correctAnswer: 1,
      explanation:
        'The centre began in 1982 with 25 eggs collected from the Babai River.',
    },
    {
      question: 'What is the conservation status of the gharial?',
      answers: [
        'Least Concern',
        'Critically Endangered',
        'Extinct in the wild',
        'Abundant',
      ],
      correctAnswer: 1,
      explanation:
        'The gharial is classed as critically endangered, which is why the Thakurdwara breeding programme matters.',
    },
    {
      question:
        'Which community is associated with Bardiya’s cultural landscape?',
      answers: ['Rana Tharu', 'Sherpa', 'Gurung', 'Tamang'],
      correctAnswer: 0,
      explanation:
        'The Rana Tharu are the traditional inhabitants of the Bardiya region. Dangora communities also live nearby.',
    },
    {
      question: 'Which airport is the usual air gateway to Bardiya?',
      answers: ['Bhairahawa', 'Nepalgunj', 'Biratnagar', 'Dhangadhi'],
      correctAnswer: 1,
      explanation:
        'Visitors fly to Nepalgunj and then travel by road to Thakurdwara.',
    },
    {
      question: 'What is Thakurdwara?',
      answers: [
        'The park headquarters and main visitor base',
        'The national capital',
        'A border checkpoint',
        'A famous monastery',
      ],
      correctAnswer: 0,
      explanation:
        'Thakurdwara hosts the park headquarters, accommodation, and the gharial conservation centre.',
    },
    {
      question:
        'Which deer species is especially associated with Bardiya’s wetlands?',
      answers: ['Swamp deer', 'Reindeer', 'Musk deer', 'Red deer'],
      correctAnswer: 0,
      explanation:
        'Swamp deer live in the park’s grasslands and wetlands alongside other deer, monkeys, and mammals.',
    },
    {
      question: 'Which antelope is recorded in Bardiya’s grasslands?',
      answers: ['Blackbuck', 'Gazelle', 'Chamois', 'Impala'],
      correctAnswer: 0,
      explanation:
        'Blackbuck are among the animals listed in the park’s wildlife records and visitor information.',
    },
    {
      question: 'Which freshwater mammal may be seen in the Karnali River?',
      answers: ['Gangetic dolphin', 'Sea lion', 'Beaver', 'Otter-like manatee'],
      correctAnswer: 0,
      explanation:
        'The Karnali supports aquatic wildlife including Gangetic dolphins, though sightings are unpredictable.',
    },
    {
      question:
        'What is the main threat to gharials in the region, according to recent reporting?',
      answers: [
        'Fishing nets and habitat loss',
        'Avalanches',
        'Volcanic ash',
        'Desert winds',
      ],
      correctAnswer: 0,
      explanation:
        'Recent reporting says pollution, habitat loss, and fishing nets continue to threaten the species.',
    },
    {
      question:
        'What was the main reason cited for the rise in Bardiya’s rhinoceros population by 2015?',
      answers: [
        'Increased security measures',
        'More grasslands being planted',
        'A ban on safaris',
        'New roads through the park',
      ],
      correctAnswer: 0,
      explanation:
        'The population rose to 29 individuals by 2015, mainly because of tighter security.',
    },
    {
      question:
        'Which months are generally considered the best time to visit Bardiya?',
      answers: [
        'October to March',
        'June to August',
        'April to June',
        'July to September',
      ],
      correctAnswer: 0,
      explanation:
        'This period is cooler and drier, which is ideal for safaris and nature walks.',
    },
    {
      question: 'Roughly how hot can April to June be in Bardiya?',
      answers: ['25°C', '42°C', '10°C', '55°C'],
      correctAnswer: 1,
      explanation:
        'Temperatures reach around 42°C in the hot season, so safaris are better in the cooler early morning.',
    },
    {
      question:
        'How many gharial hatchlings emerged at Bardiya’s breeding centre in the 2026 season?',
      answers: ['28', '50', '96', '200'],
      correctAnswer: 2,
      explanation:
        '96 hatchlings emerged in August 2026, the highest number in nearly a decade.',
    },
    {
      question: 'What happens to gharials once they grow up at the centre?',
      answers: [
        'They are released into rivers such as the Babai',
        'They are sold to zoos',
        'They are kept in tanks forever',
        'They are moved to Kathmandu',
      ],
      correctAnswer: 0,
      explanation:
        'Juvenile gharials are released into natural habitats once they are large enough, with the Babai River a common release site.',
    },
    {
      question: 'Which river forms the western boundary of the park?',
      answers: [
        'Geruwa, a branch of the Karnali',
        'Koshi',
        'Bagmati',
        'Trishuli',
      ],
      correctAnswer: 0,
      explanation:
        'Natural boundaries include the Geruwa to the west and the Babai River to the southeast.',
    },
    {
      question: 'Which season brings frequent rain to Bardiya?',
      answers: [
        'Monsoon, roughly July to September',
        'Winter, December to February',
        'Spring, March to April',
        'Autumn, October to November',
      ],
      correctAnswer: 0,
      explanation:
        'The rainy season brings frequent rainfall and wetter conditions, which can affect safaris and river trips.',
    },
    {
      question:
        'Why are early mornings often recommended for safaris in April to June?',
      answers: [
        'Temperatures are cooler and more comfortable',
        'Animals are only active then',
        'The park opens only at dawn',
        'Entry fees are lower',
      ],
      correctAnswer: 0,
      explanation:
        'The heat peaks around midday, so early morning and late afternoon are more comfortable for outdoor activities.',
    },
  ],
  ilam: [
    {
      question: 'Ilam district is located in which part of Nepal?',
      answers: [
        'Eastern Nepal',
        'Western Nepal',
        'Far-western Nepal',
        'Central Nepal',
      ],
      correctAnswer: 0,
      explanation:
        'Ilam is a hill destination in eastern Nepal, known for tea gardens and forested hills.',
    },
    {
      question: 'What is the main town and base for exploring Ilam?',
      answers: ['Ilam Bazaar', 'Fikkal', 'Shree Antu', 'Kanyam'],
      correctAnswer: 0,
      explanation:
        'Ilam Bazaar is the district headquarters and the starting point for most trips in the area.',
    },
    {
      question: 'Which crop is Ilam’s most important commercial product?',
      answers: ['Tea', 'Coffee', 'Rice', 'Sugarcane'],
      correctAnswer: 0,
      explanation:
        'The district’s sloping gardens around Kanyam, Fikkal, and Ilam are closely tied to tea production.',
    },
    {
      question: 'What shape is the famous Mai Pokhari lake?',
      answers: ['Square', 'Nine-cornered', 'Circular', 'Triangular'],
      correctAnswer: 1,
      explanation:
        'Mai Pokhari is known as a nine-cornered lake, considered sacred and surrounded by forest.',
    },
    {
      question: 'What is the approximate elevation of Mai Pokhari?',
      answers: ['800 m', '2,121 m', '4,000 m', '5,364 m'],
      correctAnswer: 1,
      explanation:
        'Mai Pokhari sits at about 2,121 metres, surrounded by forest.',
    },
    {
      question: 'In which year was Mai Pokhari declared a Ramsar site?',
      answers: ['1995', '2008', '2015', '2020'],
      correctAnswer: 1,
      explanation:
        'It was declared a Ramsar wetland of international importance on 28 October 2008.',
    },
    {
      question: 'Which goddess is Mai Pokhari considered the abode of?',
      answers: ['Kali', 'Saraswati', 'Bhagawati', 'Lakshmi'],
      correctAnswer: 2,
      explanation:
        'The lake is considered the sacred abode of Goddess Bhagawati and is a pilgrimage site for Hindus and Buddhists.',
    },
    {
      question: 'What is the approximate elevation of Antu Danda?',
      answers: ['1,500 m', '2,328 m', '3,440 m', '4,130 m'],
      correctAnswer: 1,
      explanation:
        'Antu Danda is a ridge viewpoint at about 2,328 metres, known for sunrise and sunset views.',
    },
    {
      question: 'Which mountain is visible from Antu Danda on clear days?',
      answers: ['Kanchenjunga', 'Everest', 'Dhaulagiri', 'Manaslu'],
      correctAnswer: 0,
      explanation:
        'Sunrise and sunset views across the eastern Himalaya, including Kanchenjunga, are the main draw.',
    },
    {
      question:
        'Where does Kanchenjunga rank among the world’s highest mountains?',
      answers: ['2nd', '3rd', '4th', '5th'],
      correctAnswer: 1,
      explanation:
        'At about 8,586 metres, Kanchenjunga is the third-highest mountain in the world.',
    },
    {
      question:
        'Which tea-growing areas are popular for photography and picnics near Ilam?',
      answers: [
        'Kanyam and Fikkal',
        'Chitwan and Sauraha',
        'Bardiya and Thakurdwara',
        'Lukla and Namche',
      ],
      correctAnswer: 0,
      explanation:
        'The tea gardens around Kanyam and Fikkal are among Ilam’s best-known attractions for visitors.',
    },
    {
      question: 'Which place is considered Nepal’s first tea estate?',
      answers: [
        'Ilam Tea Estate',
        'Pokhara Tea Garden',
        'Dhankuta Estate',
        'Kathmandu Tea House',
      ],
      correctAnswer: 0,
      explanation:
        'The Ilam Tea Estate is widely described as the first tea estate in Nepal. Accounts differ on its founding year.',
    },
    {
      question: 'About how far north of Ilam Bazaar is Mai Pokhari?',
      answers: ['5 km', '13 km', '40 km', '100 km'],
      correctAnswer: 1,
      explanation:
        'Mai Pokhari is about 13 km north of Ilam Bazaar and is usually reached by road.',
    },
    {
      question: 'Which festival draws crowds to Mai Pokhari?',
      answers: ['Kartik Ekadasi', 'Dashain', 'Holi', 'Losar'],
      correctAnswer: 0,
      explanation:
        'Pilgrims gather at Mai Pokhari for Kartik Ekadasi, which falls in October or November.',
    },
    {
      question: 'Which tree is not typical of the forest around Mai Pokhari?',
      answers: ['Pine', 'Juniper', 'Palm', 'Birch'],
      correctAnswer: 2,
      explanation:
        'The forest around the lake is made up of fir, juniper, birch, and pine, plus medicinal plants.',
    },
    {
      question:
        'Which airport is the usual air gateway to Ilam from Kathmandu?',
      answers: ['Bhadrapur', 'Lukla', 'Pokhara', 'Jomsom'],
      correctAnswer: 0,
      explanation:
        'Travellers usually fly to Bhadrapur and then continue by road to Ilam.',
    },
    {
      question: 'Which community is among Ilam’s residents?',
      answers: ['Lepcha', 'Sherpa only', 'Thakali only', 'Tibetan nomads'],
      correctAnswer: 0,
      explanation:
        'Ilam is home to a mix of communities, including Lepcha, Rai, Limbu, Brahmin, Chhetri, Magar, Gurung, and Sherpa.',
    },
    {
      question: 'What is Shree Antu well known for offering?',
      answers: ['Homestays', 'Hotel casinos', 'Ski resorts', 'Cable cars'],
      correctAnswer: 0,
      explanation:
        'Shree Antu has homestay accommodation, making it a good base for sunrise trips and local experiences.',
    },
    {
      question:
        'Which viewpoint is known for sunrise and sunset over the eastern landscape?',
      answers: ['Antu Danda', 'Kala Patthar', 'Poon Hill', 'Sarangkot'],
      correctAnswer: 0,
      explanation:
        'Antu Danda is about 35 km southeast of Ilam Bazaar and is known for its views across the eastern hills.',
    },
    {
      question: 'What does “Ramsar site” mean for Mai Pokhari?',
      answers: [
        'It is a wetland of international importance',
        'It is a historic fort',
        'It is a national highway',
        'It is a tea factory',
      ],
      correctAnswer: 0,
      explanation:
        'Ramsar sites are wetlands recognised under the international Ramsar Convention, which highlights their ecological importance.',
    },
  ],
};

export const TRIVIA_EXPERIENCE_TYPE: Record<string, TriviaExperienceType> = {
  'ebc-trek': 'trek',
  'abc-trek': 'trek',
  'langtang-valley': 'trek',
  'manaslu-circuit': 'trek',
  'tilicho-lake-trek': 'trek',
  'mardi-himal-trek': 'trek',
  'gokyo-valley-trek': 'trek',
  'ghorepani-poon-hill-trek': 'trek',
  'shey-phoksundo': 'trek',
  'nagarkot-changunarayan': 'hike',
  'dhulikhel-namobuddha': 'hike',
  'godawari-phulchoki': 'hike',
  'kathmandu-valley-heritage-tour': 'cultural',
  'lumbini-tour': 'cultural',
  'bandipur-hill-town': 'cultural',
  'chitwan-national-park': 'nature',
  'bardia-national-park': 'nature',
  ilam: 'nature',
  'bhaktapur-woodcarving': 'craft',
  'bhaktapur-pottery': 'craft',
  'patan-mandala-painting': 'craft',
};

export const GENERAL_CATEGORIES_BY_EXPERIENCE: Record<
  TriviaExperienceType,
  GeneralTriviaCategory[]
> = {
  trek: ['trekking', 'nature', 'culture'],
  hike: ['trekking', 'nature', 'culture'],
  cultural: ['heritage', 'culture'],
  nature: ['nature', 'culture'],
  craft: ['culture', 'heritage'],
};
