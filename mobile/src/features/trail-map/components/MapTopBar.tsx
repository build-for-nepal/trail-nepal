import { Check, ChevronLeft, Layers, Navigation } from 'lucide-react-native';
import { useState } from 'react';
import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { mapControlColor } from '@/constants/colors';
import { cn } from '@/lib/utils';

import { LAYERS, LAYER_KEYS } from '../constants';
import type { LayerKey } from '../constants';

/** The bar's height below the status bar: its buttons and the gaps above and below them. */
export const TOP_BAR_HEIGHT = 56;
const BUTTON = 44;
/** Between the map's controls, and between them and the layer menu. */
const GAP = 10;
const MENU_WIDTH = 184;

const isLayerKey = (value: string): value is LayerKey => value in LAYERS;

type MapTopBarProps = {
  layer: LayerKey;
  onLayerChange: (layer: LayerKey) => void;
  onResetNorth: () => void;
  onBack: () => void;
};

/**
 * Floats over the map: back at the top left, and down the top right, the layer picker over
 * reset north. The picker's menu opens beside it; a tap anywhere else closes it.
 */
export function MapTopBar({
  layer,
  onLayerChange,
  onResetNorth,
  onBack,
}: MapTopBarProps) {
  const insets = useSafeAreaInsets();
  const [picking, setPicking] = useState(false);
  const top = insets.top + (TOP_BAR_HEIGHT - BUTTON) / 2;

  return (
    // box-none: everywhere but the controls belongs to the map.
    <View style={[StyleSheet.absoluteFill, { pointerEvents: 'box-none' }]}>
      {picking ? (
        // Takes the tap that closes the menu, so it doesn't also land on the map.
        <Pressable
          style={StyleSheet.absoluteFill}
          accessible={false}
          onPress={() => setPicking(false)}
        />
      ) : null}

      <View className="absolute left-[12px]" style={{ top }}>
        <RoundButton label="Back" onPress={onBack}>
          <ChevronLeft size={22} strokeWidth={2} color={mapControlColor.icon} />
        </RoundButton>
      </View>

      <View
        className="absolute right-[12px] items-center"
        style={{ top, gap: GAP }}
      >
        <RoundButton
          label="Map layers"
          expanded={picking}
          onPress={() => setPicking((open) => !open)}
        >
          <Layers size={20} strokeWidth={2} color={mapControlColor.icon} />
        </RoundButton>
        <RoundButton label="Reset north" onPress={onResetNorth}>
          <Navigation size={20} strokeWidth={2} color={mapControlColor.icon} />
        </RoundButton>
      </View>

      {picking ? (
        <View
          className="absolute rounded-[14px] bg-surface p-[6px]"
          style={[
            styles.shadow,
            { top, right: 12 + BUTTON + GAP, width: MENU_WIDTH },
          ]}
        >
          <Text className="px-[10px] pb-[6px] pt-[4px] font-poppins-semibold text-[10px] uppercase leading-[14px] tracking-[0.8px] text-muted">
            Map style
          </Text>
          <ToggleGroup
            type="single"
            value={layer}
            // Tapping the chosen layer clears it in the primitive; one layer always stays.
            onValueChange={(next) => {
              if (next && isLayerKey(next)) {
                onLayerChange(next);
                setPicking(false);
              }
            }}
            className="gap-[2px]"
          >
            {LAYER_KEYS.map((key) => {
              const selected = key === layer;
              return (
                <ToggleGroupItem
                  key={key}
                  value={key}
                  aria-label={LAYERS[key].label}
                  className={cn(
                    'h-[44px] flex-row justify-between rounded-[10px] px-[10px] active:bg-field',
                    selected && 'bg-field',
                  )}
                >
                  <Text
                    numberOfLines={1}
                    className={cn(
                      'text-[14px] leading-[20px] text-ink',
                      selected ? 'font-poppins-semibold' : 'font-poppins',
                    )}
                  >
                    {LAYERS[key].label}
                  </Text>
                  {selected ? (
                    <Check
                      size={18}
                      strokeWidth={2.5}
                      color={mapControlColor.icon}
                    />
                  ) : null}
                </ToggleGroupItem>
              );
            })}
          </ToggleGroup>
        </View>
      ) : null}
    </View>
  );
}

/** A white round button. While its menu is open it keeps its colour and gains a thin ring. */
function RoundButton({
  label,
  expanded,
  onPress,
  children,
}: {
  label: string;
  expanded?: boolean;
  onPress: () => void;
  children: ReactNode;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={expanded === undefined ? undefined : { expanded }}
      onPress={onPress}
      hitSlop={4}
      className={cn(
        'items-center justify-center rounded-full border bg-surface active:bg-field',
        expanded ? 'border-ink' : 'border-transparent',
      )}
      style={[styles.shadow, { width: BUTTON, height: BUTTON }]}
    >
      {children}
    </Pressable>
  );
}

// NativeWind's arbitrary shadow classes keep only the colour and radius, so shadows go
// through style. A little deeper than the detail page's buttons: these sit on a busy map.
const styles = StyleSheet.create({
  shadow: {
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.14), 0 1px 2px rgba(0, 0, 0, 0.08)',
  },
});
