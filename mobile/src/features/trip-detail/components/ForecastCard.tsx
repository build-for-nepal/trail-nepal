import { Link } from 'expo-router';
import { ChevronDown, MapPin, RefreshCw } from 'lucide-react-native';
import { useEffect, useRef, useState } from 'react';
import {
  AccessibilityInfo,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import type { BottomSheetModal } from '@/components/ui/bottom-sheet';
import { forecastColor } from '@/constants/colors';
import { cn } from '@/lib/utils';

import type { Forecast, ForecastDay, ForecastLocation } from '../types';
import {
  forecastDayLabel,
  formatMetres,
  updatedLabel,
  weatherLook,
} from '../weather';
import { ForecastLocationSheet } from './ForecastLocationSheet';

type ForecastCardProps = {
  locations: readonly ForecastLocation[];
  selectedIndex: number;
  /** Resolves true once the place has a forecast, false if its request failed. */
  onSelect: (index: number) => Promise<boolean>;
  /** Today on, or undefined while there is none to show. */
  forecast: Forecast | undefined;
  loading: boolean;
  failed: boolean;
  now: number;
  /** Resolves true once there is a fresh forecast, false if the request failed. */
  onRefresh: () => Promise<boolean>;
};

/** The web's 10-day forecast card, under the season calendar. */
export function ForecastCard({
  locations,
  selectedIndex,
  onSelect,
  forecast,
  loading,
  failed,
  now,
  onRefresh,
}: ForecastCardProps) {
  const sheetRef = useRef<BottomSheetModal>(null);
  // The place the user last asked about. A result for another place came too late to say.
  const asked = useRef<string | null>(null);
  // What the web's live region reads out.
  const [status, setStatus] = useState('');
  const location = locations[selectedIndex];

  // Only for what the user asked for: a refresh or a new place, once its request settles.
  const report = (place: ForecastLocation, ok: boolean) => {
    if (asked.current !== place.label) return;
    const message = ok
      ? `Showing the forecast for ${place.label}`
      : `Couldn’t load the forecast for ${place.label}`;
    // react-native-web's announceForAccessibility does nothing, so the web uses a live region.
    if (Platform.OS === 'web') setStatus(message);
    else AccessibilityInfo.announceForAccessibility(message);
  };

  const select = (index: number) => {
    const place = locations[index];
    asked.current = place.label;
    onSelect(index).then((ok) => report(place, ok));
  };
  const refresh = () => {
    asked.current = location.label;
    onRefresh().then((ok) => report(location, ok));
  };

  return (
    <View
      className="rounded-[20px] p-[18px]"
      style={{ backgroundColor: forecastColor.card }}
    >
      <View className="flex-row items-start justify-between gap-[12px]">
        <View className="flex-1 gap-[2px]">
          <Text
            accessibilityRole="header"
            className="font-poppins-semibold text-[18px] leading-[24px] text-white"
          >
            10-Day Forecast
          </Text>
          {forecast ? (
            <View className="flex-row items-center gap-[6px]">
              <View
                className="h-[6px] w-[6px] rounded-full"
                style={{
                  backgroundColor: failed
                    ? forecastColor.stale
                    : forecastColor.fresh,
                }}
              />
              <Text
                className="shrink font-poppins-medium text-[12px] leading-[16px]"
                style={{ color: forecastColor.muted }}
              >
                {updatedLabel(forecast.fetchedAt, now)}
                {failed ? ' · couldn’t refresh' : ''}
              </Text>
            </View>
          ) : null}
        </View>
        {forecast ? (
          <RefreshButton refreshing={loading} onPress={refresh} />
        ) : null}
      </View>

      <LocationControl
        location={location}
        onPress={
          locations.length > 1 ? () => sheetRef.current?.present() : undefined
        }
      />

      {forecast ? (
        <CurrentConditions
          tempC={forecast.current.tempC}
          weatherCode={forecast.current.weatherCode}
        />
      ) : failed ? null : (
        <View className="mt-[16px] h-[66px] justify-between py-[6px]">
          <View
            className="h-[34px] w-[76px] rounded-[8px]"
            style={styles.placeholder}
          />
          <View
            className="h-[12px] w-[96px] rounded-full"
            style={styles.placeholder}
          />
        </View>
      )}

      {forecast ? (
        <DayRows days={forecast.days} />
      ) : failed ? (
        <View className="mt-[14px] items-start gap-[14px]">
          <Text className="font-poppins text-[14px] leading-[21px] text-white">
            Couldn’t load the forecast. Check your connection and try again.
          </Text>
          <Pressable
            accessibilityRole="button"
            onPress={refresh}
            className="h-[44px] items-center justify-center rounded-full bg-surface px-[22px]"
          >
            <Text className="font-poppins-semibold text-[14px] leading-[20px] text-ink">
              Try again
            </Text>
          </Pressable>
        </View>
      ) : (
        <DayRowsPlaceholder />
      )}

      {/* Open-Meteo's data is CC BY 4.0, which asks for this credit. A Link, so the web
          export gets a real <a href> that Enter and middle-click open; native opens the
          browser. */}
      <Link
        href="https://open-meteo.com/"
        target="_blank"
        style={styles.credit}
      >
        Weather data by Open-Meteo.com
      </Link>

      {locations.length > 1 ? (
        <ForecastLocationSheet
          sheetRef={sheetRef}
          locations={locations}
          selectedIndex={selectedIndex}
          onSelect={select}
        />
      ) : null}

      {Platform.OS === 'web' ? (
        <View aria-live="polite" style={styles.offscreen}>
          <Text>{status}</Text>
        </View>
      ) : null}
    </View>
  );
}

function RefreshButton({
  refreshing,
  onPress,
}: {
  refreshing: boolean;
  onPress: () => void;
}) {
  const turn = useSharedValue(0);

  useEffect(() => {
    if (refreshing) {
      turn.set(
        withRepeat(
          withTiming(turn.get() + 360, {
            duration: 800,
            easing: Easing.linear,
          }),
          -1,
        ),
      );
    } else {
      // Finishes the turn it is on rather than stopping at an angle.
      cancelAnimation(turn);
      turn.set(
        withTiming(Math.ceil(turn.get() / 360) * 360, { duration: 250 }),
      );
    }
  }, [refreshing, turn]);

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${turn.value}deg` }],
  }));

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Refresh the forecast"
      accessibilityState={{ busy: refreshing, disabled: refreshing }}
      disabled={refreshing}
      onPress={onPress}
      hitSlop={6}
      className="h-[36px] w-[36px] items-center justify-center rounded-full border"
      style={{
        backgroundColor: forecastColor.control,
        borderColor: forecastColor.controlBorder,
      }}
    >
      <Animated.View style={iconStyle}>
        <RefreshCw size={16} strokeWidth={2.25} color={forecastColor.text} />
      </Animated.View>
    </Pressable>
  );
}

function CurrentConditions({
  tempC,
  weatherCode,
}: {
  tempC: number;
  weatherCode: number;
}) {
  const { label } = weatherLook(weatherCode);

  return (
    <View
      accessible
      accessibilityLabel={`Now ${tempC} degrees Celsius, ${label.toLowerCase()}`}
      className="mt-[16px]"
    >
      <View className="flex-row items-start">
        <Text className="font-poppins-semibold text-[40px] leading-[48px] text-white">
          {tempC}°
        </Text>
        <Text
          className="mt-[6px] font-poppins-semibold text-[13px] leading-[18px]"
          style={{ color: forecastColor.muted }}
        >
          C
        </Text>
      </View>
      <Text
        className="font-poppins-medium text-[13px] leading-[18px]"
        style={{ color: forecastColor.muted }}
      >
        {label}
      </Text>
    </View>
  );
}

/**
 * The place and its height, across the card's full width so names like "Machhapuchhre
 * Base Camp" fit, on two lines at most. A button only when the trip has more than one place.
 */
function LocationControl({
  location,
  onPress,
}: {
  location: ForecastLocation;
  onPress?: () => void;
}) {
  const height =
    location.elevationM != null ? formatMetres(location.elevationM) : null;
  const spoken = `Forecast for ${location.label}${height ? `, ${height}` : ''}`;

  const content = (pressed: boolean) => (
    <View
      className="flex-row items-center gap-[8px] rounded-[12px] border px-[12px] py-[12px]"
      style={{
        backgroundColor: forecastColor.control,
        borderColor: forecastColor.controlBorder,
        opacity: pressed ? 0.75 : 1,
      }}
    >
      <MapPin size={16} strokeWidth={2.25} color={forecastColor.text} />
      <Text
        numberOfLines={2}
        className="flex-1 font-poppins-semibold text-[14px] leading-[19px] text-white"
      >
        {location.label}
      </Text>
      {height ? (
        <Text
          className="font-poppins-medium text-[13px] leading-[18px]"
          style={{ color: forecastColor.muted }}
        >
          {height}
        </Text>
      ) : null}
      {onPress ? (
        <ChevronDown size={16} strokeWidth={2.25} color={forecastColor.text} />
      ) : null}
    </View>
  );

  if (!onPress) {
    return (
      <View accessible accessibilityLabel={spoken} className="mt-[14px]">
        {content(false)}
      </View>
    );
  }

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={spoken}
      accessibilityHint="Choose another place on the route"
      onPress={onPress}
      className="mt-[14px]"
    >
      {({ pressed }) => content(pressed)}
    </Pressable>
  );
}

function DayRows({ days }: { days: ForecastDay[] }) {
  return (
    <View className="mt-[14px]">
      {days.map((day, index) => {
        const { label, Icon } = weatherLook(day.weatherCode);
        const name = forecastDayLabel(day.date, index);

        return (
          <View
            key={day.date}
            accessible
            accessibilityLabel={`${name.spoken}, ${label.toLowerCase()}, high ${day.maxC}, low ${day.minC} degrees`}
            className="flex-row items-center gap-[12px] py-[10px]"
            style={index > 0 ? styles.divider : undefined}
          >
            <Text
              className={cn(
                'flex-1 text-[15px] leading-[20px] text-white',
                index === 0 ? 'font-poppins-semibold' : 'font-poppins',
              )}
            >
              {name.short}
            </Text>
            <Icon size={22} strokeWidth={1.75} color={forecastColor.text} />
            {/* A minimum, not a fixed width, so a low like "-12°" stays on one line at
                large text sizes. */}
            <Text
              numberOfLines={1}
              className="min-w-[44px] text-right font-poppins-semibold text-[15px] leading-[20px] text-white"
            >
              {day.maxC}°
            </Text>
            <Text
              numberOfLines={1}
              className="min-w-[44px] text-right font-poppins-semibold text-[15px] leading-[20px]"
              style={{ color: forecastColor.muted }}
            >
              {day.minC}°
            </Text>
          </View>
        );
      })}
    </View>
  );
}

/** The same rows as DayRows, so the card keeps its height when the forecast arrives. */
function DayRowsPlaceholder() {
  return (
    <View
      accessible
      accessibilityLabel="Loading the forecast"
      accessibilityState={{ busy: true }}
      className="mt-[14px]"
    >
      {Array.from({ length: 10 }, (_, index) => (
        <View
          key={index}
          className="flex-row items-center gap-[12px] py-[10px]"
          style={index > 0 ? styles.divider : undefined}
        >
          <View className="h-[22px] flex-1 justify-center">
            <View
              className="h-[12px] w-[56px] rounded-full"
              style={styles.placeholder}
            />
          </View>
          <View
            className="h-[12px] w-[100px] rounded-full"
            style={styles.placeholder}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  divider: { borderTopWidth: 1, borderTopColor: forecastColor.divider },
  placeholder: { backgroundColor: forecastColor.placeholder },
  // style, not className: NativeWind maps className only on the components it knows, and
  // expo-router's Link is not one.
  credit: {
    alignSelf: 'flex-start',
    marginTop: 8,
    paddingVertical: 6,
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 16,
    color: forecastColor.muted,
    textDecorationLine: 'underline',
  },
  // Read by screen readers, never seen.
  offscreen: {
    position: 'absolute',
    width: 1,
    height: 1,
    overflow: 'hidden',
    opacity: 0,
  },
});
