import { useParams } from 'react-router-dom';
import { NoticesCategoriesItem } from 'components/Notices/NoticesCategoriesItem/NoticesCategoriesItem';
import { CategoriesList } from './NoticesCategoriesList.styled';
import NoResult from 'components/Generic/NoResult/NoResult';

import {
  useGetNoticesByCategoryQuery,
  useAddFavoriteNoticeMutation,
  useDeleteFavoriteNoticeMutation,
  useGetFavoriteArrQuery,
} from 'redux/notices/noticesSlice';
// import { useState } from 'react';

export const NoticesCategoriesList = ({ searchParams }) => {
  const { categoryName } = useParams();

  const { data: favoriteIdArr } = useGetFavoriteArrQuery();

  const searchQueryState = searchParams?.toString() ?? '';

  const endpoint =
    searchQueryState === ''
      ? categoryName
      : categoryName + '?' + searchQueryState;

  const {
    currentData: array,
    error,
    isSuccess,
  } = useGetNoticesByCategoryQuery(endpoint);

  const findedNotices = array?.data?.notices;

  console.log('favoriteIdArr', favoriteIdArr);
  if (favoriteIdArr?.data.favorite.length !== 0) {
    findedNotices?.forEach(item => {
      if (favoriteIdArr?.data.favorite.includes(item._id)) {
        item.like = true;
      }
    });
  }

  const favNoticesStatusHandler = notice => {
    if (!favoriteIdArr?.includes(notice._id)) {
      addNotice(notice._id);
      notice.like = true;
    } else if (favoriteIdArr?.includes(notice._id)) {
      deleteNotice(notice._id);
      notice.like = false;
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
            notice={notice}
            key={notice._id}
            onFavButtonClick={favNoticesStatusHandler}
          />
        ))}
      {error?.data && <NoResult />}
    </CategoriesList>
  );
};
