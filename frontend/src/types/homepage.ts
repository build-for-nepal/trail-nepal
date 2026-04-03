export interface Slide {
  id: string;
  title: string;
  imageAlt: string;
  imageSrc: string;
  description: string;
}

export interface StackSlot {
  widthRem: number;
  heightRem: number;
  topCalc: string;
  zIndex: number;
}

export type CardOffset = 0 | 1 | 2;

export interface MobileCarouselProps {
  slides: any[];
  activeIndex: number;
  goToSlide: (index: number) => void;
}
