import type { ImageRequireSource } from 'react-native';

// Copied from frontend/src/static/altitudesickness.ts, word for word. Its symptom icons are
// PNGs wrapped in SVG files; they are bundled here as the PNGs themselves, where three pairs
// share one picture. Each contact's `contact` field, always empty and unused, is left out.

/** A symptom's icon, by the web's file name. */
export type SymptomIcon =
  | 'ams-breathless'
  | 'ams-dizziness'
  | 'ams-fatigue'
  | 'ams-headache'
  | 'ams-insomnia'
  | 'ams-nausea'
  | 'ams-noappetite'
  | 'ams-rapidheartbeat'
  | 'hace-alterbehaviour'
  | 'hace-coma'
  | 'hace-confusion'
  | 'hace-coordination'
  | 'hace-drowsiness'
  | 'hace-severeheadache'
  | 'hace-stupor'
  | 'hace-unsteadywalk'
  | 'hape-bluelips'
  | 'hape-breathless'
  | 'hape-breathlessatrest'
  | 'hape-chestcongestion'
  | 'hape-drycough'
  | 'hape-energyless'
  | 'hape-rapidbreating'
  | 'hape-rapidheartbeat';

export type AltitudeIllness = {
  /** "What it is?" */
  description: string;
  symptoms: readonly { name: string; icon: SymptomIcon }[];
  /** Each level's name and what to do, mildest first. */
  severity: Readonly<Record<string, string>>;
  prevention_tips: readonly string[];
};

export type Contact = {
  name: string;
  /** An email address, or empty. */
  detail: string;
  address: string;
  /** One or more numbers, comma-separated, as the web lists them. */
  phone: string;
};

/** The two buttons above the contacts, from ContactInfoSidebar.tsx. */
export const EMERGENCY_CALLS = [
  { kind: 'emergency', label: 'Call Emergency (100)', phone: '100' },
  {
    kind: 'helicopter',
    label: 'Request Helicopter Rescue',
    phone: '01-4112296',
  },
] as const;

export const HELICOPTER_RESCUE: readonly Contact[] = [
  {
    name: 'Heli Everest Service',
    detail: 'info@helieverest.com',
    address: 'Dabur Building (4th floor), Tinkune',
    phone: '01-4112353, 01-4112414, 9801066647, 9801088812',
  },
  {
    name: 'Mountain Helicopters',
    detail: 'info@mountainhelicoptersnepal.com',
    address: 'Sinamangal, Kathmandu',
    phone: '01-4111031, 9712082949',
  },
  {
    name: 'Altitude Air',
    detail: 'reservation@altitudeheli.com',
    address: 'Sinamangal, Kathmandu',
    phone: '01-4113352, 01-4116665, 01-4116666',
  },
  {
    name: 'Simrik Air',
    detail: 'info@simrikair.com.np',
    address: 'Puspa Marg, Subidhanagar, Tinkune',
    phone: '01-4155341, 01-4155342, 01-4155343, 9851010695',
  },
  {
    name: 'Fishtail Air',
    detail: 'operation@fishtailair.com, sales@fishtailair.com',
    address: 'Sinamangal, Kathmandu',
    phone: '01-4111815, 01-4111816, 01-4111802, 9802302614, 980230261',
  },
  {
    name: 'Air Dynasty',
    detail: 'booking@airdynastyheli.com',
    address: 'Sinamangal, Kathmandu',
    phone: '9801089843, 01-4497418, 01-4468802',
  },
  {
    name: 'Shree Airlines',
    detail: 'contact@shreeairlines.com',
    address: 'Sinamangal, Kathmandu',
    phone: '01-4598200, 01-4596700',
  },
  {
    name: 'Helicopter Rescue',
    detail: '',
    address: 'Naxal',
    phone: '01-4418824, 9851035514',
  },
];

