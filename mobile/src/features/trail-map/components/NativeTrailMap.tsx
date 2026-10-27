import {
  Camera,
  type CameraRef,
  Map,
  Marker,
} from '@maplibre/maplibre-react-native';
import { useEffect, useEffectEvent, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { LAYERS, MIN_ZOOM, ROUTE_ATTRIBUTION } from '../constants';
import type { LayerKey } from '../constants';
import { dayView, openingView } from '../logic/camera';
import type { Size } from '../logic/camera';
import { mapStyle } from '../style';
import type { DayFocus, TrailMapData } from '../types';
import { DayPin, SitePin } from './Pin';

export type TrailMapProps = {
  data: TrailMapData;
  /** The itinerary entry the map opens on, and moves to whenever this changes. */
  focus?: DayFocus | null;
  /** False for a preview: no gestures or pin presses, and the credits written out. */
  interactive?: boolean;
  layer?: LayerKey;
  /** Called with the first itinerary entry at the pressed pin. */
  onPinPress?: (index: number) => void;
};

// MapLibre itself. Loaded through TrailMap, which keeps it out of Expo Go.
export function NativeTrailMap(props: TrailMapProps) {
  // The opening view is fitted to the map's size, so the map waits for its first layout.
  const [size, setSize] = useState<Size | null>(null);

  return (
    <View
      className="flex-1"
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout;
        if (width > 0 && height > 0) setSize({ width, height });
      }}
    >
      {size ? <SizedMap {...props} size={size} /> : null}
    </View>
  );
}

function SizedMap({
  data,
  focus,
  interactive = true,
  layer = 'satellite',
  onPinPress,
  size,
}: TrailMapProps & { size: Size }) {
  const camera = useRef<CameraRef>(null);
  // The native camera reads its initial view only once, so it is worked out only once.
  const [opening] = useState(() => ({
    view: openingView(data, size, focus?.index),
    nonce: focus?.nonce,
  }));
  const zoom = useRef(opening.view.zoom);

  const showDay = useEffectEvent((index: number) => {
    const view = dayView(data, index, size, zoom.current);
    if (view) camera.current?.easeTo({ ...view, duration: 800 });
  });
  useEffect(() => {
    // The opening view already shows the entry the map opened on.
    if (focus && focus.nonce !== opening.nonce) showDay(focus.index);
  }, [focus, opening.nonce]);

  const shown = focus ? data.days[focus.index] : null;
  // An entry that no pin marks has a pin of its own while it is shown.
  const pins = shown?.pin ? [...data.pins, shown.pin] : data.pins;
  const selected = new Set(shown?.pin ? [shown.pin.key] : shown?.pins);
  const sites = data.kind === 'sites';

  return (
    <View className="flex-1">
      <Map
        mapStyle={mapStyle(layer, data.line)}
        style={{ flex: 1 }}
        logo={false}
        attribution={interactive}
        dragPan={interactive}
        touchZoom={interactive}
        doubleTapZoom={interactive}
        doubleTapHoldZoom={interactive}
        touchRotate={interactive}
        touchPitch={interactive}
        // A preview sits on a scrolling page, where Android's default surface view trails
        // the scroll and ignores rounded corners. A texture view moves and clips like any view.
        androidView={interactive ? 'surface' : 'texture'}
        onRegionDidChange={(event) => {
          zoom.current = event.nativeEvent.zoom;
        }}
      >
        <Camera
          ref={camera}
          minZoom={MIN_ZOOM}
          maxZoom={data.maxZoom}
          initialViewState={opening.view}
        />
        {pins.map((pin) => {
          const isSelected = selected.has(pin.key);
          return (
            <Marker
              key={pin.key}
              lngLat={pin.lngLat}
              // A site pin's tip marks the spot; a day pin is centred on it.
              anchor={sites ? 'bottom' : 'center'}
              // Above its neighbours. Android takes this as the marker's elevation.
              style={{ zIndex: isSelected ? 1 : 0 }}
            >
              {/* On Android the marker's own view takes the touch before the map can, so
                  presses go through a Pressable. The padding widens what a finger can hit. */}
              <Pressable
                disabled={!interactive}
                accessible={interactive}
                accessibilityRole="button"
                accessibilityLabel={pin.description}
                accessibilityState={{ selected: isSelected }}
                onPress={() => onPinPress?.(pin.days[0])}
                className={sites ? 'px-[6px] pt-[6px]' : 'p-[6px]'}
              >
                {sites ? (
                  <SitePin pin={pin} selected={isSelected} />
                ) : (
                  <DayPin pin={pin} selected={isSelected} />
                )}
              </Pressable>
            </Marker>
          );
        })}
      </Map>

      {/* A preview can't open the map's credits button, so it shows the credits. */}
      {interactive ? null : (
        <View
          className="absolute bottom-[6px] right-[6px] rounded-[4px] bg-white/85 px-[5px]"
          style={{ pointerEvents: 'none' }}
        >
          <Text className="font-poppins text-[10px] leading-[15px] text-ink">
            {`${LAYERS[layer].attribution} · ${ROUTE_ATTRIBUTION}`}
          </Text>
        </View>
      )}
    </View>
  );
}
