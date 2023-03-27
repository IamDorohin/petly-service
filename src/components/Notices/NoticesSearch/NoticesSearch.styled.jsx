import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

export const SearchContainer = styled('div')(({ theme }) => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  position: 'relative',
  marginBottom: '40px',
  color: theme.customColors.searchBarPlaceholder,
  [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
    width: '100%',
    height: '40px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '608px',
    height: '44px',
    marginBottom: '60px',
  },
}));

export const Form = styled('form')(({ theme }) => ({
  position: 'relative',
  display: 'flex',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    maxWidth: '608px',
  },
}));

export const Input = styled('input')(({ theme }) => ({
  backgroundColor: theme.customColors.cardsBackground,
  fontFamily: theme.customFontFamily.searchBar,
  fontWeight: theme.customFontWeight.normalM,
  paddingLeft: '55px',
  paddingRight: '90px',
  color: theme.customColors.searchBarPlaceholder,
  letterSpacing: theme.customLetterSpacing.m,
  borderRadius: theme.customBorderRadius.secondary,
  boxShadow: theme.customShadow.secondary,
  border: '1px solid transparent',
  width: '100%',
  height: '40px',
  outline: 'none',
  cursor: 'pointer',
  [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
    fontSize: theme.customFontSizes[2],
    lineHeight: theme.customLineHeight[4],
  },
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '608px',
    height: '44px',
    fontSize: theme.customFontSizes[4],
    lineHeight: theme.customLineHeight[8],
  },

  '&:hover': {
    border: '1px solid rgba(245, 146, 86, 0.5)',
  },
  '&:focus': {
    border: '1px solid rgba(245, 146, 86, 0.5)',
  },
  '&::placeholder': {
    color: theme.customColors.searchBarPlaceholder,
  },
}));

export const FindButton = styled(IconButton)(({ theme }) => ({
  width: '20px',
  height: '20px',
  color: theme.customColors.primaryFont,
  position: 'absolute',
  top: 10,
  right: 15,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '24px',
    height: '24px',
  },
}));

export const DeleteButton = styled(IconButton)(({ theme }) => ({
  width: '20px',
  height: '20px',
  color: theme.customColors.primaryFont,
  position: 'absolute',
  top: 10,
  left: 15,
  [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {},
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '24px',
    height: '24px',
  },
}));
