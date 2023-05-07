import { styled } from '@mui/material/styles';

export const PetsDataList = styled('ul')(({ theme }) => ({
  padding: '0',
  margin: '0',
  width: '100%',
}));

export const PetsDataItem = styled('li')(({ theme }) => ({
  listStyle: 'none',
  marginBottom: '20px',
  padding: '16px 20px 40px 20px',
  // width: '280px',
  width: '100%',
  height: '540px',

  boxShadow: theme.customShadow.addButton,
  borderRadius: theme.customBorderRadius.primary,
  backgroundColor: theme.customColors.cardsBackground,

  '&:hover': {
    transform: 'scale(1.05)',
    transition: 'transform 250ms ease-in-out',
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    // width: '704px',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    padding: '20px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    marginBottom: '22px',
    // width: '821px',
  },
}));

export const PetsDataImage = styled('img')(({ theme }) => ({
  width: '240px',
  height: '240px',
  marginBottom: '20px',
  borderRadius: theme.customBorderRadius.primary,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    maxWidth: '160px',
    height: '160px',
    marginBottom: '0',
  },
}));

export const PetsDataInfoWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    marginLeft: '32px',
    width: '471px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: '100%',
  },
}));

export const PetsDataInfoIcon = styled('button')(({ theme }) => ({
  position: 'absolute',
  top: '0',
  right: '0',
  padding: '0',
  width: '20px',
  height: '20px',
  backgroundColor: 'transparent',
  color: theme.customColors.translucentBlack,
  border: 'none',

  '&:hover': {
    color: theme.customColors.accent,
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '44px',
    height: '44px',
    padding: '10px',
    background: theme.customColors.appBackground,
    borderRadius: theme.customBorderRadius.round,
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {},
}));

export const PetsDataInfoTitle = styled('span')(({ theme }) => ({
  margin: '0',
  marginRight: '5px',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.bold,
  fontSize: theme.customFontSizes[1],
  lineHeight: theme.customLineHeight[4],
  letterSpacing: theme.customLetterSpacing.m,
}));

export const PetsDataInfoContent = styled('p')(({ theme }) => ({
  margin: '0',
  marginBottom: '12px',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalS,
  fontSize: theme.customFontSizes[1],
  lineHeight: theme.customLineHeight[3],
  letterSpacing: theme.customLetterSpacing.m,
  color: theme.customColors.homeHeroTitleFont,
  transition: 'opacity 250ms linear',
  wordWrap: 'break-word',
}));
