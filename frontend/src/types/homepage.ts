import type { RefObject } from "react";
export interface NavLinksProps {
  className?: string;
}
export interface HeroContentProps {
  slide: Slide;
  onPrev: () => void;
  onNext: () => void;
  onExplore: () => void;
  textElemsRef: RefObject<(HTMLElement | null)[]>;
}
export interface CarouselCardProps {
  slide: Slide;
  offset: number;
  onClick: () => void;
}
export interface HeroBackgroundProps {
  slides: Slide[];
  bgLayersRef: RefObject<(HTMLDivElement | null)[]>;
}
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

export interface SearchBarProps {
  variant?: "light" | "dark";
  className?: string;
}

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
  light?: boolean;
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
export interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

export type TierKey = "budget" | "mid-range" | "comfort";

export interface CostItem {
  label: string;
  amount: number;
}

export interface TierCosts {
  items: CostItem[];
  total: number;
  pillLabel: string;
}

export type CostData = Record<"budget" | "mid-range" | "comfort", TierCosts>;

export interface TrekInfoData {
  title: string;
  description: string;
  exploreHref: string;
  tier: "budget" | "mid-range" | "comfort";
}
export interface CostEstimatorProps {
  costData: CostData;
}
export interface TrekInfoProps {
  trek: TrekInfoData;
}
export interface CostEstimatorProps {
  costData: CostData;
}
export interface CostBreakdownCardProps {
  costs: TierCosts;
  tier: "budget" | "mid-range" | "comfort" | string;
}
export interface Collaborator {
  name: string;
  logoSrc: string;
  href: string;
  width: number;
  height: number;
}
export type SocialPlatform = "facebook" | "instagram" | "youtube";

export interface SocialLink {
  platform: SocialPlatform;
  href: string;
  ariaLabel: string;
}
