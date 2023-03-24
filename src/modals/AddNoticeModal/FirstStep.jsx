import React, { useState } from 'react';
import {
  CantBtn,
  CssTDatePicker,
  FontButton,
  Input,
  NextBtn,
} from '../AddPetModal/FirstStep.styled';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { NOTICE_TYPES } from './AddNoticeModal';
import CalendarDatePicker from '../../components/CalendarDatePicker/CalendarDatePicker';
import dayjs from 'dayjs';

const AddNoticeModalFirstStep = ({ formik, onSubmit, onClose }) => {
  return (
    <div>
      <Typography sx={FontButton}>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur
      </Typography>
      {/* <CantBtn
        sx={{ FontButton, '& > *': {
            m: 1,
          }, }}
        onClick={onClose}
        variant="contained"
      >
        lost/found
      </CantBtn>
      <CantBtn sx={FontButton} onClick={onClose} variant="contained">
        in good hands
      </CantBtn>
      <CantBtn sx={FontButton} onClick={onClose} variant="contained">
        sell
      </CantBtn> */}
      <Box
        sx={{
          //   display: 'flex',
          //   flexDirection: 'column',
          //   alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup size="large" aria-label="large button group">
          <Button
            sx={{ width: 155 }}
            onClick={() =>
              formik.setFieldValue('noticeType', NOTICE_TYPES.LOST_FOUND)
            }
          >
            Lost/found
          </Button>
          <Button
            sx={{ width: 155 }}
            onClick={() =>
              formik.setFieldValue('noticeType', NOTICE_TYPES.GOOD_HANDS)
            }
          >
            Hands
          </Button>
          <Button
            sx={{ width: 155 }}
            onClick={() =>
              formik.setFieldValue('noticeType', NOTICE_TYPES.SELL)
            }
          >
            Sell
          </Button>
        </ButtonGroup>
      </Box>
      <label>
        Tittle of ad
        <Input
          value={formik.values.noticeTitle}
          onChange={formik.handleChange}
          type="text"
          name="noticeTitle"
          placeholder="Type name pet"
        />
      </label>
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
      <CalendarDatePicker
        label="Date of birth"
        value={formik.values.dateOfBirth}
        onChange={value => {
          formik.setFieldValue('dateOfBirth', dayjs(value.$d), false);
        }}
      />
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

export default AddNoticeModalFirstStep;
