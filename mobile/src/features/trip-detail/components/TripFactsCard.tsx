import { TrendingDown, TrendingUp } from 'lucide-react-native';
import { Text, View } from 'react-native';

import { tripDetailColor } from '@/constants/colors';
import { cn } from '@/lib/utils';

import type { FactRow } from '../facts';
import { shadows } from '../styles';

type TripFactsCardProps = {
  rows: FactRow[];
};

export function TripFactsCard({ rows }: TripFactsCardProps) {
  return (
    <View
      className="rounded-[16px] bg-surface px-[18px] pb-[4px] pt-[16px]"
      style={shadows.card}
    >
      <Text
        accessibilityRole="header"
        className="font-poppins-semibold text-[16px] leading-[22px] text-ink"
      >
        Trip Facts
      </Text>

      <View className="mt-[6px]">
        {rows.map((row, index) => {
          const TrendIcon =
            row.trend === 'up'
              ? TrendingUp
              : row.trend === 'down'
                ? TrendingDown
                : null;

          return (
            <View
              key={row.label}
              accessible
              accessibilityLabel={`${row.label}, ${row.value}`}
              className={cn(
                'flex-row items-start justify-between gap-[16px] py-[12px]',
                index > 0 && 'border-t border-border',
              )}
            >
              <Text className="shrink-0 font-poppins text-[13px] leading-[19px] text-muted">
                {row.label}
              </Text>
              <View className="flex-1 flex-row items-center justify-end gap-[6px]">
                <Text className="shrink text-right font-poppins-semibold text-[13px] leading-[19px] text-ink">
                  {row.value}
                </Text>
                {TrendIcon ? (
                  <TrendIcon
                    size={14}
                    strokeWidth={2.5}
                    color={tripDetailColor.icon}
                  />
                ) : null}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
