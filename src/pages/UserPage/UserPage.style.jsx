import { styled } from '@mui/material/styles';

export const UserPageContainer = styled('section')(({ theme }) => ({
  position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    display: 'flex',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px',
  },
}));

export const UserPageWrapper = styled('div')(({ theme }) => ({
  width: '320px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingRight: '20px',
  paddingLeft: '20px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '768px',
    paddingRight: '32px',
    paddingLeft: '32px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    display: 'flex',
    justifyContent: 'center',
    width: '1280px',
    padding: '0 16px',
  },
}));

export const UserWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    paddingRight: '0',
  },
}));
