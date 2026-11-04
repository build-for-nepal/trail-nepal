import { Link } from 'expo-router';
import type { Href } from 'expo-router';
import {
  AlertTriangle,
  Banknote,
  Clock,
  Compass,
  Map,
  MapPin,
  Mountain,
  Route,
} from 'lucide-react-native';
import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { tripDetailColor } from '@/constants/colors';
import { cn } from '@/lib/utils';

import { paragraphs } from '../format';
import { mapHref } from '../href';
import { shadows } from '../styles';
import { tripMapData } from '../tripMap';
import type {
  CulturalDay,
  CulturalTourDetail,
  HikeDetail,
  HikeRouteSection,
  TrekDay,
  TrekDetail,
  TripDetail,
} from '../types';
import type { AccordionEntry } from '@/components/ui/accordion';
import { ItineraryAccordion } from '@/components/ui/accordion';
import { MapPreviewCard } from './MapPreviewCard';
import { SectionHeader } from './SectionHeader';

const ICON_SIZE = 15;
const ICON_COLOR = tripDetailColor.icon;

/** Where an expanded entry links to the full map, opened on it. */
type MapLink = { href: Href; label: string };

// ── Trek expanded body ──────────────────────────────────────────────────────

function TrekDayBody({ day, map }: { day: TrekDay; map?: MapLink }) {
  const desc = day.description ? paragraphs(day.description) : [];
  const { stats, price } = day;

  return (
    <View className="gap-[12px]">
      {desc.map((p, i) => (
        <Text
          key={i}
          className="font-poppins text-[13px] leading-[20px] text-muted"
        >
          {p}
        </Text>
      ))}

      {stats ? (
        <View className="flex-row flex-wrap gap-x-[16px] gap-y-[6px] pt-[4px]">
          {stats.duration ? (
            <StatPill icon={Clock} value={stats.duration} />
          ) : null}
          {stats.distance ? (
            <StatPill icon={Map} value={stats.distance} />
          ) : null}
          {stats.elevation ? (
            <StatPill icon={Mountain} value={stats.elevation} />
          ) : null}
          {stats.note ? (
            <StatPill icon={AlertTriangle} value={stats.note} red />
          ) : null}
        </View>
      ) : null}

      {price ? (
        <View className="flex-row items-center gap-[6px] pt-[2px]">
          <Banknote size={ICON_SIZE} strokeWidth={2} color={ICON_COLOR} />
          <Text className="flex-1 font-poppins text-[12px] leading-[18px] text-muted">
            {price}
          </Text>
        </View>
      ) : null}

      {map ? <ShowOnMap {...map} /> : null}
    </View>
  );
}

// ── Hike expanded body ──────────────────────────────────────────────────────

function HikeSectionBody({
  section,
  map,
}: {
  section: HikeRouteSection;
  map?: MapLink;
}) {
  const desc = section.description ? paragraphs(section.description) : [];

  return (
    <View className="gap-[12px]">
      {desc.map((p, i) => (
        <Text
          key={i}
          className="font-poppins text-[13px] leading-[20px] text-muted"
        >
          {p}
        </Text>
      ))}

      {section.terrain ? (
        <View className="flex-row items-start gap-[6px] pt-[2px]">
          <Compass size={ICON_SIZE} strokeWidth={2} color={ICON_COLOR} />
          <Text className="flex-1 font-poppins text-[12px] leading-[18px] text-muted">
            <Text className="font-poppins-semibold">Terrain: </Text>
            {section.terrain}
          </Text>
        </View>
      ) : null}

      {section.timeMark || section.distanceMark ? (
        <View className="flex-row flex-wrap gap-x-[16px] gap-y-[6px] pt-[4px]">
          {section.timeMark ? (
            <StatPill icon={Clock} value={section.timeMark} />
          ) : null}
          {section.distanceMark ? (
            <StatPill icon={Map} value={section.distanceMark} />
          ) : null}
        </View>
      ) : null}

      {map ? <ShowOnMap {...map} /> : null}
    </View>
  );
}

// ── Cultural expanded body ──────────────────────────────────────────────────

function CulturalDayBody({ day, map }: { day: CulturalDay; map?: MapLink }) {
  const desc = paragraphs(day.description);

  return (
    <View className="gap-[12px]">
      {desc.map((p, i) => (
        <Text
          key={i}
          className="font-poppins text-[13px] leading-[20px] text-muted"
        >
          {p}
        </Text>
      ))}

      {day.transport ? (
        <View className="flex-row items-center gap-[6px] pt-[2px]">
          <Route size={ICON_SIZE} strokeWidth={2} color={ICON_COLOR} />
          <Text className="flex-1 font-poppins text-[12px] leading-[18px] text-muted">
            {day.transport}
          </Text>
        </View>
      ) : null}

      {day.highlights.length > 0 ? (
        <Text className="font-poppins-italic text-[12px] leading-[18px] text-muted">
          Highlights: {day.highlights.join(' · ')}
        </Text>
      ) : null}

      {map ? <ShowOnMap {...map} /> : null}
    </View>
  );
}

