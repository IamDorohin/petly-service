import { UserPageTitle } from 'components/Generic/UserPageTitle/UserPageTitle';
import { PetsList } from './PetsLIst/PetsList';
import { PetsWrapper } from './PetsData.styled';

export const PetsData = () => {
  return (
    <PetsWrapper>
      <UserPageTitle>My pets:</UserPageTitle>
      <PetsList />
      {/* <AddPetButton /> кнопка додавання тваринки. Назву придумай яку хочеш */}
    </PetsWrapper>
  );
};
