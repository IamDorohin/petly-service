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
  const [isAddPetModalOpen, setIsAddPetModalOpen] = useState(false);
  const token = useSelector(selector.getToken);

  useEffect(() => {
    if (token && !isAddPetModalOpen) {
      getCurrentProfile(token)
        .then(data => {
          setCurrentUser(data);
        })
        .catch(e => console.log(e));
    }
  }, [token, isAddPetModalOpen]);

  return (
    <UserPageContainer>
      {currentUser && (
        <UserPageWrapper>
          <UserWrapper>
            <UserData
              userInfo={currentUser.user}
              setIsAddPetModalOpen={setIsAddPetModalOpen}
              isAddPetModalOpen={isAddPetModalOpen}
            />
            <LogOut />
          </UserWrapper>
          <PetsData
            petInfo={currentUser.yourPets}
            setIsAddPetModalOpen={setIsAddPetModalOpen}
            isAddPetModalOpen={isAddPetModalOpen}
          />
        </UserPageWrapper>
      )}
    </UserPageContainer>
  );
};

export default UserPage;
