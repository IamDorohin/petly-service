import { useLocation } from 'react-router-dom';

import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import NoticesCategoriesNav from "components/NoticesCategoriesNav/NoticesCategoriesNav"
import NoticesCategoriesList from "components/NoticesCategoriesList/NoticesCategoriesList"
import NoticeAddButton from 'components/NoticeAddButton/NoticeAddbutton'
const NoticesPage = () => {
    const location = useLocation();
    
    return (
        <>
           
            <NoticesSearch />
            <NoticesCategoriesNav location={location} />
            <NoticeAddButton />
            <NoticesCategoriesList />
        
        </>
    )
};

export default NoticesPage;
