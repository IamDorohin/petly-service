import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonI, modalBox } from './Modal.styled';
import { ModalForm } from 'components/ModalForm/ModalForm';
import { ChildModal } from 'components/ModalXxxx';

export function BasicModal({ showModal }) {

//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

  return (
    <div>
      {/* <Button onClick={showModal}>Open modal</Button> */}
      <Modal
        open={true}
        onClose={showModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={modalBox}>
          <ModalForm showModal={ showModal }/>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
