import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { formatKg, LOAD_BAND_LABEL } from '../packing';
import type { LoadBand, PackingTotals } from '../packing';

// Whole class names, so Tailwind's content scan finds them.
const BAND_TEXT: Record<LoadBand, string> = {
  empty: 'text-muted',
  light: 'text-load-light',
  optimal: 'text-load-optimal',
  heavy: 'text-load-heavy',
  over: 'text-load-over',
};

type PackingSummaryProps = {
  totals: PackingTotals;
  band: LoadBand;
};

/** Pinned under the list, so the total stays in view while ticking items. */
export function PackingSummary({ totals, band }: PackingSummaryProps) {
  const insets = useSafeAreaInsets();
  const weight = formatKg(totals.grams);
  const label = LOAD_BAND_LABEL[band];
  const percent = totals.total ? (totals.packed / totals.total) * 100 : 0;

  return (
    <View
      accessible
      accessibilityLabel={`${totals.packed} of ${totals.total} items packed. Pack weight ${weight}, ${label}.`}
      className="gap-[10px] border-t border-border bg-surface px-[18px] pt-[14px]"
      style={{ paddingBottom: insets.bottom + 14 }}
    >
      <View className="h-[6px] overflow-hidden rounded-full bg-field">
        <View
          className="h-full rounded-full bg-primary"
          style={{ width: `${percent}%` }}
        />
      </View>

      <View className="flex-row items-center justify-between gap-[12px]">
        <Text className="shrink-0 font-poppins-semibold text-[14px] leading-[20px] text-ink">
          {totals.packed} / {totals.total} packed
        </Text>
        <Text
          className={`flex-1 text-right font-poppins-semibold text-[14px] leading-[20px] ${BAND_TEXT[band]}`}
        >
          {weight} · {label}
        </Text>
      </View>
    </View>
  );
}
