import { useMutation } from 'react-query';
import { signUpUser } from '../services/AuthServices';
import { useAuthStore } from '../store/auth/useAuthStore';

const useSignUp = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const signUpUserMutation = useMutation({
    mutationFn: signUpUser,
    onSuccess: (data) => {
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
    },
  });
  return [signUpUserMutation] as const;
};

export default useSignUp;
