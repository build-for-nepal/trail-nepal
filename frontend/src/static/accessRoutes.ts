import { AccessRoute } from '@/types/trek';

export const ACCESS_ROUTES: Record<string, AccessRoute> = {
  'ebc-trek': {
    mode: 'flight',
    from: { name: 'Kathmandu', coordinates: [27.6966, 85.3591] },
    to: { name: 'Lukla', coordinates: [27.6879, 86.7321] },
  },
  'gokyo-valley-trek': {
    mode: 'flight',
    from: { name: 'Kathmandu', coordinates: [27.6966, 85.3591] },
    to: { name: 'Lukla', coordinates: [27.68887, 86.7306] },
  },
  'manaslu-circuit': {
    mode: 'jeep',
    from: { name: 'Kathmandu', coordinates: [27.6966, 85.3591] },
    to: { name: 'Soti Khola', coordinates: [28.0484, 84.8143] },
  },
  'langtang-valley': {
    mode: 'bus',
    from: { name: 'Kathmandu', coordinates: [27.6966, 85.3591] },
    to: { name: 'Syafrubesi', coordinates: [28.1638, 85.3439] },
  },
  'abc-trek': {
    mode: 'jeep',
    from: { name: 'Pokhara', coordinates: [28.2096, 83.9856] },
    to: { name: 'Jhinu Danda', coordinates: [28.4063, 83.8218] },
  },
  'ghorepani-poon-hill-trek': {
    mode: 'jeep',
    from: { name: 'Pokhara', coordinates: [28.2096, 83.9856] },
    to: { name: 'Nayapul', coordinates: [28.29816, 83.76785] },
  },
  'mardi-himal-trek': {
    mode: 'jeep',
    from: { name: 'Pokhara', coordinates: [28.2096, 83.9856] },
    to: { name: 'Kande', coordinates: [28.2923576, 83.8240497] },
  },
  'shey-phoksundo': {
    mode: 'flight',
    from: { name: 'Kathmandu', coordinates: [27.6966, 85.3591] },
    to: { name: 'Nepalgunj', coordinates: [28.05, 81.616667] },
    continuation: {
      mode: 'flight',
      from: { name: 'Nepalgunj', coordinates: [28.05, 81.616667] },
      to: { name: 'Juphal', coordinates: [28.9799, 82.81999] },
    },
  },
};
