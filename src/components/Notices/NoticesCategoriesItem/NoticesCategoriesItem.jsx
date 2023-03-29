import * as React from 'react';
import { HiTrash } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import selectors from 'redux/auth/auth-selectors';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { useGetNoticesByIdQuery } from 'redux/notices/noticesSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as SC from 'components/Notices/NoticesCategoriesItem/NoticesCategoriesItem.styled';
import { NoticeDetailsModal } from 'modals/NoticeDetailsModal/NoticeDetailsModal';
import pet from 'img/pngwing.png';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const NoticesCategoriesItem = ({
  notice,
  onFavButtonClick,
  noticeDeleteHandler,
}) => {
  const { breed, category, title, imgUrl, location, price, owner, _id, like } =
    notice;

  const currentUser = useSelector(selectors.getUser);

  const isOwnerNotice = currentUser.id === owner;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isCurrentPet, setIsCurrentPet] = useState(false);

  const { currentData: moreDetails } = useGetNoticesByIdQuery(_id, {
    skip: !isOpenModal,
  });

  useEffect(() => {
    if (moreDetails) {
      setIsCurrentPet(true);
    }
  }, [moreDetails]);

  const closeModalHendler = () => {
    setIsCurrentPet(false);
    setIsOpenModal(false);
  };

  return (
    <SC.NoticeItem>
      {imgUrl === 'default/url' ? (
        <SC.NoticeImageWrapper>
          <SC.NoticeImage src={pet} />
        </SC.NoticeImageWrapper>
      ) : (
        <SC.NoticeImage src={imgUrl} alt="фото домашнього улюбленця" />
      )}
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
      {!owner && (
        <Snackbar autoHideDuration={6000} sx={{ width: '100%' }}>
          <Alert severity="error">This is an error message!</Alert>
        </Snackbar>
      )}

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
        {isOwnerNotice && (
          <SC.NoticeDeleteBtn
          // onClick={() => deleteOwnNotice(_id)}
          >
            <SC.NoticeDeleteBtnText onClick={() => noticeDeleteHandler(_id)}>
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
