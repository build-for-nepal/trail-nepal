import { useLocalSearchParams } from 'expo-router';

import { TripTriviaScreen } from '@/features/trip-detail';

export default function TrekTrivia() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <TripTriviaScreen type="trek" id={id} />;
}
