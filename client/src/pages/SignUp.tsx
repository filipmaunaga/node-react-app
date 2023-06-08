import React, { useState } from 'react';
import { IUserCredentials } from './models/UserCredentialsModel';
import { Typography } from '@mui/material';
import {
  StyledForm,
  StyledFormContainer,
  StyledFormTitle,
  StyledPostContentInput,
  StyledPostTitleInput,
  StyledSubmitButton,
} from './styled/Form';
import useSignUp from '../hooks/useSignUp';
import { useAuthStore } from '../store/auth/useAuthStore';

const SignUp = (): JSX.Element => {
  const [userCredentials, setUserCredentials] = useState<IUserCredentials>({
    email: '',
    password: '',
  });
  const [signUpUserMutation] = useSignUp();
  const user = useAuthStore((state) => state.user);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signUpUserMutation.mutate(userCredentials);
  };

  console.log('user', user);

  return (
    <StyledFormContainer>
      <StyledFormTitle>
        <Typography variant="h6" component="h2" gutterBottom>
          Sign Up
        </Typography>
      </StyledFormTitle>
      <StyledForm onSubmit={handleSubmit}>
        <StyledPostTitleInput
          label="Email"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            setUserCredentials({ ...userCredentials, email: e.target.value });
          }}
          fullWidth
          required
          value={userCredentials.email}
        />

        <StyledPostContentInput
          label="Password"
          type="password"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            setUserCredentials({ ...userCredentials, password: e.target.value });
          }}
          fullWidth
          required
          value={userCredentials.password}
        />
        <StyledSubmitButton
          variant="contained"
          type="submit"
          disabled={signUpUserMutation.isLoading}
        >
          Sign Up
        </StyledSubmitButton>
        {signUpUserMutation.isError && (
          <p style={{ color: 'red' }}>{(signUpUserMutation.error as any).response.data.error}</p>
        )}
      </StyledForm>
    </StyledFormContainer>
  );
};

export default SignUp;
