import axios from 'axios';
import { useMutation } from 'react-query';
import { signUpUser } from '../services/AuthServices';

const useSignUp = () => {
  const signUpUserMutation = useMutation({
    mutationFn: signUpUser,
    onSuccess: (data, variables) => console.log('data', data, 'variables', variables),
  });
  return [signUpUserMutation] as const;
};

export default useSignUp;
