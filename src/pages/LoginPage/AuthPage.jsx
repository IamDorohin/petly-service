import React from 'react';
import { LoginForm } from 'components/AuthForm/LoginFom';
import { RegisterForm } from 'components/AuthForm/RegisterForm';
import { useSelector } from 'react-redux';
import selector from 'redux/auth/auth-selectors';
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
  const getError = useSelector(selector.getError);

  let title = '';
  if (pathname === '/login') title = 'Login';
  if (pathname === '/register') title = 'Registration';

  const forAlertMessage = 'Wrong email or password!';

  console.log('alert', alert);

  return (
    <LoginSection bgImage={{ loginBgLaptop, loginBgMobile, loginBgTablet }}>
      <LoginContainer>
        <TitleH1>{title}</TitleH1>
        {pathname === '/login' && <LoginForm />}
        {pathname === '/register' && <RegisterForm />}
        <HelperContainer>
          {pathname === '/login' && (
            <TitleH5>
              Don't have an account?
              <LoginLink to="/register"> Register</LoginLink>
            </TitleH5>
          )}
          {pathname === '/register' && (
            <TitleH5>
              Already have an account?
              <LoginLink to="/login"> Login</LoginLink>
            </TitleH5>
          )}
        </HelperContainer>
      </LoginContainer>
      {getError?.status === 401 && (
        <DirectionSnackbarLogin message={forAlertMessage} />
      )}
    </LoginSection>
  );
};

export default AuthPage;
