import type { StackSlot, CardOffset } from "../../types/homepage";

export const TRANSITION_DURATION_MS = 700;
export const GAP_REM = 2.75;

export const STACK_SLOTS = [
  { widthRem: 24, heightRem: 26, topCalc: "calc(50% - 13rem)", zIndex: 30 },
  { widthRem: 16, heightRem: 20, topCalc: "calc(50% - 7rem)", zIndex: 20 },
  { widthRem: 12, heightRem: 16, topCalc: "calc(50% - 3rem)", zIndex: 10 },
] as const satisfies readonly StackSlot[];

export const SHADOW_MAP: Record<CardOffset, string> = {
  0: "shadow-[0_32px_64px_rgba(0,0,0,0.5)]",
  1: "shadow-[0_20px_40px_rgba(0,0,0,0.4)]",
  2: "shadow-[0_12px_28px_rgba(0,0,0,0.35)]",
};
