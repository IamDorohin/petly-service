import {
  StyledNavContainer,
  StyledNavList,
  StyledNavItem,
  StyledLink,
} from './Nav.styled';

export const Nav = ({ onClick }) => {
  const items = [
    { text: 'News', href: '/news' },
    { text: 'Find pet', href: '/notices' },
    { text: 'Our friends', href: '/friends' },
  ];

  const elements = items.map(({ text, href }) => {
    return (
      <StyledNavItem key={text} onClick={onClick}>
        <StyledLink to={href}>{text}</StyledLink>
      </StyledNavItem>
    );
  });

  return (
    <StyledNavContainer>
      <StyledNavList>{elements}</StyledNavList>
    </StyledNavContainer>
  );
};
