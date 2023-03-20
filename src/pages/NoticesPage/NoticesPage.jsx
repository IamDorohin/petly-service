import { useLocation } from 'react-router-dom';

import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import NoticesCategoriesNav from "components/NoticesCategoriesNav/NoticesCategoriesNav"
import NoticesCategoriesList from "components/NoticesCategoriesList/NoticesCategoriesList"

const NoticesPage = () => {
    const location = useLocation();
    
    return (
        <>
           
            <NoticesSearch />
            <NoticesCategoriesNav location={location} />
            <NoticesCategoriesList />
        
        </>
    )
};

export default NoticesPage;
