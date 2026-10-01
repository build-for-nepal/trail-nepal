import { Text, View } from 'react-native';

export default function Trip() {
  return (
    <View className="flex-1 items-center justify-center gap-2 bg-sand">
      <Text className="text-2xl font-semibold text-ink">My trip</Text>
      <Text className="text-[13px] text-muted">
        Dates, permits, packing, acclimatisation
      </Text>
    </View>
  );
}
