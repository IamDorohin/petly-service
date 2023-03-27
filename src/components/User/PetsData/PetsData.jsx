import { UserPageTitle } from 'components/Generic/UserPageTitle/UserPageTitle';
import { PetsList } from './PetsLIst/PetsList';
import { PetsWrapper } from './PetsData.styled';
import { AddPetButton } from './AddPetsButton/AddPetButton';

export const PetsData = () => {
  return (
    <PetsWrapper>
      <UserPageTitle>My pets:</UserPageTitle>
      <AddPetButton />
      <PetsList />
    </PetsWrapper>
  );
};
