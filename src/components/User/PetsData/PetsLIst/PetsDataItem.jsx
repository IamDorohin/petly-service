import * as SC from './PetsList.styled';
import { HiTrash } from 'react-icons/hi';
import dayjs from 'dayjs';

export const PetsDataItem = ({ pet, handler }) => {
  const {
    _id,
    name,
    breed,
    comments,
    petsImageUrl,
    birthdate = '--/--/--',
  } = pet;

  const formatDate = dayjs(birthdate).format('DD.MM.YYYY');
  return (
    <SC.PetsDataItem>
      <SC.PetsDataImage src={petsImageUrl} />
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
          {formatDate}
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
