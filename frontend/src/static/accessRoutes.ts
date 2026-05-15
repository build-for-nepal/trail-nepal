import { AccessRoute } from '@/types/trek';

export const ACCESS_ROUTES: Record<string, AccessRoute> = {
  'ebc-trek': {
    mode: 'flight',
    from: { name: 'Kathmandu', coordinates: [27.6966, 85.3591] },
    to: { name: 'Lukla', coordinates: [27.6879, 86.7321] }, // from ebc-trek-elevation.json first point
  },
  'gokyo-valley-trek': {
    mode: 'flight',
    from: { name: 'Kathmandu', coordinates: [27.6966, 85.3591] },
    to: { name: 'Lukla', coordinates: [27.6879, 86.7321] },
  },
  'manaslu-circuit': {
    mode: 'jeep',
    from: { name: 'Kathmandu', coordinates: [27.6966, 85.3591] },
    to: { name: 'Soti Khola', coordinates: [28.0484, 84.8143] }, // from manaslu-circuit-elevation.json first point
  },
  'langtang-valley': {
    mode: 'bus',
    from: { name: 'Kathmandu', coordinates: [27.6966, 85.3591] },
    to: { name: 'Syafrubesi', coordinates: [28.1638, 85.3439] }, // from langtang-valley-elevation.json first point
  },
  'abc-trek': {
    mode: 'jeep',
    from: { name: 'Pokhara', coordinates: [28.2096, 83.9856] },
    to: { name: 'Jhinu Danda', coordinates: [28.4063, 83.8218] }, // from abc-trek-elevation.json first point
  },
  'ghorepani-poon-hill-trek': {
    mode: 'jeep',
    from: { name: 'Pokhara', coordinates: [28.2096, 83.9856] },
    to: { name: 'Nayapul', coordinates: [28.3285, 83.6732] }, // trekDetails Day 1 (Tikhedhunga overnight, Nayapul trailhead)
  },
  'mardi-himal-trek': {
    mode: 'jeep',
    from: { name: 'Pokhara', coordinates: [28.2096, 83.9856] },
    to: { name: 'Kande', coordinates: [28.2671, 83.8750] }, // trekDetails Day 1 (Australian Camp overnight, Kande dropoff)
  },
};
