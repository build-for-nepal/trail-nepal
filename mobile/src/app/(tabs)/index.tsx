import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SearchBar } from '@/features/explore';

export default function Explore() {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-1 bg-sand px-[18px]"
      style={{ paddingTop: insets.top + 10 }}
    >
      <SearchBar />
    </View>
  );
}
