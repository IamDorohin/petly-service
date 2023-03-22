
import * as SC from 'components/NoticesCategoriesNav/NoticesCategoriesNav.styled'


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
    <SC.OverallContainer>
      {/* <SC.CategoriesContainer> */}
       <SC.CategoriesList>
                {publicCategories.map(item => (
                  <SC.CategoriesItem key={Object.keys(item)}>
                    
            <SC.NavLinkStyled
              to={`/notices/${Object.values(item)}${location.search}`}
              
               >
              {Object.keys(item)}
                    </SC.NavLinkStyled>
                    
                     
         </SC.CategoriesItem>         
                ))}
              
              {token !== null &&
                    privateCategories.map(item => (
                <SC.CategoriesItem key={Object.keys(item)}>
              <SC.NavLinkStyled
                to={`/notices/${Object.values(item)}${location.search}`}
                
              >
                {Object.keys(item)}
                            </SC.NavLinkStyled>
                            </SC.CategoriesItem>
            ))}
            </SC.CategoriesList>

                  
{/* </SC.CategoriesContainer> */}
                 
                 
          </SC.OverallContainer>
            </>
    )
    
}

export default NoticesCategoriesNav