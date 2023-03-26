// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import * as yup from 'yop';
// import Modal from '../Modal/Modal';
// import { Formik } from 'formik';
// import AddPetModalFirstStep from './FirstStep';
// import AddPetModalSecondStep from './SecondStep';
// import dayjs from 'dayjs';
// import { Button,  Typography } from '@mui/material';
// import { ButtonBox, CantBtn } from '../AddPetModal/FirstStep.styled';
// import { Box } from '@mui/system';
// import { FontButton } from '../AddPetModal/SecondStep.styled';

// const initialValues = {
//   namePet: '',
//   dateOfBirth: dayjs(),
//   breed: '',
//   comment: '',
//   photo: null,
// };

// const STEPS = {
//   FIRST: 1,
//   SECOND: 2,
// };

// let userSchema = yup.object({
//   namePet: yup.string().required(),
//   dateOfBirth: yup.number(),
//   breed: yup.string(),
//   comment: yup.string(),
//   photo: yup.string(),
// });

// const AddPetModal = ({ isOpen, onClose }) => {
//   const [step, setStep] = useState(STEPS.FIRST);

//   const onNextStepButtonClick = () => {
//     // validation
//     setStep(STEPS.SECOND);
//   };

//   const onPrevStepButtonClick = () => {
//     setStep(STEPS.FIRST);
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose} title="Add pet">
//       <div>
//         <Typography sx={FontButton}>Add photo and some comments</Typography>
//         <Box sx={ButtonBox}>
//           <Button sx={CantBtn}>Back</Button>
//           <Button sx={CantBtn} type="submit">
//             Done
//           </Button>
//         </Box>
//       </div>
//     </Modal>
//   );
// };

// export default AddPetModal;
