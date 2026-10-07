import { Image } from 'expo-image';
import { CalendarDays, Clock, Mountain } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { trekCardColor } from '@/constants/colors';

import { DIFFICULTY_OPTIONS, formatDays, formatMetres } from '../filters';
import type { Difficulty, Trip } from '../types';

type TrekCardProps = {
  trip: Trip;
};

// Whole class names, so Tailwind's content scan finds them.
const DIFFICULTY_TEXT: Record<Difficulty, string> = {
  easy: 'text-difficulty-easy',
  moderate: 'text-difficulty-moderate',
  challenging: 'text-difficulty-challenging',
};

// Not pressable yet: there is no detail screen to open.
export function TrekCard({ trip }: TrekCardProps) {
  const days = formatDays(trip.days);
  const difficulty =
    DIFFICULTY_OPTIONS.find((o) => o.value === trip.difficulty)?.label ??
    trip.difficulty;
  const label = [
    trip.title,
    trip.region,
    difficulty,
    days,
    `${trip.maxAltitudeM.toLocaleString('en-US')} metres`,
    `season ${trip.season}`,
    trip.description,
  ].join(', ');

  return (
    <View
      // One element for screen readers. The label stands in for the children, so the
      // icons need no labels of their own.
      accessible
      accessibilityLabel={label}
      className="rounded-[24px] bg-surface"
      style={styles.card}
    >
      <View className="aspect-video items-center justify-center overflow-hidden rounded-t-[24px] bg-field">
        {/* Underneath the photo, so it shows while the photo loads or if it fails. */}
        <Mountain
          size={28}
          strokeWidth={1.75}
          color={trekCardColor.placeholder}
          opacity={0.6}
        />
        <Image
          source={trip.image}
          contentFit="cover"
          style={StyleSheet.absoluteFill}
        />
        <View
          className="absolute right-[16px] top-[16px] rounded-full bg-surface px-[16px] py-[6px]"
          style={styles.pill}
        >
          <Text
            className={`font-poppins-semibold text-[10px] leading-[15px] ${DIFFICULTY_TEXT[trip.difficulty]}`}
          >
            {difficulty}
          </Text>
        </View>
      </View>

      <View className="gap-[12px] p-[18px]">
        <View className="gap-[2px]">
          <Text
            numberOfLines={trip.type === 'trek' ? 1 : undefined}
            className="font-fraunces text-[18px] leading-[25px] tracking-[-0.45px] text-ink"
          >
            {trip.title}
          </Text>
          <Text className="font-poppins-medium text-[12px] leading-[18px] text-muted">
            {trip.region}
          </Text>
        </View>

        <Text className="font-poppins text-[12px] leading-[20px] text-muted">
          {trip.description}
        </Text>

        <View className="flex-row items-center justify-between gap-x-[12px] pt-[4px]">
          <View className="shrink-0 flex-row items-center gap-[6px]">
            <Clock size={16} strokeWidth={2.2} color={trekCardColor.icon} />
            <Text className="font-poppins-medium text-[10px] leading-[15px] text-ink">
              {days}
            </Text>
          </View>

          <View className="shrink-0 flex-row items-center gap-[6px]">
            <Mountain size={16} strokeWidth={2.2} color={trekCardColor.icon} />
            <Text className="font-poppins-medium text-[10px] leading-[15px] text-ink">
              {formatMetres(trip.maxAltitudeM)}
            </Text>
          </View>

          <View className="shrink flex-row items-center gap-[6px]">
            <CalendarDays
              size={16}
              strokeWidth={2.2}
              color={trekCardColor.icon}
            />
            <Text className="shrink text-right font-poppins-medium text-[10px] leading-[15px] text-ink">
              {trip.season}
            </Text>
          </View>
        </View>

        <View className="items-center rounded-[16px] bg-brand py-[14px]">
          <Text className="font-poppins-semibold text-[12px] leading-[18px] text-ink">
            See More
          </Text>
        </View>
      </View>
    </View>
  );
}

// NativeWind's arbitrary shadow classes keep only the colour and radius, so shadows go
// through style.
const styles = StyleSheet.create({
  card: { boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)' },
  pill: {
    boxShadow:
      '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  },
});
