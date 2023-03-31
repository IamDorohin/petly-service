import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {
  ModalContainer,
  FirsModalContainer,
  Photo,
  Grid,
  Item,
  Name,
} from './TeamModal.styled';
import danya from '../../images/team/developers/danya.jpg';
import anastasia from '../../images/team/developers/anastasia.jpg';
import andrii from '../../images/team/developers/andrii.jpg';
import fil from '../../images/team/developers/fil.jpg';
import kostya from '../../images/team/developers/kostya.jpg';
import maks from '../../images/team/developers/maks.jpg';
import mark from '../../images/team/developers/mark.jpg';
import misha from '../../images/team/developers/misha.jpg';
import oksana from '../../images/team/developers/oksana.jpg';
import oleksiy from '../../images/team/developers/oleksiy.jpg';
import sasha from '../../images/team/developers/sasha.jpg';
import vitalii from '../../images/team/developers/vitalii.jpg';
import yurii from '../../images/team/developers/yurii.jpg';

import natalia from '../../images/team/testers/natalia.jpg';
import alina from '../../images/team/testers/alina.jpg';
import maria from '../../images/team/testers/maria.jpg';
import ovechko from '../../images/team/testers/ovechko.jpg';
import pavlo from '../../images/team/testers/pavlo.jpg';
import viktor from '../../images/team/testers/viktor.jpg';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
// };

function DevelopersModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Show Developers Team</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <ModalContainer>
          <h2 id="child-modal-title">Our developers</h2>
          <Grid>
            <Item>
              <Photo alt="team" src={kostya} />
              <Name>Костянтин Дорогін (Тім Лід)</Name>
            </Item>
            <Item>
              <Photo alt="team" src={andrii} />
              <Name>Андрій Ужва</Name>
            </Item>
            <Item>
              <Photo alt="team" src={danya} />
              <Name>Данило Осадченко</Name>
            </Item>
            <Item>
              <Photo alt="team" src={anastasia} />
              <Name>Анастасія Недбай</Name>
            </Item>
            <Item>
              <Photo alt="team" src={oksana} />
              <Name>Оксана Семко</Name>
            </Item>
            <Item>
              <Photo alt="team" src={fil} />
              <Name>Андрій Филь</Name>
            </Item>
            <Item>
              <Photo alt="team" src={maks} />
              <Name>Максим Чуйков</Name>
            </Item>
            <Item>
              <Photo alt="team" src={mark} />
              <Name>Марк Холод</Name>
            </Item>
            <Item>
              <Photo alt="team" src={misha} />
              <Name>Михайло Гурак</Name>
            </Item>
            <Item>
              <Photo alt="team" src={oleksiy} />
              <Name>Олексій Зимогляд (Скрам)</Name>
            </Item>

            <Item>
              <Photo alt="team" src={vitalii} />
              <Name>Віталій Поляков</Name>
            </Item>
            <Item>
              <Photo alt="team" src={yurii} />
              <Name>Юрій Аврамець</Name>
            </Item>
            <Item>
              <Photo alt="team" src={sasha} />
              <Name>Олександр Хмільневський</Name>
            </Item>
          </Grid>
          <Button onClick={handleClose}>Close</Button>
        </ModalContainer>
      </Modal>
    </React.Fragment>
  );
}

function TestersModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Show Testers Team</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <ModalContainer>
          <h2 id="child-modal-title">Our testers</h2>
          <Grid>
            <Item>
              <Photo alt="team" src={natalia} />
              <Name>Наталія Костик (Тім Лід)</Name>
            </Item>
            <Item>
              <Photo alt="team" src={alina} />
              <Name>Аліна Приступко</Name>
            </Item>
            <Item>
              <Photo alt="team" src={maria} />
              <Name>Марія Сидора</Name>
            </Item>
            <Item>
              <Photo alt="team" src={ovechko} />
              <Name>Олександр Овечко</Name>
            </Item>
            <Item>
              <Photo alt="team" src={pavlo} />
              <Name>Павло Кучеренко</Name>
            </Item>
            <Item>
              <Photo alt="team" src={viktor} />
              <Name>Віктор Довгалюк</Name>
            </Item>
          </Grid>
          <Button onClick={handleClose}>Close</Button>
        </ModalContainer>
      </Modal>
    </React.Fragment>
  );
}

export default function TeamModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Show the team</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <FirsModalContainer>
          <DevelopersModal />
          <TestersModal />
        </FirsModalContainer>
      </Modal>
    </div>
  );
}
