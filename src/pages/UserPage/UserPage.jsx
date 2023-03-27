import {
  UserPageContainer,
  UserPageWrapper,
  UserWrapper,
} from './UserPage.style';
import { UserData } from 'components/User/UserData/UserData';
import { PetsData } from 'components/User/PetsData/PetsData';
import { LogOut } from 'components/User/LogOut/LogOut';

const UserPage = () => {
  return (
    <UserPageContainer>
      <UserPageWrapper>
        <UserWrapper>
          <UserData />
          <LogOut />
        </UserWrapper>
        <PetsData />
      </UserPageWrapper>
    </UserPageContainer>
  );
};

export default UserPage;
