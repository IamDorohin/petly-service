import { useParams } from 'react-router-dom';
import { NoticesCategoriesItem } from 'components/Notices/NoticesCategoriesItem/NoticesCategoriesItem';
import { CategoriesList } from './NoticesCategoriesList.styled';
import NoResult from 'components/Generic/NoResult/NoResult';

import { useState } from 'react';
import {
  useGetNoticesByCategoryQuery,
  useAddFavoriteNoticeMutation,
  useDeleteFavoriteNoticeMutation,
} from 'redux/notices/noticesSlice';

export const NoticesCategoriesList = ({ newSearchNotices }) => {
  const { categoryName } = useParams();
  const [currentFavNotice, setCurrentFavNotice] = useState([]);

  const { currentData: favNotices = [] } =
    useGetNoticesByCategoryQuery('favorite');

  const {
    currentData: array,
    error,
    isSuccess,
  } = useGetNoticesByCategoryQuery(categoryName);

  const findedNotices = newSearchNotices
    ? newSearchNotices
    : array?.data?.notices;

  console.log('findedNotices', findedNotices);
  const noticesNotFound =
    error?.data?.message === 'There is no notices in this category';

  const favNoticesStatusHandler = currentArray => {
    setCurrentFavNotice(favNotices);

    const isArray = currentFavNotice.some(
      item => item._id === currentArray._id
    );

    if (!isArray) {
      addNotice(favNotices);
      setCurrentFavNotice(prevState => [...prevState, currentArray]);
    } else if (isArray) {
      deleteNotice(array);
      const newArray = currentFavNotice.filter(
        item => item._id !== currentArray._id
      );
      setCurrentFavNotice(newArray);
    }
  };

  const [addNotice] = useAddFavoriteNoticeMutation(findedNotices);
  const [deleteNotice] = useDeleteFavoriteNoticeMutation(findedNotices);

  return (
    <CategoriesList>
      {isSuccess &&
        findedNotices &&
        findedNotices.map(notice => (
          <NoticesCategoriesItem
            array={notice}
            key={notice._id}
            onClick={favNoticesStatusHandler}
          />
        ))}
      {noticesNotFound && <NoResult />}
    </CategoriesList>
  );
};
