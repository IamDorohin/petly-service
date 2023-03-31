import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

export const FriendsPageContainer = styled('section')(({ theme }) => ({
  backgroundColor: theme.customColors.appBackground,
}));

export const Container = styled('div')(({ theme }) => ({
  paddingRight: '20px',
  paddingBottom: '60px',
  paddingLeft: '20px',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',

  [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
    width: '320px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '768px',
    paddingRight: '32px',
    paddingBottom: '100px',
    paddingLeft: '32px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: '1280px',
    paddingRight: '16px',
    paddingBottom: '200px',
    paddingLeft: '16px',
  },
}));

export const Title = styled('h2')(({ theme }) => ({
  margin: 0,
  marginBottom: '28px',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.bold,
  fontSize: theme.customFontSizes[5],
  lineHeight: theme.customLineHeight[9],
  letterSpacing: theme.customLetterSpacing.s,
  color: theme.customColors.primaryFont,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    marginBottom: '40px',
    fontSize: theme.customFontSizes[9],
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    marginBottom: '60px',
  },
}));

export const List = styled('ul')(({ theme }) => ({
  display: 'flex',
  listStyle: 'none',
  padding: 0,
  flexWrap: 'wrap',
  gap: '12px',
  marginBottom: '0',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    gap: '32px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    gap: '32px',
  },
}));

export const Item = styled('li')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'stretch',
  flexBasis: '100%',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    flexBasis: 'calc((100% - 32px) / 2)',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    flexBasis: 'calc((100% - 64px) / 3)',
  },
}));

export const StyledFriend = styled('div')(({ theme }) => ({
  padding: '12px 4px 12px 4px',
  width: '100%',
  maxWidth: '280px',
  height: '192px',

  overflow: 'hidden',
  fontFamily: theme.customFontFamily.primary,
  color: theme.customColors.primaryFont,
  backgroundColor: theme.customColors.cardsBackground,
  borderRadius: theme.customBorderRadius.secondary,
  boxShadow: theme.customShadow.addButton,
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    maxWidth: '336px',
    padding: ' 16px 4px',
    height: '246px',
    lineHeight: theme.customLineHeight[9],
    borderRadius: theme.customBorderRadius.primary,
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    maxWidth: '395px',
    height: '287px',
  },
}));

export const FriendsLink = styled(Link)(({ theme }) => ({
  fontSize: theme.customFontSizes[0],
  lineHeight: theme.customLineHeight[1],
  fontWeight: theme.customFontWeight.bold,
  textAlign: 'center',
  margin: 0,
  textDecoration: 'none',
  color: theme.customColors.accent,
  textDecorationLine: 'underline',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: theme.customFontSizes[2],
    lineHeight: theme.customLineHeight[4],
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    fontSize: theme.customFontSizes[4],
    lineHeight: theme.customLineHeight[8],
  },
}));

export const FriendsBox = styled('div')({
  display: 'flex',
  gap: '12px',
  height: '100 %',
  marginTop: '10px',
});

export const IMG = styled('img')(({ theme }) => ({
  width: '110px',
  height: '78px',
  filter: 'none',
  objectFit: 'contain',
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '120px',
    height: '85px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: '158px',
    height: '112px',
  },
}));

export const Adress = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  flexWrap: 'wrap',
  gap: '12px',
  flexDirection: 'row',

  textAlign: 'left',
  fontSize: theme.customFontSizes[0],
  lineHeight: theme.customLineHeight[1],

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: theme.customFontSizes[1],
    lineHeight: theme.customLineHeight[3],
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    fontSize: theme.customFontSizes[2],
    lineHeight: theme.customLineHeight[4],
  },
}));

export const ItemAdress = styled('li')(({ theme }) => ({
  marginBottom: '4px',
  transition: 'all 100ms linear',

  '&:last-child': {
    marginBottom: '0',
  },
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    marginBottom: '8px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    marginBottom: '12px',
  },
}));

export const P = styled('p')({
  margin: 0,
});

export const Button = styled('button')(({ theme }) => ({
  fontFamily: theme.customFontFamily.primary,
  fontSize: theme.customFontSizes[0],
  lineHeight: theme.customLineHeight[1],
  fontWeight: theme.customFontWeight.normalM,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  transition: 'all 100ms linear',
  padding: '0',

  '&:hover': {
    color: theme.customColors.accent,
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: theme.customFontSizes[1],
    lineHeight: theme.customLineHeight[3],
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    fontSize: theme.customFontSizes[2],
    lineHeight: theme.customLineHeight[4],
  },
}));

export const TextLink = styled(Link)(({ theme }) => ({
  transition: 'all 100ms linear',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalM,
  fontSize: theme.customFontSizes[0],
  lineHeight: theme.customLineHeight[1],
  textDecoration: 'none',
  color: theme.customColors.primaryFont,
  textDecorationLine: 'underline',
  '&:hover': {
    color: theme.customColors.accent,
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: theme.customFontSizes[1],
    lineHeight: theme.customLineHeight[3],
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    fontSize: theme.customFontSizes[2],
    lineHeight: theme.customLineHeight[4],
  },
}));

export const Text = styled(Link)(({ theme }) => ({
  transition: 'all 100ms linear',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalM,
  fontSize: theme.customFontSizes[0],
  lineHeight: theme.customLineHeight[1],
  textDecoration: 'none',
  color: theme.customColors.primaryFont,
  '&:hover': {
    color: theme.customColors.accent,
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    fontSize: theme.customFontSizes[1],
    lineHeight: theme.customLineHeight[3],
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    fontSize: theme.customFontSizes[2],
    lineHeight: theme.customLineHeight[4],
  },
}));

export const FriendsModal = styled('ul')(({ theme }) => ({
  zIndex: 10,
  boxShadow: theme.customShadow.popUp,
  padding: '12px',
  position: 'absolute',
  width: '120px',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalM,
  fontSize: theme.customFontSizes[0],
  lineHeight: theme.customLineHeight[1],
  color: theme.customColors.primaryFont,
  borderRadius: '8px',
  backgroundColor: theme.customColors.accentFont,
  border: '1px solid #F59256',
}));

export const Day = styled('li')(({ theme }) => ({
  display: 'flex',
  listStyle: 'none',
  marginBottom: '4px',
  justifyContent: 'space-between',
}));
