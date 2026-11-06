import { Image } from 'expo-image';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import type {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

import type { GalleryImage } from '../types';
import { SectionHeader } from './SectionHeader';

type GallerySectionProps = {
  images: readonly GalleryImage[];
};

export function GallerySection({ images }: GallerySectionProps) {
  const [width, setWidth] = useState(0);
  const [page, setPage] = useState(0);

  if (images.length === 0) return null;

  const onLayout = (event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width);
  };
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!width) return;
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setPage(Math.min(Math.max(index, 0), images.length - 1));
  };

  return (
    <View className="gap-[16px]">
      <SectionHeader
        title="Gallery"
        description="Memories made during adventure"
      />

      <View
        onLayout={onLayout}
        className="aspect-[4/3] w-full overflow-hidden rounded-[16px] bg-field"
      >
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              source={image.source}
              contentFit="cover"
              accessible
              accessibilityLabel={image.alt}
              style={{ width, height: (width * 3) / 4 }}
            />
          ))}
        </ScrollView>

        <View
          aria-hidden
          className="absolute bottom-[12px] right-[12px] rounded-full bg-ink/55 px-[8px] py-[4px]"
          style={{ pointerEvents: 'none' }}
        >
          <Text className="font-poppins-semibold text-[12px] leading-[16px] text-white">
            {page + 1} / {images.length}
          </Text>
        </View>
      </View>
    </View>
  );
}
