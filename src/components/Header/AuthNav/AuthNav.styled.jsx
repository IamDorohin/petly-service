import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RiAccountCircleFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

export const StyledContainer = styled.div`
  margin-bottom: 60px;

  @media (min-width: 768px) {
    width: 100%;
    margin-right: 25px;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-left: 0;
  width: 251px;

  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledItem = styled.li`
  list-style: none;
  height: 35px;
  width: 100%;
  border: 2px solid rgba(245, 146, 86, 1);
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;

  :not(:last-child) {
    margin-right: 12px;
  }
  &.active,
  &:hover,
  &:focus {
    color: rgba(255, 255, 255, 1);
    background-color: rgba(245, 146, 86, 1);
  }
  @media (min-width: 768px) {
    height: 44px;
  }
`;

export const StyledButton = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.36;

  color: rgba(17, 17, 17, 1);
  padding: 8px 28px;
  text-decoration: none;
  max-width: 144px;

  @media (min-width: 768px) {
    font-size: 20px;
    max-width: 181px;
  }
  @media (min-width: 1280px) {
    padding: 10px 28px;
  }
`;

export const StyledContainerNew = styled.div`
  display: flex;
  margin-right: 25px;
`;

export const StyledIconContainer = styled.span`
  display: flex;
  align-items: center;
  color: #fff;
`;

export const StyledIcon = styled(RiAccountCircleFill)`
  color: inherit;
  background-color: inherit;
  margin-right: 14px;
  width: 17px;
  height: 17px;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const StyledButtonNew = styled(Link)`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.36;
  color: rgba(17, 17, 17, 1);
  padding: 8px 28px;
  border: 1px solid rgba(245, 146, 86, 1);
  border-radius: 40px;
  background-color: rgba(245, 146, 86, 1);
  text-decoration: none;
  max-width: 144px;
  &:hover,
  &:focus {
    background-color: #f7853f;
  }
  @media (min-width: 768px) {
    font-size: 20px;
    max-width: 181px;
  }
  @media (min-width: 1280px) {
    padding: 10px 28px;
  }
`;
