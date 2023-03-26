import React, { useState } from 'react';
import {
    BoxBtnGroup,
  BtnGroupFierst,
  ButtonBox,
  CantBtn,
  CssTDatePicker,
  Input,
  NextBtn,
} from '../AddPetModal/FirstStep.styled';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Button, ButtonGroup, FormLabel, Typography } from '@mui/material';
import { NOTICE_TYPES } from './AddNoticeModal';
import CalendarDatePicker from '../../components/CalendarDatePicker/CalendarDatePicker';
import dayjs from 'dayjs';
import { LabelFormic } from '../Modal/Modal.styled';
import { FontButton } from '../AddPetModal/SecondStep.styled';

const AddNoticeModalFirstStep = ({ formik, onSubmit, onClose }) => {
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
            onClick={() =>
              formik.setFieldValue('noticeType', NOTICE_TYPES.LOST_FOUND)
            }
          >
            Lost/found
          </BtnGroupFierst>
          <BtnGroupFierst
            sx={{ width: '65%' }}
            onClick={() =>
              formik.setFieldValue('noticeType', NOTICE_TYPES.GOOD_HANDS)
            }
          >
            Hands
          </BtnGroupFierst>
          <BtnGroupFierst
            // sx={{ width: '30%' }}
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
