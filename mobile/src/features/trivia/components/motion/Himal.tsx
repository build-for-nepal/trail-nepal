import Animated, {
  useAnimatedStyle,
  useReducedMotion,
  useDerivedValue,
} from 'react-native-reanimated';

import { HimalMascot } from '../art/HimalMascot';
import { CSS_EASE_IN_OUT, keyframes, useLoop, usePlayOnce } from './keyframes';

// TrekTrivia.module.css: mascot-sway (3.2 s), mascot-walk-route (2.7 s, with seven 385 ms
// hops) and himal_mascot.svg's own himal-leaf-sway (3 s).
const SWAY_MS = 3200;
const SWAY = {
  offsets: [0, 0.25, 0.5, 0.75, 1],
  rise: [0, -2, -3, -2, 0],
  tilt: [0, -1.5, 0, 1.5, 0],
};
const LEAF_MS = 3000;
const LEAF = {
  offsets: [0, 0.2, 0.42, 0.62, 0.8, 1],
  angle: [0, -12, 9, -7, 5, 0],
};
const WALK_MS = 2700;
const HOP_MS = 385;
const HOPS = 7;
const HOP = {
  offsets: [0, 0.5, 1],
  rise: [0, -5, 0],
  stretch: [1, 1.01, 1],
  squash: [1, 0.98, 1],
};
/** Where the walk ends on the web at phone width: calc(100% - 11.5rem) from the left. */
const WALK_END_FROM_RIGHT = 184;

type HimalProps = {
  width: number;
  /** Where he stands, from the scene's left edge. */
  left: number;
  bottom: number;
  sceneWidth: number;
  /** On the result screen he hops along the route to the flag, then stays there. */
  walking: boolean;
};

/**
 * Himal on the hills: swaying where he stands, or on the result screen hopping from 5% of
 * the way across to the flag. His leaves sway either way. Under Reduce Motion he stands
 * still, at the flag on the result screen, as the web places him.
 */
export function Himal({
  width,
  left,
  bottom,
  sceneWidth,
  walking,
}: HimalProps) {
  const reduced = useReducedMotion();
  const sway = useLoop(SWAY_MS);
  const leaf = useLoop(LEAF_MS);
  const walk = usePlayOnce(WALK_MS, walking);

  const leafAngle = useDerivedValue(() =>
    reduced
      ? 0
      : keyframes(leaf.get(), LEAF.offsets, LEAF.angle, CSS_EASE_IN_OUT),
  );

  const start = sceneWidth * 0.05 - left;
  const end = sceneWidth - WALK_END_FROM_RIGHT - left;
  const along = useAnimatedStyle(() => ({
    transform: [
      { translateX: walking ? start + (end - start) * walk.get() : 0 },
    ],
  }));

  const moving = useAnimatedStyle(() => {
    if (reduced) return { transform: [] };
    if (walking) {
      const elapsed = walk.get() * WALK_MS;
      if (elapsed >= HOP_MS * HOPS) return { transform: [] };
      const hop = (elapsed % HOP_MS) / HOP_MS;
      const at = (values: readonly number[]) =>
        keyframes(hop, HOP.offsets, values, CSS_EASE_IN_OUT);
      return {
        transform: [
          { translateY: at(HOP.rise) },
          { scaleX: at(HOP.stretch) },
          { scaleY: at(HOP.squash) },
        ],
      };
    }
    const at = (values: readonly number[]) =>
      keyframes(sway.get(), SWAY.offsets, values, CSS_EASE_IN_OUT);
    return {
      transform: [
        { translateY: at(SWAY.rise) },
        { rotate: `${at(SWAY.tilt)}deg` },
      ],
    };
  });

  return (
    <Animated.View style={[{ position: 'absolute', left, bottom }, along]}>
      {/* Turned about his feet, as the web's transform-origin: 50% 100%. */}
      <Animated.View style={[{ transformOrigin: 'bottom' }, moving]}>
        <HimalMascot width={width} leafAngle={leafAngle} />
      </Animated.View>
    </Animated.View>
  );
}
