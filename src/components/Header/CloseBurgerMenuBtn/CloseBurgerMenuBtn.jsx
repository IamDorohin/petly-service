import { StyledImg, StyledImgContainer } from './CloseBurgerMenuBtn.styled';
import close from '../../../img/header-hero/close.png';

export const CloseBurgerMenuBtn = ({ onClick }) => {
  return (
    <StyledImgContainer onClick={onClick}>
      <StyledImg src={close} alt="close burger button" />
    </StyledImgContainer>
  );
};