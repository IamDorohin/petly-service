import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

export const StyledNavContainer = styled('div')(({ theme }) => ({
  width: '100%',
}));

export const StyledNavList = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',

  paddingLeft: 0,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    flexDirection: 'row',
  },
}));

export const StyledNavItem = styled('li')(({ theme }) => ({
  listStyle: 'none',

  '&:not(:last-child)': {
    marginBottom: 40,
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    '&:not(:last-child)': {
      marginBottom: 40,
    },
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&:not(:last-child)': {
      marginBottom: 0,
      marginRight: 80,
    },
  },
}));

export const StyledLink = styled(NavLink)(({ theme }) => ({
  fontSize: theme.customFontSizes[7],
  lineHeight: 1.36,
  fontWeight: theme.customFontWeight.normalM,
  color: 'rgba(24, 28, 39, 1)',
  textDecoration: 'none',

  '&:hover': {
    color: 'rgba(245, 146, 86, 1)',
  },

  '&.active': {
    color: 'rgba(245, 146, 86, 1)',
    fontWeight: theme.customFontWeight.bold,
    textDecoration: 'underline',
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: 48,
    lineHeight: theme.customLineHeight[8],
    letterSpacing: theme.customLetterSpacing.m,
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    fontSize: theme.customFontSizes[4],

    '&.active': {
      textDecoration: 'underline',
    },
  },
}));
