import { Stack } from 'expo-router';

// The permission steps. These are not guarded: a visitor who never signs in can
// still be asked for location, and someone who already granted a permission can
// revisit the screen, which then offers Settings instead of the system prompt.
export default function OnboardingLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
