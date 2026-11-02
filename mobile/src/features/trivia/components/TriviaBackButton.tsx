import { ChevronLeft } from 'lucide-react-native';
import { Pressable, StyleSheet, View } from 'react-native';

import { triviaColor } from '@/constants/colors';

/** The white round back button at the top left of the trivia's screens. */
export function TriviaBackButton({ onPress }: { onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Back"
      onPress={onPress}
      hitSlop={8}
      className="self-start"
    >
      {({ pressed }) => (
        <View
          className="h-[40px] w-[40px] items-center justify-center rounded-full bg-surface"
          style={[styles.lift, { transform: [{ scale: pressed ? 0.92 : 1 }] }]}
        >
          <ChevronLeft size={22} strokeWidth={2} color={triviaColor.icon} />
        </View>
      )}
    </Pressable>
  );
}

// NativeWind's arbitrary shadow classes keep only the colour and radius, so shadows go
// through style. The detail page's button shadow.
const styles = StyleSheet.create({
  lift: {
    boxShadow:
      '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  },
});
