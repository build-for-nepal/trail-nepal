import { Link } from 'expo-router';
import type { Href } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { ROUND_SIZE } from '../round';
import { TriviaButton } from './TriviaButton';
import { SCENE_FOOT, TriviaScene } from './TriviaScene';

type TriviaIntroCardProps = {
  /** What the trivia is called, from triviaName(): 'Everest', 'Lumbini'. */
  name: string;
  /** The game's screen. */
  href: Href;
};

/**
 * The web's trivia intro, as a card at the foot of a trip's page: the sky, Himal on the
 * hills, and a button into the game, which has a screen of its own.
 */
export function TriviaIntroCard({ name, href }: TriviaIntroCardProps) {
  return (
    <View
      className="overflow-hidden rounded-[16px] bg-trivia-sky"
      style={styles.card}
    >
      <TriviaScene stage="intro" />

      <View
        className="items-center px-[24px] pt-[28px]"
        style={{ paddingBottom: SCENE_FOOT + 16 }}
      >
        <Text className="text-center font-poppins-semibold text-[13px] leading-[18px] tracking-[2.6px] text-trivia-right-text">
          {name} Trivia
        </Text>
        <Text
          accessibilityRole="header"
          className="mt-[12px] text-center font-fraunces text-[28px] leading-[34px] tracking-[-0.3px] text-ink"
        >
          How well do you know {name}?
        </Text>
        <View className="mt-[16px] flex-row items-center gap-[16px]">
          <Text className="font-poppins-medium text-[12px] leading-[16px] text-ink">
            {ROUND_SIZE} Questions
          </Text>
          <View
            aria-hidden
            className="h-[6px] w-[6px] rounded-full bg-surface"
          />
          <Text className="font-poppins-medium text-[12px] leading-[16px] text-ink">
            ~ 2 minutes
          </Text>
        </View>
        <View className="mt-[28px] w-full max-w-[384px]">
          <Link href={href} asChild>
            <TriviaButton label={`Play ${name} Trivia`} />
          </Link>
        </View>
      </View>
    </View>
  );
}

// NativeWind's arbitrary shadow classes keep only the colour and radius, so shadows go
// through style. The web's card shadow.
const styles = StyleSheet.create({
  card: { boxShadow: '0 3px 8px rgba(0, 0, 0, 0.18)' },
});
