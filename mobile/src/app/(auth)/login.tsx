import { Text, View } from 'react-native';

// Placeholder. The real screen — email and password fields, live validation
// mirroring the backend's password policy, and Google sign-in — is #287/#289.
export default function Login() {
  return (
    <View className="flex-1 items-center justify-center bg-sand px-[32px]">
      <Text
        accessibilityRole="header"
        className="font-fraunces text-[22px] leading-[28px] text-ink"
      >
        Log in
      </Text>
      <Text className="mt-[6px] text-center font-poppins text-[14px] leading-[21px] text-muted">
        Sign-in form coming next
      </Text>
    </View>
  );
}
