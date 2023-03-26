import React, { useState } from 'react';
import {
    ButtonBox,
  CantBtn,
  CssTDatePicker,
  FierstStepDiv,
  FontButton,
  FormBox,
  Input,
  NextBtn,
} from './FirstStep.styled';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CalendarDatePicker from '../../components/CalendarDatePicker/CalendarDatePicker';
import dayjs from 'dayjs';
import { Box } from '@mui/system';
import { Button, FormLabel } from '@mui/material';
import { LabelFormic } from '../Modal/Modal.styled';

const AddPetModalFirstStep = ({ formik, onSubmit, onClose }) => {
  return (
    <FierstStepDiv>
      <FormLabel sx={LabelFormic}>
        Name pet
        <Input
          value={formik.values.namePet}
          onChange={formik.handleChange}
          type="text"
          name="namePet"
          placeholder="Type name pet"
        />
      </FormLabel>

      <CalendarDatePicker
        label="Date of birth"
        value={formik.values.dateOfBirth}
        onChange={value => {
          formik.setFieldValue('dateOfBirth', dayjs(value.$d), false);
        }}
      />
      <FormLabel sx={LabelFormic}>
        Breed
        <Input
          value={formik.values.breed}
          onChange={formik.handleChange}
          type="text"
          name="breed"
          placeholder="Type breed"
        />
      </FormLabel>
      <Box sx={ButtonBox}>
        <Button sx={CantBtn} onClick={onClose} variant="contained">
          Cancel
        </Button>
        <Button sx={CantBtn} onClick={onSubmit}>
          Next
        </Button>
      </Box>
    </FierstStepDiv>
  );
};

export default AddPetModalFirstStep;
