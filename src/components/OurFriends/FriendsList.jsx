import { useState, useEffect } from 'react';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
import NoResult from 'components/Generic/NoResult/NoResult';
// import Loader from 'components/Loader';
import Friend from './OurFriends';
import { List, Item } from './OurFriends.styled';
// import {
//   selectFriends,
//   selectError,
//   selectLoadingStatus,
// } from 'redux/friends/selectors';
// import fetchFriends from 'redux/friends/operations';
import { getOurFriends } from 'services/friendsAPI';

const FriendsList = () => {
  // const isLoading = useSelector(selectLoadingStatus);
  // const friends = useSelector(selectFriends);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();

  const [friendsArray, setFriendsArray] = useState([]);

  useEffect(() => {
    // dispatch(fetchFriends());
    getOurFriends()
      .then(data => {
        setFriendsArray(data.data.result);
      })
      .catch(error => console.log(error));
  }, [dispatch]);

  // console.log(friends)

  return (
    <List>
      {friendsArray === [] && <NoResult />}
      {/* {isLoading && <Loader />} */}
      {friendsArray.length > 0 &&
        friendsArray.map(friend => (
          <Item key={friend._id}>
            <Friend friend={friend} />
          </Item>
        ))}
    </List>
  );
};

export default FriendsList;

// data-aos="zoom-in"
