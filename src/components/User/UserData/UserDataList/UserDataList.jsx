import * as SC from './UserDataList.styled';
import { UserDataItem } from './UserDataItem';

const userData = ['Name', 'Email', 'Birthday', 'Phone', 'City'];
const userInfo = {
  name: 'Andrew',
  email: 'krasauchik@gmail.com',
  birthday: 'i dont know kstati',
  phone: 'ne skazhu nikomy',
  city: 'Muckachevo',
};

export const UserDataList = () => {
  // Тут скоріше за все буде йти фетч

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
