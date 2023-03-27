import { PetsDataItem } from './PetsDataItem';
import * as SC from './PetsList.styled';
import { HiTrash } from 'react-icons/hi';

const petsDataTitle = ['Name', 'Date', 'Breed', 'Comments'];
const petInfo = {
  name: 'Jack',
  date: '22.04.2018',
  breed: 'Persian cat',
  comments:
    'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sitamet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
};

export const PetsList = () => {
  return (
    <SC.PetsDataList>
      <SC.PetsDataItem>
        <SC.PetsDataImage />
        <SC.PetsDataInfoWrapper>
          <SC.PetsDataInfoIcon>
            <HiTrash size={'100%'} />
          </SC.PetsDataInfoIcon>
          {petsDataTitle.map(item => {
            const inputValue = petInfo[item.toLowerCase()];
            console.log('PREV inputValue', inputValue);
            return (
              <PetsDataItem
                key={item}
                inputName={item}
                inputValue={inputValue}
              />
            );
          })}
        </SC.PetsDataInfoWrapper>
      </SC.PetsDataItem>
    </SC.PetsDataList>
  );
};
