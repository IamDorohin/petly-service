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
export const InputComment = styled.textarea`
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
 min-height: 113px;
 height: auto;
  margin-top: 12px;
  border-radius: 20px;
   width: 448px;
  }
}
 
`;


export const FierstStepDiv = styled.div`
  padding-top: 20px;
`;


export const BtnGroupFierst = styled(Button)`
  && {
    border: 2px solid #f59256;
    border-radius: 40px;
    background-color: #ffffff;
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
    height: 40px;
    @media only screen and (min-width: 768px) {
      height: 44px;
      font-size: 20px;
      line-height: 27px;
    }
    :focus,
    :hover,
    &.active {
      background: #f59256;
      color: #ffffff;
    }
  }
`;

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

export const CantBtn = theme => ({
    width: '100%',
    height: "40px",
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
  [theme.breakpoints.up('tablet')]: {
    pl: '26px',
    pr: '26px',
  },
});

