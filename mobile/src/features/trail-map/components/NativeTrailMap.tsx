import {
  Camera,
  type CameraRef,
  GeoJSONSource,
  Images,
  Layer,
  Map,
  type PressEventWithFeatures,
} from '@maplibre/maplibre-react-native';
import { useEffect, useEffectEvent, useMemo, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import type { NativeSyntheticEvent } from 'react-native';

import { LAYERS, MIN_ZOOM, ROUTE_ATTRIBUTION } from '../constants';
import type { LayerKey } from '../constants';
import { dayView, openingView } from '../logic/camera';
import type { Size } from '../logic/camera';
import { mapStyle } from '../style';
import type { DayFocus, TrailMapData } from '../types';
import { ImageSnapshots, takenImages } from './MapImages';
import {
  DECOR_FLAG_LAYOUT,
  DECOR_ICONS_LAYOUT,
  decorFeatures,
  imageSpecs,
  pinFeatures,
  pinsLayout,
} from './symbols';

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

/** What a finger can hit around a pin's point: a 44-point square. */
const PIN_HITBOX = { top: 22, right: 22, bottom: 22, left: 22 };

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

  // The pins, flag and icons are drawn from photos of their views (see MapImages). The map
  // draws nothing of them until every photo is there, rather than pins appearing one by one.
  const specs = useMemo(() => imageSpecs(data), [data]);
  const [images, setImages] = useState(() => takenImages(specs));
  const imagesFor = useRef(specs);
  useEffect(() => {
    // A different trip needs its own photos.
    if (imagesFor.current === specs) return;
    imagesFor.current = specs;
    setImages(takenImages(specs));
  }, [specs]);

  const shown = focus ? data.days[focus.index] : null;
  // An entry that no pin marks has a pin of its own while it is shown.
  const pins = shown?.pin ? [...data.pins, shown.pin] : data.pins;
  const selected = new Set(shown?.pin ? [shown.pin.key] : shown?.pins);
  const sites = data.kind === 'sites';

  const pressPin = (event: NativeSyntheticEvent<PressEventWithFeatures>) => {
    const day = event.nativeEvent.features[0]?.properties?.day;
    if (typeof day === 'number') onPinPress?.(day);
  };

  return (
    <View className="flex-1">
      <Map
        mapStyle={mapStyle(layer, data.line, data.access)}
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
        <Images images={images ?? {}} />
        {images ? (
          <>
            {/* Decoration first, so the pins draw over it. */}
            <GeoJSONSource id="decor" data={decorFeatures(data)}>
              <Layer
                id="decor-icons"
                type="symbol"
                filter={['==', ['get', 'kind'], 'icon']}
                layout={DECOR_ICONS_LAYOUT}
              />
              <Layer
                id="decor-flag"
                type="symbol"
                filter={['==', ['get', 'kind'], 'flag']}
                layout={DECOR_FLAG_LAYOUT}
              />
            </GeoJSONSource>
            <GeoJSONSource
              id="pins"
              data={pinFeatures(data, pins, selected)}
              onPress={interactive ? pressPin : undefined}
              hitbox={PIN_HITBOX}
            >
              <Layer id="pins" type="symbol" layout={pinsLayout(sites)} />
            </GeoJSONSource>
          </>
        ) : null}
      </Map>

      {images ? null : (
        <ImageSnapshots
          key={specs.map((spec) => spec.name).join(' ')}
          specs={specs}
          onReady={setImages}
        />
      )}

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
