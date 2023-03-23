import { useParams } from 'react-router-dom';

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

export const NoticesCategoriesNav = props => {
  const token = 'fake token';
  const { categoryName } = useParams();

  return (
    <SC.CategoriesList>
      {publicCategories.map(({ id, title, endpoint }) => (
        <SC.CategoriesItem className={categoryName === endpoint} key={id}>
          <SC.NavLinkStyled className="forHover" to={`/notices/${endpoint}`}>
            {title}
          </SC.NavLinkStyled>
        </SC.CategoriesItem>
      ))}

      {token !== null &&
        privateCategories.map(({ id, title, endpoint }) => (
          <SC.CategoriesItem className={categoryName === endpoint} key={id}>
            <SC.NavLinkStyled className="forHover" to={`/notices/${endpoint}`}>
              {title}
            </SC.NavLinkStyled>
          </SC.CategoriesItem>
        ))}
    </SC.CategoriesList>
  );
};
