import {
  StyledNavContainer,
  StyledNavList,
  StyledNavItem,
  StyledLink,
} from './Nav.styled';

const items = [
  { text: 'News', href: '/news' },
  { text: 'Find pet', href: '/notices/sell' },
  { text: 'Our friends', href: '/friends' },
];

export const Nav = ({ onClick }) => {
  return (
    <StyledNavContainer>
      <StyledNavList>
        {items.map(({ text, href }) => {
          return (
            <StyledNavItem key={text} onClick={onClick}>
              <StyledLink to={href}>{text}</StyledLink>
            </StyledNavItem>
          );
        })}
      </StyledNavList>
    </StyledNavContainer>
  );
};
