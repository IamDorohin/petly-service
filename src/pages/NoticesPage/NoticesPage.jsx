import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useGetNoticesBySearchQuery } from 'redux/notices/noticesSlice';

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
  const [searchQuery, setSearchQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQueryState = searchParams.get('search') ?? '';

  const changeSearch = query => {
    setSearchParams(query !== '' ? { search: query } : {});
  };

  const handleSearchQueryChange = query => {
    setSearchQuery(query);
  };

  const { newSearchNotices } = useGetNoticesBySearchQuery(searchQuery, {
    skip: searchQuery === '',
    refetchOnMountOrArgChange: true,
  });

  console.log('newSearchNotices', newSearchNotices);

  return (
    <NoticesPageContainer>
      <Container>
        <NoticesSearch
          element={searchQueryState}
          onSubmit={handleSearchQueryChange}
          onChange={changeSearch}
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
