import type { ReactNode } from 'react';
import { Text, View } from 'react-native';

type FilterSectionProps = {
  title: string;
  hint?: string;
  /** In a single-section sheet the sheet header already names the section. */
  hideTitle?: boolean;
  children: ReactNode;
};

export function FilterSection({
  title,
  hint,
  hideTitle = false,
  children,
}: FilterSectionProps) {
  if (hideTitle && !hint) return <View>{children}</View>;

  return (
    <View>
      <View className="mb-[12px] flex-row items-baseline justify-between">
        {hideTitle ? (
          <View />
        ) : (
          <Text
            accessibilityRole="header"
            className="text-[15px] font-bold text-ink"
          >
            {title}
          </Text>
        )}
        {hint ? (
          <Text className="text-[13px] font-semibold text-muted">{hint}</Text>
        ) : null}
      </View>
      {children}
    </View>
  );
}
