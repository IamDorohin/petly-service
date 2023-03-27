import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const Section = styled('section')(({ theme }) => ({
  backgroundColor: theme.customColors.appBackground,
  textAlign: 'center',
  height: 'calc(100 % - 56px)',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    height: 'calc(100 % - 84px)',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    height: 'calc(100 % - 80px)',
  },
}));

export const Box = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '300px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '120px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.customBorderRadius.secondary,
  backgroundColor: theme.customColors.cardsBackground,
  boxShadow: theme.customShadow.popUp,
  background: 'linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    borderRadius: theme.customBorderRadius.primary,
    width: '600px',
    marginTop: '60px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: '800px',
    marginTop: '80px',
  },
}));

export const Text = styled('p')(({ theme }) => ({
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.bold,
  color: theme.customColors.primaryFont,
  margin: 0,
  fontSize: '100px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: '200px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    fontSize: '300px',
  },
}));

export const SecondText = styled('p')(({ theme }) => ({
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.bold,
  color: theme.customColors.primaryFont,
  margin: 0,
  fontSize: '100px',
  marginLeft: '-15px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: '200px',
    marginLeft: '-25px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    fontSize: '300px',
    marginLeft: '-40px',
  },
}));

export const Image = styled('img')(({ theme }) => ({
  height: '90px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    height: '180px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    height: '250px',
  },
}));

export const Description = styled('p')(({ theme }) => ({
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalS,
  color: theme.customColors.primaryFont,
  marginLeft: '15px',
  marginRight: '15px',

  [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
    fontSize: theme.customFontSizes[5],
    lineHeight: theme.customLineHeight[9],
    marginBottom: '28px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: theme.customFontSizes[6],
    lineHeight: theme.customLineHeight[10],
    marginBottom: '40px',
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.bold,
  color: theme.customColors.primaryFont,
  textDecoration: 'none',

  [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
    fontSize: theme.customFontSizes[5],
    lineHeight: theme.customLineHeight[9],
    marginBottom: '28px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: theme.customFontSizes[6],
    lineHeight: theme.customLineHeight[10],
    marginBottom: '40px',
  },

  '&:hover': {
    color: theme.customColors.accent,
  },
  '&:focus': {
    color: theme.customColors.accent,
  },
}));
