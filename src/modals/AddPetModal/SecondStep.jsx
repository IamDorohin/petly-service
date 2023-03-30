import { Alert, Box, Button, FormLabel, Typography } from '@mui/material';
import React, { useState } from 'react';
import { AddBtn, AddBtnTheme, FontButton, Img } from './SecondStep.styled';
import { ReactComponent as Vector } from './icon/Vector.svg';
import {
  ButtonBox,
  CantBtn,
  FormBox,
  FormBoxTheme,
  InputComment,
} from './FirstStep.styled';
import { LabelFormicAddComment } from '../Modal/Modal.styled';
import { convertBlobToBase64 } from './AddPetUtils';

const AddPetModalSecondStep = ({ formik, onBack }) => {
  const errorMessages = Object.values(formik.errors);
  const [base64Url, setBase64Url] = useState();

  return (
    <FormBox sx={FormBoxTheme}>
      <Typography sx={FontButton}>Add photo and some comments</Typography>
      <AddBtn
        sx={AddBtnTheme}
        variant="contained"
        component="label"
        aria-label="upload picture"
      >
        <input
          hidden
          accept=".jpg,.png"
          multiple
          type="file"
          name="photo"
          onChange={async event => {
            formik.setFieldValue('photo', event.currentTarget.files[0]);
            const _Base64Url = await convertBlobToBase64(
              event.currentTarget.files[0]
            );
            setBase64Url(_Base64Url);
            console.log(event.currentTarget.files[0]);
          }}
        />
        {!base64Url ? <Vector /> : <Img src={base64Url} alt="" />}
      </AddBtn>
      <FormLabel sx={LabelFormicAddComment}>
        Comments
        <InputComment
          rows="4"
          value={formik.values.comments}
          onChange={formik.handleChange}
          type="text"
          name="comments"
          placeholder="Type comments"
        />
        {/* <CssTextField
          sx={CssTextFieldTheme}
          id="outlined-multiline-flexible"
          label="Type comments"
          name="comments"
          multiline
          maxRows={4}
          value={formik.values.comments}
          onChange={formik.handleChange}
        /> */}
      </FormLabel>
      <>
        {errorMessages.length !== 0 &&
          errorMessages.map((message, index) => {
            return (
              <Alert key={message.toString()} severity="error">
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
