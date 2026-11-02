import { useMemo, useRef, useState } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { TripType } from '@/features/explore';
import {
  MapSheet,
  SHEET_OPEN_INDEX,
  sheetSnapPoints,
} from '@/features/trail-map/components/MapSheet';
import {
  MapTopBar,
  TOP_BAR_HEIGHT,
} from '@/features/trail-map/components/MapTopBar';
import { TrailMap } from '@/features/trail-map/components/TrailMap';
import type { TrailMapRef } from '@/features/trail-map/components/TrailMap';
import { DEFAULT_LAYER } from '@/features/trail-map/constants';
import type { LayerKey } from '@/features/trail-map/constants';
import { getRoute } from '@/features/trail-map/data/routes';
import {
  elevationStats,
  nearestPointIndex,
} from '@/features/trail-map/logic/profile';
import type {
  DayFocus,
  ElevationPoint,
  TrailMapData,
} from '@/features/trail-map/types';

import { getTripDetail } from '../data';
import { useGoBack } from '../hooks/useGoBack';
import { tripMapData } from '../tripMap';
import type { TripDetail } from '../types';
import { TripNotFound } from './TripNotFound';

type TripMapScreenProps = {
  type: TripType;
  id: string | undefined;
  /** The link's `day`: a position in the itinerary, for the entry to open on. */
  day: string | undefined;
};

/** The entry `day` names, when it is one the map can show. */
function openingFocus(
  data: TrailMapData | undefined,
  day: string | undefined,
): DayFocus | null {
  if (!data || day === undefined || !/^\d+$/.test(day)) return null;
  const index = Number(day);
  return data.days[index] ? { index, nonce: 0 } : null;
}

/** What the chart's mark says for an entry: 'Day 04', 'Section 02'. */
function entryLabel(detail: TripDetail, index: number): string | undefined {
  switch (detail.type) {
    case 'trek': {
      const day = detail.itinerary[index]?.day;
      return day ? `Day ${day}` : undefined;
    }
    case 'hike': {
      const section = detail.route[index];
      return section ? `Section ${section.order}` : undefined;
    }
    case 'cultural':
      return detail.itinerary[index]?.day;
  }
}

/**
 * A trip's full-screen map: the trail with a pin per day or section, or a tour's sites, under
 * floating controls. A tapped pin shows its popup on the map. A trek or hike has a sheet with
 * the route's numbers and its elevation chart.
 */
export function TripMapScreen({ type, id, day }: TripMapScreenProps) {
  const insets = useSafeAreaInsets();
  const goBack = useGoBack();
  const detail = id ? getTripDetail(type, id) : undefined;
  // Built once: a scrub along the chart re-renders the screen many times a second.
  const data = useMemo(
    () => (detail && id ? tripMapData(detail, id) : undefined),
    [detail, id],
  );
  // A tour has no route, so no profile and no sheet.
  const profile = useMemo(
    () =>
      detail && id && detail.type !== 'cultural'
        ? (getRoute(id)?.profile ?? null)
        : null,
    [detail, id],
  );
  const stats = useMemo(
    () => (profile ? elevationStats(profile) : null),
    [profile],
  );

  const [focus, setFocus] = useState(() => openingFocus(data, day));
  const [layer, setLayer] = useState<LayerKey>(DEFAULT_LAYER);
  const [sheetIndex, setSheetIndex] = useState(SHEET_OPEN_INDEX);
  const [scrub, setScrub] = useState<ElevationPoint | null>(null);
  // Whether the chart marks the shown entry: until a finger next goes on the chart.
  const [chartMarked, setChartMarked] = useState(true);
  const map = useRef<TrailMapRef>(null);
  const snapPoints = useMemo(
    () => sheetSnapPoints(insets.bottom),
    [insets.bottom],
  );

  if (!detail || !data) return <TripNotFound />;

  const focusedPoint = focus ? data.days[focus.index]?.points[0] : undefined;
  const profileMarker =
    profile && focusedPoint && chartMarked
      ? nearestPointIndex(profile, focusedPoint)
      : null;
  const sheet = profile && stats ? { profile, stats } : null;

  // A new nonce every time, so tapping the shown entry's pin again still pulses it. The pin
  // is in view already, so the map stays put.
  const select = (index: number) => {
    setFocus((current) => ({
      index,
      nonce: (current?.nonce ?? 0) + 1,
      fromMap: true,
    }));
    setChartMarked(true);
  };

  return (
    <View className="flex-1 bg-sand">
      <TrailMap
        ref={map}
        data={data}
        focus={focus}
        layer={layer}
        // The top bar and the sheet cover the map; a shown entry is framed between them.
        insets={{
          top: insets.top + TOP_BAR_HEIGHT,
          bottom: sheet
            ? (snapPoints[sheetIndex] ?? snapPoints[0])
            : insets.bottom,
        }}
        marker={scrub ? [scrub.lng, scrub.lat] : null}
        onPinPress={select}
      />
      {sheet ? (
        <MapSheet
          stats={sheet.stats}
          profile={sheet.profile}
          profileMarker={profileMarker}
          markerLabel={
            focus && chartMarked ? entryLabel(detail, focus.index) : undefined
          }
          snapPoints={snapPoints}
          onIndexChange={setSheetIndex}
          onScrub={(point) => {
            setScrub(point);
            if (point) setChartMarked(false);
          }}
        />
      ) : null}
      {/* Last, so an open layer menu sits over everything and a tap anywhere closes it. */}
      <MapTopBar
        layer={layer}
        onLayerChange={setLayer}
        onResetNorth={() => map.current?.resetNorth()}
        onBack={goBack}
      />
    </View>
  );
}
