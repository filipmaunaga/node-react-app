import { create } from 'zustand';

export interface IUser extends Object {
  email: string;
  message: string;
  token: string;
}

export interface AuthState {
  user: IUser | null;
}

type AuthActions = {
  setUser: (payload: IUser | null) => void;
};

export const useAuthStore = create<AuthState & AuthActions>()((set) => ({
  user: null,
  error: '',
  isLoading: false,
  setUser: (payload) => set((state) => ({ user: payload })),
}));
