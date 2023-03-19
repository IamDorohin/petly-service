import React from 'react';

import friendsComponents from 'components/OurFriends';

const { FriendsContainer, FriendsList } = friendsComponents;

const OurFriendsPage = () => {
  return (
    <FriendsContainer>
      <FriendsList />
    </FriendsContainer>
  );
};



export default OurFriendsPage;
