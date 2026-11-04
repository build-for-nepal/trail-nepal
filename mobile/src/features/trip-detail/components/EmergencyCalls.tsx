import { ArrowRight } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { altitudeColor } from '@/constants/colors';
import { cn } from '@/lib/utils';

import { callNumber } from '../call';
import { EMERGENCY_CALLS } from '../data/altitude';
import { CallIcon, HelicopterIcon } from './AltitudeIcons';

/** The web's two emergency buttons: call 100, or a helicopter rescue. Each one dials. */
export function EmergencyCalls() {
  return (
    <View className="gap-[10px]">
      {EMERGENCY_CALLS.map((call) => {
        const Icon = call.kind === 'emergency' ? CallIcon : HelicopterIcon;
        return (
          <Pressable
            key={call.kind}
            accessibilityRole="button"
            accessibilityLabel={`${call.label}, ${call.phone}`}
            accessibilityHint="Opens the phone app to call"
            onPress={() => callNumber(call.phone)}
          >
            {({ pressed }) => (
              <View
                className={cn(
                  'min-h-[52px] flex-row items-center justify-between rounded-[12px] px-[16px] py-[12px]',
                  call.kind === 'emergency'
                    ? 'bg-altitude-emergency'
                    : 'bg-altitude-helicopter',
                )}
                style={{ transform: [{ scale: pressed ? 0.98 : 1 }] }}
              >
                <View className="flex-row items-center gap-[10px]">
                  <Icon size={16} color={altitudeColor.onDark} />
                  <Text className="font-poppins-semibold text-[14px] leading-[20px] text-white">
                    {call.label}
                  </Text>
                </View>
                <ArrowRight
                  size={18}
                  strokeWidth={2}
                  color={altitudeColor.onDark}
                />
              </View>
            )}
          </Pressable>
        );
      })}
    </View>
  );
}
