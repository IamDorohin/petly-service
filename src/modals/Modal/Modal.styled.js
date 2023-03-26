import { IconButton } from '@mui/material';

import styled from 'styled-components';
// import { DatePicker } from '@mui/x-date-pickers';

export const modalBox = theme => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '280px',
  height: 'auto',
  minHeight: '530px',
  bgcolor: '#FFFFFF',
  borderRadius: '20px',
  boxShadow: '7px 4px 14px rgba(0, 0, 0, 0.11)',
  p: 4,
  [theme.breakpoints.up('mobileResponsive')]: {
    blockSize: 'auto',
    // width: '280px',
    minHeight: '530px',
    padding: '40px 20px 40px 20px',
    // backgroundColor: 'red',
    //   height: '100%',
  },
  //   [theme.breakpoints.up('mobileAdaptive')]: {
  //     // blockSize: 'auto',
  //     width: '280px',
  //     minHeight: '530px',
  //     padding: '40px 20px 28px 20px',
  //   },
  [theme.breakpoints.up('tablet')]: {
    width: '608px',
    minHeight: '570px',
    height: 'auto',
    // bgcolor: 'yellow',
    padding: '40px 80px 40px 80px',
  },
  [theme.breakpoints.up('desktop')]: {
    // backgroundColor: 'green',
  },
});

// export const Input = styled.input`
// && {display:inline-block
//   box-sizing: border-box;
//   width: 100%;
//   height: auto;
//   min-height: 40px;
//   left: 20px;
//   top: 136px;
//   background: #fdf7f2;
//   border: 1px solid rgba(245, 146, 86, 0.5);
//   border-radius: 40px;
//   margin-bottom: 16px;
//   margin-top: 8px;
//   padding: 11px 20px 12px 14px;
//   margin-left: 0;
//   :focus {
//     border: 2px solid #f59256;
//     outline: none;
//   }}
//    :hover {
//     border: 2px solid red;
//     outline: none;
//   }}
// `;
// export const LabelFormic = styled.label`
//   && {
//     font-family: 'Manrope';
//     font-style: normal;
//     font-weight: 500;
//     font-size: 18px;
//     line-height: 26px;
//   }
// `;
export const LabelFormic = theme => ({
  display: 'block',
  width: '100%',
  fontFamily: 'Manrope',
  height: '100%',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '18px',
  lineHeight: '26px',
  color: 'black',
  mt: '8px',
  [theme.breakpoints.up('tablet')]: {
    fontSize: '24px',
    mb: '20px',
  },
});
export const LabelFormicAddComment = theme => ({
  display: 'block',
  width: '100%',
  fontFamily: 'Manrope',
  height: '100%',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '18px',
  lineHeight: '26px',
  color: 'black',
  mt: '8px',
  [theme.breakpoints.up('tablet')]: {
    fontSize: '24px',
    // mb: '20px',
  },
});

// export const Inputt = styled(DatePicker)`
//   box-sizing: border-box;
//   width: 240px;
//   height: 40px;
//   width: 100%;
//   //   left: 20px;
//   //   top: 136px;
//   background: #fdf7f2;
//   border: 1px solid rgba(245, 146, 86, 0.5);
//   border-radius: 40px;
//   margin-bottom: 16px;
//   padding: 11px 20px 12px 14px;
//   :focus {
//     border: 2px solid #f59256;
//     outline: none;
//   }
// `;
// export const BrowserInput = styled(MobileDatePicker)`
//   box-sizing: border-box;
//   width: 240px;
//   height: 40px;
//   //   left: 20px;
//   //   top: 136px;
//   background: #fdf7f2;
//   border: 1px solid rgba(245, 146, 86, 0.5);
//   border-radius: 40px;
//   margin-bottom: 16px;
//   padding: 11px 20px 12px 14px;
//   :focus {
//     border: 2px solid #f59256;
//     outline: none;
//   }
// `;
// // export const Xxxx = styled(LocalizationProvider)`
//   padding: 0;
//   border: 0;
// `;

// export const Forma = styled(FormControl)`
//   && {
//       margin-top: 20px;
//   }
// `;
// export const NextBtn = styled(Button)`
// && { width: 100%;
//   border: 2px solid #f59256;
//   border-radius: 40px;
//   background: #ffffff;
//   margin-bottom: 12px;
//   margin-top: 24px;
//   :focus,
//   :active,
//   :hover {
//     background: #f59256;
//     color: #ffffff;
//   }}
// `;

// export const CantBtn = styled(Button)`
//   && {
//     width: 100%;
//     color: #111111;
//     border: 2px solid #f59256;
//     border-radius: 40px;
//     background: #ffffff;
//     //   margin-top: 92px;
//     box-shadow: none;
//     :active,
//     :hover {
//       background: #f59256;
//       color: #ffffff;
//     }
//   }
// `;

// export const modalBox = styled.div`
//   display: flex;
//   align-items: center;
//   flex-wrap: nowrap;
//   flex-direction: column;
// `;
export const ButtonI = styled(IconButton)`
  && {
    color: black;
    background: #fdf7f2;
    backdropfilter: blur(2px);
    width: 44px;
    height: 44px;
    position: absolute;
    right: 24px;
    top: 24px;
    :active,
    :hover {
      background: #f59256;
      bordercolor: #0062cc;
          boxShadow: 'none
    }
  }
`;

