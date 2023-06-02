import axios from 'axios';
import { useMutation } from 'react-query';
import { signUpUser } from '../services/AuthServices';
import { useAuthStore } from '../store/auth/useAuthStore';

const useLogout = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const logoutUser = (): void => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return [logoutUser] as const;
};

export default useLogout;
