import * as Yup from 'yup';

const regexPassword = /^\S*$/;
const regexPhoneNumber = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
const regexAdress = /^(?:(?:\w+-\w+)+|(?:\w+)+),\s(?:(?:\w+-\w+)+|(?:\w+)+)$/;
const regexEmail = /^[^-][a-zA-Z0-9_.-]{1,64}@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const regexName = /^([a-zA-Zа-яА-ЯёЁ]+)$/;

export const registerYupSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email adress')
    .required('Required')
    .min(10)
    .max(63)
    .matches(regexEmail, 'Invalid email adress'),
  password: Yup.string()
    .min(7, 'Must be 7 characters or more')
    .max(32, 'Must be 32 characters or less')
    .matches(regexPassword, 'Must not contain spaces')
    .required('Required'),
  confirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match')
    .required('Required'),
  name: Yup.string().matches(regexName, 'Name must contain only letters'),
  address: Yup.string().matches(regexAdress, 'Must be in format City, Region'),
  phone: Yup.string()
    .max(13, 'Must be 12 numbers or less')
    .matches(
      regexPhoneNumber,
      'Mobile phone must include numbers in format +380xxxxxxxxx'
    ),
});

export const loginYupSchema = Yup.object({
  email: Yup.string().email('Invalid email adress').required('Required'),
  password: Yup.string()
    .min(7, 'Must be 7 characters or more')
    .max(32, 'Must be 32 characters or less')
    .required('Required'),
});
// / .matches(regexPassword, 'Must not contain spaces')

export const resetYupSchema = Yup.object({
  email: Yup.string().email('Invalid email adress').required('Required'),
});

export const resetPasswordYupSchema = Yup.object({
  password: Yup.string()
    .min(7, 'Must be 7 characters or more')
    .max(32, 'Must be 32 characters or less')
    .matches(regexPassword, 'Must not contain spaces')
    .required('Required'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
});
