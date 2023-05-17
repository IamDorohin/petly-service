import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selector from 'redux/auth/auth-selectors';

import {
  useGetNoticesByCategoryQuery,
  useGetFavoriteArrQuery,
} from 'redux/notices/noticesSlice';
import { DirectionSnackbar } from 'components/Generic/Notification/notification';
import Title from 'components/Generic/Title';
import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import { NoticeAddButton } from 'components/Notices/NoticeAddButton/NoticeAddbutton';

import AddNoticeModal from '../../modals/AddNoticeModal/AddNoticeModal';

import {
  NoticesPageContainer,
  NoticesPageNavBox,
  Container,
} from 'pages/NoticesPage/NoticesPage.styled';
import { LoaderCat } from 'components/Generic/LoaderCat';

const NoticesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { page = 1, search = '' } = Object.fromEntries([...searchParams]);

  const [searchParamsQuery, setSearchParamsQuery] = useState({ page, search });
  const [isAddPetModal, setIsAddPetModal] = useState(false);
  const token = useSelector(selector.getToken);

  const searchQueryState = searchParams?.toString() ?? '';

  const { categoryName } = useParams();

  const {
    currentData: array,
    refetch,
    error,
    isSuccess,
    isFetching,
  } = useGetNoticesByCategoryQuery(
    { categoryName, searchQueryState, page },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const { currentData: favoriteArr } = useGetFavoriteArrQuery();

  useEffect(() => {
    const { page, search } = searchParamsQuery;
    if (search !== '') {
      setSearchParams({ page, search });
    } else {
      setSearchParams({ page });
    }
  }, [searchParamsQuery, setSearchParams]);

  const onCloseModal = () => {
    setIsAddPetModal(false);
  };

  const forAlertMessage = 'Oops, seems like you are not login!';

  return (
    <>
      <NoticesPageContainer>
        <Container>
          <Title>Find your favorite pet</Title>
          <NoticesSearch
            setSearchParamsQuery={setSearchParamsQuery}
            searchParamsQuery={searchParamsQuery}
          />
          <NoticesPageNavBox>
            <NoticesCategoriesNav
              searchParamsQuery={searchParamsQuery}
              setSearchParamsQuery={setSearchParamsQuery}
            />
            {!token ? (
              <DirectionSnackbar message={forAlertMessage} />
            ) : (
              <NoticeAddButton onClick={() => setIsAddPetModal(true)} />
            )}
          </NoticesPageNavBox>
          {isFetching ? (
            <LoaderCat size={120} space={10} />
          ) : (
            <NoticesCategoriesList
              token={token}
              error={error}
              isSuccess={isSuccess}
              findedNotices={array?.data?.notices}
              allItem={array?.data?.allItems}
              favoriteArr={favoriteArr}
              searchParamsQuery={searchParamsQuery}
              setSearchParamsQuery={setSearchParamsQuery}
            />
          )}
        </Container>
        {isAddPetModal && (
          <AddNoticeModal
            refetchNotices={refetch}
            isOpen={isAddPetModal}
            onClose={onCloseModal}
            token={token}
          />
        )}
      </NoticesPageContainer>
    </>
  );
};

export default NoticesPage;
