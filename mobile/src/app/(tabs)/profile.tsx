import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { authClient, LOGIN_HREF, useAuth } from '@/features/auth';

export default function Profile() {
  const { session, status } = useAuth();

  return (
    <View className="flex-1 items-center justify-center bg-sand px-[32px]">
      <Text
        accessibilityRole="header"
        className="font-fraunces text-[22px] leading-[28px] text-ink"
      >
        Profile
      </Text>
      <Text className="mt-[6px] text-center font-poppins text-[14px] leading-[21px] text-muted">
        Language, units, currency, enquiries
      </Text>

      {status === 'authenticated' && session ? (
        <>
          <Text className="mt-[20px] text-center font-poppins-semibold text-[14px] leading-[20px] text-ink">
            {session.user.email}
          </Text>
          <Pressable
            accessibilityRole="button"
            onPress={() => void authClient.signOut()}
            className="mt-[12px] rounded-full border border-border px-[24px] py-[12px]"
          >
            <Text className="font-poppins-semibold text-[13px] leading-[18px] text-ink">
              Sign out
            </Text>
          </Pressable>
        </>
      ) : (
        <Pressable
          accessibilityRole="button"
          onPress={() => router.push(LOGIN_HREF)}
          className="mt-[20px] rounded-full bg-brand px-[28px] py-[14px]"
        >
          <Text className="font-poppins-semibold text-[14px] leading-[20px] text-ink">
            Sign in
          </Text>
        </Pressable>
      )}
    </View>
  );
}
