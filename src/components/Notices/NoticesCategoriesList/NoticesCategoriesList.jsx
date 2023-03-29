import { useState, useEffect } from 'react';
import { NoticesCategoriesItem } from 'components/Notices/NoticesCategoriesItem/NoticesCategoriesItem';
import { CategoriesList } from './NoticesCategoriesList.styled';
import NoResult from 'components/Generic/NoResult/NoResult';

import {
  // useGetNoticesByCategoryQuery,
  useAddFavoriteNoticeMutation,
  useDeleteFavoriteNoticeMutation,
  useGetFavoriteArrQuery,
  useDeleteNoticeMutation,
} from 'redux/notices/noticesSlice';
// import { useState } from 'react';

export const NoticesCategoriesList = ({ error, isSuccess, findedNotices }) => {
  const [currentNotices, setCurrentNotices] = useState([]);

  useEffect(() => {
    if (findedNotices) {
      setCurrentNotices(findedNotices);
    }
  }, [findedNotices]);

  const { data: favoriteIdArr } = useGetFavoriteArrQuery();

  if (favoriteIdArr?.data.favorite.length !== 0) {
    currentNotices?.forEach(item => {
      if (favoriteIdArr?.data.favorite.includes(item._id)) {
        item.like = true;
      }
    });
  }

  const favNoticesStatusHandler = notice => {
    if (!favoriteIdArr?.includes(notice._id)) {
      addFavNotice(notice._id);
      notice.like = true;
    } else if (favoriteIdArr?.includes(notice._id)) {
      deleteFavNotice(notice._id);
      notice.like = false;
    }
  };

  const [addFavNotice] = useAddFavoriteNoticeMutation(currentNotices);
  const [deleteFavNotice] = useDeleteFavoriteNoticeMutation(currentNotices);
  const [deleteNotice] = useDeleteNoticeMutation();

  const noticeDeleteHandler = async id => {
    deleteNotice(id);
    const newList = currentNotices.filter(notice => notice._id !== id);
    setCurrentNotices(newList);
  };

  return (
    <CategoriesList>
      {isSuccess &&
        currentNotices &&
        currentNotices.map(notice => (
          <NoticesCategoriesItem
            notice={notice}
            key={notice._id}
            onFavButtonClick={favNoticesStatusHandler}
            noticeDeleteHandler={noticeDeleteHandler}
          />
        ))}
      {error?.data && <NoResult />}
    </CategoriesList>
  );
};
