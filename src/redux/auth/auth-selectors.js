const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsRefreshing = state => state.auth.isRefreshing;
const getUser = state => state.auth.user;

export const authSelectors = {
  getIsLoggedIn,
  getIsRefreshing,
  getUser,
};

export default authSelectors;
