import { Link } from 'expo-router';
import type { Href } from 'expo-router';
import { Maximize2 } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { tripDetailColor } from '@/constants/colors';
import { TrailMap } from '@/features/trail-map/components/TrailMap';
import type { TrailMapData } from '@/features/trail-map/types';

import { shadows } from '../styles';

type MapPreviewCardProps = {
  data: TrailMapData;
  /** The full-screen map. */
  href: Href;
};

/** The itinerary's map at a glance. Too small to use, so a press opens the full map. */
export function MapPreviewCard({ data, href }: MapPreviewCardProps) {
  return (
    <Link href={href} asChild>
      <Pressable accessibilityRole="button" accessibilityLabel="Open the map">
        {({ pressed }) => (
          <View
            className="rounded-[16px] bg-surface"
            style={[
              shadows.card,
              { transform: [{ scale: pressed ? 0.98 : 1 }] },
            ]}
          >
            <View className="h-[200px] overflow-hidden rounded-[16px] bg-field">
              {/* Only a picture: the card takes every touch, so the page still scrolls. */}
              <View
                className="flex-1"
                style={{ pointerEvents: 'none' }}
                importantForAccessibility="no-hide-descendants"
              >
                <TrailMap data={data} interactive={false} />
              </View>
              <View
                className="absolute right-[10px] top-[10px] flex-row items-center gap-[6px] rounded-full bg-surface px-[12px] py-[6px]"
                style={shadows.button}
              >
                <Maximize2
                  size={14}
                  strokeWidth={2}
                  color={tripDetailColor.icon}
                />
                <Text className="font-poppins-medium text-[12px] leading-[16px] text-ink">
                  Open map
                </Text>
              </View>
            </View>
          </View>
        )}
      </Pressable>
    </Link>
  );
}
