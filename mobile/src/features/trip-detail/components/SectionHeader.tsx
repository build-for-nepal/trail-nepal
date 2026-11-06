import { Text, View } from 'react-native';

type SectionHeaderProps = {
  title: string;
  description?: string;
};

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <View className="gap-[4px]">
      <Text
        accessibilityRole="header"
        className="font-fraunces text-[22px] leading-[28px] tracking-[-0.3px] text-ink"
      >
        {title}
      </Text>
      {description ? (
        <Text className="font-poppins text-[13px] leading-[18px] text-muted">
          {description}
        </Text>
      ) : null}
    </View>
  );
}
