import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export const ContainerAddBtnAlert = styled('div')(({ theme }) => ({
  position: 'relative',
  margin: '0',
  padding: '0',
  color: theme.customColors.homeHeroTitleFont,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    position: 'static',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '0',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    marginLeft: '317px',
  },
}));

export const TitleAddBtnAlert = styled('p')(({ theme }) => ({
  zIndex: '101',
  position: 'fixed',
  bottom: '105px',
  right: '37px',

  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalM,
  fontSize: theme.customFontSizes[0],
  lineHeight: theme.customLineHeight[1],
  color: theme.customColors.accentFont,

  margin: 0,
  display: 'inline-block',
  paddingTop: '12px',
  paddingRight: '0',
  paddingBottom: '12px',
  paddingLeft: '0',
  fontStyle: 'normal',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    zIndex: '1',
    position: 'static',
    color: theme.customColors.primaryFont,
    fontSize: theme.customFontSizes[4],
    lineHeight: theme.customLineHeight[8],
  },
}));

export const AddButtonAlertSnackbar = styled(Snackbar)(({ theme }) => ({
  width: '280px',

  '& > div': {
    backgroundColor: theme.customColors.errorNotif,
    border: '1px solid',
    paddingLeft: '30px',
    borderRadius: theme.customBorderRadius.secondary,
    borderColor: theme.customColors.accentFont,
  },
}));

export const AddButtonAlert = styled(Button)(({ theme }) => ({
  zIndex: '100',
  position: 'fixed',
  bottom: '100px',
  right: '20px',
  paddingBottom: '25px',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.customColors.accent,
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  border: 'none',
  borderColor: 'transparent',
  marginLeft: '12px',
  cursor: 'pointer',

  '&:hover': {
    transform: 'Scale(1.2)',
    transition: 'transform 250ms ease-in-out',
    backgroundColor: theme.customColors.accent,
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    position: 'static',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0',
    minWidth: '44px',
    width: '44px',
    height: '44px',
    transition: 'all 250ms ease 0s',
  },
}));

export const AddButtonThumbAlert = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.customColors.accent,
  width: '21px',
  height: '21px',
  borderRadius: '50%',
  border: 'none',
  color: theme.customColors.cardsBackground,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    position: 'static',
    alignItems: 'center',

    width: '16px',
    height: '16px',
  },

  '&:hover': {
    transition: 'transform 250ms linear ',
    transform: 'scale(1.2)',
  },
}));
