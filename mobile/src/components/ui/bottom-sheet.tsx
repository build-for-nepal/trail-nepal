import {
  BottomSheetBackdrop,
  type BottomSheetBackdropProps,
  BottomSheetModal,
  type BottomSheetModalProps,
} from '@gorhom/bottom-sheet';
import { forwardRef, useCallback } from 'react';

import { bottomSheetColor } from '@/constants/colors';

export {
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

// Styling is a prop, not className: the library animates its own Reanimated views.
const BottomSheet = forwardRef<BottomSheetModal, BottomSheetModalProps>(
  function BottomSheet(props, ref) {
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
        {...props}
      />
    );
  },
);

export { BottomSheet, BottomSheetModal };
