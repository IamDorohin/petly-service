// import { useLocation } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

// import { useGetNoticesBySearchQuery } from 'redux/notices/noticesSlice';

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
  const [searchQuery, setSearchQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchQuery !== '') {
      setSearchParams({ search: searchQuery });
    } else {
      setSearchParams();
    }
  }, [searchQuery, setSearchParams]);

  return (
    <NoticesPageContainer>
      <Container>
        <Title>Find your favorite pet</Title>
        <NoticesSearch
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />
        <NoticesPageNavBox>
          <NoticesCategoriesNav />
          <NoticeAddButton />
        </NoticesPageNavBox>
        <NoticesCategoriesList searchParams={searchParams} />
      </Container>
    </NoticesPageContainer>
  );
};

export default NoticesPage;
