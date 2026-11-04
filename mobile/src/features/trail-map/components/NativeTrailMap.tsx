import {
  Camera,
  type CameraRef,
  type CircleLayerSpecification,
  GeoJSONSource,
  Images,
  Layer,
  Map,
  type MapRef,
  Marker,
  type PressEventWithFeatures,
} from '@maplibre/maplibre-react-native';
import {
  useEffect,
  useEffectEvent,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { Ref } from 'react';
import { Text, View } from 'react-native';
import type { NativeSyntheticEvent } from 'react-native';

import {
  DEFAULT_LAYER,
  LAYERS,
  LAYER_KEYS,
  MIN_ZOOM,
  ROUTE_ATTRIBUTION,
  TRAIL_GREEN,
} from '../constants';
import type { LayerKey } from '../constants';
import { dayView, framePadding, openingView } from '../logic/camera';
import type { Size } from '../logic/camera';
import { baseSourceId, mapStyle } from '../style';
import type { DayFocus, LngLat, MapInsets, TrailMapData } from '../types';
import { ImageSnapshots, takenImages } from './MapImages';
import { PinPopup, POPUP_TIP, POPUP_WIDTH, tabAt, tipX } from './PinPopup';
import type { PopupPlacement } from './PinPopup';
import { FLAG_RISE } from './RouteMarkers';
import {
  DECOR_FLAG_LAYOUT,
  DECOR_ICONS_LAYOUT,
  decorFeatures,
  imageSpecs,
  PREVIEW_PIN_PAINT,
  pinFeatures,
  pinsLayout,
} from './symbols';

export type TrailMapRef = {
  /** Turns the map back to north-up, keeping its centre and zoom. */
  resetNorth: () => void;
};

export type TrailMapProps = {
  data: TrailMapData;
  /** The itinerary entry the map opens on, and moves to whenever this changes. */
  focus?: DayFocus | null;
  /** False for a preview: no gestures or pin presses, and the credits written out. */
  interactive?: boolean;
  layer?: LayerKey;
  /** How much of the map's top and bottom other views cover. Views are framed in the rest. */
  insets?: MapInsets;
  /** A point on the trail to mark, e.g. the one under a finger on the elevation chart. */
  marker?: LngLat | null;
  /**
   * Called with the itinerary entry a pin's popup shows, and the pin's key: its first entry
   * when the pin is pressed, another when one of its popup's tabs is.
   */
  onPinPress?: (index: number, key: string) => void;
  ref?: Ref<TrailMapRef>;
};

const NO_INSETS: MapInsets = { top: 0, bottom: 0 };

/** How long a picked pin pulses, as on the web: a trek day's, and a tour day's sites. */
const DAY_PULSE_MS = 1000;
const SITE_PULSE_MS = 1200;

/** The space a preview keeps between its flag's tip and its top edge. */
const FLAG_MARGIN = 8;

/**
 * How far a popup's tip stays from its pin's point, as the web's offsets: past a day pin's
 * edge, and above or below a site pin, which stands on its point.
 */
const POPUP_GAP = {
  day: { above: 18, below: 18 },
  site: { above: 51, below: 5 },
};
/** How close a popup comes to the map's edges, or what covers them, before it flips. */
const POPUP_EDGE = 8;
/** A popup's height before it has been measured: a trek day's card. */
const POPUP_GUESS = 120;

/** What a finger can hit around a pin's point: a 44-point square. */
const PIN_HITBOX = { top: 22, right: 22, bottom: 22, left: 22 };

/** The dot that follows a finger along the elevation chart: the web's hiker, simplified. */
const MARKER_PAINT: CircleLayerSpecification['paint'] = {
  'circle-radius': 7,
  'circle-color': TRAIL_GREEN,
  'circle-stroke-color': '#ffffff',
  'circle-stroke-width': 2.5,
};

function markerFeatures(
  marker: LngLat | null | undefined,
): GeoJSON.FeatureCollection<GeoJSON.Point> {
  return {
    type: 'FeatureCollection',
    features: marker
      ? [
          {
            type: 'Feature',
            geometry: { type: 'Point', coordinates: marker },
            properties: {},
          },
        ]
      : [],
  };
}

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
  layer = DEFAULT_LAYER,
  insets: covered = NO_INSETS,
  marker,
  onPinPress,
  ref,
  size,
}: TrailMapProps & { size: Size }) {
  const map = useRef<MapRef>(null);
  const camera = useRef<CameraRef>(null);
  // A preview frames its route with room above for the flag, which would otherwise stand
  // off its top edge. The full map has room enough under its top bar.
  const flagRoom =
    !interactive && data.flag
      ? Math.max(0, FLAG_RISE + FLAG_MARGIN - framePadding(size))
      : 0;
  const insets = { ...covered, top: covered.top + flagRoom };
  // Views are fitted to the part of the map nothing covers, and the camera is told to keep
  // its centre there.
  const visible: Size = {
    width: size.width,
    height: Math.max(1, size.height - insets.top - insets.bottom),
  };
  const padding = { top: insets.top, bottom: insets.bottom };
  // The native camera reads its initial view only once, so it is worked out only once.
  const [opening] = useState(() => ({
    view: { ...openingView(data, visible, focus?.index), padding },
    nonce: focus?.nonce,
  }));
  // Where the camera is now, for moves that keep part of its view.
  const cameraNow = useRef({
    center: opening.view.center,
    zoom: opening.view.zoom,
  });

  const showDay = useEffectEvent((index: number) => {
    const view = dayView(data, index, visible, cameraNow.current.zoom);
    if (view) camera.current?.easeTo({ ...view, padding, duration: 800 });
  });
  useEffect(() => {
    // The opening view already shows the entry the map opened on, and a tapped pin is
    // already in view.
    if (focus && focus.nonce !== opening.nonce && !focus.fromMap) {
      showDay(focus.index);
    }
  }, [focus, opening.nonce]);

  useImperativeHandle(
    ref,
    () => ({
      resetNorth: () =>
        camera.current?.easeTo({
          center: cameraNow.current.center,
          bearing: 0,
          pitch: 0,
          duration: 500,
        }),
    }),
    [],
  );

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

  // Made once with the base layer the map opens on. Another layer is shown by visibility,
  // since a new style would reload the map and blink its pins.
  const [firstLayer] = useState(layer);
  const style = useMemo(
    () => mapStyle(firstLayer, data.line, data.access),
    [firstLayer, data.line, data.access],
  );
  const shownLayer = useRef(layer);
  useEffect(() => {
    if (shownLayer.current === layer) return;
    shownLayer.current = layer;
    for (const key of LAYER_KEYS) {
      map.current
        ?.setSourceVisibility(key === layer, baseSourceId(key))
        .catch((error: unknown) => {
          if (__DEV__) console.warn('The base layer could not change.', error);
        });
    }
  }, [layer]);

  // The web pulses the pins of an entry just picked, from the itinerary or a tap, then lets
  // them settle back. A pin pulses until its entry's nonce has settled.
  const [settled, setSettled] = useState<number | null>(null);
  const sites = data.kind === 'sites';
  useEffect(() => {
    if (!focus) return;
    const timer = setTimeout(
      () => setSettled(focus.nonce),
      sites ? SITE_PULSE_MS : DAY_PULSE_MS,
    );
    return () => clearTimeout(timer);
  }, [focus, sites]);

  const shown = focus ? data.days[focus.index] : null;
  const pulsing = focus && focus.nonce !== settled ? shown?.pins : undefined;
  const selected = useMemo(() => new Set(pulsing), [pulsing]);
  const decor = useMemo(() => decorFeatures(data), [data]);
  const pins = useMemo(() => pinFeatures(data, selected), [data, selected]);
  const pinsLayer = useMemo(() => pinsLayout(sites), [sites]);
  const markerData = useMemo(() => markerFeatures(marker), [marker]);

  // A pressed pin's popup, as the web's: above the pin, flipping below it or leaning to a
  // side where the map's edge, or what covers it, leaves no room. Placed once the pin's
  // place on screen is known, and again after each move of the map.
  const [popup, setPopup] = useState<{ key: string; tab: number } | null>(null);
  const [placed, setPlaced] = useState<{
    key: string;
    placement: PopupPlacement;
  } | null>(null);
  const popupHeight = useRef(POPUP_GUESS);
  // Where the popup is on screen: [left, top, right, bottom].
  const popupFrame = useRef<[number, number, number, number] | null>(null);
  // Bumped when the map has moved or the popup has been measured, to place it again.
  const [placeAsk, setPlaceAsk] = useState(0);
  const popupPin = popup
    ? data.pins.find((pin) => pin.key === popup.key)
    : undefined;
  const gap = POPUP_GAP[sites ? 'site' : 'day'];

  const placePopup = useEffectEvent(() => {
    if (!popupPin) return;
    const key = popupPin.key;
    map.current
      ?.project(popupPin.lngLat)
      .then(([x, y]) => {
        const height = popupHeight.current + POPUP_TIP;
        const roomAbove = y - gap.above - height - (covered.top + POPUP_EDGE);
        const roomBelow =
          size.height - covered.bottom - POPUP_EDGE - (y + gap.below + height);
        const half = POPUP_WIDTH / 2 + POPUP_EDGE;
        const placement: PopupPlacement = {
          vertical:
            roomAbove >= 0 || roomAbove >= roomBelow ? 'above' : 'below',
          horizontal:
            x < half ? 'left' : x > size.width - half ? 'right' : 'center',
        };
        const left = x - tipX(placement.horizontal);
        const top =
          placement.vertical === 'above'
            ? y - gap.above - height
            : y + gap.below;
        popupFrame.current = [left, top, left + POPUP_WIDTH, top + height];
        setPlaced({ key, placement });
      })
      .catch(() => undefined);
  });
  useEffect(() => {
    if (popup) placePopup();
  }, [popup, placeAsk]);

  const pressPin = (event: NativeSyntheticEvent<PressEventWithFeatures>) => {
    const properties = event.nativeEvent.features[0]?.properties;
    const day = properties?.day;
    const key = properties?.key;
    if (typeof day === 'number' && typeof key === 'string') {
      setPopup({ key, tab: 0 });
      onPinPress?.(day, key);
    }
  };

  const placement =
    placed && placed.key === popup?.key ? placed.placement : null;

  // A tab opens its own entry, as the web's do.
  const pickTab = (tab: number) => {
    const card = popupPin?.cards[tab];
    if (!popupPin || !card || tab === popup?.tab) return;
    setPopup({ key: popupPin.key, tab });
    onPinPress?.(card.day, popupPin.key);
  };

  return (
    <View className="flex-1">
      <Map
        ref={map}
        mapStyle={style}
        style={{ flex: 1 }}
        logo={false}
        attribution={interactive}
        // In the bottom-left corner of the map that shows, where maps keep their credits: just
        // above the sheet, following it from one height to the next, or the safe area.
        attributionPosition={{ bottom: covered.bottom + 8, left: 8 }}
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
          const { center, zoom } = event.nativeEvent;
          cameraNow.current = { center, zoom };
          if (popup) setPlaceAsk((ask) => ask + 1);
        }}
        // A press on no pin closes the popup, as a click off the web's does. A pin's press
        // bubbles up here too, carrying the pin's features, and is left to the pins.
        // A press on the popup, e.g. on a tab, reaches the map as well.
        onPress={(event) => {
          if ('features' in event.nativeEvent) return;
          const [x, y] = event.nativeEvent.point;
          const frame = popupFrame.current;
          if (
            popupPin &&
            placement &&
            frame &&
            x >= frame[0] &&
            x <= frame[2] &&
            y >= frame[1] &&
            y <= frame[3]
          ) {
            const tab = tabAt(
              popupPin.cards.length,
              placement,
              [frame[0], frame[1]],
              [x, y],
            );
            if (tab !== null) pickTab(tab);
            return;
          }
          setPopup(null);
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
            <GeoJSONSource id="decor" data={decor}>
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
              data={pins}
              onPress={interactive ? pressPin : undefined}
              hitbox={PIN_HITBOX}
            >
              {interactive ? (
                <Layer id="pins" type="symbol" layout={pinsLayer} />
              ) : (
                <Layer id="pins" type="circle" paint={PREVIEW_PIN_PAINT} />
              )}
            </GeoJSONSource>
            <GeoJSONSource id="marker" data={markerData}>
              <Layer id="marker" type="circle" paint={MARKER_PAINT} />
            </GeoJSONSource>
          </>
        ) : null}
        {popup && popupPin && placement ? (
          <Marker
            id="pin-popup"
            lngLat={popupPin.lngLat}
            // Its tip on the pin: the card's corner on the point, moved so the tip is.
            anchor={placement.vertical === 'above' ? 'bottom-left' : 'top-left'}
            offset={[
              -tipX(placement.horizontal),
              placement.vertical === 'above' ? -gap.above : gap.below,
            ]}
          >
            <View
              onLayout={(event) => {
                const height = event.nativeEvent.layout.height - POPUP_TIP;
                if (Math.abs(height - popupHeight.current) < 1) return;
                popupHeight.current = height;
                setPlaceAsk((ask) => ask + 1);
              }}
            >
              <PinPopup
                cards={popupPin.cards}
                tab={popup.tab}
                placement={placement}
                onTabPress={pickTab}
              />
            </View>
          </Marker>
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
