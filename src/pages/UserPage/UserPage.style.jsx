import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CreateIcon from '@mui/icons-material/Create';
import LogoutIcon from '@mui/icons-material/Logout';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

import { styled } from '@mui/material/styles';

//! container
export const UserPageContainer = styled('section')(({ theme }) => ({
  position: 'relative',

  // padding: '0 20px',
  // margin: '0 auto',

  width: '100%',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '768px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: '1280px',
  },
}));

export const UserWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '280px',
  marginRight: 'auto',
  marginLeft: 'auto',
  // height: '537px',
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '736px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {},
}));

// //! user card
// export const UserBlock = styled('div')(({ theme }) => ({
//   backgroundColor: theme.customColors.appBackground,
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   marginTop: '60px',
//   marginBottom: '80px',
//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     marginTop: '88px',
//     marginBottom: '100px',
//   },
//   [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
//     marginTop: '58px',
//     marginBottom: '40px',
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//   },
// }));

// export const UserTitleInfo = styled('p')(({ theme }) => ({
//   width: '280px',
//   display: 'block',
//   margin: '0 0 18px 0',
//   fontFamily: theme.customFontFamily.primary,
//   fontWeight: theme.customFontWeight.normalM,
//   fontSize: theme.customFontSizes[4],
//   lineHeight: theme.customLineHeight[8],
//   letterSpacing: theme.customLetterSpacing.m,
//   color: theme.customColors.homeHeroTitleFont,

//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     width: '736px',
//     margin: '0 0 40px 0',
//     fontSize: theme.customFontSizes[6],
//     lineHeight: theme.customLineHeight[10],
//   },
//   [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
//     width: '412px',

//     margin: '0 0 24px 0',
//   },
// }));
// export const UserInfoBlock = styled('div')(({ theme }) => ({
//   maxWidth: '280px',
//   backgroundColor: theme.customColors.cardsBackground,
//   borderRadius: theme.customBorderRadius.secondary,
//   boxShadow: theme.customShadow.primary,
//   padding: '20px 0',

//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     maxWidth: '736px',
//     borderRadius: '0px 40px 40px 0px',
//     display: 'flex',
//     flexDirection: 'row-reverse',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '24px 40px 24px 32px',
//   },
//   [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
//     marginRight: '32px',
//     maxWidth: '412px',
//     flexDirection: 'column',
//   },
// }));
// export const UserBlockWrapper = styled('div')(({ theme }) => ({
//   [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {},
// }));

// //! wrappers
// export const UserInfoWrapper = styled('div')(({ theme }) => ({
//   [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
//     marginBottom: '32px',
//     position: 'relative',
//   },
// }));
// export const UserFormWrapper = styled('div')(({ theme }) => ({
//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {},
//   [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {},
// }));

// //! info
// export const UserInfoImage = styled('img')(({ theme }) => ({
//   display: 'block',
//   width: '233px',
//   height: '233px',
//   boxShadow: theme.customShadow.addButton,
//   borderRadius: theme.customBorderRadius.round,
//   margin: '0 auto 12px auto',

//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     margin: '0 auto 8px auto',
//   },
//   [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
//     margin: '0 auto 0 auto',
//   },
// }));
// export const UserEditBlock = styled('div')(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'flex-end',
//   alignItems: 'center',
//   marginRight: '24px',
//   marginBottom: '34px',
//   transition: 'opacity 250ms linear',
//   '&:hover': {
//     opacity: '0.5',
//   },
//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     width: '100%',
//     marginBottom: '0',
//     marginRight: '0',
//   },
//   [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
//     position: 'absolute',
//     right: '-64px',
//     bottom: '0',
//   },
// }));
// export const UserEditPhoto = styled('label')(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'flex-end',
//   alignItems: 'center',
//   cursor: 'pointer',
//   fontFamily: theme.customFontFamily.primary,
//   fontWeight: theme.customFontWeight.normalS,
//   fontSize: theme.customFontSizes[0],
//   lineHeight: theme.customLineHeight[4],
// }));
// export const UserEditIcon = styled(PhotoCameraIcon)(({ theme }) => ({
//   width: '20px',
//   height: '20px',
//   marginRight: '4px',
//   color: theme.customColors.accent,
// }));
// export const UserEditInput = styled('input')({ display: 'none' });

