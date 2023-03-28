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
              formik.values.noticeType === NOTICE_TYPES.LOST_FOUND
                ? 'active'
                : null
            }
            onClick={() =>
              formik.setFieldValue('noticeType', NOTICE_TYPES.LOST_FOUND)
            }
          >
            Lost/found
          </BtnGroupFierst>
          <BtnGroupFierst
            className={
              formik.values.noticeType === NOTICE_TYPES.GOOD_HANDS
                ? 'active'
                : null
            }
            sx={{ width: '65%' }}
            onClick={() =>
              formik.setFieldValue('noticeType', NOTICE_TYPES.GOOD_HANDS)
            }
          >
            Hands
          </BtnGroupFierst>
          <BtnGroupFierst
            // sx={{ width: '30%' }}
            className={
              formik.values.noticeType === NOTICE_TYPES.SELL ? 'active' : null
            }
            onClick={() =>
              formik.setFieldValue('noticeType', NOTICE_TYPES.SELL)
            }
          >
            Sell
          </BtnGroupFierst>
        </Box>
      </Box>
      <FormLabel sx={LabelFormic}>
        Tittle of ad
        <Input
          value={formik.values.noticeTitle}
          onChange={formik.handleChange}
          type="text"
          name="noticeTitle"
          placeholder="Type name pet"
        />
      </FormLabel>
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
      <>
        {errorMessages.length !== 0 &&
          errorMessages.map((message, index) => {
            return (
              <Alert key={index} severity="error" >
                {message}
              </Alert>
            );
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
    </div>
  );
};

export default AddNoticeModalFirstStep;
