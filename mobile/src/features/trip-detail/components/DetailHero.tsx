import { Image } from 'expo-image';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import type { ImageRequireSource, LayoutChangeEvent } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

import type { DetailStat } from '../facts';
import { StatsCard } from './StatsCard';

/** How far the stats card reaches up into the photo. */
const CARD_OVERLAP = 36;

type DetailHeroProps = {
  image: ImageRequireSource;
  name: string;
  region: string;
  summary: string;
  stats: DetailStat[];
  /** The photo's layout, without the part of the stats card below it. */
  onPhotoLayout?: (event: LayoutChangeEvent) => void;
};

// The web header: title, region and summary on the photo, and the stats card floating
// over its bottom edge. The photo takes 58% of the screen rather than all of it, so a
// landscape photo isn't cropped to a sliver. It grows when the summary needs more room.
export function DetailHero({
  image,
  name,
  region,
  summary,
  stats,
  onPhotoLayout,
}: DetailHeroProps) {
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();

  return (
    <View>
      <View
        onLayout={onPhotoLayout}
        className="justify-end bg-ink px-[20px]"
        style={{
          minHeight: Math.round(height * 0.58),
          paddingTop: insets.top + 64,
          paddingBottom: CARD_OVERLAP + 24,
        }}
      >
        <Image
          source={image}
          contentFit="cover"
          style={StyleSheet.absoluteFill}
        />
        <Svg style={[StyleSheet.absoluteFill, { pointerEvents: 'none' }]}>
          <Defs>
            {/* The web's bottom-up shade, plus a band at the top for the status bar. */}
            <LinearGradient id="detail-hero-shade" x1="0" y1="1" x2="0" y2="0">
              <Stop offset="0" stopColor="#000" stopOpacity="0.85" />
              <Stop offset="0.55" stopColor="#000" stopOpacity="0.35" />
              <Stop offset="0.85" stopColor="#000" stopOpacity="0.1" />
              <Stop offset="1" stopColor="#000" stopOpacity="0.35" />
            </LinearGradient>
          </Defs>
          <Rect width="100%" height="100%" fill="url(#detail-hero-shade)" />
        </Svg>

        <View className="items-center gap-[8px]">
          <Text
            accessibilityRole="header"
            className="max-w-[320px] text-center font-fraunces text-[36px] leading-[40px] tracking-[-0.7px] text-white"
            style={styles.textShadow}
          >
            {name}
          </Text>
          <Text
            className="text-center font-poppins-semibold text-[18px] leading-[24px] text-white/95"
            style={styles.textShadow}
          >
            {region}
          </Text>
          <Text
            className="mt-[4px] text-center font-poppins text-[14px] leading-[22px] text-white/85"
            style={styles.textShadow}
          >
            {summary}
          </Text>
        </View>
      </View>

      <View className="px-[16px]" style={{ marginTop: -CARD_OVERLAP }}>
        <StatsCard stats={stats} />
      </View>
    </View>
  );
}

// NativeWind has no text-shadow classes.
const styles = StyleSheet.create({
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
});
