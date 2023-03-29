import { IconButton } from '@mui/material';
import styled from 'styled-components';

export const modalBox = theme => ({
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
    padding: '40px 20px 40px 20px',
  },

  [theme.breakpoints.up('tablet')]: {
    width: '608px',
    minHeight: '570px',
    height: 'auto',
    padding: '40px 80px 40px 80px',
  },
  [theme.breakpoints.up('desktop')]: {},
});

export const LabelFormic = theme => ({
  display: 'block',
  width: '100%',
  fontFamily: 'Manrope',
  height: '100%',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '18px',
  lineHeight: '26px',
  color: 'black',
  mt: '8px',
  [theme.breakpoints.up('tablet')]: {
    fontSize: '24px',
    mb: '20px',
  },
});
export const LabelFormicAddComment = theme => ({
  display: 'block',
  width: '100%',
  fontFamily: 'Manrope',
  height: '100%',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '18px',
  lineHeight: '26px',
  color: 'black',
  mt: '8px',
  [theme.breakpoints.up('tablet')]: {
    fontSize: '24px',
  },
});

export const ButtonI = styled(IconButton)`
  && {
    color: black;
    background: #fdf7f2;
    backdropfilter: blur(2px);
    width: 34px;
    height: 34px;
    position: absolute;
    right: 20px;
    top: 20px;
    @media only screen and (min-width:768px) {
    width: 44px;
    height: 44px;
    right: 24px;
    top: 24px;
    }
    :active,
    :hover {
      background: #f59256;
      bordercolor: #0062cc;
    boxShadow: 'none
    }

  }
`;

export const Title = theme => ({
  width: '100%',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '33px',
  color: '#111111',
  textAlign: 'center',
  mb: '20px',
  [theme.breakpoints.up('tablet')]: {
    fontSize: '36px',
    lineHeight: '49px',
    height: '52px',
  },
});
