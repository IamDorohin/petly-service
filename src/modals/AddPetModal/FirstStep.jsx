import { ButtonBox, CantBtn, FierstStepDiv, Input } from './FirstStep.styled';
import CalendarDatePicker from '../../components/CalendarDatePicker/CalendarDatePicker';
import dayjs from 'dayjs';
import { Box } from '@mui/system';
import { Alert, Button, FormLabel } from '@mui/material';
import { LabelFormic } from '../Modal/Modal.styled';

const AddPetModalFirstStep = ({ formik, onSubmit, onClose, errorMessages }) => {
  return (
    <FierstStepDiv>
      <FormLabel sx={LabelFormic}>
        Name pet
        <Input
          value={formik.values.name}
          onChange={formik.handleChange}
          type="text"
          name="name"
          placeholder="Type name pet"
        />
      </FormLabel>

      <CalendarDatePicker
        label="Date of birth"
        value={formik.values.date}
        onChange={value => {
          formik.setFieldValue('date', dayjs(value.$d), false);
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
      <>
        {errorMessages.length !== 0 &&
          errorMessages.map((message, index) => {
            return <Alert key={message.toString()}>{message}</Alert>;
          })}
      </>
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
