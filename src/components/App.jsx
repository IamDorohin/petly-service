import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selector from 'redux/auth/auth-selectors';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { updateUser } from 'redux/auth/auth-operations';
import { RestrictedRoute } from './restrictedRoute';
import { PrivateRoute } from 'components/privateRoute';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'theme';
import { LoaderCat } from './Generic/LoaderCat';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const AuthPage = lazy(() => import('pages/LoginPage/AuthPage'));
const OurFriendsPage = lazy(() =>
  import('pages/OurFriendsPage/OurFriendsPage')
);
const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const UserPage = lazy(() => import('pages/UserPage/UserPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selector.getIsRefreshing);

  useEffect(() => {
    dispatch(updateUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      {isRefreshing ? (
        <LoaderCat size={'150px'} space={10} />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute component={<AuthPage />} redirectTo="/user" />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={<AuthPage />} redirectTo="/user" />
              }
            />
            <Route path="/friends" element={<OurFriendsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/notices/:categoryName" element={<NoticesPage />} />
            <Route
              path="/user"
              element={
                <PrivateRoute redirectTo="/login" component={<UserPage />} />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      )}
    </ThemeProvider>
  );
};
