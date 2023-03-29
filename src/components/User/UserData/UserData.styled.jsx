import { styled } from '@mui/material/styles';

export const UserDataContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: '0 20px',

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    padding: '0',
    // height: '541px',
  },
}));

export const UserInfoTitle = styled('h2')(({ theme }) => ({
  width: '280px',
  display: 'block',
  margin: '0 0 18px 0',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalM,
  fontSize: theme.customFontSizes[4],
  lineHeight: theme.customLineHeight[8],
  letterSpacing: theme.customLetterSpacing.m,
  color: theme.customColors.homeHeroTitleFont,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    margin: '0 0 40px 0',
    // paddingLeft: '32px',
    fontSize: theme.customFontSizes[6],
    lineHeight: theme.customLineHeight[10],
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    paddingLeft: '17px',
    margin: '0 0 24px 0',
  },
}));

export const UserDataContent = styled('div')(({ theme }) => ({
  backgroundColor: theme.customColors.cardsBackground,
  width: '280px',
  height: '537px',

  borderRadius: theme.customBorderRadius.primary,
  boxShadow: theme.customShadow.primary,

  [theme.breakpoints.between(
    theme.breakpoints.values.tablet,
    theme.breakpoints.values.desktop
  )]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    width: '704px',
    height: '311px',
    // marginLeft: '-32px',
    paddingLeft: '20px',
    paddingRight: '40px',
    borderRadius: theme.customBorderRadius.primary,
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: '411px',
    height: '541px',

    marginRight: '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 16px 64px 16px',

    borderRadius: theme.customBorderRadius.findPetCard,
  },
}));

export const UserDataPhotoWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingRight: '24px',
  paddingLeft: '24px',
  paddingTop: '20px',
  width: '233px',
  height: '285px',
  marginBottom: '35px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0',
  },
}));

export const UserDataPhoto = styled('img')(({ theme }) => ({
  width: '233px',
  height: '233px',
  borderRadius: theme.customBorderRadius.round,

  filter: 'drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11))',
}));

export const UserDataEditForm = styled('form')(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  bottom: '0',
  right: '-24px',
}));

export const UserDataEditPhotoSubmit = styled('button')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  backgroundColor: 'transparent',
  // width: '90px',
  // paddingLeft: '20px',
  // width: '1px',
  // height: '1px',
  // opacity: '0',
  // overflow: 'hidden',
  // position: 'absolute',
  // zIndex: '-1',

  cursor: 'pointer',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalS,
  fontSize: theme.customFontSizes[0],
  lineHeight: theme.customLineHeight[4],
  letterSpacing: theme.customLetterSpacing.m,

  '&:hover': {
    opacity: '0,5',
  },
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    right: '0',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    right: '-64px',
    bottom: '-8px',
  },
}));

export const UserDataEditIcon = styled('div')(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '5px',
  width: '20px',
  height: '20px',
  top: '2',
  left: '0',
}));
