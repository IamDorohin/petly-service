import {
  BoxBtnGroup,
  BtnGroupFierst,
  ButtonBox,
  CantBtn,
  Input,
} from '../AddPetModal/FirstStep.styled';

import { Alert, Box, Button, FormLabel, Typography } from '@mui/material';
import CalendarDatePicker from '../../components/CalendarDatePicker/CalendarDatePicker';
import dayjs from 'dayjs';
import { LabelFormic } from '../Modal/Modal.styled';
import { FontButton } from '../AddPetModal/SecondStep.styled';
import { NOTICE_TYPES } from './AddNoticeModalІSchems';

const AddNoticeModalFirstStep = ({
  formik,
  onSubmit,
  onClose,
  errorMessages,
}) => {
  return (
    <div>
      <Typography sx={FontButton}>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur
      </Typography>
      <Box>
        <Box sx={BoxBtnGroup}>
          <BtnGroupFierst
            sx={{ width: '50' }}
            className={
              formik.values.category === NOTICE_TYPES.LOST_FOUND
                ? 'active'
                : null
            }
            onClick={() =>
              formik.setFieldValue('category', NOTICE_TYPES.LOST_FOUND)
            }
          >
            Lost/found
          </BtnGroupFierst>
          <BtnGroupFierst
            className={
              formik.values.category === NOTICE_TYPES.GOOD_HANDS
                ? 'active'
                : null
            }
            sx={{ width: '65%' }}
            onClick={() =>
              formik.setFieldValue('category', NOTICE_TYPES.GOOD_HANDS)
            }
          >
            Hands
          </BtnGroupFierst>
          <BtnGroupFierst
            // sx={{ width: '30%' }}
            className={
              formik.values.category === NOTICE_TYPES.SELL ? 'active' : null
            }
            onClick={() => formik.setFieldValue('category', NOTICE_TYPES.SELL)}
          >
            Sell
          </BtnGroupFierst>
        </Box>
      </Box>
      <FormLabel sx={LabelFormic}>
        Tittle of ad
        <Input
          value={formik.values.title}
          onChange={formik.handleChange}
          type="text"
          name="title"
          placeholder="Type name pet"
        />
      </FormLabel>
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
        value={formik.values.birthdate}
        onChange={value => {
          formik.setFieldValue('birthdate', dayjs(value.$d), false);
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
          errorMessages.map(message => {
            return (
              <Alert severity="error" autoHideDuration={2000}>
                {message}
              </Alert>
            );
          })}
      </>
      {/* <NextBtn sx={FontButton} >
              Next
            </NextBtn> */}
      <Box sx={ButtonBox}>
        <Button sx={CantBtn} onClick={onClose} variant="contained">
          Cancel
        </Button>
        <Button sx={CantBtn} onClick={onSubmit}>
          Next
        </Button>
      </Box>
    </div>
  );
};

export default AddNoticeModalFirstStep;
