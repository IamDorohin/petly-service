import { useState } from 'react';
import { MdOutlineDone } from 'react-icons/md';
import { HiPencil } from 'react-icons/hi';
import * as SC from 'components/User/UserData/UserDataList/UserDataList.styled';

export const UserPhone = ({ phone, children }) => {
  const [isInput, setIsInput] = useState(true);

  return (
    <SC.UserDataListItem>
      {children}
      {isInput ? (
        <SC.UserDataListWrapper>
          <SC.UserDataListContent>{phone}</SC.UserDataListContent>
          <SC.UserDataPencilIcon>
            <HiPencil
              onClick={() => setIsInput(!isInput)}
              // className=""
            />
          </SC.UserDataPencilIcon>
        </SC.UserDataListWrapper>
      ) : (
        <SC.UserDataListWrapper>
          <SC.UserDataListInput />
          <MdOutlineDone onClick={() => setIsInput(!isInput)} />
        </SC.UserDataListWrapper>
      )}
    </SC.UserDataListItem>
  );
};
