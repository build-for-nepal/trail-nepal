import { Text, View } from 'react-native';

import { cn } from '@/lib/utils';

import { shadows } from '../styles';
import type { Expectation } from '../types';
import { SectionHeader } from './SectionHeader';

type ExpectSectionProps = {
  expectations: Expectation[];
};

export function ExpectSection({ expectations }: ExpectSectionProps) {
  if (expectations.length === 0) return null;

  return (
    <View className="gap-[16px]">
      <SectionHeader
        title="What to Expect"
        description="Understand rhythms before you go"
      />

      <View
        className="rounded-[16px] bg-surface px-[18px]"
        style={shadows.card}
      >
        {expectations.map((item, index) => (
          <View
            key={index}
            className={cn(
              'gap-[4px] py-[16px]',
              index > 0 && 'border-t border-border',
            )}
          >
            <Text className="font-poppins-semibold text-[15px] leading-[21px] text-ink">
              {item.title}
            </Text>
            <Text className="font-poppins text-[13px] leading-[20px] text-muted">
              {item.description}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
