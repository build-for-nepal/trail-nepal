import { useLocalSearchParams } from 'expo-router';

import { TripMapScreen } from '@/features/trip-detail';

export default function TrekMap() {
  // `day` is a position in the itinerary, for the entry the map opens on.
  const { id, day } = useLocalSearchParams<{ id: string; day?: string }>();
  return <TripMapScreen type="trek" id={id} day={day} />;
}
