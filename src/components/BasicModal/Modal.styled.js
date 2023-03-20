import { styled } from '@mui/material/styles';
import { BackdropRoot, IconButton } from '@mui/material';
import { ChildModal } from 'components/ModalXxxx';

export const modalBox = theme => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '280px',
  height: '530px',
  bgcolor: '#FFFFFF',
  borderRadius: '40px',
  boxShadow: '7px 4px 14px rgba(0, 0, 0, 0.11)',
  p: 4,
  [theme.breakpoints.down('md')]: {
    blockSize: 'auto',
    width: '280px',
    minHeight: '530px',
    padding: '40px 20px 28px 20px',
    //   height: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '608px',
    height: '570px',
  },
  [theme.breakpoints.up('lg')]: {
    bgcolor: 'red',
  },
});

export const ButtonI = styled(IconButton)({
  color: 'black',
  background: '#FDF7F2',
  backdropFilter: 'blur(2px)',
  width: '44px',
  height: '44px',
  position: 'absolute',
  right: '24px',
  top: '24px',
  '&:hover': {
    backgroundColor: '#F59256',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
});

export const Backdrop = styled(ChildModal)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
`;
