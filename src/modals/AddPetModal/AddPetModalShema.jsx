import * as yup from 'yup';

const regexName = /^[A-Za-zА-Яа-яёЁЇїІіЄєҐґ\s\-']+$/;
const regexBreed = /^[A-Za-zА-Яа-яёЁЇїІіЄєҐґ\s\-']+$/;

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
const FILE_SIZE = 1000000;

const firstStepFieldsShape = {
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(regexName, 'Can only contain letters')
    .required('Name is empty'),
  date: yup.date(),
  breed: yup
    .string()
    .min(2)
    .max(24)
    .matches(regexBreed, 'Can only contain letters'),
};

const secondStepFieldsShape = {
  petsImageUrl: yup
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
  comments: yup.string().min(8).max(120),
  // .required('Comment is empty'),
};

export const addPetFirstStepSchema = yup.object().shape(firstStepFieldsShape);

export const addPetSubmitSchema = yup
  .object()
  .shape({ ...firstStepFieldsShape, ...secondStepFieldsShape });
