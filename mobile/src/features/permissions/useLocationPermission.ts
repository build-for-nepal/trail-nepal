import {
  getForegroundPermissionsAsync,
  requestForegroundPermissionsAsync,
} from 'expo-location';

import { usePermission } from './usePermission';

/**
 * Foreground location only. Background location needs a second, separately
 * justified permission and the `isAndroidBackgroundLocationEnabled` plugin
 * option, and nothing in the app tracks position while closed.
 */
export function useLocationPermission() {
  return usePermission(
    getForegroundPermissionsAsync,
    requestForegroundPermissionsAsync,
  );
}
