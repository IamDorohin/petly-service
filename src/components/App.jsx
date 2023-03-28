import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { updateUser } from 'redux/auth/auth-operations';
import selector from 'redux/auth/auth-selectors';
import { RestrictedRoute } from './restrictedRoute';
import { PrivateRoute } from 'components/privateRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const OurFriendsPage = lazy(() =>
  import('pages/OurFriendsPage/OurFriendsPage')
);
const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const UserPage = lazy(() => import('pages/UserPage/UserPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const isRefreshing = useSelector(selector.getIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <RestrictedRoute component={<HomePage />} redirectTo="/user" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={<RegisterPage />} redirectTo="/user" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/user" />
          }
        />
        <Route path="/friends" element={<OurFriendsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices/:categoryName" element={<NoticesPage />} />
        {/* <Route
          path="/friends"
          element={
            <PrivateRoute component={<OurFriendsPage />} redirectTo="/login" />
          }
        />
        <Route
          path="/news"
          element={
            <PrivateRoute component={<NewsPage />} redirectTo="/login" />
          }
        />
        <Route
          path="/notices/:categoryName"
          element={
            <PrivateRoute component={<NoticesPage />} redirectTo="/login" />
          }
        /> */}
        <Route
          path="/user"
          element={
            <PrivateRoute redirectTo="/login" component={<UserPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
