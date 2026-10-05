import { X } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BottomSheet, BottomSheetView } from '@/components/ui/bottom-sheet';
import { Slider } from '@/components/ui/slider';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { filterBarColor } from '@/constants/colors';

import {
  DIFFICULTY_OPTIONS,
  DURATION_OPTIONS,
  ELEVATION_MAX,
  ELEVATION_STEP,
  formatMetres,
  isDifficulty,
  isDurationBucket,
  REGION_OPTIONS,
} from '../filters';
import type { TrekFiltersController } from '../hooks/useTrekFilters';
import type { FilterSectionId } from '../types';
import { FilterOption } from './FilterOption';
import { FilterSection } from './FilterSection';

type FilterSheetProps = {
  controller: TrekFiltersController;
};

export function FilterSheet({ controller }: FilterSheetProps) {
  const { sheetRef, draft, setDraft, section, close, apply, clear } =
    controller;
  const insets = useSafeAreaInsets();

  const scoped = section !== null;
  const shows = (id: FilterSectionId) => section === null || section === id;
  const elevationHint =
    draft.maxElevation >= ELEVATION_MAX
      ? 'Any'
      : `Up to ${formatMetres(draft.maxElevation)}`;

  return (
    <BottomSheet ref={sheetRef} enableDynamicSizing>
      {/* Not scrollable for now: the sheet sizes to show every section at once. */}
      <BottomSheetView style={{ paddingBottom: insets.bottom }}>
        <View className="h-[44px] flex-row items-center justify-between px-[18px]">
          {scoped ? (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Clear section filters"
              onPress={clear}
              hitSlop={8}
            >
              <Text className="text-[13px] font-semibold text-ink underline">
                Clear
              </Text>
            </Pressable>
          ) : (
            <Text
              accessibilityRole="header"
              className="text-[17px] font-bold tracking-[-0.2px] text-ink"
            >
              Filters
            </Text>
          )}
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Close filters"
            onPress={close}
            hitSlop={8}
          >
            <X size={22} color={filterBarColor.icon} />
          </Pressable>
        </View>

        {!scoped ? (
          <View className="flex-row justify-end border-b border-field px-[18px] pb-[12px]">
            <Pressable accessibilityRole="button" onPress={clear} hitSlop={8}>
              <Text className="text-[13px] font-semibold text-ink underline">
                Clear all
              </Text>
            </Pressable>
          </View>
        ) : (
          <View className="border-b border-field" />
        )}

        <View className="gap-[24px] px-[18px] pt-[20px]">
          {shows('difficulty') ? (
            <FilterSection title="Difficulty" hideTitle={scoped}>
              <ToggleGroup
                type="multiple"
                value={draft.difficulty}
                onValueChange={(next) =>
                  setDraft((d) => ({
                    ...d,
                    difficulty: next.filter(isDifficulty),
                  }))
                }
                className="flex-row flex-wrap gap-[8px]"
              >
                {DIFFICULTY_OPTIONS.map(({ value, label }) => (
                  <FilterOption
                    key={value}
                    value={value}
                    label={label}
                    selected={draft.difficulty.includes(value)}
                  />
                ))}
              </ToggleGroup>
            </FilterSection>
          ) : null}

          {shows('duration') ? (
            <FilterSection
              title="Duration"
              hint="In days"
              hideTitle={scoped}
            >
              <ToggleGroup
                type="multiple"
                value={draft.duration}
                onValueChange={(next) =>
                  setDraft((d) => ({
                    ...d,
                    duration: next.filter(isDurationBucket),
                  }))
                }
                className="flex-row flex-wrap gap-[8px]"
              >
                {DURATION_OPTIONS.map((value) => (
                  <FilterOption
                    key={value}
                    value={value}
                    label={value}
                    selected={draft.duration.includes(value)}
                  />
                ))}
              </ToggleGroup>
            </FilterSection>
          ) : null}

          {shows('region') ? (
            <FilterSection title="Region" hideTitle={scoped}>
              <ToggleGroup
                type="multiple"
                value={draft.regions}
                onValueChange={(next) =>
                  setDraft((d) => ({ ...d, regions: next }))
                }
                className="flex-row flex-wrap gap-[8px]"
              >
                {REGION_OPTIONS.map((region) => (
                  <FilterOption
                    key={region}
                    value={region}
                    label={region}
                    selected={draft.regions.includes(region)}
                  />
                ))}
              </ToggleGroup>
            </FilterSection>
          ) : null}

          {shows('elevation') ? (
            <FilterSection
              title="Elevation"
              hint={elevationHint}
              hideTitle={scoped}
            >
              <Slider
                style={{ height: 24 }}
                accessibilityLabel="Maximum elevation"
                minimumValue={0}
                maximumValue={ELEVATION_MAX}
                step={ELEVATION_STEP}
                value={draft.maxElevation}
                onValueChange={(value) =>
                  setDraft((d) => ({ ...d, maxElevation: value }))
                }
              />
              <View className="mt-[8px] flex-row justify-between">
                <Text className="text-[12px] font-semibold text-muted">
                  {formatMetres(0)}
                </Text>
                <Text className="text-[12px] font-semibold text-muted">
                  {formatMetres(ELEVATION_MAX)}
                </Text>
              </View>
            </FilterSection>
          ) : null}
        </View>

        <View className="items-center px-[18px] pb-[30px] pt-[28px]">
          <Pressable
            accessibilityRole="button"
            onPress={apply}
            className="h-[44px] min-w-[150px] items-center justify-center rounded-full border border-ink bg-surface px-[28px]"
          >
            {/* No trek data on mobile yet, so there is no result count to show. */}
            <Text className="text-[15px] font-bold text-ink">Show</Text>
          </Pressable>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}
