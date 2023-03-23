import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function errorMUI() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">😿Sorry, something wrong!</Alert>
      {/* <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">🐶 Well done!</Alert> */}
    </Stack>
  );
}
