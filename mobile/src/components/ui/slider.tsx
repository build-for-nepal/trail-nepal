import RNSlider, { type SliderProps } from '@react-native-community/slider';

import { sliderColor } from '@/constants/colors';

function Slider(props: SliderProps) {
  return (
    <RNSlider
      minimumTrackTintColor={sliderColor.fill}
      maximumTrackTintColor={sliderColor.track}
      thumbTintColor={sliderColor.thumb}
      {...props}
    />
  );
}

export { Slider };
