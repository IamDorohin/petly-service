import { lazy, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Button } from '@mui/material';
import AddPetModal from '../modals/AddPetModal/AddPetModal';
import AddNoticeModal from 'modals/AddNoticeModal/AddNoticeModal';
import { ThemeProvider } from '@mui/system';
import selectTheme from 'redux/theme/selectors';
import { useSelector } from 'react-redux';

import themes from '../theme';
const { lightTheme, darkTheme } = themes;

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
  const [isAddPetModalOpen, setIsAddModalOpen] = useState(false);
  const [isAddNoticeModalOpen, setIsAddNoticeModalOpen] = useState(false);

  const openAddPetModal = () => setIsAddModalOpen(true);
  const closeAddPetModal = () => setIsAddModalOpen(false);

  const openAddNoticeModal = () => setIsAddNoticeModalOpen(true);
  const closeAddNoticeModal = () => setIsAddNoticeModalOpen(false);

    // const dispatch = useDispatch();
  const selectedTheme = useSelector(selectTheme);
  const theme = selectedTheme === 'light' ? lightTheme : darkTheme;



  return (
        <ThemeProvider theme={theme}>
      <div>
      <Button onClick={openAddPetModal}>add pet</Button>
      <Button onClick={openAddNoticeModal}>add notice</Button>
      <AddPetModal isOpen={isAddPetModalOpen} onClose={closeAddPetModal} />
      <AddNoticeModal
        isOpen={isAddNoticeModalOpen}
        onClose={closeAddNoticeModal}
      />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/friends" element={<OurFriendsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices/:categoryName" element={<NoticesPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
        </ThemeProvider>
    
  );
};
