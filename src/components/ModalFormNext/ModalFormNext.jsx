
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';

import { Title } from 'components/ModalForm/ModalForm.styled';
import { AddBtn, AddIcone, ModalBox, TextFielde } from './ModalFormNext.styled';
import { ReactComponent as Vector } from './icon/Vector.svg';
import { TextField } from '@mui/material';




export const ModalFormNext = ({ showModal }) => {

  return (
    <ModalBox>
      <Title>Add pet</Title>

      <AddBtn variant="contained" component="label">
        <Vector />
        <input hidden accept="image/*" multiple type="file" />
      </AddBtn>
      <TextField
        color='primary'
        id="outlined-multiline-flexible"
        label="Type comments"
        multiline
        maxRows={4}
      />
    </ModalBox>
  );
};
