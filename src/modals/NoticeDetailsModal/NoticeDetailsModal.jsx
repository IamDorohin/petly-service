import { Box, Button } from '@mui/material';
import Modal from 'modals/Modal/Modal';
import //   useAddFavoriteNoticeMutation,
'redux/notices/noticesSlice';
import { ButtonBox, CantBtn } from '../AddPetModal/FirstStep.styled';

export const NoticeDetailsModal = ({
  isOpen,
  onClose,
  currentPet,
  onFavButtonClick,
}) => {
  const { breed, category, title, imgUrl, location, price, _id, like } =
    currentPet;

  return (
    <Modal isOpen={isOpen} onClose={() => onClose(false)} title="">
      <div>
        <div>{breed}breed</div>
        <div>{category}</div>
        <div>{title}title</div>
        <div>{imgUrl}photo</div>
        <div>{location}location</div>
        <div>{price}price</div>
        <div>{_id}</div>
        <div>{like}</div>
        <Box sx={ButtonBox}>
          <Button sx={CantBtn} onSubmit={() => onFavButtonClick(currentPet)}>
            Add to
          </Button>
          <Button sx={CantBtn} type="submit">
            Contact
          </Button>
        </Box>
      </div>
    </Modal>
  );
};
