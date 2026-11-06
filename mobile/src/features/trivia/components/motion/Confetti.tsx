import Animated, {
  useAnimatedStyle,
  useReducedMotion,
} from 'react-native-reanimated';

import { triviaColor } from '@/constants/colors';

import { CSS_EASE_IN, keyframes, useLoop } from './keyframes';

// TrekTrivia.tsx's 34 pieces and TrekTrivia.module.css's confetti-fall: each 9 × 16 px,
// starting 1.5rem above the top, falling 520 px and drifting 28 px right as it spins twice.
const PIECES = Array.from({ length: 34 }, (_, index) => index);
const SIZE = { width: 9, height: 16 };
const FALL = 540;
const DRIFT = 28;
const START_Y = -20;

/**
 * The result screen's confetti, starting as Himal reaches the flag and falling on loop. The
 * web stops it under Reduce Motion, leaving the pieces out of sight above the top, so it
 * draws none.
 */
export function Confetti() {
  const reduced = useReducedMotion();
  if (reduced) return null;
  return PIECES.map((index) => <Piece key={index} index={index} />);
}

function Piece({ index }: { index: number }) {
  // Staggered as the web staggers them.
  const progress = useLoop(2200 + (index % 5) * 220, {
    delay: 2750 + (index % 9) * 160,
  });

  const falling = useAnimatedStyle(() => {
    const at = progress.get();
    const travel = CSS_EASE_IN(at);
    return {
      opacity: keyframes(at, [0, 0.1, 1], [0, 1, 0], CSS_EASE_IN),
      transform: [
        { translateX: DRIFT * travel },
        { translateY: START_Y + FALL * travel },
        { rotate: `${720 * travel}deg` },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          top: -24,
          left: `${(index * 37) % 100}%`,
          ...SIZE,
          borderRadius: 2,
          backgroundColor:
            triviaColor.confetti[index % triviaColor.confetti.length],
        },
        falling,
      ]}
    />
  );
}
