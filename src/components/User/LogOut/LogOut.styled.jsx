import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';

const positionsElements = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const LogOutContainer = styled('div')(({ theme }) => ({
  // position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  // bottom: 21,
  // left: 32,
  width: 100,
  height: 20,
  cursor: 'pointer',
  marginTop: 10,

  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalM,
  fontSize: theme.customFontSizes[2],
  lineHeight: theme.customLineHeight[4],
  letterSpacing: theme.customLetterSpacing.m,

  color: theme.customColors.translucentBlack,

  '&:hover': {
    opacity: 0.5,
  },

  '&.entering': {
    animation: `${positionsElements} 1500ms ease`,
  },

  '&.entered': {
    animation: `${positionsElements} 1500ms ease`,
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    marginTop: 20,
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
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

export const LogOutIconTitle = styled('p')(({ theme }) => ({
  margin: '0',
  padding: '0',
}));
