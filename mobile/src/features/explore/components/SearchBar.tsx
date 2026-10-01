import { Search } from 'lucide-react-native';
import { TextInput, View } from 'react-native';

import { searchBarColor } from '@/constants/colors';

export function SearchBar() {
  return (
    <View className="h-[46px] rounded-full bg-field">
      {/* The input spans the whole pill; icon taps pass through to it. */}
      <View className="pointer-events-none absolute inset-y-0 left-[16px] justify-center">
        <Search size={18} color={searchBarColor.icon} />
      </View>

      <TextInput
        role="searchbox"
        placeholder="Search treks, hikes and tours"
        placeholderTextColor={searchBarColor.placeholder}
        enterKeyHint="search"
        autoCorrect={false}
        underlineColorAndroid="transparent"
        className="h-full py-0 pl-[44px] pr-[16px] text-[15px] text-ink"
      />
    </View>
  );
}
