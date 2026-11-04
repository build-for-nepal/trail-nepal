import { Image } from 'expo-image';
import Animated, {
  useAnimatedStyle,
  useReducedMotion,
} from 'react-native-reanimated';

import { keyframes, useLoop } from './keyframes';

const AIRPLANE = require('../../../../../assets/images/trivia/airplane.png');

// TrekTrivia.module.css's airplane-flight: 32 s, linear, starting 1 s in. The web's box is
// w-16 with the plane drawn at 80 px, 47 px tall in the middle of an 80 px square.
const FLIGHT_MS = 32000;
const BOX_WIDTH = 64;
const PLANE = { width: 80, height: 47 };
const TOP = 176;
const OFFSETS = [0, 0.2, 0.42, 0.58, 0.76, 0.9, 1];
const RISE = [20, -10, -50, -74, -108, -132, -150];
const TILT = [-4, -5, -4, -3, -4, -5, -4];
const SCALE = [0.9, 0.94, 0.98, 1, 0.97, 0.93, 0.9];

/**
 * The plane crossing the intro's sky, from 64 px off its left edge to 16 px past its right,
 * climbing as it goes. Parked at the left edge under Reduce Motion, as the web parks it.
 */
export function FlyingPlane({ sceneWidth }: { sceneWidth: number }) {
  const reduced = useReducedMotion();
  const progress = useLoop(FLIGHT_MS, { startAt: 1000 / FLIGHT_MS });

  const flying = useAnimatedStyle(() => {
    if (reduced) return { transform: [] };
    const at = progress.get();
    return {
      transform: [
        { translateX: -BOX_WIDTH + (sceneWidth + 16 + BOX_WIDTH) * at },
        { translateY: keyframes(at, OFFSETS, RISE) },
        { rotate: `${keyframes(at, OFFSETS, TILT)}deg` },
        { scale: keyframes(at, OFFSETS, SCALE) },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          left: 0,
          top: TOP,
          width: BOX_WIDTH,
          height: PLANE.width,
          justifyContent: 'center',
        },
        flying,
      ]}
    >
      <Image source={AIRPLANE} style={PLANE} contentFit="contain" />
    </Animated.View>
  );
}
