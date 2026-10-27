import { Check, ChevronLeft, Layers, Navigation } from 'lucide-react-native';
import { useState } from 'react';
import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { mapControlColor } from '@/constants/colors';
import { cn } from '@/lib/utils';

import { LAYERS } from '../constants';
import type { LayerKey } from '../constants';

/** The bar's height below the status bar: its buttons and the gaps above and below them. */
export const TOP_BAR_HEIGHT = 56;
const BUTTON = 40;

const LAYER_KEYS = Object.keys(LAYERS) as LayerKey[];
const isLayerKey = (value: string): value is LayerKey => value in LAYERS;

type MapTopBarProps = {
  layer: LayerKey;
  onLayerChange: (layer: LayerKey) => void;
  onResetNorth: () => void;
  onBack: () => void;
};

/** Floats over the map's top: back on the left, the layer picker and reset north on the right. */
export function MapTopBar({
  layer,
  onLayerChange,
  onResetNorth,
  onBack,
}: MapTopBarProps) {
  const insets = useSafeAreaInsets();
  const [picking, setPicking] = useState(false);

  return (
    // box-none: the gaps between the buttons belong to the map.
    <View
      className="absolute left-[12px] right-[12px]"
      style={{
        top: insets.top + (TOP_BAR_HEIGHT - BUTTON) / 2,
        pointerEvents: 'box-none',
      }}
    >
      <View
        className="flex-row items-center justify-between"
        style={{ pointerEvents: 'box-none' }}
      >
        <RoundButton label="Back" onPress={onBack}>
          <ChevronLeft size={22} strokeWidth={2} color={mapControlColor.icon} />
        </RoundButton>
        <View className="flex-row gap-[8px]">
          <RoundButton
            label="Map layers"
            expanded={picking}
            active={picking}
            onPress={() => setPicking((open) => !open)}
          >
            <Layers
              size={20}
              strokeWidth={2}
              color={
                picking ? mapControlColor.iconOnActive : mapControlColor.icon
              }
            />
          </RoundButton>
          <RoundButton label="Reset north" onPress={onResetNorth}>
            <Navigation
              size={20}
              strokeWidth={2}
              color={mapControlColor.icon}
            />
          </RoundButton>
        </View>
      </View>

      {picking ? (
        <View
          className="mt-[8px] self-end overflow-hidden rounded-[12px] bg-surface py-[4px]"
          style={styles.shadow}
        >
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
          >
            {LAYER_KEYS.map((key) => {
              const selected = key === layer;
              return (
                <ToggleGroupItem
                  key={key}
                  value={key}
                  aria-label={LAYERS[key].label}
                  className="h-[40px] flex-row justify-start gap-[10px] pl-[14px] pr-[18px]"
                >
                  <View className="w-[16px]">
                    {selected ? (
                      <Check
                        size={16}
                        strokeWidth={2.5}
                        color={mapControlColor.icon}
                      />
                    ) : null}
                  </View>
                  <Text
                    className={cn(
                      'font-poppins-medium text-[13px] leading-[18px]',
                      selected ? 'text-ink' : 'text-muted',
                    )}
                  >
                    {LAYERS[key].label}
                  </Text>
                </ToggleGroupItem>
              );
            })}
          </ToggleGroup>
        </View>
      ) : null}
    </View>
  );
}

function RoundButton({
  label,
  active = false,
  expanded,
  onPress,
  children,
}: {
  label: string;
  active?: boolean;
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
      hitSlop={6}
      className={cn(
        'h-[40px] w-[40px] items-center justify-center rounded-full',
        active ? 'bg-ink' : 'bg-surface',
      )}
      style={styles.shadow}
    >
      {children}
    </Pressable>
  );
}

// NativeWind's arbitrary shadow classes keep only the colour and radius, so shadows go
// through style. The same shadow as the detail page's buttons.
const styles = StyleSheet.create({
  shadow: {
    boxShadow:
      '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  },
});
