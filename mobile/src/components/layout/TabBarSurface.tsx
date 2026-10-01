import type { ViewProps } from 'react-native';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function TabBarSurface({ style, children, ...rest }: ViewProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      {...rest}
      className="flex-row border-t border-border bg-surface"
      // style is merged, not replaced: TabList asChild passes its own flexDirection
      // through here. The floor keeps clearance on Android 3-button nav, where the
      // inset is 0.
      style={[style, { paddingBottom: Math.max(insets.bottom, 8) }]}
    >
      {children}
    </View>
  );
}
