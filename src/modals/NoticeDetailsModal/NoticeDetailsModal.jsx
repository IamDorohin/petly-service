
import { Box, Button } from '@mui/material';
import Modal from 'modals/Modal/Modal';
import {
  useGetNoticesByIdQuery,
} from 'redux/notices/noticesSlice';
import { ButtonBox, CantBtn } from '../AddPetModal/FirstStep.styled';

export const NoticeDetailsModal = ({
  isOpen,
  onClose,
  onFavButtonClick,
  activeNoticeId,
}) => {
  const { moreDetails = {} } = useGetNoticesByIdQuery(activeNoticeId);


  const { breed, category, title, imgUrl, location, price, owner, _id, like } =
    moreDetails;

  console.log(moreDetails);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div>
        <div>{imgUrl}photo</div>
        <div>{breed}breed</div>
        <div>{category}</div>
        <div>{title}title</div>

        <div>{location}location</div>
        <div>{price}price</div>
        <div>{owner}owner</div>
        <div>{_id}</div>
        <div>{like}</div>
        <Box sx={ButtonBox}>
          <Button sx={CantBtn}>Add to</Button>
          <Button
            sx={CantBtn}
            type="submit"
            onSubmit={() => onFavButtonClick(moreDetails)}
          >
            Contact
          </Button>
        </Box>
      </div>
    </Modal>
  );
};
