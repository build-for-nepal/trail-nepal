import { useLocalSearchParams } from 'expo-router';

import { TripDetailScreen } from '@/features/trip-detail';

export default function TrekDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <TripDetailScreen type="trek" id={id} />;
}
