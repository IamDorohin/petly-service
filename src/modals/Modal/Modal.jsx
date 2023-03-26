import React from 'react';
import PropTypes from 'prop-types';
import { ButtonI, modalBox, Title } from './Modal.styled';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Box, Modal as ModalUI, Typography } from '@mui/material';

const Modal = ({ isOpen, onClose, children, title }) => {
  return (
    <ModalUI
      open={isOpen}
      onClose={onClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={modalBox}>
        <Typography sx={Title}>{title}</Typography>

        {children}

        <ButtonI onClick={onClose}>
          <CloseIcon />
        </ButtonI>
      </Box>
    </ModalUI>
  );
};

export default Modal;
