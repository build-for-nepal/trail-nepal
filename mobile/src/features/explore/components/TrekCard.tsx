import { Image } from 'expo-image';
import { Clock, Mountain, TrendingUp } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { trekCardColor } from '@/constants/colors';

import { DIFFICULTY_OPTIONS, formatDays, formatMetres } from '../filters';
import type { Trip } from '../types';

type TrekCardProps = {
  trip: Trip;
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
    days,
    `${trip.maxAltitudeM.toLocaleString('en-US')} metres`,
    difficulty,
  ].join(', ');

  return (
    <View
      // One element for screen readers. The label stands in for the children, so the
      // icons need no labels of their own.
      accessible
      accessibilityLabel={label}
    >
      <View className="aspect-[3/2] items-center justify-center overflow-hidden rounded-[12px] bg-field">
        {/* Underneath the photo, so it shows while the photo loads or if it fails. */}
        <Mountain
          size={28}
          strokeWidth={1.75}
          color={trekCardColor.icon}
          opacity={0.6}
        />
        <Image
          source={trip.image}
          contentFit="cover"
          style={StyleSheet.absoluteFill}
        />
      </View>

      <View className="mt-[12px]">
        <Text className="text-[17px] font-bold leading-[22px] tracking-[-0.2px] text-ink">
          {trip.title}
        </Text>
        <Text className="mt-[2px] text-[13px] leading-[18px] text-muted">
          {trip.region}
        </Text>

        {/* Wraps onto a second line at large text sizes instead of overflowing. */}
        <View className="mt-[2px] flex-row flex-wrap items-center gap-x-[14px] gap-y-[4px]">
          <View className="flex-row items-center gap-[5px]">
            <Clock size={14} strokeWidth={1.75} color={trekCardColor.icon} />
            <Text className="text-[13px] font-medium leading-[18px] text-ink">
              {days}
            </Text>
          </View>

          <View className="flex-row items-center gap-[5px]">
            <Mountain size={14} strokeWidth={1.75} color={trekCardColor.icon} />
            <Text className="text-[13px] font-medium leading-[18px] text-ink">
              {formatMetres(trip.maxAltitudeM)}
            </Text>
          </View>

          <View className="flex-row items-center gap-[5px]">
            {/* The web's trip pages use the same icon for difficulty. */}
            <TrendingUp
              size={14}
              strokeWidth={1.75}
              color={trekCardColor.icon}
            />
            <Text className="text-[13px] font-medium leading-[18px] text-ink">
              {difficulty}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
