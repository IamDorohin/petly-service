import { Alert, Box, Button, FormLabel, Typography } from '@mui/material';
import React from 'react';
import {
  AddBtn,
  AddBtnTheme,
  CssTextField,
  CssTextFieldTheme,
  FontButton,
} from './SecondStep.styled';
import { ReactComponent as Vector } from './icon/Vector.svg';
import { ButtonBox, CantBtn, FormBox, FormBoxTheme } from './FirstStep.styled';
import { LabelFormicAddComment } from '../Modal/Modal.styled';

const AddPetModalSecondStep = ({ formik, onBack }) => {
  const errorMessages = Object.values(formik.errors);

  return (
    <FormBox sx={FormBoxTheme}>
      <Typography sx={FontButton}>Add photo and some comments</Typography>
      <AddBtn
        sx={AddBtnTheme}
        variant="contained"
        component="label"
        src="image/*"
        aria-label="upload picture"
      >
        {/* <img src={accept} alt={item.title} /> */}
        <Vector />
        <input
          hidden
          accept="image/*"
          src="image/*"
          multiple
          type="file"
          name="petsImageUrl"
          onChange={event => {
            formik.setFieldValue('petsImageUrl', event.currentTarget.files[0]);
          }}
        />
      </AddBtn>
      <FormLabel sx={LabelFormicAddComment}>
        Comments
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
              <Alert key={message} severity="error" autoHideDuration={2000}>
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
    </FormBox>
  );
};

export default AddPetModalSecondStep;
