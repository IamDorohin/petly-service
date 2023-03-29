import { PetsDataItem } from './PetsDataItem';
import * as SC from './PetsList.styled';

// const petsDataTitle = ['Name', 'Date', 'Breed', 'Comments'];

export const PetsList = ({ petInfo }) => {
  return (
    <SC.PetsDataList>
      {petInfo.map(item => {
        return <PetsDataItem key={item._id} pet={item} />;
      })}
    </SC.PetsDataList>
  );
};
