// import { styled } from '@mui/material/styles';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// // import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import { Link } from 'react-router-dom';
// import { InputLabel, OutlinedInput } from '@mui/material';
// import CircularProgress from '@mui/material/CircularProgress';
// // import { Form } from 'formik';
// // import Button from "@mui/material/Button";

// import {
//   loginBgImage,
//   loginBgTablet,
//   loginBgLaptop,
//   loginBgMobile,
// } from '../../images/';

// export const RegisterSection = styled('section')(({ theme, bgImage }) => ({
//   backgroundImage: `url(${bgImage.loginBgMobile})`,
//   backgroundColor: theme.customColors.appBackground,
//   backgroundPosition: 'bottom',
//   backgroundSize: 'contain',
//   backgroundRepeat: 'no-repeat',
//   minHeight: '100vh',
//   position: 'relative',
//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     backgroundImage: `url(${bgImage.loginBgTablet})`,
//     paddingTop: '272px',
//     paddingBottom: '260px',
//   },
//   [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
//     backgroundImage: `url(${bgImage.loginBgLaptop})`,
//     minWidth: '1280px',
//     paddingTop: '146px',
//     paddingBottom: '124px',
//     paddingLeft: '331px',
//     paddingRight: '331px',
//   },
// }));

// // export const LoginBgImage = styled('img')(({ theme }) => ({
// //   width: '100%',
// //   bottom: '0',
// //   right: '0',
// //   position: 'absolute',
// //   loading: 'lazy',
// // }));

// export const RegisterContainer = styled(Container)(({ theme }) => ({
//   backgroundColor: 'transparent',
//   [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
//     paddingTop: '100px',
//     paddingBottom: '151px',
//     paddingLeft: '20px',
//     paddingRight: '20px',
//     margin: '0 auto',
//   },

//   [theme.breakpoints.up(theme.breakpoints.values.mobileAdaptive)]: {
//     maxWidth: '480px',
//     paddingTop: '100px',
//     paddingBottom: '151px',
//     paddingLeft: '20px',
//     paddingRight: '20px',
//     margin: '0 auto',
//     borderRadius: theme.customBorderRadius.primary,
//   },
//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     minWidth: '768px',
//     maxWidth: '768px',
//     paddingBottom: '60px',
//     paddingTop: '60px',
//     paddingLeft: '80px',
//     paddingRight: '80px',
//     borderRadius: theme.customBorderRadius.primary,
//     backgroundColor: theme.customColors.cardsBackground,
//     boxShadow: theme.customShadow.primary,
//   },
//   [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
//     // minWidth: '1280px',
//     // maxWidth: '1280px',
//     // paddingLeft: '331px',
//     // paddingRight: '331px',
//     paddingBottom: '60px',
//     paddingTop: '60px',
//   },
// }));

// export const TitleH1 = styled(Typography)(({ theme }) => ({
//   variant: 'h1',
//   display: 'flex',
//   alignItems: 'center',
//   textAlign: 'center',
//   justifyContent: 'center',
//   paddingLeft: '110px',
//   paddingRight: '110px',
//   fontFamily: theme.customFontFamily.primary,
//   fontWeight: theme.customFontWeight.bold,
//   fontSize: theme.customFontSizes[5],
//   lineHeight: theme.customLineHeight[9],
//   letterSpacing: theme.customLetterSpacing.m,
//   color: theme.customColors.primaryFont,
//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     fontSize: theme.customFontSizes[8],
//     lineHeight: theme.customLineHeight[14],
//   },
//   [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
//     lineHeight: theme.customLineHeight[14],
//   },
// }));

// export const RegisterForm = styled('form')(({ theme }) => ({
//   // width: '100%',
//   minHeight: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   alignContent: 'center',
//   paddingTop: '40px',
//   backgroundColor: theme.customColors.appBackground,
//   borderColor: theme.customBorders.secondaryButtons,

//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     backgroundColor: theme.customColors.cardsBackground,
//   },
// }));

// // export const LoginLabelName = styled(InputLabel)(({ theme }) => ({
// //   // variant: 'h5',
// //   fontFamily: theme.customFontFamily.primary,
// //   fontWeight: theme.customFontWeight.normalS,
// //   fontSize: theme.customFontSizes[1],
// //   lineHeight: theme.customLineHeight[3],
// //   letterSpacing: theme.customLetterSpacing.m,
// //   borderColor: theme.customBorders.accent,
// // }));

