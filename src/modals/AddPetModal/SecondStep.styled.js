import styled from 'styled-components';
// import { styled } from '@mui/material/styles';
// import { styled } from '@mui/material/styles';
import { Button, Input, inputBaseClasses, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const FontButton = theme => ({
  fontFamily: theme.customFontFamily.primary,
  fontStyle: 'normal',
  fontWeight: theme.customFontWeight.normalM,
  fontSize: '16px',
  textTransform: 'none',
  color: theme.customColors.primaryFont,
  textAlign: 'center',
});

export const AddBtn = styled(Button)`
  display: flex;

  color: #111111;
  box-shadow: none;
  border-radius: 20px;
  background: #fdf7f2;
  margin-bottom: 20px;
  margin-top: 20px;
  //   margin-right: 36px;
  //   margin-left: 36px;
  :focus,
  :focus,
  :active,
  :hover {
    border: 2px solid #f59256;
    background: #fdf7f2;
    box-shadow: none;
    // color: #ffffff;
  }
`;

export const AddIcone = styled(AddIcon)`
  width: 48px;
  height: 48px;
  color: rgba(17, 17, 17, 0.6);
`;
export const ModalBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
`;

export const BtnNextModalBox = styled.div`
  //   height: 530px;
  position: absolute;
  //   /* height: max-content; */
  width: 280px;
  //   width: 100%;

  padding: 20px;
  left: 0;
  //   top: 360px;
`;

// export const TextFielde = theme => ({
// fontFamily: 'Manrope',
// font-style: normal,
// font-weight: 500,
// font-size: 16px,
// line-height: 22px,
// text-align: center;
// letter - spacing: -0.01em

//   fontFamily: theme.customFontFamily.primary,
//   fontStyle: 'normal',
//   fontWeight: theme.customFontWeight.normalM,
//   fontSize: '16px',
//   textTransform: 'none',
//   color: theme.customColors.primaryFont,
// });

export const CssTextField = styled(TextField)({
  //   width: '100%',
  //   height: '100%',
  //   minHeight: '100px',
  border: '1px solid rgba(245, 146, 86, 0.5)',
  borderRadius: '20px',
  background: '#fdf7f2',
  marginBottom: '16px',
  padding: '15px',
  '& label.Mui-focused': {
    color: '#F59256',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fdf7f2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fdf7f2',
    },
    '&:hover fieldset': {
      borderColor: '#fdf7f2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fdf7f2',
    },
  },
});
