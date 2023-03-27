export const selectFriends = state => state.friends.friends;
export const selectLoadingStatus = state => state.friends.isLoading;
export const selectError = state => state.friends.error;

// const friendsSelectors = {
//   selectFriends,
//   selectLoadingStatus,
//   selectError,
// };
// export default friendsSelectors;
