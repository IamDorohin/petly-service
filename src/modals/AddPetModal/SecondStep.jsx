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
        aria-label="upload picture"
      >
        <Vector />
        <input
          hidden
          accept=".jpg,.png"
          multiple
          type="file"
          name="photo"
          onChange={event => {
            formik.setFieldValue('photo', event.currentTarget.files[0]);
            // console.log(URL.createObjectURL(event.currentTarget.files[0]));
            // const x = event.target.files;
            //   console.log(x);
            //   console.log(event.target.files);

            //   console.log(URL.createObjectURL(x));
            // console.log(event.currentTarget.files[0]);
          }}
        />
       { console.log(formik.values.photo)}
        {/* <img src={URL.createObjectURL(event.currentTarget.files[0])} alt="" /> */}
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
      <>
        {/* {errorMessages.length !== 0 &&
          errorMessages.map(message => {
            return (
              <Alert severity="error" autoHideDuration={2000}>
                {message}
              </Alert>
            );
          })} */}
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
