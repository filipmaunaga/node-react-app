import React, {useState} from 'react';
import axios from "axios";
import { IUserCredentials } from './models/UserCredentialsModel';
import { Button, ClickAwayListener, Tooltip, Typography } from "@mui/material";
import {
  StyledForm,
  StyledFormContainer,
  StyledFormTitle,
  StyledPostContentInput,
  StyledPostTitleInput,
  StyledSubmitButton,
} from "./styled/Form";
import useSignUp from '../hooks/useSignUp';



 const SignUp = (): JSX.Element => {
const [userCredentials, setUserCredentials] = useState<IUserCredentials>({
    email: '',
    password: ''
});
const [signUpUserMutation] = useSignUp();


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUpUserMutation.mutate(userCredentials);
  };


  const [open, setOpen] = useState<boolean>(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };


  return (
    <StyledFormContainer>
    <StyledFormTitle>
      <Typography variant="h6" component="h2" gutterBottom>
        Sign Up
      </Typography>
    </StyledFormTitle>
    <StyledForm>
      <form onSubmit={handleSubmit}>
        <StyledPostTitleInput
          label="Email"
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => {
            setUserCredentials({ ...userCredentials, email: e.target.value });
          }}
          fullWidth
          required
          value={userCredentials.email}
        />

        <StyledPostContentInput
          label="Password"
          type='password'
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => {
            setUserCredentials({ ...userCredentials, password: e.target.value });
          }}
          fullWidth
          required
          value={userCredentials.password}
        />
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title="Post created successfully!"
            >
              <StyledSubmitButton variant="contained" type="submit">
                Sign Up
              </StyledSubmitButton>
            </Tooltip>
          </div>
        </ClickAwayListener>
      </form>
    </StyledForm>
  </StyledFormContainer>

  )
}

export default SignUp;

