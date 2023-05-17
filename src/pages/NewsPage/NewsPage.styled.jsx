import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

export const NewsContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.customColors.appBackground,
  textAlign: 'center',
  width: '280px',
  paddingBottom: '100px',
  padding: '0',
  marginLeft: 'auto',
  marginRight: 'auto',

  [theme.breakpoints.up(theme.breakpoints.values.mobileAdaptive)]: {
    maxWidth: '480px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    minWidth: '768px',
    maxWidth: '768px',
    paddingLeft: '32px',
    paddingRight: '32px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    minWidth: '1200px',
    maxWidth: '1200px',
    paddingBottom: '40px',
  },
}));

export const Section = styled('section')(({ theme }) => ({
  backgroundColor: theme.customColors.appBackground,
  minHeight: '100vh',
  textAlign: 'center',
  padding: '0 20px',
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
