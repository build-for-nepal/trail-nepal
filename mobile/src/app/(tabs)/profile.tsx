import { Text, View } from 'react-native';

export default function Profile() {
  return (
    <View className="flex-1 items-center justify-center gap-2 bg-sand">
      <Text className="text-2xl font-semibold text-ink">Profile</Text>
      <Text className="text-[13px] text-muted">
        Language, units, currency, enquiries
      </Text>
    </View>
  );
}
