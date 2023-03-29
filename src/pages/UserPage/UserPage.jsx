import { getCurrentProfile } from 'services/profileApi';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import selector from 'redux/auth/auth-selectors';
import {
  UserPageContainer,
  UserPageWrapper,
  UserWrapper,
} from './UserPage.style';
import { UserData } from 'components/User/UserData/UserData';
import { PetsData } from 'components/User/PetsData/PetsData';
import { LogOut } from 'components/User/LogOut/LogOut';

const UserPage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const token = useSelector(selector.getToken);

  console.log('currentUser', currentUser);
  useEffect(() => {
    if (token) {
      getCurrentProfile(token)
        .then(data => {
          setCurrentUser(data);
        })
        .catch(e => console.log(e));
    }
  }, [token]);

  return (
    <UserPageContainer>
      {currentUser && (
        <UserPageWrapper>
          <UserWrapper>
            <UserData userInfo={currentUser.user} />
            <LogOut />
          </UserWrapper>
          <PetsData petInfo={currentUser.yourPets} />
        </UserPageWrapper>
      )}
    </UserPageContainer>
  );
};

export default UserPage;
