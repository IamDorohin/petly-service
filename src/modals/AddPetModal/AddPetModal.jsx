import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { Formik } from 'formik';
import AddPetModalFirstStep from './FirstStep';
import AddPetModalSecondStep from './SecondStep';
import dayjs from 'dayjs';
import { useAddNoticeMutation } from '../../redux/notices/noticesSlice';
import { addPetFirstStepSchema, addPetSubmitSchema } from './AddPetModalShema';
import { modalBox, Title } from '../Modal/Modal.styled';
import { Typography } from '@mui/material';

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
  const [errorMessages, setErrorMessages] = useState([]);
  const [addNotice] = useAddNoticeMutation();

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
    <Modal sx={modalBox} isOpen={isOpen} onClose={onClose}>
      <Typography sx={Title}>Add pet</Typography>
      <Formik
        validateOnChange={false}
        initialValues={initialValues}
        validationSchema={
          step === STEPS.FIRST ? addPetFirstStepSchema : addPetSubmitSchema
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
