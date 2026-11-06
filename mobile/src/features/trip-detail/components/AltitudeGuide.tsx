import { Image } from 'expo-image';
import { AlertTriangle, Check, OctagonAlert } from 'lucide-react-native';
import type { LucideIcon } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { ChevronAnimated } from '@/components/ui/accordion';
import { altitudeColor } from '@/constants/colors';
import { cn } from '@/lib/utils';

import { severityTone, toggledPanels } from '../altitude';
import type { SeverityTone } from '../altitude';
import { ALTITUDE_ILLNESSES, SYMPTOM_ICONS } from '../data/altitude';
import type { AltitudeIllness } from '../data/altitude';
import { shadows } from '../styles';

const ILLNESSES = Object.entries(ALTITUDE_ILLNESSES);

// Whole class names, so Tailwind's content scan finds them.
const TONE: Record<
  SeverityTone,
  { card: string; title: string; text: string; icon: string; Icon: LucideIcon }
> = {
  mild: {
    card: 'border-altitude-mild-edge bg-altitude-mild-tint',
    title: 'text-altitude-mild-title',
    text: 'text-altitude-mild-text',
    icon: 'bg-altitude-mild-icon',
    Icon: Check,
  },
  moderate: {
    card: 'border-altitude-moderate-edge bg-altitude-moderate-tint',
    title: 'text-altitude-moderate-title',
    text: 'text-altitude-moderate-text',
    icon: 'bg-altitude-moderate-icon',
    Icon: AlertTriangle,
  },
  severe: {
    card: 'border-altitude-severe-edge bg-altitude-severe-tint',
    title: 'text-altitude-severe-title',
    text: 'text-altitude-severe-text',
    icon: 'bg-altitude-severe-icon',
    Icon: OctagonAlert,
  },
};

/**
 * AMS, HAPE and HACE, one panel each, as the web's accordion: HACE starts open, any can be
 * open together, and one always stays open. Closing the last one opens the other end.
 */
export function AltitudeGuide() {
  const [open, setOpen] = useState<number[]>([ILLNESSES.length - 1]);

  return (
    <View className="gap-[12px]">
      {ILLNESSES.map(([name, illness], index) => {
        const expanded = open.includes(index);
        return (
          <View
            key={name}
            className="overflow-hidden rounded-[16px] bg-altitude-panel"
            style={shadows.card}
          >
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ expanded }}
              onPress={() =>
                setOpen((current) =>
                  toggledPanels(current, index, ILLNESSES.length),
                )
              }
              className="min-h-[56px] flex-row items-center justify-between gap-[12px] px-[20px] py-[16px]"
            >
              <Text
                accessibilityRole="header"
                className="flex-1 font-fraunces text-[17px] leading-[23px] text-ink"
              >
                {name}
              </Text>
              <ChevronAnimated open={expanded} />
            </Pressable>

            <Expandable open={expanded}>
              <IllnessDetails illness={illness} />
            </Expandable>
          </View>
        );
      })}
    </View>
  );
}

/**
 * A panel's body, opening and closing as the web's: its height grows to the content's as it
 * fades in, over 420ms, and shrinks back over 320ms. A panel open from the start shows at
 * once. react-native-collapsible only measures on a change, so one open from the start
 * would stay at no height.
 */
function Expandable({
  open,
  children,
}: {
  open: boolean;
  children: ReactNode;
}) {
  const reduced = useReducedMotion();
  const progress = useSharedValue(open ? 1 : 0);
  const height = useSharedValue(0);

  useEffect(() => {
    const to = open ? 1 : 0;
    if (reduced) {
      progress.set(to);
      return;
    }
    // GSAP's power3.out to open and power3.in to close, as the web's.
    progress.set(
      withTiming(to, {
        duration: open ? 420 : 320,
        easing: open ? Easing.out(Easing.cubic) : Easing.in(Easing.cubic),
      }),
    );
  }, [open, progress, reduced]);

  const style = useAnimatedStyle(() => ({
    height: height.get() * progress.get(),
    opacity: progress.get(),
  }));

  return (
    <Animated.View
      style={[{ overflow: 'hidden' }, style]}
      pointerEvents={open ? 'auto' : 'none'}
    >
      {/* Laid out at its full height whatever the panel's, to measure it. */}
      <View
        onLayout={(event) => height.set(event.nativeEvent.layout.height)}
        accessibilityElementsHidden={!open}
        importantForAccessibility={open ? 'auto' : 'no-hide-descendants'}
        style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
      >
        {children}
      </View>
    </Animated.View>
  );
}

function Label({ children }: { children: string }) {
  return (
    <Text className="mb-[10px] font-poppins-semibold text-[12px] uppercase leading-[16px] tracking-[1.2px] text-altitude-label">
      {children}
    </Text>
  );
}

/** One illness: what it is, its symptoms, its severity levels, and how to prevent it. */
function IllnessDetails({ illness }: { illness: AltitudeIllness }) {
  return (
    <View className="gap-[24px] px-[20px] pb-[24px]">
      <View>
        <Label>What it is?</Label>
        <Text className="font-poppins text-[14px] leading-[22px] text-altitude-body">
          {illness.description}
        </Text>
      </View>

      <View>
        <Label>Symptoms</Label>
        <View className="flex-row flex-wrap justify-between gap-y-[8px]">
          {illness.symptoms.map((symptom) => (
            <View
              key={symptom.name}
              accessible
              accessibilityLabel={symptom.name}
              className="w-[48.5%] items-center gap-[6px] rounded-[12px] bg-surface px-[4px] py-[12px]"
            >
              <Image
                source={SYMPTOM_ICONS[symptom.icon]}
                style={{ width: 32, height: 32 }}
                contentFit="contain"
              />
              <Text className="text-center font-poppins text-[13px] leading-[17px] text-ink">
                {symptom.name}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View>
        <Label>Severity Levels</Label>
        <View className="gap-[8px]">
          {Object.entries(illness.severity).map(([level, action]) => {
            const tone = TONE[severityTone(level)];
            return (
              <View
                key={level}
                accessible
                accessibilityLabel={`${level}. ${action}`}
                className={cn(
                  'flex-row gap-[10px] rounded-[12px] border px-[16px] py-[12px]',
                  tone.card,
                )}
              >
                <View
                  className={cn(
                    'h-[32px] w-[32px] items-center justify-center rounded-full',
                    tone.icon,
                  )}
                >
                  <tone.Icon
                    size={16}
                    strokeWidth={2.5}
                    color={altitudeColor.onDark}
                  />
                </View>
                <View className="flex-1 gap-[4px]">
                  <Text
                    className={cn(
                      'font-poppins-semibold text-[15px] capitalize leading-[22px]',
                      tone.title,
                    )}
                  >
                    {level}
                  </Text>
                  <Text
                    className={cn(
                      'font-poppins text-[13px] leading-[20px]',
                      tone.text,
                    )}
                  >
                    {action}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>

      <View>
        <Label>Prevention Tips</Label>
        <View className="gap-[8px]">
          {illness.prevention_tips.map((tip) => (
            <View key={tip} className="flex-row items-start gap-[8px]">
              <View className="h-[22px] justify-center">
                <Check size={14} strokeWidth={2.5} color={altitudeColor.tip} />
              </View>
              <Text className="flex-1 font-poppins text-[14px] leading-[22px] text-altitude-tip">
                {tip}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
