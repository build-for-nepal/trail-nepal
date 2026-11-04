import type { SvgProps } from 'react-native-svg';

/** An illustration is sized by its width; its height keeps the drawing's proportions. */
export type ArtProps = Omit<SvgProps, 'width' | 'height' | 'viewBox'> & {
  width: number;
};
