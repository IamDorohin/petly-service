import { removeUserPet } from 'services/profileApi';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import selector from 'redux/auth/auth-selectors';
import { PetsDataItem } from './PetsDataItem';
import * as SC from './PetsList.styled';

export const PetsList = ({ petInfo }) => {
  const token = useSelector(selector.getToken);
  const [petsList, setPetsList] = useState([]);

  useEffect(() => {
    if (petInfo) setPetsList(petInfo);
  }, [petInfo]);

  const deletPetHandler = async id => {
    try {
      await removeUserPet(token, id);
      const newList = petsList.filter(pet => pet._id !== id);
      setPetsList(newList);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SC.PetsDataList>
      {petsList.map(item => {
        return (
          <PetsDataItem key={item._id} pet={item} handler={deletPetHandler} />
        );
      })}
    </SC.PetsDataList>
  );
};
