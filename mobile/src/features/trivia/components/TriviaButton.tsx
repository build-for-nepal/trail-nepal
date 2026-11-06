import type { LucideIcon } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import type { PressableProps } from 'react-native';

import { triviaColor } from '@/constants/colors';
import { cn } from '@/lib/utils';

type TriviaButtonProps = Omit<PressableProps, 'children'> & {
  label: string;
  icon?: LucideIcon;
  className?: string;
};

/**
 * The trivia's green button: Play, Next question, Play again. Ink on the brand green, as
 * the app's other green buttons; the web's white on #88B112 is 2.5:1. It passes its props
 * to the Pressable, so it can sit in a Link with asChild.
 */
export function TriviaButton({
  label,
  icon: Icon,
  className,
  ...props
}: TriviaButtonProps) {
  return (
    <Pressable accessibilityRole="button" {...props}>
      {({ pressed }) => (
        <View
          className={cn(
            'min-h-[48px] flex-row items-center justify-center gap-[8px] rounded-[12px] bg-brand px-[28px] py-[12px]',
            className,
          )}
          style={{ transform: [{ scale: pressed ? 0.98 : 1 }] }}
        >
          {Icon ? (
            <Icon size={16} strokeWidth={2} color={triviaColor.icon} />
          ) : null}
          <Text className="font-poppins-semibold text-[14px] leading-[20px] text-ink">
            {label}
          </Text>
        </View>
      )}
    </Pressable>
  );
}
