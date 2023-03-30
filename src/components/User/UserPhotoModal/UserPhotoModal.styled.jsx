import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export const FormContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  justifyContent: 'center',
  width: 278,
  height: 400,
  padding: '0px 16px 20px 16px',
  // backgroundColor: theme.customColors.cardsBackground,
  // backgroundColor: 'transparent',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  border: '1px solid',
  borderColor: theme.customColors.accent,
  borderRadius: theme.customBorderRadius.primary,
  // pt: 2,
  // px: 4,
  // pb: 3,

  // [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
  //   padding: '0',
  // },
}));

export const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const FormInput = styled('input')(({ theme }) => ({
  width: '233px',
  height: '233px',
  backgroundColor: theme.customColors.cardsBackground,
  border: '1px solid black',
  borderRadius: theme.customBorderRadius.primary,

  // [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
  //   padding: '0',
  // },
}));

export const FormInputWrapper = styled(IconButton)(({ theme }) => ({
  width: '233px',
  height: '233px',
  // backgroundColor: theme.customColors.appBackground,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  border: '1px solid ',
  borderColor: theme.customColors.accent,
  borderRadius: theme.customBorderRadius.round,
  cursor: 'pointer',
  padding: 0,

  '&:hover': {
    backgroundColor: theme.customColors.appBackground,
  },
  // [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
  //   padding: '0',
  // },
}));

export const FormInputAddIcon = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '243px',
  height: '233px',
  backgroundColor: 'transparent',
  color: theme.customColors.accent,
  borderRadius: theme.customBorderRadius.round,

  // '&:hover': {
  //   backgroundColor: theme.customColors.accent,
  //   opacity: 0.9,
  //   color: theme.customColors.cardsBackground,
  // },
  // [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
  // },
}));

export const FormInputCloseIcon = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 20,
  left: 235,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 25,
  height: 25,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: theme.customColors.accent,
  border: '1px solid',
  borderColor: theme.customColors.accent,
  borderRadius: theme.customBorderRadius.round,
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.customColors.appBackground,
  },
  // [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
  // },
}));

export const FormInputSubmit = styled(Button)(({ theme }) => ({
  width: 130,
  height: 40,
  marginLeft: 'auto',
  marginRight: 'auto',
  // backgroundColor: theme.customColors.appBackground,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',

  border: '1px solid',
  borderColor: theme.customColors.accent,
  borderRadius: theme.customBorderRadius.primary,
  color: theme.customColors.accent,

  cursor: 'pointer',

  // '&:hover': {
  //   backgroundColor: theme.customColors.accent,
  //   color: theme.customColors.cardsBackground,
  // },

  '&:hover': {
    backgroundColor: theme.customColors.appBackground,
  },
  // [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
  //   padding: '0',
  // },
}));
