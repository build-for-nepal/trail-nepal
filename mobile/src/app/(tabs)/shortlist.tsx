import { Text, View } from 'react-native';

export default function Shortlist() {
  return (
    <View className="flex-1 items-center justify-center gap-2 bg-sand">
      <Text className="text-2xl font-semibold text-ink">Shortlist</Text>
      <Text className="text-[13px] text-muted">
        Treks you are weighing up, and compare
      </Text>
    </View>
  );
}
