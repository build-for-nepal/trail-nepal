import {
  BottomSheetBackdrop,
  type BottomSheetBackdropProps,
  BottomSheetModal,
  type BottomSheetModalProps,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import { forwardRef, useCallback, useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { bottomSheetColor } from '@/constants/colors';

export {
  BottomSheetModalProvider,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

// Styling is a prop, not className: the library animates its own Reanimated views.
const BottomSheet = forwardRef<BottomSheetModal, BottomSheetModalProps>(
  function BottomSheet({ onChange, onDismiss, ...props }, ref) {
    const insets = useSafeAreaInsets();
    const { dismiss } = useBottomSheetModal();
    const [open, setOpen] = useState(false);

    // Android's back button closes an open sheet first. The library leaves it to the
    // navigator, which would pop the screen under the sheet instead.
    useEffect(() => {
      if (!open) return;
      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          dismiss();
          return true;
        },
      );
      return () => subscription.remove();
    }, [open, dismiss]);

    const renderBackdrop = useCallback(
      (backdropProps: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...backdropProps}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          opacity={1}
          style={[
            backdropProps.style,
            { backgroundColor: bottomSheetColor.scrim },
          ]}
        />
      ),
      [],
    );

    return (
      <BottomSheetModal
        ref={ref}
        backdropComponent={renderBackdrop}
        backgroundStyle={{
          backgroundColor: bottomSheetColor.surface,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
        // Grab bar sits 8px from the top edge with no gap below, per the mockup's .grab;
        // the library's default is 10px on both sides.
        handleStyle={{ paddingTop: 8, paddingBottom: 0 }}
        handleIndicatorStyle={{
          width: 36,
          height: 4,
          backgroundColor: bottomSheetColor.grab,
        }}
        // A sheet taller than the screen, such as a long list at large text sizes, stops
        // below the status bar. The library's default of 0 puts its top under it.
        topInset={insets.top}
        {...props}
        onChange={(index, position, type) => {
          setOpen(index >= 0);
          onChange?.(index, position, type);
        }}
        onDismiss={() => {
          setOpen(false);
          onDismiss?.();
        }}
      />
    );
  },
);

export { BottomSheet, BottomSheetModal };
