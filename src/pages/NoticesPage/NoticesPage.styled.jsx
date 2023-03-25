import { styled } from '@mui/material/styles';

export const NoticesPageContainer = styled('section')(({ theme }) => ({
  backgroundColor: theme.customColors.appBackground,
}));

export const Container = styled('div')(({ theme }) => ({
  paddingTop: '42px',
  paddingRight: '20px',
  paddingBottom: '60px',
  paddingLeft: '20px',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',

  [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
    width: '320px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '768px',
    // paddingTop: '88px',
    paddingRight: '32px',
    paddingBottom: '100px',
    paddingLeft: '32px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: '1280px',
    paddingTop: '70px',
    paddingRight: '16px',
    paddingBottom: '200px',
    paddingLeft: '16px',
  },
}));

export const NoticesPageNavBox = styled('div')(({ theme }) => ({
  marginBottom: '30px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    display: 'flex',
    alignItems: 'flex-start',
    // justifyContent: 'space-between',
    marginBottom: '70px',
    width: '100%',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    alignItems: 'center',
    marginBottom: '60px',
  },
}));
