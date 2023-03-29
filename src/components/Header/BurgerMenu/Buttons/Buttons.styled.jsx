import styled from 'styled-components';

export const BurgerMenuButtonWrapper = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  width: 25px;
  height: 25px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;

    &.button {
      color: teal;
    }
  }
`;
