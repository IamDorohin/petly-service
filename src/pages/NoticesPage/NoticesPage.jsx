import { useLocation } from 'react-router-dom';

import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import NoticesCategoriesNav from "components/NoticesCategoriesNav/NoticesCategoriesNav"

const NoticesPage = () => {
    const location = useLocation();
    
    return (
        <>
           
            <NoticesSearch />
            <NoticesCategoriesNav location={ location } />
        </>
    )
};

export default NoticesPage;
