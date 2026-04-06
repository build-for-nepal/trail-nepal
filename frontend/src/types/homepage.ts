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

export type SearchBarProps = {
  variant?: "light" | "dark";
};

export interface NavLink {
  label: string;
  href: string;
}
export interface PillProps {
  text: string;
  color: string;
}

export interface SectionHeaderProps {
  title: string;
  description: string;
}
export interface Trek {
  id: string;
  title: string;
  duration: string;
  altitude: string;
  bestTime: string;
  price: string;
  difficulty: string;
  imageSrc: string;
  href: string;
  description?: string;
}

export interface TrekCardProps {
  imageUrl: string;
  title: string;
  description?: string;
  difficulty: string;
  duration: string;
  altitude: string;
  season: string;
  price: string;
  href: string;
}
