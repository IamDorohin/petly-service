import React from 'react';
import { LoginForm } from 'components/AuthForm/LoginFom';
import { RegisterForm } from 'components/AuthForm/RegisterForm';
import { useState } from 'react';
import {
  LoginSection,
  LoginContainer,
  TitleH1,
  TitleH5,
  HelperContainer,
  LoginLink,
} from './LoginPage.styled';
import { DirectionSnackbarLogin } from 'components/AuthForm/notification';

import { loginBgLaptop, loginBgMobile, loginBgTablet } from 'images';
import { useLocation } from 'react-router-dom';

const AuthPage = () => {
  const { pathname } = useLocation();
  const [alert, setAlert] = useState('');

  const statusHandler = status => {
    setAlert(status);
  };

  let title = '';
  if (pathname === '/login') title = 'Login';
  if (pathname === '/register') title = 'Registration';

  const forAlertMessage = 'Looks like incorrect login data. Please try again!';

  console.log('alert', alert);

  return (
    <LoginSection bgImage={{ loginBgLaptop, loginBgMobile, loginBgTablet }}>
      <LoginContainer>
        <TitleH1>{title}</TitleH1>
        {pathname === '/login' && <LoginForm handler={statusHandler} />}
        {pathname === '/register' && <RegisterForm />}
        <HelperContainer>
          {pathname === '/login' && (
            <TitleH5>
              Don't have an account?
              <LoginLink to="/register">Register</LoginLink>
            </TitleH5>
          )}
          {pathname === '/register' && (
            <TitleH5>
              Already have an account?
              <LoginLink to="/login">Login</LoginLink>
            </TitleH5>
          )}
        </HelperContainer>
      </LoginContainer>
      {alert === 'auth/login/rejected' && (
        <DirectionSnackbarLogin message={forAlertMessage} />
      )}
    </LoginSection>
  );
};

export default AuthPage;
