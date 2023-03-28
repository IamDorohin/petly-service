import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Box, Button, Checkbox } from '@mui/material';
import Modal from 'modals/Modal/Modal';
import { useState } from 'react';
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
  const [toggl, setToggle] = useState(false);

  const showHeart = () => {
    console.log(toggl);
    setToggle(!toggl);
  };


  const {
    breed,
    // category,
    title,
    imgUrl,
    location,
    // price,
    // owner,
    // _id,
    // like,
    sex,
    comments,
  } = moreDetails;

  console.log(moreDetails);

  return (
    <Modal
      sx={ModalBoxNotice}
      isOpen={isOpen}
      onClose={onClose}
      title="dfbsfgbsfgb"
    >
      <div>
        <Div>
          <Box sx={B}>{imgUrl}photo</Box>
          {title}title
          <Ul>
            <L>
              {/* <Box> */}
              <T sx={{ fontWeight: '600' }}>Name:</T>
              <T sx={{ fontWeight: '500' }}>name</T>
              {/* </Box> */}
            </L>
            <L>
              {/* <Box> */}
              <T sx={{ fontWeight: '600' }}>Birthday:</T>
              <T sx={{ fontWeight: '500' }}>birthday</T>
              {/* </Box> */}
            </L>{' '}
            <L>
              {/* <Box> */}
              <T sx={{ fontWeight: '600' }}>Breed:</T>
              <T sx={{ fontWeight: '500' }}>{breed}</T>
              {/* </Box> */}
            </L>{' '}
            <L>
              {/* <Box> */}
              <T sx={{ fontWeight: '600' }}>The Sex:</T>
              <T sx={{ fontWeight: '500' }}>{sex}</T>
              {/* </Box> */}
            </L>{' '}
            <L>
              {/* <Box> */}
              <T sx={{ fontWeight: '600' }}>Location:</T>
              <T sx={{ fontWeight: '500' }}>{location}</T>
              {/* </Box> */}
            </L>
            <L>
              {/* <Box> */}
              <T sx={{ fontWeight: '600' }}>Email:</T>
              <T sx={{ fontWeight: '500' }}>{location}</T>
              {/* </Box> */}
            </L>
            <L>
              {/* <Box> */}
              <T sx={{ fontWeight: '600' }}>Phone:</T>
              <T sx={{ fontWeight: '500' }}>{location}</T>
              {/* </Box> */}
            </L>
          </Ul>
        </Div>
        <Box>
          <T sx={{ fontWeight: '600' }}>Comments:</T>
          <T sx={{ fontWeight: '500' }}>{comments}</T>
        </Box>
        <Box sx={ButtonBox}>
          <Button sx={CantBtn}>Contact</Button>
          <Button
            sx={CantBtn}
            type="submit"
            onClick={() => {
              onFavButtonClick(moreDetails);
              showHeart();
            }}
          >
            Add to
            <Checkbox
              checked={toggl}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
          </Button>
        </Box>
      </div>
    </Modal>
  );
};
