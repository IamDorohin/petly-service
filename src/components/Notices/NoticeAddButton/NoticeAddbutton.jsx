// import AddIcon from '@mui/icons-material/Add';
import { HiPlus } from 'react-icons/hi';
import * as SC from 'components/Notices/NoticeAddButton/NoticeAddButton.styled';

export const NoticeAddButton = () => {
  return (
    <SC.ContainerAddBtn>
      <SC.TitleAddBtn> Add pet </SC.TitleAddBtn>
      <SC.AddButton type="button">
        {/* <SC.AddButtonThumb> */}
        <HiPlus size={'50%'} className=".forHover" color="#fff" />
        {/* </SC.AddButtonThumb> */}
      </SC.AddButton>
    </SC.ContainerAddBtn>
  );
};
