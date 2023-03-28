import { useMediaQuery } from 'react-responsive';
import { StyledContainer, StyledHeader } from './BurgerMenu.styled';
import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { AuthNav } from '../AuthNav/AuthNav';
import { CloseBurgerMenuBtn } from './Buttons/CloseBurgerMenuBtn';

export const BurgerMenu = ({ onClick }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <StyledContainer>
      <StyledHeader>
        <Logo />
        <CloseBurgerMenuBtn className="button" onClick={() => onClick()} />
      </StyledHeader>
      {isMobile && <AuthNav onClick={() => onClick()} />}
      <Nav onClick={onClick} />
    </StyledContainer>
  );
};
