import { useState } from 'react';
import Grow from '@mui/material/Grow';
import { HiPlus } from 'react-icons/hi';
import * as SC from './notification.styled';

function GrowTransition(props) {
  return <Grow {...props} />;
}

export const DirectionSnackbar = ({ message, onClick }) => {
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(undefined);

  const handleClick = Transition => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SC.ContainerAddBtnAlert>
        <SC.TitleAddBtnAlert> Add pet </SC.TitleAddBtnAlert>
        <SC.AddButtonAlert onClick={handleClick(GrowTransition)}>
          <HiPlus size={'50%'} className=".forHover" color="#fff" />
        </SC.AddButtonAlert>
      </SC.ContainerAddBtnAlert>

      <SC.AddButtonAlertSnackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        autoHideDuration={3000}
        message={message}
        color={'#fff'}
        key={transition ? transition.name : ''}
      />
    </>
  );
};
