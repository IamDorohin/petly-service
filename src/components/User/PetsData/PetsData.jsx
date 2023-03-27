import { UserPageTitle } from 'components/Generic/UserPageTitle/UserPageTitle';
import { HiTrash } from 'react-icons/hi';
import * as SC from './PetsData.styled';

const petInfo = {
  Name: 'Jack',
  Date: '22.04.2018',
  Breed: 'Persian cat',
  Comments:
    'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sitamet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
};

export const PetsData = () => {
  const { Name, Date, Breed, Comments } = petInfo;

  return (
    <SC.PetsDataContainer>
      <UserPageTitle>My pets:</UserPageTitle>
      <SC.PetsDataList>
        <SC.PetsDataItem>
          <SC.PetsDataImage />
          <SC.PetsDataInfoWrapper>
            <SC.PetsDataInfoIcon>
              <HiTrash size={'100%'} />
            </SC.PetsDataInfoIcon>
            <SC.PetsDataInfoContent>
              <SC.PetsDataInfoTitle>Name:</SC.PetsDataInfoTitle>
              {Name}
            </SC.PetsDataInfoContent>
            <SC.PetsDataInfoContent>
              <SC.PetsDataInfoTitle>Date of birth: </SC.PetsDataInfoTitle>
              {Date}
            </SC.PetsDataInfoContent>
            <SC.PetsDataInfoContent>
              <SC.PetsDataInfoTitle>Breed:</SC.PetsDataInfoTitle>
              {Breed}
            </SC.PetsDataInfoContent>
            <SC.PetsDataInfoContent>
              <SC.PetsDataInfoTitle>Comments:</SC.PetsDataInfoTitle>
              {Comments.slice(0, 158) + '...'}
            </SC.PetsDataInfoContent>
          </SC.PetsDataInfoWrapper>
        </SC.PetsDataItem>
      </SC.PetsDataList>
    </SC.PetsDataContainer>
  );
};
