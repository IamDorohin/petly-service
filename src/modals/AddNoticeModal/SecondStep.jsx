import { Alert, Box, Button, FormLabel } from '@mui/material';
import React from 'react';
import {
  AddBtn,
  AddBtnThemeNotice,
  CssTextField,
  CssTextFieldTheme,
} from '../AddPetModal/SecondStep.styled';
import { ReactComponent as Vector } from '../AddPetModal/icon/Vector.svg';
import { ButtonBox, CantBtn, Input } from '../AddPetModal/FirstStep.styled';
import SexRadios from './SexRadios';
import { LabelFormic, LabelFormicAddComment } from '../Modal/Modal.styled';
import { NOTICE_TYPES } from '../AddNoticeModal/AddNoticeModalІSchems';

const AddNoticeModalSecondStep = ({ formik, onBack }) => {
  const isSellNotice = formik.values.category === NOTICE_TYPES.SELL;
  const errorMessages = Object.values(formik.errors);

  return (
    <div>
      <SexRadios formik={formik} />

      <FormLabel sx={LabelFormic}>
        Location
        <Input
          value={formik.values.location}
          onChange={formik.handleChange}
          type="text"
          name="location"
          placeholder="Location"
        />
      </FormLabel>
      {isSellNotice && (
        <FormLabel sx={LabelFormic}>
          Price
          <Input
            value={formik.values.price}
            onChange={formik.handleChange}
            type="text"
            name="price"
            placeholder="Price"
          />
        </FormLabel>
      )}
      <FormLabel sx={LabelFormic}>
        Load the pet’s image:
        <AddBtn sx={AddBtnThemeNotice} variant="contained" comçonent="label">
          <Vector />
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            name="imgUrl"
            onChange={event => {
              formik.setFieldValue('imgUrl', event.currentTarget.files[0]);
            }}
          />
        </AddBtn>
      </FormLabel>
      <FormLabel sx={LabelFormicAddComment}>
        Comments
        {/* <Input
          value={formik.values.comment}
          onChange={formik.handleChange}
          type="text"
          name="comment"
          placeholder="Type comments"
        /> */}
        <CssTextField
          sx={CssTextFieldTheme}
          id="outlined-multiline-flexible"
          label="Type comments"
          name="comments"
          multiline
          maxRows={4}
          value={formik.values.comments}
          onChange={formik.handleChange}
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

      <Box sx={ButtonBox}>
        <Button sx={CantBtn} onClick={onBack}>
          Back
        </Button>
        <Button sx={CantBtn} type="submit">
          Done
        </Button>
      </Box>
    </div>
  );
};

export default AddNoticeModalSecondStep;
