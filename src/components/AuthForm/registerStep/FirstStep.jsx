import { useState } from 'react';
import * as SC from '../Form.styled';
import { PasswordInput } from '../PasswordInput';

export const FirstStep = ({ formik, isSmall, btnSubmitHandler }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
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
        id={'password'}
        type={showPassword ? 'text' : 'password'}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        size={isSmall ? 'small' : 'medium'}
      />
      <PasswordInput
        formik={formik}
        name={'confirmPassword'}
        label={'Confirm password'}
        id={'confirmPassword'}
        type={showPassword ? 'text' : 'password'}
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        size={isSmall ? 'small' : 'medium'}
      />

      <SC.SubmitButton
        type="submit"
        onClick={btnSubmitHandler}
        isDisabled={formik.isSubmitting}
      >
        Next
      </SC.SubmitButton>
    </>
  );
};
