import { useLocalSearchParams } from 'expo-router';

import { TripDetailScreen } from '@/features/trip-detail';

export default function HikeDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <TripDetailScreen type="hike" id={id} />;
}
