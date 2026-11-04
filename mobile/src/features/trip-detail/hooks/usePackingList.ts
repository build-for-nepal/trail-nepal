import { useSyncExternalStore } from 'react';

import { EMPTY_PACKING, toggled, withQuantity } from '../packing';
import type { PackableType, PackingState } from '../packing';

// In memory for as long as the app runs, and gone on restart. Saving to storage later only
// changes this file.
const states = new Map<string, PackingState>();
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function update(key: string, change: (state: PackingState) => PackingState) {
  states.set(key, change(states.get(key) ?? EMPTY_PACKING));
  listeners.forEach((listener) => listener());
}

/** One trip's ticks and quantities, shared by its detail card and its packing screen. */
export function usePackingList(type: PackableType, id: string) {
  const key = `${type}:${id}`;
  const read = () => states.get(key) ?? EMPTY_PACKING;
  // Also the server snapshot: the static web export renders screens in Node.
  const state = useSyncExternalStore(subscribe, read, read);

  return {
    state,
    toggle: (itemId: string) => update(key, (s) => toggled(s, itemId)),
    setQuantity: (itemId: string, quantity: number) =>
      update(key, (s) => withQuantity(s, itemId, quantity)),
  };
}
