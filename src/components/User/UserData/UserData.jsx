import { UserDataList } from './UserDataList/UserDataList';
import { TiCamera } from 'react-icons/ti';
import * as SC from './UserData.styled';

export const UserData = ({ userInfo }) => {
  return (
    <SC.UserDataContainer>
      <SC.UserInfoTitle>My information:</SC.UserInfoTitle>
      <SC.UserDataContent>
        <SC.UserDataPhotoWrapper>
          <SC.UserDataPhoto></SC.UserDataPhoto>
          <SC.UserDataEditForm>
            <SC.UserDataEditIcon>
              <TiCamera color="F59256" size={'100%'} />
            </SC.UserDataEditIcon>
            {/* <label htmlFor="file">Change photo</label> */}
            {/* <SC.UserDataEditInput
              placeholder="Edit photo"
              type="file"
              name="file"
              accept=".jpg, .jpeg, .png"
              id="image_uploads"
            /> */}
          </SC.UserDataEditForm>
        </SC.UserDataPhotoWrapper>
        <UserDataList userInfo={userInfo} />
      </SC.UserDataContent>
    </SC.UserDataContainer>
  );
};
