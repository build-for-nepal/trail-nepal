import { Text, View } from 'react-native';

/** Where the map would be, in places it can't run: the web export and Expo Go. */
export function MapPlaceholder({ message }: { message: string }) {
  return (
    <View className="flex-1 items-center justify-center bg-field p-[24px]">
      <Text className="text-center font-poppins text-[14px] leading-[20px] text-muted">
        {message}
      </Text>
    </View>
  );
}
