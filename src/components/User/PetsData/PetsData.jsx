import { UserPageTitle } from 'components/Generic/UserPageTitle/UserPageTitle';
import { PetsList } from './PetsLIst/PetsList';
import { PetsWrapper } from './PetsData.styled';
import { AddPetButton } from './AddPetsButton/AddPetButton';
import { useState } from 'react';
import AddPetModal from 'modals/AddPetModal/AddPetModal';

export const PetsData = ({ petInfo }) => {
  const [isAddPetModalOpen, setIsAddPetModalOpen] = useState(false);

  const openAddPetModal = () => setIsAddPetModalOpen(true);
  const closeAddPetModal = () => setIsAddPetModalOpen(false);
  return (
    <PetsWrapper>
      <UserPageTitle>My pets:</UserPageTitle>
      <AddPetButton onClick={openAddPetModal} />
      <PetsList petInfo={petInfo} />
      {isAddPetModalOpen && (
        <AddPetModal isOpen={isAddPetModalOpen} onClose={closeAddPetModal} />
      )}
    </PetsWrapper>
  );
};
