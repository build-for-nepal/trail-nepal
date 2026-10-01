import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FilterBar, SearchBar } from '@/features/explore';

export default function Explore() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-sand" style={{ paddingTop: insets.top + 10 }}>
      <View className="px-[18px]">
        <SearchBar />
      </View>

      <View className="mt-[12px]">
        <FilterBar />
      </View>
    </View>
  );
}
