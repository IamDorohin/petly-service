import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  StyledHeader,
  StyledMenuContainer,
  MainContainer,
} from './Header.styled';
import { Logo } from './Logo/Logo';
import { Nav } from './Nav/Nav';
import { AuthNav } from './AuthNav/AuthNav';
// import {UserNav} from './UserNav/UserNav';
import { BurgerButton } from './BurgerButton/BurgerButton';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';

export const Header = () => {
  const [showBurgerMenu, setShowBurgetMenu] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  const toggleBurgerMenu = () => {
    setShowBurgetMenu(state => !state);
  };

  const onClose = () => {
    setShowBurgetMenu(false);
  };

  return (
    <MainContainer>
      <StyledHeader>
        <Logo />
        {isDesktop && <Nav />}

        {isTablet && (
          <StyledMenuContainer>
            <AuthNav onClick={onClose} />
            {/* <UserNav onClick={onClose} /> */}
          </StyledMenuContainer>
        )}

        {!isDesktop && <BurgerButton onClick={toggleBurgerMenu} />}
      </StyledHeader>

      {!isDesktop && showBurgerMenu && (
        <BurgerMenu onClick={toggleBurgerMenu} />
      )}
    </MainContainer>
  );
};
