import { styled } from '@mui/material/styles';

export const Ul = styled('ul')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '0',
  flexWrap: 'wrap',
  marginBottom: '-32px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    marginRight: '-32px',
  },
}));
