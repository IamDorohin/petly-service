import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import authSelectors from 'redux/auth/auth-selectors';
import { register } from '../../redux/auth/auth-operations';
import { registerYupSchema } from '../../schemas/validationSchema';
import { useMediaQuery } from 'react-responsive';
import * as SC from './Form.styled';
import { FirstStep } from './registerStep/FirstStep';
import { SecondStep } from './registerStep/SecondStep';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const RegisterForm = () => {
  const [currentStep, setCurrentStep] = useState({ firstStep: true });
  const isSmall = useMediaQuery({ maxWidth: 768 });
  const dispatch = useDispatch();
  let isRefreshing = useSelector(authSelectors.getIsRefreshing);

  const { firstStep, secondStep } = currentStep;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      city: '',
      phone: '',
    },

    validationSchema: registerYupSchema,
    onSubmit: async ({ email, password, name, city, phone }) => {
      if (firstStep) {
        setCurrentStep({ secondStep: true });
        return;
      }

      const authData = { email, password, name, city, phone };
      const data = await dispatch(register(authData));

      if (data.type === 'auth/register/fulfilled') {
        formik.resetForm();
        {
          Notify.info(`Hooray! You are registered. 🤩 Please login!`);
        }
      }
    },
  });
  return (
    <>
      <SC.Form onSubmit={formik.handleSubmit}>
        {firstStep && <FirstStep formik={formik} isSmall={isSmall} />}
        {secondStep && (
          <SecondStep
            formik={formik}
            isRefreshing={isRefreshing}
            setCurrentStep={setCurrentStep}
            isSmall={isSmall}
          />
        )}
      </SC.Form>
      {secondStep && (
        <SC.BackButton
          type="button"
          onClick={() => setCurrentStep({ firstStep: true })}
          disabled={formik.isSubmitting}
        >
          Back
        </SC.BackButton>
      )}
    </>
  );
};
