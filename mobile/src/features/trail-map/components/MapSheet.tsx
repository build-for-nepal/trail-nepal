import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { bottomSheetColor } from '@/constants/colors';
import { cn } from '@/lib/utils';

import type { ElevationStats } from '../logic/profile';
import type { ElevationPoint } from '../types';
import { CHART_HEIGHT, ElevationChart } from './ElevationChart';

// The rows' heights, so the sheet's two sizes are known before it lays out: the map frames
// its views in the space above the sheet, and can't wait for a layout pass to know it.
/** 8 above the grab bar, then the bar's 4. */
const HANDLE = 12;
const STATS = 14 + 46 + 12;
const CHART = CHART_HEIGHT + 8;

/** The sheet's collapsed and expanded heights: the route's numbers, then its chart too. */
export function sheetSnapPoints(bottomInset: number): [number, number] {
  const collapsed = HANDLE + STATS + bottomInset;
  return [collapsed, collapsed + CHART];
}

/** The sheet opens pulled up, with the chart showing. */
export const SHEET_OPEN_INDEX = 1;

type MapSheetProps = {
  stats: ElevationStats;
  profile: ElevationPoint[];
  /** The shown entry's position in `profile`, marked on the chart. */
  profileMarker: number | null;
  /** What the mark says, e.g. 'Day 04'. */
  markerLabel?: string;
  /** From sheetSnapPoints(), so the screen knows them too. */
  snapPoints: [number, number];
  /** 0 collapsed, 1 expanded. */
  onIndexChange: (index: number) => void;
  onScrub: (point: ElevationPoint | null) => void;
};

/**
 * The panel under a trek's or hike's map: the route's numbers, and its elevation chart. It
 * drags from anywhere: up and down moves it, sideways on the chart scrubs the route.
 */
export function MapSheet({
  stats,
  profile,
  profileMarker,
  markerLabel,
  snapPoints,
  onIndexChange,
  onScrub,
}: MapSheetProps) {
  const insets = useSafeAreaInsets();

  return (
    <BottomSheet
      index={SHEET_OPEN_INDEX}
      snapPoints={snapPoints}
      enableDynamicSizing={false}
      enableOverDrag={false}
      // Only an up-or-down drag moves the sheet, so a sideways one reaches the chart.
      activeOffsetY={[-6, 6]}
      failOffsetX={[-10, 10]}
      onChange={(index) => onIndexChange(index)}
      // The same look as the app's modal sheets (components/ui/bottom-sheet).
      backgroundStyle={{
        backgroundColor: bottomSheetColor.surface,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
      }}
      handleStyle={{ paddingTop: 8, paddingBottom: 0 }}
      handleIndicatorStyle={{
        width: 36,
        height: 4,
        backgroundColor: bottomSheetColor.grab,
      }}
    >
      <BottomSheetView style={{ paddingBottom: insets.bottom }}>
        <StatsRow stats={stats} />
        <View className="px-[10px] pb-[8px]">
          <ElevationChart
            points={profile}
            marker={profileMarker}
            markerLabel={markerLabel}
            onScrub={onScrub}
          />
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}

const metres = (m: number) => `${Math.round(m).toLocaleString('en-US')} m`;

/** The web's elevation panel numbers: distance, highest point, and total ascent and descent. */
function StatsRow({ stats }: { stats: ElevationStats }) {
  return (
    <View className="mx-[16px] mb-[12px] mt-[14px] h-[46px] flex-row items-center rounded-[10px] bg-field px-[4px]">
      <Stat label="Distance" value={`${stats.km.toFixed(1)} km`} />
      <Rule />
      <Stat label="Max elev" value={metres(stats.maxM)} />
      <Rule />
      <Stat
        label="Ascent"
        value={`↑${metres(stats.ascentM)}`}
        className="text-difficulty-moderate"
      />
      <Rule />
      <Stat
        label="Descent"
        value={`↓${metres(stats.descentM)}`}
        className="text-load-over"
      />
    </View>
  );
}

function Stat({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <View className="flex-1 items-center">
      <Text className="font-poppins-semibold text-[8px] uppercase leading-[11px] tracking-[0.8px] text-muted">
        {label}
      </Text>
      <Text
        numberOfLines={1}
        className={cn(
          'font-poppins-semibold text-[12px] leading-[17px] text-ink',
          className,
        )}
      >
        {value}
      </Text>
    </View>
  );
}

function Rule() {
  return <View className="h-[24px] w-px bg-border" />;
}
