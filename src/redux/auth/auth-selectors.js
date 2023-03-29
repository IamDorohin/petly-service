const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsRefreshing = state => state.auth.isRefreshing;
const getUser = state => state.auth.user;
const getToken = state => state.auth.token;

export const authSelectors = {
  getIsLoggedIn,
  getIsRefreshing,
  getUser,
  getToken,
};

export default authSelectors;
