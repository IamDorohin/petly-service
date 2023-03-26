import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotFound from 'components/NotFound/NotFound';
import Loader from 'components/Loader';
import Friend from './OurFriends';
import { StyledList, Item } from './OurFriends.styled';
import { selectFriends, selectError, selectLoadingStatus } from 'redux/friends/selectors';
import fetchFriends from 'redux/friends/operations';




const FriendsList = () => {
  
  const isLoading = useSelector(selectLoadingStatus);
  const friends = useSelector(selectFriends);
  const error = useSelector(selectError);
    const dispatch = useDispatch();
    
    
  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

    console.log(friends)

 
  return (
    <StyledList>
      {error && <NotFound />}
      {isLoading && <Loader />}
      {friends.length > 0 &&
        friends.map(friend => (
          <Item key={friend._id} data-aos="zoom-in">
            <Friend friend={friend} />
          </Item>
        ))}
    </StyledList>
  );
};

export default FriendsList;



