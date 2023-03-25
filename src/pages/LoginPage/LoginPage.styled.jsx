import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
// import Button from "@mui/material/Button";

export const Section = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.customColors.appBackground,
  minHeight: '100vh',
  // width: '400px',
  // padding: '50px',
  // border: '1px solid #dedede',
  // margin: '50px auto',
}));

export const LoginContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.customColors.appBackground,
  [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
    // minWidth: '280px',
    minHeight: '100vh',
    // paddingTop: '100px',
    // paddingBottom:'87px',
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

export const Title = styled(Typography)(({ theme }) => ({
  variant: 'h1',
  // margin: 0,
  // marginBottom: '16px',
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

export const Form = styled('form')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '20px',
  marginBottom: '30px',
  padding: '20px 20px',
  // border: 1px solid #ffffff;
  backgroundColor: theme.customColors.appBackground,
}));

export const Label = styled(TextField)(({ theme }) => ({
  // display: flex;
  // flex-direction: column;
  // margin-bottom: 20px;
  // color: #c4c3ca;
}));

export const Input = styled('input')(({ theme }) => ({
  //     width: 80%;
  //     margin-top: 10px;
  //     box-shadow: 0px 1px 2px 0px rgba(0, 65, 200, 0.5),
  //             1px 2px 4px 0px rgba(0,65,200,0.5),
  //             2px 4px 8px 0px rgba(0,65,200,0.5),
  //             2px 4px 16px 0px rgba(0,65,200,0.5);
  //   {&}::placeholder {
  //   font: inherit;
  //   font-size: 18px;
  //   padding-left: 12px;
  // }
}));

export const Button = styled('button')(({ theme }) => ({
  // display: block;
  // border-radius: 10px;
  // font-size: 14px;
  // padding: 10px;
  //     margin-top: 20px;
  //     width: 200px;
  //     background-color: white;
  //     cursor: pointer;
  //     box-shadow: 0px 1px 2px 0px rgba(0, 65, 200, 0.5),
  //             1px 2px 4px 0px rgba(0,65,200,0.5),
  //             2px 4px 8px 0px rgba(0,65,200,0.5),
  //             2px 4px 16px 0px rgba(0,65,200,0.5);
  //   {&}:hover{
  //   background-color: #102770;
  //   color: #c4c3ca;
  //   box-shadow: 0 8px 24px 0 rgba();
  // }
}));

export const HelperContainer = styled(Box)(({ theme }) => ({
  // display: block;
  // border-radius: 10px;
  // font-size: 14px;
  // padding: 10px;
  //     margin-top: 20px;
  //     width: 200px;
  //     background-color: white;
  //     cursor: pointer;
  //     box-shadow: 0px 1px 2px 0px rgba(0, 65, 200, 0.5),
  //             1px 2px 4px 0px rgba(0,65,200,0.5),
  //             2px 4px 8px 0px rgba(0,65,200,0.5),
  //             2px 4px 16px 0px rgba(0,65,200,0.5);
  //   {&}:hover{
  //   background-color: #102770;
  //   color: #c4c3ca;
  //   box-shadow: 0 8px 24px 0 rgba();
  // }
}));

export const Loader = styled(CircularProgress)(({ theme }) => ({
  // height={200}
  // width={200}
  // ariaLabel="blocks-loading"
}));
