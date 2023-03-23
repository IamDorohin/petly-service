import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

// export const OverallContainer = styled('div')(({ theme }) => ({
//   position: 'relative',
// }));

export const CategoriesList = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  listStyle: 'none',
  margin: '0',
  padding: '0',
  marginRight: '-12px',
  marginBottom: '-16px',

  [theme.breakpoints.between(
    theme.breakpoints.values.tablet,
    theme.breakpoints.values.desktop
  )]: {
    width: '490px',
  },
}));

export const NavLinkStyled = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.customColors.primaryFont,
  fontFamily: theme.customFontFamily.primary,
  fontSize: theme.customFontSizes[1],
  letterSpacing: theme.customLetterSpacing.m,
  lineHeight: 1.35,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: theme.customFontSizes[4],
  },
}));

export const CategoriesItem = styled('li')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 28px',
  height: '35px',
  backgroundColor: theme.customColors.accentFont,
  border: theme.customBorders.primaryButtons,
  borderRadius: theme.customBorderRadius.primary,
  cursor: 'pointer',
  marginRight: '12px',
  marginBottom: '16px',

  '&:nth-of-type(3)': {
    marginRight: '0',
  },

  '&:hover': {
    backgroundColor: theme.customColors.accent,
    transition: 'backgroundColor 250ms ease-in-out',
    '& .forHover': {
      color: theme.customColors.cardsBackground,
    },
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    // padding: '10px 28px',
    height: '47px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    // padding: '10px 28px',
    height: '47px',
    '&:nth-of-type(3)': {
      marginRight: '12px',
    },

    '&:last-child': {
      marginRight: '0',
    },
  },
}));
