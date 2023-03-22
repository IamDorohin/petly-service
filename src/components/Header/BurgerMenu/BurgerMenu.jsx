import { useMediaQuery } from 'react-responsive';

import {
  StyledContainer,
  StyledHeader,
  StyledUserMenu,
  StyledContainerUserMenu,
} from './BurgerMenu.styled';
import {Logo} from '../Logo/Logo';
import {Nav} from '../Nav/Nav';
import {AuthNav} from '../AuthNav/AuthNav';
// import {UserNav} from '../UserNav/UserNav';
import {CloseBurgerMenuBtn} from '../CloseBurgerMenuBtn/CloseBurgerMenuBtn';

export const BurgerMenu = ({ onClick }) => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  return (
    <StyledContainer>
      <StyledHeader>
        <Logo /> <CloseBurgerMenuBtn onClick={onClick} />
      </StyledHeader>

      <StyledContainerUserMenu>
        {!isTablet && (
          <StyledUserMenu>
            <AuthNav onClick={onClick} />
            {/* <UserNav onClick={onClick} /> */}
          </StyledUserMenu>
        )}

        <Nav onClick={onClick} />
      </StyledContainerUserMenu>
    </StyledContainer>
  );
};