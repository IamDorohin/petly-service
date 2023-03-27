// import React from 'react';
// import { useState } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { useSelector } from 'react-redux';
// // import { Link } from 'react-router-dom';
// // import { useFormik } from 'formik';

// import InputAdornment from '@mui/material/InputAdornment';
// import IconButton from '@mui/material/IconButton';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// // import authSelectors from 'redux/auth/auth-selectors';
// // import { register } from '../../redux/auth/auth-operations';
// // import { registerYupSchema } from '../../schemas/validationSchema';

// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import FormHelperText from '@mui/material/FormHelperText';

// import {
//   RegisterSection,
//   RegisterBgImage,
//   RegisterContainer,
//   RegisterForm,
//   RegisterInput,
//   PasswordInput,
//   PasswordConfirmInput,
//   TitleH1,
//   TitleH5,
//   Button,
//   HelperContainer,
//   RegisterLink,
//   Loader,
// } from './RegisterFirstStep.styled';

// import { loginBgLaptop, loginBgMobile, loginBgTablet } from 'images';

// const RegisterFirstStep = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   // const handleClick = name => {
//   //   name === 'password'
//   //     ? setShowPassword(prevState => !prevState)
//   //     : setShowConfirmPassword(prevState => !prevState);

// // const RegisterFirstStep = () => {
// //   const dispatch = useDispatch();
// //   let isRefreshing = useSelector(authSelectors.getIsRefreshing);

// //   const [showPassword, setShowPassword] = useState(false);

// //   const handleClickShowPassword = () => setShowPassword(show => !show);

// //   const handleMouseDownPassword = event => {
// //     event.preventDefault();
// //   };

// //   const formik = useFormik({
// //     initialValues: {
// //       email: '',
// //       password: '',
// //     },

// //     validationSchema: registerYupSchema,
// //     onSubmit: async ({ email, password }) => {
// //       const authData = { email, password };
// //       const data = await dispatch(register(authData));

// //       if (data.type === 'auth/register/fulfilled') {
// //         formik.resetForm();
// //       }
// //     },
// //   });

//   return (
//     <RegisterSection bgImage={{ loginBgLaptop, loginBgMobile, loginBgTablet }}>
//       <RegisterContainer>
//         <TitleH1>Registration</TitleH1>

//         <RegisterForm onSubmit={formik.handleSubmit}>
//           <RegisterInput
//             fullWidth
//             label="Email"
//             type="email"
//             name="email"
//             id="email"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             error={formik.touched.email && Boolean(formik.errors.email)}
//             helperText={formik.touched.email && formik.errors.email}
//           />
//           <FormControl variant="outlined">
//             <InputLabel htmlFor="password">Password</InputLabel>
//             <PasswordInput
//               fullWidth
//               name="password"
//               label="Password"
//               type={showPassword ? 'text' : 'password'}
//               id="password"
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               error={formik.touched.password && Boolean(formik.errors.password)}
//               endAdornment={
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={handleClickShowPassword}
//                     edge="end"
//                     onMouseDown={handleMouseDownPassword}
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               }
//             />
//             <FormHelperText>
//               {formik.touched.password && formik.errors.password}
//             </FormHelperText>
//           </FormControl>

//           <FormControl variant="outlined">
//             <InputLabel htmlFor="password">Confirm Password</InputLabel>
//             <PasswordConfirmInput
//               fullWidth
//               name="confirm password"
//               label="Password"
//               type={showPassword ? 'text' : 'password'}
//               id="confirm-password"
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               error={formik.touched.password && Boolean(formik.errors.password)}
//               endAdornment={
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={handleClickShowPassword}
//                     edge="end"
//                     onMouseDown={handleMouseDownPassword}
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               }
//             />
//             <FormHelperText>
//               {formik.touched.password && formik.errors.password}
//             </FormHelperText>
//           </FormControl>

//           <Button
//             type="submit"
//             onClick={formik.handleSubmit}
//             isDisabled={formik.isSubmitting}
//             isLoading={isRefreshing}
//             fullWidth
//           >
//             {isRefreshing ? <Loader size={30} thickness={4} /> : 'Next'}
//           </Button>
//         </RegisterForm>

//         <HelperContainer>
//           <TitleH5>
//             Already have an account?
//             <RegisterLink to="/login">Login</RegisterLink>
//           </TitleH5>
//         </HelperContainer>
//       </RegisterContainer>
//     </RegisterSection>
//   );
// };

// export default RegisterFirstStep;
