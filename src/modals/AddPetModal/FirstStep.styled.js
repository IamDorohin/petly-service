import { Button, Typography } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers';
import { Field, Form, Label } from 'formik';
import styled from 'styled-components';
// import { DatePicker } from '@mui/x-date-pickers';

export const Input = styled.input`
display:inline-block
  box-sizing: border-box;
  width: 100%;
  height: auto;
  min-height: 40px;
  left: 20px;
  top: 136px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 16px;
  margin-top: 8px;
  padding: 11px 20px 12px 14px;
  margin-left: 0;
  :focus {
    border: 2px solid #f59256;
    outline: none;
  }
`;
export const LabelFormic = styled.label`
  margin-bottom: 8px;
  }
`;

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

export const Forma = styled(Form)`
  // position: relative;
  // height: 530px
  :last-child {
    margin-bottom: 56px;
  }
`;
export const NextBtn = styled(Button)`
  width: 100%;
  border: 2px solid #f59256;
  border-radius: 40px;
  background: #ffffff;
  margin-bottom: 12px;
  margin-top: 24px;
  :focus,
  :active,
  :hover {
    background: #f59256;
    color: #ffffff;
  }
`;

export const CantBtn = styled(Button)`
  width: 100%;
  color: #111111;
  border: 2px solid #f59256;
  border-radius: 40px;
  background: #ffffff;
  //   margin-top: 92px;
  box-shadow: none;
  :active,
  :hover {
    background: #f59256;
    color: #ffffff;
  }
`;

export const modalBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
`;

export const Title = styled.h2`
//   width: 88px;
//   height: 33px;
font-weight: 500;
  display: flex;
justify-content: center;
}
`;
export const BoxDataPicker = theme => ({
  display: 'flex',
  alignItems: 'center',
  border: '1px solid',
  background: theme.customColors.appBackground,
  borderColor: '#ffcfb1',
  alignSelf: 'center',
  width: '100%',
  //   minWidth: '240px',
  height: '40px',
  position: 'fixed',
  accentColor: '#3CBC81',

  borderRadius: theme.customBorderRadius.secondary,
  '&:hover': {
    borderColor: theme.customColors.accent,
  },
});

export const FontButton = theme => ({
  fontFamily: theme.customFontFamily.primary,
  fontStyle: 'normal',
  fontWeight: theme.customFontWeight.normalM,
  fontSize: '16px',
  textTransform: 'none',
  color: theme.customColors.primaryFont,
  textAlign: 'center',
  //   letterSpacing: '-0.01em',
  //   lineHeight: theme.customLineHeight(22px),
});
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
