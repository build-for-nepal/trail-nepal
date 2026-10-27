import { useState } from 'react';
import { View } from 'react-native';

import type { TripType } from '@/features/explore';
import { TrailMap } from '@/features/trail-map/components/TrailMap';
import type { DayFocus, TrailMapData } from '@/features/trail-map/types';

import { getTripDetail } from '../data';
import { tripMapData } from '../tripMap';
import { HeaderBar } from './CompactHeader';
import { TripNotFound } from './TripNotFound';

type TripMapScreenProps = {
  type: TripType;
  id: string | undefined;
  /** The link's `day`: a position in the itinerary, for the entry to open on. */
  day: string | undefined;
};

/** The entry `day` names, when it is one the map can show. */
function openingFocus(
  data: TrailMapData | undefined,
  day: string | undefined,
): DayFocus | null {
  if (!data || day === undefined || !/^\d+$/.test(day)) return null;
  const index = Number(day);
  return data.days[index] ? { index, nonce: 0 } : null;
}

/** A trip's map: a trek's or hike's route with a pin per day or section, or a tour's sites. */
export function TripMapScreen({ type, id, day }: TripMapScreenProps) {
  const detail = id ? getTripDetail(type, id) : undefined;
  const data = detail && id ? tripMapData(detail, id) : undefined;
  const [focus, setFocus] = useState(() => openingFocus(data, day));
  if (!detail || !data) return <TripNotFound />;

  return (
    <View className="flex-1 bg-sand">
      <HeaderBar title={detail.name.split(' (')[0]} />
      <TrailMap
        data={data}
        focus={focus}
        onPinPress={(index) =>
          setFocus((current) => ({
            index,
            nonce: (current?.nonce ?? 0) + 1,
          }))
        }
      />
    </View>
  );
}
