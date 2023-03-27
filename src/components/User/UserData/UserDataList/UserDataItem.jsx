import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
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

export const UserDataItem = ({ inputName, inputValue }) => {
  const [currentValue, setCurrentValue] = useState('');
  const [isInput, setIsInput] = useState(true);

  const currentName = inputName.toLowerCase();

  useEffect(() => {
    if (inputValue !== '') setCurrentValue(inputValue);
  }, [inputValue]);

  const formik = useFormik({
    initialValues: {
      [currentName]: currentValue,
    },
    validationSchema: inputSchemas[currentName + 'Schema'],
    onSubmit: values => {
      setIsInput(!isInput);
      setCurrentValue(values[currentName]);
      formik.resetForm();
    },
  });

  const disabledInputsHandler = () => {
    setIsInput(!isInput);
  };
  return (
    <SC.UserDataListItem>
      {`${inputName}:`}
      {isInput && currentValue !== '' ? (
        <SC.UserDataListWrapper>
          <SC.UserDataListContent>{currentValue}</SC.UserDataListContent>
          <SC.UserDataPencilIcon>
            <HiPencil onClick={disabledInputsHandler} />
          </SC.UserDataPencilIcon>
        </SC.UserDataListWrapper>
      ) : (
        <SC.UserDataListWrapper>
          <form onSubmit={formik.handleSubmit}>
            <SC.UserDataListInput
              id={inputName.toLowerCase()}
              name={inputName.toLowerCase()}
              type="text"
              onChange={formik.handleChange}
              value={formik.values[inputName.toLowerCase()]}
            />
            <SC.UserDataPencilIcon type="submit">
              <MdOutlineDone onClick={() => setIsInput(!isInput)} />
            </SC.UserDataPencilIcon>
          </form>
        </SC.UserDataListWrapper>
      )}
    </SC.UserDataListItem>
  );
};
