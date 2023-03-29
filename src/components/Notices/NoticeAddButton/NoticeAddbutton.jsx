// import AddIcon from '@mui/icons-material/Add';
import { HiPlus } from 'react-icons/hi';
import * as SC from 'components/Notices/NoticeAddButton/NoticeAddButton.styled';

export const NoticeAddButton = ({ onClick }) => {
  return (
    <SC.ContainerAddBtn>
      <SC.TitleAddBtn> Add pet </SC.TitleAddBtn>
      <SC.AddButton type="button" onClick={onClick}>
        <HiPlus size={'50%'} className=".forHover" color="#fff" />
      </SC.AddButton>
    </SC.ContainerAddBtn>
  );
};
