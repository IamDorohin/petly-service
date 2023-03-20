
import AddIcon from '@mui/icons-material/Add';

import { CategoriesList, NavLinkStyled, AddButton, TitleAddBtn, ContainerAddBtn, CategoriesContainer, OverallContainer } from 'components/NoticesCategoriesNav/NoticesCategoriesNav.styled'


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
    <OverallContainer>
      <CategoriesContainer>
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
</CategoriesContainer>
        
        <ContainerAddBtn>
            <TitleAddBtn> Add pet </TitleAddBtn>
            <AddButton type='submit'>
                <AddIcon
          sx={{
            width: 32,
            height: 32,
            color: '#ffffff',
          }}
        />
            </AddButton>
          </ContainerAddBtn>
          
          </OverallContainer>
            </>
    )
    
}

export default NoticesCategoriesNav