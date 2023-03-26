import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik, ErrorMessage } from 'formik';

import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import authSelectors from 'redux/login-page/auth/auth-selectors';
import { logIn } from '../../redux/login-page/auth/auth-operations';

import { loginYupSchema } from '../../schemas/validationSchema';
// import { ErrorText } from '../../components/ErrorMessage/ErrorMessage.styled';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

import {
  LoginSection,
  LoginContainer,
  LoginForm,
  LoginInput,
  PasswordInput,
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

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    //  FormError: ({ name }) => {
    //     return (
    //       <ErrorMessage
    //         name={name}
    //         render={message => <ErrorText>{message}</ErrorText>}
    //       />
    //     );
    //   },

    validationSchema: loginYupSchema,
    onSubmit: ({ email, password }) => {
      const authData = { email, password };
      const data = dispatch(logIn(authData));
      if (data.type === 'auth/login/fulfilled') {
        formik.resetForm();
      }
    },
  });

  // console.log(formik);

  return (
    <LoginSection>
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
            error={Boolean(formik.errors.email)}
            helperText={formik.errors.email}
          />
          {/* <const FormError name="email"/> */}
          <FormControl variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <PasswordInput
              label="Password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.password)}
              // helperText={formik.touched.password && formik.errors.password}

              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }

              // show={showPassword}
              // handleClick={handleShowPasswordClick}
            />
            <FormHelperText>{formik.errors.password}</FormHelperText>
          </FormControl>
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
