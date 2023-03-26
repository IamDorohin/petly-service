import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
// import { Form } from 'formik';
import CircularProgress from '@mui/material/CircularProgress';
import { InputLabel } from '@mui/material';
// import Button from "@mui/material/Button";

export const LoginSection = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.customColors.appBackground,
  borderColor: theme.customBorders.secondaryButtons,
  minHeight: '100vh',
}));

export const LoginContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.customColors.appBackground,
  [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
    // minWidth: '280px',
    // minHeight: '100vh',
    paddingTop: '100px',
    paddingBottom: '151px',
    paddingLeft: '20px',
    paddingRight: '20px',
    margin: '0 auto',
  },

  [theme.breakpoints.up(theme.breakpoints.values.mobileAdaptive)]: {
    maxWidth: '480px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    minWidth: '768px',
    maxWidth: '768px',
    paddingLeft: '32px',
    paddingRight: '32px',
    paddingTop: '90px',
  },
  [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
    minWidth: '1280px',
    // maxWidth: '1280px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingBottom: '200px',
    paddingTop: '60px',
  },
}));

export const TitleH1 = styled(Typography)(({ theme }) => ({
  variant: 'h1',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  paddingLeft: '110px',
  paddingRight: '110px',
  // paddingBottom: '40px',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.bold,
  fontSize: theme.customFontSizes[5],
  lineHeight: theme.customLineHeight[9],
  letterSpacing: theme.customLetterSpacing.m,
  color: theme.customColors.primaryFont,
  // background: radial-gradient( #c4c3ca 1px, transparent 1px);
  // background-size: 3px 3px;
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  // margin: 0 auto;
}));

export const LoginForm = styled('form')(({ theme }) => ({
  // width: '100%',
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  paddingTop: '40px',
  paddingBottom: '40px',
  backgroundColor: theme.customColors.appBackground,
  borderColor: theme.customBorders.secondaryButtons,
}));

// export const LoginLabel = styled(Field)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   paddingTop: '40px',
//   paddingBottom: '40px',
// }));

export const LoginLabelName = styled(InputLabel)(({ theme }) => ({
  variant: 'h5',
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalS,
  fontSize: theme.customFontSizes[1],
  lineHeight: theme.customLineHeight[3],
  letterSpacing: theme.customLetterSpacing.m,
  color: theme.customColors.appBackground,
  borderColor: theme.customBorders.accent,
}));

export const LoginInput = styled(TextField)(({ theme }) => ({
  borderColor: theme.customBorders.accent,

  '& fieldset': {
    borderRadius: '40px',
  },

  '&:hover': {
    color: theme.customColors.loginLink,
  },
}));

export const Button = styled('button')(({ theme }) => ({
  width: '100%',
  minHeight: '100%',
  display: 'block',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  paddingTop: '8.5px',
  paddingBottom: '8.5px',
  paddingLeft: '112.5px',
  paddingRight: '112.5px',
  paddingLeft: '20px',
  paddingRight: '20px',
  borderRadius: theme.customBorderRadius.primary,
  borderColor: theme.customBorders.secondaryButtons,
  fontFamily: theme.customFontFamily.primary,
  fontWeight: theme.customFontWeight.normalS,
  fontSize: theme.customFontSizes[4],
  color: theme.customColors.accentFont,
  backgroundColor: theme.customColors.accent,
  cursor: 'pointer',
}));

export const HelperContainer = styled(Box)(({ theme }) => ({
  paddingLeft: '63px',
  paddingRight: '64px',
  marginTop: '40px',
}));

export const TitleH5 = styled(Typography)(({ theme }) => ({
  variant: 'h5',
  // display: 'flex',
  // alignItems: 'center',
  // textAlign: 'center',
  // justifyContent: 'center',
  paddingLeft: '63px',
  paddingRight: '64px',
  fontFamily: theme.customFontFamily.translucentBlack,
  fontWeight: theme.customFontWeight.normalS,
  fontSize: theme.customFontSizes[0],
  lineHeight: theme.customLineHeight[1],
  letterSpacing: theme.customLetterSpacing.m,
  color: theme.customColors.primaryFont,
}));

export const Loader = styled(CircularProgress)(({ theme }) => ({
  // height={200}
  // width={200}
  // ariaLabel="blocks-loading"
}));
