import { IoLogOutOutline } from 'react-icons/io5';
import * as SC from './LogOut.styled';

export const LogOut = () => {
  return (
    <SC.LogOutContainer>
      <SC.LogOutIconWrapper>
        <IoLogOutOutline size={'100%'} />
      </SC.LogOutIconWrapper>
      Log Out
    </SC.LogOutContainer>
  );
};
