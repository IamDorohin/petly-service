import { useFormik } from 'formik';
import { useState, useEffect } from 'react';

import { UserDataList } from './UserDataList/UserDataList';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import selector from 'redux/auth/auth-selectors';
import { updateUserProfile } from 'services/profileApi';
// import { TiCamera } from 'react-icons/ti';
import * as SC from './UserData.styled';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

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

export const UserData = ({ userInfo }) => {
  const token = useSelector(selector.getToken);
  const [currentPhoto, setCurrentPhoto] = useState('');

  useEffect(() => {
    if (userInfo.photo) {
      setCurrentPhoto(userInfo.photo);
    }
  }, [userInfo]);

  const formik = useFormik({
    initialValues: {
      photo: {},
    },
    validationSchema: inputSchemas.photoSchema,
    onSubmit: async values => {
      const { result } = await updateUserProfile(token, values);
      setCurrentPhoto(result.photo);
    },
  });
  return (
    <SC.UserDataContainer>
      <SC.UserInfoTitle>My information:</SC.UserInfoTitle>
      <SC.UserDataContent>
        <SC.UserDataPhotoWrapper>
          <SC.UserDataPhoto src={currentPhoto} />
          <SC.UserDataEditForm onSubmit={formik.handleSubmit}>
            <IconButton
              variant="contained"
              component="label"
              src="image/*"
              aria-label="upload picture"
              // color="primary"
              // aria-label="upload picture"
              // component="label"
            >
              <input
                hidden
                accept="image/*"
                src="image/*"
                multiple
                type="file"
                name="photo"
                onChange={event => {
                  formik.setFieldValue('photo', event.currentTarget.files[0]);
                }}
                // id={currentValue}
                // hidden
                // accept="image/*"
                // type="file"
                // name={currentValue}
                // onChange={formik.handleChange}
                // value={formik.values[currentValue]}
              />
              <PhotoCamera />
            </IconButton>
            <SC.UserDataEditPhotoSubmit
              type="submit"
              onClick={formik.handleSubmit}
            >
              Edit photo
            </SC.UserDataEditPhotoSubmit>
          </SC.UserDataEditForm>
        </SC.UserDataPhotoWrapper>
        <UserDataList userInfo={userInfo} />
      </SC.UserDataContent>
    </SC.UserDataContainer>
  );
};
