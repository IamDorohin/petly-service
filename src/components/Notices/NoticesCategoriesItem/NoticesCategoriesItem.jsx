import { HiTrash } from 'react-icons/hi';
import { AiTwotoneHeart } from 'react-icons/ai';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import * as SC from 'components/Notices/NoticesCategoriesItem/NoticesCategoriesItem.styled';

const dogs = [
  {
    title: 'dog',
    category: 'sell',
    breed: 'Pomeranian',
    place: 'London',
    age: '3 years',
    price: '300$',
    own: true,
  },
  {
    title: 'my dog',
    category: 'in good hands',
    breed: 'breed',
    place: 'place',
    age: 'age',
    price: 'price',
    own: false,
  },
  {
    title: 'your dog',
    category: 'sell',
    breed: 'breed',
    place: 'place',
    age: 'age',
    price: 'price',
    own: false,
  },
  {
    title: 'cat',
    category: 'sell',
    breed: 'breed',
    place: 'place',
    age: 'age',
    price: 'price',
    own: false,
  },
  {
    title: 'my cat',
    category: 'for-free',
    breed: 'breed',
    place: 'place',
    age: 'age',
    price: 'price',
    own: false,
  },
  {
    title: 'your cat',
    category: 'sell',
    breed: 'breed',
    place: 'place',
    age: 'age',
    price: 'price',
    own: false,
  },
  {
    title: 'cute dog',
    category: 'sell',
    breed: 'breed',
    place: 'place',
    age: 'age',
    price: 'price',
    own: false,
  },
  {
    title: 'cute cat',
    category: 'sell',
    breed: 'breed',
    place: 'place',
    age: 'age',
    price: 'price',
    own: false,
  },
];

export const NoticesCategoriesItem = () => {
  return (
    <>
      {dogs.map(({ title, category, breed, place, age, price, own }) => (
        <SC.NoticeItem key={title}>
          <SC.NoticeImage src={'https://dummyimage.com/250'} alt="" />
          <SC.NoticeCategory> {category} </SC.NoticeCategory>
          <SC.NoticeLikeBtn className={own}>
            <AiTwotoneHeart className="forHoverBtn" fill="#fff" />
          </SC.NoticeLikeBtn>
          <SC.NoticeDescription className={own}>
            <SC.NoticeTitle> {title} </SC.NoticeTitle>
            <SC.NoticeList>
              <SC.NoticeListItem>
                <SC.NoticeListItemtitle>Breed:</SC.NoticeListItemtitle>
                <SC.NoticeListItemDetails>{breed}</SC.NoticeListItemDetails>
              </SC.NoticeListItem>
              <SC.NoticeListItem>
                <SC.NoticeListItemtitle>Place:</SC.NoticeListItemtitle>
                <SC.NoticeListItemDetails>{place}</SC.NoticeListItemDetails>
              </SC.NoticeListItem>
              <SC.NoticeListItem>
                <SC.NoticeListItemtitle>Age:</SC.NoticeListItemtitle>
                <SC.NoticeListItemDetails> {age}</SC.NoticeListItemDetails>
              </SC.NoticeListItem>
              <SC.NoticeListItem>
                <SC.NoticeListItemtitle>Price: </SC.NoticeListItemtitle>
                <SC.NoticeListItemDetails>{price}</SC.NoticeListItemDetails>
              </SC.NoticeListItem>
            </SC.NoticeList>
            <SC.NoticeLearnMoreBtn className={own}>
              Learn More
            </SC.NoticeLearnMoreBtn>
            {own && (
              <SC.NoticeDeleteBtn>
                <SC.NoticeDeleteBtnText>Delete</SC.NoticeDeleteBtnText>
                <HiTrash size={20} />
              </SC.NoticeDeleteBtn>
            )}
          </SC.NoticeDescription>
        </SC.NoticeItem>
      ))}
    </>
  );
};
