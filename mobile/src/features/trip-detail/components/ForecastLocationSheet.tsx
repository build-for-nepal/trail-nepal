import { Check, X } from 'lucide-react-native';
import type { RefObject } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  BottomSheet,
  BottomSheetScrollView,
} from '@/components/ui/bottom-sheet';
import type { BottomSheetModal } from '@/components/ui/bottom-sheet';
import { tripDetailColor } from '@/constants/colors';
import { cn } from '@/lib/utils';

import type { ForecastLocation } from '../types';
import { formatMetres } from '../weather';

type ForecastLocationSheetProps = {
  sheetRef: RefObject<BottomSheetModal | null>;
  locations: readonly ForecastLocation[];
  selectedIndex: number;
  onSelect: (index: number) => void;
};

/** Where the forecast is for. Picking a place closes the sheet. */
export function ForecastLocationSheet({
  sheetRef,
  locations,
  selectedIndex,
  onSelect,
}: ForecastLocationSheetProps) {
  const insets = useSafeAreaInsets();
  const close = () => sheetRef.current?.dismiss();

  return (
    <BottomSheet ref={sheetRef} enableDynamicSizing>
      {/* Scrolls once large text makes the list taller than the screen. */}
      <BottomSheetScrollView
        contentContainerStyle={{ paddingBottom: insets.bottom + 12 }}
      >
        <View className="h-[44px] flex-row items-center justify-between px-[18px]">
          <Text
            accessibilityRole="header"
            className="font-poppins-semibold text-[17px] leading-[22px] text-ink"
          >
            Forecast location
          </Text>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Close"
            onPress={close}
            hitSlop={8}
          >
            <X size={22} color={tripDetailColor.icon} />
          </Pressable>
        </View>
        <View className="border-b border-field" />

        <View accessibilityRole="radiogroup">
          {locations.map((location, index) => {
            const selected = index === selectedIndex;
            const height =
              location.elevationM != null
                ? formatMetres(location.elevationM)
                : null;

            return (
              // aria-checked rather than accessibilityState, which react-native-web 0.21
              // drops, as in PackingRow.
              <Pressable
                key={location.label}
                accessibilityRole="radio"
                aria-checked={selected}
                accessibilityLabel={
                  height ? `${location.label}, ${height}` : location.label
                }
                onPress={() => {
                  onSelect(index);
                  close();
                }}
                className={cn(
                  'min-h-[56px] flex-row items-center gap-[12px] px-[18px] py-[10px]',
                  index < locations.length - 1 && 'border-b border-field',
                )}
              >
                <View className="flex-1">
                  <Text className="font-poppins-semibold text-[15px] leading-[20px] text-ink">
                    {location.label}
                  </Text>
                  {height ? (
                    <Text className="font-poppins text-[13px] leading-[18px] text-muted">
                      {height}
                    </Text>
                  ) : null}
                </View>
                {selected ? (
                  <Check
                    size={20}
                    strokeWidth={2.25}
                    color={tripDetailColor.icon}
                  />
                ) : null}
              </Pressable>
            );
          })}
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
}
