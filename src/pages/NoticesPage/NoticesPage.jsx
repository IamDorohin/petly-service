import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useGetNoticesByCategoryQuery } from 'redux/notices/noticesSlice';

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
  console.log(categoryName);
  const { notices } = useGetNoticesByCategoryQuery(categoryName);

  console.log(categoryName);
  return (
    <NoticesPageContainer>
      <Container>
        <NoticesSearch />
        <NoticesPageNavBox>
          <NoticesCategoriesNav location={location} />
          <NoticeAddButton />
        </NoticesPageNavBox>
        <NoticesCategoriesList data={notices} />
      </Container>
    </NoticesPageContainer>
  );
};

export default NoticesPage;
