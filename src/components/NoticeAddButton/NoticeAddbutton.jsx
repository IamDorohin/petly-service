import AddIcon from '@mui/icons-material/Add';
import * as SC from 'components/NoticeAddButton/NoticeAddButton.styled'

const NoticeAddButton = () => {
    return (
        <SC.ContainerAddBtn>
            <SC.TitleAddBtn> Add pet </SC.TitleAddBtn>
            <SC.AddButton type='submit'>
                <AddIcon
          sx={{
            width: 32,
            height: 32,
            color: '#ffffff',
          }}
        />
            </SC.AddButton>
          </SC.ContainerAddBtn>

    )
}

export default NoticeAddButton;