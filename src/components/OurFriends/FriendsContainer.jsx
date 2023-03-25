import React from 'react';

import {StyledContainer} from './OurFriends.styled';

const FriendsContainer = ({ children }) => {
  return (
    <StyledContainer>
      <h2>Our Friends</h2>
      {children}
    </StyledContainer>
  );
};

export default FriendsContainer;