export const SPECIALIST_HOSPITALS: readonly Contact[] = [
  {
    name: 'CIWEC Hospital',
    detail: 'info@ciwec-clinic.com',
    address: 'Kapurdhara Marg',
    phone: '01-4524111, 01-4524242, 01-4535232',
  },
  {
    name: 'Star Hospital',
    detail: 'info@starhospitallimited.com',
    address: 'Sanepa Height-2',
    phone: '01-5552227, 01-5550198, 01-5540478',
  },
  {
    name: 'Sumeru Hospital',
    detail: 'info@sumeruhospital.org.np',
    address: 'Dhapakhel',
    phone: '01-5275377, 01-5275088, 01-5275099, 9801203070',
  },
  {
    name: 'Alka Hospital',
    detail: 'info@alkahospital.com',
    address: 'Jawalakhel',
    phone: '01-5970795, 01-5455555',
  },
  {
    name: 'Norvic Hospital',
    detail: 'info@norvichospital.com',
    address: 'Thapathali',
    phone: '01-5970032',
  },
  {
    name: 'Vayodha Hospital',
    detail: 'info@vayodhahospitals.com',
    address: 'Balkhu',
    phone: '01-4281666, 01-5385013, 9801019576',
  },
];

export const ALTITUDE_ILLNESSES: Readonly<Record<string, AltitudeIllness>> = {
  'Acute Mountain Sickness (AMS)': {
    description:
      "Acute Mountain Sickness (AMS), often called High Altitude Sickness, occurs when your body doesn't have enough time to adjust to lower oxygen levels at higher elevations. It is a natural physiological response, but one that demands immediate attention and respect. Think of it as your body's signal to slow down and breathe.",
    symptoms: [
      { name: 'Headache', icon: 'ams-headache' },
      { name: 'Rapid heartbeat', icon: 'ams-rapidheartbeat' },
      { name: 'Breathless', icon: 'ams-breathless' },
      { name: 'Dizziness', icon: 'ams-dizziness' },
      { name: 'Insomnia', icon: 'ams-insomnia' },
      { name: 'Fatigue', icon: 'ams-fatigue' },
      { name: 'No appetite', icon: 'ams-noappetite' },
      { name: 'Nausea', icon: 'ams-nausea' },
    ],
    severity: {
      mild: 'Rest at current altitude. Do not ascend further until symptoms clear.',
      moderate:
        'Immediate descent required (300-500m). Use oxygen if available.',
      severe:
        'Life-threatening. Immediate emergency evacuation via helicopter.',
    },
    prevention_tips: [
      'Ascend slowly (no more than 300-500m per day above 3,000m)',
      'Stay hydrated (3-4 liters per day)',
      'Avoid alcohol and sleeping pills',
      'Eat light, high-carb meals',
      'Listen to your body and rest when needed',
    ],
  },
  'High-Altitude Pulmonary Edema (HAPE)': {
    description:
      'High-altitude pulmonary edema (HAPE) is a dangerous build-up of fluid in the lungs caused by altitude-related low oxygen, not by heart failure. It usually appears 24-96 hours after a rapid ascent, often above about 2,400 m, and it can occur with or without AMS. Early diagnosis matters because HAPE can progress quickly and may be more rapidly fatal than HACE.',
    symptoms: [
      { name: 'Chest congestion', icon: 'hape-chestcongestion' },
      { name: 'Rapid heartbeat', icon: 'hape-rapidheartbeat' },
      { name: 'Breathless', icon: 'hape-breathless' },
      { name: 'Dry Cough', icon: 'hape-drycough' },
      { name: 'Blue Lips', icon: 'hape-bluelips' },
      { name: 'Energy less', icon: 'hape-energyless' },
      { name: 'Rapid breathing', icon: 'hape-rapidbreating' },
      { name: 'Breathless at rest', icon: 'hape-breathlessatrest' },
    ],
    severity: {
      'Possible HAPE':
        'Cough, chest tightness, unusual breathlessness on exertion, or a sudden drop in walking performance after ascent.',
      'Probable HAPE':
        'Breathlessness with mild activity, marked fatigue, rapid breathing, crackles/rales, or clearly reduced oxygen saturation compared with others at the same altitude.',
      'Severe HAPE':
        'Breathlessness at rest, respiratory distress, cyanosis, or pink/bloody sputum.',
    },
    prevention_tips: [
      'Ascend gradually.',
      'Once above 3,000 m, increase sleeping altitude by no more than about 500 m per night.',
      'Add an extra acclimatization night for every 1,000 m of sleeping-altitude gain.',
      'Avoid overexertion during the first 48 hours at altitude.',
      'Known HAPE-prone trekkers may need preventive medication from a clinician familiar with altitude medicine.',
    ],
  },
  'High-Altitude Cerebral Edema (HACE)': {
    description:
      'High-altitude cerebral edema (HACE) is a severe altitude illness in which the brain swells. It is generally considered the end-stage of AMS and is defined by neurologic symptoms, especially altered mental status and ataxia. It is rare, especially below about 4,300 m, but once it starts it can deteriorate rapidly to coma within hours if untreated.',
    symptoms: [
      { name: 'Severe Headache', icon: 'hace-severeheadache' },
      { name: 'Drowsiness', icon: 'hace-drowsiness' },
      { name: 'Confusion', icon: 'hace-confusion' },
      { name: 'Loss of coordination', icon: 'hace-coordination' },
      { name: 'Unsteady walking', icon: 'hace-unsteadywalk' },
      { name: 'Altered behavior', icon: 'hace-alterbehaviour' },
      { name: 'Stupor', icon: 'hace-stupor' },
      { name: 'Coma in late disease', icon: 'hace-coma' },
    ],
    severity: {
      'Possible HACE':
        'A trekker at altitude develops a severe headache plus confusion, unusual behavior, or clumsy walking. Action: Treat as HACE until proven otherwise. No further ascent. Start descent urgently.',
      'Probable HACE':
        'Clear ataxia, altered mental status, marked drowsiness, or difficulty walking normally. Action: Immediate descent, oxygen if available, and dexamethasone if trained and equipped to use it.',
      'Severe HACE':
        'Stupor, inability to walk, or coma. Action: This is a life-threatening emergency. Immediate evacuation is required. If descent is not feasible right away, oxygen and a portable hyperbaric device can be lifesaving.',
    },
    prevention_tips: [
      'Ascend gradually and avoid going too high too fast.',
      'Once above 3,000 m, limit sleeping-altitude gain to about 500 m per night.',
      'Add an acclimatization day for every 1,000 m of sleeping-altitude gain.',
      'Do not ascend with worsening AMS symptoms.',
      'Dexamethasone is used mainly for treatment or emergency backup, while acetazolamide is preferred for prevention of AMS during ascent.',
    ],
  },
};

