import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik, ErrorMessage } from 'formik';

import authSelectors from 'redux/login-page/auth/auth-selectors';
import { logIn } from '../../redux/login-page/auth/auth-operations';

import { loginYupSchema } from '../../schemas/validationSchema';
import { ErrorText } from '../../components/ErrorMessage/ErrorMessage.styled';

import {
  LoginSection,
  LoginContainer,
  LoginForm,
  // LoginLabel,
  LoginLabelName,
  LoginInput,
  TitleH1,
  TitleH5,
  Button,
  HelperContainer,
  Loader,
} from './LoginPage.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(prevState => !prevState);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    FormError: ({ name }) => {
      return (
        <ErrorMessage
          name={name}
          render={message => <ErrorText>{message}</ErrorText>}
        />
      );
    },

    validationSchema: loginYupSchema,
    onSubmit: ({ email, password }) => {
      const authData = { email: email, password: password };
      const data = dispatch(logIn(authData));
      if (data.type === 'auth/login/fulfilled') {
        // resetForm();
      }

      if (!data.payload) {
        // errorMUI('Please try again later');
      }
    },
  });

  const handleSubmit = ({ email, password }, { resetForm }) => {
    const authData = { email: email, password: password };
    const data = dispatch(logIn(authData));
    if (data.type === 'auth/login/fulfilled') {
      // resetForm();
    }

    if (!data.payload) {
      // errorMUI('Please try again later');
    }
    data.error.message && data.error && ErrorText(data.payload.message);
  };

  return (
    <LoginSection>
      <LoginContainer>
        <TitleH1>Login</TitleH1>

        <LoginForm onSubmit={formik.handleSubmit}>
          {/* <LoginLabel htmlFor="email"> */}
          <LoginLabelName shrink htmlFor="email">
            Email
          </LoginLabelName>

          <LoginInput
            fullWidth
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {/* <const FormError name="email"/> */}
          {/* </LoginLabel> */}

          {/* <LoginLabel htmlFor="password"> */}
          <LoginLabelName shrink htmlFor="password">
            Password
          </LoginLabelName>
          <LoginInput
            type="password"
            name="password"
            id="lg-password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            // show={showPassword}
            // handleClick={handleShowPasswordClick}
          />
          {/* <const FormError name="password" /> */}
          {/* </LoginLabel> */}

          {/* <Button type="submit"> */}
          {/* <ColorRing
              height={200}
              width={200}
              ariaLabel="blocks-loading"
              />
           <Loader /> */}
          {/* Next */}
          {/* </Button> */}

          {/* <FormControlLabel
              control={
                <Field component={Switch} type="checkbox" name="rememberMe" />
              }
              label="Remember Me"
            /> */}
        </LoginForm>

        <Button
          type="submit"
          isDisabled={formik.isSubmitting}
          isLoading={isRefreshing}
          fullWidth
        >
          Login
          <Loader></Loader>
        </Button>

        {/* <HelperContainer>
            <TitleH5>Or use alternative</TitleH5>
            <GoogleSignIn />
          </HelperContainer> */}
        <HelperContainer>
          <TitleH5>
            Don't have an account?
            <Link to="/register">Register</Link>
          </TitleH5>
        </HelperContainer>
        {/* <HelperContainer>
            <Link to="/register">Register</Link>
          </HelperContainer> */}
        {/* <HelperContainer>
            <TitleH5>Forgot your password?</TitleH5>
          </HelperContainer>
          <HelperContainer>
            <Link to="/recovery">Reset</Link>
          </HelperContainer> */}
      </LoginContainer>
    </LoginSection>
  );
};

export default LoginPage;
