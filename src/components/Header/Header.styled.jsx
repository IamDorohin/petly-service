import { styled } from '@mui/material/styles';

export const StyledHeader = styled('header')(({ theme }) => ({
  backgroundColor: theme.customColors.appBackground,
}));

export const MainContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 320,
  margin: '0 auto',
  padding: '26px 20px 60px 20px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: 768,
    padding: '26px 32px 60px 32px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: 1280,
    padding: '26px 16px 60px 16px',
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
