import { View } from 'react-native';
import Svg, {
  Defs,
  G,
  Line,
  LinearGradient,
  Path,
  Stop,
} from 'react-native-svg';

import { PIN_ORANGE } from '../constants';
import type { AccessMode } from '../types';

// The web's route markers, from frontend/src/hooks/useMapFeatures.ts (useTrailEndFlag and
// useAccessRoute), at the web's sizes.

const FLAG_WIDTH = 44;
const FLAG_HEIGHT = 40;
/** Where the pole stands in the flag's drawing. */
const POLE_X = 14;
/**
 * How far above the point the pole's foot is. The web stands the flag on top of an empty
 * 10 px marker anchored at its bottom.
 */
const POLE_LIFT = 10;

/** How far the flag rises above its point: its drawing, on the lift. */
export const FLAG_RISE = FLAG_HEIGHT + POLE_LIFT;

/**
 * The marker offset that puts the pole where the web puts it: with a bottom anchor the
 * point is under the drawing's middle, and the pole is left of that and lifted.
 */
export const FLAG_OFFSET: [number, number] = [
  FLAG_WIDTH / 2 - POLE_X,
  -POLE_LIFT,
];

const FLAG_BODY = 'M 14 2 L 43 12 L 14 24 Z';

/** The red flag at the trail's end. Its wave is left out: the map draws a still picture. */
export function DestinationFlag() {
  return (
    <Svg
      width={FLAG_WIDTH}
      height={FLAG_HEIGHT}
      viewBox={`0 0 ${FLAG_WIDTH} ${FLAG_HEIGHT}`}
    >
      <Defs>
        <LinearGradient id="flag-fill" x1="0%" y1="0%" x2="100%" y2="80%">
          <Stop offset="0%" stopColor="#ef4444" />
          <Stop offset="100%" stopColor="#991b1b" />
        </LinearGradient>
      </Defs>
      <Line
        x1={POLE_X}
        y1={0}
        x2={POLE_X}
        y2={FLAG_HEIGHT}
        stroke={PIN_ORANGE}
        strokeWidth={2}
        strokeLinecap="round"
      />
      {/* The web's `feDropShadow` under the flag, as a faint offset copy. */}
      <G translate="0, 1.5">
        <Path
          d={FLAG_BODY}
          fill="#000000"
          fillOpacity={0.12}
          stroke="#000000"
          strokeOpacity={0.08}
          strokeWidth={2.5}
          strokeLinejoin="round"
        />
      </G>
      <Path d={FLAG_BODY} fill="url(#flag-fill)" />
      <Path d="M 14 2 L 43 12 L 30 10 Z" fill="rgba(255, 255, 255, 0.25)" />
    </Svg>
  );
}

// Material's "flight" and "directions car" glyphs, as the web uses them.
const PLANE_PATH =
  'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z';
const VEHICLE_PATH =
  'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z';

/** The plane or vehicle at the middle of an access leg. The plane points along its bearing. */
export function TransportIcon({
  mode,
  bearing,
}: {
  mode: AccessMode;
  bearing: number;
}) {
  const flight = mode === 'flight';
  const size = flight ? 28 : 16;
  const path = flight ? PLANE_PATH : VEHICLE_PATH;
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <G rotation={flight ? bearing : 0} origin="12, 12">
        {/* The web gives the glyph a drop shadow; a dark outline under the white does the
            same job over bright imagery. */}
        <Path
          d={path}
          fill="none"
          stroke="rgba(0, 0, 0, 0.55)"
          strokeWidth={2.5}
          strokeLinejoin="round"
        />
        <Path d={path} fill="#ffffff" />
      </G>
    </Svg>
  );
}

/** The small white dot where the journey starts. A dark rim stands in for the web's shadow. */
export function OriginDot() {
  return (
    <View
      className="h-[8px] w-[8px] rounded-full bg-white opacity-80"
      style={{ borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.45)' }}
    />
  );
}
