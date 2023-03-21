import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';

import * as SC from 'components/NoticesCategoriesItem/NoticesCategoriesItem.styled'

const NoticesCategoriesItem = () => {

    return (
        <>
            <SC.NoticesItem>
                <SC.GlobalContainer>
              {/* <SC.ImageContainer> */}
                <SC.Image src={'https://dummyimage.com/250'} alt=""/> 
                <SC.ImageText> sell </SC.ImageText>
                <SC.LikeBtn>
                  <FavoriteBorderIcon
                   sx={{
                  width: 28,
                 height: 28,
                 color: '#F59256',
                  }}
                  />
                </SC.LikeBtn>
             {/* </SC.ImageContainer> */}
            
            
            
                <SC.DescriptoinTitle> Любое название</SC.DescriptoinTitle>
                <SC.DescriptionList>

                    <SC.DescriptionItem>
                        <SC.DescriptionText> Breed: </SC.DescriptionText>
                        Порода
                    </SC.DescriptionItem> 

                    <SC.DescriptionItem>
                        <SC.DescriptionText> Place: </SC.DescriptionText>
                        Город
                    </SC.DescriptionItem> 

                    <SC.DescriptionItem>
                        <SC.DescriptionText> Age: </SC.DescriptionText>
                        Возраст
                        </SC.DescriptionItem> 
                        
           {/* PRICE - for sell only              */}
                     <SC.DescriptionItem>
                        <SC.DescriptionText> Price: </SC.DescriptionText>
                        $
                    </SC.DescriptionItem> 

                    </SC.DescriptionList>

                    <SC.DescriptionBtn> Learn More</SC.DescriptionBtn>
                    <SC.DeleteBtn> Delete 
                        <DeleteIcon
                            sx={{
                  width: 20,
                 height: 20,
                 color: '#F59256',
                  }}
                        />
                    </SC.DeleteBtn>

            </SC.GlobalContainer>
            </SC.NoticesItem>

            
            </>
    )
}
export default NoticesCategoriesItem