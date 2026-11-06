import { Phone } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { altitudeColor } from '@/constants/colors';
import { cn } from '@/lib/utils';

import { phoneNumbers } from '../altitude';
import { callNumber } from '../call';
import { HELICOPTER_RESCUE, SPECIALIST_HOSPITALS } from '../data/altitude';
import type { Contact } from '../data/altitude';
import { shadows } from '../styles';

const GROUPS = [
  { title: 'Specialist Hospitals', contacts: SPECIALIST_HOSPITALS },
  { title: 'Helicopter Rescue', contacts: HELICOPTER_RESCUE },
];

/**
 * The web's "Reach out to" list: the specialist hospitals and the helicopter operators, with
 * every number one tap from the dialler. Shown in full, with no "See more": a screen of its
 * own has the room.
 */
export function AltitudeContacts() {
  return (
    <View
      className="rounded-[24px] bg-altitude-panel px-[20px] pb-[8px] pt-[20px]"
      style={shadows.card}
    >
      <Text
        accessibilityRole="header"
        className="font-poppins-semibold text-[12px] uppercase leading-[16px] tracking-[1.2px] text-altitude-link"
      >
        Reach Out To
      </Text>

      {GROUPS.map((group) => (
        <View key={group.title} className="mt-[16px]">
          <Text className="font-poppins-semibold text-[11px] uppercase leading-[16px] tracking-[1.1px] text-muted">
            {group.title}
          </Text>
          {group.contacts.map((contact, index) => (
            <ContactRow
              key={contact.name}
              contact={contact}
              last={index === group.contacts.length - 1}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

function ContactRow({ contact, last }: { contact: Contact; last: boolean }) {
  return (
    <View
      className={cn('gap-[8px] py-[14px]', !last && 'border-b border-border')}
    >
      <View className="gap-[2px]">
        <Text className="font-poppins-semibold text-[14px] leading-[20px] text-altitude-name">
          {contact.name}
        </Text>
        {contact.detail ? (
          <Text className="font-poppins text-[12px] leading-[17px] text-altitude-detail">
            {contact.detail}
          </Text>
        ) : null}
        {contact.address ? (
          <Text className="font-poppins text-[12px] leading-[17px] text-muted">
            {contact.address}
          </Text>
        ) : null}
      </View>

      <View className="flex-row flex-wrap gap-[8px]">
        {phoneNumbers(contact.phone).map((number) => (
          <Pressable
            key={number}
            accessibilityRole="button"
            accessibilityLabel={`Call ${contact.name}, ${number}`}
            onPress={() => callNumber(number)}
            hitSlop={4}
          >
            {({ pressed }) => (
              <View
                className="min-h-[40px] flex-row items-center gap-[6px] rounded-full bg-surface px-[12px]"
                style={{ transform: [{ scale: pressed ? 0.96 : 1 }] }}
              >
                <Phone
                  size={13}
                  strokeWidth={2.2}
                  color={altitudeColor.risk.moderate}
                />
                <Text className="font-poppins-medium text-[13px] leading-[18px] text-altitude-link">
                  {number}
                </Text>
              </View>
            )}
          </Pressable>
        ))}
      </View>
    </View>
  );
}
