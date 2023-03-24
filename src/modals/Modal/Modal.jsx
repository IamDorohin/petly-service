import React from 'react';
import PropTypes from 'prop-types';
import { modalBox, Title } from './Modal.styled';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Box, Modal as ModalUI } from '@mui/material';

const Modal = ({ isOpen, onClose, children, title }) => {
  return (
    <ModalUI
      open={isOpen}
      onClose={onClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box
      //   sx={modalBox}
      >
        <Title>{title}</Title>

        {children}

        {/* <Button onClick={onClose}>
          <CloseIcon />
        </Button> */}
      </Box>
    </ModalUI>
  );
};

export default Modal;