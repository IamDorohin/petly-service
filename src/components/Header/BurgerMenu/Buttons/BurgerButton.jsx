import { BurgerMenuButtonWrapper } from './Buttons.styled';
import { GiHamburgerMenu } from 'react-icons/gi';

export const BurgerButton = ({ onClick }) => {
  return (
    <BurgerMenuButtonWrapper onClick={onClick}>
      <GiHamburgerMenu size={'100%'} />
    </BurgerMenuButtonWrapper>
  );
};
