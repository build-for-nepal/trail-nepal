import { Text, View } from 'react-native';

// Placeholder. The real registration screen, with the password checklist, is #288.
export default function SignUp() {
  return (
    <View className="flex-1 items-center justify-center bg-sand px-[32px]">
      <Text
        accessibilityRole="header"
        className="font-fraunces text-[22px] leading-[28px] text-ink"
      >
        Create account
      </Text>
      <Text className="mt-[6px] text-center font-poppins text-[14px] leading-[21px] text-muted">
        Registration form coming next
      </Text>
    </View>
  );
}
