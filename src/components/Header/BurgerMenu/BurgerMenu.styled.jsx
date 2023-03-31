import { styled } from '@mui/material/styles';

export const StyledContainer = styled('div')(({ theme }) => ({
  backgroundColor: 'rgba(253, 247, 242, 1)',
  position: 'fixed',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  top: 0,
  left: 0,
  zIndex: 1000,
  padding: '0 20px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '100%',
    padding: '0',
  },
}));

export const StyledHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 280,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: 46,
  paddingTop: 26,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: 768,
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 88,
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },
}));

export const StyledContainerUserMenu = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const StyledUserMenu = styled('div')(({ theme }) => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: 60,
}));
