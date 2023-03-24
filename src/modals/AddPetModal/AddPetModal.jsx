import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import { Formik } from 'formik';
import AddPetModalFirstStep from './FirstStep';
import AddPetModalSecondStep from './SecondStep';

const initialValues = {
  namePet: '',
  dateOfBirth: '',
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

  const onNextStepButtonClick = () => {
    // validation
    setStep(STEPS.SECOND);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add pet">
      <Formik
        initialValues={initialValues}
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
                onSubmit={onNextStepButtonClick}
                onClose={onClose}
              />
            )}
            {step === STEPS.SECOND && (
              <AddPetModalSecondStep
                formik={props}
                onSubmit={props.handleSubmit}
                onClose={onClose}
              />
            )}
          </form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddPetModal;
