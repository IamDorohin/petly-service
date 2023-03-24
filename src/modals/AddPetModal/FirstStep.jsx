import React, { useState } from 'react';
import {
  CantBtn,
  CssTDatePicker,
  FontButton,
  Input,
  NextBtn,
} from './FirstStep.styled';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const AddPetModalFirstStep = ({ formik, onSubmit, onClose }) => {
  return (
    <div>
      <label>
        Name pet
        <Input
          value={formik.values.namePet}
          onChange={formik.handleChange}
          type="text"
          name="namePet"
          placeholder="Type name pet"
        />
      </label>
      <label>
        Date of birth
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoItem>
            <CssTDatePicker
              id="dateOfBirth"
              type="dateOfBirth"
              onChange={value => {
                formik.setFieldValue('dateOfBirth', value.$d, false);
              }}
              label="dateOfBirth"
            />
          </DemoItem>
        </LocalizationProvider>
      </label>
      <label>
        Breed
        <Input
          value={formik.values.breed}
          onChange={formik.handleChange}
          type="text"
          name="breed"
          placeholder="Type breed"
        />
      </label>
      {/* <NextBtn sx={FontButton} >
              Next
            </NextBtn> */}
      <NextBtn sx={FontButton} onClick={onSubmit}>
        Next
      </NextBtn>
      <CantBtn sx={FontButton} onClick={onClose} variant="contained">
        Cancel
      </CantBtn>
    </div>
  );
};

export default AddPetModalFirstStep;
