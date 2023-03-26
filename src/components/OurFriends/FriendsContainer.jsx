import React from 'react';

import {Container,Title, FriendsPageContainer} from './OurFriends.styled';

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