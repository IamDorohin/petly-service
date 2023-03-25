const selectFriends = state => state.friends.friends;
const selectLoadingStatus = state => state.friends.isLoading;
const selectError = state => state.friends.error;

const friendsSelectors = {
  selectFriends,
  selectLoadingStatus,
  selectError,
};
export default friendsSelectors;
