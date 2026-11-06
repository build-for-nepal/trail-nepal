import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect } from 'react';
import {
  cancelAnimation,
  Easing,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import type { SharedValue } from 'react-native-reanimated';

// The web's trivia motion, from frontend/src/components/details/TrekTrivia.module.css and
// HomeTrivia.module.css, played as CSS plays it.

type Ease = (t: number) => number;

/** CSS's named timing functions. */
export const CSS_EASE_IN = Easing.bezierFn(0.42, 0, 1, 1);
export const CSS_EASE_IN_OUT = Easing.bezierFn(0.42, 0, 0.58, 1);
export function linear(t: number): number {
  'worklet';
  return t;
}

/**
 * The value at `progress` (0 to 1) through CSS keyframes: `offsets` and `values` pair up,
 * and each step between them is eased on its own, as CSS eases them. Linear without `ease`.
 */
export function keyframes(
  progress: number,
  offsets: readonly number[],
  values: readonly number[],
  // No default value: a worklet unpacks the outside names it uses inside its body, after
  // its default parameters are evaluated, so `ease = linear` would not find `linear`.
  ease?: Ease,
): number {
  'worklet';
  const last = offsets.length - 1;
  if (progress <= offsets[0]) return values[0];
  if (progress >= offsets[last]) return values[last];
  let step = 0;
  while (step < last - 1 && progress > offsets[step + 1]) step += 1;
  const span = offsets[step + 1] - offsets[step];
  const through = span > 0 ? (progress - offsets[step]) / span : 1;
  const t = ease ? ease(through) : through;
  return values[step] + (values[step + 1] - values[step]) * t;
}

type LoopOptions = {
  /** Before the first run, as CSS's animation-delay. */
  delay?: number;
  /** Where the first run starts, 0 to 1: CSS's negative delay. */
  startAt?: number;
};

/**
 * Progress from 0 to 1 over `duration`, again and again, as an infinite CSS animation. It
 * holds still under Reduce Motion, and pauses while its screen is out of view.
 */
export function useLoop(
  duration: number,
  { delay = 0, startAt = 0 }: LoopOptions = {},
): SharedValue<number> {
  const reduced = useReducedMotion();
  const progress = useSharedValue(startAt);

  useFocusEffect(
    useCallback(() => {
      if (reduced) return;
      const remaining = duration * (1 - progress.get());
      const again = withSequence(
        withTiming(0, { duration: 0 }),
        withTiming(1, { duration, easing: Easing.linear }),
      );
      progress.set(
        withDelay(
          delay,
          withSequence(
            withTiming(1, { duration: remaining, easing: Easing.linear }),
            withRepeat(again, -1),
          ),
        ),
      );
      return () => cancelAnimation(progress);
    }, [delay, duration, progress, reduced]),
  );

  return progress;
}

/**
 * Progress from 0 to 1 over `duration` each time `playing` turns on, as a CSS animation that
 * runs once and stays at its end. Under Reduce Motion it is at its end from the start.
 */
export function usePlayOnce(
  duration: number,
  playing: boolean,
): SharedValue<number> {
  const reduced = useReducedMotion();
  const progress = useSharedValue(0);

  useEffect(() => {
    if (!playing) {
      cancelAnimation(progress);
      progress.set(0);
      return;
    }
    if (reduced) {
      progress.set(1);
      return;
    }
    progress.set(0);
    progress.set(withTiming(1, { duration, easing: Easing.linear }));
    return () => cancelAnimation(progress);
  }, [duration, playing, progress, reduced]);

  return progress;
}
