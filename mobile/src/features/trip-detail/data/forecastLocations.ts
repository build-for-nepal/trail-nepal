import type { ForecastLocation } from '../types';

// Picked by hand from the coordinates in frontend/src/static/*, in route order. The web
// derives its list from every itinerary stop instead, and pairs a day's high point with the
// coordinates of where it ends (EBC day 9 is Kala Patthar's 5,545 m at Pheriche), so a
// trek here lists its overnight stops with each stop's own height. Hikes keep the start and
// the high point or finish, and tours one place per town: the stops in between sit a few km
// apart, closer than Open-Meteo's grid, and would show the same forecast.
//
// Trek and hike points name the web itinerary entry they come from. Only the web's cultural
// sites carry an OSM id, and those are copied as they are.
const FORECAST_LOCATIONS: Readonly<
  Record<string, readonly ForecastLocation[]>
> = {
  'ebc-trek': [
    // Day 11
    { label: 'Lukla', coordinates: [27.686, 86.73], elevationM: 2860 },
    // Day 01
    { label: 'Phakding', coordinates: [27.737, 86.712], elevationM: 2610 },
    // Day 02
    {
      label: 'Namche Bazaar',
      coordinates: [27.805068, 86.7105936],
      elevationM: 3440,
    },
    // Day 04
    {
      label: 'Tengboche',
      coordinates: [27.8352264, 86.7641614],
      elevationM: 3860,
    },
    // Day 05
    {
      label: 'Dingboche',
      coordinates: [27.8873288, 86.8259632],
      elevationM: 4410,
    },
    // Day 07
    {
      label: 'Lobuche',
      coordinates: [27.9477818, 86.8105368],
      elevationM: 4940,
    },
    // Day 08
    {
      label: 'Everest Base Camp',
      coordinates: [28.0029111, 86.855732],
      elevationM: 5364,
      isDefault: true,
    },
    // Day 09. The day's 5,545 m is Kala Patthar; its note gives Pheriche's height.
    { label: 'Pheriche', coordinates: [27.893, 86.818], elevationM: 4371 },
  ],
  'manaslu-circuit': [
    // Day 01
    {
      label: 'Machha Khola',
      coordinates: [28.22931, 84.87377],
      elevationM: 930,
    },
    // Day 02
    { label: 'Jagat', coordinates: [28.35141, 84.89586], elevationM: 1340 },
    // Day 04
    { label: 'Namrung', coordinates: [28.54506, 84.76788], elevationM: 2630 },
    // Day 06
    {
      label: 'Samagaon',
      coordinates: [28.58467, 84.64404],
      elevationM: 3530,
    },
    // Day 08
    { label: 'Samdo', coordinates: [28.65087, 84.63414], elevationM: 3860 },
    // Day 09. Larkya La has no coordinates in the web data, so its base camp stands in.
    {
      label: 'Dharamsala',
      coordinates: [28.65892, 84.58443],
      elevationM: 4460,
      isDefault: true,
    },
    // Day 10. The day's 5,106 m is Larkya La, and the web gives no height for Bimthang.
    { label: 'Bimthang', coordinates: [28.63384, 84.47129] },
    // Day 11
    { label: 'Tilije', coordinates: [28.54519, 84.38119], elevationM: 2300 },
  ],
  'langtang-valley': [
    // Day 01
    {
      label: 'Syabrubesi',
      coordinates: [28.1657291, 85.3418267],
      elevationM: 1500,
    },
    // Day 02
    {
      label: 'Lama Hotel',
      coordinates: [28.1612117, 85.4296495],
      elevationM: 2470,
    },
    // Day 03
    {
      label: 'Langtang Village',
      coordinates: [28.2157142, 85.5030007],
      elevationM: 3430,
    },
    // Day 04. Day 05's 4,773 m is Kyanjin Ri, a day hike from here.
    {
      label: 'Kyanjin Gompa',
      coordinates: [28.2124247, 85.5672161],
      elevationM: 3870,
      isDefault: true,
    },
  ],
  'abc-trek': [
    // Day 01
    {
      label: 'Chhomrong',
      coordinates: [28.4200417, 83.8176077],
      elevationM: 2170,
    },
    // Day 02
    {
      label: 'Dovan',
      coordinates: [28.4697078, 83.8694284],
      elevationM: 2600,
    },
    // Day 03
    { label: 'Deurali', coordinates: [28.4933, 83.893], elevationM: 3200 },
    // Day 04
    {
      label: 'Machhapuchhre Base Camp',
      coordinates: [28.5132035, 83.9060408],
      elevationM: 3700,
    },
    // Day 05
    {
      label: 'Annapurna Base Camp',
      coordinates: [28.5308115, 83.8777275],
      elevationM: 4130,
      isDefault: true,
    },
    // Day 06
    { label: 'Bamboo', coordinates: [28.457, 83.8569], elevationM: 2310 },
    // Day 07
    {
      label: 'Jhinu Danda',
      coordinates: [28.4096, 83.8241],
      elevationM: 1780,
    },
  ],
  'gokyo-valley-trek': [
    // Day 10
    { label: 'Lukla', coordinates: [27.6868, 86.7314], elevationM: 2860 },
    // Day 01
    {
      label: 'Phakding',
      coordinates: [27.73926, 86.71228],
      elevationM: 2610,
    },
    // Day 02
    {
      label: 'Namche Bazaar',
      coordinates: [27.80231, 86.71119],
      elevationM: 3440,
    },
    // Day 04
    { label: 'Dole', coordinates: [27.86848, 86.74148], elevationM: 4038 },
    // Day 05
    {
      label: 'Machhermo',
      coordinates: [27.90763, 86.7215],
      elevationM: 4470,
    },
    // Day 06. Day 07's 5,357 m is Gokyo Ri, climbed from here.
    {
      label: 'Gokyo',
      coordinates: [27.95409, 86.69459],
      elevationM: 4750,
      isDefault: true,
    },
  ],
  'ghorepani-poon-hill-trek': [
    // Day 01. The day's 1,960 m is Ulleri's, where it ends.
    { label: 'Ulleri', coordinates: [28.3766, 83.7164], elevationM: 1960 },
    // Day 02. Poon Hill has no coordinates in the web data, and is a short climb from here.
    {
      label: 'Ghorepani',
      coordinates: [28.4006, 83.6997],
      elevationM: 2860,
      isDefault: true,
    },
    // Day 03. The day's 3,210 m is Poon Hill; its description gives Tadapani's height.
    {
      label: 'Tadapani',
      coordinates: [28.39652, 83.76527],
      elevationM: 2630,
    },
    // Day 04
    {
      label: 'Ghandruk',
      coordinates: [28.37686, 83.80779],
      elevationM: 1940,
    },
  ],
  'mardi-himal-trek': [
    // Day 01
    {
      label: 'Forest Camp',
      coordinates: [28.3593, 83.8449],
      elevationM: 2550,
    },
    // Day 02
    { label: 'Badal Danda', coordinates: [28.415, 83.8545], elevationM: 3210 },
    // Day 03
    { label: 'High Camp', coordinates: [28.4329, 83.8668], elevationM: 3580 },
    // Day 04
    {
      label: 'Mardi Himal Base Camp',
      coordinates: [28.46, 83.895],
      elevationM: 4500,
      isDefault: true,
    },
    // Day 05
    { label: 'Low Camp', coordinates: [28.3848, 83.8747], elevationM: 2970 },
  ],
  'shey-phoksundo': [
    // Day 07. Day 01's point is this airstrip too, not Dunai, so it is left out.
    {
      label: 'Juphal',
      coordinates: [28.985337, 82.819138],
      elevationM: 2475,
    },
    // Day 02
    {
      label: 'Chhepka',
      coordinates: [29.00037, 82.91257],
      elevationM: 2670,
    },
    // Day 03
    {
      label: 'Jharana Hotel',
      coordinates: [29.07787, 82.88615],
      elevationM: 3110,
    },
    // Day 04
    {
      label: 'Ringmo Village',
      coordinates: [29.14148, 82.91075],
      elevationM: 3660,
      isDefault: true,
    },
  ],
  'tilicho-lake-trek': [
    // Day 01
    {
      label: 'Besisahar',
      coordinates: [28.2342, 84.3773],
      elevationM: 760,
    },
    // Day 02
    { label: 'Chame', coordinates: [28.55048, 84.24236], elevationM: 2670 },
    // Day 03
    {
      label: 'Upper Pisang',
      coordinates: [28.63394, 84.11001],
      elevationM: 3300,
    },
    // Day 04
    { label: 'Manang', coordinates: [28.66668, 84.01975], elevationM: 3540 },
    // Day 06
    {
      label: 'Shree Kharka',
      coordinates: [28.6684, 83.97698],
      elevationM: 4050,
    },
    // Day 07
    {
      label: 'Tilicho Base Camp',
      coordinates: [28.67842, 83.95835],
      elevationM: 4150,
    },
    // Day 08
    {
      label: 'Tilicho Lake',
      coordinates: [28.68471, 83.86579],
      elevationM: 4919,
      isDefault: true,
    },
  ],

  'nagarkot-changunarayan': [
    // Section 01
    {
      label: 'Nagarkot',
      coordinates: [27.71579, 85.51927],
      isDefault: true,
    },
    // Section 05
    { label: 'Changunarayan', coordinates: [27.71625, 85.42798] },
  ],
  'dhulikhel-namobuddha': [
    // Section 01
    { label: 'Dhulikhel', coordinates: [27.61877, 85.55279] },
    // Section 05
    {
      label: 'Namobuddha',
      coordinates: [27.57292, 85.58585],
      isDefault: true,
    },
  ],
  'godawari-phulchoki': [
    // Section 01
    { label: 'Godawari', coordinates: [27.59391, 85.38212] },
    // Section 06
    {
      label: 'Phulchoki Summit',
      coordinates: [27.57128, 85.40657],
      isDefault: true,
    },
  ],

  'lumbini-tour': [
    {
      label: 'Lumbini',
      // OSM way/343151593 (Mayadevi Temple)
      coordinates: [27.4696086, 83.2758312],
      isDefault: true,
    },
    {
      label: 'Tilaurakot',
      // OSM relation/19990298 (Kapilavastu (I) Tilaurakot)
      coordinates: [27.5758757, 83.0548105],
    },
  ],
  'kathmandu-valley-heritage-tour': [
    {
      label: 'Kathmandu',
      // OSM relation/21291455 (highway=pedestrian, "वसन्तपुर दरबार क्षेत्र")
      coordinates: [27.7042916, 85.3065551],
      isDefault: true,
    },
    {
      label: 'Patan',
      // OSM relation/4557971 (highway=pedestrian)
      coordinates: [27.6734454, 85.325035],
    },
    {
      label: 'Bhaktapur',
      // OSM way/1192827651 (place=square)
      coordinates: [27.672078, 85.4281306],
    },
  ],
  'bandipur-hill-town': [
    {
      label: 'Bandipur',
      // OSM way/404328703 (highway=pedestrian, the main bazaar street)
      coordinates: [27.9372428, 84.405208],
      isDefault: true,
    },
  ],
};

export function getForecastLocations(
  id: string,
): readonly ForecastLocation[] | undefined {
  return Object.prototype.hasOwnProperty.call(FORECAST_LOCATIONS, id)
    ? FORECAST_LOCATIONS[id]
    : undefined;
}
