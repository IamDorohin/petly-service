import * as React from 'react';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import { useRadioGroup } from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import MaleImg from './img/Male.svg';
import FemaleImg from './img/Female.svg';
import { LabelFormic } from '../Modal/Modal.styled';
import * as SC from './SexRadios.styled';
import { Box } from '@mui/material';

const RadioLabel = ({ text, img }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: {
          zero: '12px',
          tablet: '20px',
        },
      }}
    >
      <SC.LabelImg src={img} alt="" />
      <SC.LabelText>{text}</SC.LabelText>
    </Box>
  );
};

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <SC.FormControlLabel checked={checked} {...props} />;
}

export default function SexRadios({ formik }) {
  const value = formik.values.sex;
  return (
    <FormControl>
      <FormLabel sx={LabelFormic} id="demo-customized-radios">
        The sex:
      </FormLabel>
      <SC.RadioGroup
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'unset',
          height: '100%',
          gap: {
            zero: '40px',
            tablet: '80px',
          },
        }}
        defaultValue="male"
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
        value={value}
        onChange={(_, value) => {
          formik.setFieldValue('sex', value);
        }}
      >
        <MyFormControlLabel
          value="male"
          control={<Radio />}
          label={<RadioLabel text={'Male'} img={FemaleImg} />}
        />
        <MyFormControlLabel
          value="female"
          control={<Radio />}
          label={<RadioLabel text={'Female'} img={MaleImg} />}
        />
      </SC.RadioGroup>
    </FormControl>
  );
}
