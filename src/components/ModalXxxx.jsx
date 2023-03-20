
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Backdrop, ButtonI, modalBox } from './BasicModal/Modal.styled';
import { ModalForm } from './ModalForm/ModalForm';
import CloseIcon from '@mui/icons-material/Close';
import { NextBtn } from './ModalForm/ModalForm.styled';
import { ModalFormNext } from './ModalFormNext/ModalFormNext';



export function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <NextBtn onClick={handleOpen} id="button">
        Next
      </NextBtn>
      <Modal open={open} onClose={handleClose} slots={{ backdrop: Backdrop }}>
        <Box sx={modalBox}>
          <ButtonI onClick={handleClose}>
            <CloseIcon />
          </ButtonI>
          <ModalFormNext />
          <NextBtn onClick={handleClose}>Done</NextBtn>
          <NextBtn onClick={handleClose}>Back</NextBtn>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal({ showModal }) {
  return (
    <div>
      <Modal
        open={true}
        onClose={showModal}
      >
        <Box sx={modalBox}>
          <ModalForm showModal={showModal} />
          <ChildModal />
          <ButtonI onClick={showModal}>
            <CloseIcon />
          </ButtonI>
        </Box>
      </Modal>
    </div>
  );
}
