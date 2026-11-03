import Animated, { useAnimatedProps } from 'react-native-reanimated';
import Svg, { Defs, Mask, Path, Rect } from 'react-native-svg';

import { triviaColor } from '@/constants/colors';

import { usePlayOnce } from './keyframes';

const AnimatedRect = Animated.createAnimatedComponent(Rect);

// TrekTrivia.tsx's route, drawn in a 900 × 90 box, with erase-route's 2.7 s wipe.
const VIEW = { width: 900, height: 90 };
const ROUTE = 'M0 35 C170 90 260 5 430 45 S700 80 900 18';
const ERASE_MS = 2700;
const MASK_ID = 'trivia-route-mask';

/**
 * The dashed route from Himal to the flag. On the result screen it is wiped away from the
 * left as he walks it, and is gone from the start under Reduce Motion. The web draws it
 * from its sm: breakpoint up, so the scene only shows it on wide screens.
 */
export function TrailRoute({ erasing }: { erasing: boolean }) {
  const erased = usePlayOnce(ERASE_MS, erasing);
  const wipe = useAnimatedProps(() => ({
    width: VIEW.width * erased.get(),
  }));

  return (
    <Svg
      aria-hidden
      viewBox={`0 0 ${VIEW.width} ${VIEW.height}`}
      fill="none"
      style={{
        position: 'absolute',
        left: '12%',
        width: '70%',
        bottom: '5%',
        height: 64,
      }}
    >
      <Defs>
        <Mask
          id={MASK_ID}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width={VIEW.width}
          height={VIEW.height}
        >
          <Rect width={VIEW.width} height={VIEW.height} fill="white" />
          <AnimatedRect
            height={VIEW.height}
            fill="black"
            animatedProps={wipe}
          />
        </Mask>
      </Defs>
      <Path
        d={ROUTE}
        stroke={triviaColor.route}
        strokeWidth={2}
        strokeDasharray="12 14"
        mask={`url(#${MASK_ID})`}
      />
    </Svg>
  );
}
