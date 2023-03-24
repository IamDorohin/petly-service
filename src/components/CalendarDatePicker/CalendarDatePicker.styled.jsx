import { MobileDatePicker } from '@mui/x-date-pickers';
import styled from 'styled-components';

export const DatePicker = styled(MobileDatePicker)({
  background: '#fdf7f2',
  border: '2px solid rgba(245, 146, 86, 0.5)',
  borderRadius: '20px',
  marginBottom: '16px',
  marginTop: '8px',
  '&:hover': {
    border: '2px solid rgb(245, 146, 86)',
  },
  '&:focus': {
    border: '2px solid rgb(245, 146, 86)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#F59256',
  },
  '& .MuiOutlinedInput-root': {
    color: 'black',
    // position: 'absolute',
    width: '100%',
    height: '40px',
    border: '1px solid #fdf7f2',
    borderRadius: '20px',
    // top: '0px',
    // left: '0px',
    padding: '0px',
    '& fieldset': {
      borderColor: '#fdf7f2',
    },
    '&:hover fieldset': {
      borderColor: '#fdf7f2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fdf7f2',
    },
    '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root ': {
      color: 'red',
    },
    '& .MuiInputLabel-root': {
      borderColor: 'green',
      color: 'green',
      display: 'none',
    },
  },
});
