import // useDeleteNoticeMutation,
// useGetNoticesByIdQuery,
'redux/notices/noticesSlice';
import { HiTrash } from 'react-icons/hi';
// import { AiTwotoneHeart } from 'react-icons/ai';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as SC from 'components/Notices/NoticesCategoriesItem/NoticesCategoriesItem.styled';

export const NoticesCategoriesItem = ({
  notice,
  onFavButtonClick,
  setActiveNoticeId,
  openNoticeDetailsModal,
}) => {
  const { breed, category, title, imgUrl, location, price, owner, _id, like } =
    notice;

  const onLearnMoreButtonClick = () => {
    setActiveNoticeId(_id);
    openNoticeDetailsModal();
  };

  // const [deleteOwnNotice] = useDeleteNoticeMutation();

  // const { moreDetails, refetch } = useGetNoticesByIdQuery(_id);

  // console.log('moreDetails', moreDetails);
  // console.log('take this id for modal window', _id);

  return (
    <SC.NoticeItem>
      <SC.NoticeImage src={imgUrl} alt="фото домашнього улюбленця" />
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
          onClick={onLearnMoreButtonClick}
        >
          Learn More
        </SC.NoticeLearnMoreBtn>
        {owner && (
          <SC.NoticeDeleteBtn
          // onClick={() => deleteOwnNotice(_id)}
          >
            <SC.NoticeDeleteBtnText>Delete</SC.NoticeDeleteBtnText>
            <HiTrash size={20} />
          </SC.NoticeDeleteBtn>
        )}
      </SC.NoticeDescription>
    </SC.NoticeItem>
  );
};
