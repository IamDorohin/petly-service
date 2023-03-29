// import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  useGetNoticesByCategoryQuery,
  useGetFavoriteArrQuery,
} from 'redux/notices/noticesSlice';

import Title from 'components/Generic/Title';
import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import { NoticeAddButton } from 'components/Notices/NoticeAddButton/NoticeAddbutton';
import { toast, ToastContainer } from 'react-toastify';

import AddNoticeModal from '../../modals/AddNoticeModal/AddNoticeModal';

import {
  NoticesPageContainer,
  NoticesPageNavBox,
  Container,
} from 'pages/NoticesPage/NoticesPage.styled';
import { LoaderCat } from 'components/Generic/LoaderCat';

const NoticesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddPetModal, setIsAddPetModal] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQueryState = searchParams?.toString() ?? '';

  const { categoryName } = useParams();

  const endpoint =
    searchQueryState === ''
      ? categoryName
      : categoryName + '?' + searchQueryState;

  const {
    currentData: array,
    refetch,
    error,
    isSuccess,
    isFetching,
  } = useGetNoticesByCategoryQuery(endpoint, {
    refetchOnMountOrArgChange: true,
  });
  const { currentData: favoriteArr } = useGetFavoriteArrQuery();

  useEffect(() => {
    if (searchQuery !== '') {
      setSearchParams({ search: searchQuery });
    } else {
      setSearchParams();
    }
  }, [searchQuery, setSearchParams]);

  const onCloseModal = () => {
    setIsAddPetModal(false);
    notify();
  };

  const notify = () => {
    toast.error('Oops! Seems like you need login!', {});
  };
  return (
    <NoticesPageContainer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Container>
        <Title>Find your favorite pet</Title>
        <NoticesSearch
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />
        <NoticesPageNavBox>
          <NoticesCategoriesNav />
          <NoticeAddButton onClick={() => setIsAddPetModal(true)} />
        </NoticesPageNavBox>
        {isFetching ? (
          <LoaderCat size={120} space={10} />
        ) : (
          <NoticesCategoriesList
            error={error}
            isSuccess={isSuccess}
            findedNotices={array?.data?.notices}
            favoriteArr={favoriteArr}
          />
        )}
      </Container>
      {isAddPetModal && (
        <AddNoticeModal
          refetchNotices={refetch}
          isOpen={isAddPetModal}
          onClose={onCloseModal}
        />
      )}
    </NoticesPageContainer>
  );
};

export default NoticesPage;
