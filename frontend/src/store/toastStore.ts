import { create } from 'zustand';

export type Toast = {
  id: number;
  title: string;
  description?: string;
  /** `error` swaps the success check for a warning icon. Defaults to success. */
  tone?: 'success' | 'error';
  /** Optional button, e.g. "Retry". The toast closes when it is pressed. */
  action?: { label: string; onClick: () => void };
};

type ToastState = {
  toast: Toast | null;
  showToast: (toast: Omit<Toast, 'id'>) => void;
  dismissToast: () => void;
};

let nextId = 0;

/** One toast at a time; a new one replaces the current one. */
export const useToastStore = create<ToastState>((set) => ({
  toast: null,
  showToast: (toast) => set({ toast: { ...toast, id: ++nextId } }),
  dismissToast: () => set({ toast: null }),
}));
