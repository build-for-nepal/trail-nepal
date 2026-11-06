import { Text, View } from 'react-native';
import Svg, { Circle, G, Path } from 'react-native-svg';

import type { MapPin } from '../types';

// The web's pins, from frontend/src/hooks/useMapFeatures.ts (makeCircleMarkerEl,
// makeGroupMarkerEl) and CulturalMapClient.tsx (makePinMarkerEl), at the web's sizes. A
// pin the itinerary or a tap has just picked is drawn at the web's pulse size; the map
// shows it for as long as the web's pulse lasts (see NativeTrailMap).
//
// The map draws a photo of each pin (see MapImages), taken on a plain canvas that can't
// blur. So the web's soft shadows are drawn as a few faint layers instead.

/** How much bigger the web draws a pin while it pulses. */
export const DAY_PULSE_SCALE = 1.45;
export const SITE_PULSE_SCALE = 1.35;

/** The web's site pin: a 28 × 38 teardrop with its tip 2 px above the bottom. */
const SITE_PIN_PATH =
  'M14 2 C8.2 2 3.5 6.8 3.5 12.6 C3.5 19.8 14 36 14 36 C14 36 24.5 19.8 24.5 12.6 C24.5 6.8 19.8 2 14 2 Z';

/** The faint layers that stand in for the web's `0 2px 8px rgba(0,0,0,0.32)`. */
const DAY_SHADOW = [
  { spread: 1, alpha: 0.1 },
  { spread: 3, alpha: 0.07 },
  { spread: 5, alpha: 0.045 },
  { spread: 7.5, alpha: 0.025 },
];
/** Room around a day pin for its shadow. Even on every side, so the pin stays centred. */
const DAY_SHADOW_ROOM = 10;

/**
 * A trek day or hike section, as the web draws it: a 28 px orange circle with a white ring
 * and its number, or a pill for days that share a spot.
 */
export function DayPin({ pin, selected }: { pin: MapPin; selected: boolean }) {
  const s = selected ? DAY_PULSE_SCALE : 1;
  const group = pin.days.length > 1;
  const radius = 14 * s;
  return (
    <View style={{ padding: DAY_SHADOW_ROOM * s }}>
      <View>
        {DAY_SHADOW.map(({ spread, alpha }) => (
          <View
            key={spread}
            style={{
              position: 'absolute',
              top: (2 - spread) * s,
              bottom: (-2 - spread) * s,
              left: -spread * s,
              right: -spread * s,
              borderRadius: radius + spread * s,
              backgroundColor: `rgba(0, 0, 0, ${alpha})`,
            }}
          />
        ))}
        <View
          style={{
            height: 28 * s,
            minWidth: 28 * s,
            paddingHorizontal: group ? 6 * s : 0,
            borderRadius: radius,
            borderWidth: (group ? 2 : 2.5) * s,
            borderColor: '#ffffff',
            backgroundColor: pin.color,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              color: '#ffffff',
              fontSize: (group ? 8.5 : 10) * s,
              fontWeight: '800',
              includeFontPadding: false,
            }}
          >
            {pin.label}
          </Text>
        </View>
      </View>
    </View>
  );
}

/** Room above and beside a site pin for its shadow, in the pin's own units. */
const SITE_SHADOW_ROOM = 6;

/**
 * One of a tour's sites, as the web draws it: a teardrop in its day's colour with a white
 * dot. Its tip is 2 px above the picture's bottom, which the map anchors on the site.
 */
export function SitePin({ pin, selected }: { pin: MapPin; selected: boolean }) {
  const s = selected ? SITE_PULSE_SCALE : 1;
  const m = SITE_SHADOW_ROOM;
  // The bottom has no room: the web's shadow under the tip is a sliver, and the tip has to
  // keep its place above the anchor.
  const width = 28 + 2 * m;
  const height = 38 + m;
  return (
    <Svg
      width={width * s}
      height={height * s}
      viewBox={`${-m} ${-m} ${width} ${height}`}
    >
      {/* The web's `drop-shadow(0 2px 5px rgba(0,0,0,0.35))`, as layered outlines. */}
      <G translate="0, 2">
        <Path
          d={SITE_PIN_PATH}
          fill="none"
          stroke="#000000"
          strokeOpacity={0.05}
          strokeWidth={8}
        />
        <Path
          d={SITE_PIN_PATH}
          fill="none"
          stroke="#000000"
          strokeOpacity={0.07}
          strokeWidth={5}
        />
        <Path
          d={SITE_PIN_PATH}
          fill="#000000"
          fillOpacity={0.12}
          stroke="#000000"
          strokeOpacity={0.1}
          strokeWidth={2.5}
        />
      </G>
      <Path
        d={SITE_PIN_PATH}
        fill={pin.color}
        stroke="#ffffff"
        strokeWidth={1.6}
      />
      <Circle cx={14} cy={12.8} r={4.2} fill="#ffffff" />
    </Svg>
  );
}
