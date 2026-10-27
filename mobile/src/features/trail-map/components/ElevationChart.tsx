import { useState } from 'react';
import { Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Svg, {
  Circle,
  Defs,
  Line,
  LinearGradient,
  Path,
  Stop,
  Text as SvgText,
} from 'react-native-svg';

import type { ElevationPoint } from '../types';

// The web's chart, from frontend/src/components/details/map/ElevationProfile.tsx, drawn at
// the sheet's width. A finger across it reads the height there and marks the spot on the
// map, as the web's hover does.

export const CHART_HEIGHT = 150;
const PAD = { top: 12, right: 46, bottom: 18, left: 8 };
const TOOLTIP_WIDTH = 168;

const GREEN = '#8dc63f';
const GREEN_DARK = '#5a8f20';
const GREEN_MID = '#6fb12e';
const GRID = '#e5e7eb';
const LABEL = '#6b7280';

/** Drawn from at most this many points: the chart is only a few hundred points wide. */
const MAX_DRAWN = 240;

type ElevationChartProps = {
  points: ElevationPoint[];
  /** The position in `points` of the selected itinerary entry, marked on the chart. */
  marker?: number | null;
  /** What the mark says, e.g. 'Day 04'. */
  markerLabel?: string;
  /** The point under the finger, or null when it lifts. */
  onScrub: (point: ElevationPoint | null) => void;
};

/** The gridline step, 1 / 2 / 2.5 / 5 × 10ⁿ, that gives about five lines over a range. */
function niceStep(range: number): number {
  const rough = range / 5;
  const power = 10 ** Math.floor(Math.log10(rough));
  const candidates = [1, 2, 2.5, 5, 10].map((c) => c * power);
  return (
    candidates.find((c) => c >= rough) ?? candidates[candidates.length - 1]
  );
}

/** The point whose distance along the route is nearest `target`. Points are in route order. */
function nearestByDistance(points: ElevationPoint[], target: number): number {
  let low = 0;
  let high = points.length - 1;
  while (low < high) {
    const mid = (low + high) >> 1;
    if (points[mid].d < target) low = mid + 1;
    else high = mid;
  }
  if (low > 0 && target - points[low - 1].d < points[low].d - target) {
    return low - 1;
  }
  return low;
}

const km = (d: number) => `${d.toFixed(1)} km`;
const metres = (e: number) => `${Math.round(e).toLocaleString('en-US')} m`;

export function ElevationChart({
  points,
  marker,
  markerLabel,
  onScrub,
}: ElevationChartProps) {
  const [width, setWidth] = useState(0);
  const [hover, setHover] = useState<number | null>(null);

  const plotWidth = Math.max(1, width - PAD.left - PAD.right);
  const plotHeight = CHART_HEIGHT - PAD.top - PAD.bottom;
  const maxDist = points[points.length - 1]?.d || 1;

  // The y axis spans the route's own heights with room above and below, snapped to the
  // gridline step so its labels are round.
  let minE = Infinity;
  let maxE = -Infinity;
  for (const point of points) {
    minE = Math.min(minE, point.e);
    maxE = Math.max(maxE, point.e);
  }
  const room = Math.max(50, (maxE - minE || 1) * 0.15);
  const step = niceStep(maxE + room - (minE - room) || 1);
  const chartMin = Math.max(0, Math.floor((minE - room) / step) * step);
  const chartMax = Math.ceil((maxE + room) / step) * step;
  const chartRange = chartMax - chartMin || 1;

  const toX = (d: number) => PAD.left + (d / maxDist) * plotWidth;
  const toY = (e: number) =>
    PAD.top + plotHeight - ((e - chartMin) / chartRange) * plotHeight;

  const every = Math.max(1, Math.ceil(points.length / MAX_DRAWN));
  const drawn = points.filter(
    (_, i) => i % every === 0 || i === points.length - 1,
  );
  const lineOf = drawn
    .map((p) => `${toX(p.d).toFixed(1)},${toY(p.e).toFixed(1)}`)
    .join(' L ');
  const linePath = `M ${lineOf}`;
  const areaPath = `M ${toX(0)} ${toY(chartMin)} L ${lineOf} L ${toX(maxDist)} ${toY(chartMin)} Z`;

  const gridlines: number[] = [];
  for (let e = chartMin; e <= chartMax + 0.5; e += step) gridlines.push(e);
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => ({
    x: PAD.left + t * plotWidth,
    label: `${(t * maxDist).toFixed(0)} km`,
  }));

  const scrubAt = (x: number) => {
    if (width === 0) return;
    const fraction = Math.min(1, Math.max(0, (x - PAD.left) / plotWidth));
    const index = nearestByDistance(points, fraction * maxDist);
    setHover(index);
    onScrub(points[index]);
  };
  const pan = Gesture.Pan()
    .runOnJS(true)
    .minDistance(1)
    .shouldCancelWhenOutside(false)
    .onBegin((event) => scrubAt(event.x))
    .onUpdate((event) => scrubAt(event.x))
    .onFinalize(() => {
      setHover(null);
      onScrub(null);
    });

  const hovered = hover === null ? null : points[hover];
  const hx = hovered ? toX(hovered.d) : 0;
  const hy = hovered ? toY(hovered.e) : 0;
  let grade = 0;
  if (hovered && hover !== null && hover > 0) {
    const previous = points[hover - 1];
    const distM = (hovered.d - previous.d) * 1000;
    if (distM > 0) grade = ((hovered.e - previous.e) / distM) * 100;
  }
  const steepness =
    Math.abs(grade) > 15
      ? 'steep'
      : Math.abs(grade) > 8
        ? 'moderate'
        : 'gentle';
  // The tooltip flips to the left of the finger near the right edge.
  const tooltipLeft =
    hx > PAD.left + plotWidth * 0.62 ? hx - TOOLTIP_WIDTH - 12 : hx + 12;

  const marked =
    marker === null || marker === undefined ? null : points[marker];
  const mx = marked ? toX(marked.d) : 0;

  return (
    <GestureDetector gesture={pan}>
      <View
        style={{ height: CHART_HEIGHT }}
        onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
        accessible
        accessibilityRole="adjustable"
        accessibilityLabel={`Elevation profile, ${km(maxDist)}, from ${metres(minE)} to ${metres(maxE)}. Drag across it to read the height along the trail.`}
      >
        {width === 0 ? null : (
          <Svg width={width} height={CHART_HEIGHT}>
            <Defs>
              <LinearGradient id="chart-area" x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor={GREEN} stopOpacity={0.26} />
                <Stop offset="60%" stopColor={GREEN} stopOpacity={0.06} />
                <Stop offset="100%" stopColor={GREEN} stopOpacity={0} />
              </LinearGradient>
              <LinearGradient id="chart-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <Stop offset="0%" stopColor={GREEN_DARK} />
                <Stop offset="100%" stopColor={GREEN_MID} />
              </LinearGradient>
            </Defs>

            {gridlines.map((e, i) => {
              const edge = i === 0 || i === gridlines.length - 1;
              return (
                <Line
                  key={e}
                  x1={PAD.left}
                  y1={toY(e)}
                  x2={PAD.left + plotWidth}
                  y2={toY(e)}
                  stroke={GRID}
                  strokeWidth={edge ? 1 : 0.75}
                  strokeDasharray={edge ? undefined : '4 5'}
                />
              );
            })}

            <Path d={areaPath} fill="url(#chart-area)" />
            <Path
              d={linePath}
              fill="none"
              stroke="url(#chart-line)"
              strokeWidth={2.2}
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {marked ? (
              <>
                <Line
                  x1={mx}
                  y1={PAD.top}
                  x2={mx}
                  y2={PAD.top + plotHeight}
                  stroke={GREEN_DARK}
                  strokeWidth={1.2}
                  strokeDasharray="3 3"
                  opacity={0.8}
                />
                <Circle
                  cx={mx}
                  cy={toY(marked.e)}
                  r={4}
                  fill={GREEN_DARK}
                  stroke="#ffffff"
                  strokeWidth={1.5}
                />
                {markerLabel ? (
                  <SvgText
                    x={Math.min(
                      Math.max(mx, PAD.left + 20),
                      PAD.left + plotWidth - 20,
                    )}
                    y={PAD.top - 3}
                    fontSize={9}
                    fontFamily="Poppins_600SemiBold"
                    fill={GREEN_DARK}
                    textAnchor="middle"
                  >
                    {markerLabel}
                  </SvgText>
                ) : null}
              </>
            ) : null}

            {hovered ? (
              <>
                <Line
                  x1={hx}
                  y1={PAD.top}
                  x2={hx}
                  y2={PAD.top + plotHeight}
                  stroke={GREEN}
                  strokeWidth={1.5}
                  strokeDasharray="4 3"
                  opacity={0.6}
                />
                <Circle cx={hx} cy={hy} r={8} fill={GREEN} opacity={0.1} />
                <Circle
                  cx={hx}
                  cy={hy}
                  r={5}
                  fill="#ffffff"
                  stroke={GREEN}
                  strokeWidth={2.2}
                />
                <Circle cx={hx} cy={hy} r={2} fill={GREEN} />
              </>
            ) : null}

            {gridlines.map((e) => (
              <SvgText
                key={e}
                x={PAD.left + plotWidth + 8}
                y={Math.max(
                  PAD.top + 8,
                  Math.min(PAD.top + plotHeight, toY(e) + 3),
                )}
                fontSize={9}
                fontFamily="Poppins_500Medium"
                fill={LABEL}
              >
                {metres(e)}
              </SvgText>
            ))}
            {ticks.map((tick) => (
              <SvgText
                key={tick.label}
                x={tick.x}
                y={CHART_HEIGHT - 5}
                fontSize={9}
                fontFamily="Poppins_500Medium"
                fill={LABEL}
                textAnchor="middle"
              >
                {tick.label}
              </SvgText>
            ))}
          </Svg>
        )}

        {hovered ? (
          <View
            className="absolute flex-row rounded-[8px] border bg-surface px-[10px] py-[6px]"
            style={{
              top: 2,
              left: tooltipLeft,
              width: TOOLTIP_WIDTH,
              borderColor: GREEN,
              pointerEvents: 'none',
            }}
          >
            <Reading
              label="Distance"
              value={km(hovered.d)}
              color={GREEN_DARK}
            />
            <Reading label="Elevation" value={metres(hovered.e)} />
            <Reading
              label="Grade"
              value={`${grade > 0 ? '+' : ''}${grade.toFixed(1)}% ${steepness}`}
              color={
                Math.abs(grade) > 15
                  ? '#dc2626'
                  : Math.abs(grade) > 8
                    ? '#d97706'
                    : GREEN_DARK
              }
            />
          </View>
        ) : null}
      </View>
    </GestureDetector>
  );
}

function Reading({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <View className="flex-1">
      <Text className="font-poppins-semibold text-[7px] uppercase leading-[10px] tracking-[0.8px] text-muted">
        {label}
      </Text>
      <Text
        numberOfLines={1}
        className="font-poppins-semibold text-[11px] leading-[15px] text-ink"
        style={color ? { color } : undefined}
      >
        {value}
      </Text>
    </View>
  );
}
