import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ReactComponent as Male } from './img/VectorSexM.svg';
import { ReactComponent as Female } from './img/Femaleee.svg';
import { LabelFormic } from '../Modal/Modal.styled';

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
    <FormControl>
      <FormLabel sx={LabelFormic} id="demo-customized-radios">
        The sex:
      </FormLabel>
      <RadioGroup
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'unset',
          height: '100%',
        }}
        defaultValue="male"
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
        value={value}
        onChange={(_, value) => {
          formik.setFieldValue('sex', value);
        }}
      >
        <FormControlLabel
          sx={GenderLabelMale}
          value="male"
          label={<MaleImageStyle />}
          control={<BpRadio />}
          checked={value === 'male'}
        />
        <FormControlLabel
          sx={GenderLabelFemale}
          value="female"
          label={<FemaleSvgStyle />}
          control={<BpRadio>xcvbxcvb</BpRadio>}
          checked={value === 'female'}
        />
      </RadioGroup>
    </FormControl>
  );
}
const FemaleSvgStyle = styled(Female)`
  && {
    color: red;
    width: 40px;
    @media only screen and (min-width: 768px) {
      width: 65px;
    }
  }
`;
const MaleImageStyle = styled(Male)`
  && {
    color: red;
    width: 36px;
    @media only screen and (min-width: 768px) {
      width: 60px;
    }
  }
`;
const GenderLabelFemale = theme => ({
  display: 'flex',
  flexDirection: 'column-reverse',
  [theme.breakpoints.up('tablet')]: {
    ml: '35px',
    mb: '35px',
  },
});
const GenderLabelMale = theme => ({
  display: 'flex',
  flexDirection: 'column-reverse',
  justifyItems: 'start',
  margin: '18px 39px 0 0',
  [theme.breakpoints.up('tablet')]: {
    mb: '35px',
  },
});
