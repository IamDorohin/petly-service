import { Typography } from '@mui/material';
import React from 'react';
import { AddBtn, CssTextField, FontButton } from './SecondStep.styled';
import { ReactComponent as Vector } from './icon/Vector.svg';
import { CantBtn, NextBtn } from './FirstStep.styled';

const AddPetModalSecondStep = ({ formik, onBack }) => {
  return (
    <div>
      <Typography sx={FontButton}>Add photo and some comments</Typography>
      <AddBtn
        sx={{ width: '208px', height: '208px' }}
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
      <CssTextField
        sx={{ width: '100%', height: '100%', minHeight: '100px' }}
        id="outlined-multiline-flexible"
        label="Type comments"
        name="comment"
        multiline
        maxRows={4}
        value={formik.values.comment}
        onChange={formik.handleChange}
      />
      <NextBtn sx={FontButton} onClick={onBack}>
        Back
      </NextBtn>
      <CantBtn sx={FontButton} type="submit">
        Done
      </CantBtn>
    </div>
  );
};

export default AddPetModalSecondStep;
