import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useGetNoticesBySearchQuery } from 'redux/notices/noticesSlice';

import Title from 'components/Generic/Title';
import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import { NoticeAddButton } from 'components/Notices/NoticeAddButton/NoticeAddbutton';

import {
  NoticesPageContainer,
  NoticesPageNavBox,
  Container,
} from 'pages/NoticesPage/NoticesPage.styled';

const NoticesPage = () => {
  const location = useLocation();
  const { categoryName } = useParams();

  const [searchQuery, setSearchQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.toString();
  const searchQueryState = searchParams.get('search') ?? '';

  const handleSearchQueryChange = query => {
    setSearchQuery(query);
    setSearchParams(query !== '' ? { search: query } : {});
  };

  const { data } = useGetNoticesBySearchQuery(
    { currentCategory: categoryName, currentSearch: value },
    {
      skip: searchQuery === '',
      refetchOnMountOrArgChange: true,
    }
  );
  const newSearchNotices = data?.data?.notices;

  return (
    <NoticesPageContainer>
      <Container>
        <Title>Find your favorite pet</Title>
        <NoticesSearch
          element={searchQueryState}
          onSubmit={handleSearchQueryChange}
        />
        <NoticesPageNavBox>
          <NoticesCategoriesNav location={location} />
          <NoticeAddButton />
        </NoticesPageNavBox>
        <NoticesCategoriesList newSearchNotices={newSearchNotices} />
      </Container>
    </NoticesPageContainer>
  );
};

export default NoticesPage;
