import Accordion from 'react-native-collapsible/Accordion';
import { ChevronDown, CircleDot, Flag } from 'lucide-react-native';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { cn } from '@/lib/utils';

const RAIL_DOT = '#376BB6';

export type AccordionEntry = {
  header: string;
  body: React.ReactNode;
};

function RailIcon({ index, count }: { index: number; count: number }) {
  if (index === 0) {
    return <CircleDot size={14} strokeWidth={2.5} color={RAIL_DOT} />;
  }
  if (index === count - 1) {
    return <Flag size={14} strokeWidth={2.2} color={RAIL_DOT} />;
  }
  return <View className="h-[10px] w-[10px] rounded-full bg-[#376BB6]" />;
}

export function ChevronAnimated({ open }: { open: boolean }) {
  const rotation = useSharedValue(open ? 180 : 0);

  useEffect(() => {
    rotation.value = withTiming(open ? 180 : 0, { duration: 300 });
  }, [open, rotation]);

  const style = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <Animated.View style={style}>
      <ChevronDown size={18} strokeWidth={2.2} color="#55685F" />
    </Animated.View>
  );
}

type ItineraryAccordionProps = {
  items: AccordionEntry[];
  activeSections: number[];
  onActiveSectionsChange: (sections: number[]) => void;
};

export function ItineraryAccordion({
  items,
  activeSections,
  onActiveSectionsChange,
}: ItineraryAccordionProps) {
  function renderHeader(
    _section: AccordionEntry,
    index: number,
    isActive: boolean,
  ) {
    const isLast = index === items.length - 1;
    return (
      <View
        className={cn(
          'flex-row items-center gap-[12px] py-[16px]',
          !isLast && !isActive && 'border-b border-border',
        )}
      >
        <View className="w-[14px] items-center">
          <RailIcon index={index} count={items.length} />
        </View>
        <Text
          numberOfLines={2}
          className="flex-1 font-poppins-semibold text-[14px] leading-[20px] text-ink"
        >
          {_section.header}
        </Text>
        <ChevronAnimated open={isActive} />
      </View>
    );
  }

  function renderContent(
    section: AccordionEntry,
    _index: number,
    isActive: boolean,
  ) {
    const isLast = _index === items.length - 1;
    return (
      <View
        className={cn(
          'pb-[18px] pl-[26px] pr-[4px]',
          !isLast && 'border-b border-border',
        )}
      >
        {section.body}
      </View>
    );
  }

  return (
    <View className="rounded-[16px] bg-surface px-[18px]">
      <Accordion
        sections={items}
        activeSections={activeSections}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={onActiveSectionsChange}
        expandMultiple
        underlayColor="transparent"
        duration={300}
        touchableComponent={undefined}
      />
    </View>
  );
}
