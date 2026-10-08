import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import type {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TRIPS } from '@/features/explore';
import type { TripType } from '@/features/explore';

import { getHeroImage, getTripDetail } from '../data';
import {
  headerStats,
  overviewDescription,
  overviewTitle,
  tripFactRows,
} from '../facts';
import { BackButton } from './BackButton';
import { DetailHero } from './DetailHero';
import { ExpectSection } from './ExpectSection';
import { OverviewSection } from './OverviewSection';
import { TripNotFound } from './TripNotFound';

type TripDetailScreenProps = {
  type: TripType;
  id: string | undefined;
};

export function TripDetailScreen({ type, id }: TripDetailScreenProps) {
  const insets = useSafeAreaInsets();
  const [photoHeight, setPhotoHeight] = useState(0);
  const [overPhoto, setOverPhoto] = useState(true);

  const trip = TRIPS.find((t) => t.id === id && t.type === type);
  const detail = id ? getTripDetail(type, id) : undefined;
  if (!trip || !detail) return <TripNotFound />;

  const onPhotoLayout = (event: LayoutChangeEvent) => {
    setPhotoHeight(event.nativeEvent.layout.height);
  };
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setOverPhoto(event.nativeEvent.contentOffset.y < photoHeight - insets.top);
  };

  return (
    <View className="flex-1 bg-sand">
      <StatusBar style={overPhoto ? 'light' : 'dark'} />

      <ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: insets.bottom + 56 }}
      >
        <DetailHero
          image={getHeroImage(trip.id) ?? trip.image}
          name={detail.name.split(' (')[0]}
          region={detail.region}
          // The card's description is the detail summary, word for word.
          summary={trip.description}
          stats={headerStats(detail)}
          onPhotoLayout={onPhotoLayout}
        />

        <View className="gap-[36px] px-[18px] pt-[36px]">
          <OverviewSection
            title={overviewTitle(detail)}
            description={overviewDescription(detail)}
            overview={detail.overview}
            facts={tripFactRows(detail)}
          />
          <ExpectSection expectations={detail.expectations} />
        </View>
      </ScrollView>

      {/* Past the photo, the status bar sits on sand instead of on the content. */}
      {!overPhoto ? (
        <View
          className="absolute left-0 right-0 top-0 bg-sand"
          style={{ height: insets.top, pointerEvents: 'none' }}
        />
      ) : null}

      <BackButton top={insets.top + 8} />
    </View>
  );
}
