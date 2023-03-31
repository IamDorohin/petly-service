import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
// import { DirectionSnackbarLogin } from './notification';

import authSelectors from 'redux/auth/auth-selectors';
import { logIn } from '../../redux/auth/auth-operations';
import { loginYupSchema } from '../../schemas/validationSchema';

import * as SC from './Form.styled';
import { PasswordInput } from './PasswordInput';

export const LoginForm = ({ handler }) => {
  const dispatch = useDispatch();
  let isRefreshing = useSelector(authSelectors.getIsRefreshing);
  const isSmall = useMediaQuery({ maxWidth: 768 });

  const [showPassword, setShowPassword] = useState(false);
  const [isSuccessLogin, setIsSuccessLogin] = useState(true);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: loginYupSchema,
    onSubmit: async ({ email, password }) => {
      const authData = { email, password };
      const data = await dispatch(logIn(authData));

      if (data.type === 'auth/login/rejected') {
        handler(data.type);
        setIsSuccessLogin(false);
      }

      if (data.type === 'auth/login/fulfilled') {
        formik.resetForm();
      }
    },
  });

  return (
    <>
      <SC.Form onSubmit={formik.handleSubmit}>
        <SC.Input
          fullWidth
          label="Email"
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          size={isSmall ? 'small' : 'medium'}
        />
        <PasswordInput
          formik={formik}
          name={'password'}
          label={'Password'}
          type={showPassword ? 'text' : 'password'}
          id={'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          size={isSmall ? 'small' : 'medium'}
        />

        <SC.SubmitButton
          type="submit"
          onClick={formik.handleSubmit}
          isDisabled={formik.isSubmitting}
          isLoading={isRefreshing}
        >
          {isRefreshing ? <SC.Loader size={30} thickness={4} /> : 'Login'}
        </SC.SubmitButton>
      </SC.Form>
    </>
  );
};
