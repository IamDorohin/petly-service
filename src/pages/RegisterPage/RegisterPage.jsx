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
import { register } from '../../redux/auth/auth-operations';
import { registerYupSchema } from '../../schemas/validationSchema';

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
} from './RegisterPage.styled';

import { loginBgLaptop, loginBgMobile, loginBgTablet } from 'images';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

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

    validationSchema: registerYupSchema,
    onSubmit: async ({ email, password }) => {
      const authData = { email, password };
      const data = await dispatch(register(authData));

      if (data.type === 'auth/register/fulfilled') {
        formik.resetForm();
      }
    },
  });

  return (
    <LoginSection>
      <LoginBgImage
        srcSet={`${loginBgMobile}, ${loginBgTablet}, ${loginBgLaptop}`}
        src={loginBgLaptop}
        // sizes="(min-width: 1280px) 590px, (min-width: 768px) 645px, 300px"
        alt="login"
      ></LoginBgImage>
      <LoginContainer>
        <TitleH1>Registration</TitleH1>

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
        </LoginForm>

        <Button
          type="submit"
          onClick={formik.handleSubmit}
          isDisabled={formik.isSubmitting}
          isLoading={isRefreshing}
          fullWidth
        >
          {isRefreshing ? <Loader /> : 'Login'}
        </Button>

        <HelperContainer>
          <TitleH5>
            Don't have an account?
            <LoginLink to="/register">Register</LoginLink>
          </TitleH5>
        </HelperContainer>
      </LoginContainer>
    </LoginSection>
  );
};

export default RegisterPage;
