import { useState } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import type { LayoutChangeEvent } from 'react-native';

import { Destination } from './art/Destination';
import { Grass } from './art/Grass';
import { Confetti } from './motion/Confetti';
import {
  DriftingCloud,
  GAME_DRIFT_LEFT,
  GAME_DRIFT_RIGHT,
  HUB_DRIFT_LEFT,
  HUB_DRIFT_RIGHT,
} from './motion/DriftingCloud';
import { FlyingPlane } from './motion/FlyingPlane';
import { Himal } from './motion/Himal';
import { TrailRoute } from './motion/TrailRoute';

// Sizes and places as the web draws them at phone width (TrekTrivia.tsx, below its sm:
// breakpoint): its w-20, w-24 and w-28 are these 80, 96 and 112.
const CLOUD_LEFT = { left: 12, top: 96 };
const CLOUD_RIGHT = { right: 8, top: 112 };
const FIGURE_WIDTH = 96;
/** Where Himal and the flag stand: on the hills, a little above the bottom edge. */
const FIGURE_BOTTOM = 40;
const HIMAL_LEFT = 20;
/** The hills run wider than the sky, 20% off each side, so their curve reads at this width. */
const GRASS_SPILL = 0.2;
/** The web's sm: breakpoint, from which it draws the route. */
const ROUTE_MIN_WIDTH = 640;

/** How much room the hills and Himal take at the foot of the sky. */
export const SCENE_FOOT = FIGURE_BOTTOM + (FIGURE_WIDTH * 456) / 501;

/**
 * What the sky is behind: a trip's intro card, a question, the result, or the hub, which as
 * the web's home-page trivia has the clouds and hills alone.
 */
export type SceneStage = 'intro' | 'question' | 'result' | 'hub';

/**
 * The sky behind the trivia, moving as the web's does: drifting clouds and the hills, with
 * the plane on the intro, Himal swaying, and during a game the flag and, on wide screens,
 * the route. On the result Himal walks the route to the flag and confetti falls. It fills
 * its parent and takes no touches. Painted in the web's order, back to front.
 */
export function TriviaScene({ stage }: { stage: SceneStage }) {
  const [width, setWidth] = useState(0);
  const { width: screenWidth } = useWindowDimensions();
  const onLayout = (event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width);
  };

  const hub = stage === 'hub';
  const inGame = stage === 'question' || stage === 'result';

  return (
    <View
      aria-hidden
      onLayout={onLayout}
      style={[StyleSheet.absoluteFill, { pointerEvents: 'none' }]}
    >
      {width ? (
        <>
          <DriftingCloud
            drift={hub ? HUB_DRIFT_LEFT : GAME_DRIFT_LEFT}
            width={80}
            style={CLOUD_LEFT}
          />
          <DriftingCloud
            drift={hub ? HUB_DRIFT_RIGHT : GAME_DRIFT_RIGHT}
            width={112}
            style={CLOUD_RIGHT}
          />
          {stage === 'intro' ? <FlyingPlane sceneWidth={width} /> : null}
          {stage === 'result' ? <Confetti /> : null}
          <Grass
            width={width * (1 + 2 * GRASS_SPILL)}
            style={{
              position: 'absolute',
              bottom: 0,
              left: -width * GRASS_SPILL,
            }}
          />
          {inGame && screenWidth >= ROUTE_MIN_WIDTH ? (
            <TrailRoute erasing={stage === 'result'} />
          ) : null}
          {inGame ? (
            <Destination
              width={FIGURE_WIDTH}
              style={{ position: 'absolute', bottom: FIGURE_BOTTOM, right: 16 }}
            />
          ) : null}
          {hub ? null : (
            <Himal
              width={FIGURE_WIDTH}
              left={HIMAL_LEFT}
              bottom={FIGURE_BOTTOM}
              sceneWidth={width}
              walking={stage === 'result'}
            />
          )}
        </>
      ) : null}
    </View>
  );
}
