import * as SC from './PetsList.styled';

export const PetsDataItem = ({ inputName, inputValue }) => {
  // console.log('inputName', inputName);
  // console.log('inputValue', inputValue);
  return (
    <SC.PetsDataInfoContent>
      <SC.PetsDataInfoTitle>{`${inputName}:`}</SC.PetsDataInfoTitle>
      {inputValue.slice(0, 158) + '...'}
    </SC.PetsDataInfoContent>
  );
};
