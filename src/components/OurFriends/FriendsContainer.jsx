import React from 'react';
import Title from 'components/Generic/Title';
import { Container, FriendsPageContainer } from './OurFriends.styled';

const FriendsContainer = ({ children }) => {
  return (
    <FriendsPageContainer>
      <Container>
        <Title>Our Friends</Title>
        {children}
      </Container>
    </FriendsPageContainer>
  );
};

export default FriendsContainer;
