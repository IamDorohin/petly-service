import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

import authSelectors from 'redux/login-page/auth/auth-selectors';
import { logIn } from '../../redux/login-page/auth/auth-operations';

import { loginYupSchema } from '../../schemas/validationSchema';
import { errorMUI } from '../../shared/Alert/errorMUI';

import {
  Section,
  LoginContainer,
  Title,
  Form,
  Label,
  Input,
  Button,
  HelperContainer,
  Loader,
} from './LoginPage.styled';
// import { Navigate } from "react-router-dom";

// import {
//   Autocomplete,
//   TextField,
//   Select,
//   Switch,
//   ToggleButtonGroup,
// } from 'formik-mui';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(prevState => !prevState);
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    const authData = { email: values.email, password: values.password };
    const data = dispatch(logIn(authData));
    if (data.type === 'auth/login/fulfilled') {
      // resetForm();
    }

    if (!data.payload) {
      errorMUI('Please try again later');
    }
    data.error.message && data.error && errorMUI(data.payload.message);
  };

  return (
    <Section>
      <LoginContainer>
        <Title>variant:'h1' Login</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={loginYupSchema}
          onSubmit={handleSubmit}
          isSubmitting
        >
          {formik => (
            <Form>
              <Label>
                Email
                <Input
                  type="email"
                  name="email"
                  id="lg-email"
                  placeholder="Email"
                />
              </Label>

              <Label>
                Password
                <Input
                  type="password"
                  name="password"
                  id="lg-password"
                  placeholder="Password"
                  show={showPassword}
                  handleClick={handleShowPasswordClick}
                />
              </Label>
              {/* <FormControlLabel
              control={
                <Field component={Switch} type="checkbox" name="rememberMe" />
              }
              label="Remember Me"
            /> */}
              <Loader></Loader>
              <Button
                type="submit"
                isDisabled={formik.isSubmitting}
                isLoading={isRefreshing}
                fullWidth
              >
                Login
              </Button>

              <HelperContainer>
                <Title>variant:'h5'; Or use alternative</Title>
                {/* <GoogleSignIn /> */}
              </HelperContainer>
              <HelperContainer>
                <Title>variant:'h5'; Don't have an account?</Title>
              </HelperContainer>
              <HelperContainer>
                variant:'h5';
                <Link to="/register">Register</Link>
              </HelperContainer>
              <HelperContainer>
                <Title>variant:'h5'; Forgot your password?</Title>
              </HelperContainer>
              <HelperContainer>
                {/* <Link to="/recovery">Reset</Link> */}
              </HelperContainer>
            </Form>
          )}
        </Formik>
      </LoginContainer>
    </Section>
  );
};

export default LoginPage;
