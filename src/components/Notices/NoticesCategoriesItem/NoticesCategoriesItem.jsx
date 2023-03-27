import { useDeleteNoticeMutation } from 'redux/notices/noticesSlice';
import { HiTrash } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { useGetNoticesByIdQuery } from 'redux/notices/noticesSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as SC from 'components/Notices/NoticesCategoriesItem/NoticesCategoriesItem.styled';
import pets from '../../../img/pets.jpg';
import { NoticeDetailsModal } from 'modals/NoticeDetailsModal/NoticeDetailsModal';

export const NoticesCategoriesItem = ({ notice, onFavButtonClick }) => {
  const { breed, category, title, imgUrl, location, price, owner, _id, like } =
    notice;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isCurrentPet, setIsCurrentPet] = useState(false);

  const { currentData: moreDetails } = useGetNoticesByIdQuery(_id, {
    skip: !isOpenModal,
  });

  const [deleteNotice] = useDeleteNoticeMutation();

  useEffect(() => {
    if (moreDetails) {
      setIsCurrentPet(true);
    }
  }, [moreDetails]);

  const closeModalHendler = () => {
    setIsCurrentPet(false);
    setIsOpenModal(false);
  };

  console.log('isOpenModal', isOpenModal);
  console.log('isCurrentPet', isCurrentPet);
  console.log('moreDetails', moreDetails);

  return (
    <SC.NoticeItem>
      {imgUrl && (
        <SC.NoticeImage src={imgUrl} alt="фото домашнього улюбленця" />
      )}
      {!imgUrl && <SC.NoticeImage src={pets} alt="фото домашнього улюбленця" />}
      <SC.NoticeCategory> {category} </SC.NoticeCategory>
      <SC.NoticeLikeBtn>
        {like ? (
          <FavoriteIcon onClick={() => onFavButtonClick(notice)} />
        ) : (
          <FavoriteTwoToneIcon
            className="forHoverBtn"
            fontSize="inherit"
            color="#000"
            onClick={() => onFavButtonClick(notice)}
          />
        )}
      </SC.NoticeLikeBtn>
      <SC.NoticeDescription className={owner}>
        <SC.NoticeTitle> {title} </SC.NoticeTitle>
        <SC.NoticeList>
          <SC.NoticeListItem>
            <SC.NoticeListItemtitle>Breed:</SC.NoticeListItemtitle>
            <SC.NoticeListItemDetails>{breed}</SC.NoticeListItemDetails>
          </SC.NoticeListItem>
          <SC.NoticeListItem>
            <SC.NoticeListItemtitle>Place:</SC.NoticeListItemtitle>
            <SC.NoticeListItemDetails>{location}</SC.NoticeListItemDetails>
          </SC.NoticeListItem>
          <SC.NoticeListItem>
            <SC.NoticeListItemtitle>Age:</SC.NoticeListItemtitle>
            <SC.NoticeListItemDetails>{location}</SC.NoticeListItemDetails>
          </SC.NoticeListItem>
          <SC.NoticeListItem>
            <SC.NoticeListItemtitle>Price: </SC.NoticeListItemtitle>
            <SC.NoticeListItemDetails>{price}</SC.NoticeListItemDetails>
          </SC.NoticeListItem>
        </SC.NoticeList>
        <SC.NoticeLearnMoreBtn
          className={owner}
          onClick={() => setIsOpenModal(true)}
          // onClick={onLearnMoreButtonClick}
        >
          Learn More
        </SC.NoticeLearnMoreBtn>
        {owner && (
          <SC.NoticeDeleteBtn
          // onClick={() => deleteOwnNotice(_id)}
          >
            <SC.NoticeDeleteBtnText onClick={() => deleteNotice(_id)}>
              Delete
            </SC.NoticeDeleteBtnText>
            <HiTrash size={20} />
          </SC.NoticeDeleteBtn>
        )}
        {isCurrentPet && (
          <NoticeDetailsModal
            isOpen={isCurrentPet}
            onClose={closeModalHendler}
            currentPet={moreDetails.data.notice}
          />
        )}
      </SC.NoticeDescription>
    </SC.NoticeItem>
  );
};
