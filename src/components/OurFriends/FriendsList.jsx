import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotFound from 'components/NotFound/NotFound';
import Loader from 'components/Loader';
import Friend from './OurFriends';
import { StyledList } from './OurFriends.styled';
import friendsSelectors from 'redux/friends/selectors';
import fetchFriends from 'redux/friends/operations';
const { selectFriends, selectError, selectLoadingStatus } = friendsSelectors;



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
          <li key={friend._id}>
            <Friend friend={friend} />
          </li>
        ))}
    </StyledList>
  );
};

export default FriendsList;



