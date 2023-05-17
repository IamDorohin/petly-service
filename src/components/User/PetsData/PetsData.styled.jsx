import { styled } from '@mui/material/styles';

export const PetsWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  marginTop: 47,
  marginRight: 'auto',
  marginLeft: 'auto',
  width: 280,
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: 704,
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    margin: 0,
    marginLeft: 110,
  },
}));
