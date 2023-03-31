import { MobileDatePicker } from '@mui/x-date-pickers';
import styled from 'styled-components';

export const DatePicker = styled(MobileDatePicker)({
  background: '#fdf7f2',
  borderRadius: '20px',
  width: '100%',
  '& .MuiOutlinedInput-root': {
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '26px',
    color: 'rgba(17, 17, 17, 0.6)',
    width: '100%',
    height: '40px',
    borderRadius: '40px',
    padding: '0px',
    '& fieldset': {
      border: ' 1px solid rgba(245, 146, 86, 0.5)',
    },
    '&:hover fieldset': {
      border: ' 1px solid rgb(245, 146, 86)',
    },
    '&.Mui-focused fieldset': {
      border: ' 1px solid rgb(245, 146, 86)',
    },
  },
});

export const DatePickerInput = theme => ({
  mt: '8px',
  [theme.breakpoints.up('tablet')]: {
    mt: '12px',
    '& .MuiOutlinedInput-root': {
      height: '48px',
      borderRadius: '40px',
      padding: '0px',
    },
  },
});
