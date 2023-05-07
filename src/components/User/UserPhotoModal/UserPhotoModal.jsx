import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import selector from 'redux/auth/auth-selectors';
import { updateUserProfile } from 'services/profileApi';
import * as SC from './UserPhotoModal.styled';
import { TfiClose } from 'react-icons/tfi';
import { convertBlobToBase64 } from 'modals/AddPetModal/AddPetUtils';

const FILE_SIZE = 1000000;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const inputSchemas = {
  photoSchema: yup
    .mixed()
    .test(
      'fileSize',
      'Only documents up to 1MB are permitted',
      value => value === null || (value && value.size <= FILE_SIZE)
    )
    .test(
      'fileFormat',
      'Unsupported file type',
      value =>
        value === null || (value && SUPPORTED_FORMATS.includes(value.type))
    )
    .nullable(),
};

export const UserPhotoModal = ({ userInfo, handler, open, handleClose }) => {
  const token = useSelector(selector.getToken);
  const [base64Url, setBase64Url] = useState();

  const formik = useFormik({
    initialValues: {
      photo: null,
    },
    validationSchema: inputSchemas.photoSchema,
    onSubmit: async values => {
      console.log('values', values);
      const { result } = await updateUserProfile(token, values);
      handler(result.photo);
    },
  });

  const DeletePhotoHandler = async () => {
    const test = { photo: { photo: null } };
    const { result } = await updateUserProfile(token, test);
    console.log('result', result);
  };

  console.log('userInfo.photo', userInfo.photo);
  return (
    <SC.FormContainer>
      <SC.FormInputCloseIcon onClick={handleClose}>
        <TfiClose size={'50%'} />
      </SC.FormInputCloseIcon>
      <SC.Form>
        {userInfo.photo ? (
          <SC.UserDataPhoto src={userInfo.photo} />
        ) : (
          <SC.FormInputWrapper
            variant="contained"
            component="label"
            src="image/*"
            aria-label="upload picture"
          >
            <SC.FormInput
              hidden
              accept="image/*"
              src="image/*"
              multiple
              type="file"
              name="photo"
              onChange={async event => {
                formik.setFieldValue('photo', event.currentTarget.files[0]);
                const _Base64Url = await convertBlobToBase64(
                  event.currentTarget.files[0]
                );
                setBase64Url(_Base64Url);
              }}
            />

            <SC.FormInputAddIcon>
              {formik.values.photo ? (
                <img src={base64Url} alt="" style={{ width: '100%' }} />
              ) : (
                <SC.AddIcon className="forHover" />
              )}
            </SC.FormInputAddIcon>
          </SC.FormInputWrapper>
        )}
        <SC.FormButtonsWrapper>
          <SC.FormInputSubmit type="submit" onClick={formik.handleSubmit}>
            Upload new photo
          </SC.FormInputSubmit>
          <SC.FormInputSubmit
            type="button"
            onClick={() => DeletePhotoHandler()}
          >
            Delete photo
          </SC.FormInputSubmit>
        </SC.FormButtonsWrapper>
      </SC.Form>
    </SC.FormContainer>
    // </Modal>
  );
};
