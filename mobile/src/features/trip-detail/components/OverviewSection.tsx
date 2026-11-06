import { Text, View } from 'react-native';

import type { FactRow } from '../facts';
import { paragraphs } from '../format';
import { SectionHeader } from './SectionHeader';
import { TripFactsCard } from './TripFactsCard';

type OverviewSectionProps = {
  title: string;
  description: string;
  overview: string;
  facts: FactRow[];
};

export function OverviewSection({
  title,
  description,
  overview,
  facts,
}: OverviewSectionProps) {
  return (
    <View className="gap-[16px]">
      <SectionHeader title={title} description={description} />

      {paragraphs(overview).map((paragraph, index) => (
        <Text
          key={index}
          className="font-poppins text-[14px] leading-[23px] text-ink"
        >
          {paragraph}
        </Text>
      ))}

      <TripFactsCard rows={facts} />
    </View>
  );
}
