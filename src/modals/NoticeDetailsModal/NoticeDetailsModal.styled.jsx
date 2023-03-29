import { styled } from '@mui/material/styles';

export const Madal = styled('div')(({ theme }) => ({
  width: '704px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {},

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {},
}));
