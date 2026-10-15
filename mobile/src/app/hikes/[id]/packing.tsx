import { useLocalSearchParams } from 'expo-router';

import { PackingScreen } from '@/features/trip-detail';

export default function HikePacking() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <PackingScreen type="hike" id={id} />;
}
