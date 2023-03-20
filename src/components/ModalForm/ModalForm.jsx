import { Formik } from 'formik';
import {
  BrowserInput,
  Forma,
  Input,
  Inputt,
    NextBtn,
  CantBtn,
  Title,
} from './ModalForm.styled';
// import { object, string, number } from 'yup';
import {
  LocalizationProvider,
  MobileDatePicker,
  DatePicker,
} from '@mui/x-date-pickers';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';

// const userSchema = object({
//   namePet: string().required(),
//   dateOfBirth: number().required().positive().integer(),
//   breed: string().required(),
// });

const initialValues = {
  namePet: '',
  dateOfBirth: '',
  breed: '',
};

export const ModalForm = ({ showModal }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    //   console.log(actions);
    //   showModal();
    resetForm();
  };
  return (
    <div>
      <Title>Add pet</Title>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Forma>
          <label>
            Name pet
            <Input type="text" name="namePet" placeholder="Type name pet" />
          </label>
          <label>
            Date of birth
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem>
                <DatePicker label="Type date of birth" />
              </DemoItem>
            </LocalizationProvider>
          </label>

          <label>
            Breed
            <Input type="text" name="breed" placeholder="Type breed" />
          </label>
          {/* <NextBtn onClick={handleOpen}>Next</NextBtn> */}
          <CantBtn onClick={showModal} variant="contained">
            Cancel
          </CantBtn>
        </Forma>
      </Formik>
    </div>
  );
};
