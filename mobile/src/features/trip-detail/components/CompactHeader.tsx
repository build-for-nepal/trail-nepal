import { ChevronLeft } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import type { ViewStyle } from 'react-native';
import Animated, { type AnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { tripDetailColor } from '@/constants/colors';

import { useGoBack } from '../hooks/useGoBack';

type CompactHeaderProps = {
  title: string;
  animatedStyle: AnimatedStyle<ViewStyle>;
};

const BAR_HEIGHT = 44;

/** Back button and centred title under the status bar. Static, for screens without a photo. */
export function HeaderBar({ title }: { title: string }) {
  const insets = useSafeAreaInsets();
  const goBack = useGoBack();

  return (
    <View
      className="flex-row items-center border-b border-border bg-surface px-[6px]"
      style={{ paddingTop: insets.top, height: insets.top + BAR_HEIGHT }}
    >
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Back"
        onPress={goBack}
        hitSlop={8}
        className="h-[40px] w-[40px] items-center justify-center"
      >
        <ChevronLeft
          size={22}
          strokeWidth={1.75}
          color={tripDetailColor.icon}
        />
      </Pressable>

      <Text
        numberOfLines={1}
        className="flex-1 text-center font-poppins-semibold text-[17px] leading-[22px] text-ink"
      >
        {title}
      </Text>

      <View className="h-[40px] w-[40px]" />
    </View>
  );
}

export function CompactHeader({ title, animatedStyle }: CompactHeaderProps) {
  return (
    <Animated.View
      pointerEvents="box-none"
      style={[
        { position: 'absolute', left: 0, right: 0, top: 0 },
        animatedStyle,
      ]}
    >
      <HeaderBar title={title} />
    </Animated.View>
  );
}

export { BAR_HEIGHT };
