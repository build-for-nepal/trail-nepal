import { Text } from 'react-native';

import { cn } from '@/lib/utils';

/**
 * "Trails Nepal" in brand green, as both auth screens open with.
 *
 * Poppins, not Fraunces: the auth designs set the wordmark in the same rounded
 * sans as the rest of their copy, where the app's other headings use Fraunces.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <Text
      accessibilityRole="header"
      className={cn(
        'text-center font-poppins-semibold text-[30px] leading-[40px] text-brand',
        className,
      )}
    >
      Trails Nepal
    </Text>
  );
}
