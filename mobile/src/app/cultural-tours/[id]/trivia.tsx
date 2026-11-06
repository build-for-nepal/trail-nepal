import { useLocalSearchParams } from 'expo-router';

import { TripTriviaScreen } from '@/features/trip-detail';

export default function CulturalTourTrivia() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <TripTriviaScreen type="cultural" id={id} />;
}
