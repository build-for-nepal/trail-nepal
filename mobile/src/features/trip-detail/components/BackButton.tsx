import { ChevronLeft } from 'lucide-react-native';
import { Pressable, View } from 'react-native';

import { tripDetailColor } from '@/constants/colors';

import { useGoBack } from '../hooks/useGoBack';
import { shadows } from '../styles';

type BackButtonProps = {
  /** Distance from the top of the screen, below the status bar. */
  top: number;
};

export function BackButton({ top }: BackButtonProps) {
  const goBack = useGoBack();

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Back"
      onPress={goBack}
      hitSlop={8}
      className="absolute left-[18px]"
      style={{ top }}
    >
      {({ pressed }) => (
        <View
          className="h-[40px] w-[40px] items-center justify-center rounded-full bg-surface"
          style={[
            shadows.button,
            { transform: [{ scale: pressed ? 0.92 : 1 }] },
          ]}
        >
          <ChevronLeft size={22} strokeWidth={2} color={tripDetailColor.icon} />
        </View>
      )}
    </Pressable>
  );
}
