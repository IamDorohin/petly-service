import React from 'react';
import { Box } from '@mui/material';
import RegisterForm from 'components/AuthForm/RegisterForm';
import {
  authBackgroundMobile,
  authBackgroundLaptop,
  authBackgroundTablet,
} from 'images';

const RegisterPage = () => {
  return (
    <Box
      as="main"
      bgImage={{
        base: authBackgroundMobile,
        md: authBackgroundTablet,
        xl: authBackgroundLaptop,
      }}
      bgPosition="bottom"
      bgSize="contain"
      bgRepeat="no-repeat"
      bgColor="accent.background"
      h={{
        base: 'calc(100vh - 74px)',
        md: 'calc(100vh - 96px)',
        xl: 'calc(100vh - 88px)',
      }}
      pt={{ md: '145px', xl: '26px' }}
    >
      <RegisterForm />
    </Box>
  );
};

export default RegisterPage;

// Breakpoints _ screen:
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
