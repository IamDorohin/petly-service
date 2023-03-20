import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import {
    NoticesItem,
    LikeBtn,
    ImageText,
    Image,
    ImageContainer,
    DescriptonContainer,
    DescriptoinTitle,
    DescriptionList,
    DescriptionItem,
    DescriptionText,
} from 'components/NoticesCategoriesItem/NoticesCategoriesItem.styled'

const NoticesCategoriesItem = () => {

    return (
        <>
            <NoticesItem>
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
            </NoticesItem>
            
            <DescriptonContainer>
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

                </DescriptionList>

            </DescriptonContainer>

            <NoticesItem>2й ЛИ </NoticesItem>
            </>
    )
}
export default NoticesCategoriesItem