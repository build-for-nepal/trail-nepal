import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import type { LayoutChangeEvent } from 'react-native';

import { Cloud } from './art/Cloud';
import { Destination } from './art/Destination';
import { Grass } from './art/Grass';
import { HimalMascot } from './art/HimalMascot';

// Sizes and places as the web draws them at phone width (TrekTrivia.tsx, below its sm:
// breakpoint): its w-20, w-24 and w-28 are these 80, 96 and 112.
const CLOUD_LEFT = { left: 12, top: 96, width: 80 };
const CLOUD_RIGHT = { right: 8, top: 112, width: 112 };
const FIGURE_WIDTH = 96;
/** Where Himal and the flag stand: on the hills, a little above the bottom edge. */
const FIGURE_BOTTOM = 40;
/** The hills run wider than the sky, 20% off each side, so their curve reads at this width. */
const GRASS_SPILL = 0.2;

/** How much room the hills and Himal take at the foot of the sky. */
export const SCENE_FOOT = FIGURE_BOTTOM + (FIGURE_WIDTH * 456) / 501;

type TriviaSceneProps = {
  /** The flag at the far end of the hills, there once a game has started. */
  flag?: boolean;
  /** Himal on the hills. The hub, as the web's home-page trivia, has the sky alone. */
  himal?: boolean;
};

/**
 * The sky behind the trivia: two clouds, the hills along the bottom, and Himal, with the
 * flag during a game. It fills its parent and takes no touches.
 */
export function TriviaScene({ flag = false, himal = true }: TriviaSceneProps) {
  const [width, setWidth] = useState(0);
  const onLayout = (event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width);
  };

  return (
    <View
      aria-hidden
      onLayout={onLayout}
      style={[StyleSheet.absoluteFill, { pointerEvents: 'none' }]}
    >
      {width ? (
        <>
          <Cloud
            width={CLOUD_LEFT.width}
            style={{ position: 'absolute', ...CLOUD_LEFT }}
          />
          <Cloud
            width={CLOUD_RIGHT.width}
            style={{ position: 'absolute', ...CLOUD_RIGHT }}
          />
          <Grass
            width={width * (1 + 2 * GRASS_SPILL)}
            style={{
              position: 'absolute',
              bottom: 0,
              left: -width * GRASS_SPILL,
            }}
          />
          {flag ? (
            <Destination
              width={FIGURE_WIDTH}
              style={{ position: 'absolute', bottom: FIGURE_BOTTOM, right: 16 }}
            />
          ) : null}
          {himal ? (
            <HimalMascot
              width={FIGURE_WIDTH}
              style={{ position: 'absolute', bottom: FIGURE_BOTTOM, left: 20 }}
            />
          ) : null}
        </>
      ) : null}
    </View>
  );
}
