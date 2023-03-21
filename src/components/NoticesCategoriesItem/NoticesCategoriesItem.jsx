import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';

import {
    NoticesItem,
    LikeBtn,
    ImageText,
    Image,
    ImageContainer,
    GlobalContainer,
    DescriptoinTitle,
    DescriptionList,
    DescriptionItem,
    DescriptionText,
    DescriptionBtn,
    DeleteBtn,
} from 'components/NoticesCategoriesItem/NoticesCategoriesItem.styled'

const NoticesCategoriesItem = () => {

    return (
        <>
            <NoticesItem>
                <GlobalContainer>
              <ImageContainer>
                <Image src={'https://dummyimage.com/290'} alt=""/> 
                <ImageText> sell </ImageText>
                <LikeBtn>
                  <FavoriteBorderIcon
                   sx={{
                  width: 28,
                 height: 28,
                 color: '#F59256',
                  }}
                  />
                </LikeBtn>
             </ImageContainer>
            
            
            
                <DescriptoinTitle> Любое название</DescriptoinTitle>
                <DescriptionList>

                    <DescriptionItem>
                        <DescriptionText> Breed: </DescriptionText>
                        Порода
                    </DescriptionItem> 

                    <DescriptionItem>
                        <DescriptionText> Place: </DescriptionText>
                        Город
                    </DescriptionItem> 

                    <DescriptionItem>
                        <DescriptionText> Age: </DescriptionText>
                        Возраст
                        </DescriptionItem> 
                        
           {/* PRICE - for sell only              */}
                     <DescriptionItem>
                        <DescriptionText> Price: </DescriptionText>
                        $
                    </DescriptionItem> 

                    </DescriptionList>

                    <DescriptionBtn> Learn More</DescriptionBtn>
                    <DeleteBtn> Delete 
                        <DeleteIcon
                            sx={{
                  width: 20,
                 height: 20,
                 color: '#F59256',
                  }}
                        />
                    </DeleteBtn>

            </GlobalContainer>
            </NoticesItem>

            <NoticesItem>2й ЛИ </NoticesItem>
            </>
    )
}
export default NoticesCategoriesItem