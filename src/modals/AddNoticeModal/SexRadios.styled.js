import { styled } from '@mui/material/styles';
import { FormControlLabel as FCL } from '@mui/material';
import { RadioGroup as RG } from '@mui/material';

export const RadioGroup = styled(RG)({});

export const FormControlLabel = styled(props => <FCL {...props} />)(
  ({ theme, checked }) => ({
    margin: '0',

    '& .MuiRadio-root': {
      position: 'absolute',
      width: '1px',
      height: '1px',
      margin: '-1px',
      border: '0',
      padding: '0',

      whiteSpace: 'nowrap',
      clipPath: 'inset(100%)',
      clip: 'rect(0 0 0 0)',
      overflow: 'hidden',
    },

    '&:hover': {
      color: '#F59256',
    },

    '.MuiFormControlLabel-label': checked && {
      color: '#F59256',
    },
  })
);

export const LabelImg = styled('img')(({ theme }) => ({
  width: '40px',
  height: '40px',

  [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
    width: '60px',
    height: '60px',
  },
}));

export const LabelText = styled('p')({
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '26px',
});
