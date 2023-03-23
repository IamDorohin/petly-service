import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';

import * as SC from 'components/Notices/NoticesCategoriesItem/NoticesCategoriesItem.styled';

const dogs = [
  {
    id: '1',
    title: 'dog',
    breed: 'breed',
    place: 'place',
    age: 'age',
    price: 'price',
  },
  {
    id: '2',
    title: 'dog',
    breed: 'breed',
    place: 'place',
    age: 'age',
    price: 'price',
  },
  {
    id: '3',
    title: 'dog',
    breed: 'breed',
    place: 'place',
    age: 'age',
    price: 'price',
  },
  {
    id: '4',
    title: 'dog',
    breed: 'breed',
    place: 'place',
    age: 'age',
    price: 'price',
  },
  {
    id: '5',
    title: 'dog',
    breed: 'breed',
    place: 'place',
    age: 'age',
    price: 'price',
  },
  {
    id: '6',
    title: 'dog',
    breed: 'breed',
    place: 'place',
    age: 'age',
    price: 'price',
  },
  {
    id: '7',
    title: 'dog',
    breed: 'breed',
    place: 'place',
    age: 'age',
    price: 'price',
  },
  {
    id: '8',
    title: 'dog',
    breed: 'breed',
    place: 'place',
    age: 'age',
    price: 'price',
  },
];
export const NoticesCategoriesItem = () => {
  return (
    <>
      {dogs.map(({ id, title, breed, place, age, price }) => (
        <SC.NoticesItem key={id}>
          <SC.GlobalContainer>
            <SC.Image src={'https://dummyimage.com/250'} alt="" />
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

            <SC.DescriptoinTitle> {title} </SC.DescriptoinTitle>
            <SC.DescriptionList>
              <SC.DescriptionItem>
                <SC.DescriptionText> Breed: </SC.DescriptionText>
                {breed}
              </SC.DescriptionItem>

              <SC.DescriptionItem>
                <SC.DescriptionText> Place: </SC.DescriptionText>
                {place}
              </SC.DescriptionItem>

              <SC.DescriptionItem>
                <SC.DescriptionText> Age: </SC.DescriptionText>
                {age}
              </SC.DescriptionItem>

              {/* PRICE - for sell only              */}
              <SC.DescriptionItem>
                <SC.DescriptionText> Price: </SC.DescriptionText>
                {price}
              </SC.DescriptionItem>
            </SC.DescriptionList>

            <SC.DescriptionBtn> Learn More</SC.DescriptionBtn>

            <SC.DeleteBtn>
              Delete
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
      ))}
    </>
  );
};
