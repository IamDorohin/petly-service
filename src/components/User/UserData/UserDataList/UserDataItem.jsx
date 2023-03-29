import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { updateUserProfile } from 'services/profileApi';
import { useFormik } from 'formik';
import selector from 'redux/auth/auth-selectors';
import * as yup from 'yup';
import { MdOutlineDone } from 'react-icons/md';
import { HiPencil } from 'react-icons/hi';
import * as SC from 'components/User/UserData/UserDataList/UserDataList.styled';

const inputSchemas = {
  nameSchema: yup.object({ name: yup.string().min(3).required() }),
  emailSchema: yup.object({ email: yup.string().min(6).max(30) }),
  birthdaySchema: yup.object({ birthday: yup.string() }),
  phoneSchema: yup.object({ phone: yup.string() }),
  citySchema: yup.object({ city: yup.string() }),
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
    setChangeInputName(inputName);
  };

  const inputHandleChange = e => {
    formik.handleChange(e);
    setCurrentValue(e.target.value);
  };

  const btnSubmitHandler = e => {
    if (formik.isValid) {
      formik.handleSubmit();
      setChangeInputName('');
      setIsActive(false);
    }
  };

  return (
    <SC.UserDataListItem>
      {`${inputName}:`}
      {!isActive || changeInputName === '' ? (
        <SC.UserDataListWrapper>
          <SC.UserDataListContent>{currentValue}</SC.UserDataListContent>
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
            <SC.UserDataListInput
              id={currentName}
              name={currentName}
              type="text"
              onChange={inputHandleChange}
              value={currentValue}
            />
            <SC.UserDataPencilIcon type="submit" onClick={btnSubmitHandler}>
              <MdOutlineDone />
            </SC.UserDataPencilIcon>
          </form>
        </SC.UserDataListWrapper>
      )}
    </SC.UserDataListItem>
  );
};
