import * as SC from './UserDataList.styled';
import { UserDataItem } from './UserDataItem';
import { useState } from 'react';

const userData = ['Name', 'Email', 'Birthday', 'Phone', 'City'];

export const UserDataList = ({ userInfo }) => {
  const [changeInputName, setChangeInputName] = useState('');

  return (
    <SC.UserDataListContainer>
      {userData.map(item => {
        const inputValue = userInfo[item.toLowerCase()];
        return (
          <UserDataItem
            key={item}
            inputName={item}
            inputValue={inputValue}
            changeInputName={changeInputName}
            setChangeInputName={setChangeInputName}
          />
        );
      })}
    </SC.UserDataListContainer>
  );
};