// //! form
// export const Form = styled('form')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'start',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   margin: '0 12px 44px 16px',
//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     width: '380px',
//     margin: '16px 0 32px 0',
//   },
// }));
// export const FormLabel = styled('label')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   marginBottom: '8px',
//   width: '100%',
//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     marginBottom: '14px',
//   },
// }));
// export const FormTitle = styled('p')(({ theme }) => ({
//   fontFamily: theme.customFontFamily.primary,
//   fontWeight: theme.customFontWeight.normalM,
//   fontSize: theme.customFontSizes[0],
//   lineHeight: theme.customLineHeight[1],
//   letterSpacing: theme.customLetterSpacing.m,
//   color: theme.customColors.primaryFont,
//   margin: '0',
//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     fontSize: theme.customFontSizes[3],
//     lineHeight: theme.customLineHeight[6],
//   },
// }));
// export const FormInput = styled('input')(({ theme }) => ({
//   width: '159px',
//   height: '24px ',
//   paddingBottom: '4px',
//   paddingLeft: '16px',
//   paddingTop: '4px',
//   paddingRight: 'auto',
//   marginLeft: 'auto',
//   marginRight: 'auto',
//   borderRadius: '40px',
//   outline: 'none',
//   border: 'none',
//   fontFamily: theme.customFontFamily.primary,
//   fontWeight: theme.customFontWeight.normalS,
//   fontSize: theme.customFontSizes[0],
//   lineHeight: theme.customLineHeight[1],
//   letterSpacing: theme.customLetterSpacing.m,
//   color: theme.customColors.primaryFont,
//   '&:focus': {
//     backgroundColor: '#FDF7F2',
//     border: '1px solid #F5925680',
//   },
//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     width: '216px',
//     height: '32px ',
//     marginRight: '24px',
//     paddingBottom: '4px',
//     paddingLeft: '12px',
//     paddingTop: '4px',
//     paddingRight: 'auto',
//     fontSize: theme.customFontSizes[3],
//     lineHeight: theme.customLineHeight[6],
//   },
// }));
// export const FormIconPen = styled(CreateIcon)(({ theme }) => ({
//   width: '20px',
//   height: '20px',
//   padding: '4px',
//   marginLeft: '8px',
//   borderRadius: theme.customBorderRadius.round,
//   color: theme.customColors.translucentBlack,
//   backgroundColor: '#FDF7F2',
//   transition: 'opacity 250ms linear',
//   '&:hover': {
//     opacity: '0.5',
//   },
//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     width: '32px',
//     height: '32px',
//     padding: '6px',
//     marginLeft: '0',
//   },
// }));
// export const FormIconPenInclude = styled('div')(({ theme }) => ({
//   width: '20px',
//   height: '20px',
//   marginLeft: '8px',
//   borderRadius: theme.customBorderRadius.round,
//   color: theme.customColors.accent,
//   backgroundColor: '#FDF7F2',
//   transition: 'opacity 250ms linear',
//   '&:hover': {
//     opacity: '0.5',
//   },
//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     width: '32px',
//     height: '32px',
//     marginLeft: '0',
//   },
// }));
// export const FormWrap = styled('div')({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'left',
// });

// //! logout btn
// export const LogoutBtn = styled('button')(({ theme }) => ({
//   background: 'none',
//   border: 'none',
//   padding: '0',
//   cursor: 'pointer',
//   display: 'flex',
//   alignItems: 'center',
//   marginLeft: 'auto',
//   marginRight: '12px',
//   fontWeight: theme.customFontWeight.normalM,
//   fontSize: theme.customFontSizes[2],
//   lineHeight: theme.customLineHeight[4],
//   transition: 'opacity 250ms linear',
//   color: theme.customColors.translucentBlack,
//   '&:hover': {
//     opacity: '0.5',
//   },
//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     marginLeft: '0',
//     marginRight: '0',
//   },
// }));
// export const LogoutBtnIcon = styled(LogoutIcon)(({ theme }) => ({
//   width: '18px',
//   height: '18px',
//   marginRight: '8px',
//   color: 'rgb(245, 146, 86)',
// }));

// //! Pet Wrapper
// export const PetBlockWrapper = styled('div')(({ theme }) => ({
//   [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
//     maxWidth: '860px',
//   },
// }));
// //! scroll wrapper
// export const PetScrollWrapper = styled('div')(({ theme }) => ({
//   [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
//     overflowY: 'scroll',
//     maxHeight: '80vh',
//     paddingRight: '10px',
//     '&::-webkit-scrollbar': {
//       width: '4px',
//     },
//     '&::-webkit-scrollbar-track': {
//       backgroundColor: '#f593568b',
//       borderRadius: theme.customBorderRadius.secondary,
//     },
//     '&::-webkit-scrollbar-thumb': {
//       backgroundColor: '#f78b49',
//       borderRadius: theme.customBorderRadius.secondary,
//     },
//   },
// }));

