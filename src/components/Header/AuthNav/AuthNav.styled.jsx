import { styled } from '@mui/material/styles';
import { Link, NavLink } from 'react-router-dom';
import { RiAccountCircleFill } from 'react-icons/ri';

export const StyledContainer = styled('div')(({ theme }) => ({
  marginBottom: 60,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '100%',
    marginRight: 25,
    marginBottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const StyledList = styled('ul')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  paddingLeft: 0,
  width: 251,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const StyledItem = styled('li')(({ theme }) => ({
  listStyle: 'none',
  height: 35,
  width: '100%',
  border: '2px solid rgba(245, 146, 86, 1)',
  borderRadius: 40,
  backgroundColor: 'rgba(255, 255, 255, 1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:not(:last-child)': {
    marginRight: 12,
  },

  '&.active': {
    color: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(245, 146, 86, 1)',
  },

  '&:hover': {
    color: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(245, 146, 86, 1)',
  },

  '&:focus': {
    color: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(245, 146, 86, 1)',
  },
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    height: 44,
  },
}));

export const StyledButton = styled(NavLink)(({ theme }) => ({
  fontSize: theme.customFontSizes[1],
  fontWeight: theme.customFontWeight.normalM,
  lineHeight: 1.36,

  color: 'rgba(17, 17, 17, 1)',
  padding: ' 8px 28px',
  textDecoration: 'none',
  maxWidth: 144,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: 20,
    maxWidth: 181,
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    padding: '10px 28px',
  },
}));

export const StyledContainerNew = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 68,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    marginBottom: 0,
    marginRight: 20,
  },
}));

export const StyledIconContainer = styled('span')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.customColors.cardsBackground,
}));

export const StyledIcon = styled(RiAccountCircleFill)(({ theme }) => ({
  color: 'inherit',
  backgroundColor: 'inherit',
  marginRight: 14,
  width: 17,
  height: 17,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: 24,
    height: 24,
  },
}));

export const StyledButtonNew = styled(Link)(({ theme }) => ({
  display: 'flex',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1.36,
  color: 'rgba(17, 17, 17, 1)',
  padding: '8px 28px',
  border: '1 solid rgba(245, 146, 86, 1)',
  borderRadius: 40,
  backgroundColor: 'rgba(245, 146, 86, 1)',
  textDecoration: 'none',
  maxWidth: 144,

  '&:hover': { backgroundColor: theme.customColors.accent },

  '&:focus': {
    backgroundColor: theme.customColors.accent,
  },
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: 20,
    maxWidth: 181,
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    padding: '10px 28px',
  },
}));
