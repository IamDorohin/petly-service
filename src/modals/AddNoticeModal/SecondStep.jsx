import { Typography } from '@mui/material';
import React from 'react';
import {
  AddBtn,
  CssTextField,
  FontButton,
} from '../AddPetModal/SecondStep.styled';
import { ReactComponent as Vector } from '../AddPetModal/icon/Vector.svg';
import { CantBtn, Input, NextBtn } from '../AddPetModal/FirstStep.styled';
import SexRadios from './SexRadios';
import { NOTICE_TYPES } from './AddNoticeModal';

const AddNoticeModalSecondStep = ({ formik, onBack }) => {
  const isSellNotice = formik.values.noticeType === NOTICE_TYPES.SELL;

  return (
    <div>
      <SexRadios formik={formik} />

      <label>
        Location
        <Input
          value={formik.values.location}
          onChange={formik.handleChange}
          type="text"
          name="location"
          placeholder="Location"
        />
      </label>
      {isSellNotice && (
        <label>
          Price
          <Input
            value={formik.values.price}
            onChange={formik.handleChange}
            type="text"
            name="price"
            placeholder="Price"
          />
        </label>
      )}
      <AddBtn
        sx={{ width: '116px', height: '116px' }}
        variant="contained"
        component="label"
      >
        <Vector />
        <input
          hidden
          accept="image/*"
          multiple
          type="file"
          name="photo"
          onChange={event => {
            formik.setFieldValue('photo', event.currentTarget.files[0]);
          }}
        />
      </AddBtn>
      <label>
        Comments
        <Input
          value={formik.values.comment}
          onChange={formik.handleChange}
          type="text"
          name="comment"
          placeholder="Type comments"
        />
      </label>
      {/* <CssTextField
                          sx={{height: '40px'}}
              id="outlined-multiline-flexible"
              label="Multiline"
              multiline
              maxRows={4}
              value={name}
              onChange={event => {
                setName(event.target.value);
              }}
            /> */}
      <NextBtn sx={FontButton} onClick={onBack}>
        Back
      </NextBtn>
      <CantBtn sx={FontButton} type="submit">
        Done
      </CantBtn>
    </div>
  );
};

export default AddNoticeModalSecondStep;
