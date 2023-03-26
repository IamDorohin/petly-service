import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

export const SearchContainer = styled('div')(({ theme }) => ({
  // display: 'flex',
  // flexDirection: 'column',
  // alignItems: 'center',
  // paddingTop: '42px',
  // marginBottom: '40px',

  // [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
  //   paddingTop: '28px',
  // },

  // [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
  //   paddingTop: '88px',
  // },

  // [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
  //   paddingTop: '60px',
  // },
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

// export const Title = styled('h2')(({ theme }) => ({
//   fontFamily: theme.customFontFamily.primary,
//   fontWeight: theme.customFontWeight.bold,
//   fontSize: theme.customFontSizes[5],
//   lineHeight: 1.37,
//   color: theme.customColors.primaryFont,
//   marginBottom: '28px',

//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     fontSize: theme.customFontSizes[9],
//     marginBottom: '40px',
//   },

//   [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
//     paddingTop: '60px',
//   },
// }));

export const Form = styled('form')(({ theme }) => ({
  position: 'relative',
  display: 'flex',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    maxWidth: '608px',
  },
}));

export const Input = styled('input')(({ theme }) => ({
  // width: '280px',
  // height: '40px',
  // padding: '10px 12px',
  // borderRadius: '20px',
  // border: 'none',
  // backgroundColor: theme.customColors.cardsBackground,
  // boxShadow: theme.customShadow.secondary,
  // fontWeight: theme.customFontWeight.normalM,
  // fontSize: theme.customFontSizes[2],
  // lineHeight: '0.7',
  // letterSpacing: '4%',

  // '&::placeholder': {
  //   color: theme.customColors.searchBarPlaceholder,
  // },

  // '&:focus': {
  //   outline: 'none',
  // },

  // [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
  //   width: '608px',
  //   height: '44px',
  //   padding: '13px 14px',
  // },

  // [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {},
  backgroundColor: theme.customColors.cardsBackground,
  fontFamily: theme.customFontFamily.searchBar,
  fontWeight: theme.customFontWeight.normalM,
  paddingLeft: '15px',
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

// export const Button = styled('button')(({ theme }) => ({
//   position: 'absolute',
//   bottom: '4px',
//   right: '15px',
//   padding: '0',
//   border: 'none',
//   backgroundColor: 'transparent',

//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     bottom: '6px',
//   },
// }));

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
  right: 55,
  [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {},
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '24px',
    height: '24px',
  },
}));
