import { Link } from 'expo-router';
import { ChevronRight, HeartPulse } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { tripDetailColor } from '@/constants/colors';

import { safetyHref } from '../href';
import { shadows } from '../styles';
import { AltitudeCard } from './AltitudeCard';
import { EmergencyCalls } from './EmergencyCalls';
import { SectionHeader } from './SectionHeader';

/** The web's description, from TreksAltitudeSickness.tsx. */
export const ALTITUDE_DESCRIPTION =
  'Comprehensive health guidance and immediate response tools for the high altitude trekker.';

type AltitudeSectionProps = {
  id: string;
  name: string;
  maxElevation: string;
};

/**
 * A trek page's way into Altitude & Safety: how high it goes and how risky that is, the two
 * emergency calls, one tap away, and the illness guide and contacts on a screen of their own.
 */
export function AltitudeSection({
  id,
  name,
  maxElevation,
}: AltitudeSectionProps) {
  return (
    <View className="gap-[16px]">
      <SectionHeader
        title="Altitude & Safety"
        description={ALTITUDE_DESCRIPTION}
      />

      <AltitudeCard maxElevation={maxElevation} name={name} />
      <EmergencyCalls />

      <Link href={safetyHref(id)} asChild>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Open the altitude sickness guide: AMS, HAPE and HACE, with hospitals and helicopter rescue contacts."
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
                <HeartPulse
                  size={22}
                  strokeWidth={1.75}
                  color={tripDetailColor.icon}
                />
              </View>
              <View className="flex-1 gap-[2px]">
                <Text className="font-poppins-semibold text-[15px] leading-[21px] text-ink">
                  Altitude sickness guide
                </Text>
                <Text className="font-poppins text-[13px] leading-[18px] text-muted">
                  AMS, HAPE & HACE · Hospitals and rescue
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
