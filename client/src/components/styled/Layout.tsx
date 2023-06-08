import React from 'react';
import { AppBar, Box } from '@mui/material';
import { styled } from '@mui/material';

export const StyledHeader = styled(AppBar)(({ theme }) => ({
  position: 'static',
  backgroundColor: theme.palette.warning.light,
  display: 'flex',
  flexDirection: 'row',
}));

export const StyledMenuItemContainer = styled(Box)(() => ({
  display: 'flex',
  padding: '0.5rem 0',
  margin: '0 0.5rem',
  cursor: 'pointer',
}));

export const StyledAuthContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
}));

export const StyledUserEmail = styled('span')(() => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'default',
}));

export const StyledLogoContainer = styled(Box)(() => ({
  '& > img': {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  display: 'flex',
  alignItems: 'center',
  width: '3rem',
  cursor: 'pointer',
}));
