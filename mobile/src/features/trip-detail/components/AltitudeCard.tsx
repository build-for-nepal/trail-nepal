import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import { Text, View } from 'react-native';
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { altitudeColor } from '@/constants/colors';

import { altitudeRisk, parseElevation } from '../altitude';
import type { RiskLevel } from '../altitude';

// Whole class names, so Tailwind's content scan finds them.
const RISK_TEXT: Record<RiskLevel, string> = {
  low: 'text-altitude-risk-low',
  moderate: 'text-altitude-risk-moderate',
  high: 'text-altitude-risk-high',
  extreme: 'text-altitude-risk-extreme',
};

type AltitudeCardProps = {
  /** The trek's maximum altitude as its data writes it, e.g. '5,545m'. */
  maxElevation: string;
  /** e.g. 'EBC Trek'. */
  name: string;
};

/** The trek's highest point and how risky it is, as the web's blue altitude card. */
export function AltitudeCard({ maxElevation, name }: AltitudeCardProps) {
  const parsed = parseElevation(maxElevation);
  const risk = parsed ? altitudeRisk(parsed.metres) : null;

  return (
    <View
      accessible
      accessibilityLabel={`Maximum altitude ${parsed ? `${parsed.metres.toLocaleString('en-US')} metres` : maxElevation}, ${name}.${risk ? ` ${risk.label}.` : ''}`}
      className="rounded-[24px] bg-altitude-card px-[24px] pb-[20px] pt-[24px]"
    >
      <View className="flex-row items-baseline gap-[6px]">
        <Text className="font-poppins-semibold text-[44px] leading-[48px] tracking-[-1px] text-white">
          {parsed ? parsed.metres.toLocaleString('en-US') : maxElevation}
        </Text>
        {parsed ? (
          <Text className="font-poppins-semibold text-[18px] leading-[24px] text-white/90">
            {parsed.unit}
          </Text>
        ) : null}
      </View>
      <Text className="mt-[10px] font-poppins text-[14px] leading-[20px] text-white/90">
        Maximum altitude · {name}
      </Text>

      {risk ? (
        <View className="mt-[16px] flex-row items-center gap-[8px] self-start rounded-full bg-surface px-[16px] py-[8px]">
          <RiskDot level={risk.level} pulse={risk.pulse} />
          <Text
            className={`shrink font-poppins-semibold text-[13px] leading-[18px] ${RISK_TEXT[risk.level]}`}
          >
            {risk.label}
          </Text>
        </View>
      ) : null}
    </View>
  );
}

/**
 * The badge's dot. At high and extreme risk a ring grows from it and fades, as the web's
 * animate-ping, over a second, again and again. Still under Reduce Motion, and paused while
 * the screen is out of view.
 */
function RiskDot({ level, pulse }: { level: RiskLevel; pulse: boolean }) {
  const reduced = useReducedMotion();
  const ping = useSharedValue(0);
  const color = altitudeColor.risk[level];
  const pinging = pulse && !reduced;

  useFocusEffect(
    useCallback(() => {
      if (!pinging) return;
      ping.set(
        withRepeat(
          withSequence(
            withTiming(0, { duration: 0 }),
            // Tailwind's ping: out to twice the size and gone by 75%, then a pause.
            withTiming(1, {
              duration: 750,
              easing: Easing.bezier(0, 0, 0.2, 1),
            }),
            withTiming(1, { duration: 250 }),
          ),
          -1,
        ),
      );
      return () => cancelAnimation(ping);
    }, [ping, pinging]),
  );

  const ring = useAnimatedStyle(() => ({
    opacity: 0.75 * (1 - ping.get()),
    transform: [{ scale: 1 + ping.get() }],
  }));

  return (
    <View className="h-[8px] w-[8px] items-center justify-center">
      {pinging ? (
        <Animated.View
          style={[
            {
              position: 'absolute',
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: color,
            },
            ring,
          ]}
        />
      ) : null}
      <View
        style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: color }}
      />
    </View>
  );
}
