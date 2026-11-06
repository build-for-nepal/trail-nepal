import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { getTripDetail } from '../data';
import { AltitudeCard } from './AltitudeCard';
import { AltitudeContacts } from './AltitudeContacts';
import { AltitudeGuide } from './AltitudeGuide';
import { ALTITUDE_DESCRIPTION } from './AltitudeSection';
import { HeaderBar } from './CompactHeader';
import { EmergencyCalls } from './EmergencyCalls';
import { SectionHeader } from './SectionHeader';
import { TripNotFound } from './TripNotFound';

/**
 * A trek's Altitude & Safety, as the web's section: the trek's highest point and its risk,
 * the emergency calls first, then AMS, HAPE and HACE, then everyone to reach out to. Treks
 * only, as on the web.
 */
export function AltitudeScreen({ id }: { id: string | undefined }) {
  const insets = useSafeAreaInsets();
  const detail = id ? getTripDetail('trek', id) : undefined;
  if (!detail || detail.type !== 'trek') return <TripNotFound />;
  const name = detail.name.split(' (')[0];

  return (
    <View className="flex-1 bg-sand">
      <StatusBar style="dark" />
      <HeaderBar title="Altitude & Safety" />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: insets.bottom + 32 }}
      >
        <View className="gap-[24px] px-[18px] py-[24px]">
          <SectionHeader title={name} description={ALTITUDE_DESCRIPTION} />
          <AltitudeCard maxElevation={detail.meta.maxElevation} name={name} />
          <EmergencyCalls />
          <AltitudeGuide />
          <AltitudeContacts />
        </View>
      </ScrollView>
    </View>
  );
}
