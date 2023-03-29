import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selector from 'redux/auth/auth-selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selector.getIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
