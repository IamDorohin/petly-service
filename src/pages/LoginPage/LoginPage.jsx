import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import authSelectors from 'redux/auth/auth-selectors';
import { logIn } from '../../redux/auth/auth-operations';
import { loginYupSchema } from '../../schemas/validationSchema';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

import {
  LoginSection,
  LoginBgImage,
  LoginContainer,
  LoginForm,
  LoginInput,
  PasswordInput,
  TitleH1,
  TitleH5,
  Button,
  HelperContainer,
  LoginLink,
  Loader,
} from './LoginPage.styled';

import { loginBgLaptop, loginBgMobile, loginBgTablet } from 'images';
// import  loginImage from '../../images/login-bg-auth-mobile-min.png';

const LoginPage = () => {
  const dispatch = useDispatch();
  let isRefreshing = useSelector(authSelectors.getIsRefreshing);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: loginYupSchema,
    onSubmit: async ({ email, password }) => {
      const authData = { email, password };
      const data = await dispatch(logIn(authData));

      if (data.type === 'auth/login/fulfilled') {
        formik.resetForm();
      }
    },
  });

  return (
    <LoginSection bgImage={{ loginBgLaptop, loginBgMobile, loginBgTablet }}>
      <LoginContainer>
        <TitleH1>Login</TitleH1>

        <LoginForm onSubmit={formik.handleSubmit}>
          <LoginInput
            fullWidth
            label="Email"
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <PasswordInput
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText>
              {formik.touched.password && formik.errors.password}
            </FormHelperText>
          </FormControl>

          <Button
            type="submit"
            onClick={formik.handleSubmit}
            isDisabled={formik.isSubmitting}
            isLoading={isRefreshing}
            fullWidth
          >
            {isRefreshing ? <Loader size={30} thickness={4} /> : 'Login'}
          </Button>
        </LoginForm>

        <HelperContainer>
          <TitleH5>
            Don't have an account?
            <LoginLink to="/register">Register</LoginLink>
          </TitleH5>
        </HelperContainer>
      </LoginContainer>
      {/* <LoginBgImage src={loginBgMobile} /> */}
    </LoginSection>
  );
};

export default LoginPage;
