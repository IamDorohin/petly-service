import React from 'react';
import { ButtonI} from './Modal.styled';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Modal as ModalUI} from '@mui/material';

const Modal = ({ isOpen, onClose, children, title , sx}) => {
  return (
    <ModalUI
      open={isOpen}
      onClose={onClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={sx}>
        {/* <Typography sx={Title}>{title}</Typography> */}

        {children}

        <ButtonI onClick={onClose}>
          <CloseIcon />
        </ButtonI>
      </Box>
    </ModalUI>
  );
};

export default Modal;
