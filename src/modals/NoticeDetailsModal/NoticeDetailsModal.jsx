import { Box, Button, Typography } from '@mui/material';
import Modal from 'modals/Modal/Modal';
import { useGetNoticesByIdQuery } from 'redux/notices/noticesSlice';
import { ButtonBox, CantBtn } from '../AddPetModal/FirstStep.styled';
import { B, Div, L, ModalBoxNotice, T, Ul } from './NoticeDetailsModal.styled';

export const NoticeDetailsModal = ({
  isOpen,
  onClose,
  onFavButtonClick,
  activeNoticeId,
}) => {
  const { moreDetails = {} } = useGetNoticesByIdQuery(activeNoticeId);

  const {
    breed,
    category,
    title,
    imgUrl,
    location,
    price,
    owner,
    _id,
    like,
    sex,
    comments,
  } = moreDetails;

  console.log(moreDetails);

  return (
    <Modal sx={ModalBoxNotice} isOpen={isOpen} onClose={onClose} title='dfbsfgbsfgb'>
      <div>
        <Div>
          {/* {moreDetails.map(
            ({
              breed,
              category,
              title,
              imgUrl,
              location,
              price,
              owner,
              _id,
              like,
              sex,
              comments,
              }) => {
                  return (
                    <ul>
                      <li>Name: {breed}</li>,<li>Name: {breed}</li>,
                      <li>Location: {location}</li>,<li>Name: {breed}</li>,
                      <li>Sex:{sex}</li>,<li>Price:{price}</li>,
                      <li>Name: {breed}</li>,<li>Name: {breed}</li>,
                    </ul>
                  );}
          )} */}
          <Box sx={B}>{imgUrl}photo</Box>
          {title}title
          <Ul>
            <L>
              {/* <Box> */}
              <T sx={{ fontWeight: '600' }}>Location:</T>
              <T sx={{ fontWeight: '500' }}>Location</T>
              {/* </Box> */}
            </L>
            <L>
              {/* <Box> */}
              <T sx={{ fontWeight: '600' }}>Location:</T>
              <T sx={{ fontWeight: '500' }}>Location</T>
              {/* </Box> */}
            </L>{' '}
            <L>
              {/* <Box> */}
              <T sx={{ fontWeight: '600' }}>Sex:</T>
              <T sx={{ fontWeight: '500' }}>Sex</T>
              {/* </Box> */}
            </L>{' '}
            <L>
              {/* <Box> */}
              <T sx={{ fontWeight: '600' }}>Name:</T>
              <T sx={{ fontWeight: '500' }}>Name</T>
              {/* </Box> */}
            </L>
          </Ul>
        </Div>
        {/* <T>
          Location: <T>'{location}'</T>
        </T>
        <Typography sx={FontButtonNotice}>Sex:{sex}</Typography>
        <Typography sx={FontButtonNotice}>Name: {breed}</Typography>
        <Typography sx={FontButtonNotice}>Name: {breed}</Typography> */}
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
