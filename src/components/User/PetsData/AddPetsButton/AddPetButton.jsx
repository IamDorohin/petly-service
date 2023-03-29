import { AddPetBtn } from './AddPetButton.styled';
import { AddPetBtnIcon } from './AddPetButton.styled';

export const AddPetButton = ({ onClick }) => {
  return (
    <AddPetBtn onClick={onClick}>
      Add pet
      <AddPetBtnIcon />
    </AddPetBtn>
  );
};
