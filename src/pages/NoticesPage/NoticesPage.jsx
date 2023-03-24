import { useLocation } from 'react-router-dom';

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

  return (
    <NoticesPageContainer>
      <Container>
        <NoticesSearch />
        <NoticesPageNavBox>
          <NoticesCategoriesNav location={location} />
          <NoticeAddButton />
        </NoticesPageNavBox>
        <NoticesCategoriesList />
      </Container>
    </NoticesPageContainer>
  );
};

export default NoticesPage;
