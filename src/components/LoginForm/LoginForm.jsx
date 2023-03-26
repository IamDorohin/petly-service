// import { useDispatch } from 'react-redux';
// import { Formik, Form, Field } from 'formik';
// import { TextField } from 'formik-mui';
// import { Button, LinearProgress } from '@mui/material';
// import { errorMUI } from 'shared/Alert';
// // import { ColorRing } from 'react-loader-spinner';
// import * as yup from 'yup';

// import { logIn } from 'redux/auth/operations';
// // import { PageName } from 'components/PagesName/PagesName.styled';
// // import {
// //   ButtonContainer,
// //   BlueButton,
// //   GreenButton,
// // } from 'components/CommonFormButtons/CommonFormButtons.styled';
// // import { ErrorText } from 'components/ErrorMessage/ErrorMessage.styled';
// // import {
// //   LoginSection,
// //   LoginContainer,
// //   // LoginForm,
// //   LoginLabel,
// //   LoginLabelName,
// //   LoginInput,
// // } from './LoginForm.styled';

// const validationSchema = yup.object().shape({
//   email: yup.string().email().required(),
//   password: yup.string().min(6).max(30).required(),
// });

// const initialValues = {
//   email: '',
//   password: '',
// };

// export const LoginForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = (values, { resetForm }) => {
//     const enteredData = values;
//     dispatch(
//       logIn({
//         email: enteredData.email,
//         password: enteredData.password,
//       })
//     );
//     resetForm();
//   };

//   return (
//       <LoginSection>
//         <LoginContainer>
//           <Title>Login</Title>
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             <LoginForm>
//               <LoginLabel htmlFor="email">
//               <LoginLabelName>
//                 Email
//               </LoginLabelName>

//               <LoginInput
//                 type="email"
//                   name="email"
//                   id="lg-email"
//                   placeholder="Email" />
//                 <errorMUI name="email" />
//               </LoginLabel>
//               <LoginLabel htmlFor="password">
//               <LoginLabelName>
//                 Password
//               </LoginLabelName>
//               <LoginInput
//                   type="password"
//                   name="password"
//                   id="lg-password"
//                   placeholder="Password" />
//                 <errorMUI name="password" />
//               </LoginLabel>
//             <Button
//               type="submit">
//               <ColorRing
//                 height={200}
//                 width={200}
//                 ariaLabel="blocks-loading"
//               />
//           <Loader />
//           Login
//         </Button>
//             </LoginForm>
//           </Formik>
//         </LoginContainer>
//       </LoginSection>
//   );
// };
