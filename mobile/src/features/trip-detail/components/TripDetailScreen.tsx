import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import type {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TRIPS } from '@/features/explore';
import type { TripType } from '@/features/explore';

import {
  getForecastLocations,
  getGalleryImages,
  getHeroImage,
  getTripDetail,
} from '../data';
import {
  headerStats,
  overviewDescription,
  overviewTitle,
  tripFactRows,
} from '../facts';
import { BackButton } from './BackButton';
import { BAR_HEIGHT, CompactHeader } from './CompactHeader';
import { DetailHero } from './DetailHero';
import { ExpectSection } from './ExpectSection';
import { GallerySection } from './GallerySection';
import { ItinerarySection } from './ItinerarySection';
import { OverviewSection } from './OverviewSection';
import { PackingSection } from './PackingSection';
import { SeasonSection } from './SeasonSection';
import { TripNotFound } from './TripNotFound';

type TripDetailScreenProps = {
  type: TripType;
  id: string | undefined;
};

export function TripDetailScreen({ type, id }: TripDetailScreenProps) {
  const insets = useSafeAreaInsets();
  const [photoHeight, setPhotoHeight] = useState(0);
  const [overPhoto, setOverPhoto] = useState(true);
  const scrollY = useSharedValue(0);

  const compactStyle = useAnimatedStyle(() => {
    const threshold = photoHeight - insets.top - BAR_HEIGHT;
    return {
      opacity: photoHeight
        ? interpolate(
            scrollY.value,
            [threshold - 20, threshold],
            [0, 1],
            'clamp',
          )
        : 0,
      pointerEvents:
        photoHeight && scrollY.value >= threshold ? 'auto' : 'none',
    };
  });

  const fabStyle = useAnimatedStyle(() => {
    const threshold = photoHeight - insets.top - BAR_HEIGHT;
    return {
      opacity: photoHeight
        ? interpolate(
            scrollY.value,
            [threshold - 20, threshold],
            [1, 0],
            'clamp',
          )
        : 1,
    };
  });

  const trip = TRIPS.find((t) => t.id === id && t.type === type);
  const detail = id ? getTripDetail(type, id) : undefined;
  if (!trip || !detail) return <TripNotFound />;

  const onPhotoLayout = (event: LayoutChangeEvent) => {
    setPhotoHeight(event.nativeEvent.layout.height);
  };
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = event.nativeEvent.contentOffset.y;
    scrollY.set(y);
    setOverPhoto(y < photoHeight - insets.top);
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
          <ItinerarySection detail={detail} />
          <SeasonSection
            name={detail.name.split(' (')[0]}
            bestSeasons={detail.meta.bestSeasons}
            planning={detail.seasonalPlanning}
            forecastLocations={getForecastLocations(trip.id)}
          />
          <ExpectSection expectations={detail.expectations} />
          {/* Where the web puts its gear checklist. Cultural tours have none. */}
          {detail.type !== 'cultural' ? (
            <PackingSection
              type={detail.type}
              id={trip.id}
              gear={detail.gear}
            />
          ) : null}
          <GallerySection images={getGalleryImages(trip.id) ?? []} />
        </View>
      </ScrollView>

      {/* Past the photo, the status bar sits on sand instead of on the content. */}
      {!overPhoto ? (
        <View
          className="absolute left-0 right-0 top-0 bg-sand"
          style={{ height: insets.top, pointerEvents: 'none' }}
        />
      ) : null}

      <CompactHeader
        title={detail.name.split(' (')[0]}
        animatedStyle={compactStyle}
      />
      <BackButton top={insets.top + 8} animatedStyle={fabStyle} />
    </View>
  );
}