// //! pet card title
// export const PetTitle = styled('p')(({ theme }) => ({
//   width: '87px',
//   display: 'block',
//   margin: '0 0 32px 0',
//   fontFamily: theme.customFontFamily.primary,
//   fontWeight: theme.customFontWeight.normalM,
//   fontSize: theme.customFontSizes[4],
//   lineHeight: theme.customLineHeight[8],
//   letterSpacing: theme.customLetterSpacing.m,
//   color: theme.customColors.homeHeroTitleFont,

//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     width: '122px',
//     margin: '0 0 24px 0',
//     fontSize: theme.customFontSizes[6],
//     lineHeight: theme.customLineHeight[10],
//   },
// }));

// //! pet card button
// export const PetCardBlock = styled('div')(({ theme }) => ({
//   width: '100%',
//   marginTop: '20px',
//   marginBottom: '24px',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
//     marginTop: '0',
//   },
// }));
// export const AddPetBtn = styled('button')(({ theme }) => ({
//   background: 'none',
//   border: 'none',
//   padding: '0',
//   cursor: 'pointer',
//   display: 'flex',
//   alignItems: 'center',
//   marginLeft: '64px',
//   fontWeight: theme.customFontWeight.normalM,
//   fontSize: theme.customFontSizes[4],
//   lineHeight: theme.customLineHeight[8],
//   transition: 'opacity 250ms linear',
//   '&:hover': {
//     opacity: '0.5',
//   },
//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     marginLeft: 'auto',
//   },
// }));
// export const AddPetBtnIcon = styled(AddRoundedIcon)(({ theme }) => ({
//   width: '40px',
//   height: '40px',
//   padding: '8px',
//   marginLeft: '12px',
//   borderRadius: theme.customBorderRadius.round,
//   color: theme.customColors.cardsBackground,
//   background: theme.customColors.accent,
//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     marginLeft: '16px',
//   },
// }));

// //! pet card
// export const PetCard = styled('div')(({ theme }) => ({
//   position: 'relative',
//   width: '280px',
//   height: '100%',
//   backgroundColor: theme.customColors.cardsBackground,
//   borderRadius: theme.customBorderRadius.secondary,
//   boxShadow: theme.customShadow.primary,
//   padding: '16px 20px 40px 20px',
//   marginBottom: '20px',

//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     width: '100%',
//     borderRadius: theme.customBorderRadius.primary,
//     padding: '20px',
//     display: 'flex',
//   },
//   [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
//     marginBottom: '22px',
//   },
// }));
// export const PetCardImg = styled('img')(({ theme }) => ({
//   display: 'block',
//   width: '240px',
//   height: '240px',
//   boxShadow: theme.customShadow.addButton,
//   borderRadius: theme.customBorderRadius.secondary,
//   marginBottom: '20px',
//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     maxWidth: '160px',
//     height: '160px',
//     marginBottom: '0',
//   },
// }));
// export const PetCardDelete = styled('div')(({ theme }) => ({
//   cursor: 'pointer',
//   position: 'absolute',
//   top: '272px',
//   right: '20px',
//   background: 'none',
//   border: 'none',
//   color: theme.customColors.homeHeroTitleFont,
//   transition: 'opacity 250ms linear',
//   '&:hover': { opacity: '0.5' },
//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     top: '20px',
//     width: '44px',
//     height: '44px',
//     padding: '10px',
//     background: theme.customColors.appBackground,
//     borderRadius: theme.customBorderRadius.round,
//   },
// }));
// export const PetCardWrapper = styled('div')(({ theme }) => ({
//   width: '100%',
//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     marginLeft: '20px',
//   },
// }));
// export const PetCardTitle = styled('p')(({ theme }) => ({
//   margin: '0 0 12px 0',
//   fontFamily: theme.customFontFamily.primary,
//   fontWeight: theme.customFontWeight.normalM,
//   fontSize: theme.customFontSizes[1],
//   lineHeight: theme.customLineHeight[3],
//   letterSpacing: theme.customLetterSpacing.m,
//   color: theme.customColors.homeHeroTitleFont,
// }));
// export const PetCardDescript = styled('span')(({ theme }) => ({
//   fontFamily: theme.customFontFamily.primary,
//   fontWeight: theme.customFontWeight.normalS,
//   fontSize: theme.customFontSizes[1],
//   lineHeight: theme.customLineHeight[3],
//   letterSpacing: theme.customLetterSpacing.m,
//   color: theme.customColors.homeHeroTitleFont,
// }));

// export const PetCard = styled('')(({ theme }) => ({}));
// [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {},
// [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {},
