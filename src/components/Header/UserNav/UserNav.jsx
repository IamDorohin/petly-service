import {
  StyledContainer,
  StyledButton,
  StyledIconContainer,
  StyledIcon,
} from './UserNav.styled';

export const UserNav = ({ onClick }) => {
  return (
    <StyledContainer>
      <StyledButton to="/user" onClick={onClick}>
        <StyledIconContainer>
          <StyledIcon />
        </StyledIconContainer>
      </StyledButton>
    </StyledContainer>
  );
};
