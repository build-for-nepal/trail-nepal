import type { GearChecklist, GearItem, HikeDetail, TrekDetail } from './types';

// The web's rules, from frontend/src/components/details/GearCheckList.tsx. Type imports
// only, so this file runs on its own.

export type PackableDetail = TrekDetail | HikeDetail;
export type PackableType = PackableDetail['type'];

export type PackingTab = keyof GearChecklist;

/** Labels and descriptions as the web writes them (static/constants.ts). */
export const PACKING_TABS: readonly {
  value: PackingTab;
  label: string;
  description: string;
}[] = [
  {
    value: 'essential',
    label: 'Essential',
    description:
      'Critical items required for safety, comfort, and completing your trek.',
  },
  {
    value: 'goodToHave',
    label: 'Good to have',
    description:
      'Additional gear to enhance comfort, convenience, and overall experience.',
  },
];

/** By position, as the web does. Stable because the lists are static. */
export function gearItemId(tab: PackingTab, index: number): string {
  return `${tab}-${index}`;
}

/** Only what the user changed: an untouched item is unticked at its listed quantity. */
export type PackingState = {
  readonly checked: Readonly<Record<string, true>>;
  readonly quantities: Readonly<Record<string, number>>;
};

export const EMPTY_PACKING: PackingState = { checked: {}, quantities: {} };

export function toggled(state: PackingState, itemId: string): PackingState {
  const { [itemId]: wasChecked, ...rest } = state.checked;
  return {
    ...state,
    checked: wasChecked ? rest : { ...rest, [itemId]: true },
  };
}

/** Never below one, as on the web. */
export function withQuantity(
  state: PackingState,
  itemId: string,
  quantity: number,
): PackingState {
  return {
    ...state,
    quantities: {
      ...state.quantities,
      [itemId]: Math.max(1, Math.round(quantity)),
    },
  };
}

/** Undefined for an item without a stepper. */
export function quantityOf(
  state: PackingState,
  itemId: string,
  item: GearItem,
): number | undefined {
  if (item.quantity === undefined) return undefined;
  return state.quantities[itemId] ?? item.quantity;
}

export function rowGrams(item: GearItem, quantity: number | undefined): number {
  return item.grams * (quantity ?? 1);
}

export function packedCount(
  gear: GearChecklist,
  tab: PackingTab,
  state: PackingState,
): number {
  return gear[tab].filter((_, index) => state.checked[gearItemId(tab, index)])
    .length;
}

export type PackingTotals = {
  packed: number;
  total: number;
  /** Ticked items only, each times its quantity. */
  grams: number;
};

/** Across both tabs, as the web counts them. */
export function packingTotals(
  gear: GearChecklist,
  state: PackingState,
): PackingTotals {
  let packed = 0;
  let total = 0;
  let grams = 0;

  PACKING_TABS.forEach(({ value: tab }) => {
    gear[tab].forEach((item, index) => {
      const itemId = gearItemId(tab, index);
      total += 1;
      if (state.checked[itemId]) {
        packed += 1;
        grams += rowGrams(item, quantityOf(state, itemId, item));
      }
    });
  });

  return { packed, total, grams };
}

export type LoadBand = 'empty' | 'light' | 'optimal' | 'heavy' | 'over';

/** Upper bounds in kg. A day hike carries less, so its bands sit lower. */
export const LOAD_THRESHOLDS: Record<
  PackableType,
  { light: number; optimal: number; heavy: number }
> = {
  // GearCheckList's defaults.
  trek: { light: 3, optimal: 7, heavy: 12 },
  // HikeDetailsContent's HIKE_LOAD_THRESHOLDS.
  hike: { light: 2, optimal: 4, heavy: 7 },
};

export function loadBand(grams: number, type: PackableType): LoadBand {
  const bounds = LOAD_THRESHOLDS[type];
  if (grams === 0) return 'empty';
  if (grams < bounds.light * 1000) return 'light';
  if (grams < bounds.optimal * 1000) return 'optimal';
  if (grams < bounds.heavy * 1000) return 'heavy';
  return 'over';
}

export const LOAD_BAND_LABEL: Record<LoadBand, string> = {
  empty: 'Empty',
  light: 'Light Load',
  optimal: 'Optimal Load',
  heavy: 'Heavy Load',
  over: 'Over Limit',
};

/** A row's weight: grams under a kilo, else kilos to two places, e.g. '140 g', '1.35 kg'. */
export function formatGrams(grams: number): string {
  if (grams < 1000) return `${grams}\u00A0g`;
  return `${Number((grams / 1000).toFixed(2))}\u00A0kg`;
}

/** The pack total to one place, as the web shows it, e.g. '4.2 kg'. */
export function formatKg(grams: number): string {
  return `${(grams / 1000).toFixed(1)}\u00A0kg`;
}
