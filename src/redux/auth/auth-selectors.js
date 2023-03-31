const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsRefreshing = state => state.auth.isRefreshing;
const getUser = state => state.auth.user;
const getToken = state => state.auth.token;
const getError = state => state.auth.error;

export const authSelectors = {
  getIsLoggedIn,
  getIsRefreshing,
  getUser,
  getToken,
  getError,
};

export default authSelectors;
