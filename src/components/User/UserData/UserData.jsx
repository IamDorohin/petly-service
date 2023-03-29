import { UserDataList } from './UserDataList/UserDataList';
import { TiCamera } from 'react-icons/ti';
import * as SC from './UserData.styled';

// const UserInfo = {
//   Name: 'Anna',
//   Email: 'anna00@gmail.com',
//   Birthday: '00.00.0000',
//   Phone: '+380980000000',
//   City: 'Kyiv',
// };

export const UserData = ({ userInfo }) => {
  return (
    <SC.UserDataContainer>
      <SC.UserInfoTitle>My information:</SC.UserInfoTitle>
      <SC.UserDataContent>
        <SC.UserDataPhotoWrapper>
          <SC.UserDataPhoto></SC.UserDataPhoto>
          <SC.UserDataEditContainer>
            <SC.UserDataEditIcon>
              <TiCamera color="F59256" size={'100%'} />
            </SC.UserDataEditIcon>
            Edit photo
          </SC.UserDataEditContainer>
        </SC.UserDataPhotoWrapper>
        <UserDataList userInfo={userInfo} />
      </SC.UserDataContent>
    </SC.UserDataContainer>
  );
};
