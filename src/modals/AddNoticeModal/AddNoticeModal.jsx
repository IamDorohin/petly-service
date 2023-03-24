import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import { Formik } from 'formik';
import AddNoticeModalFirstStep from './FirstStep';
import AddNoticetModalSecondStep from './SecondStep';
import dayjs from 'dayjs';

export const NOTICE_TYPES = {
  LOST_FOUND: 1,
  GOOD_HANDS: 2,
  SELL: 3,
};

const initialValues = {
  noticeType: NOTICE_TYPES.LOST_FOUND,
  noticeTitle: '',
  namePet: '',
  dateOfBirth: dayjs(),
  breed: '',
  sex: 'male',
  location: '',
  price: '',
  comment: '',
  photo: null,
};

const STEPS = {
  FIRST: 1,
  SECOND: 2,
};

const AddNoticeModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(STEPS.FIRST);

  const onNextStepButtonClick = () => {
    // validation
    setStep(STEPS.SECOND);
  };

  const onPrevStepButtonClick = () => {
    setStep(STEPS.FIRST);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add notice">
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
              <AddNoticeModalFirstStep
                formik={props}
                onSubmit={onNextStepButtonClick}
                onClose={onClose}
              />
            )}
            {step === STEPS.SECOND && (
              <AddNoticetModalSecondStep
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

export default AddNoticeModal;
