import amsHeadache from 'src/assets/altitudesickness/ams-headache.svg';
import amsRapidHeartBeat from 'src/assets/altitudesickness/ams-rapidheartbeat.svg';
import amsBreathless from 'src/assets/altitudesickness/ams-breathless.svg';
import amsDizziness from 'src/assets/altitudesickness/ams-dizziness.svg';
import amsInsomnia from 'src/assets/altitudesickness/ams-insomnia.svg';
import amsFatigue from 'src/assets/altitudesickness/ams-fatigue.svg';
import amsNoAppetite from 'src/assets/altitudesickness/ams-noappetite.svg';
import amsNausea from 'src/assets/altitudesickness/ams-nausea.svg';

// hape
import hapeChestCongestion from 'src/assets/altitudesickness/hape-chestcongestion.svg';
import hapeRapidHeartBeating from 'src/assets/altitudesickness/hape-rapidheartbeat.svg';
import hapeBreathless from 'src/assets/altitudesickness/hape-breathless.svg';
import hapeDryCough from 'src/assets/altitudesickness/hape-drycough.svg';
import hapeBlueLips from 'src/assets/altitudesickness/hape-bluelips.svg';
import hapeEnergyLess from 'src/assets/altitudesickness/hape-energyless.svg';
import hapeRapidBreathing from 'src/assets/altitudesickness/hape-rapidbreating.svg';
import hapeBreathLessAtRest from 'src/assets/altitudesickness/hape-breathlessatrest.svg';

// hace
import haceSevereHeadache from 'src/assets/altitudesickness/hace-severeheadache.svg';
import haceDrowsiness from 'src/assets/altitudesickness/hace-drowsiness.svg';
import haceConfusion from 'src/assets/altitudesickness/hace-confusion.svg';
import haceCoordination from 'src/assets/altitudesickness/hace-coordination.svg';
import haceUnsteadyWalk from 'src/assets/altitudesickness/hace-unsteadywalk.svg';
import haceAlterBehaviour from 'src/assets/altitudesickness/hace-alterbehaviour.svg';
import haceStupor from 'src/assets/altitudesickness/hace-stupor.svg';
import haceComa from 'src/assets/altitudesickness/hace-coma.svg';

export const resuceHelicoptersData = [
  {
    name: 'Heli Everest Service',
    detail: 'info@heli.everest',
    address: 'Dabur Building (4th floor)',
    phone: '4112299, 9851111187',
    contact: 'Mingma Ji',
  },
  {
    name: 'Mountain Helicopter',
    detail: 'mountainheli@wlink.com.np',
    address: '',
    phone: '4111031, 9851037407',
    contact: 'Deepak Pun',
  },
  {
    name: 'Altitude Air',
    detail: 'altitude@altitudeheli.com',
    address: '',
    phone: '4116665',
    contact: '',
  },
  {
    name: 'Simrik Air',
    detail: 'info@simrikair.com.np',
    address: '',
    phone: '4155341, 9851010696',
    contact: 'Yogesh Ji',
  },
  {
    name: 'Fishtail Air Pvt Ltd',
    detail: '',
    address: '',
    phone: '4112206(17, 30), 4112463(64, 65, 66, 67), 9751000120, 9851026185',
    contact: 'Pradeep Gautam',
  },
   {
    name: 'Air Dynasty',
    detail: 'info@airdynasty.com',
    address: 'Sinamangal',
    phone: '4497418, 4468802, 9851023104',
    contact: 'Pemba Sherpa',
  },
  {
    name: 'Shree Airlines Pvt. Ltd',
    detail: 'shreeair@shreeair.com',
    address: 'Tripureshwor',
    phone: '4222948',
    contact: '',
  },
  {
    name: 'Helicopter Rescue Service',
    detail: '',
    address: 'Naxal',
    phone: '4418824, 9851035514',
    contact: 'Rekesh Bade',
  },
  {
    name: 'Sumeru Hospital',
    detail: 'sumeruhospital@sumerugroup.org.np',
    address: 'Dhapakhel',
    phone: '5003377, 5003388, 5003399, 9802003377, 9802003388',
    contact: '',
  },
  {
    name: 'Alka Hospital',
    detail: 'info@alkahospital.com',
    address: 'Jawalakhel',
    phone: '5555555, 5544477, 5535147',
    contact: '',
  },
  {
    name: 'Norvic Hospital',
    detail: 'info@norvichospital.com',
    address: 'Thapathali',
    phone: '4258554',
    contact: '',
  },
  {
    name: 'Vayodha Hospital',
    detail: 'info@vayodha.wlink.com.np',
    address: 'Balkhu',
    phone: '2111333, 4281666, 4286428',
    contact: '',
  },
];

export const contactHospitalsData = [
  {
    name: 'CIWEC Hospital',
    detail: '',
    address: 'Lazimpat',
    phone: '4424111 (0), 4435232, 4413163 ',
    contact: 'Subash Dawadi',
  },
  { name: 'Star Hospital',
    detail: 'info@starhospital.com.np',
    address: 'Sanepa Height',
    phone: '5550197/8, 5540478',
    contact: '',
   },
];

export const altitudeSicknessData = {
  'Acute Mountain Sickness (AMS)': {
    description:
      "Acute Mountain Sickness (AMS), often called High Altitude Sickness, occurs when your body doesn't have enough time to adjust to lower oxygen levels at higher elevations. It is a natural physiological response, but one that demands immediate attention and respect. Think of it as your body's signal to slow down and breathe.",
    symptoms: [
      { name: 'Headache', icon: amsHeadache },
      { name: 'Rapid heartbeat', icon: amsRapidHeartBeat },
      { name: 'Breathless', icon: amsBreathless },
      { name: 'Dizziness', icon: amsDizziness },
      { name: 'Insomnia', icon: amsInsomnia },
      { name: 'Fatigue', icon: amsFatigue },
      { name: 'No appetite', icon: amsNoAppetite },
      { name: 'Nausea', icon: amsNausea },
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
      { name: 'Chest congestion', icon: hapeChestCongestion },
      { name: 'Rapid heartbeat', icon: hapeRapidHeartBeating },
      { name: 'Breathless', icon: hapeBreathless },
      { name: 'Dry Cough', icon: hapeDryCough },
      { name: 'Blue Lips', icon: hapeBlueLips },
      { name: 'Energy less', icon: hapeEnergyLess },
      { name: 'Rapid breathing', icon: hapeRapidBreathing },
      { name: 'Breathless at rest', icon: hapeBreathLessAtRest },
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
      { name: 'Severe Headache', icon: haceSevereHeadache },
      { name: 'Drowsiness', icon: haceDrowsiness },
      { name: 'Confusion', icon: haceConfusion },
      { name: 'Loss of coordination', icon: haceCoordination },
      { name: 'Unsteady walking', icon: haceUnsteadyWalk },
      { name: 'Altered behavior', icon: haceAlterBehaviour },
      { name: 'Stupor', icon: haceStupor },
      { name: 'Coma in late disease', icon: haceComa },
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