// ── Shared map link ─────────────────────────────────────────────────────────

function ShowOnMap({ href, label }: MapLink) {
  return (
    <Link href={href} asChild>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Show ${label} on the map`}
        hitSlop={8}
        className="self-start"
      >
        {({ pressed }) => (
          <View
            className={cn(
              'flex-row items-center gap-[6px] rounded-full border border-border px-[12px] py-[7px]',
              pressed ? 'bg-field' : 'bg-surface',
            )}
          >
            <MapPin size={ICON_SIZE} strokeWidth={2} color={ICON_COLOR} />
            <Text className="font-poppins-medium text-[12px] leading-[16px] text-ink">
              Show on map
            </Text>
          </View>
        )}
      </Pressable>
    </Link>
  );
}

// ── Shared stat pill ────────────────────────────────────────────────────────

function StatPill({
  icon: Icon,
  value,
  red,
}: {
  icon: typeof Clock;
  value: string;
  red?: boolean;
}) {
  return (
    <View className="flex-row items-center gap-[5px]">
      <Icon
        size={ICON_SIZE}
        strokeWidth={2}
        color={red ? '#DC2626' : ICON_COLOR}
      />
      <Text
        className={`font-poppins-medium text-[11px] leading-[16px] ${red ? 'text-[#DC2626]' : 'text-ink'}`}
      >
        {value}
      </Text>
    </View>
  );
}

// ── Entry builders ──────────────────────────────────────────────────────────

/** The full map opened on an entry, for an entry the map can show. */
type MapLinkFor = (index: number, label: string) => MapLink | undefined;

function trekEntries(
  detail: TrekDetail,
  mapLink: MapLinkFor,
): AccordionEntry[] {
  return detail.itinerary.map((day, i) => ({
    header: day.day ? `Day ${day.day} : ${day.title}` : day.title,
    body: (
      <TrekDayBody
        day={day}
        map={mapLink(i, day.day ? `Day ${day.day}` : day.title)}
      />
    ),
  }));
}

function hikeEntries(
  detail: HikeDetail,
  mapLink: MapLinkFor,
): AccordionEntry[] {
  return detail.route.map((section, i) => ({
    header: `${section.order} · ${section.title}`,
    body: (
      <HikeSectionBody
        section={section}
        map={mapLink(i, `section ${section.order}`)}
      />
    ),
  }));
}

function culturalEntries(
  detail: CulturalTourDetail,
  mapLink: MapLinkFor,
): AccordionEntry[] {
  return detail.itinerary.map((day, i) => ({
    header: `${day.day} : ${day.title}`,
    body: <CulturalDayBody day={day} map={mapLink(i, day.day)} />,
  }));
}

// ── Section titles ──────────────────────────────────────────────────────────

function sectionTitle(detail: TripDetail) {
  return detail.type === 'hike' ? 'Route' : 'Itinerary';
}

function sectionDescription(detail: TripDetail) {
  switch (detail.type) {
    case 'trek':
      return 'Day-by-day route overview';
    case 'hike':
      return 'Section-by-section route overview';
    case 'cultural':
      return 'Day-by-day tour overview';
  }
}

// ── Public component ────────────────────────────────────────────────────────

type ItinerarySectionProps = {
  detail: TripDetail;
  id: string;
};

export function ItinerarySection({ detail, id }: ItinerarySectionProps) {
  // Kept across renders, as opening a day re-renders this: a new one would send the
  // preview's pins and pictures to the map again.
  const mapData = useMemo(() => tripMapData(detail, id), [detail, id]);
  const mapLink: MapLinkFor = (index, label) =>
    mapData?.days[index]
      ? { href: mapHref(detail.type, id, index), label }
      : undefined;

  let entries: AccordionEntry[];
  switch (detail.type) {
    case 'trek':
      entries = trekEntries(detail, mapLink);
      break;
    case 'hike':
      entries = hikeEntries(detail, mapLink);
      break;
    case 'cultural':
      entries = culturalEntries(detail, mapLink);
      break;
  }

  const [activeSections, setActiveSections] = useState<number[]>([]);

  if (entries.length === 0) return null;

  const anyOpen = activeSections.length > 0;

  function toggleAll() {
    if (anyOpen) {
      setActiveSections([]);
    } else {
      setActiveSections(entries.map((_, i) => i));
    }
  }

  return (
    <View className="gap-[16px]">
      <View className="flex-row items-end justify-between">
        <SectionHeader
          title={sectionTitle(detail)}
          description={sectionDescription(detail)}
        />
        <Pressable onPress={toggleAll} hitSlop={8}>
          <Text className="font-poppins-medium text-[12px] leading-[18px] text-muted">
            {anyOpen ? 'Collapse all' : 'Expand all'}
          </Text>
        </Pressable>
      </View>
      {mapData ? (
        <MapPreviewCard data={mapData} href={mapHref(detail.type, id)} />
      ) : null}
      <View style={shadows.card}>
        <ItineraryAccordion
          items={entries}
          activeSections={activeSections}
          onActiveSectionsChange={setActiveSections}
        />
      </View>
    </View>
  );
}
