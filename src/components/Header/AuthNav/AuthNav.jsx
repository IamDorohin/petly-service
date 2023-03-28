import { useSelector } from 'react-redux';
import selector from 'redux/auth/auth-selectors';
import {
  StyledContainer,
  StyledList,
  StyledItem,
  StyledButton,
  StyledContainerNew,
  StyledButtonNew,
  StyledIconContainer,
  StyledIcon,
} from './AuthNav.styled';

const items = [
  { text: 'Login', href: '/login' },
  { text: 'Registration', href: '/register' },
];

export const AuthNav = ({ onClick }) => {
  const isLoggedIn = useSelector(selector.getIsLoggedIn);

  return isLoggedIn ? (
    <StyledContainerNew>
      <StyledButtonNew to="/user" onClick={onClick}>
        <StyledIconContainer>
          <StyledIcon />
          Account
        </StyledIconContainer>
      </StyledButtonNew>
    </StyledContainerNew>
  ) : (
    <StyledContainer>
      <StyledList>
        {items.map(({ text, href }) => {
          return (
            <StyledItem key={text}>
              <StyledButton to={href}>{text}</StyledButton>
            </StyledItem>
          );
        })}
      </StyledList>
    </StyledContainer>
  );
};

// ---------- Sign buttons
