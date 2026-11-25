import { Eye, EyeOff, type LucideIcon } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

import { authColor } from '@/constants/colors';
import { cn } from '@/lib/utils';

type AuthFieldProps = {
  icon: LucideIcon;
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  /** Masks the text and adds the show/hide toggle. */
  secure?: boolean;
  keyboardType?: 'default' | 'email-address';
  autoComplete?: 'email' | 'current-password' | 'new-password';
  error?: string | null;
};

export function AuthField({
  icon: Icon,
  placeholder,
  value,
  onChangeText,
  secure = false,
  keyboardType = 'default',
  autoComplete,
  error,
}: AuthFieldProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <View>
      <View
        className={cn(
          'h-[56px] flex-row items-center rounded-[14px] bg-auth-field px-[16px]',
          error && 'border border-load-over',
        )}
      >
        {/* shrink-0: on web the icon sits in a flex row next to a flex-1 input
            and would otherwise be squashed to zero width, since the web
            defaults flex-shrink to 1 where React Native defaults it to 0. */}
        <View className="shrink-0">
          <Icon size={20} strokeWidth={1.75} color={authColor.fieldIcon} />
        </View>

        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={authColor.placeholder}
          secureTextEntry={secure && !revealed}
          keyboardType={keyboardType}
          autoComplete={autoComplete}
          autoCapitalize="none"
          autoCorrect={false}
          // min-w-0 so the input can shrink and the toggle stays inside the
          // field: on web a flex child defaults to min-width:auto and would
          // push the toggle out of the row.
          className="ml-[12px] min-w-0 flex-1 font-poppins text-[15px] leading-[21px] text-ink"
        />

        {secure && (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={revealed ? 'Hide password' : 'Show password'}
            accessibilityState={{ selected: revealed }}
            onPress={() => setRevealed((shown) => !shown)}
            // Larger than the icon so the tap target clears 44px.
            hitSlop={12}
            className="shrink-0"
          >
            {revealed ? (
              <Eye size={20} strokeWidth={1.75} color={authColor.eye} />
            ) : (
              <EyeOff size={20} strokeWidth={1.75} color={authColor.eye} />
            )}
          </Pressable>
        )}
      </View>

      {error ? (
        <Text
          accessibilityRole="alert"
          className="ml-[4px] mt-[6px] font-poppins text-[12px] leading-[16px] text-load-over"
        >
          {error}
        </Text>
      ) : null}
    </View>
  );
}
