import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selector from 'redux/auth/auth-selectors';

import * as SC from './NoticesCategoriesNav.styled';

const publicCategories = [
  { id: '1', title: 'sell', endpoint: 'sell' },
  { id: '2', title: 'lost/found', endpoint: 'lost-found' },
  { id: '3', title: 'in good hands', endpoint: 'for-free' },
];

const privateCategories = [
  { id: '4', title: 'favorite ads', endpoint: 'favorite' },
  { id: '5', title: 'my ads', endpoint: 'own' },
];

export const NoticesCategoriesNav = ({
  setSearchParamsQuery,
  searchParamsQuery,
}) => {
  const isLogedIn = useSelector(selector.getIsLoggedIn);
  const { categoryName } = useParams();

  const handleClick = endpoint => {
    if (endpoint !== categoryName) {
      setSearchParamsQuery({ ...searchParamsQuery, page: 1 });
    }
  };

  return (
    <SC.CategoriesList>
      {publicCategories.map(({ id, title, endpoint }) => (
        <SC.CategoriesItem className={categoryName === endpoint} key={id}>
          <SC.NavLinkStyled
            onClick={() => handleClick(endpoint)}
            className="forHover"
            to={`/notices/${endpoint}`}
          >
            {title}
          </SC.NavLinkStyled>
        </SC.CategoriesItem>
      ))}

      {isLogedIn &&
        privateCategories.map(({ id, title, endpoint }) => (
          <SC.CategoriesItem className={categoryName === endpoint} key={id}>
            <SC.NavLinkStyled
              onClick={() => handleClick(endpoint)}
              className="forHover"
              to={`/notices/${endpoint}`}
            >
              {title}
            </SC.NavLinkStyled>
          </SC.CategoriesItem>
        ))}
    </SC.CategoriesList>
  );
};
