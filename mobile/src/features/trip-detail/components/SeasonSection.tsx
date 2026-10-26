import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';
import {
  Cloud,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Moon,
  Snowflake,
  Sun,
  Wind,
} from 'lucide-react-native';

import { seasonColor } from '@/constants/colors';

import {
  MONTH_NAMES,
  SEASON_BADGE,
  SEASON_ICON_COLOR,
  SEASON_TEXT_COLOR,
  buildSeasonOverview,
  getSeasonStatus,
  trafficByStatus,
  type SeasonStatus,
} from '../format';
import { loadForecast, useForecast } from '../hooks/useForecast';
import { useNow } from '../hooks/useNow';
import type { ForecastDay, ForecastLocation, SeasonMonth } from '../types';
import {
  daysFromToday,
  defaultLocationIndex,
  nepalMonthIndex,
} from '../weather';
import { ForecastCard } from './ForecastCard';
import { SectionHeader } from './SectionHeader';

type SeasonSectionProps = {
  name: string;
  bestSeasons?: string;
  planning: SeasonMonth[];
  /** Where the 10-day forecast can be for. Without any, there is no forecast. */
  forecastLocations?: readonly ForecastLocation[];
};

const NO_LOCATIONS: readonly ForecastLocation[] = [];

function getWeatherIcon(condition: string): LucideIcon {
  const n = condition.toLowerCase();
  if (
    n.includes('thunder') ||
    n.includes('storm') ||
    n.includes('peak monsoon')
  )
    return CloudLightning;
  if (n.includes('snow')) return CloudSnow;
  if (
    n.includes('freezing') ||
    n.includes('extremely cold') ||
    n.includes('chill') ||
    (n.includes('cold') && !n.includes('rain'))
  )
    return Snowflake;
  if (n.includes('wind')) return Wind;
  if (
    n.includes('rain') ||
    n.includes('monsoon') ||
    n.includes('wet') ||
    n.includes('muddy') ||
    n.includes('drizzle')
  )
    return CloudRain;
  if (n.includes('overcast') || n.includes('cloud') || n.includes('fog'))
    return Cloud;
  if (n.includes('stable') || n.includes('cool')) return Moon;
  if (
    n.includes('bloom') ||
    n.includes('spring') ||
    n.includes('warm') ||
    n.includes('clear') ||
    n.includes('sun') ||
    n.includes('perfect') ||
    n.includes('popular') ||
    n.includes('visibility') ||
    n.includes('crisp')
  )
    return Sun;
  return CloudSun;
}

type MonthData = {
  index: number;
  abbr: string;
  label: string;
  detail: string;
  status: SeasonStatus;
  Icon: LucideIcon;
};

export function SeasonSection({
  name,
  bestSeasons,
  planning,
  forecastLocations = NO_LOCATIONS,
}: SeasonSectionProps) {
  const now = useNow();
  // Nepal's month, from the same clock as the forecast's "Today", so the two always agree,
  // and it moves on at Nepal's midnight while the screen is open.
  const currentMonth = nepalMonthIndex(now);
  const [selectedIndex, setSelectedIndex] = useState(currentMonth);

  const [locationIndex, setLocationIndex] = useState(() =>
    defaultLocationIndex(forecastLocations),
  );
  const location: ForecastLocation | undefined =
    forecastLocations[locationIndex];
  const { forecast, loading, failed, refresh } = useForecast(location, now);
  const days = forecast ? daysFromToday(forecast.days, now) : [];
  // Undefined too once every day it covers is over, so nothing past is shown as today.
  const shown = forecast && days.length > 0 ? { ...forecast, days } : undefined;

  // The new place's request starts here, before it renders, so the card announces this
  // request's result and never shows the place's last error first.
  const selectLocation = (index: number) => {
    const result = loadForecast(forecastLocations[index]);
    setLocationIndex(index);
    return result;
  };

  const months: MonthData[] = useMemo(
    () =>
      planning.map((entry, i) => {
        const [label, ...rest] = entry.condition.split(' / ');
        return {
          index: i,
          abbr: entry.month.toUpperCase(),
          label,
          detail: rest.join(' / '),
          status: getSeasonStatus(entry.condition),
          Icon: getWeatherIcon(entry.condition),
        };
      }),
    [planning],
  );

  const selected = months[selectedIndex] ?? months[currentMonth] ?? months[0];
  const badge = SEASON_BADGE[selected.status];
  const monthFullName = MONTH_NAMES[selected.index];

  return (
    <View className="gap-[14px]">
      <SectionHeader
        title="When Should I go?"
        description="Climbing windows for trek regions."
      />

      {bestSeasons ? (
        <Text className="font-poppins-medium text-[13px] italic leading-[18px] text-muted">
          Peak season to trek {name} is {bestSeasons}
        </Text>
      ) : null}

      <View
        className="rounded-[20px] p-[14px]"
        style={{ backgroundColor: seasonColor.containerBg }}
      >
        <View className="flex-row flex-wrap gap-[8px]">
          {months.map((month) => (
            <MonthCard
              key={month.abbr}
              month={month}
              isCurrent={month.index === currentMonth}
              isSelected={month.index === selectedIndex}
              onPress={() => setSelectedIndex(month.index)}
            />
          ))}
        </View>

        <View
          className="mt-[16px] border-t pt-[14px]"
          style={{ borderColor: 'rgba(0,0,0,0.05)' }}
        >
          <View className="flex-row items-center gap-[8px]">
            <Text className="font-poppins-semibold text-[17px] leading-[22px] text-ink">
              {monthFullName}
            </Text>
            <View
              className="rounded-full px-[8px] py-[2px]"
              style={{ backgroundColor: badge.bg }}
            >
              <Text
                className="font-poppins-semibold text-[10px] uppercase leading-[14px] tracking-[0.5px]"
                style={{ color: badge.text }}
              >
                {badge.label}
              </Text>
            </View>
          </View>
          <Text className="mt-[4px] font-poppins text-[14px] leading-[21px] text-muted">
            {buildSeasonOverview(
              monthFullName,
              selected.label,
              selected.detail,
              selected.status,
            )}
          </Text>

          {location && shown ? (
            selected.index === currentMonth ? (
              <TodayForecast
                place={location.label}
                today={shown.days[0]}
                visitors={trafficByStatus[selected.status]}
              />
            ) : (
              <Text className="mt-[10px] font-poppins text-[12px] leading-[16px] text-muted">
                Select {MONTH_NAMES[currentMonth]} to see today’s forecast.
              </Text>
            )
          ) : null}
        </View>
      </View>

      <Legend />

      {location ? (
        <ForecastCard
          locations={forecastLocations}
          selectedIndex={locationIndex}
          onSelect={selectLocation}
          forecast={shown}
          loading={loading}
          failed={failed}
          now={now}
          onRefresh={refresh}
        />
      ) : null}
    </View>
  );
}

