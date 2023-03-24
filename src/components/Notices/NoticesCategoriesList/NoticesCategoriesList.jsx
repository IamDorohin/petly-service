import { useParams } from 'react-router-dom';
import { useGetNoticesByCategoryQuery } from 'redux/notices/noticesSlice';
import { NoticesCategoriesItem } from 'components/Notices/NoticesCategoriesItem/NoticesCategoriesItem';
import { CategoriesList } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = () => {
  const { categoryName } = useParams();

  const { data: array, isSuccess } = useGetNoticesByCategoryQuery(categoryName);

  const findedNotices = array?.data?.notices;

  console.log(array);
  // const noticesNotFound =
  //   error?.data?.message === 'There is no notices in this category';

  return (
    <CategoriesList>
      {isSuccess &&
        findedNotices.map(notice => (
          <NoticesCategoriesItem array={notice} key={notice._id} />
        ))}
      {/* {noticesNotFound && <div>Йди нахуй звідси, розбійник! Стейта немає!</div>} */}
    </CategoriesList>
  );
};
