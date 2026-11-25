import { router } from 'expo-router';
import { Bell } from 'lucide-react-native';

import {
  PermissionScreen,
  useNotificationPermission,
} from '@/features/permissions';

export default function NotificationPermission() {
  const { state, ask, openSettings } = useNotificationPermission();

  // Last step of onboarding, so this lands on Explore. `replace`, not `push`,
  // so the back gesture does not walk back into the permission screens.
  const next = () => router.replace('/');

  return (
    <PermissionScreen
      icon={Bell}
      title="Stay up to date"
      body="Get notified about trail conditions and updates to trips you have saved. You can change this later."
      blockedBody="Notifications are turned off for Trails Nepal. You can enable them in Settings."
      state={state}
      onAsk={() => void ask().then(next)}
      onSkip={next}
      skipLabel="Maybe later"
      onOpenSettings={openSettings}
    />
  );
}
