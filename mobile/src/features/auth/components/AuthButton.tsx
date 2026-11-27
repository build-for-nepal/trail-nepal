import { Pressable, Text } from 'react-native';

import { cn } from '@/lib/utils';

type AuthButtonProps = {
  label: string;
  /** Shown while the request is in flight; the button is disabled with it. */
  busyLabel?: string;
  busy?: boolean;
  onPress: () => void;
};

/**
 * The green pill on both auth screens.
 *
 * The label is ink, not the white in the design. White on bg-brand (#8EB125) is
 * 2.5:1, under AA for text this size, whereas ink is 6.6:1 — and this is the
 * substitution the app already makes everywhere else (see TripNotFound, and the
 * note in tailwind.config.js: "Buttons are bg-brand with ink text, since white
 * on the web's #88B112 is 2.5:1"). Worth raising with design.
 */
export function AuthButton({
  label,
  busyLabel,
  busy = false,
  onPress,
}: AuthButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: busy, busy }}
      disabled={busy}
      onPress={onPress}
      className={cn(
        'h-[56px] items-center justify-center rounded-full bg-brand',
        busy && 'opacity-60',
      )}
    >
      <Text className="font-poppins-semibold text-[16px] leading-[22px] text-ink">
        {busy && busyLabel ? busyLabel : label}
      </Text>
    </Pressable>
  );
}
