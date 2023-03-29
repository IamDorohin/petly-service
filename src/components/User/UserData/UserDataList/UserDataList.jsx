import * as SC from './UserDataList.styled';
import { UserDataItem } from './UserDataItem';

const userData = ['Name', 'Email', 'Birthday', 'Phone', 'City'];

export const UserDataList = ({ userInfo }) => {
  return (
    <SC.UserDataListContainer>
      {userData.map(item => {
        const inputValue = userInfo[item.toLowerCase()];
        return (
          <UserDataItem key={item} inputName={item} inputValue={inputValue} />
        );
      })}
    </SC.UserDataListContainer>
  );
};
