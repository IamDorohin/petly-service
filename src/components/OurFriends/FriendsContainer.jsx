import React from 'react';

import {StyledContainer,Title} from './OurFriends.styled';

const FriendsContainer = ({ children }) => {
  return (
    <StyledContainer>
      <Title>Our Friends</Title>
      {children}
    </StyledContainer>
  );
};

export default FriendsContainer;