import { Text, View } from 'react-native';

export default function Explore() {
  return (
    <View className="flex-1 items-center justify-center gap-2 bg-sand">
      <Text className="text-2xl font-semibold text-ink">Explore</Text>
      <Text className="text-[13px] text-muted">
        Season-led browsing, search and map
      </Text>
    </View>
  );
}
