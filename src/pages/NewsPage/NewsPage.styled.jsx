import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

export const NewsContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.customColors.appBackground,
  textAlign: 'center',

  paddingBottom: '100px',
  [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
    minWidth: '320px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '40px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.mobileAdaptive)]: {
    maxWidth: '480px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    minWidth: '768px',
    maxWidth: '768px',
    paddingLeft: '32px',
    paddingRight: '32px',
    paddingTop: '90px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    minWidth: '1200px',
    maxWidth: '1200px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingBottom: '200px',
    paddingTop: '60px',
  },
}));

export const Section = styled('section')(({ theme }) => ({
  backgroundColor: theme.customColors.appBackground,
  minHeight: '100vh',
  textAlign: 'center',
}));

export const Error = styled('h2')(({ theme }) => ({
  margin: 0,
  marginBottom: '16px',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.bold,
  fontSize: theme.customFontSizes[5],
  lineHeight: theme.customLineHeight[9],
  letterSpacing: theme.customLetterSpacing.s,
  color: theme.customColors.primaryFont,
}));
