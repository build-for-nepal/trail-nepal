import { useLocalSearchParams } from 'expo-router';

import { TripTriviaScreen } from '@/features/trip-detail';

export default function HikeTrivia() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <TripTriviaScreen type="hike" id={id} />;
}
