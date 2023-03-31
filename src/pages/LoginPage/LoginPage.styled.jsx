import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export const LoginSection = styled('section')(({ theme, bgImage }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '512px',
  height: 'calc(100vh - 56px)',
  position: 'relative',

  backgroundImage: `url(${bgImage.loginBgMobile})`,
  backgroundColor: theme.customColors.appBackground,
  backgroundPosition: 'bottom',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    backgroundImage: `url(${bgImage.loginBgTablet})`,
    height: 'calc(100vh - 83px)',
    minHeight: '942px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    backgroundImage: `url(${bgImage.loginBgLaptop})`,
    height: 'calc(100vh - 80px)',
    minHeight: '688px',
  },
}));

export const LoginContainer = styled(Container)(({ theme }) => ({
  backgroundColor: 'transparent',
  width: '100%',
  padding: '0 20px',
  marginTop: '-56px',
  paddingBottom: '40px',

  [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
    width: '320px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '608px',
    padding: '60px 80px',
    marginTop: '-83px',

    borderRadius: theme.customBorderRadius.primary,
    backgroundColor: theme.customColors.cardsBackground,
    boxShadow: theme.customShadow.primary,
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: '618px',
    marginTop: '-80px',
  },
}));

export const TitleH1 = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  paddingBottom: '40px',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.bold,
  fontSize: theme.customFontSizes[5],
  lineHeight: theme.customLineHeight[9],
  letterSpacing: theme.customLetterSpacing.m,
  color: theme.customColors.primaryFont,
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: theme.customFontSizes[8],
    lineHeight: theme.customLineHeight[14],
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    lineHeight: theme.customLineHeight[14],
  },
}));

export const HelperContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '40px',

  [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {},

  [theme.breakpoints.up(theme.breakpoints.values.mobileAdaptive)]: {},
}));

export const TitleH5 = styled(Typography)(({ theme }) => ({
  fontFamily: theme.customFontFamily.translucentBlack,
  fontWeight: theme.customFontWeight.normalS,
  fontSize: theme.customFontSizes[0],
  lineHeight: theme.customLineHeight[1],
  letterSpacing: theme.customLetterSpacing.m,
  color: theme.customColors.primaryFont,
  inlineSize: 'max-content',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {},
}));

export const LoginLink = styled(Link)(({ theme }) => ({
  color: theme.customColors.loginLink,
}));
