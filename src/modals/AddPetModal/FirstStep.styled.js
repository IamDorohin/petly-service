import { Button, FormControl } from '@mui/material';

import styled from 'styled-components';

export const Input = styled.input`
&&{
  display:inline-block
  box-sizing: border-box;
  width: 100%;
  height: auto;
  height: 40px;
  left: 20px;
  top: 136px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 8px;
  margin-top: 8px;
  padding: 11px 20px 12px 14px;
  margin-left: 0;
  :focus, :hover, :active {
    border: 1px solid #f59256;
    outline: none;
  }
   font-family: 'Manrope';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
@media only screen and (min-width:768px) {
 min-height: 48px;
  margin-top: 12px;
  }
}
 
`;

// export const InputData = theme =>( {
//     minHeight: '40px',
//    [theme.breakpoints.up('tablet')]: {

//   },
// })

export const FierstStepDiv = styled.div`
  padding-top: 20px;
`;

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

// export const Forma = styled(Form)`
//   // position: relative;
//   // height: 530px
//   :last-child {
//     margin-bottom: 56px;
//   }
// `;
export const BtnGroupFierst = styled(Button)`
  && {
    border: 2px solid #f59256;
    border-radius: 40px;
    background-color: #ffffff;
    // margin-left: 10px;
    // margin-right: 10px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    text-transform: none;
    color: #111111;
    height: 44px;
    :focus,
    :active,
    :hover {
      background: #f59256;
      color: #ffffff;
    }
  }
`;
// export const BoxBtnGroup = styled(Box)`
//   && {
//     display: flex;
//    flex-wrap: wrap;
//     gap: 8px 12px;
//     list-style-type: none;

//   }
// `;

export const BoxBtnGroup = theme => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px 12px',
  mt: '20px',
  mb: '28px',
  height: '100%',
  '& : active': {
    background: '#f59256',
    color: '#ffffff',
  },
  [theme.breakpoints.up('tablet')]: {
    width: '371px',
    gap: '12px 16px',
    mt: '28px',
    mb: '28px',
  },
});
// display: flex;
//     flex-wrap: wrap;
//     gap: 8px 12px;
//     list-style-type: none;

// export const  = theme => ({
//   background: theme.customColors.successNotif,
//   [theme.breakpoints.up('tablet')]: {
//     background: theme.customColors.errorNotif,
//   },
// });

export const ButtonBox = theme => ({
  mt: '24px',
  width: '100%',
  [theme.breakpoints.up('tablet')]: {
    display: 'flex',
    width: '100%',
    pl: '24px',
    pr: '24px',
    height: '44px',
    justifyContent: 'center',
    alignItems: 'baseline',
    mt: '40px',
    mb: '0',
  },
});
// export const ButtonBox = styled.div`
//   // paddingLeft: 24px,
//   background-color: red;
//   display: flex;
//   width: 100%;
//   padding-left: 24px;
//   padding-right: 24px;
//   justifycontent: center;
//   alignitems: baseline;
// `;

export const CantBtn = theme => ({
  width: '100%',
  color: '#111111',
  border: '2px solid #f59256',
  borderRadius: '40px',
  background: '#ffffff',
  boxShadow: 'none',
  fontFamily: theme.customFontFamily.primary,
  textTransform: 'none',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '22px',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.04em',
  mt: '12px',
  //   mt: '24px',
  '&:hover ': {
    bgcolor: '#f59256',
    color: '#ffffff',
  },
  [theme.breakpoints.up('tablet')]: {
    lineHeight: '27px',
    fontSize: '20px',
    ml: '10px',
    mr: '10px',
    mt: '0px',
  },
});

export const FormBox = styled(FormControl)`
  && {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;
export const FormBoxTheme = theme => ({
  //   bgcolor: 'red',
  [theme.breakpoints.up('tablet')]: {
    pl: '26px',
    pr: '26px',
  },
});

// export const Title = styled.h2`
// &&{//   width: 88px;
// //   height: 33px;
// font-weight: 500;
//   display: flex;
// justify-content: center;
// }}
// `;
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
//   // lineHeight: theme.customLineHeight(22px),
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
