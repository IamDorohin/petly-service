import { styled } from '@mui/material/styles';

export const StyledHeader = styled('header')(({ theme }) => ({
  paddingTop: 16,
  paddingBottom: 16,
  backgroundColor: theme.customColors.appBackground,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    paddingTop: 24,
    paddingBottom: 24,
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    paddingTop: 20,
    paddingBottom: 20,
  },
}));

export const MainContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 42,
  width: 320,
  margin: '0 auto',
  paddingLeft: 20,
  paddingRight: 20,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: 768,
    height: 48,
    paddingLeft: 32,
    paddingRight: 32,
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: 1280,
    paddingLeft: 16,
    paddingRight: 16,
  },
}));

export const Wrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    marginLeft: 246,
  },
}));
