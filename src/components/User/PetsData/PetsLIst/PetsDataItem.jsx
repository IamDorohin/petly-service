import * as SC from './PetsList.styled';
import { HiTrash } from 'react-icons/hi';

export const PetsDataItem = ({ pet, handler }) => {
  const { _id, name, breed, comments, birthdate = '--/--/--' } = pet;

  return (
    <SC.PetsDataItem>
      <SC.PetsDataImage />
      <SC.PetsDataInfoWrapper>
        <SC.PetsDataInfoIcon onClick={() => handler(_id)}>
          <HiTrash size={'100%'} />
        </SC.PetsDataInfoIcon>
        <SC.PetsDataInfoContent>
          <SC.PetsDataInfoTitle>Name:</SC.PetsDataInfoTitle>
          {name}
        </SC.PetsDataInfoContent>
        <SC.PetsDataInfoContent>
          <SC.PetsDataInfoTitle>Date of birth:</SC.PetsDataInfoTitle>
          {birthdate}
        </SC.PetsDataInfoContent>
        <SC.PetsDataInfoContent>
          <SC.PetsDataInfoTitle>Breed:</SC.PetsDataInfoTitle>
          {breed}
        </SC.PetsDataInfoContent>
        <SC.PetsDataInfoContent>
          <SC.PetsDataInfoTitle>Comments</SC.PetsDataInfoTitle>
          {comments.slice(0, 158) + '...'}
        </SC.PetsDataInfoContent>
      </SC.PetsDataInfoWrapper>
    </SC.PetsDataItem>
  );
};
