import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import {
  Bus,
  Clock,
  Compass,
  Mountain,
  Route,
  Star,
} from 'lucide-react-native';
import { useEffect, useRef } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { bottomSheetColor, tripDetailColor } from '@/constants/colors';
import { cn } from '@/lib/utils';

import type { ElevationStats } from '../logic/profile';
import type { ElevationPoint } from '../types';
import { CHART_HEIGHT, ElevationChart } from './ElevationChart';

export type SheetFactKind =
  'elevation' | 'distance' | 'time' | 'terrain' | 'transport' | 'highlights';
export type SheetFact = { kind: SheetFactKind; text: string };

/** One itinerary entry as the sheet shows it: a chip, and a card while it is selected. */
export type SheetEntry = {
  /** Short, for the chip: 'Day 04', 'Section 02'. */
  label: string;
  title: string;
  facts: SheetFact[];
  /** False for an entry with no place on the map; its chip is greyed out. */
  available: boolean;
};

const FACT_ICONS: Record<SheetFactKind, typeof Clock> = {
  elevation: Mountain,
  distance: Route,
  time: Clock,
  terrain: Compass,
  transport: Bus,
  highlights: Star,
};

// The rows' heights, so the sheet's two sizes are known before it lays out: the map frames
// its views in the space above the sheet, and can't wait for a layout pass to know it.
/** 8 above the grab bar, then the bar's 4. */
const HANDLE = 12;
const CHIPS = 12 + 36 + 10;
const STATS = 46 + 12;
/** A rule, two title lines and a row of facts. */
const CARD = 12 + 44 + 8 + 20 + 14;
const CHART = CHART_HEIGHT + 8;

/** The sheet's collapsed and expanded heights. A tour has no route, so no stats or chart. */
export function sheetSnapPoints(
  hasProfile: boolean,
  bottomInset: number,
): [number, number] {
  const collapsed = HANDLE + CHIPS + (hasProfile ? STATS : 0) + bottomInset;
  return [collapsed, collapsed + CARD + (hasProfile ? CHART : 0)];
}

type MapSheetProps = {
  entries: SheetEntry[];
  /** The selected entry's position, highlighted and shown in the card. */
  selected: number | null;
  onSelect: (index: number) => void;
  /** The route's numbers, for a trek or hike. */
  stats: ElevationStats | null;
  profile: ElevationPoint[] | null;
  /** The selected entry's position in `profile`, marked on the chart. */
  profileMarker: number | null;
  /** From sheetSnapPoints(), so the screen knows them too. */
  snapPoints: [number, number];
  /** 0 collapsed, 1 expanded. */
  onIndexChange: (index: number) => void;
  onScrub: (point: ElevationPoint | null) => void;
};

/**
 * The panel under the map: a row of chips for the itinerary and the route's numbers, and
 * when pulled up, the selected entry's card and the elevation chart.
 */
export function MapSheet({
  entries,
  selected,
  onSelect,
  stats,
  profile,
  profileMarker,
  snapPoints,
  onIndexChange,
  onScrub,
}: MapSheetProps) {
  const insets = useSafeAreaInsets();
  const chips = useRef<ScrollView>(null);
  const chipX = useRef<number[]>([]);

  // The selected chip scrolls into view, so a pin tapped on the map shows up in the row.
  useEffect(() => {
    if (selected === null) return;
    const x = chipX.current[selected];
    if (x !== undefined) {
      chips.current?.scrollTo({ x: Math.max(0, x - 16), animated: true });
    }
  }, [selected]);

  const entry = selected === null ? null : entries[selected];

  return (
    <BottomSheet
      index={0}
      snapPoints={snapPoints}
      enableDynamicSizing={false}
      // The chips scroll sideways and the chart takes drags; only the grab bar moves the sheet.
      enableContentPanningGesture={false}
      enableOverDrag={false}
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
        <ScrollView
          ref={chips}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 8,
            paddingHorizontal: 16,
            paddingTop: 12,
            paddingBottom: 10,
          }}
        >
          {entries.map((item, index) => {
            const isSelected = index === selected;
            return (
              <Pressable
                key={index}
                disabled={!item.available}
                accessibilityRole="button"
                accessibilityLabel={`${item.label}, ${item.title}`}
                accessibilityState={{
                  selected: isSelected,
                  disabled: !item.available,
                }}
                onPress={() => onSelect(index)}
                onLayout={(event) => {
                  chipX.current[index] = event.nativeEvent.layout.x;
                }}
                className={cn(
                  'h-[36px] justify-center rounded-[8px] border px-[14px]',
                  isSelected
                    ? 'border-primary bg-primary'
                    : 'border-border bg-surface',
                  !item.available && 'opacity-40',
                )}
              >
                <Text
                  numberOfLines={1}
                  className={cn(
                    'font-poppins-semibold text-[13px] leading-[18px]',
                    isSelected ? 'text-surface' : 'text-ink',
                  )}
                >
                  {item.label}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {stats ? <StatsRow stats={stats} /> : null}

        {entry ? (
          <View
            className="mx-[16px] border-t border-border pt-[12px]"
            style={{ height: CARD }}
          >
            <Text
              numberOfLines={2}
              className="font-poppins-semibold text-[15px] leading-[22px] text-ink"
            >
              {entry.label} · {entry.title}
            </Text>
            <View className="mt-[8px] flex-row flex-wrap gap-x-[14px] gap-y-[4px]">
              {entry.facts.map((fact) => {
                const Icon = FACT_ICONS[fact.kind];
                return (
                  <View
                    key={fact.kind}
                    className="max-w-full flex-row items-center gap-[5px]"
                  >
                    <Icon
                      size={14}
                      strokeWidth={2}
                      color={tripDetailColor.icon}
                    />
                    <Text
                      numberOfLines={1}
                      className="shrink font-poppins-medium text-[11px] leading-[16px] text-ink"
                    >
                      {fact.text}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        ) : (
          <View
            className="mx-[16px] justify-center border-t border-border"
            style={{ height: CARD }}
          >
            <Text className="font-poppins text-[13px] leading-[18px] text-muted">
              Tap a day or a pin to see it here.
            </Text>
          </View>
        )}

        {profile ? (
          <View className="px-[10px] pb-[8px]">
            <ElevationChart
              points={profile}
              marker={profileMarker}
              markerLabel={entry?.label}
              onScrub={onScrub}
            />
          </View>
        ) : null}
      </BottomSheetView>
    </BottomSheet>
  );
}

const metres = (m: number) => `${Math.round(m).toLocaleString('en-US')} m`;

/** The web's elevation panel numbers: distance, highest point, and total ascent and descent. */
function StatsRow({ stats }: { stats: ElevationStats }) {
  return (
    <View className="mx-[16px] mb-[12px] h-[46px] flex-row items-center rounded-[10px] bg-field px-[4px]">
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
