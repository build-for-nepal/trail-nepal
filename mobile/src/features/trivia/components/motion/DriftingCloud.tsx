import Animated, {
  useAnimatedStyle,
  useReducedMotion,
} from 'react-native-reanimated';
import type { ViewStyle } from 'react-native';

import { Cloud } from '../art/Cloud';
import { CSS_EASE_IN_OUT, keyframes, linear, useLoop } from './keyframes';

/** One cloud's drift: its loop, and where it is at each keyframe. */
export type Drift = {
  duration: number;
  delay?: number;
  ease: (t: number) => number;
  offsets: readonly number[];
  x: readonly number[];
  y: readonly number[];
  scale?: readonly number[];
};

// TrekTrivia.module.css: cloud-drift-left and cloud-drift-right.
export const GAME_DRIFT_LEFT: Drift = {
  duration: 17000,
  ease: linear,
  offsets: [0, 0.24, 0.38, 0.68, 0.82, 1],
  x: [-6, 2, 22, 29, 5, -6],
  y: [2, -1, -4, 1, 4, 2],
  scale: [1, 1.005, 1.01, 1.006, 1, 1],
};
export const GAME_DRIFT_RIGHT: Drift = {
  duration: 23000,
  delay: 1500,
  ease: linear,
  offsets: [0, 0.3, 0.46, 0.72, 0.88, 1],
  x: [12, 4, -20, -27, 1, 12],
  y: [-2, 2, 5, 0, -3, -2],
  scale: [1, 0.997, 1.004, 1.008, 1.003, 1],
};

// HomeTrivia.module.css: home-cloud-left and home-cloud-right.
export const HUB_DRIFT_LEFT: Drift = {
  duration: 18000,
  ease: CSS_EASE_IN_OUT,
  offsets: [0, 0.3, 0.48, 0.76, 1],
  x: [-4, 5, 22, 28, -4],
  y: [1, -2, -3, 2, 1],
};
export const HUB_DRIFT_RIGHT: Drift = {
  duration: 24000,
  delay: 1200,
  ease: CSS_EASE_IN_OUT,
  offsets: [0, 0.34, 0.52, 0.8, 1],
  x: [8, -2, -24, -30, 8],
  y: [-1, 2, 4, 0, -1],
};

type DriftingCloudProps = {
  drift: Drift;
  width: number;
  /** Where it sits, before it drifts. */
  style: ViewStyle;
};

/** A cloud drifting back and forth in the trivia's sky. Still under Reduce Motion. */
export function DriftingCloud({ drift, width, style }: DriftingCloudProps) {
  const reduced = useReducedMotion();
  const progress = useLoop(drift.duration, { delay: drift.delay });
  const { ease, offsets, x, y, scale } = drift;

  const drifting = useAnimatedStyle(() => {
    if (reduced) return { transform: [] };
    const at = progress.get();
    return {
      transform: [
        { translateX: keyframes(at, offsets, x, ease) },
        { translateY: keyframes(at, offsets, y, ease) },
        { scale: scale ? keyframes(at, offsets, scale, ease) : 1 },
      ],
    };
  });

  return (
    <Animated.View style={[{ position: 'absolute' }, style, drifting]}>
      <Cloud width={width} />
    </Animated.View>
  );
}
