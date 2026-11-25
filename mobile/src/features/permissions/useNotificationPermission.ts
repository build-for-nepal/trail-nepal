import {
  getPermissionsAsync,
  requestPermissionsAsync,
} from 'expo-notifications';

import { usePermission } from './usePermission';

/**
 * Asks for permission to show notifications. On Android 13+ this is the
 * POST_NOTIFICATIONS runtime permission, which expo-notifications adds to the
 * manifest itself — no plugin entry in app.json is needed for it.
 *
 * This grants permission only. Actually delivering a push would additionally
 * need a device token stored server-side, and the backend has no table for
 * that, so it is out of scope here.
 */
export function useNotificationPermission() {
  return usePermission(getPermissionsAsync, requestPermissionsAsync);
}
