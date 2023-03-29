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

const inputSchemas = {
  photoSchema: yup.object({ name: yup.object().required() }),
};

export const UserData = ({ userInfo }) => {
  const token = useSelector(selector.getToken);
  const [currentValue, setCurrentValue] = useState('');
  const [photo, setPhoto] = useState('');

  // console.log('token', token);
  // console.log('userInfo', userInfo);
  useEffect(() => {
    if (!userInfo.photo) setCurrentValue('photo');
  }, [userInfo]);

  console.log('currentValue', currentValue);
  const formik = useFormik({
    initialValues: {
      photo: photo,
    },
    validationSchema: inputSchemas[currentValue + 'Schema'],
    onSubmit: values => {
      console.log('values', values);
      setCurrentValue(values[currentValue]);
      formik.resetForm();
      updateUserProfile(token, values);
    },
  });
  return (
    <SC.UserDataContainer>
      <SC.UserInfoTitle>My information:</SC.UserInfoTitle>
      <SC.UserDataContent>
        <SC.UserDataPhotoWrapper>
          <SC.UserDataPhoto></SC.UserDataPhoto>
          <SC.UserDataEditForm onSubmit={formik.handleSubmit}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input
                hidden
                accept="image/*"
                type="file"

                // hidden
                // accept="image/*"
                // type="file"
                // name={currentValue}
                // value={formik.values['']}
                // onChange={formik.handleChange}
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
