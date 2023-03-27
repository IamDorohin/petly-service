import { UserPageContainer, UserWrapper } from './UserPage.style';
import { UserData } from 'components/User/UserData/UserData';
import { PetsData } from 'components/User/PetsData/PetsData';
import { LogOut } from 'components/User/LogOut/LogOut';

const UserPage = () => {
  return (
    <UserPageContainer>
      <UserWrapper>
        <UserData />
        <LogOut />
      </UserWrapper>
      <PetsData />
    </UserPageContainer>
  );
};

export default UserPage;
