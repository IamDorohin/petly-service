import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { TfiPlus } from 'react-icons/tfi';
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

export const FormContainer = styled(Box)(({ theme }) => ({
  width: '280px',
  height: '537px',
  backgroundColor: theme.customColors.cardsBackground,

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

  [theme.breakpoints.between(
    theme.breakpoints.values.tablet,
    theme.breakpoints.values.desktop
  )]: {
    width: '704px',
    height: '311px',
    paddingLeft: '120px',
    paddingRight: '40px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    width: '411px',
    height: '541px',

    borderRadius: theme.customBorderRadius.primary,
  },
}));

export const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 31,

  [theme.breakpoints.between(
    theme.breakpoints.values.tablet,
    theme.breakpoints.values.desktop
  )]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    paddingTop: 0,
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    paddingTop: 20,
  },
}));

export const UserDataPhoto = styled('img')(({ theme }) => ({
  width: '233px',
  height: '233px',
  marginBottom: 65,
  borderRadius: theme.customBorderRadius.round,

  filter: 'drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11))',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    marginBottom: 0,
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    marginBottom: 65,
  },
}));

export const FormInput = styled('input')(({ theme }) => ({
  width: '233px',
  height: '233px',

  backgroundColor: theme.customColors.cardsBackground,
  border: '1px solid black',
  borderRadius: theme.customBorderRadius.primary,
}));

export const FormInputWrapper = styled(IconButton)(({ theme }) => ({
  position: 'relative',
  width: '233px',
  height: '233px',
  marginBottom: 65,
  border: '1px solid ',
  borderColor: theme.customColors.accent,
  borderRadius: theme.customBorderRadius.round,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    marginBottom: 0,
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    marginBottom: 65,
  },

  '&:hover': {
    backgroundColor: theme.customColors.appBackground,
    color: theme.customColors.primaryFont,
  },
}));

export const FormInputAddIcon = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '233px',
  height: '233px',
  backgroundColor: 'transparent',
  color: theme.customColors.accent,
  borderRadius: theme.customBorderRadius.round,
  overflow: 'hidden',

  '&:hover': {
    color: theme.customColors.primaryFont,

    '& .forHover': {
      color: theme.customColors.primaryFont,
    },
  },
}));

export const AddIcon = styled(TfiPlus)(({ theme }) => ({
  width: '20%',
  height: '20%',
}));

export const FormInputCloseIcon = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 25,
  height: 25,
  backgroundColor: 'transparent',
  color: theme.customColors.accent,
  border: '1px solid',
  borderColor: theme.customColors.accent,
  borderRadius: theme.customBorderRadius.round,
  cursor: 'pointer',
  transform: 'translate(232px, 24px)',

  '&:hover': {
    backgroundColor: theme.customColors.appBackground,
    color: theme.customColors.primaryFont,
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    transform: 'translate(534px, 24px)',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    transform: 'translate(360px, 24px)',
  },
}));

export const FormButtonsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: 200,
  },
}));

export const DeleteButton = styled(Button)(({ theme }) => ({
  width: 180,
  height: 40,
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: 'transparent',

  border: '1px solid',
  borderColor: theme.customColors.accent,
  borderRadius: theme.customBorderRadius.primary,
  color: theme.customColors.accent,
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.customColors.appBackground,
    color: theme.customColors.primaryFont,
  },
}));

export const FormInputSubmit = styled(DeleteButton)(({ theme }) => ({
  marginBottom: 20,
}));
