import { Text, View } from 'react-native';

import { tripDetailColor } from '@/constants/colors';
import { cn } from '@/lib/utils';

import type { DetailStat } from '../facts';
import { shadows } from '../styles';

type StatsCardProps = {
  stats: DetailStat[];
};

// The web header's stats bar, in two columns. A lone last stat takes the whole row.
export function StatsCard({ stats }: StatsCardProps) {
  const lastIsAlone = stats.length % 2 === 1;

  return (
    <View
      className="flex-row flex-wrap gap-y-[20px] rounded-[16px] bg-surface px-[20px] py-[18px]"
      style={shadows.card}
    >
      {stats.map(({ icon: Icon, label, value }, index) => (
        <View
          key={label}
          accessible
          accessibilityLabel={`${label}, ${value}`}
          className={cn(
            'flex-row items-center gap-[10px] pr-[8px]',
            lastIsAlone && index === stats.length - 1 ? 'w-full' : 'w-1/2',
          )}
        >
          <Icon size={20} strokeWidth={1.75} color={tripDetailColor.icon} />
          <View className="flex-1">
            <Text className="font-poppins text-[12px] leading-[16px] text-muted">
              {label}
            </Text>
            <Text className="font-poppins-semibold text-[14px] leading-[20px] text-ink">
              {value}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}
