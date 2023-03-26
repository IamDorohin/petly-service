import { styled } from '@mui/material/styles';

export const ContainerAddBtn = styled('div')(({ theme }) => ({
  position: 'relative',
  margin: '0',
  padding: '0',
  color: theme.customColors.homeHeroTitleFont,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    position: 'static',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '95px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    marginLeft: '317px',
  },
}));

export const TitleAddBtn = styled('p')(({ theme }) => ({
  zIndex: '101',
  position: 'fixed',
  bottom: '105px',
  right: '37px',

  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalM,
  fontSize: theme.customFontSizes[0],
  lineHeight: theme.customLineHeight[1],
  color: theme.customColors.accentFont,

  margin: 0,
  display: 'inline-block',
  paddingTop: '12px',
  paddingRight: '0',
  paddingBottom: '12px',
  paddingLeft: '0',
  fontStyle: 'normal',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    zIndex: '1',
    position: 'static',
    color: theme.customColors.primaryFont,
    fontSize: theme.customFontSizes[4],
    lineHeight: theme.customLineHeight[8],
  },
}));

export const AddButton = styled('button')(({ theme }) => ({
  zIndex: '100',
  position: 'fixed',
  bottom: '100px',
  right: '20px',
  paddingTop: '15px',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.customColors.accent,
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  border: 'none',
  borderColor: 'transparent',
  marginLeft: '12px',
  cursor: 'pointer',

  '&:hover': {
    transform: 'Scale(1.2)',
    transition: 'transform 250ms ease-in-out',
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    position: 'static',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    // right: '20px',
    // bottom: '100px',
    // zIndex: '1',
    padding: '0',
    width: '44px',
    height: '44px',
    transition: 'all 250ms ease 0s',
  },
}));

export const AddButtonThumb = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.customColors.accent,
  width: '21px',
  height: '21px',
  borderRadius: '50%',
  border: 'none',
  color: theme.customColors.cardsBackground,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    position: 'static',
    alignItems: 'center',

    width: '16px',
    height: '16px',
  },

  '&:hover': {
    transition: 'transform 250ms linear ',
    transform: 'scale(1.2)',
  },
}));
