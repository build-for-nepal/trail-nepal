import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { getTripDetail } from '../data';
import { usePackingList } from '../hooks/usePackingList';
import {
  gearItemId,
  loadBand,
  PACKING_TABS,
  packedCount,
  packingTotals,
  quantityOf,
} from '../packing';
import type { PackableDetail, PackableType, PackingTab } from '../packing';
import { shadows } from '../styles';
import { HeaderBar } from './CompactHeader';
import { PackingRow } from './PackingRow';
import { PackingSummary } from './PackingSummary';
import { PackingTabs } from './PackingTabs';
import { SectionHeader } from './SectionHeader';
import { TripNotFound } from './TripNotFound';

type PackingScreenProps = {
  type: PackableType;
  id: string | undefined;
};

export function PackingScreen({ type, id }: PackingScreenProps) {
  const detail = id ? getTripDetail(type, id) : undefined;
  if (!id || !detail || detail.type === 'cultural') return <TripNotFound />;
  return <PackingList detail={detail} id={id} />;
}

type PackingListProps = {
  detail: PackableDetail;
  id: string;
};

function PackingList({ detail, id }: PackingListProps) {
  const [tab, setTab] = useState<PackingTab>('essential');
  const { state, toggle, setQuantity } = usePackingList(detail.type, id);

  const current = PACKING_TABS.find((t) => t.value === tab) ?? PACKING_TABS[0];
  const items = detail.gear[tab];
  const packedHere = packedCount(detail.gear, tab, state);
  const totals = packingTotals(detail.gear, state);

  return (
    <View className="flex-1 bg-sand">
      <StatusBar style="dark" />
      <HeaderBar title="Gear Checklist" />

      <ScrollView className="flex-1">
        <View className="gap-[24px] px-[18px] py-[24px]">
          <SectionHeader
            title={detail.name.split(' (')[0]}
            description="Make sure you have everything you need"
          />

          <PackingTabs value={tab} onValueChange={setTab} />

          <View className="gap-[12px]">
            <View className="flex-row items-start justify-between gap-[12px]">
              <Text className="flex-1 font-poppins text-[13px] leading-[20px] text-muted">
                {current.description}
              </Text>
              <View
                accessible
                accessibilityLabel={`${packedHere} of ${items.length} packed`}
                className="rounded-full bg-field px-[10px] py-[4px]"
              >
                <Text className="font-poppins-semibold text-[11px] leading-[16px] text-ink">
                  {packedHere} / {items.length} packed
                </Text>
              </View>
            </View>

            <View
              className="rounded-[16px] bg-surface px-[18px]"
              style={shadows.card}
            >
              {items.map((item, index) => {
                const itemId = gearItemId(tab, index);
                return (
                  <PackingRow
                    key={itemId}
                    item={item}
                    checked={Boolean(state.checked[itemId])}
                    quantity={quantityOf(state, itemId, item)}
                    first={index === 0}
                    onToggle={() => toggle(itemId)}
                    onQuantityChange={(quantity) =>
                      setQuantity(itemId, quantity)
                    }
                  />
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>

      <PackingSummary
        totals={totals}
        band={loadBand(totals.grams, detail.type)}
      />
    </View>
  );
}
