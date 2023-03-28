import { styled } from '@mui/material/styles';

export const UserPageContainer = styled('section')(({ theme }) => ({
  position: 'relative',
  paddingTop: '60px',
  marginLeft: 'auto',
  marginRight: 'auto',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    display: 'flex',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    display: 'flex',
    justifyContent: 'center',
    // marginTop: '58px',
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
  // width: '280px',
  // marginRight: 'auto',
  // marginLeft: 'auto',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    // width: '100%',
    // paddingRight: '40px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    // width: '411px',
    // height: '541px',
    paddingRight: '0',
  },
}));
