import type { ImageEntry } from '@maplibre/maplibre-react-native';
import { useEffect, useRef, useState } from 'react';
import type { ReactElement } from 'react';
import { PixelRatio, View } from 'react-native';
import { captureRef } from 'react-native-view-shot';

// MapLibre draws a symbol from a bitmap, and the pins are React views. So each distinct pin
// is drawn once in an invisible corner of the map and photographed, and the map draws the
// photos. A symbol moves with the map; a view on top of the map is moved afterwards, and
// trails behind it during a gesture.

/** A picture the map needs: its image name and the view that draws it. */
export type ImageSpec = { name: string; element: ReactElement };

// Kept for the whole app run: the preview and the full map show the same pins, and a photo
// is the same on every map of this device.
const taken = new Map<string, ImageEntry>();

/** Tries per photo before the map falls back to a plain dot for it. */
const ATTEMPTS = 3;
/** Drawn for a picture that could not be taken, so one failure never hides the rest. */
const FALLBACK: ImageEntry = require('../../../../assets/images/map/pin-fallback.png');
/** What every PNG's data URI starts with: its type, then the PNG signature in base64. */
const PNG_DATA_URI = 'data:image/png;base64,iVBORw0KGgo';

// One photo at a time, app-wide. On Android, react-native-view-shot takes photos on a pool of
// threads but encodes each into one shared buffer, so photos taken together overwrite each
// other: a pin comes out blank, or with another pin's picture.
let queue: Promise<unknown> = Promise.resolve();
function oneAtATime<T>(job: () => Promise<T>): Promise<T> {
  const run = queue.then(job, job);
  queue = run.catch(() => undefined);
  return run;
}

/** Every spec's image, or null while any is still to be taken. */
export function takenImages(
  specs: ImageSpec[],
): Record<string, ImageEntry> | null {
  const images: Record<string, ImageEntry> = {};
  for (const spec of specs) {
    const entry = taken.get(spec.name);
    if (!entry) return null;
    images[spec.name] = entry;
  }
  return images;
}

type ImageSnapshotsProps = {
  specs: ImageSpec[];
  /** Called once, with every spec's image, after the last photo. */
  onReady: (images: Record<string, ImageEntry>) => void;
};

/**
 * Photographs the specs not yet taken. Mount it while takenImages() is null, keyed by the
 * specs' names. The photos to take are fixed when it mounts, so a photo another map takes
 * meanwhile doesn't unmount one already being taken here.
 */
export function ImageSnapshots({ specs, onReady }: ImageSnapshotsProps) {
  const [missing] = useState(() =>
    specs.filter((spec) => !taken.has(spec.name)),
  );
  const results = useRef(new Map<string, ImageEntry>());
  const left = useRef(missing.length);
  const mounted = useRef(true);
  useEffect(
    () => () => {
      mounted.current = false;
    },
    [],
  );

  const settle = (name: string, entry: ImageEntry) => {
    results.current.set(name, entry);
    left.current -= 1;
    if (left.current > 0 || !mounted.current) return;
    const images: Record<string, ImageEntry> = {};
    for (const spec of specs) {
      images[spec.name] =
        results.current.get(spec.name) ?? taken.get(spec.name) ?? FALLBACK;
    }
    onReady(images);
  };

  return (
    // Over the map's corner, invisible and untouchable. Opacity keeps the views laid out and
    // drawable, which a photo needs; hiding them would not.
    <View
      className="absolute left-0 top-0 opacity-0"
      style={{ pointerEvents: 'none' }}
      importantForAccessibility="no-hide-descendants"
      accessibilityElementsHidden
    >
      {missing.map((spec) => (
        <Snapshot
          key={spec.name}
          element={spec.element}
          onTaken={(entry) => {
            taken.set(spec.name, entry);
            settle(spec.name, entry);
          }}
          // Not kept in `taken`, so the next map to open tries this photo again.
          onFailed={() => settle(spec.name, FALLBACK)}
        />
      ))}
    </View>
  );
}

function Snapshot({
  element,
  onTaken,
  onFailed,
}: {
  element: ReactElement;
  onTaken: (entry: ImageEntry) => void;
  onFailed: () => void;
}) {
  const view = useRef<View>(null);
  const started = useRef(false);
  const alive = useRef(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      alive.current = false;
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const take = (attempt: number) => {
    oneAtATime(() =>
      // A photo still queued when its map closes has nothing left to photograph.
      alive.current
        ? captureRef(view, { format: 'png', quality: 1, result: 'data-uri' })
        : Promise.reject(new Error('Closed')),
    )
      .then((uri) => {
        if (!uri.startsWith(PNG_DATA_URI)) throw new Error('Not a PNG');
        // The photo has the screen's pixels per point; told so, the map draws it at size.
        onTaken({ source: { uri, scale: PixelRatio.get() } });
      })
      .catch((error: unknown) => {
        if (!alive.current) return;
        if (attempt < ATTEMPTS) {
          // Often the view isn't drawn yet on the first try; a frame or two later it is.
          timer.current = setTimeout(() => take(attempt + 1), 100 * attempt);
          return;
        }
        if (__DEV__) console.warn('A map image could not be taken.', error);
        onFailed();
      });
  };

  return (
    // Sized by its content, so the photo is exactly the pin. Android can only photograph a
    // view that really exists, not one flattened away.
    <View
      ref={view}
      collapsable={false}
      className="self-start"
      onLayout={() => {
        if (started.current) return;
        started.current = true;
        take(1);
      }}
    >
      {element}
    </View>
  );
}
