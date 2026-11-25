import { router } from 'expo-router';
import { MapPin } from 'lucide-react-native';

import {
  PermissionScreen,
  useLocationPermission,
} from '@/features/permissions';

export default function LocationPermission() {
  const { state, ask, openSettings } = useLocationPermission();

  // Granting and refusing both move on: the permission is a convenience, not a
  // requirement, and the trail maps work without it.
  const next = () => router.replace('/notifications');

  return (
    <PermissionScreen
      icon={MapPin}
      title="Find trails near you"
      body="Trails Nepal uses your location to show where you are on trail maps and to suggest treks nearby. You can change this later."
      blockedBody="Location is turned off for Trails Nepal. You can enable it in Settings; the app works without it."
      state={state}
      onAsk={() => void ask().then(next)}
      onSkip={next}
      onOpenSettings={openSettings}
      skipLabel="Not now"
    />
  );
}
