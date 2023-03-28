import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selector from 'redux/auth/auth-selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selector.getIsLoggedIn);
  // const isRefreshing = useSelector(selector.getIsRefreshing);

  // const shouldRedirect = !isLoggedIn && !isRefreshing;

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
