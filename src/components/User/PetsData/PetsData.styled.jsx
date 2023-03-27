import { styled } from '@mui/material/styles';

export const PetsWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  marginTop: '47px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '280px',
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '704px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    marginTop: '0',
    width: '100%',
  },
}));
