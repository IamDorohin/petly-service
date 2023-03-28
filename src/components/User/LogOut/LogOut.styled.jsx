import { styled } from '@mui/material/styles';

export const LogOutContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'flex-start',
  bottom: '21px',
  right: '12px',
  width: '100px',

  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalM,
  fontSize: theme.customFontSizes[2],
  lineHeight: theme.customLineHeight[4],
  letterSpacing: theme.customLetterSpacing.m,

  color: theme.customColors.translucentBlack,

  opacity: '1',
  transirion: 'opacity 250ms ease-out',

  '&:hover': {
    opacity: '0.5',
  },
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    bottom: '24px',
    left: '30px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    bottom: '20px',
    left: '15px',
    alignItems: 'center',
  },
}));

export const LogOutIconWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: '8px',
  color: theme.customColors.accent,
  width: '18px',
  height: '18px',
}));
