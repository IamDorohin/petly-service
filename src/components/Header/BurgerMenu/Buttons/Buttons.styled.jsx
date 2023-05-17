import { styled } from '@mui/material/styles';

export const BurgerMenuButtonWrapper = styled('button')(({ theme }) => ({
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  width: 25,
  height: 25,
  cursor: 'pointer',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: 30,
    height: 30,
  },
}));
