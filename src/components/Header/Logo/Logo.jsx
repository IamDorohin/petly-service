import { StyledImg, StyledImgContainer } from './Logo.styled';
import logo from '../../../img/header-hero/logo.png';

export const Logo = () => {
  return (
    <StyledImgContainer>
      <a href="/petly-service">
        <StyledImg src={logo} alt="logo" />
      </a>
    </StyledImgContainer>
  );
};
