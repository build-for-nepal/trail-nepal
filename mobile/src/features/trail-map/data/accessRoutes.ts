import type { AccessRoute } from '../types';

// Copied from frontend/src/static/accessRoutes.ts. Coordinates are [lat, lng].
const ACCESS_ROUTES: Readonly<Record<string, AccessRoute>> = {
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
  'tilicho-lake-trek': {
    mode: 'jeep',
    from: { name: 'Kathmandu', coordinates: [27.7172, 85.324] },
    to: { name: 'Besisahar', coordinates: [28.2342, 84.3773] },
    continuation: {
      mode: 'jeep',
      from: { name: 'Besisahar', coordinates: [28.2342, 84.3773] },
      to: { name: 'Chame', coordinates: [28.55048, 84.24236] },
    },
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

/** Mardi Himal's trail file runs from the far end, so its destination is the line's first point. */
export const FLAG_AT_START: ReadonlySet<string> = new Set(['mardi-himal-trek']);

export function getAccessRoute(id: string): AccessRoute | undefined {
  return Object.prototype.hasOwnProperty.call(ACCESS_ROUTES, id)
    ? ACCESS_ROUTES[id]
    : undefined;
}
