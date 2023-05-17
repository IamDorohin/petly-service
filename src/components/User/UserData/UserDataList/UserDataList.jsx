import * as SC from './UserDataList.styled';
import { UserDataItem } from './UserDataItem';
import { useState } from 'react';
import { LogOut } from '../../LogOut/LogOut';
const userData = ['Name', 'Email', 'Birthday', 'Phone', 'City'];

export const UserDataList = ({ userInfo }) => {
  const [changeInputName, setChangeInputName] = useState('');

  return (
    <SC.Wrapper>
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
      <LogOut />
    </SC.Wrapper>
  );
};
