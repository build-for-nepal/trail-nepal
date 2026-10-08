import {
  AlertTriangle,
  Banknote,
  Clock,
  Compass,
  Map,
  Mountain,
  Route,
} from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { tripDetailColor } from '@/constants/colors';

import { paragraphs } from '../format';
import { shadows } from '../styles';
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
import { SectionHeader } from './SectionHeader';

const ICON_SIZE = 15;
const ICON_COLOR = tripDetailColor.icon;

// ── Trek expanded body ──────────────────────────────────────────────────────

function TrekDayBody({ day }: { day: TrekDay }) {
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
    </View>
  );
}

// ── Hike expanded body ──────────────────────────────────────────────────────

function HikeSectionBody({ section }: { section: HikeRouteSection }) {
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
    </View>
  );
}

// ── Cultural expanded body ──────────────────────────────────────────────────

function CulturalDayBody({ day }: { day: CulturalDay }) {
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
    </View>
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

function trekEntries(detail: TrekDetail): AccordionEntry[] {
  return detail.itinerary.map((day) => ({
    header: day.day ? `Day ${day.day} : ${day.title}` : day.title,
    body: <TrekDayBody day={day} />,
  }));
}

function hikeEntries(detail: HikeDetail): AccordionEntry[] {
  return detail.route.map((section) => ({
    header: `${section.order} · ${section.title}`,
    body: <HikeSectionBody section={section} />,
  }));
}

function culturalEntries(detail: CulturalTourDetail): AccordionEntry[] {
  return detail.itinerary.map((day) => ({
    header: `${day.day} : ${day.title}`,
    body: <CulturalDayBody day={day} />,
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
};

export function ItinerarySection({ detail }: ItinerarySectionProps) {
  let entries: AccordionEntry[];
  switch (detail.type) {
    case 'trek':
      entries = trekEntries(detail);
      break;
    case 'hike':
      entries = hikeEntries(detail);
      break;
    case 'cultural':
      entries = culturalEntries(detail);
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
