import { Text, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import type { MapPin } from '../types';

// The web's pins, from frontend/src/hooks/useMapFeatures.ts and CulturalMapClient.tsx. The
// selected one is drawn larger, as the web's pulse draws it for a moment. Larger by size,
// not by a scale transform: the map clips a marker to its laid-out box.

/** The web's site pin: a 28 × 38 teardrop with its tip 2 px above the bottom. */
const SITE_PIN_PATH =
  'M14 2 C8.2 2 3.5 6.8 3.5 12.6 C3.5 19.8 14 36 14 36 C14 36 24.5 19.8 24.5 12.6 C24.5 6.8 19.8 2 14 2 Z';

/** A trek day or hike section: a numbered circle, or a pill for days that share a spot. */
export function DayPin({ pin, selected }: { pin: MapPin; selected: boolean }) {
  const size = selected ? 38 : 28;
  return (
    <View
      className="items-center justify-center rounded-full border-white px-[6px]"
      style={{
        height: size,
        minWidth: size,
        borderWidth: 2.5,
        backgroundColor: pin.color,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.32)',
      }}
    >
      <Text
        className={
          selected
            ? 'font-poppins-semibold text-[14px] leading-[18px] text-white'
            : 'font-poppins-semibold text-[11px] leading-[14px] text-white'
        }
      >
        {pin.label}
      </Text>
    </View>
  );
}

/** One of a tour's sites, in its day's colour. */
export function SitePin({ pin, selected }: { pin: MapPin; selected: boolean }) {
  const scale = selected ? 1.3 : 1;
  return (
    <Svg width={28 * scale} height={38 * scale} viewBox="0 0 28 38">
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
