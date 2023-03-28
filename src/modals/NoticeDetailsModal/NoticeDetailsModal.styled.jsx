import styled from 'styled-components';
import {Typography } from '@mui/material';


export const ModalBoxNotice = theme => ({
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
    minHeight: '530px',
    padding: '60px 20px 60px 20px',

  },

  [theme.breakpoints.up('tablet')]: {
    width: '704px',
    minHeight: '570px',
    height: 'auto',

  },
  [theme.breakpoints.up('desktop')]: {

  },
});



export const FontButtonNotice = theme => ({
  fontFamily: theme.customFontFamily.primary,
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  textTransform: 'none',
  color: theme.customColors.primaryFont,
  textAlign: 'start',
  width: '100%',
  lineHeight: '19px',
  letterSpacing: '-0.01em',
  [theme.breakpoints.up('tablet')]: {
    fontSize: '16px',
    lineHeight: '22px',
  },
});
export const T = styled(Typography)(({ theme }) => ({
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontSize: '16px',
  textTransform: 'none',
  minWidth: '118px',
}));

export const Ul = styled.ul(({ theme }) => ({
  listStyleType: 'none',
  display: 'flex',
  flexDirection: 'column',
  padding: '0',
}));

export const L = styled.li(({ theme }) => ({
  display: 'flex',

}));

export const B = theme => ({
  width: '240px',
  height: '240px',
  backgroundColor: 'aqua',
  borderRadius: '0px 0px 40px 40px',
  [theme.breakpoints.up('tablet')]: {
    width: '288px',
    height: '328px',
    backgroundColor: 'red',
    marginRight: '20px',
  },
});

export const Div = styled.div`
  //   display: flex;
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;
