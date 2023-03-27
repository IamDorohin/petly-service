import { styled } from '@mui/material/styles';

export const UserPageTitleContainer = styled('h2')(({ theme }) => ({
  width: '280px',
  display: 'block',
  margin: '0 0 18px 0',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalM,
  fontSize: theme.customFontSizes[4],
  lineHeight: theme.customLineHeight[8],
  letterSpacing: theme.customLetterSpacing.m,
  color: theme.customColors.homeHeroTitleFont,
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '736px',
    margin: '0 0 40px 0',
    fontSize: theme.customFontSizes[6],
    lineHeight: theme.customLineHeight[10],
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: '412px',
    margin: '0 0 24px 0',
  },
}));
