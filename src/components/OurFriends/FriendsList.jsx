import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import friendsSelectors from 'redux/OurFriends/selectors';
import fetchFriends from 'redux/OurFriends/operations';
import NotFound from 'components/NotFound/NotFound';
import Loader from 'components/Loader';
import Friend from './OurFriends';
import styles from './OurFriends.styled';

const { StyledList } = styles;
const { selectFriends, selectError, selectLoadingStatus } = friendsSelectors;

const FriendsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingStatus);
  const friends = useSelector(selectFriends);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

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