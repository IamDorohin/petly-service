import {
  StyledContainer,
  StyledList,
  StyledItem,
  StyledButton,
} from './AuthNav.styled';

export const AuthNav = ({ onClick }) => {
  const items = [
    { text: 'Login', href: '/login' },
    { text: 'Registration', href: '/register' },
  ];

  const elements = items.map(({ text, href }) => {
    return (
      <StyledItem key={text} onClick={onClick}>
        <StyledButton to={href}>{text}</StyledButton>
      </StyledItem>
    );
  });

  return (
    <StyledContainer>
      <StyledList>{elements}</StyledList>
    </StyledContainer>
  );
};
