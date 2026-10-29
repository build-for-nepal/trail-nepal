import { useMemo, useRef, useState } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { TripType } from '@/features/explore';
import {
  MapSheet,
  sheetSnapPoints,
} from '@/features/trail-map/components/MapSheet';
import type {
  SheetEntry,
  SheetFact,
  SheetFactKind,
  SheetSite,
} from '@/features/trail-map/components/MapSheet';
import {
  MapTopBar,
  TOP_BAR_HEIGHT,
} from '@/features/trail-map/components/MapTopBar';
import { TrailMap } from '@/features/trail-map/components/TrailMap';
import type { TrailMapRef } from '@/features/trail-map/components/TrailMap';
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

/** The facts with a value, in order. */
function facts(pairs: [SheetFactKind, string | undefined][]): SheetFact[] {
  return pairs.flatMap(([kind, text]) => (text ? [{ kind, text }] : []));
}

/** The itinerary as the sheet shows it: a trek's days, a hike's sections or a tour's days. */
function sheetEntries(detail: TripDetail, data: TrailMapData): SheetEntry[] {
  const available = (index: number) => data.days[index] != null;
  switch (detail.type) {
    case 'trek':
      return detail.itinerary.map((day, index) => ({
        label: day.day ? `Day ${day.day}` : day.title,
        title: day.title,
        facts: facts([
          ['elevation', day.stats?.elevation],
          ['distance', day.stats?.distance],
          ['time', day.stats?.duration ?? day.duration],
        ]),
        available: available(index),
      }));
    case 'hike':
      return detail.route.map((section, index) => ({
        label: `Section ${section.order}`,
        title: section.title,
        facts: facts([
          ['distance', section.distanceMark],
          ['time', section.timeMark],
          ['terrain', section.terrain],
        ]),
        available: available(index),
      }));
    case 'cultural':
      return detail.itinerary.map((day, index) => ({
        label: day.day,
        title: day.title,
        facts: facts([
          ['transport', day.transport],
          [
            'highlights',
            day.highlights.length ? day.highlights.join(' · ') : undefined,
          ],
        ]),
        available: available(index),
      }));
  }
}

/** The card for a tapped site: its name and line, under its day's label and colour. */
function sheetSite(
  data: TrailMapData,
  entries: SheetEntry[],
  key: string,
): SheetSite | null {
  const pin = data.pins.find((candidate) => candidate.key === key);
  if (!pin?.site) return null;
  return {
    ...pin.site,
    dayLabel: entries[pin.days[0]]?.label ?? '',
    color: pin.color,
  };
}

/**
 * A trip's full-screen map: the trail with a pin per day or section, or a tour's sites, under
 * a floating top bar and over a sheet with the itinerary, the route's numbers and its
 * elevation chart. Pins, chips and chart select the same entry.
 */
export function TripMapScreen({ type, id, day }: TripMapScreenProps) {
  const insets = useSafeAreaInsets();
  const goBack = useGoBack();
  const detail = id ? getTripDetail(type, id) : undefined;
  const data = detail && id ? tripMapData(detail, id) : undefined;
  // A tour has no route, so no profile: the sheet shows its days alone.
  const profile =
    detail && id && detail.type !== 'cultural'
      ? (getRoute(id)?.profile ?? null)
      : null;

  const [focus, setFocus] = useState(() => openingFocus(data, day));
  const [layer, setLayer] = useState<LayerKey>('satellite');
  const [sheetIndex, setSheetIndex] = useState(0);
  const [scrub, setScrub] = useState<ElevationPoint | null>(null);
  // The key of a tapped site's pin: its card replaces the day's until a chip is tapped.
  const [siteKey, setSiteKey] = useState<string | null>(null);
  const map = useRef<TrailMapRef>(null);
  const snapPoints = useMemo(
    () => sheetSnapPoints(profile !== null, insets.bottom),
    [profile, insets.bottom],
  );

  if (!detail || !data) return <TripNotFound />;

  const entries = sheetEntries(detail, data);
  const site = siteKey ? sheetSite(data, entries, siteKey) : null;
  const stats = profile ? elevationStats(profile) : null;
  const focusedPoint = focus ? data.days[focus.index]?.points[0] : undefined;
  const profileMarker =
    profile && focusedPoint ? nearestPointIndex(profile, focusedPoint) : null;

  // A new nonce every time, so re-selecting the shown entry still moves the map to it.
  const select = (index: number) =>
    setFocus((current) => ({ index, nonce: (current?.nonce ?? 0) + 1 }));

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
          bottom: snapPoints[sheetIndex] ?? snapPoints[0],
        }}
        marker={scrub ? [scrub.lng, scrub.lat] : null}
        highlight={site ? siteKey : null}
        onPinPress={(index, key) => {
          setSiteKey(key);
          select(index);
        }}
      />
      <MapTopBar
        layer={layer}
        onLayerChange={setLayer}
        onResetNorth={() => map.current?.resetNorth()}
        onBack={goBack}
      />
      <MapSheet
        entries={entries}
        selected={focus?.index ?? null}
        onSelect={(index) => {
          setSiteKey(null);
          select(index);
        }}
        site={site}
        stats={stats}
        profile={profile}
        profileMarker={profileMarker}
        snapPoints={snapPoints}
        onIndexChange={setSheetIndex}
        onScrub={setScrub}
      />
    </View>
  );
}
