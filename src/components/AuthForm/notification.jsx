import { useState } from 'react';
import Grow from '@mui/material/Grow';
import * as SC from 'components/Generic/Notification/notification.styled';

function GrowTransition(props) {
  return <Grow {...props} />;
}

export const DirectionSnackbarLogin = ({ message }) => {
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(undefined);

  if (!open) {
    setTransition(() => GrowTransition);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
