import type { LucideIcon } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { permissionColor } from '@/constants/colors';

import type { PermissionState } from '../usePermission';

type PermissionScreenProps = {
  icon: LucideIcon;
  title: string;
  /** Why the app is asking, shown before the prompt. */
  body: string;
  /** Shown once the OS will no longer prompt, so Settings is the only route. */
  blockedBody: string;
  state: PermissionState;
  onAsk: () => void;
  onSkip: () => void;
  onOpenSettings: () => void;
  skipLabel: string;
};

/**
 * Layout shared by the location and notification steps. Modelled on
 * features/trip-detail/components/TripNotFound.tsx, which is the app's
 * established centred icon + heading + body + action screen.
 *
 * Every state offers a way onward: refusing a permission must never trap the
 * user in onboarding.
 */
export function PermissionScreen({
  icon: Icon,
  title,
  body,
  blockedBody,
  state,
  onAsk,
  onSkip,
  onOpenSettings,
  skipLabel,
}: PermissionScreenProps) {
  const isBlocked = state === 'blocked';
  const isBusy = state === 'checking';

  return (
    <View className="flex-1 items-center justify-center bg-sand px-[32px]">
      <Icon size={32} strokeWidth={1.75} color={permissionColor.icon} />

      <Text
        accessibilityRole="header"
        className="mt-[12px] text-center font-fraunces text-[22px] leading-[28px] text-ink"
      >
        {title}
      </Text>

      <Text className="mt-[6px] text-center font-poppins text-[14px] leading-[21px] text-muted">
        {isBlocked ? blockedBody : body}
      </Text>

      <Pressable
        accessibilityRole="button"
        disabled={isBusy}
        onPress={isBlocked ? onOpenSettings : onAsk}
        className={`mt-[20px] rounded-[16px] bg-brand px-[24px] py-[14px] ${
          isBusy ? 'opacity-60' : ''
        }`}
      >
        <Text className="font-poppins-semibold text-[13px] leading-[18px] text-ink">
          {isBlocked ? 'Open settings' : 'Allow'}
        </Text>
      </Pressable>

      <Pressable
        accessibilityRole="button"
        onPress={onSkip}
        className="mt-[10px] px-[24px] py-[10px]"
      >
        <Text className="font-poppins-semibold text-[13px] leading-[18px] text-muted">
          {skipLabel}
        </Text>
      </Pressable>
    </View>
  );
}
