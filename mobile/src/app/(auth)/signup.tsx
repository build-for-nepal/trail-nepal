import { Text, View } from 'react-native';

// Placeholder. The real registration screen, with the password checklist, is #288.
export default function SignUp() {
  return (
    <View className="flex-1 items-center justify-center gap-2 bg-sand px-6">
      <Text className="text-2xl font-semibold text-ink">Create account</Text>
      <Text className="text-center text-[13px] text-muted">
        Registration form coming next
      </Text>
    </View>
  );
}
