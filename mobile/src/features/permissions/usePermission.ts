import { useCallback, useEffect, useState } from 'react';
import { Linking } from 'react-native';

/**
 * The part of expo's PermissionResponse this needs. expo-location and
 * expo-notifications both return the same shape (see
 * expo-modules-core/PermissionsInterface), so one hook serves both.
 */
type PermissionResponse = {
  status: string;
  granted: boolean;
  canAskAgain: boolean;
};

export type PermissionState =
  /** The current status has not been read back from the OS yet. */
  | 'checking'
  /** Never asked, so the system prompt is still available. */
  | 'undetermined'
  | 'granted'
  /** Refused, but the system will still show the prompt again. */
  | 'denied'
  /** Refused for good — only the Settings app can change it now. */
  | 'blocked';

/**
 * `denied` is mostly an Android state: iOS sets `canAskAgain` to false after the
 * very first refusal, so there it goes straight to `blocked`. Android keeps the
 * prompt available until the user picks "don't ask again".
 */
function toState(response: PermissionResponse): PermissionState {
  if (response.granted) return 'granted';
  if (response.status === 'undetermined') return 'undetermined';
  return response.canAskAgain ? 'denied' : 'blocked';
}

export function usePermission(
  get: () => Promise<PermissionResponse>,
  request: () => Promise<PermissionResponse>,
): {
  state: PermissionState;
  /** Shows the system prompt and resolves to the resulting state. */
  ask: () => Promise<PermissionState>;
  openSettings: () => void;
} {
  const [state, setState] = useState<PermissionState>('checking');

  useEffect(() => {
    let active = true;

    get()
      .then((response) => {
        if (active) setState(toState(response));
      })
      // Reading the status failed, which is not the same as being refused.
      // Fall back to the state that still offers the button.
      .catch(() => {
        if (active) setState('undetermined');
      });

    return () => {
      active = false;
    };
  }, [get]);

  const ask = useCallback(async () => {
    try {
      const next = toState(await request());
      setState(next);
      return next;
    } catch {
      // The prompt could not be shown at all; Settings is the only way left.
      setState('blocked');
      return 'blocked' as PermissionState;
    }
  }, [request]);

  return { state, ask, openSettings: () => void Linking.openSettings() };
}
