import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';

export const Card = styled('li')(({ theme }) => ({
  position: 'relative',
  // margin: '0 auto',
  textAlign: 'start',
  flexBasis: '100%',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    flexBasis: 'calc((100% - 30px) / 2)',
    height: '300px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    flexBasis: 'calc((100% - 60px) / 3)',
    height: '270px',
  },
}));

export const Title = styled('h2')(({ theme }) => ({
  margin: 0,
  marginBottom: '16px',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.bold,
  fontSize: theme.customFontSizes[5],
  lineHeight: theme.customLineHeight[9],
  letterSpacing: theme.customLetterSpacing.s,
  color: theme.customColors.primaryFont,
}));

export const Text = styled('p')(({ theme }) => ({
  margin: 0,
  marginBottom: '20px',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalS,
  fontSize: theme.customFontSizes[2],
  lineHeight: theme.customLineHeight[4],
  color: theme.customColors.primaryFont,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    marginBottom: 0,
  },
}));

export const Box = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
}));

export const Date = styled('p')(({ theme }) => ({
  margin: 0,
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalS,
  fontSize: theme.customFontSizes[2],
  lineHeight: theme.customLineHeight[4],
  color: theme.customColors.translucentBlack,
}));

export const ReadMoreLink = styled(Link)(({ theme }) => ({
  margin: 0,
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalM,
  fontSize: theme.customFontSizes[2],
  lineHeight: theme.customLineHeight[4],
  color: theme.customColors.accent,
}));

export const Line = styled('div')(({ theme }) => ({
  marginBottom: '4px',
  width: '70%',
  height: '4px',
  background: 'linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)',
  borderRadius: theme.customBorderRadius.primary,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '280px',
    height: '8px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: '340px',
    height: '8px',
  },
}));
