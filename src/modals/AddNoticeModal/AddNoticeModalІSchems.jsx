import * as yup from 'yup';

const regexPrice = /(^[1-9])(\d*)$/;
const regexAdress = /^(?:(?:\w+-\w+)+|(?:\w+)+),\s(?:(?:\w+-\w+)+|(?:\w+)+)$/;
const regexTitle = /^(?!(?:.*?\d){3})(.+)$/u;
const regexName = /^[A-Za-zА-Яа-яёЁЇїІіЄєҐґ\s\-']+$/;
const regexBreed = /^[A-Za-zА-Яа-яёЁЇїІіЄєҐґ\s\-']+$/;

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export const NOTICE_TYPES = {
  LOST_FOUND: 'lost-found',
  GOOD_HANDS: 'for-free',
  SELL: 'sell',
};

const FILE_SIZE = 1000000;

const firstStepFieldsShape = {
  category: yup
    .string()
    .oneOf(Object.values(NOTICE_TYPES))
    .required('Category is empty'),
  title: yup
    .string()
    .min(2)
    .max(48)
    .matches(regexTitle, 'Can contain only two digits')
    .required('Title is empty'),
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(regexName, 'Can only contain letters')
    .required('Name is empty'),
  birthdate: yup.date(),
  breed: yup
    .string()
    .min(2)
    .max(24)
    .matches(regexBreed, 'Can only contain letters'),
};

const secondStepFieldsShape = {
  sex: yup.string().oneOf(['male', 'female']).required('Sex is empty'),
  location: yup
    .string()
    .matches(regexAdress, 'Must be in format City, Region')
    .required('Required'),
  price: yup.string().when('category', {
    is: 'sell',
    then: schema =>
      schema
        .matches(regexPrice, 'Must be a positive integer number')
        .required('Required'),
    otherwise: schema => schema.notRequired(),
  }),
  imgUrl: yup
    .mixed()
    .test(
      'fileSize',
      'Only documents up to 1MB are permitted',
      value => value === null || (value && value.size <= FILE_SIZE)
    )
    .test(
      'fileFormat',
      'Unsupported file type',
      value =>
        value === null || (value && SUPPORTED_FORMATS.includes(value.type))
    )
    .nullable(),
  comments: yup.string().min(8).max(120).required('comment is empty'),
};

export const addNoticeFirstStepSchema = yup
  .object()
  .shape(firstStepFieldsShape);

export const addNoticeSubmitSchema = yup
  .object()
  .shape({ ...firstStepFieldsShape, ...secondStepFieldsShape });
