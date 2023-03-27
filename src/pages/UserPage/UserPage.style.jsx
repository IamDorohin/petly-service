import { styled } from '@mui/material/styles';

export const UserPageContainer = styled('section')(({ theme }) => ({
  position: 'relative',

  // padding: '0 20px',
  // margin: '0 auto',

  width: '100%',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '768px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: '1280px',
    display: 'flex',
    marginTop: '58px',
    marginBottom: '40px',
  },
}));

export const UserWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '280px',
  marginRight: 'auto',
  marginLeft: 'auto',
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '736px',
  },
}));
