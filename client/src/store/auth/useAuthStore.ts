import { create } from 'zustand';

export interface AuthState {
  user: Object | null;
  error: string;
  isLoading: boolean;
}

type AuthActions = {
  setUser: (payload: Object | null) => void;
  setError: (payload: string) => void;
  setIsLoading: (payload: boolean) => void;
};

export const useAuthStore = create<AuthState & AuthActions>()((set) => ({
  user: null,
  error: '',
  isLoading: false,
  setUser: (payload) => set((state) => ({ user: payload })),
  setError: (payload) => set((state) => ({ error: payload })),
  setIsLoading: (payload) => set((state) => ({ isLoading: payload })),
}));