/** Each symptom's picture, bundled at the size the web shows it. */
export const SYMPTOM_ICONS: Readonly<Record<SymptomIcon, ImageRequireSource>> =
  {
    'ams-breathless': require('../../../../assets/images/altitude/breathless.png'),
    'ams-dizziness': require('../../../../assets/images/altitude/ams-dizziness.png'),
    'ams-fatigue': require('../../../../assets/images/altitude/fatigue.png'),
    'ams-headache': require('../../../../assets/images/altitude/ams-headache.png'),
    'ams-insomnia': require('../../../../assets/images/altitude/ams-insomnia.png'),
    'ams-nausea': require('../../../../assets/images/altitude/ams-nausea.png'),
    'ams-noappetite': require('../../../../assets/images/altitude/ams-noappetite.png'),
    'ams-rapidheartbeat': require('../../../../assets/images/altitude/rapid-heartbeat.png'),
    'hace-alterbehaviour': require('../../../../assets/images/altitude/hace-alterbehaviour.png'),
    'hace-coma': require('../../../../assets/images/altitude/hace-coma.png'),
    'hace-confusion': require('../../../../assets/images/altitude/hace-confusion.png'),
    'hace-coordination': require('../../../../assets/images/altitude/hace-coordination.png'),
    'hace-drowsiness': require('../../../../assets/images/altitude/hace-drowsiness.png'),
    'hace-severeheadache': require('../../../../assets/images/altitude/hace-severeheadache.png'),
    'hace-stupor': require('../../../../assets/images/altitude/hace-stupor.png'),
    'hace-unsteadywalk': require('../../../../assets/images/altitude/hace-unsteadywalk.png'),
    'hape-bluelips': require('../../../../assets/images/altitude/hape-bluelips.png'),
    'hape-breathless': require('../../../../assets/images/altitude/breathless.png'),
    'hape-breathlessatrest': require('../../../../assets/images/altitude/hape-breathlessatrest.png'),
    'hape-chestcongestion': require('../../../../assets/images/altitude/hape-chestcongestion.png'),
    'hape-drycough': require('../../../../assets/images/altitude/hape-drycough.png'),
    'hape-energyless': require('../../../../assets/images/altitude/fatigue.png'),
    'hape-rapidbreating': require('../../../../assets/images/altitude/hape-rapidbreating.png'),
    'hape-rapidheartbeat': require('../../../../assets/images/altitude/rapid-heartbeat.png'),
  };
