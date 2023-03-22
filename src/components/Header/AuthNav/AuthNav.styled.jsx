import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledContainer = styled.div`
  display: block;
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 12px;
  align-items: center;
  @media (min-width: 1300px) {
    gap: 20px;
  }
`;

export const StyledItem = styled.li`
  list-style: none;
`;

export const StyledButton = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.36;
  color: rgba(17, 17, 17, 1);
  padding: 8px 28px;
  border: 1px solid rgba(245, 146, 86, 1);
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 1);
  text-decoration: none;
  max-width: 144px;
  &.active,
  &:hover,
  &:focus {
    color: rgba(255, 255, 255, 1);
    background-color: rgba(245, 146, 86, 1);
  }
  @media (min-width: 768px) {
    font-size: 20px;
    max-width: 181px;
  }
  @media (min-width: 1300px) {
    padding: 10px 28px;
  }
`;