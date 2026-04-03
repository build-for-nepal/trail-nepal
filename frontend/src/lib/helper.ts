import { GAP_REM, STACK_SLOTS } from "../features/hero/constants";
import type { CardOffset } from "../types/homepage";

export interface ResolvedCardStyle {
  leftRem: number;
  top: string;
  widthRem: number;
  heightRem: number;
  zIndex: number;
  opacity: number;
  pointerEvents: "none" | "auto";
}

export const DERIVED_LEFT_REM: Readonly<number[]> = STACK_SLOTS.reduce<
  number[]
>((acc, slot, i) => {
  if (i === 0) return [0];
  const prev = acc[i - 1];
  const prevSlot = STACK_SLOTS[i - 1];
  return [...acc, prev + prevSlot.widthRem + GAP_REM];
}, []);

export const TOTAL_STACK_WIDTH_REM: number =
  DERIVED_LEFT_REM[DERIVED_LEFT_REM.length - 1]! +
  STACK_SLOTS[STACK_SLOTS.length - 1].widthRem +
  GAP_REM;

function isCardOffset(offset: number): offset is CardOffset {
  return offset === 0 || offset === 1 || offset === 2;
}

export function getCardStyle(offset: number): ResolvedCardStyle {
  if (!Number.isInteger(offset)) return hiddenRight();

  // The orchestrator explicitly passes -1 for the wrapping previous slide.
  if (offset < 0) return hiddenLeft();

  if (!isCardOffset(offset)) return hiddenRight();

  const slot = STACK_SLOTS[offset];
  return {
    leftRem: DERIVED_LEFT_REM[offset]!,
    top: slot.topCalc,
    widthRem: slot.widthRem,
    heightRem: slot.heightRem,
    zIndex: slot.zIndex,
    opacity: 1,
    pointerEvents: offset === 0 ? "none" : "auto",
  };
}

function hiddenLeft(): ResolvedCardStyle {
  const slot = STACK_SLOTS[0];
  return {
    leftRem: -(DERIVED_LEFT_REM[0]! + slot.widthRem),
    top: slot.topCalc,
    widthRem: slot.widthRem,
    heightRem: slot.heightRem,
    zIndex: 0,
    opacity: 0,
    pointerEvents: "none",
  };
}

function hiddenRight(): ResolvedCardStyle {
  const slot = STACK_SLOTS[STACK_SLOTS.length - 1];
  return {
    leftRem: TOTAL_STACK_WIDTH_REM,
    top: slot.topCalc,
    widthRem: slot.widthRem,
    heightRem: slot.heightRem,
    zIndex: 0,
    opacity: 0,
    pointerEvents: "none",
  };
}