// export const RegisterInputName = styled(TextField)(({ theme }) => ({
//   variant: 'h5',
//   fontFamily: theme.customFontFamily.primary,
//   fontWeight: theme.customFontWeight.normalS,
//   fontSize: theme.customFontSizes[1],
//   lineHeight: theme.customLineHeight[3],
//   letterSpacing: theme.customLetterSpacing.m,
//   color: theme.customColors.appBackground,
//   marginBottom: '24px',

//   '& fieldset': {
//     borderRadius: '40px',
//     borderColor: theme.customColors.accent,
//   },

//   '&:hover': {
//     color: theme.customColors.loginLink,
//   },
// }));

// export const RegisterInputAddress = styled(TextField)(({ theme }) => ({
//   variant: 'h5',
//   fontFamily: theme.customFontFamily.primary,
//   fontWeight: theme.customFontWeight.normalS,
//   fontSize: theme.customFontSizes[1],
//   lineHeight: theme.customLineHeight[3],
//   letterSpacing: theme.customLetterSpacing.m,
//   color: theme.customColors.appBackground,
//   marginBottom: '24px',

//   '& fieldset': {
//     borderRadius: '40px',
//     borderColor: theme.customColors.accent,
//   },

//   '&:hover': {
//     color: theme.customColors.loginLink,
//   },
// }));

// export const RegisterInputTel = styled(TextField)(({ theme }) => ({
//   variant: 'h5',
//   fontFamily: theme.customFontFamily.primary,
//   fontWeight: theme.customFontWeight.normalS,
//   fontSize: theme.customFontSizes[1],
//   lineHeight: theme.customLineHeight[3],
//   letterSpacing: theme.customLetterSpacing.m,
//   color: theme.customColors.appBackground,
//   marginBottom: '40px',

//   '& fieldset': {
//     borderRadius: '40px',
//     borderColor: theme.customColors.accent,
//   },

//   '&:hover': {
//     color: theme.customColors.loginLink,
//   },
// }));

// export const PasswordInput = styled(OutlinedInput)(({ theme }) => ({
//   borderColor: theme.customBorders.accent,
//   variant: 'h5',
//   fontFamily: theme.customFontFamily.primary,
//   fontWeight: theme.customFontWeight.normalS,
//   fontSize: theme.customFontSizes[1],
//   lineHeight: theme.customLineHeight[3],
//   letterSpacing: theme.customLetterSpacing.m,
//   color: theme.customColors.appBackground,
//   marginBottom: '40px',

//   '& fieldset': {
//     borderRadius: '40px',
//     borderColor: theme.customColors.accent,
//   },

//   '&:hover': {
//     color: theme.customColors.loginLink,
//   },
// }));

// export const Button = styled('button')(({ theme }) => ({
//   width: '100%',
//   height: '48px',
//   display: 'flex',
//   alignItems: 'center',
//   textAlign: 'center',
//   justifyContent: 'center',
//   paddingLeft: '20px',
//   paddingRight: '20px',
//   border: '0',
//   borderRadius: theme.customBorderRadius.primary,
//   fontFamily: theme.customFontFamily.primary,
//   fontWeight: theme.customFontWeight.normalS,
//   fontSize: theme.customFontSizes[4],
//   color: theme.customColors.accentFont,
//   backgroundColor: theme.customColors.accent,
//   cursor: 'pointer',

//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     paddingLeft: '75px',
//     paddingRight: '75px',
//   },
// }));

// export const HelperContainer = styled(Box)(({ theme }) => ({
//   [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
//     paddingLeft: '63px',
//     paddingRight: '64px',
//     marginTop: '40px',
//   },

//   [theme.breakpoints.up(theme.breakpoints.values.mobileAdaptive)]: {
//     paddingLeft: '63px',
//     paddingRight: '64px',
//     marginTop: '40px',
//   },
// }));

// export const TitleH5 = styled(Typography)(({ theme }) => ({
//   variant: 'h5',
//   paddingLeft: '63px',
//   paddingRight: '64px',
//   fontFamily: theme.customFontFamily.translucentBlack,
//   fontWeight: theme.customFontWeight.normalS,
//   fontSize: theme.customFontSizes[0],
//   lineHeight: theme.customLineHeight[1],
//   letterSpacing: theme.customLetterSpacing.m,
//   color: theme.customColors.primaryFont,

//   [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
//     paddingLeft: '128px',
//     paddingRight: '127px',
//   },
// }));

// export const Loader = styled(CircularProgress)(({ theme }) => ({
//   color: 'white',
// }));

// export const RegisterLink = styled(Link)(({ theme }) => ({
//   color: theme.customColors.loginLink,
// }));
