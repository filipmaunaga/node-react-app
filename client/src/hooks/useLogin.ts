import { useMutation } from 'react-query';
import { loginUser } from '../services/AuthServices';
import { useAuthStore } from '../store/auth/useAuthStore';

const useLogin = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const loginUserMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
    },
  });
  return [loginUserMutation] as const;
};

export default useLogin;
