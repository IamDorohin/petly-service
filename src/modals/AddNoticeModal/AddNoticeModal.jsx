import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { Formik } from 'formik';
import AddNoticeModalFirstStep from './FirstStep';
import AddNoticetModalSecondStep from './SecondStep';
import dayjs from 'dayjs';
import { useAddNoticeMutation } from '../../redux/notices/noticesSlice';
import {
  NOTICE_TYPES,
  addNoticeFirstStepSchema,
  addNoticeSubmitSchema,
} from './AddNoticeModalІSchems';

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
  const [errorMessages, setErrorsMessages] = useState([]);
  const [addNotice] = useAddNoticeMutation();
  //   const { moreDetails, refetch } = useGetNoticesByIdQuery(_id);

  const onNextStepButtonClick = async ({ values, validateForm }) => {
    try {
      const errors = await validateForm(values);
      const errorsArray = Object.values(errors);

      if (errorsArray.length === 0) {
        setStep(STEPS.SECOND);
      } else {
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
    <Modal isOpen={isOpen} onClose={onClose} title="Add notice">
      <Formik
        initialValues={initialValues}
        validationSchema={
          step === STEPS.FIRST
            ? addNoticeFirstStepSchema
            : addNoticeSubmitSchema
        }
        onSubmit={async (values, actions) => {
          console.log(values);
          await addNotice(values);
          actions.resetForm();
          onClose();
        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            {step === STEPS.FIRST && (
              <AddNoticeModalFirstStep
                formik={props}
                onSubmit={() => onNextStepButtonClick(props)}
                onClose={onClose}
                errorMessages={errorMessages}
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
