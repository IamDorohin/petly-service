
import AddIcon from '@mui/icons-material/Add';

import { CategoriesList, NavLinkStyled, AddButton } from 'components/NoticesCategoriesNav/NoticesCategoriesNav.styled'


const NoticesCategoriesNav = (props) => {
    const { location } = props
    const token = 'fake token'

      const publicCategories = [
    { sell: 'sell' },
    { 'lost/found': 'lost-found' },
    { 'in good hands': 'for-free' },
  ];
  const privateCategories = [
    { 'Favorite ads': 'favorite' },
    { 'My ads': 'own' },
  ];

    return (
        <>
            
       <CategoriesList>
                {publicCategories.map(item => (
            //   <Button>
            <NavLinkStyled
              to={`/notices/${Object.values(item)}${location.search}`}
              state
              key={Object.keys(item)}
            >
              {Object.keys(item)}
            </NavLinkStyled>
                        // </Button>
          ))}
            </CategoriesList>

            <AddButton>
                <AddIcon
          sx={{
            width: 32,
            height: 32,
            color: '#ffffff',
          }}
        />
            </AddButton>

        <CategoriesList>
          {token !== null &&
                    privateCategories.map(item => (
                // <Button>
              <NavLinkStyled
                to={`/notices/${Object.values(item)}${location.search}`}
                key={Object.keys(item)}
              >
                {Object.keys(item)}
                            </NavLinkStyled>
                            // </Button>
            ))}
        </CategoriesList>
            </>
    )
    
}

export default NoticesCategoriesNav