import { Link } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { triviaColor } from '@/constants/colors';

import { TRIVIA_HUB_HREF } from '../href';
import { Cloud } from './art/Cloud';

/**
 * Explore's way into the trivia hub, at the top of the list: the web's home-page trivia
 * heading on its sky, as one button.
 */
export function TriviaExploreCard() {
  return (
    <Link href={TRIVIA_HUB_HREF} asChild>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Trail Trivia. A quick trail break? Test what you know about Nepal's trails and discover something new."
      >
        {({ pressed }) => (
          <View
            className="flex-row items-center gap-[12px] overflow-hidden rounded-[24px] bg-trivia-hub-sky p-[18px]"
            style={[
              styles.card,
              { transform: [{ scale: pressed ? 0.98 : 1 }] },
            ]}
          >
            <Cloud
              width={112}
              aria-hidden
              style={{ position: 'absolute', right: -16, top: 8 }}
            />
            <View className="flex-1 gap-[2px]">
              <Text className="font-poppins-semibold text-[12px] leading-[18px] text-trivia-right-text">
                Trail Trivia
              </Text>
              <Text className="font-fraunces text-[18px] leading-[25px] tracking-[-0.45px] text-ink">
                A quick trail break?
              </Text>
              <Text className="font-poppins text-[13px] leading-[18px] text-trivia-slate">
                Test what you know about Nepal&apos;s trails and discover
                something new.
              </Text>
            </View>
            <View
              className="h-[36px] w-[36px] items-center justify-center rounded-full bg-surface"
              style={styles.pill}
            >
              <ChevronRight
                size={20}
                strokeWidth={2}
                color={triviaColor.icon}
              />
            </View>
          </View>
        )}
      </Pressable>
    </Link>
  );
}

// NativeWind's arbitrary shadow classes keep only the colour and radius, so shadows go
// through style. The same shadows as the Explore card and its pill.
const styles = StyleSheet.create({
  card: { boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)' },
  pill: {
    boxShadow:
      '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  },
});
