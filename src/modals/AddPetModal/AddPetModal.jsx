import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { Formik } from 'formik';
import AddPetModalFirstStep from './FirstStep';
import AddPetModalSecondStep from './SecondStep';
import dayjs from 'dayjs';
import { addPetFirstStepSchema, addPetSubmitSchema } from './AddPetModalShema';

const initialValues = {
  namePet: '',
  dateOfBirth: dayjs(),
  breed: '',
  comment: '',
  photo: null,
};

const STEPS = {
  FIRST: 1,
  SECOND: 2,
};

const AddPetModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(STEPS.FIRST);
  const [errorsMessages, setErrorsMessages] = useState([]);

  const onNextStepButtonClick = async ({ values, validateForm }) => {
    try {
      const errors = await validateForm(values);
      const errorsArray = Object.values(errors);

      if (errors.length === 0) {
        setStep(STEPS.SECOND);
      } else {
        console.log(errors, errors.length);
        setErrorsMessages(errorsArray);
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
        onSubmit={(values, actions) => {
          console.log(values);
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
                errorsMessages={errorsMessages}
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
