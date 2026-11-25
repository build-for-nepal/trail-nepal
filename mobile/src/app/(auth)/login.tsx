import { Text, View } from 'react-native';

// Placeholder. The real screen — email and password fields, live validation
// mirroring the backend's password policy, and Google sign-in — is #287/#289.
export default function Login() {
  return (
    <View className="flex-1 items-center justify-center gap-2 bg-sand px-6">
      <Text className="text-2xl font-semibold text-ink">Log in</Text>
      <Text className="text-center text-[13px] text-muted">
        Sign-in form coming next
      </Text>
    </View>
  );
}