export const Title = theme => ({
  width: '100%',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '33px',
  color: '#111111',
  textAlign: 'center',
  mb: '20px',
  [theme.breakpoints.up('tablet')]: {
    fontSize: '36px',
    lineHeight: '49px',
    height: '52px',
    // mb: '40px',
  },
});

// export const BoxDataPicker = theme => ({
//   display: 'flex',
//   alignItems: 'center',
//   border: '1px solid',
//   background: theme.customColors.appBackground,
//   borderColor: '#ffcfb1',
//   alignSelf: 'center',
//   width: '100%',
//   //   minWidth: '240px',
//   height: '40px',
//   position: 'fixed',
//   accentColor: '#3CBC81',

//   borderRadius: theme.customBorderRadius.secondary,
//   '&:hover': {
//     borderColor: theme.customColors.accent,
//   },
// });

// export const FontButton = theme => ({
//   fontFamily: theme.customFontFamily.primary,
//   fontStyle: 'normal',
//   fontWeight: theme.customFontWeight.normalM,
//   fontSize: '16px',
//   textTransform: 'none',
//   color: theme.customColors.primaryFont,
//   textAlign: 'center',
//   letterSpacing: '-0.01em',
//   lineHeight: theme.customLineHeight(22px),
// });
// export const Div = styled('div')(({ theme }) => ({
//   fontFamily: theme.customFontFamily.primary,
//   fontStyle: 'normal',
//   fontWeight: theme.customFontWeight.normalM,
//   fontSize: '16px',
//   textTransform: 'none',
//   color: theme.customColors.primaryFont,
// }));
// export const ModalText = styled(Typography)`
//   font-family: 'Manrope';
//   font-style: normal;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 22px;
//   /* identical to box height */

//   text-align: center;
//   letter-spacing: -0.01em;

//   color: #000000;
// `;
// export const ModalText = theme => ({
//   fontFamily: theme.customFontFamily.primary,
//   fontStyle: 'normal',
//   fontWeight: theme.customFontWeight.normalM,
//   fontSize: '16px',
//   textTransform: 'none',
//   color: theme.customColors.primaryFont,
// });
//  console.log(theme);
// export const DataPickerr = theme => ({
//   display: 'flex',
//   alignItems: 'center',
//   border: '1px solid',
//   background: theme.customColors.appBackground,
//   borderColor: '#ffcfb1',
//   alignSelf: 'center',
//   width: '100%',
//   height: '40px',
//   position: 'fixed',
//   accentColor: '#3CBC81',

//   borderRadius: theme.customBorderRadius.secondary,
//   '&:hover': {
//     borderColor: theme.customColors.accent,
//   },
// });
// export const CssTDatePicker = styled(DatePicker)({
//   background: '#fdf7f2',
//   border: '1px solid rgba(245, 146, 86, 0.5)',
//   borderRadius: '20px',
//   marginBottom: '16px',
//   marginTop: '8px',
//   '&:hover': {
//     border: '2px solid rgb(245, 146, 86)',
//   },
//   '&:focus': {
//     border: '2px solid rgb(245, 146, 86)',
//   },
//   '& label.Mui-focused': {
//     color: '#fdf7f2',
//     position: 'absolut',
//     top: '10px',
//   },
//   '& label': {
//     color: '#fdf7f2',
//     position: 'absolut',
//     top: '7px',
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: '#F59256',
//   },
//   '& .MuiOutlinedInput-root': {
//     color: 'black',
//     // position: 'absolute',
//     width: '100%',
//     height: '40px',
//     border: '1px solid #fdf7f2',
//     borderRadius: '20px',
//     // top: '0px',
//     // left: '0px',
//     padding: '0px',
//     '& fieldset': {
//       borderColor: '#fdf7f2',
//     },
//     '&:hover fieldset': {
//       borderColor: '#fdf7f2',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: '#fdf7f2',
//     },
//     '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root ': {
//       color: 'red',
//     },
//     '& .MuiInputLabel-root': {
//       borderColor: 'green',
//       color: 'green',
//       display: 'none',
//     },
//   },
// });
// MuiFormLabel-root - colorPrimary;
// '& .MuiInputBase-formControl': {
//   borderColor: 'green',
//   color: 'green',
//   display: 'none',
// },
// '& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root': {
//   color: 'green',
//   display: 'none',
// },
// '& .MuiInputBase-input': {
//   width: '100%',
//   height: '40px',
//   //   minHeight: '100px',
//   //   border: '1px solid rgba(245, 146, 86, 0.5)',
//   borderRadius: '20px',
//   background: '#fdf7f2',
//   padding: '15px',
// //   position: 'relative',
// },
// '& .MuiFilledInput-root': {
//   border: '1px solid blue',
//   overflow: 'hidden',
//   borderRadius: 4,
//   backgroundColor: 'blue',
//   // transition: theme.transitions.create([
//   //   'border-color',
//   //   'background-color',
//   //   'box-shadow',
//   // ]),
//   '&:hover': {
//     backgroundColor: 'blue',
//   },
//   '&.Mui-focused': {
//     backgroundColor: 'blue',

//     borderColor: 'blue',
//   },
// },

// export const IconButton = theme => ({
//   color: 'black',
//   background: 'red',
//   backdropFilter: 'blur(2px)',
//   width: '44px',
//   height: '44px',
//   position: 'absolute',
//   right: '24px',
//   top: '24px',
//   '&:hover': {
//     backgroundColor: '#F59256',
//     borderColor: '#0062cc',
//     boxShadow: 'none',
//   },
// });
