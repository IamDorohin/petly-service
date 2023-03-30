import { Alert, Box, Button, FormLabel } from '@mui/material';
import React, { useState } from 'react';
import {
  AddBtn,
  AddBtnThemeNotice,
  Img,
} from '../AddPetModal/SecondStep.styled';
import { ReactComponent as Vector } from '../AddPetModal/icon/Vector.svg';
import {
  ButtonBox,
  CantBtn,
  Input,
  InputComment,
} from '../AddPetModal/FirstStep.styled';
import SexRadios from './SexRadios';
import { LabelFormic, LabelFormicAddComment } from '../Modal/Modal.styled';
import { NOTICE_TYPES } from '../AddNoticeModal/AddNoticeModalІSchems';
import { convertBlobToBase64 } from '../AddPetModal/AddPetUtils';

const AddNoticeModalSecondStep = ({ formik, onBack }) => {
  const isSellNotice = formik.values.category === NOTICE_TYPES.SELL;
  const errorMessages = Object.values(formik.errors);
  const [base64Url, setBase64Url] = useState();
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
          placeholder="Сity, Region"
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
        Load the pet image:
        <AddBtn sx={AddBtnThemeNotice} variant="contained" component="label">
          <input
            hidden
            accept="image/*"
            src="image/*"
            multiple
            type="file"
            name="imgUrl"
            onChange={async event => {
              formik.setFieldValue('imgUrl', event.currentTarget.files[0]);
              const _Base64Url = await convertBlobToBase64(
                event.currentTarget.files[0]
              );
              setBase64Url(_Base64Url);
            }}
          />
          {!base64Url ? <Vector /> : <Img src={base64Url} alt="" />}
        </AddBtn>
      </FormLabel>
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
    </div>
  );
};

export default AddNoticeModalSecondStep;
