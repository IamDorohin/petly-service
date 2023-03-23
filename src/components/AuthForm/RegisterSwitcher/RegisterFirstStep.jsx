import React from 'react';
import { useState } from 'react';
import FormikControl from 'shared/FormikControl/FormikControl';

const RegisterFirstStep = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClick = name => {
    name === 'password'
      ? setShowPassword(prevState => !prevState)
      : setShowConfirmPassword(prevState => !prevState);
  };

  return (
    <>
      <FormikControl
        control="input"
        type="email"
        name="email"
        id="reg-email"
        placeholder="Email"
      />
      <FormikControl
        control="input"
        type="password"
        handleClick={() => handleClick('password')}
        show={showPassword}
        name="password"
        id="reg-password"
        placeholder="Password"
      />
      <FormikControl
        control="input"
        type="password"
        handleClick={handleClick}
        show={showConfirmPassword}
        name="confirm"
        id="reg-confirm-password"
        placeholder="Confirm Password"
        mb="40px"
      />
    </>
  );
};

export default RegisterFirstStep;
