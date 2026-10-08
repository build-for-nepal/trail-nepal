import { useLocalSearchParams } from 'expo-router';

import { TripDetailScreen } from '@/features/trip-detail';

export default function CulturalTourDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <TripDetailScreen type="cultural" id={id} />;
}
