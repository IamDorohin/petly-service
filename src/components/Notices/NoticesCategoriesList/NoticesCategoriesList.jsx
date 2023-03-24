import { useParams } from 'react-router-dom';
import { NoticesCategoriesItem } from 'components/Notices/NoticesCategoriesItem/NoticesCategoriesItem';
import { CategoriesList } from './NoticesCategoriesList.styled';

import { useState } from 'react';
import {
  useGetNoticesByCategoryQuery,
  useAddFavoriteNoticeMutation,
  useDeleteFavoriteNoticeMutation,
} from 'redux/notices/noticesSlice';

export const NoticesCategoriesList = ({ newSearchNotices }) => {
  const { categoryName } = useParams();
  const [currentFavNotice, setCurrentFavNotice] = useState([]);

  const { favNotices = [] } = useGetNoticesByCategoryQuery('favorite');

  const {
    currentData: array,
    error,
    isSuccess,
  } = useGetNoticesByCategoryQuery(categoryName);

  const findedNotices = array?.data?.notices;

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
    // <CategoriesList>
    //   {newSearchNotices
    //     ? newSearchNotices.map(notice => (
    //         <NoticesCategoriesItem
    //           array={notice}
    //           key={notice._id}
    //           onClick={favNoticesStatusHandler}
    //         />
    //       ))
    //     : findedNotices.map(notice => (
    //         <NoticesCategoriesItem
    //           array={notice}
    //           key={notice._id}
    //           onClick={favNoticesStatusHandler}
    //         />
    //       ))}

    //   {noticesNotFound && <div>Йди звідси, розбійник!</div>}
    // </CategoriesList>
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
      {noticesNotFound && <div>Йди звідси, розбійник!</div>}
    </CategoriesList>
  );
};
