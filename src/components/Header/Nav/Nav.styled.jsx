import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavContainer = styled.div``;

export const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  @media (min-width: 768px) {
    gap: 60px;
  }
  @media (min-width: 1300px) {
    flex-direction: row;
    gap: 80px;
  }
`;

export const StyledNavItem = styled.li`
  list-style: none;
`;

export const StyledLink = styled(NavLink)`
  font-size: 32px;
  line-height: 1.36;
  font-weight: 500;
  color: rgba(24, 28, 39, 1);
  text-decoration: none;
  &:hover,
  &:focus {
    color: rgba(245, 146, 86, 1);
  }
  &.active {
    color: rgba(245, 146, 86, 1);
    font-weight: 500;
  }
  @media (min-width: 768px) {
    font-size: 500;
  }
  @media (min-width: 1300px) {
    font-size: 20px;

    &.active {
      text-decoration: underline;
    }
  }
`;