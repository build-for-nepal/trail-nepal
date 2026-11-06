import { Link } from 'expo-router';
import { Backpack, ChevronRight } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { tripDetailColor } from '@/constants/colors';

import { usePackingList } from '../hooks/usePackingList';
import { packingHref } from '../href';
import { packingTotals } from '../packing';
import type { PackableType } from '../packing';
import { shadows } from '../styles';
import type { GearChecklist } from '../types';
import { SectionHeader } from './SectionHeader';

type PackingSectionProps = {
  type: PackableType;
  id: string;
  gear: GearChecklist;
};

/** The detail page's way into the gear checklist, which has a screen of its own. */
export function PackingSection({ type, id, gear }: PackingSectionProps) {
  const { state } = usePackingList(type, id);
  const { packed, total } = packingTotals(gear, state);
  const lists = `${gear.essential.length} essential · ${gear.goodToHave.length} good to have`;

  return (
    <View className="gap-[16px]">
      <SectionHeader
        title="Gear Checklist"
        description="Make sure you have everything you need"
      />

      <Link href={packingHref(type, id)} asChild>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Open the gear checklist. ${packed} of ${total} items packed, ${lists}.`}
        >
          {({ pressed }) => (
            <View
              className="flex-row items-center gap-[14px] rounded-[16px] bg-surface p-[18px]"
              style={[
                shadows.card,
                { transform: [{ scale: pressed ? 0.98 : 1 }] },
              ]}
            >
              <View className="h-[44px] w-[44px] items-center justify-center rounded-full bg-field">
                <Backpack
                  size={22}
                  strokeWidth={1.75}
                  color={tripDetailColor.icon}
                />
              </View>
              <View className="flex-1 gap-[2px]">
                <Text className="font-poppins-semibold text-[15px] leading-[21px] text-ink">
                  {packed} / {total} packed
                </Text>
                <Text className="font-poppins text-[13px] leading-[18px] text-muted">
                  {lists}
                </Text>
              </View>
              <ChevronRight
                size={20}
                strokeWidth={2}
                color={tripDetailColor.icon}
              />
            </View>
          )}
        </Pressable>
      </Link>
    </View>
  );
}
