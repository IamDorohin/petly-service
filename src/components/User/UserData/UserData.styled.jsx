import { styled } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { keyframes } from '@mui/system';

const open = keyframes`
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
`;

const close = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.5);
  }
`;

export const UserDataContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: '0 20px',

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    padding: '0',
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
  display: 'flex',
  flexWrap: 'wrap',

  borderRadius: theme.customBorderRadius.primary,
  boxShadow: theme.customShadow.primary,

  '&.entering': {
    animation: `${open} 500ms ease`,
  },

  '&.entered': {
    animation: `${open} 500ms ease`,
  },

  '&.exiting': {
    animation: `${close} 500ms ease`,
  },

  '&.exited': {
    animation: `${close} 500ms ease`,
  },

  '&:hover': {
    transform: 'scale(1.05)',
    transition: 'transform 250ms ease-in-out',
  },

  [theme.breakpoints.between(
    theme.breakpoints.values.tablet,
    theme.breakpoints.values.desktop
  )]: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
    width: '704px',
    height: '311px',
    paddingLeft: '20px',
    paddingRight: '40px',
    borderRadius: theme.customBorderRadius.primary,
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: '411px',
    height: '541px',

    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    flexWrap: 'nowrap',

    padding: '20px 16px 64px 16px',

    borderRadius: theme.customBorderRadius.primary,
  },
}));

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  width: '100%',
}));

export const UserDataPhotoWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingRight: '24px',
  paddingLeft: '24px',
  paddingTop: '20px',
  width: '100%',
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

export const UserDataPhotoDefault = styled(AccountCircleIcon)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  width: '233px',
  height: '233px',
  color: theme.customColors.accent,
  opacity: 0.9,
}));

export const UserDataEditPhotoButton = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: '235px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0',
  paddingRight: 12,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  opacity: '1',
  width: 105,

  '&:hover': {
    opacity: 0.5,
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    bottom: '25px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    bottom: '280px',
  },
}));

export const UserDataEditIcon = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '5px',
  width: '20px',
  height: '20px',
  color: theme.customColors.accent,
}));

export const UserDataEditText = styled('p')(({ theme }) => ({
  margin: '0',
  padding: '0',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalS,
  fontSize: theme.customFontSizes[0],
  lineHeight: theme.customLineHeight[4],
  letterSpacing: theme.customLetterSpacing.m,
}));
