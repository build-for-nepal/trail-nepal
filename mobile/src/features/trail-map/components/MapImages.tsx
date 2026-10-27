import type { ImageEntry } from '@maplibre/maplibre-react-native';
import { useRef } from 'react';
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
 * specs' names: it counts the photos it started with.
 */
export function ImageSnapshots({ specs, onReady }: ImageSnapshotsProps) {
  const missing = specs.filter((spec) => !taken.has(spec.name));
  const left = useRef(missing.length);

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
            left.current -= 1;
            if (left.current === 0) {
              const images = takenImages(specs);
              if (images) onReady(images);
            }
          }}
        />
      ))}
    </View>
  );
}

function Snapshot({
  element,
  onTaken,
}: {
  element: ReactElement;
  onTaken: (entry: ImageEntry) => void;
}) {
  const view = useRef<View>(null);
  const started = useRef(false);

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
        captureRef(view, { format: 'png', quality: 1, result: 'data-uri' })
          // The photo has the screen's pixels per point; told so, the map draws it at size.
          .then((uri) => onTaken({ source: { uri, scale: PixelRatio.get() } }))
          .catch((error: unknown) => {
            if (__DEV__) console.warn('A map image could not be taken.', error);
          });
      }}
    >
      {element}
    </View>
  );
}
