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
import { modalBox, Title } from '../Modal/Modal.styled';
import { Typography } from '@mui/material';

const initialValues = {
  category: NOTICE_TYPES.LOST_FOUND,
  title: '',
  name: '',
  birthdate: dayjs(),
  breed: '',
  sex: 'male',
  location: '',
  price: '',
  comments: '',
  imgUrl: null,
};

const STEPS = {
  FIRST: 1,
  SECOND: 2,
};

const AddNoticeModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(STEPS.FIRST);
  const [errorMessages, setErrorsMessages] = useState([]);
  const [addNotice] = useAddNoticeMutation();

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
    <Modal sx={modalBox} isOpen={isOpen} onClose={onClose}>
      <Typography sx={Title}>Add notice</Typography>
      <Formik
        validateOnChange={false}
        initialValues={initialValues}
        validationSchema={
          step === STEPS.FIRST
            ? addNoticeFirstStepSchema
            : addNoticeSubmitSchema
        }
        onSubmit={async (
          {
            category,
            title,
            name,
            birthdate,
            breed,
            sex,
            location,
            price,
            comments,
            imgUrl,
          },
          actions
        ) => {
          const values = {
            title,
            name,
            breed,
            category,
            location,
            imgUrl,
            sex,
          };
          console.log('values', values);
          if (birthdate) values.birthdate = birthdate;
          if (price) values.price = Number(price);
          if (comments) values.comments = comments;
          let formData = new FormData();
          for (let value in values) {
            formData.append(value, values[value]);
          }
          await addNotice(formData);
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
