import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Logo } from './Logo/Logo';
import { Nav } from './Nav/Nav';
import { AuthNav } from './AuthNav/AuthNav';
import { BurgerButton } from './BurgerMenu/Buttons/BurgerButton';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';

import { StyledHeader, MainContainer, Wrapper } from './Header.styled';

export const Header = () => {
  const [showBurgerMenu, setShowBurgetMenu] = useState(false);

  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const toggleBurgerMenuHandler = () => {
    setShowBurgetMenu(!showBurgerMenu);
  };

  const responsiveToggleHandler = value => {
    setShowBurgetMenu(false);
  };
  console.log('showBurgerMenu', showBurgerMenu);
  return (
    <MainContainer>
      <StyledHeader>
        <Logo />
        {isDesktop && <Nav />}
        <Wrapper>
          {isTablet && <AuthNav onClick={toggleBurgerMenuHandler} />}
          {showBurgerMenu && !isDesktop && (
            <BurgerMenu
              onClick={toggleBurgerMenuHandler}
              hiddenBurgerMenu={responsiveToggleHandler}
            />
          )}
          {!showBurgerMenu && !isDesktop && (
            <BurgerButton onClick={toggleBurgerMenuHandler} />
          )}
        </Wrapper>
      </StyledHeader>
    </MainContainer>
  );
};
