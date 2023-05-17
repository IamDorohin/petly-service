import { styled } from '@mui/material/styles';
import {
  InputLabel,
  OutlinedInput,
  TextField,
  CircularProgress,
  FormHelperText,
} from '@mui/material';

export const Form = styled('form')(({ theme }) => ({
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  gap: '24px',

  borderColor: theme.customBorders.secondaryButtons,

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    gap: '40px',
  },
}));

export const Label = styled(InputLabel)(({ theme }) => ({
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalS,
  fontSize: theme.customFontSizes[1],
  lineHeight: theme.customLineHeight[3],
  letterSpacing: theme.customLetterSpacing.m,

  borderColor: theme.customBorders.accent,
}));

export const Input = styled(TextField)(({ theme }) => ({
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalS,
  fontSize: theme.customFontSizes[1],
  lineHeight: theme.customLineHeight[3],
  letterSpacing: theme.customLetterSpacing.m,

  '& input:-webkit-autofill': {
    backgroundColor: '#fff',
    WebkitBoxShadow: '0 0 0 1000px white inset',
  },

  '& fieldset': {
    borderRadius: '40px',
    borderColor: theme.customColors.accent,
  },
  '& .MuiFormHelperText-root': {
    position: 'absolute',
    bottom: '-20px',
  },

  '&:hover': {
    borderColor: theme.customColors.loginLink,
    color: theme.customColors.loginLink,
  },

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    '& .MuiFormHelperText-root': {
      bottom: '-24px',
    },
  },
}));

export const PasswordInput = styled(OutlinedInput)(({ theme }) => ({
  borderColor: theme.customBorders.accent,
  variant: 'h5',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalS,
  fontSize: theme.customFontSizes[1],
  lineHeight: theme.customLineHeight[3],
  letterSpacing: theme.customLetterSpacing.m,

  '& fieldset': {
    borderRadius: '40px',
    borderColor: theme.customColors.accent,
  },

  '&:hover': {
    color: theme.customColors.loginLink,

    '& fieldset': {
      borderColor: theme.customColors.loginLink,
    },
  },
}));

export const SubmitButton = styled('button')(({ theme }) => ({
  width: '100%',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  paddingLeft: '20px',
  paddingRight: '20px',
  border: '0',
  borderRadius: theme.customBorderRadius.primary,
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalS,
  fontSize: theme.customFontSizes[4],
  color: theme.customColors.accentFont,
  backgroundColor: theme.customColors.accent,
  cursor: 'pointer',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    height: '44px',
  },

  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    height: '48px',
  },
}));

export const BackButton = styled(SubmitButton)(({ theme }) => ({
  backgroundColor: theme.customColors.cardsBackground,
  color: theme.customColors.homeHeroTitleFont,
  border: '1px solid',
  borderColor: theme.customColors.accent,

  marginTop: '12px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    marginTop: '16px',
  },
}));

export const HelperText = styled(FormHelperText)(({ theme }) => ({
  position: 'absolute',
  bottom: '-20px',
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    bottom: '-24px',
  },
}));
export const Loader = styled(CircularProgress)(({ theme }) => ({
  color: 'white',
}));
