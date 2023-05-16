import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { updateUserProfile } from 'services/profileApi';
import { useFormik } from 'formik';
import selector from 'redux/auth/auth-selectors';
import * as yup from 'yup';
import { MdOutlineDone } from 'react-icons/md';
import { HiPencil } from 'react-icons/hi';
import CalendarDatePicker from 'components/CalendarDatePicker/CalendarDatePicker';
import * as SC from 'components/User/UserData/UserDataList/UserDataList.styled';
import dayjs from 'dayjs';

const regexPhoneNumber = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
const regexAdress = /^(?:(?:\w+-\w+)+|(?:\w+)+),\s(?:(?:\w+-\w+)+|(?:\w+)+)$/;
const regexEmail = /^[^-][a-zA-Z0-9_.-]{1,64}@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const regexName = /^([a-zA-Zа-яА-ЯёЁ]+)$/;

const inputSchemas = {
  nameSchema: yup.object({
    name: yup.string().matches(regexName, 'Name must contain only letters'),
  }),
  emailSchema: yup.object({
    email: yup
      .string()
      .email('Invalid email adress')
      .required('Required')
      .min(10)
      .max(63)
      .matches(regexEmail, 'Invalid email adress'),
  }),
  birthdaySchema: yup.object({ birthday: yup.date() }),
  phoneSchema: yup.object({
    phone: yup
      .string()
      .max(13, 'Must be 12 numbers or less')
      .matches(regexPhoneNumber, 'Mobile phone format +380xxxxxxxxx'),
  }),
  citySchema: yup.object({
    city: yup.string().matches(regexAdress, 'Must be in format City, Region'),
  }),
};

export const UserDataItem = ({
  inputName,
  inputValue,
  changeInputName,
  setChangeInputName,
}) => {
  const token = useSelector(selector.getToken);
  const currentName = inputName.toLowerCase();
  const [currentValue, setCurrentValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const formik = useFormik({
    initialValues: {
      [currentName]: currentValue,
    },
    validationSchema: inputSchemas[currentName + 'Schema'],
    onSubmit: values => {
      setChangeInputName('');
      setCurrentValue(values[currentName]);
      setIsActive(false);
      formik.resetForm();
      updateUserProfile(token, values);
    },
  });

  useEffect(() => {
    if (inputValue !== '') setCurrentValue(inputValue);
  }, [inputValue]);

  useEffect(() => {
    if (changeInputName === inputName || changeInputName === '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [changeInputName, inputName]);

  const disabledInputsHandler = async () => {
    formik.setFieldValue(currentName, currentValue);

    setChangeInputName(inputName);
  };

  return (
    <SC.UserDataListItem>
      <SC.UserDataListItemName>{`${inputName}:`}</SC.UserDataListItemName>
      {!isActive || changeInputName === '' ? (
        <SC.UserDataListWrapper>
          <SC.UserDataListContent title={currentValue}>
            {currentValue?.length > 20
              ? currentValue.slice(0, 20) + '...'
              : currentValue}
          </SC.UserDataListContent>
          <SC.UserDataPencilIcon
            disabled={!isActive}
            onClick={disabledInputsHandler}
          >
            <HiPencil />
          </SC.UserDataPencilIcon>
        </SC.UserDataListWrapper>
      ) : (
        <SC.UserDataListWrapper>
          <form onSubmit={formik.handleSubmit}>
            {inputName === 'Birthday' ? (
              <CalendarDatePicker
                onChange={value => {
                  console.log('value', value);
                  formik.setFieldValue('birthday', dayjs(value.$d), false);
                }}
              />
            ) : (
              <SC.UserDataListInput
                id={currentName}
                name={currentName}
                type="text"
                onChange={formik.handleChange}
                value={formik.values[currentName]}
              />
            )}
            <SC.UserDataPencilIcon type="submit" onClick={formik.handleSubmit}>
              <MdOutlineDone />
            </SC.UserDataPencilIcon>
            {formik.errors[currentName] && (
              <SC.UserDataError>{formik.errors[currentName]}</SC.UserDataError>
            )}
          </form>
        </SC.UserDataListWrapper>
      )}
    </SC.UserDataListItem>
  );
};
