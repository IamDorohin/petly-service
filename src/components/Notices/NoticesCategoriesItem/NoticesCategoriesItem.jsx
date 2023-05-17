import * as React from 'react';
import { HiTrash } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import selectors from 'redux/auth/auth-selectors';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import {
  useGetNoticesByIdQuery,
  useAddFavoriteNoticeMutation,
  useDeleteFavoriteNoticeMutation,
} from 'redux/notices/noticesSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as SC from 'components/Notices/NoticesCategoriesItem/NoticesCategoriesItem.styled';
import { NoticeDetailsModal } from 'modals/NoticeDetailsModal/NoticeDetailsModal';
import noPetPhoto from 'images/nopetphoto.png';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { ToWords } from 'to-words';
import { currentPetAge } from '../date';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const NoticesCategoriesItem = ({ notice, noticeDeleteHandler }) => {
  const {
    breed,
    category,
    title,
    imgUrl,
    location,
    price,
    owner,
    birthdate,
    _id,
    like = false,
  } = notice;
  const toWords = new ToWords({ localeCode: 'en-US' });

  const month = currentPetAge(birthdate).months;
  const years = currentPetAge(birthdate).years;
  const days = currentPetAge(birthdate).days;

  const outputYears = toWords.convert(years);
  const outputMonths = toWords.convert(month);
  const outputDays = toWords.convert(days);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isCurrentPet, setIsCurrentPet] = useState(false);
  const [isFavorite, setIsFavorite] = useState(like);
  const currentUser = useSelector(selectors.getUser);

  const isOwnerNotice = currentUser.id === owner;
  const [addFavNotice] = useAddFavoriteNoticeMutation();
  const [deleteFavNotice] = useDeleteFavoriteNoticeMutation();

  const { currentData: moreDetails } = useGetNoticesByIdQuery(_id, {
    skip: !isOpenModal,
  });

  const onFavButtonClick = ({ _id }) => {
    if (!isFavorite) {
      addFavNotice(_id);
      setIsFavorite(true);
    } else if (isFavorite) {
      deleteFavNotice(_id);
      setIsFavorite(false);
    }
  };

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
          <SC.NoticeImage src={noPetPhoto} />
        </SC.NoticeImageWrapper>
      ) : (
        <SC.NoticeImageWrapper>
          <SC.NoticeImage src={imgUrl} alt="фото домашнього улюбленця" />
        </SC.NoticeImageWrapper>
      )}
      <SC.NoticeCategory> {category} </SC.NoticeCategory>
      <SC.NoticeLikeBtn>
        {isFavorite ? (
          <FavoriteIcon
            sx={{ color: '#F59256' }}
            onClick={() => onFavButtonClick(notice)}
          />
        ) : (
          <FavoriteTwoToneIcon
            className="forHoverBtn"
            sx={{ color: '#F59256' }}
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
        <SC.NoticeInformation>
          <SC.NoticeTitle>
            {title.length >= 27 ? title.slice(0, 27) + '...' : title}
          </SC.NoticeTitle>
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
              {month === 0 ? (
                <SC.NoticeListItemDetails>
                  {`${outputDays} days`}
                </SC.NoticeListItemDetails>
              ) : (
                <SC.NoticeListItemDetails>
                  {years <= 1
                    ? `${outputMonths} month`
                    : `${outputYears} years`}
                </SC.NoticeListItemDetails>
              )}
            </SC.NoticeListItem>
            <SC.NoticeListItem>
              {price && (
                <>
                  <SC.NoticeListItemtitle>Price: </SC.NoticeListItemtitle>
                  <SC.NoticeListItemDetails>{price}</SC.NoticeListItemDetails>
                </>
              )}
            </SC.NoticeListItem>
          </SC.NoticeList>
        </SC.NoticeInformation>

        <SC.NoticeButtonsWrapper>
          <SC.NoticeLearnMoreBtn
            className={owner}
            onClick={() => setIsOpenModal(true)}
          >
            Learn More
          </SC.NoticeLearnMoreBtn>
          {isOwnerNotice && (
            <SC.NoticeDeleteBtn onClick={() => noticeDeleteHandler(_id)}>
              <SC.NoticeDeleteBtnText>Delete</SC.NoticeDeleteBtnText>
              <HiTrash size={20} />
            </SC.NoticeDeleteBtn>
          )}
        </SC.NoticeButtonsWrapper>

        {isCurrentPet && (
          <NoticeDetailsModal
            noPetPhoto={noPetPhoto}
            isOpen={isCurrentPet}
            onClose={closeModalHendler}
            currentPet={moreDetails.data.notice}
            onFavButtonClick={onFavButtonClick}
          />
        )}
      </SC.NoticeDescription>
    </SC.NoticeItem>
  );
};
