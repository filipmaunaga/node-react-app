import { Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/material';

export const StyledFormContainer = styled(Box)(() => ({
  display: 'flex',
  maxWidth: '30rem',
  padding: '3rem 2rem',
  margin: '2rem auto',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  borderRadius: '20px',
}));

export const StyledForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  margin: '0 auto',
}));

export const StyledPostTitleInput = styled(TextField)(() => ({
  margin: '0.5rem auto 1rem auto',
}));

export const StyledPostContentInput = styled(TextField)(() => ({
  margin: '0.5rem auto 1rem auto',
}));

export const StyledFormTitle = styled(Box)(() => ({
  display: 'flex',
  width: '30rem',
  alignItems: 'flex-start',
  justifyContent: 'center',
}));

export const StyledSubmitButton = styled(Button)(({ theme }) => ({
  fontFamily: theme.typography.h3.fontFamily,
  marginTop: '1rem',
  backgroundColor: '#0081C9',
}));
