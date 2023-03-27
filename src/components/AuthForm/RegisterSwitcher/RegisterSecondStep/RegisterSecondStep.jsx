// import React from 'react';
// // import { useState } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { useSelector } from 'react-redux';
// // import { Link } from 'react-router-dom';
// // import { useFormik } from 'formik';

// import InputAdornment from '@mui/material/InputAdornment';
// import IconButton from '@mui/material/IconButton';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// import authSelectors from 'redux/auth/auth-selectors';
// import { register } from '../../redux/auth/auth-operations';
// import { registerYupSchema } from '../../schemas/validationSchema';

// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import FormHelperText from '@mui/material/FormHelperText';

// import {
//   RegisterSection,
//   RegisterBgImage,
//   RegisterContainer,
//   RegisterForm,
//   RegisterInputName,
//   RegisterInputAddress,
//   RegisterInputTel,
//   PasswordInput,
//   TitleH1,
//   TitleH5,
//   Button,
//   HelperContainer,
//   RegisterLink,
//   Loader,
// } from './RegisterSecondStep.styled';

// import { loginBgLaptop, loginBgMobile, loginBgTablet } from 'images';

// const RegisterSecondStep = ({ handleBackClick, isDisabled }) => {
//   let isRefreshing = useSelector(authSelectors.getIsRefreshing);

// // const RegisterSecondStep = () => {
// //   const dispatch = useDispatch();
// //   let isRefreshing = useSelector(authSelectors.getIsRefreshing);

//   // const [showPassword, setShowPassword] = useState(false);

//   // const handleClickShowPassword = () => setShowPassword(show => !show);

//   // const handleMouseDownPassword = event => {
//   //   event.preventDefault();
//   // };

//   // const formik = useFormik({
//   //   initialValues: {
//   //     email: '',
//   //     password: '',
//   //   },

//   //   validationSchema: registerYupSchema,
//   //   onSubmit: async ({ email, password }) => {
//   //     const authData = { email, password };
//   //     const data = await dispatch(register(authData));

//   //     if (data.type === 'auth/register/fulfilled') {
//   //       formik.resetForm();
//   //     }
//   //   },
//   // });

//   return (
//     <RegisterSection bgImage={{ loginBgLaptop, loginBgMobile, loginBgTablet }}>
//       <RegisterContainer>
//         <TitleH1>Registration</TitleH1>

//         <RegisterForm onSubmit={formik.handleSubmit}>
//           <RegisterInputName
//             fullWidth
//             label="Name"
//             type="name"
//             name="name"
//             id="name"
//             value={formik.values.name}
//             onChange={formik.handleChange}
//             error={formik.touched.name && Boolean(formik.errors.name)}
//             helperText={formik.touched.name && formik.errors.name}
//           />

//           <RegisterInputAddress
//             fullWidth
//             label="City, region"
//             type="text"
//             name="address"
//             id="address"
//             value={formik.values.address}
//             onChange={formik.handleChange}
//             error={formik.touched.address && Boolean(formik.errors.address)}
//             helperText={formik.touched.address && formik.errors.address}
//           />

//           <RegisterInputTel
//             fullWidth
//             label="Mobile phone"
//             type="tel"
//             name="phone"
//             id="phone"
//             value={formik.values.phone}
//             onChange={formik.handleChange}
//             error={formik.touched.phone && Boolean(formik.errors.phone)}
//             helperText={formik.touched.phone && formik.errors.phone}
//           />

//           <Button
//             type="submit"
//             onClick={formik.handleSubmit}
//             isDisabled={formik.isSubmitting}
//             isLoading={isRefreshing}
//             fullWidth
//           >
//             {isRefreshing ? <Loader size={30} thickness={4} /> : 'Register'}
//           </Button>

//           <Button
//             type="submit"
//             onClick={formik.handleSubmit}
//             isDisabled={formik.isSubmitting}
//             isLoading={isRefreshing}
//             fullWidth
//           >
//             {isRefreshing ? <Loader size={30} thickness={4} /> : 'Back'}
//           </Button>
//         </RegisterForm>

//         <HelperContainer>
//           <TitleH5>
//             Already have an account?
//             {/* <RegisterLink to="/login">Login</RegisterLink> */}
//           </TitleH5>
//         </HelperContainer>
//       </RegisterContainer>
//     </RegisterSection>
//   );
// };

// export default RegisterSecondStep;