/** The web's "Today's Forecast", under the current month. */
function TodayForecast({
  place,
  today,
  visitors,
}: {
  place: string;
  today: ForecastDay;
  visitors: string;
}) {
  const rain = Math.round(today.precipMm);

  return (
    <View className="mt-[14px] gap-[8px]">
      <Text className="font-poppins-semibold text-[13px] leading-[18px] text-ink">
        Today’s forecast · {place}
      </Text>
      <View className="flex-row flex-wrap gap-x-[24px] gap-y-[10px]">
        <TodayStat
          value={`${today.maxC}° / ${today.minC}°C`}
          label="Day / Night"
          spoken={`Day ${today.maxC}, night ${today.minC} degrees`}
        />
        <TodayStat
          value={`${rain}\u00A0mm`}
          label="Rainfall"
          spoken={`Rainfall ${rain} millimetres`}
        />
        <TodayStat
          value={visitors}
          label="Visitor numbers"
          spoken={`Visitor numbers ${visitors.toLowerCase()}`}
        />
      </View>
    </View>
  );
}

function TodayStat({
  value,
  label,
  spoken,
}: {
  value: string;
  label: string;
  spoken: string;
}) {
  return (
    <View accessible accessibilityLabel={spoken}>
      <Text className="font-poppins-semibold text-[18px] leading-[24px] text-ink">
        {value}
      </Text>
      <Text className="font-poppins text-[12px] leading-[16px] text-muted">
        {label}
      </Text>
    </View>
  );
}

type MonthCardProps = {
  month: MonthData;
  isCurrent: boolean;
  isSelected: boolean;
  onPress: () => void;
};

function MonthCard({ month, isCurrent, isSelected, onPress }: MonthCardProps) {
  const { Icon } = month;
  const iconColor = SEASON_ICON_COLOR[month.status];
  const labelColor = SEASON_TEXT_COLOR[month.status];

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${month.abbr}, ${month.label}`}
      accessibilityState={{ selected: isSelected }}
      onPress={onPress}
      style={[
        styles.card,
        isSelected && styles.cardSelected,
        { flexBasis: '30%', flexGrow: 1 },
      ]}
    >
      {isCurrent ? (
        <View style={styles.currentBadge}>
          <View style={styles.currentDot} />
          <Text style={styles.currentText}>Now</Text>
        </View>
      ) : null}

      <Text className="font-poppins-semibold text-[12px] uppercase leading-[16px] tracking-[0.5px] text-gray-700">
        {month.abbr}
      </Text>
      <Icon size={22} strokeWidth={2.25} color={iconColor} />
      <Text
        className="font-poppins-semibold text-[11px] leading-[14px]"
        numberOfLines={1}
        style={{ color: labelColor }}
      >
        {month.label}
      </Text>
    </Pressable>
  );
}

function Legend() {
  return (
    <View className="flex-row justify-end gap-[16px]">
      <LegendDot color="#059669" label="PEAK" />
      <LegendDot color="#f43f5e" label="DANGER" />
      <LegendDot color="#f59e0b" label="CAUTION" />
    </View>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <View className="flex-row items-center gap-[6px]">
      <View
        className="h-[10px] w-[10px] rounded-full"
        style={{ backgroundColor: color }}
      />
      <Text className="font-poppins-semibold text-[12px] leading-[16px] text-muted">
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 14,
    paddingHorizontal: 6,
    borderRadius: 12,
    backgroundColor: seasonColor.cardBg,
    boxShadow: '0 1px 3px rgba(15, 23, 42, 0.08)',
  },
  cardSelected: {
    boxShadow: `0 0 0 2px ${seasonColor.ringOffset}, 0 0 0 4px ${seasonColor.ringColor}`,
  },
  currentBadge: {
    position: 'absolute',
    top: -9,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: seasonColor.currentBadgeBorder,
    backgroundColor: '#fff',
  },
  currentDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: seasonColor.currentDot,
  },
  currentText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 9,
    color: seasonColor.currentBadgeText,
  },
});
