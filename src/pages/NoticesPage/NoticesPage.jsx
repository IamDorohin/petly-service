import { useLocation } from 'react-router-dom';

import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import NoticesCategoriesNav from "components/NoticesCategoriesNav/NoticesCategoriesNav"
import NoticesCategoriesList from "components/NoticesCategoriesList/NoticesCategoriesList"
import NoticeAddButton from 'components/NoticeAddButton/NoticeAddbutton'

import { NoticesPageContainer, NoticesPageNavBox, Container } from 'pages/NoticesPage/NoticesPage.styled'

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
        
    )
};

export default NoticesPage;
