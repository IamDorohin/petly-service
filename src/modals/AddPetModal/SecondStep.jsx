import { Box, Button, FormLabel, Typography } from '@mui/material';
import React from 'react';
import {
  AddBtn,
  AddBtnTheme,
  CssTextField,
  CssTextFieldTheme,
  FontButton,
} from './SecondStep.styled';
import { ReactComponent as Vector } from './icon/Vector.svg';
import { ButtonBox, CantBtn, FormBox, FormBoxTheme, NextBtn } from './FirstStep.styled';
import { LabelFormic, LabelFormicAddComment } from '../Modal/Modal.styled';

const AddPetModalSecondStep = ({ formik, onBack }) => {
  return (
    <FormBox sx={FormBoxTheme}>
      <Typography sx={FontButton}>Add photo and some comments</Typography>
      <AddBtn sx={AddBtnTheme} variant="contained" component="label">
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
      <FormLabel sx={LabelFormicAddComment}>
        Comments
        <CssTextField
          sx={CssTextFieldTheme}
          id="outlined-multiline-flexible"
          label="Type comments"
          name="comment"
          multiline
          maxRows={4}
          value={formik.values.comment}
          onChange={formik.handleChange}
        />
      </FormLabel>
      <Box sx={ButtonBox}>
        <Button sx={CantBtn} onClick={onBack}>
          Back
        </Button>
        <Button sx={CantBtn} type="submit">
          Done
        </Button>
      </Box>
    </FormBox>
  );
};

export default AddPetModalSecondStep;
