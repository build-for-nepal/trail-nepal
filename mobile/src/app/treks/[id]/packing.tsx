import { useLocalSearchParams } from 'expo-router';

import { PackingScreen } from '@/features/trip-detail';

export default function TrekPacking() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <PackingScreen type="trek" id={id} />;
}
