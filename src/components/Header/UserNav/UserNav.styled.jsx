import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RiAccountCircleFill } from 'react-icons/ri';

export const StyledContainer = styled.div`
  display: flex;
`;

export const StyledIconContainer = styled.span`
  display: flex;
  align-items: center;
  margin-right: 14px;
`;

export const StyledIcon = styled(RiAccountCircleFill)`
  color: inherit;
  background-color: inherit;
`;

export const StyledButton = styled(Link)`
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
