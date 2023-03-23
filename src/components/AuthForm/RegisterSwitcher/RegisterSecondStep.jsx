import React from 'react';
import FormikControl from 'shared/FormikControl/FormikControl';
import Button from 'shared/FormikControl/Button';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux copy/auth/auth-selectors';

const RegisterSecondStep = ({ handleBackClick, isDisabled }) => {
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <>
      <FormikControl
        control="input"
        type="text"
        name="name"
        id="reg-name"
        placeholder="Name"
      />
      <FormikControl
        control="input"
        type="text"
        name="address"
        id="address"
        placeholder="City, region"
      />
      <FormikControl
        control="input"
        type="tel"
        name="phone"
        id="reg-phone"
        placeholder="Mobile phone"
        mb="40px"
      />
      <Button
        controle="secondary"
        mb="4"
        type="submit"
        isDisabled={isDisabled}
        isLoading={isRefreshing}
        loadingText={'Register'}
        aria-label="registration"
      >
        Register
      </Button>
      <Button
        mb="10"
        onClick={handleBackClick}
        isDisabled={isDisabled}
        aria-label="back"
      >
        Back
      </Button>
    </>
  );
};

export default RegisterSecondStep;
