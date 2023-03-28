import React from 'react';
import { LoginForm } from 'components/AuthForm/LoginFom';
import { RegisterForm } from 'components/AuthForm/RegisterForm';

import {
  LoginSection,
  LoginContainer,
  TitleH1,
  TitleH5,
  HelperContainer,
  LoginLink,
} from './LoginPage.styled';

import { loginBgLaptop, loginBgMobile, loginBgTablet } from 'images';
import { useLocation } from 'react-router-dom';
// import  loginImage from '../../images/login-bg-auth-mobile-min.png';

const AuthPage = () => {
  const { pathname } = useLocation();
  let title = '';
  if (pathname === '/login') title = 'Login';
  if (pathname === '/register') title = 'Registration';

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
    </LoginSection>
  );
};

export default AuthPage;
