import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export function errorMUI() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">😿Sorry, something wrong!</Alert>
    </Stack>
  );
}
