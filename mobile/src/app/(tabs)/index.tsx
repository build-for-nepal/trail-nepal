import { useState } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  FilterBar,
  FilterSheet,
  SearchBar,
  toAppliedFilters,
  TrekList,
  TypeToggle,
  useTrekFilters,
} from '@/features/explore';
import type { TripType } from '@/features/explore';

export default function Explore() {
  const insets = useSafeAreaInsets();
  const filters = useTrekFilters();
  const [type, setType] = useState<TripType>('trek');

  return (
    <View className="flex-1 bg-sand" style={{ paddingTop: insets.top + 10 }}>
      <View className="px-[18px]">
        <SearchBar />
      </View>

      <View className="mt-[12px]">
        <FilterBar
          applied={toAppliedFilters(filters.applied)}
          onOpen={filters.open}
          onRemove={filters.remove}
        />
      </View>

      <View className="mt-[14px] px-[18px]">
        <TypeToggle value={type} onValueChange={setType} />
      </View>

      <TrekList type={type} />

      <FilterSheet controller={filters} />
    </View>
  );
}
