import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NoResult from 'components/Generic/NoResult/NoResult';
import Friend from './OurFriends';
import { List, Item } from './OurFriends.styled';
import { getOurFriends } from 'services/friendsAPI';

const FriendsList = () => {
  const dispatch = useDispatch();

  const [friendsArray, setFriendsArray] = useState([]);

  useEffect(() => {
    getOurFriends()
      .then(data => {
        setFriendsArray(data.data.result);
      })
      .catch(error => console.log(error));
  }, [dispatch]);

  return (
    <List>
      {friendsArray === [] && <NoResult />}
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
