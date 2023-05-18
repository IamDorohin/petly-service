import React from 'react';
import { ButtonI, ModalUI } from './Modal.styled';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';

const Modal = ({ isOpen, onClose, children, title, sx }) => {
  return (
    <ModalUI
      open={isOpen}
      onClose={onClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={sx}>
        {children}
        <ButtonI onClick={onClose}>
          <CloseIcon />
        </ButtonI>
      </Box>
    </ModalUI>
  );
};

export default Modal;
