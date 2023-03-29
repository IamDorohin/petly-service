import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavContainer = styled.div`
  width: 100%;
`;

export const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  padding-left: 0;

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const StyledNavItem = styled.li`
  list-style: none;

  :not(:last-child) {
    margin-bottom: 40px;
  }

  @media (min-width: 768px) {
    :not(:last-child) {
      margin-bottom: 40px;
    }
  }

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: center;
    :not(:last-child) {
      margin-bottom: 0;
      margin-right: 80px;
    }
  }
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
    font-weight: 700;
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 65px;
    letter-spacing: 0.04em;
  }
  @media (min-width: 1280px) {
    font-size: 20px;

    &.active {
      text-decoration: underline;
    }
  }
`;
