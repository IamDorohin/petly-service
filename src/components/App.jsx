import { lazy, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Button } from '@mui/material';
import NestedModal, { ModalXxxx } from './ModalXxxx';
import { ModalForm } from './ModalForm/ModalForm';
import { BasicModal } from './BasicModal/BasicModal';

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
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(!open);
  };

    
  return (
    <div>
      <Button onClick={showModal}>Open BasicModal</Button>;
      {open && <NestedModal showModal={showModal} open={open} />}
      {/* {open && (
        <BasicModal showModal={showModal}>
          <ModalForm />
        </BasicModal>
      )} */}
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
  );
};
