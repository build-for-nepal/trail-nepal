import { create } from 'zustand';

/** A way of signing in to a Trails Nepal account. */
export type LoginMethod = 'google' | 'password';

export type AuthUser = {
  name: string | null;
  email: string | null;
  image: string | null;
  /** The method used for this session. */
  signedInWith: LoginMethod;
  /** Every method connected to the account. One account, one or both. */
  methods: LoginMethod[];
};

type AuthState = {
  user: AuthUser | null;
  /** True once a saved session has been looked for, so pages can wait for it. */
  restored: boolean;
  setUser: (user: AuthUser | null) => void;
  setRestored: () => void;
  clearUser: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  restored: false,
  setUser: (user) => set({ user }),
  setRestored: () => set({ restored: true }),
  clearUser: () => set({ user: null }),
}));
