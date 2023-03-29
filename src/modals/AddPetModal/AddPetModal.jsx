import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { Formik } from 'formik';
import AddPetModalFirstStep from './FirstStep';
import AddPetModalSecondStep from './SecondStep';
import dayjs from 'dayjs';
import { addUserPet } from 'services/profileApi';
import { addPetFirstStepSchema, addPetSubmitSchema } from './AddPetModalShema';
import { useSelector } from 'react-redux';
import selector from 'redux/auth/auth-selectors';

const initialValues = {
  name: '',
  date: dayjs(),
  breed: '',
  comments: '',
  petsImageUrl: null,
};

const STEPS = {
  FIRST: 1,
  SECOND: 2,
};

const AddPetModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(STEPS.FIRST);
  const [errorMessages, setErrorMessages] = useState([]);
  const token = useSelector(selector.getToken);

  const onNextStepButtonClick = async ({ values, validateForm }) => {
    try {
      const errors = await validateForm(values);
      const errorsArray = Object.values(errors);

      if (errorsArray.length === 0) {
        setStep(STEPS.SECOND);
      } else {
        console.log(errorsArray);
        setErrorMessages(errorsArray);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onPrevStepButtonClick = () => {
    setStep(STEPS.FIRST);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add pet">
      <Formik
        initialValues={initialValues}
        validationSchema={
          step === STEPS.FIRST ? addPetFirstStepSchema : addPetSubmitSchema
        }
        onSubmit={async (values, actions) => {
          await addUserPet(token, values);
          actions.resetForm();
          onClose();
        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            {step === STEPS.FIRST && (
              <AddPetModalFirstStep
                formik={props}
                onSubmit={() => onNextStepButtonClick(props)}
                onClose={onClose}
                errorMessages={errorMessages}
              />
            )}
            {step === STEPS.SECOND && (
              <AddPetModalSecondStep
                formik={props}
                onBack={onPrevStepButtonClick}
              />
            )}
          </form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddPetModal;
