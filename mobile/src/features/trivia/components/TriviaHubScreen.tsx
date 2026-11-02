import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Mountain } from 'lucide-react-native';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { tripDetailColor } from '@/constants/colors';

import { TRIVIA_PICKS } from '../data/hub';
import type { TriviaPick } from '../data/hub';
import { GENERAL_TRIVIA_HREF, triviaHref } from '../href';
import { TriviaBackButton } from './TriviaBackButton';
import { TriviaButton } from './TriviaButton';
import { SCENE_FOOT, TriviaScene } from './TriviaScene';

/**
 * The web's home-page trivia as a screen: four treks to play the trivia of, or a general
 * test. Laid out as the web's is at phone width, where its compass and arrow are hidden.
 */
export function TriviaHubScreen({ onBack }: { onBack: () => void }) {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-trivia-hub-sky">
      <StatusBar style="dark" />
      <TriviaScene himal={false} />

      <ScrollView
        contentContainerStyle={{
          paddingTop: insets.top + 8,
          paddingBottom: SCENE_FOOT + 24,
        }}
      >
        <View className="px-[18px]">
          <TriviaBackButton onPress={onBack} />
        </View>

        <View className="items-center px-[24px] pt-[24px]">
          <Text className="font-poppins-semibold text-[14px] leading-[20px] text-trivia-right-text">
            Trail Trivia
          </Text>
          <Text
            accessibilityRole="header"
            className="mt-[12px] text-center font-fraunces text-[28px] leading-[34px] tracking-[-0.3px] text-ink"
          >
            A quick trail break?
          </Text>
          <Text className="mt-[8px] max-w-[320px] text-center font-poppins-medium text-[14px] leading-[20px] text-ink">
            Test what you know about Nepal&apos;s trails and discover something
            new.
          </Text>

          <View className="mt-[28px] w-full max-w-[320px] flex-row flex-wrap justify-between gap-y-[20px]">
            {TRIVIA_PICKS.map((pick) => (
              <PickButton key={pick.id} pick={pick} />
            ))}
          </View>

          <Text className="mt-[36px] text-center font-poppins-semibold text-[14px] leading-[20px] text-trivia-right-text">
            Take a general test
          </Text>
          <View className="mt-[12px] w-full max-w-[320px]">
            <Link href={GENERAL_TRIVIA_HREF} asChild>
              <TriviaButton label="Play Trivia" />
            </Link>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

/** A trek's photo in a white-ringed circle, with its label on a pill across the foot. */
function PickButton({ pick }: { pick: TriviaPick }) {
  return (
    <Link href={triviaHref('trek', pick.id)} asChild>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Play ${pick.name} trivia`}
        className="w-[48%] items-center"
      >
        {({ pressed }) => (
          <View
            className="items-center"
            style={{ transform: [{ scale: pressed ? 0.96 : 1 }] }}
          >
            <View
              className="h-[96px] w-[96px] items-center justify-center overflow-hidden rounded-full border-2 border-surface bg-field"
              style={styles.photo}
            >
              {/* Underneath the photo, so it shows while the photo loads or if it fails. */}
              <Mountain
                size={24}
                strokeWidth={1.75}
                color={tripDetailColor.placeholder}
                opacity={0.6}
              />
              <Image
                source={pick.cover}
                contentFit="cover"
                style={StyleSheet.absoluteFill}
              />
            </View>
            <View
              className="-mt-[12px] rounded-full bg-surface px-[12px] py-[4px]"
              style={styles.pill}
            >
              <Text className="font-poppins-semibold text-[12px] leading-[16px] text-ink">
                {pick.label}
              </Text>
            </View>
          </View>
        )}
      </Pressable>
    </Link>
  );
}

// NativeWind's arbitrary shadow classes keep only the colour and radius, so shadows go
// through style. As the web's: a soft drop under the photo, shadow-sm under the label.
const styles = StyleSheet.create({
  photo: { boxShadow: '0 5px 14px rgba(38, 60, 46, 0.16)' },
  pill: { boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' },
});
