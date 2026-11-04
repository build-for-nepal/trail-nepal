import { Mountain } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { tripDetailColor } from '@/constants/colors';
import { useGoBack } from '@/hooks/useGoBack';

export function TripNotFound() {
  const goBack = useGoBack();

  return (
    <View className="flex-1 items-center justify-center bg-sand px-[32px]">
      <Mountain
        size={32}
        strokeWidth={1.75}
        color={tripDetailColor.placeholder}
      />
      <Text
        accessibilityRole="header"
        className="mt-[12px] font-fraunces text-[22px] leading-[28px] text-ink"
      >
        Trip not found
      </Text>
      <Text className="mt-[6px] text-center font-poppins text-[14px] leading-[21px] text-muted">
        This trip may have moved or no longer exists.
      </Text>
      <Pressable
        accessibilityRole="button"
        onPress={goBack}
        className="mt-[20px] rounded-[16px] bg-brand px-[24px] py-[14px]"
      >
        <Text className="font-poppins-semibold text-[13px] leading-[18px] text-ink">
          Back to Explore
        </Text>
      </Pressable>
    </View>
  );
}
