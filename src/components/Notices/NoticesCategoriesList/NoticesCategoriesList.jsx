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
import { useState } from 'react';

export const NoticesCategoriesList = ({ searchParams }) => {
  useState(false);

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

  if (favoriteIdArr?.data.favorite.length !== 0) {
    findedNotices?.forEach(item => {
      if (favoriteIdArr?.data.favorite.incudes(item._id)) {
        item.like = true;
      }
    });
  }

  const noticesNotFound =
    error?.data?.message === 'There is no notices in this category';

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
      {noticesNotFound && <NoResult />}
      {/* <NoticeDetailsModal
        isOpen={isNoticeDetailsModalOpen}
        onClose={closeNoticeDetailsModal}
        onFavButtonClick={favNoticesStatusHandler}
        activeNoticeId={activeNoticeId}
      /> */}
    </CategoriesList>
  );
};
