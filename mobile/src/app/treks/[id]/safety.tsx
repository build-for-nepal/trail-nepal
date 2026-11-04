import { useLocalSearchParams } from 'expo-router';

import { AltitudeScreen } from '@/features/trip-detail';

export default function TrekSafety() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <AltitudeScreen id={id} />;
}
