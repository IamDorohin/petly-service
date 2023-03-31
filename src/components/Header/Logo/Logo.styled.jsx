import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyledLogoContainer = styled('div')(({ theme }) => ({
  width: 82,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: 94,
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    marginRight: 80,
  },
}));

export const StyledLogo = styled(Link)(({ theme }) => ({
  color: 'rgba(17, 17, 17, 1)',
  fontFamily: theme.customFontFamily.logo,
  fontStyle: 'normal',
  fontWeight: theme.customFontWeight.bold,
  fontSize: theme.customFontSizes[6],
  letterSpacing: theme.customLetterSpacing.l,
  textDecoration: 'none',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: theme.customFontSizes[7],
  },
}));

export const StyledLogoT = styled('span')(({ theme }) => ({
  color: 'rgba(245, 146, 86, 1)',
}));
