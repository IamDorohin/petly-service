import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Box, Typography, Divider, TextField } from '@mui/material';
import Button from 'shared/FormikControl/Button';
import { Formik, Form } from 'formik';

import RegisterSwitcher from 'components/AuthForm/RegisterSwitcher/RegisterSwitcher';
import { registerYupSchema } from 'schemas/validationSchema';
import { logIn, register } from 'redux/auth/auth-operations';
import { errorMUI } from 'shared/Alert';
// import GoogleSignIn from 'components/GoogleSignIn/GoogleSignIn';

const RegisterForm = () => {
  const [step, setStep] = useState('step1');
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
    confirm: '',
    name: '',
    address: '',
    phone: '',
  };

  const onSubmit = async (values, { resetForm }) => {
    const registerData = {
      email: values.email,
      password: values.password,
      name: values.name,
      address: values.address,
      phone: values.phone,
    };
    const data = await dispatch(register(registerData));

    if (data.type === 'auth/register/fulfilled') {
      dispatch(logIn({ email: values.email, password: values.password }));
      resetForm();
    }
    if (!data.payload) {
      errorMUI('Please try again later');
    }
    data.error && errorMUI(data.payload.message);
  };

  const handleBackClick = () => {
    setStep('step1');
  };

  return (
    <Box
      sx={{
        width: { base: '280px', md: '608px', xl: '618px' },
        //  height: 583,
        pt: { base: '22px', md: '60px' },
        pb: { base: '0', md: '10', xl: '60px' },
        px: { base: '0', md: '20' },
        borderRadius: 40,
        backgroundColor: { base: '#7F7F7F', md: '#FFFFFF' },
        boxShadow: { base: '0', md: '7px 4px 14px rgba(0, 0, 0, 0.11)' },
        mx: 'auto',
      }}
    >
      <Typography
        variant="h1"
        mb="10"
        mt="0"
        textAlign="center"
        fontWeight="medium"
      >
        Registration
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={registerYupSchema}
        onSubmit={onSubmit}
      >
        {formik => (
          <Box
            as={Form}
            position="relative"
            width={{ base: '280px', md: '448px', xl: '458px' }}
          >
            <RegisterSwitcher
              step={step}
              isDisabled={formik.isSubmitting}
              handleBackClick={handleBackClick}
            />
            {step === 'step1' && (
              <>
                <Button
                  aria-label="next"
                  controle="secondary"
                  mb="10"
                  h={{ base: '44px', xl: '12' }}
                  width={{ base: '280px', md: '448px', xl: '458px' }}
                  onClick={async () => {
                    Object.keys(await formik.validateForm()).length === 0
                      ? setStep('step2')
                      : formik.submitForm();
                  }}
                >
                  Next
                </Button>
                <Divider />
                <Box textAlign={'center'} mb={'7'}>
                  <TextField
                    fontFamily="body"
                    fontSize="sm"
                    fontWeight="normal"
                    lineHeight="1.33"
                    letterSpacing="0.04em"
                    color="#11111199"
                    textAlign="center"
                    my={'3.5'}
                  >
                    Or use alternative
                  </TextField>
                  {/* <GoogleSignIn /> */}
                </Box>
              </>
            )}
            <Box display="flex" justifyContent="center">
              <TextField
                fontFamily="body"
                fontSize="xs"
                fontWeight="normal"
                lineHeight="1.33"
                letterSpacing="0.04em"
                color="#11111199"
                textAlign="center"
              >
                Already have an account?
              </TextField>
              <Box
                as="span"
                textDecoration="underline"
                fontFamily="body"
                fontSize="xs"
                fontWeight="normal"
                lineHeight="1.33"
                letterSpacing="0.04em"
                color="#3091EB;"
                textAlign="center"
              >
                <Link to="/login">Login</Link>
              </Box>
            </Box>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default RegisterForm;

// Breakpoints _ screen:
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
