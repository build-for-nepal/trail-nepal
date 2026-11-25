import { create } from 'zustand';

export type AuthUser = {
  name: string | null;
  email: string | null;
  image: string | null;
};

/** `loading` until the first GET /api/me finishes. */
export type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';

type AuthState = {
  user: AuthUser | null;
  status: AuthStatus;
  setUser: (user: AuthUser | null) => void;
  clearUser: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  status: 'loading',
  setUser: (user) =>
    set({ user, status: user ? 'authenticated' : 'unauthenticated' }),
  clearUser: () => set({ user: null, status: 'unauthenticated' }),
}));
