import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ReactComponent as Male } from './img/VectorSexM.svg';
import { ReactComponent as Female } from './img/Female.svg';
// import { BpIcon } from './Modal.styled';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'red'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'red' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'red'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'red'
        ? 'rgba(57,75,89,.5)'
        : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#F59256',
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',

  'input:hover ~ &': {
    backgroundColor: '#F59256',
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default function SexRadios({ formik }) {
  const value = formik.values.sex;
  return (
    <FormControl
      sx={{
        display: 'flex',
        '&:hover': {
          display: 'block',
          //   backgroundColor: 'red',
        },
      }}
    >
      <FormLabel
        sx={{
          'label:focused': {
            backgroundColor: 'red',
          },
        }}
        id="demo-customized-radios"
      >
        The sex
      </FormLabel>
      <RadioGroup
        sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'unset' }}
        defaultValue="male"
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
        value={value}
        onChange={(_, value) => {
          formik.setFieldValue('sex', value);
        }}
      >
        <FormControlLabel
          sx={{
            display: 'flex',
            flexDirection: 'column-reverse',
            justifyItems: 'start',
            margin: '18px 39px 0 0',
            // marginLeft: 'unset',
          }}
          value="male"
          label={<Male />}
          control={<BpRadio />}
          checked={value === 'male'}
        />
        <FormControlLabel
          sx={{ display: 'flex', flexDirection: 'column-reverse' }}
          value="female"
          label={<Female />}
          control={<BpRadio>xcvbxcvb</BpRadio>}
          checked={value === 'female'}
        />
      </RadioGroup>
    </FormControl>
  );
}
