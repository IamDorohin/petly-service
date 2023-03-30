import { useState } from 'react';
import { UserPhotoModal } from '../UserPhotoModal/UserPhotoModal';
import { UserDataList } from './UserDataList/UserDataList';
import * as SC from './UserData.styled';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export const UserData = ({ userInfo }) => {
  const [currentPhoto, setCurrentPhoto] = useState(userInfo.photo);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getCurrentPhotoHandler = file => {
    setCurrentPhoto(file);
    setIsModalOpen(false);
  };

  console.log('isModalOpen', isModalOpen);
  return (
    <SC.UserDataContainer>
      <SC.UserInfoTitle>My information:</SC.UserInfoTitle>
      <SC.UserDataContent>
        <SC.UserDataPhotoWrapper>
          <SC.UserDataPhoto src={currentPhoto} />
        </SC.UserDataPhotoWrapper>
        <SC.UserDataEditPhotoButton onClick={() => setIsModalOpen(true)}>
          <SC.UserDataEditIcon>
            <PhotoCamera />
          </SC.UserDataEditIcon>
          <SC.UserDataEditText>Edit photo</SC.UserDataEditText>
        </SC.UserDataEditPhotoButton>
        <UserDataList userInfo={userInfo} />
      </SC.UserDataContent>
      {isModalOpen && (
        <UserPhotoModal
          userInfo={userInfo}
          handler={getCurrentPhotoHandler}
          open={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
        />
      )}
    </SC.UserDataContainer>
  );
};
