import { BurgerMenuButtonWrapper } from './Buttons.styled';
import { IoMdClose } from 'react-icons/io';

export const CloseBurgerMenuBtn = ({ onClick }) => {
  return (
    <BurgerMenuButtonWrapper onClick={onClick}>
      <IoMdClose size={'100%'} />
    </BurgerMenuButtonWrapper>
  );
};
