import { styled } from '@mui/material/styles';

export const UserDataContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  marginTop: '60px',
  padding: '0 20px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {},
}));

export const UserDataContent = styled('div')(({ theme }) => ({
  backgroundColor: theme.customColors.cardsBackground,
  width: '280px',
  height: '537px',

  borderRadius: theme.customBorderRadius.secondary,
  boxShadow: theme.customShadow.primary,

  [theme.breakpoints.between(
    theme.breakpoints.values.tablet,
    theme.breakpoints.values.desktop
  )]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    width: '736px',
    height: '311px',
    marginLeft: '-32px',
    paddingLeft: '20px',
    paddingRight: '40px',
    // padding: '0 40px 0 32px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: '288px',
    marginRight: '32px',
  },
}));

export const UserDataPhotoWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingRight: '24px',
  paddingLeft: '24px',
  paddingTop: '20px',
  height: '285px',
  marginBottom: '35px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '288px',
    padding: '0',
  },
}));

export const UserDataPhoto = styled('img')(({ theme }) => ({
  width: '233px',
  height: '233px',
  borderRadius: theme.customBorderRadius.round,
  backgroundColor: theme.customColors.primaryFont,

  filter: 'drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11))',
}));

export const UserDataEditContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  bottom: '0',
  right: '12px',

  cursor: 'pointer',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalS,
  fontSize: theme.customFontSizes[0],
  lineHeight: theme.customLineHeight[4],
  letterSpacing: theme.customLetterSpacing.m,

  '&:hover': {
    opacity: '0,5',
  },
}));

export const UserDataEditIcon = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '5px',
}));
