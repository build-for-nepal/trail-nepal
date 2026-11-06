import { Check, Minus, Plus } from 'lucide-react-native';
import type { LucideIcon } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { packingColor, tripDetailColor } from '@/constants/colors';
import { cn } from '@/lib/utils';

import { formatGrams, rowGrams } from '../packing';
import type { GearItem } from '../types';

type StepButtonProps = {
  icon: LucideIcon;
  label: string;
  disabled?: boolean;
  onPress: () => void;
};

// 32px plus an 8px hitSlop on each side makes Android's 48px touch target.
function StepButton({ icon: Icon, label, disabled, onPress }: StepButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      disabled={disabled}
      onPress={onPress}
      hitSlop={8}
    >
      {({ pressed }) => (
        <View
          className={cn(
            'h-[32px] w-[32px] items-center justify-center rounded-full bg-field',
            disabled && 'opacity-40',
          )}
          style={{ transform: [{ scale: pressed ? 0.9 : 1 }] }}
        >
          <Icon size={16} strokeWidth={2.2} color={tripDetailColor.icon} />
        </View>
      )}
    </Pressable>
  );
}

type PackingRowProps = {
  item: GearItem;
  checked: boolean;
  /** Undefined when the item has no stepper. */
  quantity: number | undefined;
  first: boolean;
  onToggle: () => void;
  onQuantityChange: (quantity: number) => void;
};

export function PackingRow({
  item,
  checked,
  quantity,
  first,
  onToggle,
  onQuantityChange,
}: PackingRowProps) {
  const weight = formatGrams(rowGrams(item, quantity));
  const label =
    quantity === undefined
      ? `${item.name}, ${weight}`
      : `${item.name}, quantity ${quantity}, ${weight}`;

  return (
    <View
      className={cn(
        'flex-row items-center gap-[12px] py-[14px]',
        !first && 'border-t border-border',
      )}
    >
      {/* The stepper is a sibling, not a child: inside the checkbox, screen readers could
          not reach its buttons. aria-checked rather than accessibilityState, which
          react-native-web 0.21 drops. */}
      <Pressable
        accessibilityRole="checkbox"
        aria-checked={checked}
        accessibilityLabel={label}
        onPress={onToggle}
        className="flex-1 flex-row items-center gap-[12px]"
      >
        <View
          className={cn(
            'h-[22px] w-[22px] items-center justify-center rounded-[6px]',
            checked ? 'bg-primary' : 'border-[1.5px] border-muted bg-surface',
          )}
        >
          {checked ? (
            <Check size={14} strokeWidth={3} color={packingColor.check} />
          ) : null}
        </View>
        <View className="flex-1 gap-[2px]">
          <Text className="font-poppins-medium text-[14px] leading-[20px] text-ink">
            {item.name}
          </Text>
          <Text className="font-poppins text-[12px] leading-[18px] text-muted">
            {weight}
          </Text>
        </View>
      </Pressable>

      {quantity !== undefined ? (
        <View className="flex-row items-center gap-[4px]">
          <StepButton
            icon={Minus}
            label={`Decrease ${item.name} quantity`}
            disabled={quantity <= 1}
            onPress={() => onQuantityChange(quantity - 1)}
          />
          <Text
            accessibilityLabel={`Quantity ${quantity}`}
            className="min-w-[24px] text-center font-poppins-semibold text-[14px] leading-[20px] text-ink"
          >
            {quantity}
          </Text>
          <StepButton
            icon={Plus}
            label={`Increase ${item.name} quantity`}
            onPress={() => onQuantityChange(quantity + 1)}
          />
        </View>
      ) : null}
    </View>
  );
}
