import { IoLogOutOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import * as SC from './LogOut.styled';

export const LogOut = () => {
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logOut());
  };

  return (
    <SC.LogOutContainer onClick={logOutHandler}>
      <SC.LogOutIconWrapper>
        <IoLogOutOutline size={'100%'} />
      </SC.LogOutIconWrapper>
      <SC.LogOutIconTitle> Log Out</SC.LogOutIconTitle>
    </SC.LogOutContainer>
  );
};
