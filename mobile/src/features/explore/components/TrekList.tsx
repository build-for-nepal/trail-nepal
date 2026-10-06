import { FlatList } from 'react-native';

import { TRIPS } from '../trips';
import type { TripType } from '../types';
import { TrekCard } from './TrekCard';

type TrekListProps = {
  type: TripType;
};

export function TrekList({ type }: TrekListProps) {
  return (
    <FlatList
      // A new list per type, so switching type starts at the top.
      key={type}
      data={TRIPS.filter((trip) => trip.type === type)}
      keyExtractor={(trip) => trip.id}
      renderItem={({ item }) => <TrekCard trip={item} />}
      contentContainerClassName="gap-[24px] px-[18px] pb-[24px] pt-[16px]"
    />
  );
}
