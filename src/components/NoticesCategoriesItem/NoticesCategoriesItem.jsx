import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';

import * as SC from 'components/NoticesCategoriesItem/NoticesCategoriesItem.styled'

const NoticesCategoriesItem = (props) => {
    // const { title, image, breed, price, age, place} = props
const { item } = props
    return (
        
        <>
            <SC.NoticesItem key={item.title}>
                <SC.GlobalContainer>

                    
                <SC.Image src={item.image} alt=""/> 
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
                     
                        
                    <SC.DescriptoinTitle> {item.title} </SC.DescriptoinTitle>
                <SC.DescriptionList>

                    <SC.DescriptionItem>
                        <SC.DescriptionText> Breed: </SC.DescriptionText>
                        {item.breed}
                    </SC.DescriptionItem> 

                    <SC.DescriptionItem>
                        <SC.DescriptionText> Place: </SC.DescriptionText>
                        {item.place}
                    </SC.DescriptionItem> 

                    <SC.DescriptionItem>
                        <SC.DescriptionText> Age: </SC.DescriptionText>
                        {item.age}
                        </SC.DescriptionItem> 
                        
           {/* PRICE - for sell only              */}
                     <SC.DescriptionItem>
                        <SC.DescriptionText> Price: </SC.DescriptionText>
                        {item.price}
                    </SC.DescriptionItem> 

                    </SC.DescriptionList>

                    <SC.DescriptionBtn> Learn More</SC.DescriptionBtn>
                    {item.userLogin === true &&
                        <SC.DeleteBtn> Delete
                            <DeleteIcon
                                sx={{
                                    width: 20,
                                    height: 20,
                                    color: '#F59256',
                                }}
                            />
                        </SC.DeleteBtn>
                    }
            </SC.GlobalContainer>
            </SC.NoticesItem>

            
            </>
    )
}
export default NoticesCategoriesItem