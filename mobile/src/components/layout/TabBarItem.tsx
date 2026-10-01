import type { TabTriggerSlotProps } from 'expo-router/ui';
import type { LucideIcon } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { tabIconColor } from '@/constants/colors';

export type TabBarItemProps = TabTriggerSlotProps & {
  /** Not rendered. Supplies the accessible name, which an icon-only tab has no other source for. */
  label: string;
  icon: LucideIcon;
  badgeCount?: number;
  showDot?: boolean;
};

export function TabBarItem({
  label,
  icon: Icon,
  badgeCount,
  showDot,
  isFocused = false,
  ...pressableProps
}: TabBarItemProps) {
  return (
    <Pressable
      {...pressableProps}
      accessibilityRole="tab"
      accessibilityLabel={label}
      accessibilityState={{ selected: isFocused }}
      className="h-[58px] flex-1 items-center justify-center"
      // TabTrigger's slot injects justifyContent: 'space-between', which pins the lone
      // icon to the start of the column. That property is all its style contains.
      style={{ justifyContent: 'center' }}
    >
      {({ pressed }) => (
        <View
          className="items-center justify-center"
          style={{ transform: [{ scale: pressed ? 0.9 : 1 }] }}
        >
          <Icon
            size={24}
            strokeWidth={1.75}
            color={isFocused ? tabIconColor.active : tabIconColor.inactive}
          />

          {badgeCount !== undefined && badgeCount > 0 && (
            <View className="absolute -right-2 -top-1 h-4 min-w-4 items-center justify-center rounded-full border-2 border-surface bg-accent">
              <Text className="text-[10px] font-bold leading-[12px] text-white">
                {badgeCount > 99 ? '99+' : badgeCount}
              </Text>
            </View>
          )}

          {showDot && (
            <View className="absolute -right-1 -top-px h-2 w-2 rounded-full border-2 border-surface bg-accent" />
          )}
        </View>
      )}
    </Pressable>
  );
}
